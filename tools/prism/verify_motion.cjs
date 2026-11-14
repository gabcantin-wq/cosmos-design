'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '../..');
const engine = require('../../docs/assets/prism/prism-motion.js');
const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, 'animation-kit.json'), 'utf8'));
let states = 0, variants = 0, maximumPackets = 0;
for (const scene of Object.values(engine.scenes)) {
  assert.equal(scene.phases[0].from, 0);
  assert.equal(scene.phases.at(-1).to, scene.duration);
  assert.equal(new Set(scene.routes.map(r => r.id)).size, scene.routes.length);
  scene.phases.forEach((p, i) => {
    assert.ok(p.to > p.from);
    if (i) assert.equal(scene.phases[i - 1].to, p.from);
    for (const lang of ['fr', 'en']) assert.ok(p.title[lang] && p.copy[lang]);
    for (const node of p.focus) assert.ok(scene.nodes[node], node);
  });
  scene.routes.forEach(route => {
    assert.ok(route.end > route.start && route.start >= 0 && route.end <= scene.duration);
    assert.ok(/^M\s/.test(route.d), route.id);
    assert.ok(!/NaN|undefined/.test(route.d));
    if (route.variants) route.variants.forEach(v => assert.ok(scene.variants.some(x => x.id === v)));
  });
  for (const variant of scene.variants) {
    variants++;
    for (let tick = 0; tick <= Math.round(scene.duration * 50); tick++) {
      const time = tick / 50, state = engine.evaluate(scene, time, variant.id);
      states++;
      assert.ok(state.progress >= 0 && state.progress <= 1);
      assert.ok(state.focus.every(n => scene.nodes[n]));
      const moving = state.tracks.filter(t => t.moving).length;
      maximumPackets = Math.max(maximumPackets, moving);
      assert.ok(moving <= 3, scene.id + ' exceeds three packets at ' + time);
      if (['memory-reuse', 'spectral-memory'].includes(scene.id)) {
        if (variant.id === 'changed') assert.ok(!state.tracks.some(t => t.id === 'reuse'));
        if (time < scene.phases[2].from) assert.ok(!state.tracks.some(t => t.id === 'store'));
        if (time < scene.phases[5].from) assert.ok(!state.tracks.some(t => t.id === 'reuse'));
      }
      if (scene.id === 'agent-cooperation' && variant.id === 'declined')
        assert.ok(!state.tracks.some(t => t.id === 'adopt-local' || t.id === 'application-receipt'));
      if (scene.id === 'ray-federation' && variant.id === 'limited')
        assert.ok(!state.tracks.some(t => t.id === 'blue-violet'));
      if (scene.id === 'spectral-work' && variant.id === 'enough')
        assert.ok(!state.tracks.some(t => t.id === 'next-context'));
    }
    assert.ok(engine.evaluate(scene, scene.duration, variant.id).complete);
  }
}
for (const item of manifest.scenes) {
  const bytes = fs.readFileSync(path.join(root, 'docs/assets/prism', path.basename(item.file)));
  assert.equal(bytes.length, item.bytes);
  assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'), item.sha256);
  assert.equal(bytes.readUInt32BE(16), item.width);
  assert.equal(bytes.readUInt32BE(20), item.height);
}
const cover = engine.fitTransform(800, 500, 1914, 822, 'cover', '60% 50%');
assert.ok(Math.abs(cover.sx - 500 / 822) < 1e-9);
assert.ok(Math.abs(cover.x - (800 - 1914 * 500 / 822) * .6) < 1e-9);
assert.equal(cover.y, 0);
const contain = engine.fitTransform(800, 500, 1914, 822, 'contain', 'center center');
assert.equal(contain.x, 0);
assert.ok(contain.y > 0);
assert.throws(() => engine.fitTransform(0, 1, 1, 1));
assert.throws(() => engine.evaluate('memory-reuse', NaN));
assert.throws(() => engine.evaluate('memory-reuse', 1, 'unknown'));
const report = {status:'passed', scenes:manifest.scenes.length, variants, states_checked:states, maximum_concurrent_packets:maximumPackets, original_assets:'seven PNG hashes and dimensions match', conditions:'reuse, adoption, federation scope and iteration stop verified', geometry:'cover 60% centre, contain and invalid dimensions checked'};
process.stdout.write(JSON.stringify(report, null, 2) + '\n');
