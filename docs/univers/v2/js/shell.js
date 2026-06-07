// =====================================================
// V2 — Coquille de navigation partagée
// Header, switch FR/EN global (persistant), nav préc./suiv.
// Aucune dépendance Three : tourne aussi bien sur l'accueil
// que sur une page-plan. Inclure en <script type="module">.
// =====================================================

import { PLANS, SEQUENCE, planByCode } from './plans.js';

const LANG_KEY = 'v2-lang';
const DEFAULT_LANG = 'fr';

const state = {
  lang: readLang(),
};

function readLang() {
  try {
    const v = localStorage.getItem(LANG_KEY);
    return v === 'en' || v === 'fr' ? v : DEFAULT_LANG;
  } catch {
    return DEFAULT_LANG;
  }
}

function saveLang(lang) {
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch {
    /* localStorage indisponible : on continue sans persistance */
  }
}

function t(plan) {
  return state.lang === 'en' ? plan.titleEn : plan.titleFr;
}

// --- Application de la langue -------------------------------------

function applyLang() {
  const lang = state.lang;
  document.documentElement.lang = lang;

  // Blocs de prose : on bascule la visibilité.
  document.querySelectorAll('.lang-fr').forEach((el) => {
    el.hidden = lang !== 'fr';
  });
  document.querySelectorAll('.lang-en').forEach((el) => {
    el.hidden = lang !== 'en';
  });

  // Libellés courts : data-fr / data-en → textContent.
  document.querySelectorAll('[data-fr][data-en]').forEach((el) => {
    el.textContent = lang === 'en' ? el.dataset.en : el.dataset.fr;
  });

  // État actif des boutons de langue.
  document.querySelectorAll('.v2-lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
  });
}

function setLang(lang) {
  if (lang !== 'fr' && lang !== 'en') return;
  state.lang = lang;
  saveLang(lang);
  render();
}

// --- Nav préc. / suiv. -------------------------------------------

const ARROW_PREV = '←';
const ARROW_NEXT = '→';
const HOME_LABEL = { fr: 'Accueil', en: 'Home' };
const SOON_LABEL = { fr: 'à venir', en: 'coming soon' };

function fillNav(anchor, { href, label, disabled, soon }) {
  if (!anchor) return;
  anchor.innerHTML = '';
  const span = document.createElement('span');
  span.className = 'v2-nav-label';
  span.textContent = label;
  anchor.appendChild(span);
  if (soon) {
    const badge = document.createElement('span');
    badge.className = 'v2-nav-soon';
    badge.textContent = SOON_LABEL[state.lang];
    anchor.appendChild(badge);
  }
  if (disabled) {
    anchor.classList.add('disabled');
    anchor.removeAttribute('href');
    anchor.setAttribute('aria-disabled', 'true');
  } else {
    anchor.classList.remove('disabled');
    anchor.href = href;
    anchor.removeAttribute('aria-disabled');
  }
}

function updateNav() {
  const code = document.body.dataset.plan;
  if (!code) return; // page sans plan (accueil) : pas de nav séquentielle
  const i = SEQUENCE.findIndex((p) => p.code === code);
  if (i === -1) return;

  const prevAnchor = document.getElementById('nav-prev');
  const nextAnchor = document.getElementById('nav-next');

  // Précédent : au début du parcours → retour à l'accueil.
  const prev = SEQUENCE[i - 1];
  if (prev) {
    fillNav(prevAnchor, {
      href: prev.file,
      label: `${ARROW_PREV} ${t(prev)}`,
      disabled: !prev.built,
      soon: !prev.built,
    });
  } else {
    fillNav(prevAnchor, {
      href: 'index.html',
      label: `${ARROW_PREV} ${HOME_LABEL[state.lang]}`,
    });
  }

  // Suivant : en fin de parcours → pas de bouton actif.
  const next = SEQUENCE[i + 1];
  if (next) {
    fillNav(nextAnchor, {
      href: next.file,
      label: `${t(next)} ${ARROW_NEXT}`,
      disabled: !next.built,
      soon: !next.built,
    });
  } else if (nextAnchor) {
    nextAnchor.hidden = true;
  }
}

// --- Liste des plans (accueil « accès libre ») -------------------

function renderPlanList() {
  const list = document.getElementById('plan-list');
  if (!list) return;
  list.innerHTML = '';
  PLANS.forEach((plan) => {
    const li = document.createElement('li');
    li.className = 'v2-plan-item' + (plan.sequence ? '' : ' transverse');

    const code = document.createElement('span');
    code.className = 'v2-plan-code';
    code.textContent = plan.code;

    const title = document.createElement('span');
    title.className = 'v2-plan-title';
    title.textContent = t(plan);

    if (plan.built) {
      const a = document.createElement('a');
      a.href = plan.file;
      a.className = 'v2-plan-link';
      a.append(code, title);
      li.appendChild(a);
    } else {
      const wrap = document.createElement('span');
      wrap.className = 'v2-plan-link disabled';
      const soon = document.createElement('span');
      soon.className = 'v2-nav-soon';
      soon.textContent = SOON_LABEL[state.lang];
      wrap.append(code, title, soon);
      li.appendChild(wrap);
    }
    list.appendChild(li);
  });
}

// --- Boucle de rendu ---------------------------------------------

function render() {
  applyLang();
  updateNav();
  renderPlanList();
}

function wireLangButtons() {
  document.querySelectorAll('.v2-lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
}

function init() {
  wireLangButtons();
  render();
  // Fondu d'entrée : la classe est posée une frame après le chargement.
  requestAnimationFrame(() => document.body.classList.add('v2-ready'));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

export { setLang };
