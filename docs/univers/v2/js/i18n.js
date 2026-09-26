// =====================================================
// V2 — Résolution de langue pour les données de contenu
//
// Les fiches (concepts.js, categories.js) peuvent porter leurs
// champs de deux façons :
//   title: 'From 0'                       → une seule langue
//   title: { fr: 'Depuis 0', en: 'From 0' } → bilingue
//
// pick() résout selon la langue courante, avec repli sur l'autre
// langue plutôt qu'un trou : mieux vaut lire la V1 en anglais que
// de ne rien lire. Le FR est canonique (voir 00_README du corpus).
//
// La langue est celle du shell (clé localStorage 'v2-lang'),
// pour que le commutateur du header pilote aussi le contenu.
// =====================================================

const LANG_KEY = 'v2-lang';
const DEFAULT_LANG = 'fr';

export function currentLang() {
  try {
    const v = localStorage.getItem(LANG_KEY);
    return v === 'en' || v === 'fr' ? v : DEFAULT_LANG;
  } catch {
    return DEFAULT_LANG;
  }
}

/** Résout un champ mono- ou bilingue. Repli sur l'autre langue si absent. */
export function pick(value, lang = currentLang()) {
  if (value == null) return value;
  if (typeof value !== 'object' || Array.isArray(value)) return value;
  const other = lang === 'fr' ? 'en' : 'fr';
  return value[lang] ?? value[other] ?? '';
}

/** Idem, mais garantit un tableau (pour `phrases`). */
export function pickList(value, lang = currentLang()) {
  const out = pick(value, lang);
  return Array.isArray(out) ? out : [];
}
