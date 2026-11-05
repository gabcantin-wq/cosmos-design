'use strict';
document.documentElement.classList.add('js');

// Navigation stays fully available without JavaScript.
const menuButton = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-menu]');
const mobile = window.matchMedia('(max-width: 760px)');
if (menuButton && menu) {
  const closeMenu = () => { menu.hidden = mobile.matches; menuButton.setAttribute('aria-expanded', String(!menu.hidden)); };
  closeMenu();
  mobile.addEventListener('change', closeMenu);
  menuButton.addEventListener('click', () => { menu.hidden = !menu.hidden; menuButton.setAttribute('aria-expanded', String(!menu.hidden)); });
  menu.addEventListener('click', event => { if (event.target.closest('a') && mobile.matches) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && mobile.matches && !menu.hidden) { closeMenu(); menuButton.focus(); } });
}

// Two documented examples; this is a diagram, never a live cluster dashboard.
const scopeButtons = document.querySelectorAll('[data-scope]');
const hospitalX = document.querySelector('[data-hospital="x"]');
const hospitalY = document.querySelector('[data-hospital="y"]');
const connector = document.querySelector('[data-connector]');
const scopeCaption = document.querySelector('[data-scope-caption]');
const scopeCopy = {
  local: 'Un incident à un étage de Y concerne les 25 clusters de Y. X ne reçoit pas automatiquement cette information locale.',
  shared: 'Une spécialisation développée dans Y peut servir à un cluster de X. Son partage dépend de la mission, de sa portée et de l’accord applicable.'
};
scopeButtons.forEach(button => button.addEventListener('click', () => {
  const shared = button.dataset.scope === 'shared';
  scopeButtons.forEach(other => other.setAttribute('aria-pressed', String(other === button)));
  hospitalX?.classList.toggle('is-linked', shared);
  hospitalY?.classList.add('is-active');
  connector?.classList.toggle('is-active', shared);
  if (connector) connector.textContent = shared ? '↔' : '·';
  if (scopeCaption) scopeCaption.textContent = scopeCopy[button.dataset.scope];
}));

// Accessible product tabs: arrow keys, Home/End, and progressive enhancement.
const tabList = document.querySelector('[data-tabs]');
if (tabList) {
  const tabs = [...tabList.querySelectorAll('[role="tab"]')];
  const select = (tab, focus = false) => {
    tabs.forEach(item => {
      const active = item === tab;
      item.setAttribute('aria-selected', String(active));
      item.tabIndex = active ? 0 : -1;
      const panel = document.getElementById(item.getAttribute('aria-controls'));
      if (panel) panel.hidden = !active;
    });
    if (focus) tab.focus();
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => select(tab));
    tab.addEventListener('keydown', event => {
      let target;
      if (event.key === 'ArrowRight') target = tabs[(index + 1) % tabs.length];
      if (event.key === 'ArrowLeft') target = tabs[(index - 1 + tabs.length) % tabs.length];
      if (event.key === 'Home') target = tabs[0];
      if (event.key === 'End') target = tabs[tabs.length - 1];
      if (target) { event.preventDefault(); select(target, true); }
    });
  });
  select(tabs[0]);
}

// Screenshots are optional. Until a reviewed image is declared, the documented
// illustration stays visible. No invented live metrics or broken image slots.
const captureFrames = [...document.querySelectorAll('[data-capture]')];
if (captureFrames.length) {
  fetch('/clusters-couleur/media/captures.json')
    .then(response => { if (!response.ok) throw new Error('Capture manifest unavailable'); return response.json(); })
    .then(manifest => {
      for (const frame of captureFrames) {
        const item = manifest.items?.find(entry => entry.id === frame.dataset.capture);
        if (!item?.src || !item.alt || !item.caption || !item.observed_on) continue;
        if (!/^\/clusters-couleur\/media\/[a-zA-Z0-9_-]+\.(png|jpe?g|webp)$/.test(item.src)) continue;
        const image = new Image();
        image.alt = item.alt; image.decoding = 'async';
        image.addEventListener('load', () => {
          const caption = document.createElement('figcaption');
          caption.textContent = `${item.caption} · Capture du ${item.observed_on}`;
          frame.replaceChildren(image, caption);
        }, { once: true });
        image.src = item.src;
      }
    })
    .catch(() => { /* The meaningful, accessible diagram remains available. */ });
}
