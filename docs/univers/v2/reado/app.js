const ALL_SOURCES_ID = "__all_sources__";

const state = {
  sources: [],
  selectedSourceId: null,
  activeWords: [],
  currentIndex: 0,
  isPlaying: false,
  timerId: null,
  wpm: 200,
  fontScale: 100,
  smartPause: true,
  autoAdvance: true,
  surfaceMode: "desktop",
  bridgeUrl: getDefaultBridgeUrl(),
  bridgeStream: "global",
  bridgeIntervalSeconds: 2,
  bridgeListening: false,
  bridgeAutoSelect: true,
  bridgeTimerId: null,
  bridgeEventSource: null,
  bridgeSeenIds: new Set(),
  bridgeCursor: 0
};

const elements = {
  sourceTitleInput: document.querySelector("#sourceTitleInput"),
  sourceTextInput: document.querySelector("#sourceTextInput"),
  addTextButton: document.querySelector("#addTextButton"),
  pasteClipboardButton: document.querySelector("#pasteClipboardButton"),
  fileInput: document.querySelector("#fileInput"),
  urlInput: document.querySelector("#urlInput"),
  addUrlButton: document.querySelector("#addUrlButton"),
  loadSampleButton: document.querySelector("#loadSampleButton"),
  selectAllSourcesButton: document.querySelector("#selectAllSourcesButton"),
  sourceList: document.querySelector("#sourceList"),
  statusBanner: document.querySelector("#statusBanner"),
  activeSourceName: document.querySelector("#activeSourceName"),
  activeSourceStats: document.querySelector("#activeSourceStats"),
  liveIndicator: document.querySelector("#liveIndicator"),
  readerFrame: document.querySelector(".reader-frame"),
  readerScene: document.querySelector("#readerScene"),
  imageScene: document.querySelector("#imageScene"),
  wordsScene: document.querySelector("#wordsScene"),
  emotionScene: document.querySelector("#emotionScene"),
  sceneImage: document.querySelector("#sceneImage"),
  imageSceneTitle: document.querySelector("#imageSceneTitle"),
  imageSceneCaption: document.querySelector("#imageSceneCaption"),
  wordsSceneKicker: document.querySelector("#wordsSceneKicker"),
  wordsSceneText: document.querySelector("#wordsSceneText"),
  emotionSceneKicker: document.querySelector("#emotionSceneKicker"),
  emotionSceneName: document.querySelector("#emotionSceneName"),
  emotionSceneSubtitle: document.querySelector("#emotionSceneSubtitle"),
  previousFarWord: document.querySelector("#previousFarWord"),
  previousWord: document.querySelector("#previousWord"),
  nextWord: document.querySelector("#nextWord"),
  nextFarWord: document.querySelector("#nextFarWord"),
  wordPrefix: document.querySelector("#wordPrefix"),
  wordPivot: document.querySelector("#wordPivot"),
  wordSuffix: document.querySelector("#wordSuffix"),
  progressCounter: document.querySelector("#progressCounter"),
  etaLabel: document.querySelector("#etaLabel"),
  progressSlider: document.querySelector("#progressSlider"),
  playPauseButton: document.querySelector("#playPauseButton"),
  resetButton: document.querySelector("#resetButton"),
  previousButton: document.querySelector("#previousButton"),
  nextButton: document.querySelector("#nextButton"),
  wpmRange: document.querySelector("#wpmRange"),
  wpmValue: document.querySelector("#wpmValue"),
  fontScaleRange: document.querySelector("#fontScaleRange"),
  fontScaleValue: document.querySelector("#fontScaleValue"),
  smartPauseToggle: document.querySelector("#smartPauseToggle"),
  autoAdvanceToggle: document.querySelector("#autoAdvanceToggle"),
  sourcePreview: document.querySelector("#sourcePreview"),
  copyPreviewButton: document.querySelector("#copyPreviewButton"),
  finalModeButton: document.querySelector("#finalModeButton"),
  dropzone: document.querySelector("#dropzone"),
  bridgeUrlInput: document.querySelector("#bridgeUrlInput"),
  bridgeStreamInput: document.querySelector("#bridgeStreamInput"),
  bridgeIntervalRange: document.querySelector("#bridgeIntervalRange"),
  bridgeIntervalValue: document.querySelector("#bridgeIntervalValue"),
  bridgeAutoselectToggle: document.querySelector("#bridgeAutoselectToggle"),
  bridgeStatusBanner: document.querySelector("#bridgeStatusBanner"),
  toggleBridgeButton: document.querySelector("#toggleBridgeButton")
};

bootstrap();

function bootstrap() {
  loadPreferences();
  wireEvents();
  const queryOptions = loadQuerySource();
  applySurfaceMode();
  render();
  if (queryOptions.listen) {
    startBridgeListening({ announce: false });
  }
  if (queryOptions.finalMode) {
    enterFinalMode({ requestFullscreen: false });
  }
  if (queryOptions.autoplay) {
    startPlaybackFromCurrent();
  }
}

function wireEvents() {
  elements.addTextButton.addEventListener("click", handleAddTextSource);
  elements.pasteClipboardButton.addEventListener("click", handlePasteClipboard);
  elements.fileInput.addEventListener("change", handleFileImport);
  elements.addUrlButton.addEventListener("click", handleUrlImport);
  elements.loadSampleButton.addEventListener("click", addSampleSource);
  elements.selectAllSourcesButton.addEventListener("click", () => {
    if (!state.sources.length) {
      setStatus("Ajoute au moins une source avant de lancer la session combinee.", "warning");
      return;
    }
    selectSource(ALL_SOURCES_ID);
    setStatus("Session combinee prete.", "success");
  });
  elements.sourceList.addEventListener("click", handleSourceListClick);
  elements.playPauseButton.addEventListener("click", togglePlayback);
  elements.resetButton.addEventListener("click", resetPlayback);
  elements.previousButton.addEventListener("click", () => stepWord(-1));
  elements.nextButton.addEventListener("click", () => stepWord(1));
  elements.progressSlider.addEventListener("input", handleSeek);
  elements.wpmRange.addEventListener("input", handleWpmChange);
  elements.fontScaleRange.addEventListener("input", handleFontScaleChange);
  elements.smartPauseToggle.addEventListener("change", (event) => {
    state.smartPause = event.target.checked;
    savePreferences();
    renderMeta();
  });
  elements.autoAdvanceToggle.addEventListener("change", (event) => {
    state.autoAdvance = event.target.checked;
    savePreferences();
  });
  elements.copyPreviewButton.addEventListener("click", handleCopyPreview);
  elements.finalModeButton.addEventListener("click", toggleFinalMode);
  elements.toggleBridgeButton.addEventListener("click", toggleBridgeListening);
  elements.bridgeUrlInput.addEventListener("change", handleBridgeUrlChange);
  elements.bridgeStreamInput.addEventListener("change", handleBridgeStreamChange);
  elements.bridgeIntervalRange.addEventListener("input", handleBridgeIntervalChange);
  elements.bridgeAutoselectToggle.addEventListener("change", handleBridgeAutoselectChange);

  document.addEventListener("keydown", handleKeydown);
  document.addEventListener("fullscreenchange", () => {
    document.body.classList.toggle("fullscreen-active", Boolean(document.fullscreenElement));
    if (!document.fullscreenElement) {
      document.body.classList.remove("final-mode");
    }
    renderSurfaceActions();
  });

  ["dragenter", "dragover"].forEach((eventName) => {
    elements.dropzone.addEventListener(eventName, (event) => {
      event.preventDefault();
      elements.dropzone.classList.add("is-over");
    });
  });

  ["dragleave", "drop"].forEach((eventName) => {
    elements.dropzone.addEventListener(eventName, (event) => {
      event.preventDefault();
      elements.dropzone.classList.remove("is-over");
    });
  });

  elements.dropzone.addEventListener("drop", handleDropImport);
}

function render() {
  renderSourceList();
  refreshActiveContent();
  renderReader();
  renderMeta();
  renderControls();
  renderBridge();
  renderSurfaceActions();
}

