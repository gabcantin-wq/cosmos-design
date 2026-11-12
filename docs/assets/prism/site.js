'use strict';
document.documentElement.classList.add('js');

// Navigation stays available without JavaScript and collapses only when enhanced.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-navigation');
if (menuButton && navigation) {
  menuButton.hidden = false;
  const closeMenu = () => {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  };
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
  });
  navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      closeMenu(); menuButton.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.site-header')) closeMenu();
  });
}

document.querySelectorAll('[data-tabs]').forEach(group => {
  const buttons = [...group.querySelectorAll('[role="tab"]')];
  function activate(button, focus = false) {
    buttons.forEach(item => {
      const selected = item === button;
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
      document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
    });
    if (focus) button.focus();
  }
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => activate(button));
    button.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % buttons.length;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index + buttons.length - 1) % buttons.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = buttons.length - 1;
      if (next !== undefined) { event.preventDefault(); activate(buttons[next], true); }
    });
  });
});

const missionForm = document.querySelector('#mission-form');
if (missionForm) {
  const missionName = document.querySelector('#mission-name');
  const output = document.querySelector('#mission-output');
  const textArea = document.querySelector('#mission-text');
  const status = document.querySelector('#mission-status');
  const brand = document.querySelector('meta[name="application-name"]').content;
  missionName.addEventListener('input', () => missionName.setCustomValidity(''));
  document.querySelectorAll('[data-mission-example]').forEach(link => {
    link.addEventListener('click', () => {
      missionName.value = link.dataset.missionExample;
      missionName.setCustomValidity('');
    });
  });
  missionForm.addEventListener('submit', event => {
    event.preventDefault();
    if (!missionName.value.trim()) {
      missionName.setCustomValidity('Décrivez le besoin que vous souhaitez faire avancer.');
      missionName.reportValidity(); return;
    }
    const data = new FormData(missionForm);
    const context = String(data.get('context') || '').trim() || 'À préciser avec l’équipe.';
    const result = String(data.get('result') || '').trim() || 'À définir avec l’équipe.';
    textArea.value = `${brand} · Fiche de mission\n\nLE BESOIN\n${missionName.value.trim()}\n\nLES RESSOURCES ET LE CONTEXTE\n${context}\n\nLE RÉSULTAT ATTENDU\n${result}\n\nLES PROCHAINES QUESTIONS\n- Qui porte la mission ?\n- Quelles données peuvent être utilisées ou partagées ?\n- Quelles décisions restent humaines ?\n- Comment vérifier le résultat ?\n\nFiche préparée localement, sans envoi automatique.\n`;
    output.hidden = false;
    status.textContent = 'Votre fiche est prête. Vous pouvez la télécharger ou la copier.';
    textArea.focus({ preventScroll: true });
    output.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'nearest' });
  });
  document.querySelector('#download-mission').addEventListener('click', () => {
    const url = URL.createObjectURL(new Blob(['\ufeff', textArea.value], { type: 'text/plain;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = `${brand.toLowerCase().replace(/[^a-z0-9-]/g, '-')}-mission.txt`;
    document.body.append(link); link.click(); link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
    status.textContent = 'Téléchargement de votre fiche lancé.';
  });
  document.querySelector('#copy-mission').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(textArea.value);
      status.textContent = 'La fiche a été copiée.';
    } catch {
      textArea.focus(); textArea.select();
      status.textContent = 'Le texte est sélectionné. Utilisez la commande Copier de votre appareil.';
    }
  });
}

const imageDialog = document.querySelector('.image-dialog');
if (imageDialog && typeof imageDialog.showModal === 'function') {
  let trigger = null;
  const image = imageDialog.querySelector('.dialog-image');
  const caption = imageDialog.querySelector('#image-dialog-caption');
  const original = imageDialog.querySelector('.dialog-original');
  document.querySelectorAll('[data-lightbox]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault(); trigger = link;
      image.src = link.href; image.alt = link.querySelector('img').alt;
      caption.textContent = link.dataset.caption || image.alt;
      original.href = link.href;
      imageDialog.showModal();
      imageDialog.querySelector('.dialog-close').focus();
    });
  });
  imageDialog.querySelector('.dialog-close').addEventListener('click', () => imageDialog.close());
  imageDialog.addEventListener('click', event => { if (event.target === imageDialog) imageDialog.close(); });
  imageDialog.addEventListener('close', () => { if (trigger) trigger.focus({ preventScroll: true }); });
}

const sectionLinks = [...document.querySelectorAll('.section-navigation a')];
if ('IntersectionObserver' in window && sectionLinks.length) {
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting);
    if (!visible.length) return;
    const id = visible[0].target.id;
    sectionLinks.forEach(link => {
      if (link.hash === `#${id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-20% 0px -65% 0px', threshold: 0 });
  document.querySelectorAll('.technical-section').forEach(section => observer.observe(section));
}
