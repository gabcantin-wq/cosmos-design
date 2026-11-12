"""Static-page and headless interaction checks. No user desktop or live data used.

Requires Playwright with Chromium. The browser receives repository files through
request routing; this checks the exact static artifacts independently of hosting.
The deployed HTTP responses must be checked separately after publication.
"""
from pathlib import Path
from urllib.parse import urlparse, unquote
from html.parser import HTMLParser
import argparse
import hashlib
import json
import mimetypes
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[2]
DOCS = ROOT / "docs"
BASE = "http://prism.test"

class Links(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids, self.targets = [], []
    def handle_starttag(self, tag, attrs):
        values = dict(attrs)
        if "id" in values:
            self.ids.append(values["id"])
        for key in ("src", "href"):
            if values.get(key):
                self.targets.append(values[key])

def file_for(url):
    path = (DOCS / unquote(urlparse(url).path).lstrip("/")).resolve()
    if not path.is_relative_to(DOCS.resolve()):
        raise ValueError("outside docs")
    return path / "index.html" if path.is_dir() else path

def static_checks():
    parsed = {}
    def read(path):
        if path not in parsed:
            parser = Links()
            parser.feed(path.read_text(encoding="utf-8"))
            assert len(parser.ids) == len(set(parser.ids)), f"duplicate ids: {path}"
            parsed[path] = parser
        return parsed[path]
    for route in ("/", "/technique/"):
        source = file_for(BASE + route)
        parser = read(source)
        for target in parser.targets:
            url = urlparse(target)
            if url.scheme or url.netloc:
                continue
            path = file_for(BASE + url.path) if url.path else source
            assert path.exists(), f"missing asset/link: {target}"
            if url.fragment:
                assert url.fragment in read(path).ids, f"missing anchor: {target}"
    manifest = json.loads((DOCS / "assets/prism/images.json").read_text(encoding="utf-8"))
    for entry in manifest:
        data = (DOCS / "assets/prism" / entry["file"]).read_bytes()
        assert hashlib.sha256(data).hexdigest() == entry["sha256"]
        assert len(data) == entry["bytes"]
    return len(manifest)

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--artifacts", required=True)
    args = parser.parse_args()
    out = Path(args.artifacts)
    out.mkdir(parents=True, exist_ok=True)
    images = static_checks()
    unexpected = []
    def serve(route):
        request = route.request
        url = urlparse(request.url)
        if url.hostname != "prism.test" or request.method != "GET" or any(x in url.query for x in ("mission=", "context=", "result=")):
            unexpected.append(request.url)
            return route.abort()
        path = file_for(request.url)
        if not path.is_file():
            unexpected.append(request.url)
            return route.fulfill(status=404, body="Not found")
        route.fulfill(status=200, body=path.read_bytes(), content_type=mimetypes.guess_type(path)[0] or "application/octet-stream")

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={"width":1440,"height":960}, device_scale_factor=1)
        context.route("**/*", serve)
        page = context.new_page()
        errors = []
        page.on("pageerror", lambda error: errors.append(str(error)))
        def load(route):
            page.goto(BASE + route, wait_until="networkidle")
            page.evaluate("document.fonts.ready")
            assert page.locator("html").get_attribute("lang") == "en"
            page.add_style_tag(content="html{scroll-behavior:auto!important}")
            page.evaluate("document.querySelectorAll('img[src]').forEach(i=>i.loading='eager')")
            page.wait_for_function("[...document.querySelectorAll('img[src]')].every(i=>i.complete && i.naturalWidth>0)")
            page.evaluate("Promise.all([...document.querySelectorAll('img[src]')].map(i=>i.decode()))")
        for route, label in (("/","home"),("/technique/","technical")):
            for width, height in ((1440,960),(768,1024),(390,844),(320,740)):
                page.set_viewport_size({"width":width,"height":height})
                load(route)
                assert not page.evaluate("document.documentElement.scrollWidth>innerWidth"), f"overflow {label} {width}"
                if width in (1440,390):
                    kind = "desktop" if width == 1440 else "mobile"
                    page.screenshot(path=str(out / f"{label}-{kind}-top.png"))
                    for y in range(0, page.evaluate("document.body.scrollHeight"), 650):
                        page.evaluate("(y)=>scrollTo(0,y)", y)
                        page.wait_for_timeout(80)
                    page.evaluate("scrollTo(0,0)")
                    page.wait_for_timeout(150)
                    page.screenshot(path=str(out / f"{label}-{kind}-full.png"), full_page=True)
                    if label == "home" and width == 1440:
                        page.locator("#memoire").scroll_into_view_if_needed()
                        page.screenshot(path=str(out / "home-memory-desktop.png"))
                        page.locator("#cooperation").scroll_into_view_if_needed()
                        page.screenshot(path=str(out / "home-cooperation-desktop.png"))
                print(f"PASS {label} {width}px: images, fonts, overflow", flush=True)
        page.set_viewport_size({"width":1440,"height":960})
        load("/")
        page.locator("#memory-next-tab").click()
        assert page.locator("#memory-next").is_visible() and not page.locator("#memory-first").is_visible()
        page.locator("#memory-next-tab").press("ArrowLeft")
        assert page.locator("#memory-first").is_visible()
        page.locator("[data-mission-example]").first.click()
        assert "know-how" in page.locator("#mission-name").input_value()
        page.locator("#mission-context").fill("SYNTHETIC_PRIVATE_CONTEXT — team and tools")
        page.locator("#mission-result").fill("SYNTHETIC_PRIVATE_RESULT — verifiable result")
        page.locator("#mission-form button[type=submit]").click()
        assert page.locator("#mission-output").is_visible()
        assert "SYNTHETIC_PRIVATE_CONTEXT" in page.locator("#mission-text").input_value()
        with page.expect_download() as event:
            page.locator("#download-mission").click()
        event.value.save_as(str(out / "mission-test.txt"))
        assert "SYNTHETIC_PRIVATE_RESULT" in (out / "mission-test.txt").read_text(encoding="utf-8-sig")
        assert urlparse(page.url).query == ""
        page.locator("#mission-name").fill("   ")
        page.locator("#mission-form button[type=submit]").click()
        assert not page.locator("#mission-name").evaluate("e=>e.checkValidity()")
        page.set_viewport_size({"width":390,"height":844})
        load("/")
        assert not page.locator("#site-navigation").is_visible()
        page.locator(".menu-toggle").click()
        assert page.locator("#site-navigation").is_visible()
        page.keyboard.press("Escape")
        assert not page.locator("#site-navigation").is_visible()
        load("/technique/")
        link = page.locator("[data-lightbox]").first
        link.click()
        assert page.locator(".image-dialog").is_visible()
        page.wait_for_function("document.querySelector('.dialog-image').naturalWidth>0")
        page.keyboard.press("Escape")
        assert not page.locator(".image-dialog").is_visible()
        assert link.evaluate("e=>e===document.activeElement")
        for mechanism in ("deduplication", "mitosis", "egg"):
            page.locator(f'.lifecycle-map a[href="#{mechanism}"]').click()
            assert urlparse(page.url).fragment == mechanism
            assert page.locator(f"#{mechanism} .phase-list li").count() == 3
        page.locator("details").first.locator("summary").click()
        assert page.locator("details").first.get_attribute("open") is not None
        context.close()
        for mode in ("no_javascript", "script_unavailable"):
            fallback = browser.new_context(java_script_enabled=mode != "no_javascript")
            fallback.route("**/*", serve)
            if mode == "script_unavailable":
                fallback.route("**/assets/prism/site.js*", lambda route: route.abort())
            f = fallback.new_page()
            f.goto(BASE, wait_until="networkidle")
            assert f.locator("#mission-name").is_disabled()
            assert f.locator("#mission-form button[type=submit]").is_disabled()
            assert f.locator("#mission-fallback").is_visible()
            assert f.locator("#memory-first").is_visible() and f.locator("#memory-next").is_visible()
            assert f.locator("#site-navigation").is_visible()
            assert urlparse(f.url).query == ""
            print(f"PASS {mode}: no input or submission, readable memory and navigation", flush=True)
            fallback.close()
        assert not errors, errors
        assert not unexpected, unexpected
        browser.close()
    result = {"status":"PASS", "mode":"headless Chromium with exact static files routed from repository", "viewports":[1440,768,390,320], "pages":["/","/technique/"], "original_images_verified":images, "checks":["links/anchors/unique IDs", "all page images decoded", "responsive overflow", "screenshots", "keyboard tabs", "English page language", "three evolution mechanisms and phase links", "mission example", "local form generation and download", "blank input validation", "mobile menu/Escape", "image dialog/focus restoration", "disclosure panels", "JavaScript disabled and unavailable", "no unexpected outgoing request or form query", "no JavaScript errors"]}
    (out / "qa.json").write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(result, ensure_ascii=False), flush=True)

if __name__ == "__main__":
    main()