function renderSourceList() {
  if (!state.sources.length) {
    elements.sourceList.innerHTML = [
      '<div class="source-card">',
      "  <div>",
      '    <p class="source-title">Bibliotheque vide</p>',
      '    <p class="source-meta">Ajoute un texte, un fichier, une URL ou un extrait du presse-papiers.</p>',
      "  </div>",
      "</div>"
    ].join("");
    return;
  }

  const cards = [];

  if (state.sources.length > 1) {
    const combinedText = getCombinedText();
    const wordCount = tokenize(combinedText).length;
    cards.push(createSourceCardMarkup({
      id: ALL_SOURCES_ID,
      title: "Session combinee",
      meta: `${state.sources.length} sources - ${wordCount} mots`,
      isActive: state.selectedSourceId === ALL_SOURCES_ID,
      removable: false
    }));
  }

  state.sources.forEach((source) => {
    cards.push(createSourceCardMarkup({
      id: source.id,
      title: source.title,
      meta: buildSourceMeta(source),
      isActive: state.selectedSourceId === source.id,
      removable: true
    }));
  });

  elements.sourceList.innerHTML = cards.join("");
}

function createSourceCardMarkup({ id, title, meta, isActive, removable }) {
  return [
    `<article class="source-card${isActive ? " is-active" : ""}">`,
    `  <button type="button" class="source-select" data-action="select" data-id="${escapeHtml(id)}">`,
    `    <p class="source-title">${escapeHtml(title)}</p>`,
    `    <p class="source-meta">${escapeHtml(meta)}</p>`,
    "  </button>",
    removable
      ? [
          '  <div class="source-actions">',
          `    <button type="button" class="icon-button" title="Supprimer" aria-label="Supprimer" data-action="delete" data-id="${escapeHtml(id)}">x</button>`,
          "  </div>"
        ].join("")
      : "  <div></div>",
    "</article>"
  ].join("");
}

function buildSourceMeta(source) {
  const liveLabel = source.liveStatus === "streaming" ? " - live" : "";
  const streamLabel = source.stream && source.stream !== "global" ? ` @ ${source.stream}` : "";
  const displayMode = getSourceDisplayMode(source);
  const modeLabel = getDisplayModeLabel(displayMode);
  const wordLabel = displayMode === "reader" ? ` - ${source.wordCount} mots` : "";
  return `${source.kind}${streamLabel} - ${modeLabel}${wordLabel}${liveLabel}`;
}

function refreshActiveContent() {
  const active = getActiveSource();

  if (!active) {
    state.activeWords = [];
    state.currentIndex = 0;
    return;
  }

  const readerText = getReaderText(active);
  state.activeWords = getSourceDisplayMode(active) === "reader" ? tokenize(readerText) : [];
  state.currentIndex = clamp(state.currentIndex, 0, Math.max(state.activeWords.length - 1, 0));
}

function renderReader() {
  const active = getActiveSource();
  const mode = getSourceDisplayMode(active);
  setActiveStage(mode);
  elements.sourcePreview.textContent = active
    ? buildPreviewText(active)
    : "Le texte de reference de la source active apparaitra ici.";
  elements.liveIndicator.hidden = !(active && active.liveStatus === "streaming");

  if (!active) {
    renderReaderScene(null);
    renderWordsScene(null);
    renderImageScene(null);
    renderEmotionScene(null);
    return;
  }

  switch (mode) {
    case "image":
      renderImageScene(active);
      break;
    case "words":
      renderWordsScene(active);
      break;
    case "emotion":
      renderEmotionScene(active);
      break;
    default:
      renderReaderScene(active);
      break;
  }
}

function renderReaderScene(active) {
  const currentWord = state.activeWords[state.currentIndex] || "";
  const context = getContextSnippets();
  const wordParts = splitWordForDisplay(currentWord || "Pret");

  elements.wordPrefix.textContent = wordParts.prefix;
  elements.wordPivot.textContent = wordParts.pivot;
  elements.wordSuffix.textContent = wordParts.suffix;
  elements.previousFarWord.textContent = context.previousFar;
  elements.previousWord.textContent = context.previousNear;
  elements.nextWord.textContent = context.nextNear;
  elements.nextFarWord.textContent = context.nextFar;

  if (!active) {
    elements.wordPrefix.textContent = "";
    elements.wordPivot.textContent = "Ajoute";
    elements.wordSuffix.textContent = "une source";
    elements.previousFarWord.textContent = "";
    elements.previousWord.textContent = "";
    elements.nextWord.textContent = "";
    elements.nextFarWord.textContent = "";
  }
}

function renderImageScene(active) {
  const title = active?.title || "Image";
  const caption = active?.caption || active?.summary || active?.text || "Aucune image active.";
  const imageUrl = active?.imageUrl || "";
  const imageAlt = active?.imageAlt || title;

  elements.imageSceneTitle.textContent = title;
  elements.imageSceneCaption.textContent = caption;
  elements.sceneImage.alt = imageAlt;
  syncSceneImage(imageUrl);
}

function renderWordsScene(active) {
  elements.wordsSceneKicker.textContent = active?.blockTitle || active?.title || "Bloc";
  elements.wordsSceneText.textContent = active?.blockText || active?.text || "Le bloc de mots apparaitra ici.";
}

function renderEmotionScene(active) {
  elements.emotionSceneKicker.textContent = active?.title || "Etat";
  elements.emotionSceneName.textContent = active?.emotion || active?.title || "Calme";
  elements.emotionSceneSubtitle.textContent =
    active?.emotionSubtitle || active?.summary || active?.text || "Emotion par defaut du systeme.";
}

function setActiveStage(mode) {
  const nextMode = normalizeDisplayMode(mode);
  elements.readerFrame.dataset.scene = nextMode;
  elements.readerScene.hidden = nextMode !== "reader";
  elements.imageScene.hidden = nextMode !== "image";
  elements.wordsScene.hidden = nextMode !== "words";
  elements.emotionScene.hidden = nextMode !== "emotion";
}

function syncSceneImage(imageUrl) {
  const normalized = String(imageUrl || "").trim();
  if (!normalized) {
    elements.sceneImage.removeAttribute("src");
    elements.sceneImage.dataset.rawSrc = "";
    return;
  }

  if (elements.sceneImage.dataset.rawSrc === normalized) {
    return;
  }

  elements.sceneImage.dataset.rawSrc = normalized;
  elements.sceneImage.src = /^data:/i.test(normalized) ? normalized : withCacheBust(normalized);
}

function buildPreviewText(active) {
  if (!active) {
    return "Le texte de reference de la source active apparaitra ici.";
  }

  const mode = getSourceDisplayMode(active);
  if (mode === "image") {
    return [
      "[Mode image]",
      `Titre: ${active.title || "Image"}`,
      `Legende: ${active.caption || active.summary || "Aucune legende."}`,
      `Image: ${active.imageUrl || "Aucune URL"}`
    ].join("\n");
  }

  if (mode === "words") {
    return [
      "[Mode bloc]",
      `Titre: ${active.blockTitle || active.title || "Bloc"}`,
      "",
      active.blockText || active.text || "Aucun bloc de mots."
    ].join("\n");
  }

  if (mode === "emotion") {
    return [
      "[Mode emotion]",
      `Etat: ${active.emotion || active.title || "Calme"}`,
      active.emotionSubtitle || active.summary || active.text || "Aucun sous-texte."
    ].join("\n");
  }

  return buildReaderReferenceText(active);
}

function getReaderText(active) {
  if (!active) {
    return "";
  }
  return active.text || "";
}

function buildReaderReferenceText(active) {
  const referenceText = active?.referenceText || active?.text || "";
  return referenceText || "Le texte de reference de la source active apparaitra ici.";
}

function getSourceDisplayMode(source) {
  return inferDisplayMode({
    displayMode: source?.displayMode,
    imageUrl: source?.imageUrl,
    blockText: source?.blockText,
    emotion: source?.emotion,
    text: source?.text
  });
}

function inferDisplayMode({ displayMode, imageUrl, blockText, emotion, text }) {
  const explicitMode = normalizeDisplayMode(displayMode);
  if (explicitMode !== "reader") {
    return explicitMode;
  }
  if (String(imageUrl || "").trim()) {
    return "image";
  }
  if (String(blockText || "").trim()) {
    return "words";
  }
  if (String(emotion || "").trim()) {
    return "emotion";
  }
  if (!String(text || "").trim()) {
    return "emotion";
  }
  return "reader";
}

