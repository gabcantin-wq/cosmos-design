"""Headless acceptance of the seven integrated scenes; artifacts stay external.

Uses exact local site resources by default. --live verifies the published site
over ordinary TLS, without interception or ignored certificate errors.
"""
from pathlib import Path
import argparse
import json
import mimetypes
from urllib.parse import urlparse
from playwright.sync_api import sync_playwright
from check import BASE, file_for, static_checks

PAGES = {
    "/": ["prism-hero", "memory-reuse", "ray-federation", "development-cycle"],
    "/technique/": ["agent-cooperation", "spectral-memory", "spectral-work"],
}


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--artifacts", type=Path, required=True)
    parser.add_argument("--live", action="store_true")
    args = parser.parse_args()
    args.artifacts.mkdir(parents=True, exist_ok=True)
    if not args.live:
        static_checks()
    base = "https://prismintelligence.ai" if args.live else BASE
    unexpected, errors, failed, checks = [], [], [], []

    def serve(route):
        if urlparse(route.request.url).hostname != "prism.test" or route.request.method != "GET":
            unexpected.append(route.request.url)
            return route.abort()
        path = file_for(route.request.url)
        assert path.is_file(), path
        route.fulfill(body=path.read_bytes(), content_type=mimetypes.guess_type(path)[0] or "application/octet-stream")

    def configure(context):
        if not args.live:
            context.route("**/*", serve)
        context.on("page", lambda page: page.on("pageerror", lambda error: errors.append(str(error))))

    def call(page, scene, expression):
        return page.evaluate("([scene,expression]) => {const c=document.querySelector('[data-prism-scene=\"'+scene+'\"]').__prismMotion; return eval(expression)}", [scene, expression])

    def state(page, scene):
        return call(page, scene, "c.getState()")

    def load(page, route):
        page.goto(base + route, wait_until="networkidle")
        page.evaluate("document.fonts.ready")
        page.add_style_tag(content="html{scroll-behavior:auto!important}")
        page.evaluate("document.querySelectorAll('img[src]').forEach(i=>i.loading='eager')")
        page.wait_for_function("[...document.querySelectorAll('img[src]')].every(i=>i.complete&&i.naturalWidth>0)")
        page.wait_for_function("[...document.querySelectorAll('[data-prism-scene]')].every(h=>h.__prismMotion)")
        assert page.locator("[data-prism-scene]").count() == len(PAGES[route])

    def show(page, scene):
        host = page.locator(f'[data-prism-scene="{scene}"]')
        host.scroll_into_view_if_needed()
        page.wait_for_function("id=>document.querySelector('[data-prism-scene=\"'+id+'\"]').__prismMotion.getState().visibility>=.15", arg=scene)
        return host

    def geometry(host):
        values = host.evaluate("""h => {
            const i=h.querySelector('img'),o=h.querySelector('.pm-overlay'),a=i.getBoundingClientRect(),b=o.getBoundingClientRect(),s=getComputedStyle(i);
            const n=k=>parseFloat(s[k])||0;
            const l=n('borderLeftWidth')+n('paddingLeft'),r=n('borderRightWidth')+n('paddingRight');
            const t=n('borderTopWidth')+n('paddingTop'),d=n('borderBottomWidth')+n('paddingBottom');
            const w=a.width-l-r,z=a.height-t-d;
            const scene=PrismScenes[h.dataset.prismScene];
            const expected=PrismMotion.fitTransform(w,z,scene.width,scene.height,s.objectFit,s.objectPosition);
            const m=o.querySelector('g').transform.baseVal.consolidate().matrix;
            return {box:[a.x+l-b.x,a.y+t-b.y,w-b.width,z-b.height],matrix:[m.a-expected.sx,m.d-expected.sy,m.e-expected.x,m.f-expected.y],mask:s.maskImage===getComputedStyle(o).maskImage};
        }""")
        assert max(abs(v) for v in values["box"]) < .08, values
        assert max(abs(v) for v in values["matrix"]) < .03, values
        assert values["mask"], values
        return values

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width":1440,"height":1080})
        configure(context)
        page = context.new_page()
        page.on("requestfailed", lambda request: failed.append(request.url))
        for width in (1440, 390, 320):
            page.set_viewport_size({"width":width,"height":1000})
            for route, scenes in PAGES.items():
                load(page, route)
                for scene in scenes:
                    host = show(page, scene)
                    page.evaluate("PrismMotion.pauseAll()")
                    call(page, scene, "c.syncGeometry();c.seek(0)")
                    alignment = geometry(host)
                    control = page.locator('#' + host.get_attribute('data-prism-controls'))
                    assert control.locator('button').count() >= 2
                    assert not control.evaluate("e=>!!e.closest('a')")
                    play = control.locator('.pm-button-primary')
                    # Actual keyboard action, followed by real animation frames.
                    play.focus()
                    page.keyboard.press('Enter')
                    page.wait_for_timeout(350)
                    assert state(page,scene)['running'], (scene,width,state(page,scene))
                    assert .1 < state(page,scene)['time'] < 1, state(page,scene)
                    page.keyboard.press('Space')
                    paused = state(page,scene)['time']
                    page.wait_for_timeout(100)
                    assert not state(page,scene)['running'] and state(page,scene)['time']==paused
                    duration = page.evaluate('id=>PrismScenes[id].duration', scene)
                    call(page,scene,f'c.seek({duration*.45})')
                    if width != 320:
                        if scene == 'prism-hero':
                            page.screenshot(path=str(args.artifacts/f'{scene}-{width}.png'))
                        else:
                            host.screenshot(path=str(args.artifacts/f'{scene}-{width}.png'))
                    # Replay resets, completion stops and never loops.
                    control.locator('.pm-playback button').nth(1).click()
                    assert state(page,scene)['time'] < .8 and state(page,scene)['running']
                    call(page,scene,f'c.seek({duration-.05});c.play()')
                    page.wait_for_timeout(230)
                    assert state(page,scene)['complete'] and not state(page,scene)['running']
                    page.wait_for_timeout(100)
                    assert state(page,scene)['time'] == duration
                    # Offscreen pause is durable when returning to the image.
                    call(page,scene,'c.restart()')
                    page.evaluate('scrollTo(0,document.body.scrollHeight)')
                    page.wait_for_function("id=>!document.querySelector('[data-prism-scene=\"'+id+'\"]').__prismMotion.getState().running", arg=scene)
                    stopped=state(page,scene)['time']
                    show(page,scene)
                    page.wait_for_timeout(100)
                    assert not state(page,scene)['running'] and state(page,scene)['time']==stopped
                    if route == '/technique/':
                        control.locator('summary').click()
                        assert control.locator('.pm-phase-copy').is_visible()
                        control.locator('.pm-step').nth(2).click()
                        assert state(page,scene)['phase']==2
                        control.locator('.pm-variants button').nth(1).click()
                        blocked={'agent-cooperation':'adopt-local','spectral-memory':'reuse','spectral-work':'next-context'}[scene]
                        call(page,scene,f'c.seek({duration})')
                        assert blocked not in [t['id'] for t in state(page,scene)['tracks']]
                        assert not page.evaluate('document.documentElement.scrollWidth>innerWidth'), (scene,width)
                        if width != 320:
                            control.screenshot(path=str(args.artifacts/f'{scene}-controls-{width}.png'))
                        control.locator('summary').click()
                        # Overlay passes pointer events through to original lightbox.
                        host.click(position={'x':25,'y':25})
                        assert page.locator('.image-dialog').is_visible()
                        page.wait_for_function("document.querySelector('.dialog-image').naturalWidth>0")
                        assert not page.evaluate("[...document.querySelectorAll('[data-prism-scene]')].some(h=>h.__prismMotion.getState().running)")
                        page.keyboard.press('Escape')
                        assert host.evaluate('e=>document.activeElement===e')
                    assert not page.evaluate('document.documentElement.scrollWidth>innerWidth'), (scene,width)
                    checks.append({'scene':scene,'width':width,'geometry':alignment,'playback_keyboard_replay_completion_offscreen':'passed'})
                    print(f'PASS {scene} {width}px: geometry, keyboard, playback, offscreen, fallback links',flush=True)
                assert page.evaluate("(()=>{const ids=[...document.querySelectorAll('[id]')].map(e=>e.id);return new Set(ids).size===ids.length})()")
        # Autoplay genuinely starts only on first visibility; reduced-motion is
        # tested on fresh pages, rather than on already-consumed autoplay state.
        page.set_viewport_size({'width':1440,'height':1000})
        for route,scenes in PAGES.items():
            page.close()
            page=context.new_page()
            load(page,route)
            for scene in scenes:
                show(page,scene)
                page.wait_for_function("id=>document.querySelector('[data-prism-scene=\"'+id+'\"]').__prismMotion.getState().running",arg=scene)
                assert page.evaluate("[...document.querySelectorAll('[data-prism-scene]')].filter(h=>h.__prismMotion.getState().running).length") == 1
            page.emulate_media(reduced_motion='reduce')
            load(page,route)
            for scene in scenes:
                show(page,scene)
                assert state(page,scene)['time']==0 and not state(page,scene)['running']
                assert call(page,scene,'c.play()') # voluntary motion is still available
                page.wait_for_timeout(80)
                call(page,scene,"c.pause('user')")
            page.emulate_media(reduced_motion='no-preference')
        # Exercise the document-visibility handler deterministically. Headless
        # Chromium has no user tab strip; this is an event-contract test.
        load(page,'/')
        page.evaluate("Object.defineProperty(document,'hidden',{configurable:true,get:()=>true});document.dispatchEvent(new Event('visibilitychange'))")
        assert not state(page,'prism-hero')['running'] and state(page,'prism-hero')['reason']=='hidden'
        page.evaluate("delete document.hidden;document.dispatchEvent(new Event('visibilitychange'))")
        assert not state(page,'prism-hero')['running']
        context.close()
        for mode in ('no-javascript','engine-unavailable'):
            fallback=browser.new_context(java_script_enabled=mode!='no-javascript',viewport={'width':390,'height':844})
            configure(fallback)
            if mode=='engine-unavailable':
                fallback.route('**/assets/prism/prism-motion.js*',lambda route:route.abort())
            f=fallback.new_page()
            for route,scenes in PAGES.items():
                f.goto(base+route,wait_until='networkidle')
                assert f.locator('.pm-overlay,.pm-ui').count()==0
                for scene in scenes:
                    image=f.locator(f'[data-prism-scene="{scene}"] img')
                    image.scroll_into_view_if_needed()
                    assert image.is_visible() and image.get_attribute('alt')
                    f.wait_for_function('id=>document.querySelector(\'[data-prism-scene="\'+id+\'"] img\').naturalWidth>0',arg=scene)
                assert not f.evaluate('document.documentElement.scrollWidth>innerWidth')
            fallback.close()
        browser.close()
    assert not unexpected,unexpected
    assert not errors,errors
    assert not failed,failed
    report={'status':'passed','mode':'live HTTPS' if args.live else 'exact local static resources','checks':checks,'reduced_motion':'passed','single_active_scene':'passed','once_visible_autoplay':'passed','hidden_document_event_contract':'passed (synthetic event; headless has no user tab strip)','lightbox_keyboard_focus':'passed','no_js_and_engine_failure_fallback':'passed','errors':errors,'unexpected_requests':unexpected,'failed_requests':failed}
    (args.artifacts/'motion-report.json').write_text(json.dumps(report,indent=2)+'\n',encoding='utf-8')
    print(json.dumps({'status':'passed','scene_viewports':len(checks),'report':str(args.artifacts/'motion-report.json'),'mode':report['mode']}),flush=True)


if __name__=='__main__':
    main()
