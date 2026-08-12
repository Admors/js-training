/* =========================================================================
   run_exam.js — logique de l'application
   Entraînement QCM JS / TypeScript
   -------------------------------------------------------------------------
   Structure du fichier :
     1. Chargement des données (questions.json, avec repli hors-ligne)
     2. Persistance (historique + statistiques par catégorie, localStorage)
     3. Modes d'entraînement
     4. Moteur de session (mélange questions/réponses, scoring, chrono)
     5. Rendu (écrans start / quiz / résultats)
     6. Câblage des événements
   ========================================================================= */
(() => {
  "use strict";

  /* ============================== 1. DONNÉES ============================== */

  const DATA_URL = "questions.json";
  let CATEGORIES = {};
  let TIPS = {};
  let QUESTIONS = [];

  async function loadData() {
    // On essaie d'abord le fichier JSON (fonctionne quand la page est servie
    // via http/https, ex. Live Server). Si le navigateur bloque fetch() sur
    // file:// (ouverture directe du fichier), on retombe sur questions-data.js
    // qui contient exactement les mêmes données, chargé via <script> classique.
    try {
      const res = await fetch(DATA_URL, { cache: "no-store" });
      if (!res.ok) throw new Error("HTTP " + res.status);
      return await res.json();
    } catch (err) {
      if (window.QUIZ_DATA) return window.QUIZ_DATA;
      throw err;
    }
  }

  /* ============================== 2. PERSISTANCE ============================ */

  const LS_STATS_KEY = "runexam_cat_stats_v1";
  const LS_HISTORY_KEY = "runexam_history_v1";
  const WEAK_THRESHOLD = 0.7;   // taux de réussite en-dessous duquel une catégorie est "faible"
  const WEAK_MIN_ATTEMPTS = 3;  // nombre minimum de réponses avant de juger une catégorie

  function loadCumulativeStats() {
    try {
      return JSON.parse(localStorage.getItem(LS_STATS_KEY)) || {};
    } catch {
      return {};
    }
  }

  function saveCumulativeStats(stats) {
    try { localStorage.setItem(LS_STATS_KEY, JSON.stringify(stats)); } catch { /* stockage indisponible : on ignore */ }
  }

  function mergeSessionIntoStats(catStats) {
    const stats = loadCumulativeStats();
    Object.keys(catStats).forEach(cat => {
      const s = catStats[cat];
      if (!s.total) return;
      if (!stats[cat]) stats[cat] = { correct: 0, total: 0 };
      stats[cat].correct += s.correct;
      stats[cat].total += s.total;
    });
    saveCumulativeStats(stats);
    return stats;
  }

  function getWeakCategories(stats) {
    return Object.keys(stats).filter(cat => {
      const s = stats[cat];
      return s.total >= WEAK_MIN_ATTEMPTS && (s.correct / s.total) < WEAK_THRESHOLD;
    });
  }

  function loadHistory() {
    try { return JSON.parse(localStorage.getItem(LS_HISTORY_KEY)) || []; } catch { return []; }
  }

  function pushHistory(entry) {
    const hist = loadHistory();
    hist.push(entry);
    while (hist.length > 25) hist.shift();
    try { localStorage.setItem(LS_HISTORY_KEY, JSON.stringify(hist)); } catch { /* ignore */ }
    return hist;
  }

  /* ============================== 3. MODES ============================== */

  const MODES = {
    speed: {
      key: "speed", icon: "⚡", label: "Rapide",
      desc: "15 questions au hasard, 60s par question. Pour un tour sous pression.",
      count: 15, timerSeconds: 60,
    },
    standard: {
      key: "standard", icon: "▸", label: "Standard",
      desc: "60 questions aléatoires, sans chrono. Le format classique.",
      count: 60, timerSeconds: 0,
    },
    full: {
      key: "full", icon: "∎", label: "Complet",
      desc: "Toutes les questions disponibles. Revue exhaustive avant l'examen.",
      count: Infinity, timerSeconds: 0,
    },
    weak: {
      key: "weak", icon: "▲", label: "Points faibles",
      desc: "Uniquement tes catégories sous 70% de réussite, d'après ton historique.",
      count: Infinity, timerSeconds: 0, requiresHistory: true,
    },
  };

  /* ============================== 4. ÉTAT DE SESSION ============================ */

  const state = {
    mode: "standard",
    selectedCats: new Set(),   // vide = toutes les catégories
    order: [],                 // indices dans QUESTIONS, dans l'ordre de la session
    optionMaps: [],            // pour chaque question mcq : options mélangées {text,isCorrect}
    idx: 0,
    answered: false,
    liveScore: 0,
    catStats: {},
    review: [],                // historique de session pour l'écran de résultats
    timerId: null,
    timeLeft: 0,
  };

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function escapeHtml(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function buildPool() {
    const cumulativeStats = loadCumulativeStats();
    let poolIndices = QUESTIONS.map((_, i) => i);

    if (state.mode === "weak") {
      const weakCats = getWeakCategories(cumulativeStats);
      if (weakCats.length > 0) {
        poolIndices = poolIndices.filter(i => weakCats.includes(QUESTIONS[i].cat));
      }
    }

    if (state.selectedCats.size > 0) {
      poolIndices = poolIndices.filter(i => state.selectedCats.has(QUESTIONS[i].cat));
    }

    return poolIndices;
  }

  function startSession() {
    const modeConf = MODES[state.mode];
    const pool = shuffle(buildPool());
    const count = Math.min(modeConf.count, pool.length);
    state.order = pool.slice(0, count);
    state.optionMaps = state.order.map(qi => {
      const q = QUESTIONS[qi];
      if (q.type !== "mcq") return null;
      const withFlag = q.options.map((opt, i) => ({ text: opt, isCorrect: i === q.correct }));
      return shuffle(withFlag);
    });
    state.idx = 0;
    state.liveScore = 0;
    state.review = [];
    state.catStats = {};
    Object.keys(CATEGORIES).forEach(k => (state.catStats[k] = { correct: 0, total: 0 }));

    showScreen("quiz");
    document.getElementById("live-total").textContent = state.order.length;
    renderQuestion();
  }

  function currentQuestion() {
    return QUESTIONS[state.order[state.idx]];
  }

  /* ============================== 5. RENDU ============================== */

  function showScreen(name) {
    ["start", "quiz", "results"].forEach(s => {
      document.getElementById("screen-" + s).classList.toggle("hidden", s !== name);
    });
  }

  function renderStartScreen() {
    document.getElementById("stat-total").textContent = QUESTIONS.length;
    document.getElementById("stat-cats").textContent = Object.keys(CATEGORIES).length;

    // pastille d'historique
    const hist = loadHistory();
    const pill = document.getElementById("history-pill");
    if (hist.length > 0) {
      const last = hist[hist.length - 1];
      pill.textContent = `Dernière session : ${last.pct}% (${last.count} questions)`;
      pill.classList.remove("hidden");
    } else {
      pill.classList.add("hidden");
    }

    // cartes de mode
    const grid = document.getElementById("mode-grid");
    const cumulativeStats = loadCumulativeStats();
    const hasHistory = getWeakCategories(cumulativeStats).length > 0;
    grid.innerHTML = Object.values(MODES).map(m => {
      const disabled = m.requiresHistory && !hasHistory;
      const countLabel = m.count === Infinity ? `${QUESTIONS.length} questions` : `${m.count} questions`;
      const timerLabel = m.timerSeconds ? ` · ${m.timerSeconds}s/question` : "";
      return `
        <button class="mode-card${m.key === state.mode ? " selected" : ""}${disabled ? " disabled" : ""}"
                data-mode="${m.key}" ${disabled ? "disabled" : ""}>
          <span class="mi">${m.icon}</span>
          <div class="mt">${m.label}</div>
          <div class="md">${disabled ? "Disponible après quelques sessions (nécessite un historique)." : m.desc}</div>
          <span class="mm">${countLabel}${timerLabel}</span>
        </button>`;
    }).join("");
    grid.querySelectorAll(".mode-card:not(.disabled)").forEach(btn => {
      btn.addEventListener("click", () => {
        state.mode = btn.dataset.mode;
        renderStartScreen();
      });
    });

    // filtre par catégorie
    const catlist = document.getElementById("catlist");
    catlist.innerHTML = Object.entries(CATEGORIES).map(([key, c]) =>
      `<span class="tag${state.selectedCats.has(key) ? " active" : ""}" data-cat="${key}">${c.file}</span>`
    ).join("");
    catlist.querySelectorAll(".tag").forEach(tag => {
      tag.addEventListener("click", () => {
        const key = tag.dataset.cat;
        if (state.selectedCats.has(key)) state.selectedCats.delete(key);
        else state.selectedCats.add(key);
        renderStartScreen();
      });
    });
  }

  function renderQuestion() {
    state.answered = false;
    clearTimer();

    const q = currentQuestion();
    const cat = CATEGORIES[q.cat];
    document.getElementById("filetab").textContent = cat.file;
    document.getElementById("progress-mini-text").textContent = `Q${state.idx + 1} / ${state.order.length}`;
    document.getElementById("progressbar-fill").style.width = (state.idx / state.order.length * 100) + "%";
    document.getElementById("q-badge").textContent = cat.label;
    document.getElementById("q-type-label").textContent = q.type === "text" ? "· réponse libre" : "· choix multiple";
    document.getElementById("q-text").textContent = q.q;

    const codewrap = document.getElementById("q-codewrap");
    const codeEl = document.getElementById("q-code");
    if (q.code) {
      codewrap.classList.remove("hidden");
      codeEl.innerHTML = q.code.split("\n").map((line, i) => `<span class="ln">${i + 1}</span>${escapeHtml(line)}`).join("\n");
    } else {
      codewrap.classList.add("hidden");
    }

    const optsWrap = document.getElementById("q-options");
    const textRow = document.getElementById("q-textrow");
    const feedback = document.getElementById("q-feedback");
    feedback.classList.remove("show", "ok", "ko");
    document.getElementById("btn-next").disabled = true;

    if (q.type === "mcq") {
      optsWrap.classList.remove("hidden");
      textRow.classList.add("hidden");
      const letters = ["A", "B", "C", "D"];
      const shuffled = state.optionMaps[state.idx];
      optsWrap.innerHTML = shuffled.map((opt, i) =>
        `<button class="opt" data-i="${i}"><span class="k">${letters[i]}</span><span>${escapeHtml(opt.text)}</span></button>`
      ).join("");
      optsWrap.querySelectorAll(".opt").forEach(btn => {
        btn.addEventListener("click", () => selectMcq(parseInt(btn.dataset.i, 10), q));
      });
    } else {
      optsWrap.classList.add("hidden");
      textRow.classList.remove("hidden");
      const input = document.getElementById("q-textinput");
      input.value = "";
      input.className = "textinput";
      input.disabled = false;
      input.focus();
      document.getElementById("btn-validate").disabled = false;
      input.onkeydown = (e) => { if (e.key === "Enter") validateText(q); };
      document.getElementById("btn-validate").onclick = () => validateText(q);
    }

    startTimerIfNeeded();
  }

  function startTimerIfNeeded() {
    const seconds = MODES[state.mode].timerSeconds;
    const chip = document.getElementById("timer-chip");
    if (!seconds) { chip.classList.add("hidden"); return; }
    chip.classList.remove("hidden", "warn", "danger");
    state.timeLeft = seconds;
    chip.textContent = `⏱ ${state.timeLeft}s`;
    state.timerId = setInterval(() => {
      state.timeLeft--;
      chip.textContent = `⏱ ${state.timeLeft}s`;
      if (state.timeLeft <= 5) chip.classList.add("danger");
      else if (state.timeLeft <= 10) chip.classList.add("warn");
      if (state.timeLeft <= 0) {
        clearTimer();
        onTimeExpired();
      }
    }, 1000);
  }

  function clearTimer() {
    if (state.timerId) { clearInterval(state.timerId); state.timerId = null; }
  }

  function onTimeExpired() {
    if (state.answered) return;
    const q = currentQuestion();
    if (q.type === "mcq") {
      state.answered = true;
      const shuffled = state.optionMaps[state.idx];
      const opts = document.querySelectorAll(".opt");
      opts.forEach(o => o.classList.add("locked"));
      const correctIdx = shuffled.findIndex(o => o.isCorrect);
      opts[correctIdx].classList.add("correct");
      recordAnswer(q, false, "(temps écoulé)");
      showFeedback(false, "⏱ Temps écoulé. " + q.explain);
    } else {
      const input = document.getElementById("q-textinput");
      input.disabled = true;
      document.getElementById("btn-validate").disabled = true;
      state.answered = true;
      recordAnswer(q, false, "(temps écoulé)");
      showFeedback(false, `⏱ Temps écoulé. Réponse attendue : "${q.accept[0]}". ${q.explain}`);
    }
  }

  function selectMcq(i, q) {
    if (state.answered) return;
    state.answered = true;
    clearTimer();
    const shuffled = state.optionMaps[state.idx];
    const opts = document.querySelectorAll(".opt");
    opts.forEach(o => o.classList.add("locked"));
    const isCorrect = shuffled[i].isCorrect;
    opts[i].classList.add(isCorrect ? "correct" : "incorrect", "selected");
    if (!isCorrect) {
      const correctIdx = shuffled.findIndex(o => o.isCorrect);
      opts[correctIdx].classList.add("correct");
    }
    recordAnswer(q, isCorrect, shuffled[i].text);
    showFeedback(isCorrect, q.explain);
  }

  function validateText(q) {
    if (state.answered) return;
    clearTimer();
    const input = document.getElementById("q-textinput");
    const raw = input.value.trim().toLowerCase().replace(/\s+/g, " ");
    const isCorrect = q.accept.some(a => a.toLowerCase() === raw);
    state.answered = true;
    input.disabled = true;
    input.classList.add(isCorrect ? "correct" : "incorrect");
    document.getElementById("btn-validate").disabled = true;
    recordAnswer(q, isCorrect, input.value.trim() || "(vide)");
    const msg = isCorrect ? q.explain : `Réponse attendue : "${q.accept[0]}". ${q.explain}`;
    showFeedback(isCorrect, msg);
  }

  function recordAnswer(q, isCorrect, userAnswerText) {
    if (isCorrect) state.liveScore++;
    document.getElementById("live-score").textContent = state.liveScore;
    state.catStats[q.cat].total++;
    if (isCorrect) state.catStats[q.cat].correct++;
    document.getElementById("btn-next").disabled = false;

    let correctText;
    if (q.type === "mcq") {
      correctText = q.options[q.correct];
    } else {
      correctText = q.accept[0];
    }
    state.review.push({
      cat: q.cat, qText: q.q, isCorrect,
      userAnswerText, correctText,
    });
  }

  function showFeedback(isCorrect, text) {
    const fb = document.getElementById("q-feedback");
    fb.classList.add("show", isCorrect ? "ok" : "ko");
    document.getElementById("fb-title").textContent = isCorrect ? "✓ Correct" : "✗ Incorrect";
    document.getElementById("fb-body").innerHTML = escapeHtml(text).replace(/&lt;(\/?)b&gt;/g, "<$1b>");
  }

  function nextQuestion() {
    state.idx++;
    if (state.idx >= state.order.length) {
      showResults();
    } else {
      renderQuestion();
    }
  }

  function showResults() {
    clearTimer();
    showScreen("results");
    const total = state.order.length;
    const pct = total > 0 ? Math.round((state.liveScore / total) * 100) : 0;

    document.getElementById("res-score").textContent = `${state.liveScore} / ${total}`;
    document.getElementById("res-pct").textContent = `(${pct}%)`;
    const bar = document.getElementById("res-scorebar");
    bar.style.width = pct + "%";
    bar.style.background = pct >= 70
      ? "linear-gradient(90deg,#5fd38d,#3fae70)"
      : pct >= 40 ? "linear-gradient(90deg,#f0c14f,#e0a83a)" : "linear-gradient(90deg,#f2717a,#d8505a)";

    let msg;
    if (pct >= 85) msg = "Excellent niveau — tu es prêt·e pour l'examen. Relis juste les quelques points faibles ci-dessous.";
    else if (pct >= 60) msg = "Bon niveau général, mais certaines notions méritent encore une révision ciblée.";
    else if (pct >= 35) msg = "Les bases sont là, mais plusieurs catégories demandent un vrai travail de révision avant l'examen.";
    else msg = "Beaucoup de notions à revoir — reprends chaque catégorie une par une avec les pistes ci-dessous.";
    document.getElementById("res-msg").textContent = msg;
    document.getElementById("res-meta").textContent =
      `Mode : ${MODES[state.mode].label}${state.selectedCats.size ? " · catégories filtrées" : ""}`;

    // sauvegarde historique + stats cumulées (pour le mode "Points faibles")
    mergeSessionIntoStats(state.catStats);
    pushHistory({ date: new Date().toISOString(), mode: state.mode, score: state.liveScore, count: total, pct });

    const list = document.getElementById("suite-list");
    list.innerHTML = "";
    Object.keys(CATEGORIES).forEach(catKey => {
      const stat = state.catStats[catKey];
      if (!stat || stat.total === 0) return;
      const cat = CATEGORIES[catKey];
      const catPct = Math.round((stat.correct / stat.total) * 100);
      const statusClass = catPct >= 70 ? "pass" : catPct >= 40 ? "warn" : "fail";
      const statusLabel = catPct >= 70 ? `${stat.correct}/${stat.total} PASS` : catPct >= 40 ? `${stat.correct}/${stat.total} PARTIEL` : `${stat.correct}/${stat.total} FAIL`;
      const barColor = catPct >= 70 ? "#5fd38d" : catPct >= 40 ? "#f0c14f" : "#f2717a";
      const item = document.createElement("div");
      item.className = "suite-item";
      item.innerHTML = `
        <div class="suite-row">
          <span class="suite-name">${cat.file}</span>
          <span class="suite-res ${statusClass}">${statusLabel}</span>
        </div>
        <div class="mini-bar"><div class="mini-bar-fill" style="width:${catPct}%;background:${barColor}"></div></div>
        <div class="tips ${catPct < 70 ? "show" : ""}"><span class="tt">Piste d'amélioration —</span> ${TIPS[catKey]}</div>
      `;
      list.appendChild(item);
    });

    renderReview();
  }

  function renderReview() {
    const wrong = state.review.filter(r => !r.isCorrect);
    const toggle = document.getElementById("review-toggle");
    const container = document.getElementById("review-list");
    if (wrong.length === 0) {
      toggle.classList.add("hidden");
      container.classList.remove("show");
      container.innerHTML = "";
      return;
    }
    toggle.classList.remove("hidden");
    toggle.textContent = `▸ Revoir mes ${wrong.length} erreur${wrong.length > 1 ? "s" : ""}`;
    container.classList.remove("show");
    container.innerHTML = wrong.map(r => `
      <div class="review-item wrong">
        <div class="ri-q">${escapeHtml(r.qText)}</div>
        <div class="ri-a">Ta réponse : <b>${escapeHtml(r.userAnswerText)}</b> · Attendu : <b>${escapeHtml(r.correctText)}</b></div>
      </div>
    `).join("");
    toggle.onclick = () => {
      container.classList.toggle("show");
      toggle.textContent = container.classList.contains("show")
        ? `▾ Masquer les erreurs`
        : `▸ Revoir mes ${wrong.length} erreur${wrong.length > 1 ? "s" : ""}`;
    };
  }

  /* ============================== 6. ÉVÉNEMENTS ============================== */

  function bindStaticEvents() {
    document.getElementById("btn-start").addEventListener("click", startSession);
    document.getElementById("btn-next").addEventListener("click", nextQuestion);

    document.getElementById("btn-retry-all").addEventListener("click", () => {
      state.mode = "full";
      startSession();
    });

    document.getElementById("btn-retry-weak").addEventListener("click", () => {
      const weakCats = Object.keys(state.catStats).filter(k =>
        state.catStats[k].total > 0 && (state.catStats[k].correct / state.catStats[k].total) < 0.7
      );
      state.selectedCats = new Set(weakCats.length ? weakCats : []);
      state.mode = "full";
      startSession();
    });

    document.getElementById("btn-home").addEventListener("click", () => {
      clearTimer();
      showScreen("start");
      renderStartScreen();
    });
  }

  /* ============================== INIT ============================== */

  async function init() {
    const startBtn = document.getElementById("btn-start");
    try {
      const data = await loadData();
      CATEGORIES = data.categories;
      TIPS = data.tips;
      QUESTIONS = data.questions;
      bindStaticEvents();
      renderStartScreen();
    } catch (err) {
      console.error("Impossible de charger les questions :", err);
      startBtn.disabled = true;
      const lede = document.querySelector(".lede");
      if (lede) {
        lede.innerHTML = "⚠️ Impossible de charger <code>questions.json</code>. " +
          "Si tu as ouvert ce fichier directement (file://), lance un petit serveur local " +
          "(ex. <code>python3 -m http.server</code> dans ce dossier) puis recharge la page, " +
          "ou vérifie que <code>questions-data.js</code> est bien présent à côté de index.html.";
      }
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