function getDisplayModeLabel(mode) {
  switch (normalizeDisplayMode(mode)) {
    case "image":
      return "Image";
    case "words":
      return "Bloc";
    case "emotion":
      return "Emotion";
    default:
      return "Lecture";
  }
}

function normalizeDisplayMode(value) {
  const mode = String(value || "").trim().toLowerCase();
  if (["reader", "image", "words", "emotion"].includes(mode)) {
    return mode;
  }
  return "reader";
}

function getContextSnippets() {
  const previousNearStart = Math.max(0, state.currentIndex - 3);
  const previousNearEnd = Math.max(0, state.currentIndex);
  const previousFarStart = Math.max(0, state.currentIndex - 7);
  const previousFarEnd = previousNearStart;

  const nextNearStart = Math.min(state.activeWords.length, state.currentIndex + 1);
  const nextNearEnd = Math.min(state.activeWords.length, nextNearStart + 3);
  const nextFarStart = nextNearEnd;
  const nextFarEnd = Math.min(state.activeWords.length, nextFarStart + 4);

  return {
    previousNear: state.activeWords.slice(previousNearStart, previousNearEnd).join(" "),
    previousFar: state.activeWords.slice(previousFarStart, previousFarEnd).join(" "),
    nextNear: state.activeWords.slice(nextNearStart, nextNearEnd).join(" "),
    nextFar: state.activeWords.slice(nextFarStart, nextFarEnd).join(" ")
  };
}

function renderMeta() {
  const active = getActiveSource();
  const displayMode = getSourceDisplayMode(active);
  const wordCount = state.activeWords.length;
  const remaining = Math.max(wordCount - state.currentIndex - 1, 0);
  const timeLeft = formatRemainingTime(remaining, state.wpm);
  const liveLabel = active?.liveStatus === "streaming" ? " - flux vivant" : "";

  elements.activeSourceName.textContent = active ? active.title : "Aucune source selectionnee";
  if (!active) {
    elements.activeSourceStats.textContent = "0 mot - 0s";
    elements.progressCounter.textContent = "0 / 0";
    elements.etaLabel.textContent = "Reste 0s";
  } else if (displayMode === "reader") {
    elements.activeSourceStats.textContent = `${wordCount} mots - ${timeLeft}${liveLabel}`;
    elements.progressCounter.textContent = `${wordCount ? state.currentIndex + 1 : 0} / ${wordCount}`;
    elements.etaLabel.textContent = `Reste ${formatRemainingTime(remaining, state.wpm)}`;
  } else {
    elements.activeSourceStats.textContent = `${getDisplayModeLabel(displayMode)} - ${active.kind}${liveLabel}`;
    elements.progressCounter.textContent = getDisplayModeLabel(displayMode);
    elements.etaLabel.textContent = active.liveStatus === "streaming" ? "Flux vivant" : "Scene stable";
  }
  elements.progressSlider.max = Math.max(wordCount - 1, 0);
  elements.progressSlider.value = Math.min(state.currentIndex, Math.max(wordCount - 1, 0));
  elements.progressSlider.disabled = displayMode !== "reader";
}

function renderControls() {
  const canPlay = canPlayActiveSource();
  elements.playPauseButton.textContent = state.isPlaying ? "Pause" : "Lire";
  elements.wpmValue.textContent = `${state.wpm} WPM`;
  elements.fontScaleValue.textContent = `${state.fontScale}%`;
  elements.wpmRange.value = String(state.wpm);
  elements.fontScaleRange.value = String(state.fontScale);
  elements.smartPauseToggle.checked = state.smartPause;
  elements.autoAdvanceToggle.checked = state.autoAdvance;
  elements.playPauseButton.disabled = !canPlay;
  elements.resetButton.disabled = !canPlay;
  elements.previousButton.disabled = !canPlay;
  elements.nextButton.disabled = !canPlay;
  document.documentElement.style.setProperty("--reader-scale", String(state.fontScale / 100));
}

function canPlayActiveSource() {
  const active = getActiveSource();
  return Boolean(active && getSourceDisplayMode(active) === "reader" && state.activeWords.length);
}

function renderBridge() {
  elements.bridgeUrlInput.value = state.bridgeUrl;
  elements.bridgeStreamInput.value = state.bridgeStream;
  elements.bridgeIntervalRange.value = String(state.bridgeIntervalSeconds);
  elements.bridgeIntervalValue.textContent = `${state.bridgeIntervalSeconds.toFixed(1)}s`;
  elements.bridgeAutoselectToggle.checked = state.bridgeAutoSelect;
  elements.toggleBridgeButton.textContent = state.bridgeListening ? "Arreter" : "Ecouter";
}

function renderSurfaceActions() {
  if (!elements.finalModeButton) {
    return;
  }
  const finalActive = document.body.classList.contains("final-mode");
  elements.finalModeButton.textContent = finalActive ? "Quitter final" : "Mode final";
}

function loadPreferences() {
  try {
    const raw = localStorage.getItem("reado.preferences");
    if (!raw) {
      return;
    }

    const parsed = JSON.parse(raw);
    if (typeof parsed.wpm === "number") {
      state.wpm = clamp(parsed.wpm, 120, 1000);
    }
    if (typeof parsed.fontScale === "number") {
      state.fontScale = clamp(parsed.fontScale, 80, 180);
    }
    if (typeof parsed.smartPause === "boolean") {
      state.smartPause = parsed.smartPause;
    }
    if (typeof parsed.autoAdvance === "boolean") {
      state.autoAdvance = parsed.autoAdvance;
    }
    if (typeof parsed.bridgeUrl === "string" && parsed.bridgeUrl.trim()) {
      state.bridgeUrl = parsed.bridgeUrl.trim();
    }
    if (typeof parsed.bridgeStream === "string" && parsed.bridgeStream.trim()) {
      state.bridgeStream = parsed.bridgeStream.trim();
    }
    if (typeof parsed.bridgeIntervalSeconds === "number") {
      state.bridgeIntervalSeconds = clamp(parsed.bridgeIntervalSeconds, 1, 15);
    }
    if (typeof parsed.bridgeAutoSelect === "boolean") {
      state.bridgeAutoSelect = parsed.bridgeAutoSelect;
    }
  } catch (error) {
    console.error(error);
  }
}

function savePreferences() {
  try {
    localStorage.setItem("reado.preferences", JSON.stringify({
      wpm: state.wpm,
      fontScale: state.fontScale,
      smartPause: state.smartPause,
      autoAdvance: state.autoAdvance,
      bridgeUrl: state.bridgeUrl,
      bridgeStream: state.bridgeStream,
      bridgeIntervalSeconds: state.bridgeIntervalSeconds,
      bridgeAutoSelect: state.bridgeAutoSelect
    }));
  } catch (error) {
    console.error(error);
  }
}

function loadQuerySource() {
  const params = new URLSearchParams(window.location.search);
  const text = params.get("text") || params.get("message") || "";
  const title = params.get("title") || "Agent message";
  const displayMode = params.get("display") || params.get("display_mode") || params.get("mode") || "";
  const imageUrl = params.get("image") || params.get("image_url") || "";
  const imageAlt = params.get("image_alt") || "";
  const caption = params.get("caption") || "";
  const blockText = params.get("block_text") || params.get("block") || "";
  const blockTitle = params.get("block_title") || "";
  const emotion = params.get("emotion") || "";
  const emotionSubtitle = params.get("emotion_subtitle") || params.get("emotionSubtitle") || "";
  const wpmParam = Number(params.get("wpm"));
  const autoplay = params.get("autoplay") === "1";
  const finalMode = params.get("final") === "1";
  const listen = params.get("listen") === "1";
  const bridgeUrl = params.get("bridgeUrl");
  const stream = params.get("stream") || params.get("interface");
  const surface = params.get("surface");
  const omini = params.get("omini") === "1";

  if (Number.isFinite(wpmParam) && wpmParam >= 120) {
    state.wpm = clamp(wpmParam, 120, 1000);
  }

  if (bridgeUrl) {
    state.bridgeUrl = bridgeUrl;
  }
  if (stream?.trim()) {
    state.bridgeStream = stream.trim();
  }
  if ((surface && surface.trim()) || omini) {
    state.surfaceMode = omini ? "omini" : surface.trim().toLowerCase();
  } else if (window.matchMedia("(max-width: 540px), (max-height: 740px)").matches) {
    state.surfaceMode = "omini";
  }

  if (text.trim() || imageUrl.trim() || blockText.trim() || emotion.trim()) {
    addSource({
      title,
      kind: "Agent URL",
      text,
      displayMode,
      imageUrl,
      imageAlt,
      caption,
      blockText,
      blockTitle,
      emotion,
      emotionSubtitle,
      finalModeRequested: finalMode,
      activate: true,
      interrupt: true
    });
    setBridgeStatus(`Message agent charge depuis l'URL: ${title}`, "success");
  }

  savePreferences();
  return { autoplay, listen, finalMode };
}

