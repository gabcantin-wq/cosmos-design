import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Line2 } from 'three/addons/lines/Line2.js';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';
import { LineGeometry } from 'three/addons/lines/LineGeometry.js';

const canvas = document.getElementById('scene');
const descPanel = document.getElementById('description');
const toggleBtn = document.getElementById('toggle-description');
const phaseLabel = document.getElementById('phase-label');
const phaseText = phaseLabel.querySelector('.v2-phase-text');
const labelTx = document.getElementById('label-tx');
const labelTxp1 = document.getElementById('label-txp1');
const labelTxp2 = document.getElementById('label-txp2');

const COLOR_DARK = new THREE.Color(0x8a7ab0);     // gris-violet : dark energy
const COLOR_LIGHT = new THREE.Color(0xffd180);    // doré : manifestation
const TEXT_DARK = 'dark energy · e addressing';
const TEXT_LIGHT = 'masse · vitesse c · manifestation dans t=x';

// Fenêtre de manifestation : ~1s avant + 1s après le retour (PERIOD = 8.5s → 1s ≈ 0.118 de phase)
const MANIF_BEFORE = 0.88;
const MANIF_AFTER = 0.12;

const scene = new THREE.Scene();
scene.background = null;

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.05, 200);
camera.position.set(0, 2.4, 9.5);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight, false);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.minDistance = 0.2;
controls.maxDistance = 25;
controls.target.set(0, 0, 0);

scene.add(new THREE.AmbientLight(0xffffff, 0.25));
const keyLight = new THREE.DirectionalLight(0xffd9a0, 0.55);
keyLight.position.set(4, 6, 4);
scene.add(keyLight);
const fillLight = new THREE.DirectionalLight(0x82b1ff, 0.35);
fillLight.position.set(-6, -3, -2);
scene.add(fillLight);

// =====================================================
// STRUCTURE T — FIXE
// =====================================================

const CONE_HEIGHT = 6;
const CONE_TOP_RADIUS = 4.2;
const CONE_BOTTOM_RADIUS = 0.04;
const MEMBRANE_COUNT = 9;

const tGroup = new THREE.Group();
scene.add(tGroup);

for (let i = 0; i < MEMBRANE_COUNT; i++) {
  const u = i / (MEMBRANE_COUNT - 1);
  const y = -CONE_HEIGHT / 2 + u * CONE_HEIGHT;
  const r = CONE_BOTTOM_RADIUS + u * (CONE_TOP_RADIUS - CONE_BOTTOM_RADIUS);
  const isTop = i === MEMBRANE_COUNT - 1;

  const ring = new THREE.Mesh(
    new THREE.RingGeometry(r * 0.985, r, 96),
    new THREE.MeshBasicMaterial({
      color: isTop ? 0xffd180 : 0x82b1ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: isTop ? 0.85 : (0.16 + u * 0.32),
    })
  );
  ring.rotation.x = Math.PI / 2;
  ring.position.y = y;
  tGroup.add(ring);

  if (isTop) {
    const halo = new THREE.Mesh(
      new THREE.RingGeometry(r * 0.92, r * 1.08, 96),
      new THREE.MeshBasicMaterial({
        color: 0xffb74d,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.16,
        blending: THREE.AdditiveBlending,
      })
    );
    halo.rotation.x = Math.PI / 2;
    halo.position.y = y;
    tGroup.add(halo);
  }
}

const INTEGRATIVE_LINES = 32;
for (let i = 0; i < INTEGRATIVE_LINES; i++) {
  const angle = (i / INTEGRATIVE_LINES) * Math.PI * 2;
  const topX = Math.cos(angle) * CONE_TOP_RADIUS;
  const topZ = Math.sin(angle) * CONE_TOP_RADIUS;

  const geom = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(topX, CONE_HEIGHT / 2, topZ),
    new THREE.Vector3(0, -CONE_HEIGHT / 2, 0),
  ]);
  const mat = new THREE.LineBasicMaterial({
    color: 0xb39ddb,
    transparent: true,
    opacity: 0.06,
  });
  tGroup.add(new THREE.Line(geom, mat));
}