function applySurfaceMode() {
  document.body.classList.toggle("omini-surface", state.surfaceMode === "omini");
}

function handleAddTextSource() {
  const rawText = elements.sourceTextInput.value.trim();
  if (!rawText) {
    setStatus("Le champ texte est vide.", "warning");
    return;
  }

  const title = elements.sourceTitleInput.value.trim() || `Texte ${state.sources.length + 1}`;
  addSource({
    title,
    kind: "Texte",
    text: normalizeWhitespace(rawText)
  });

  elements.sourceTitleInput.value = "";
  elements.sourceTextInput.value = "";
  setStatus(`Source "${title}" ajoutee.`, "success");
}

async function handlePasteClipboard() {
  if (!navigator.clipboard?.readText) {
    setStatus("Le presse-papiers n'est pas disponible dans ce navigateur.", "error");
    return;
  }

  try {
    const clipboardText = (await navigator.clipboard.readText()).trim();
    if (!clipboardText) {
      setStatus("Le presse-papiers est vide.", "warning");
      return;
    }

    addSource({
      title: `Presse-papiers ${state.sources.length + 1}`,
      kind: "Clipboard",
      text: normalizeWhitespace(clipboardText)
    });
    setStatus("Contenu du presse-papiers importe.", "success");
  } catch (error) {
    console.error(error);
    setStatus("Impossible de lire le presse-papiers. Autorise l'acces puis reessaie.", "error");
  }
}

async function handleFileImport(event) {
  const files = Array.from(event.target.files || []);
  if (!files.length) {
    return;
  }

  await importFiles(files);
  event.target.value = "";
}

async function handleUrlImport() {
  const rawUrl = elements.urlInput.value.trim();
  if (!rawUrl) {
    setStatus("Entre une URL a importer.", "warning");
    return;
  }

  try {
    const url = normalizeUrl(rawUrl);
    setStatus(`Import de ${url} en cours...`, "warning");
    const imported = await importFromUrl(url);
    addSource({
      title: imported.title,
      kind: imported.kind,
      text: imported.text
    });
    elements.urlInput.value = "";
    setStatus(`URL importee: ${imported.title}`, "success");
  } catch (error) {
    console.error(error);
    setStatus(error.message || "Impossible d'importer cette URL.", "error");
  }
}

async function handleDropImport(event) {
  const files = Array.from(event.dataTransfer?.files || []);
  if (files.length) {
    await importFiles(files);
    return;
  }

  const droppedText = event.dataTransfer?.getData("text/plain")?.trim();
  if (!droppedText) {
    setStatus("Rien a importer depuis le glisser-deposer.", "warning");
    return;
  }

  if (looksLikeUrl(droppedText)) {
    elements.urlInput.value = droppedText;
    await handleUrlImport();
    return;
  }

  addSource({
    title: `Depot ${state.sources.length + 1}`,
    kind: "Drop",
    text: normalizeWhitespace(droppedText)
  });
  setStatus("Texte importe depuis la zone de depot.", "success");
}

function handleSourceListClick(event) {
  const button = event.target.closest("[data-action]");
  if (!button) {
    return;
  }

  const { action, id } = button.dataset;
  if (action === "select") {
    selectSource(id);
    return;
  }

  if (action === "delete") {
    removeSource(id);
  }
}

function handleSeek(event) {
  state.currentIndex = Number(event.target.value) || 0;
  renderReader();
  renderMeta();
  if (state.isPlaying) {
    restartPlaybackTimer();
  }
}

function handleWpmChange(event) {
  state.wpm = Number(event.target.value) || 320;
  savePreferences();
  renderMeta();
  renderControls();
  if (state.isPlaying) {
    restartPlaybackTimer();
  }
}

function handleFontScaleChange(event) {
  state.fontScale = Number(event.target.value) || 100;
  savePreferences();
  renderControls();
}

function handleBridgeUrlChange(event) {
  state.bridgeUrl = event.target.value.trim() || getDefaultBridgeUrl();
  savePreferences();
  renderBridge();
  setBridgeStatus(`Flux agent configure: ${state.bridgeUrl}`, "success");
  if (state.bridgeListening) {
    restartBridgeListening();
  }
}

function handleBridgeStreamChange(event) {
  state.bridgeStream = event.target.value.trim() || "global";
  state.bridgeCursor = 0;
  state.bridgeSeenIds.clear();
  savePreferences();
  renderBridge();
  setBridgeStatus(`Stream actif: ${state.bridgeStream}`, "success");
  if (state.bridgeListening) {
    restartBridgeListening();
  }
}

function handleBridgeIntervalChange(event) {
  state.bridgeIntervalSeconds = Number(event.target.value) || 2;
  savePreferences();
  renderBridge();
  if (state.bridgeListening) {
    scheduleBridgePoll(250);
  }
}

function handleBridgeAutoselectChange(event) {
  state.bridgeAutoSelect = event.target.checked;
  savePreferences();
  renderBridge();
}

function toggleBridgeListening() {
  if (state.bridgeListening) {
    stopBridgeListening();
    return;
  }

  startBridgeListening();
}

function startBridgeListening({ announce = true } = {}) {
  state.bridgeListening = true;
  state.bridgeCursor = 0;
  clearBridgeTimer();
  closeBridgeEventSource();
  renderBridge();
  if (announce) {
    setBridgeStatus(`Ecoute active sur ${state.bridgeStream}`, "success");
  }
  if (canUseBridgeStream()) {
    startBridgeEventStream();
    return;
  }
  pollBridgeFeed();
}

function stopBridgeListening({ announce = true } = {}) {
  state.bridgeListening = false;
  clearBridgeTimer();
  closeBridgeEventSource();
  renderBridge();
  if (announce) {
    setBridgeStatus("Ecoute du flux agent arretee.", "warning");
  }
}

function restartBridgeListening() {
  if (!state.bridgeListening) {
    return;
  }
  stopBridgeListening({ announce: false });
  startBridgeListening({ announce: false });
}

function clearBridgeTimer() {
  if (state.bridgeTimerId !== null) {
    window.clearTimeout(state.bridgeTimerId);
    state.bridgeTimerId = null;
  }
}

function scheduleBridgePoll(delayMs = state.bridgeIntervalSeconds * 1000) {
  clearBridgeTimer();
  if (!state.bridgeListening) {
    return;
  }
  state.bridgeTimerId = window.setTimeout(() => {
    pollBridgeFeed();
  }, delayMs);
}

function closeBridgeEventSource() {
  if (state.bridgeEventSource) {
    state.bridgeEventSource.close();
    state.bridgeEventSource = null;
  }
}

function canUseBridgeStream() {
  if (!window.EventSource) {
    return false;
  }

  try {
    const bridgeBase = getBridgeBaseUrl();
    const bridgeUrl = new URL(bridgeBase);
    return /^https?:$/i.test(bridgeUrl.protocol) && bridgeUrl.origin === window.location.origin;
  } catch (error) {
    return false;
  }
}

function startBridgeEventStream() {
  try {
    const streamUrl = buildBridgeStreamUrl();
    const source = new EventSource(streamUrl);
    state.bridgeEventSource = source;

    source.onopen = () => {
      setBridgeStatus(`Stream temps reel actif: ${state.bridgeStream}`, "success");
    };

    source.addEventListener("messages", (event) => {
      const payload = JSON.parse(event.data || "{}");
      handleBridgePayload(payload, "sse");
    });

    source.onerror = () => {
      closeBridgeEventSource();
      if (state.bridgeListening) {
        setBridgeStatus("SSE indisponible, retour au polling.", "warning");
        scheduleBridgePoll(500);
      }
    };
  } catch (error) {
    console.error(error);
    scheduleBridgePoll(500);
  }
}

async function pollBridgeFeed() {
  if (!state.bridgeListening) {
    return;
  }

  try {
    const response = await fetch(buildBridgeFeedUrl(), {
      cache: "no-store",
      headers: {
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const payload = await response.json();
    handleBridgePayload(payload, "poll");
    scheduleBridgePoll();
  } catch (error) {
    console.error(error);
    setBridgeStatus(`Flux agent indisponible sur ${state.bridgeStream}: ${error.message}`, "error");
    scheduleBridgePoll(Math.max(2000, state.bridgeIntervalSeconds * 1000));
  }
}

function handleBridgePayload(payload, transport = "poll") {
  const items = normalizeBridgeItems(payload);
  const highestItemSeq = items.reduce((max, item) => Math.max(max, Number(item?.seq || 0)), 0);
  const latestSeq = Number(payload?.latest_seq || payload?.latestSeq || highestItemSeq || 0);
  if (latestSeq > state.bridgeCursor) {
    state.bridgeCursor = latestSeq;
  }

  const result = ingestBridgeItems(items);
  if (result.imported > 0) {
    const label = transport === "sse" ? "temps reel" : "polling";
    setBridgeStatus(
      `${result.imported} message${result.imported > 1 ? "s" : ""} importe${result.imported > 1 ? "s" : ""} via ${label} sur ${state.bridgeStream}.`,
      "success"
    );
    if (result.shouldAutoplay) {
      startPlaybackFromCurrent();
    }
  }
}

function normalizeBridgeItems(payload) {
  if (Array.isArray(payload)) {
    return payload;
  }
  if (Array.isArray(payload?.items)) {
    return payload.items;
  }
  if (
    typeof payload?.text === "string" ||
    payload?.image_url ||
    payload?.imageUrl ||
    payload?.block_text ||
    payload?.blockText ||
    payload?.emotion
  ) {
    return [payload];
  }
  return [];
}

function ingestBridgeItems(items) {
  let imported = 0;
  let shouldAutoplay = false;

  items.forEach((item) => {
    if (!hasBridgeContent(item)) {
      return;
    }

    const eventKey = deriveBridgeEventKey(item);
    if (state.bridgeSeenIds.has(eventKey)) {
      return;
    }
    state.bridgeSeenIds.add(eventKey);

    const source = upsertBridgeSource(item, deriveBridgeSourceId(item));

    if (!source) {
      return;
    }

    if (Number.isFinite(Number(item.wpm))) {
      state.wpm = clamp(Number(item.wpm), 120, 1000);
      savePreferences();
    }

    imported += 1;
    if (state.bridgeAutoSelect && item.autoplay !== false) {
      shouldAutoplay = true;
    }
  });

  if (imported > 0) {
    renderControls();
    renderMeta();
  }

  return { imported, shouldAutoplay };
}

function deriveBridgeMessageId(item) {
  if (item?.id != null) {
    return String(item.id);
  }
  if (item?.messageId != null) {
    return String(item.messageId);
  }
  if (item?.seq != null) {
    return `seq:${item.seq}`;
  }
  const seed = [
    item?.stream || "",
    item?.title || "",
    item?.kind || "",
    item?.text || "",
    item?.image_url || item?.imageUrl || "",
    item?.block_text || item?.blockText || "",
    item?.emotion || ""
  ].join("|");
  return seed.slice(0, 512);
}

function deriveBridgeEventKey(item) {
  if (item?.seq != null) {
    return `seq:${item.seq}`;
  }
  return `event:${deriveBridgeMessageId(item)}`;
}

function deriveBridgeSourceId(item) {
  return deriveBridgeMessageId(item);
}

function readBridgeString(item, ...keys) {
  for (const key of keys) {
    const value = item?.[key];
    if (typeof value === "string" || typeof value === "number") {
      const nextValue = String(value);
      if (nextValue.trim()) {
        return nextValue;
      }
    }
  }
  return "";
}

function readBridgeBoolean(item, ...keys) {
  for (const key of keys) {
    const value = item?.[key];
    if (typeof value === "boolean") {
      return value;
    }
    if (typeof value === "number") {
      return value !== 0;
    }
    if (typeof value === "string") {
      const lowered = value.trim().toLowerCase();
      if (["1", "true", "yes", "on"].includes(lowered)) {
        return true;
      }
      if (["0", "false", "no", "off"].includes(lowered)) {
        return false;
      }
    }
  }
  return null;
}

function buildSourceText({ displayMode, title, text, summary, caption, blockText, emotion, emotionSubtitle, imageAlt }) {
  const normalizedText = normalizeWhitespace(text);
  if (normalizedText) {
    return normalizedText;
  }

  switch (normalizeDisplayMode(displayMode)) {
    case "image":
      return normalizeWhitespace([title, caption, imageAlt, summary].filter(Boolean).join(" "));
    case "words":
      return normalizeWhitespace([blockText, summary, title].filter(Boolean).join(" "));
    case "emotion":
      return normalizeWhitespace([emotion, emotionSubtitle, summary, title].filter(Boolean).join(" "));
    default:
      return normalizeWhitespace([summary, title].filter(Boolean).join(" "));
  }
}

function applyBridgePresentation(source, item) {
  if (!source || state.selectedSourceId !== source.id) {
    return;
  }

  const finalRequested = readBridgeBoolean(item, "final", "final_mode", "finalMode");
  if (finalRequested === true) {
    enterFinalMode();
  } else if (finalRequested === false) {
    exitFinalMode();
  }
}

function hasBridgeContent(item) {
  const text = typeof item?.text === "string" ? item.text : "";
  const imageUrl = readBridgeString(item, "image_url", "imageUrl");
  const blockText = readBridgeString(item, "block_text", "blockText");
  const emotion = readBridgeString(item, "emotion");
  return Boolean(text.trim() || imageUrl || blockText || emotion || item?.id != null || item?.messageId != null);
}

function upsertBridgeSource(item, bridgeId) {
  const existing = findSourceByBridgeId(bridgeId);
  const operation = String(item?.op || item?.mode || (existing ? "append" : "replace")).toLowerCase();
  const liveStatus = normalizeLiveStatus(item, existing);
  const rawChunk = typeof item?.text === "string" ? item.text : "";
  const baseRawText = existing?.rawText || existing?.text || "";
  const summary = readBridgeString(item, "summary");
  const nextSummary = summary || existing?.summary || "";
  const displayMode = inferDisplayMode({
    displayMode: readBridgeString(item, "display_mode", "displayMode") || existing?.displayMode || "reader",
    imageUrl: readBridgeString(item, "image_url", "imageUrl") || existing?.imageUrl || "",
    blockText: readBridgeString(item, "block_text", "blockText") || existing?.blockText || "",
    emotion: readBridgeString(item, "emotion") || existing?.emotion || "",
    text: rawChunk || baseRawText
  });

  let nextRawText = baseRawText;
  if (!existing) {
    nextRawText = rawChunk;
  } else if (operation === "replace") {
    nextRawText = rawChunk || baseRawText;
  } else if (operation === "append") {
    nextRawText = `${baseRawText}${rawChunk}`;
  } else if (rawChunk) {
    nextRawText = rawChunk;
  }

  const nextImageUrl = readBridgeString(item, "image_url", "imageUrl") || existing?.imageUrl || "";
  const nextImageAlt = readBridgeString(item, "image_alt", "imageAlt") || existing?.imageAlt || "";
  const nextCaption = readBridgeString(item, "caption") || existing?.caption || "";
  const nextBlockText = normalizeWhitespace(
    readBridgeString(item, "block_text", "blockText") || existing?.blockText || ""
  );
  const nextBlockTitle = readBridgeString(item, "block_title", "blockTitle") || existing?.blockTitle || "";
  const nextEmotion = readBridgeString(item, "emotion") || existing?.emotion || "";
  const nextEmotionSubtitle = readBridgeString(item, "emotion_subtitle", "emotionSubtitle") || existing?.emotionSubtitle || "";
  const finalModeRequested = readBridgeBoolean(item, "final", "final_mode", "finalMode");
  const nextText = buildSourceText({
    displayMode,
    title: item.title || existing?.title || `Agent ${state.sources.length + 1}`,
    text: nextRawText,
    summary: nextSummary,
    caption: nextCaption,
    blockText: nextBlockText,
    emotion: nextEmotion,
    emotionSubtitle: nextEmotionSubtitle,
    imageAlt: nextImageAlt
  });
  if (!existing) {
    const source = addSource({
      title: item.title || item.name || `Agent ${state.sources.length + 1}`,
      kind: buildAgentKindLabel(item),
      text: nextText,
      rawText: nextRawText,
      summary: nextSummary,
      bridgeId,
      stream: item.stream || "global",
      liveStatus,
      displayMode,
      imageUrl: nextImageUrl,
      imageAlt: nextImageAlt,
      caption: nextCaption,
      blockText: nextBlockText,
      blockTitle: nextBlockTitle,
      emotion: nextEmotion,
      emotionSubtitle: nextEmotionSubtitle,
      finalModeRequested: finalModeRequested ?? false,
      activate: state.bridgeAutoSelect,
      interrupt: state.bridgeAutoSelect
    });
    if (source && state.bridgeAutoSelect) {
      applyBridgePresentation(source, item);
    }
    return source;
  }

  existing.title = readBridgeString(item, "title", "name") || existing.title;
  existing.kind = readBridgeString(item, "kind", "source") || existing.kind;
  existing.stream = item.stream || existing.stream || "global";
  existing.liveStatus = liveStatus;
  existing.summary = nextSummary;
  existing.rawText = nextRawText;
  existing.text = nextText || existing.text;
  existing.displayMode = displayMode;
  existing.imageUrl = nextImageUrl;
  existing.imageAlt = nextImageAlt;
  existing.caption = nextCaption;
  existing.blockText = nextBlockText;
  existing.blockTitle = nextBlockTitle;
  existing.emotion = nextEmotion;
  existing.emotionSubtitle = nextEmotionSubtitle;
  if (finalModeRequested !== null) {
    existing.finalModeRequested = finalModeRequested;
  }
  existing.wordCount = displayMode === "reader" ? tokenize(existing.text).length : 0;

  const shouldActivate = state.bridgeAutoSelect && state.selectedSourceId !== existing.id;
  if (shouldActivate) {
    stopPlayback({ silent: true });
    state.selectedSourceId = existing.id;
    state.currentIndex = 0;
  }

  render();
  if (state.bridgeAutoSelect) {
    applyBridgePresentation(existing, item);
  }
  if (state.isPlaying && state.selectedSourceId === existing.id) {
    restartPlaybackTimer();
  }
  return existing;
}

function findSourceByBridgeId(bridgeId) {
  return state.sources.find((source) => source.bridgeId === bridgeId) || null;
}

function normalizeLiveStatus(item, existing) {
  const explicitStatus = String(item?.status || "").trim().toLowerCase();
  if (explicitStatus) {
    return explicitStatus;
  }
  if (item?.live === true) {
    return "streaming";
  }
  if (item?.live === false) {
    return "complete";
  }
  if (existing?.liveStatus) {
    return existing.liveStatus;
  }
  return "complete";
}

async function handleCopyPreview() {
  const active = getActiveSource();
  if (!active) {
    setStatus("Aucune source a copier.", "warning");
    return;
  }

  try {
    await navigator.clipboard.writeText(buildPreviewText(active));
    setStatus("Texte copie dans le presse-papiers.", "success");
  } catch (error) {
    console.error(error);
    setStatus("Impossible de copier le texte.", "error");
  }
}

function handleKeydown(event) {
  const target = event.target;
  const isTyping = target instanceof HTMLElement && ["INPUT", "TEXTAREA"].includes(target.tagName);

  if (isTyping) {
    return;
  }

  switch (event.key) {
    case " ":
      event.preventDefault();
      togglePlayback();
      break;
    case "ArrowRight":
      event.preventDefault();
      stepWord(1);
      break;
    case "ArrowLeft":
      event.preventDefault();
      stepWord(-1);
      break;
    case "ArrowUp":
      event.preventDefault();
      state.wpm = clamp(state.wpm + 20, 120, 1000);
      renderMeta();
      renderControls();
      if (state.isPlaying) {
        restartPlaybackTimer();
      }
      break;
    case "ArrowDown":
      event.preventDefault();
      state.wpm = clamp(state.wpm - 20, 120, 1000);
      renderMeta();
      renderControls();
      if (state.isPlaying) {
        restartPlaybackTimer();
      }
      break;
    case "f":
    case "F":
      event.preventDefault();
      toggleFinalMode();
      break;
    case "m":
    case "M":
      event.preventDefault();
      toggleFinalMode();
      break;
    case "r":
    case "R":
      event.preventDefault();
      resetPlayback();
      break;
    default:
      break;
  }
}

function addSampleSource() {
  const sampleText = [
    "La lecture RSVP affiche les mots un par un au meme endroit.",
    "Ton regard n'a plus besoin de balayer la ligne complete, ce qui reduit la fatigue oculaire.",
    "En reglant la vitesse, les pauses et la taille, tu peux transformer une note, un article ou un chapitre en experience de lecture plein ecran."
  ].join(" ");

  addSource({
    title: "Exemple RSVP",
    kind: "Demo",
    text: sampleText
  });
  setStatus("Source d'exemple ajoutee.", "success");
}

function addSource({
  title,
  kind,
  text,
  rawText = text,
  summary = "",
  bridgeId = "",
  stream = "global",
  liveStatus = "complete",
  displayMode = "reader",
  imageUrl = "",
  imageAlt = "",
  caption = "",
  blockText = "",
  blockTitle = "",
  emotion = "",
  emotionSubtitle = "",
  finalModeRequested = false,
  activate = true,
  interrupt = activate
}) {
  const resolvedDisplayMode = inferDisplayMode({
    displayMode,
    imageUrl,
    blockText,
    emotion,
    text
  });
  const normalizedText = buildSourceText({
    displayMode: resolvedDisplayMode,
    title,
    text,
    summary,
    caption,
    blockText,
    emotion,
    emotionSubtitle,
    imageAlt
  });
  if (!normalizedText) {
    setStatus("La source ne contient pas assez de texte apres nettoyage.", "warning");
    return null;
  }

  const source = {
    id: createId(),
    title: title.trim() || `Source ${state.sources.length + 1}`,
    kind,
    summary: normalizeWhitespace(summary),
    rawText: String(rawText || text || ""),
    text: normalizedText,
    wordCount: resolvedDisplayMode === "reader" ? tokenize(normalizedText).length : 0,
    bridgeId,
    stream,
    liveStatus,
    displayMode: resolvedDisplayMode,
    imageUrl: String(imageUrl || "").trim(),
    imageAlt: normalizeWhitespace(imageAlt),
    caption: normalizeWhitespace(caption),
    blockText: normalizeWhitespace(blockText),
    blockTitle: normalizeWhitespace(blockTitle),
    emotion: normalizeWhitespace(emotion),
    emotionSubtitle: normalizeWhitespace(emotionSubtitle),
    finalModeRequested: Boolean(finalModeRequested)
  };

  state.sources = [...state.sources, source];
  if (interrupt) {
    stopPlayback({ silent: true });
  }
  if (activate) {
    state.currentIndex = 0;
    state.selectedSourceId = source.id;
  }
  render();
  return source;
}

function removeSource(id) {
  const removed = state.sources.find((source) => source.id === id);
  state.sources = state.sources.filter((source) => source.id !== id);

  if (!state.sources.length) {
    state.selectedSourceId = null;
    state.currentIndex = 0;
    stopPlayback({ silent: true });
    render();
    setStatus(`Source "${removed?.title || "supprimee"}" retiree.`, "success");
    return;
  }

  if (state.selectedSourceId === id || state.selectedSourceId === ALL_SOURCES_ID) {
    state.selectedSourceId = state.sources[0].id;
    state.currentIndex = 0;
    stopPlayback({ silent: true });
  }

  render();
  setStatus(`Source "${removed?.title || "supprimee"}" retiree.`, "success");
}

function selectSource(id) {
  if (id !== ALL_SOURCES_ID && !state.sources.some((source) => source.id === id)) {
    setStatus("Cette source n'existe plus.", "error");
    return;
  }

  stopPlayback({ silent: true });
  state.selectedSourceId = id;
  state.currentIndex = 0;
  render();
}

function getActiveSource() {
  if (!state.sources.length) {
    return null;
  }

  if (!state.selectedSourceId) {
    state.selectedSourceId = state.sources[0].id;
  }

  if (state.selectedSourceId === ALL_SOURCES_ID) {
    const combinedText = getCombinedText();
    return {
      id: ALL_SOURCES_ID,
      title: "Session combinee",
      kind: "Mix",
      text: combinedText,
      displayMode: "reader"
    };
  }

  return state.sources.find((source) => source.id === state.selectedSourceId) || state.sources[0];
}

function getCombinedText() {
  return state.sources.map((source) => source.text).join(" \n\n ");
}

function togglePlayback() {
  const active = getActiveSource();
  if (active && getSourceDisplayMode(active) !== "reader") {
    setStatus("Cette scene n'utilise pas la lecture rapide mot par mot.", "warning");
    return;
  }

  if (!state.activeWords.length) {
    setStatus("Ajoute une source avant de lancer la lecture.", "warning");
    return;
  }

  if (state.isPlaying) {
    stopPlayback({ silent: false });
    return;
  }

  if (state.currentIndex >= state.activeWords.length - 1) {
    state.currentIndex = 0;
  }

  state.isPlaying = true;
  renderControls();
  restartPlaybackTimer();
}

function startPlaybackFromCurrent() {
  if (!state.activeWords.length) {
    return;
  }

  stopPlayback({ silent: true });
  state.currentIndex = clamp(state.currentIndex, 0, Math.max(state.activeWords.length - 1, 0));
  state.isPlaying = true;
  renderControls();
  renderMeta();
  restartPlaybackTimer();
}

function restartPlaybackTimer() {
  clearPlaybackTimer();
  if (!state.isPlaying) {
    return;
  }

  const currentWord = state.activeWords[state.currentIndex] || "";
  const delay = getWordDelay(currentWord);
  state.timerId = window.setTimeout(playbackTick, delay);
}

function playbackTick() {
  if (!state.isPlaying) {
    return;
  }

  if (state.currentIndex >= state.activeWords.length - 1) {
    const active = getActiveSource();
    if (active?.liveStatus === "streaming") {
      renderMeta();
      state.timerId = window.setTimeout(playbackTick, 140);
      return;
    }
    handlePlaybackComplete();
    return;
  }

  state.currentIndex += 1;
  renderReader();
  renderMeta();
  restartPlaybackTimer();
}

function handlePlaybackComplete() {
  stopPlayback({ silent: true });

  if (state.autoAdvance && state.selectedSourceId !== ALL_SOURCES_ID) {
    const currentSourceIndex = state.sources.findIndex((source) => source.id === state.selectedSourceId);
    const nextSource = state.sources[currentSourceIndex + 1];

    if (nextSource) {
      state.selectedSourceId = nextSource.id;
      state.currentIndex = 0;
      render();
      togglePlayback();
      setStatus(`Lecture terminee. Passage a "${nextSource.title}".`, "success");
      return;
    }
  }

  setStatus("Lecture terminee.", "success");
  render();
}

function stopPlayback({ silent = false } = {}) {
  state.isPlaying = false;
  clearPlaybackTimer();
  renderControls();

  if (!silent) {
    setStatus("Lecture en pause.", "warning");
  }
}

function clearPlaybackTimer() {
  if (state.timerId !== null) {
    window.clearTimeout(state.timerId);
    state.timerId = null;
  }
}

function resetPlayback() {
  stopPlayback({ silent: true });
  state.currentIndex = 0;
  renderReader();
  renderMeta();
  setStatus("Lecture remise au debut.", "success");
}

function stepWord(direction) {
  if (!state.activeWords.length) {
    return;
  }

  stopPlayback({ silent: true });
  state.currentIndex = clamp(state.currentIndex + direction, 0, state.activeWords.length - 1);
  renderReader();
  renderMeta();
}

async function importFiles(files) {
  const supportedFiles = files.filter((file) => file.size > 0);

  if (!supportedFiles.length) {
    setStatus("Aucun fichier exploitable trouve.", "warning");
    return;
  }

  let importedCount = 0;
  for (const file of supportedFiles) {
    try {
      const source = await readFileAsSource(file);
      addSource(source);
      importedCount += 1;
    } catch (error) {
      console.error(error);
      setStatus(`Erreur pendant l'import de ${file.name}: ${error.message}`, "error");
    }
  }

  if (importedCount) {
    setStatus(`${importedCount} fichier${importedCount > 1 ? "s" : ""} importe${importedCount > 1 ? "s" : ""}.`, "success");
  }
}

async function readFileAsSource(file) {
  const extension = file.name.split(".").pop()?.toLowerCase() || "txt";
  const rawText = await file.text();

  let text;
  switch (extension) {
    case "html":
    case "htm":
      text = extractTextFromHtml(rawText);
      break;
    case "md":
    case "markdown":
      text = extractTextFromMarkdown(rawText);
      break;
    case "json":
      text = extractTextFromJson(rawText);
      break;
    case "csv":
      text = rawText.replace(/[,;]+/g, " ");
      break;
    default:
      text = rawText;
      break;
  }

  return {
    title: file.name.replace(/\.[^.]+$/, ""),
    kind: `Fichier ${extension.toUpperCase()}`,
    text
  };
}

async function importFromUrl(url) {
  const directAttempt = await tryFetchText(url);
  if (directAttempt.ok) {
    return {
      title: directAttempt.title || new URL(url).hostname,
      kind: "URL",
      text: directAttempt.text
    };
  }

  const proxyUrl = `https://r.jina.ai/http://${url.replace(/^https?:\/\//i, "")}`;
  const proxyAttempt = await tryFetchText(proxyUrl, { preferMarkdown: true });
  if (proxyAttempt.ok) {
    return {
      title: proxyAttempt.title || new URL(url).hostname,
      kind: "URL proxifiee",
      text: proxyAttempt.text
    };
  }

  throw new Error("Import impossible. Le site bloque probablement l'acces direct et le proxy de secours.");
}

async function tryFetchText(url, options = {}) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return { ok: false };
    }

    const contentType = response.headers.get("content-type") || "";
    const rawText = await response.text();
    const title = extractTitle(rawText);

    let text = rawText;
    if (options.preferMarkdown) {
      text = extractTextFromMarkdown(stripProxyHeaders(rawText));
    } else if (contentType.includes("html") || /<html[\s>]/i.test(rawText)) {
      text = extractTextFromHtml(rawText);
    }

    text = normalizeWhitespace(text);
    if (!text) {
      return { ok: false };
    }

    return { ok: true, text, title };
  } catch (error) {
    return { ok: false, error };
  }
}