// t=0 — mini trou blanc (pas de pulse, juste pure source)
const t0Sphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.11, 32, 32),
  new THREE.MeshBasicMaterial({ color: 0xffffff })
);
t0Sphere.position.y = -CONE_HEIGHT / 2;
tGroup.add(t0Sphere);

const t0Halo = new THREE.Mesh(
  new THREE.SphereGeometry(0.32, 32, 32),
  new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.18,
    blending: THREE.AdditiveBlending,
  })
);
t0Halo.position.copy(t0Sphere.position);
tGroup.add(t0Halo);

tGroup.rotation.x = -0.08;
tGroup.rotation.y = -Math.PI / 2; // A initial face caméra → action alignée avec le label central

// =====================================================
// TRAJECTOIRE — chemin pré-tracé du photon
// =====================================================

const PERIOD = 8.5;
const DELTA_C_ANGLE = Math.PI / 20; // ~9° — échelle pédagogique exagérée pour lisibilité (vraie échelle de c dans T est infinitésimale)
const SPIRAL_TURNS_DOWN = 1.35;
const SPIRAL_TURNS_UP = 1.35;

function trajectoryPoint(phase, thetaStart) {
  let progress, currentTheta;
  if (phase <= 0.5) {
    // descente A → t=0 : accélération vers t=0 (ease-in)
    const n = phase * 2;
    progress = Math.pow(n, 2.6);
    currentTheta = thetaStart - progress * SPIRAL_TURNS_DOWN * Math.PI * 2;
  } else {
    // remontée t=0 → B : sortie rapide, décélération vers B (ease-out)
    const n = (phase - 0.5) * 2;
    progress = 1 - Math.pow(n, 1 / 2.6);
    currentTheta = (thetaStart + DELTA_C_ANGLE) + (1 - progress) * SPIRAL_TURNS_UP * Math.PI * 2;
  }
  const y = CONE_HEIGHT / 2 - progress * CONE_HEIGHT;
  const r = CONE_TOP_RADIUS * (1 - progress) + CONE_BOTTOM_RADIUS * progress;
  return new THREE.Vector3(Math.cos(currentTheta) * r, y, Math.sin(currentTheta) * r);
}

// Chemin pré-tracé (gris épais — t=x-1 ça change tout)
const PATH_RESOLUTION = 240;
const pretraceGeom = new LineGeometry();
pretraceGeom.setPositions(new Array(PATH_RESOLUTION * 3).fill(0));
const pretraceMat = new LineMaterial({
  color: 0x9c93ad,
  linewidth: 3.5,
  transparent: true,
  opacity: 0.6,
  worldUnits: false,
  depthWrite: false,
});
pretraceMat.resolution.set(window.innerWidth, window.innerHeight);
const pretrace = new Line2(pretraceGeom, pretraceMat);
tGroup.add(pretrace);

function updatePretrace(thetaStart) {
  const arr = new Array(PATH_RESOLUTION * 3);
  for (let i = 0; i < PATH_RESOLUTION; i++) {
    const p = trajectoryPoint(i / (PATH_RESOLUTION - 1), thetaStart);
    arr[i * 3] = p.x;
    arr[i * 3 + 1] = p.y;
    arr[i * 3 + 2] = p.z;
  }
  pretrace.geometry.setPositions(arr);
}

// Ombrage de l'oscillation sous t=x — chemin emprunté par les cycles successifs
const SHADOW_RESOLUTION = 200;
const shadowGeom = new LineGeometry();
shadowGeom.setPositions(new Array(SHADOW_RESOLUTION * 3).fill(0));
const shadowMat = new LineMaterial({
  color: 0x5a4d6e,
  linewidth: 4,
  transparent: true,
  opacity: 0.7,
  worldUnits: false,
  depthWrite: false,
});
shadowMat.resolution.set(window.innerWidth, window.innerHeight);
const shadow = new Line2(shadowGeom, shadowMat);
tGroup.add(shadow);