function extractTextFromHtml(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  doc.querySelectorAll("script, style, noscript, svg, iframe, template").forEach((node) => node.remove());

  const candidates = [
    ...doc.querySelectorAll("article, main, [role='main'], .post, .content, .article, .entry-content, .markdown-body"),
    doc.body
  ].filter(Boolean);

  let bestText = "";
  let bestTitle = doc.title || "";

  candidates.forEach((candidate) => {
    const blocks = Array.from(candidate.querySelectorAll("h1, h2, h3, p, li, blockquote, pre"))
      .map((node) => node.textContent?.trim() || "")
      .filter(Boolean);
    const candidateText = blocks.join(" \n ");
    if (candidateText.length > bestText.length) {
      bestText = candidateText;
      bestTitle = candidate.querySelector("h1")?.textContent?.trim() || bestTitle;
    }
  });

  return normalizeWhitespace(bestTitle ? `${bestTitle}. ${bestText}` : bestText);
}

function extractTextFromMarkdown(markdown) {
  return normalizeWhitespace(
    markdown
      .replace(/^#{1,6}\s+/gm, "")
      .replace(/```[\s\S]*?```/g, " ")
      .replace(/`([^`]+)`/g, "$1")
      .replace(/!\[[^\]]*]\([^)]*\)/g, " ")
      .replace(/\[([^\]]+)]\([^)]*\)/g, "$1")
      .replace(/^>\s?/gm, "")
      .replace(/[*_~>-]/g, " ")
  );
}

function extractTextFromJson(rawJson) {
  try {
    const parsed = JSON.parse(rawJson);
    const values = [];

    const walk = (value) => {
      if (value == null) {
        return;
      }
      if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
        values.push(String(value));
        return;
      }
      if (Array.isArray(value)) {
        value.forEach(walk);
        return;
      }
      if (typeof value === "object") {
        Object.values(value).forEach(walk);
      }
    };

    walk(parsed);
    return normalizeWhitespace(values.join(" "));
  } catch (error) {
    return normalizeWhitespace(rawJson.replace(/[{}\[\]":,]/g, " "));
  }
}

function stripProxyHeaders(rawText) {
  return rawText
    .replace(/^Title:\s.*$/gim, "")
    .replace(/^URL Source:\s.*$/gim, "")
    .replace(/^Markdown Content:\s*$/gim, "")
    .trim();
}

function extractTitle(rawText) {
  const htmlTitle = rawText.match(/<title>([^<]+)<\/title>/i)?.[1]?.trim();
  if (htmlTitle) {
    return htmlTitle;
  }

  const markdownTitle = rawText.match(/^#\s+(.+)$/m)?.[1]?.trim();
  return markdownTitle || "";
}

function splitWordForDisplay(word) {
  const cleaned = word || "";
  if (!cleaned.trim()) {
    return { prefix: "", pivot: "|", suffix: "" };
  }

  const prefixMatch = cleaned.match(/^[^\p{L}\p{N}]+/u);
  const suffixMatch = cleaned.match(/[^\p{L}\p{N}]+$/u);
  const prefixPunctuation = prefixMatch ? prefixMatch[0] : "";
  const suffixPunctuation = suffixMatch ? suffixMatch[0] : "";
  const core = cleaned.slice(prefixPunctuation.length, cleaned.length - suffixPunctuation.length) || cleaned;
  const pivotIndex = Math.min(getPivotIndex(core), Math.max(core.length - 1, 0));

  return {
    prefix: `${prefixPunctuation}${core.slice(0, pivotIndex)}`,
    pivot: core.charAt(pivotIndex) || cleaned.charAt(0) || "|",
    suffix: `${core.slice(pivotIndex + 1)}${suffixPunctuation}`
  };
}

function getPivotIndex(word) {
  const length = word.length;
  if (length <= 1) {
    return 0;
  }
  if (length <= 5) {
    return 1;
  }
  if (length <= 9) {
    return 2;
  }
  if (length <= 13) {
    return 3;
  }
  return 4;
}

function getWordDelay(word) {
  const baseDelay = 60000 / state.wpm;
  if (!state.smartPause) {
    return baseDelay;
  }

  let multiplier = 1;
  const alphanumeric = word.replace(/[^\p{L}\p{N}]/gu, "");

  if (alphanumeric.length >= 7) {
    multiplier += 0.12;
  }
  if (alphanumeric.length >= 11) {
    multiplier += 0.18;
  }
  if (/[,:;]$/.test(word)) {
    multiplier += 0.35;
  }
  if (/[.!?]$/.test(word)) {
    multiplier += 0.75;
  }
  if (/^\d/.test(word)) {
    multiplier += 0.12;
  }

  return Math.round(baseDelay * multiplier);
}

function toggleFinalMode() {
  if (document.body.classList.contains("final-mode")) {
    exitFinalMode();
    return;
  }
  enterFinalMode();
}

function enterFinalMode({ requestFullscreen = true } = {}) {
  document.body.classList.add("final-mode");
  renderSurfaceActions();

  if (!requestFullscreen || document.fullscreenElement) {
    return;
  }

  document.documentElement.requestFullscreen?.().catch((error) => {
    console.error(error);
    setStatus("Le plein ecran a ete refuse, mais le mode final reste actif.", "warning");
  });
}

function exitFinalMode() {
  document.body.classList.remove("final-mode");
  renderSurfaceActions();

  if (!document.fullscreenElement) {
    return;
  }

  document.exitFullscreen?.().catch((error) => {
    console.error(error);
    setStatus("Impossible de quitter le plein ecran proprement.", "error");
  });
}

function normalizeWhitespace(text) {
  return String(text || "")
    .replace(/\r/g, " ")
    .replace(/\t/g, " ")
    .replace(/\u00A0/g, " ")
    .replace(/\s*\n\s*/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function tokenize(text) {
  return normalizeWhitespace(text).match(/\S+/g) || [];
}

function normalizeUrl(value) {
  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  return new URL(withProtocol).toString();
}

function looksLikeUrl(value) {
  try {
    normalizeUrl(value);
    return true;
  } catch (error) {
    return false;
  }
}

function formatRemainingTime(remainingWords, wpm) {
  if (!remainingWords) {
    return "0s";
  }

  const totalSeconds = Math.max(1, Math.ceil((remainingWords / wpm) * 60));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  if (!minutes) {
    return `${seconds}s`;
  }

  return `${minutes}m ${String(seconds).padStart(2, "0")}s`;
}

function getDefaultBridgeUrl() {
  if (/^https?:$/i.test(window.location.protocol)) {
    return `${window.location.origin}/api/feed`;
  }
  return "http://127.0.0.1:8765/api/feed";
}

function getBridgeBaseUrl() {
  const feedUrl = new URL(state.bridgeUrl, window.location.href);
  feedUrl.pathname = feedUrl.pathname.replace(/\/api\/feed$/i, "");
  return feedUrl.toString().replace(/\/$/, "");
}

function buildBridgeFeedUrl() {
  const url = new URL(state.bridgeUrl, window.location.href);
  url.searchParams.set("after", String(state.bridgeCursor));
  url.searchParams.set("stream", state.bridgeStream);
  url.searchParams.set("limit", "100");
  url.searchParams.set("_ts", String(Date.now()));
  return url.toString();
}

function buildBridgeStreamUrl() {
  const url = new URL(getBridgeBaseUrl(), window.location.href);
  url.pathname = `${url.pathname.replace(/\/$/, "")}/api/stream`;
  url.searchParams.set("after", String(state.bridgeCursor));
  url.searchParams.set("stream", state.bridgeStream);
  return url.toString();
}

function buildAgentKindLabel(item) {
  return item?.kind || item?.source || "Agent";
}

function withCacheBust(url) {
  const nextUrl = new URL(url, window.location.href);
  nextUrl.searchParams.set("_ts", String(Date.now()));
  return nextUrl.toString();
}

function setStatus(message, tone = "success") {
  elements.statusBanner.textContent = message;
  elements.statusBanner.className = "status-banner";

  if (tone === "warning") {
    elements.statusBanner.classList.add("is-warning");
  } else if (tone === "error") {
    elements.statusBanner.classList.add("is-error");
  } else if (tone === "success") {
    elements.statusBanner.classList.add("is-success");
  }
}

function setBridgeStatus(message, tone = "success") {
  elements.bridgeStatusBanner.textContent = message;
  elements.bridgeStatusBanner.className = "status-banner";

  if (tone === "warning") {
    elements.bridgeStatusBanner.classList.add("is-warning");
  } else if (tone === "error") {
    elements.bridgeStatusBanner.classList.add("is-error");
  } else if (tone === "success") {
    elements.bridgeStatusBanner.classList.add("is-success");
  }
}

function createId() {
  return `source_${Date.now()}_${Math.random().toString(16).slice(2, 8)}`;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