function updateShadow(cycleCount) {
  const arcEnd = Math.min(Math.PI * 2 - 0.001, (cycleCount + 1) * DELTA_C_ANGLE);
  const shadowY = CONE_HEIGHT / 2 - 0.12;
  const shadowRadius = CONE_TOP_RADIUS * 0.985;
  const arr = new Array(SHADOW_RESOLUTION * 3);
  for (let i = 0; i < SHADOW_RESOLUTION; i++) {
    const t = i / (SHADOW_RESOLUTION - 1);
    const angle = t * arcEnd;
    arr[i * 3] = Math.cos(angle) * shadowRadius;
    arr[i * 3 + 1] = shadowY;
    arr[i * 3 + 2] = Math.sin(angle) * shadowRadius;
  }
  shadow.geometry.setPositions(arr);
}
updateShadow(0);

// =====================================================
// SILLON (Line2 épais) — s'étire pendant le voyage, persiste après
// =====================================================

function makeSillon() {
  const geom = new LineGeometry();
  geom.setPositions(new Array(PATH_RESOLUTION * 3).fill(0));
  const mat = new LineMaterial({
    color: COLOR_DARK.getHex(),
    linewidth: 8, // sillon = masse → épaisseur lisible
    transparent: true,
    opacity: 0,
    worldUnits: false,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  mat.resolution.set(window.innerWidth, window.innerHeight);
  const line = new Line2(geom, mat);
  return line;
}

const sillonAObj = makeSillon();
const sillonBObj = makeSillon();
tGroup.add(sillonAObj);
tGroup.add(sillonBObj);
let activeSillon = sillonAObj;
let previousSillon = sillonBObj;

function rebuildSillonPath(sillon, thetaStart) {
  const arr = new Array(PATH_RESOLUTION * 3);
  for (let i = 0; i < PATH_RESOLUTION; i++) {
    const p = trajectoryPoint(i / (PATH_RESOLUTION - 1), thetaStart);
    arr[i * 3] = p.x;
    arr[i * 3 + 1] = p.y;
    arr[i * 3 + 2] = p.z;
  }
  sillon.geometry.setPositions(arr);
}

// =====================================================
// VECTEUR LUMIÈRE (corde AB) — apparaît à l'arrivée de e
// =====================================================

const chordPositions = new Float32Array(2 * 3);
const chordGeom = new THREE.BufferGeometry();
chordGeom.setAttribute('position', new THREE.BufferAttribute(chordPositions, 3));
const chordMat = new THREE.LineBasicMaterial({
  color: 0xffd180,
  transparent: true,
  opacity: 0,
});
const chord = new THREE.Line(chordGeom, chordMat);
tGroup.add(chord);

const markerGeom = new THREE.SphereGeometry(0.07, 16, 16);
const markerA = new THREE.Mesh(markerGeom, new THREE.MeshBasicMaterial({ color: 0xffd180, transparent: true, opacity: 0 }));
const markerB = new THREE.Mesh(markerGeom, new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 }));
const markerC = new THREE.Mesh(markerGeom, new THREE.MeshBasicMaterial({ color: 0xb39ddb, transparent: true, opacity: 0 }));
tGroup.add(markerA);
tGroup.add(markerB);
tGroup.add(markerC);

function updateChordAndMarkers(thetaStart) {
  const Ax = Math.cos(thetaStart) * CONE_TOP_RADIUS;
  const Az = Math.sin(thetaStart) * CONE_TOP_RADIUS;
  const Bx = Math.cos(thetaStart + DELTA_C_ANGLE) * CONE_TOP_RADIUS;
  const Bz = Math.sin(thetaStart + DELTA_C_ANGLE) * CONE_TOP_RADIUS;
  const Cx = Math.cos(thetaStart + 2 * DELTA_C_ANGLE) * CONE_TOP_RADIUS;
  const Cz = Math.sin(thetaStart + 2 * DELTA_C_ANGLE) * CONE_TOP_RADIUS;
  chordPositions[0] = Ax; chordPositions[1] = CONE_HEIGHT / 2; chordPositions[2] = Az;
  chordPositions[3] = Bx; chordPositions[4] = CONE_HEIGHT / 2; chordPositions[5] = Bz;
  chordGeom.attributes.position.needsUpdate = true;
  markerA.position.set(Ax, CONE_HEIGHT / 2, Az);
  markerB.position.set(Bx, CONE_HEIGHT / 2, Bz);
  markerC.position.set(Cx, CONE_HEIGHT / 2, Cz);
}

// Arc lumineux sur l'anneau, entre t=x (A) et t=x+1 (B) — au travers de 4df(x)
const ARC_RESOLUTION = 48;
const arcGeom = new LineGeometry();
arcGeom.setPositions(new Array(ARC_RESOLUTION * 3).fill(0));
const arcMat = new LineMaterial({
  color: 0xffffff,
  linewidth: 18,
  transparent: true,
  opacity: 0,
  worldUnits: false,
  blending: THREE.AdditiveBlending,
  depthTest: false,
  depthWrite: false,
});
arcMat.resolution.set(window.innerWidth, window.innerHeight);
const arcLine = new Line2(arcGeom, arcMat);
arcLine.renderOrder = 10; // au-dessus de tout
tGroup.add(arcLine);

function updateArc(thetaStart) {
  const arr = new Array(ARC_RESOLUTION * 3);
  for (let i = 0; i < ARC_RESOLUTION; i++) {
    const t = i / (ARC_RESOLUTION - 1);
    const angle = thetaStart + t * DELTA_C_ANGLE;
    arr[i * 3] = Math.cos(angle) * CONE_TOP_RADIUS;
    arr[i * 3 + 1] = CONE_HEIGHT / 2 + 0.05;
    arr[i * 3 + 2] = Math.sin(angle) * CONE_TOP_RADIUS;
  }
  arcLine.geometry.setPositions(arr);
}


// Init cycle 0
updatePretrace(0);
updateChordAndMarkers(0);
updateArc(0);
rebuildSillonPath(activeSillon, 0);
activeSillon.geometry.instanceCount = 0;

// =====================================================
// LOOP
// =====================================================

const clock = new THREE.Clock();
let elapsed = 0;
let currentCycle = 0;

function animate() {
  const dt = clock.getDelta();
  elapsed += dt;

  const cycleNum = Math.floor(elapsed / PERIOD);
  const phase = (elapsed % PERIOD) / PERIOD;
  const thetaStart = cycleNum * DELTA_C_ANGLE;

  if (cycleNum !== currentCycle) {
    currentCycle = cycleNum;
    const tmp = activeSillon;
    activeSillon = previousSillon;
    previousSillon = tmp;
    rebuildSillonPath(activeSillon, thetaStart);
    activeSillon.geometry.instanceCount = 0;
    activeSillon.material.opacity = 0;
    activeSillon.material.color.copy(COLOR_DARK);
    // Sillons dans le même contexte t=x — pas de décalage artificiel
    activeSillon.position.set(0, 0, 0);
    previousSillon.position.set(0, 0, 0);
    updatePretrace(thetaStart);
    updateChordAndMarkers(thetaStart);
    updateArc(thetaStart);
    updateShadow(currentCycle);
  }

  // Sillon actif : s'étire pendant le voyage, opacity monte
  const visibleSegments = Math.max(0, Math.floor(phase * (PATH_RESOLUTION - 1)));
  activeSillon.geometry.instanceCount = visibleSegments;
  const targetOpacity = Math.min(0.92, phase * 1.15);
  activeSillon.material.opacity += (targetOpacity - activeSillon.material.opacity) * 0.22;

  // Couleur du sillon actif : gris pendant l'adressage, doré à l'arrivée (phase >= 0.85)
  const activeManifesting = phase >= 0.85;
  const activeTargetColor = activeManifesting ? COLOR_LIGHT : COLOR_DARK;
  activeSillon.material.color.lerp(activeTargetColor, 0.18);

  // Sillon précédent : fade (garde sa couleur dorée acquise à la fin)
  if (previousSillon.material.opacity > 0.005) {
    previousSillon.material.opacity *= 0.985;
  } else {
    previousSillon.material.opacity = 0;
  }

  // Manifestation : ~1s avant + 1s après le retour de e
  const labelManifesting = phase >= MANIF_BEFORE || phase < MANIF_AFTER;

  // Corde A-B (sillon de lumière en haut) : s'allume pendant la manifestation
  let chordOpacity = 0;
  if (phase >= MANIF_BEFORE) {
    chordOpacity = (phase - MANIF_BEFORE) / (1 - MANIF_BEFORE);
  } else if (phase < MANIF_AFTER) {
    chordOpacity = 1 - phase / MANIF_AFTER;
  }
  chord.material.opacity = chordOpacity * 0.98;
  markerA.material.opacity = chordOpacity * 0.85;
  markerB.material.opacity = chordOpacity;
  markerC.material.opacity = chordOpacity * 0.55;
  arcLine.material.opacity = chordOpacity * 0.85;

  // Label de phase : switch instantané quand on entre/sort de la manifestation
  const targetMode = labelManifesting ? 'light' : 'dark';
  if (phaseLabel.dataset.mode !== targetMode) {
    phaseLabel.dataset.mode = targetMode;
    phaseLabel.classList.remove('dark', 'light');
    phaseLabel.classList.add(targetMode);
    phaseText.textContent = labelManifesting ? TEXT_LIGHT : TEXT_DARK;
  }

  // Labels t=x / t=x+1 / t=x+2 — visibles pendant la manifestation, suivent les markers en 3D
  if (labelManifesting) {
    const worldA = new THREE.Vector3();
    const worldB = new THREE.Vector3();
    const worldC = new THREE.Vector3();
    markerA.getWorldPosition(worldA);
    markerB.getWorldPosition(worldB);
    markerC.getWorldPosition(worldC);
    worldA.project(camera);
    worldB.project(camera);
    worldC.project(camera);
    const sxA = (worldA.x + 1) * window.innerWidth / 2;
    const syA = (-worldA.y + 1) * window.innerHeight / 2;
    const sxB = (worldB.x + 1) * window.innerWidth / 2;
    const syB = (-worldB.y + 1) * window.innerHeight / 2;
    const sxC = (worldC.x + 1) * window.innerWidth / 2;
    const syC = (-worldC.y + 1) * window.innerHeight / 2;
    labelTx.hidden = false;
    labelTxp1.hidden = false;
    labelTxp2.hidden = false;
    labelTx.style.left = sxA + 'px';
    labelTx.style.top = syA + 'px';
    labelTxp1.style.left = sxB + 'px';
    labelTxp1.style.top = syB + 'px';
    labelTxp2.style.left = sxC + 'px';
    labelTxp2.style.top = syC + 'px';
  } else {
    labelTx.hidden = true;
    labelTxp1.hidden = true;
    labelTxp2.hidden = true;
  }

  // t=0 : simple respiration (pas de grossissement — c'est l'accélération de e dans la trajectoire qui porte le rebond)
  const breath = 1 + Math.sin(elapsed * 0.8) * 0.05;
  t0Halo.scale.setScalar(breath);

  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  sillonAObj.material.resolution.set(window.innerWidth, window.innerHeight);
  sillonBObj.material.resolution.set(window.innerWidth, window.innerHeight);
  pretraceMat.resolution.set(window.innerWidth, window.innerHeight);
  shadowMat.resolution.set(window.innerWidth, window.innerHeight);
  arcMat.resolution.set(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onResize);

toggleBtn.addEventListener('click', () => {
  const isHidden = descPanel.classList.toggle('hidden');
  const en = document.documentElement.lang === 'en';
  if (isHidden) {
    toggleBtn.textContent = en ? 'Show text' : 'Afficher le texte';
  } else {
    // état « visible » : libellés gérés aussi par shell.js (data-fr/data-en)
    toggleBtn.textContent = en ? 'Hide text' : 'Masquer le texte';
  }
});

requestAnimationFrame(animate);
