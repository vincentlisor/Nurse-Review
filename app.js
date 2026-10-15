(function () {
  var DATA = window.NCM || { topics: [], questions: [] };
  var TOPICS = DATA.topics;
  var QUESTIONS = DATA.questions;
  var KEY = "ncm104-part2-v1";
  var DELAY = 4600;

  var state = { screen: "home" };
  var shuffleOn = false;
  var round = 0;
  var timerId = null;
  var elapsed = 0;
  var session = null;

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  }

  function shuffle(list) {
    var copy = list.slice();
    for (var i = copy.length - 1; i > 0; i -= 1) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = copy[i];
      copy[i] = copy[j];
      copy[j] = temp;
    }
    return copy;
  }

  function reducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function loadSave() {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || {};
    } catch (err) {
      return {};
    }
  }

  function persist(data) {
    try {
      localStorage.setItem(KEY, JSON.stringify(data));
    } catch (err) {}
  }

  function topicById(id) {
    for (var i = 0; i < TOPICS.length; i += 1) {
      if (TOPICS[i].id === id) return TOPICS[i];
    }
    return { id: id, name: "Review", color: "#0e6b63", blurb: "" };
  }

  function icon(name) {
    var paths = {
      sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"/>',
      moon: '<path d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5z"/>',
      drop: '<path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z"/>',
      bug: '<circle cx="12" cy="8" r="2"/><path d="M8 13c0-2 1.8-4 4-4s4 2 4 4v3H8v-3zM5 12h3M16 12h3M7 18l-2 3M17 18l2 3"/>',
      clock: '<circle cx="12" cy="12" r="8"/><path d="M12 8v5l3 2"/>',
      flask: '<path d="M10 3h4M9 3v5L5 19a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2l-4-11V3"/>',
      pill: '<rect x="3" y="8" width="18" height="8" rx="4"/><path d="M12 8v8"/>',
      leaf: '<path d="M5 19C5 11 11 4 20 4 20 13 14 20 5 19z"/><path d="M8 16c3-3 6-6 9-9"/>',
      fish: '<path d="M3 12s4-5 9-5 7 3 7 3l3-2v8l-3-2s-2 3-7 3-9-5-9-5z"/><circle cx="8" cy="12" r=".6" fill="currentColor"/>',
      net: '<path d="M4 7h16v10H4zM4 12h16M8 7v10M12 7v10M16 7v10"/>',
      shield: '<path d="M12 3 19 6v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/>',
      meal: '<path d="M4 10h16v2a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6v-2z"/><path d="M8 10V7M12 10V6M16 10V7"/>',
      tape: '<rect x="4" y="6" width="16" height="12" rx="2"/><path d="M8 6v12M4 10h4"/>',
      user: '<circle cx="12" cy="8" r="3"/><path d="M5 19c1.5-3 3.8-4.5 7-4.5S17.5 16 19 19"/>',
      alert: '<path d="M12 4 20 18H4L12 4z"/><path d="M12 10v4M12 16h.01"/>'
    };
    return '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (paths[name] || "") + "</svg>";
  }

  function figure(kind) {
    var html = {
      foods: '<div class="split"><div class="pane">' + icon("meal") + "<strong>Undercooked beef</strong><em>Cattle tapeworm source</em></div><div class=\"pane\">" + icon("meal") + "<strong>Undercooked pork</strong><em>Pork tapeworm source</em></div></div>",
      tape: '<div class="split"><div class="pane">' + icon("moon") + "<strong>While asleep</strong><em>The usual collection time</em></div><div class=\"pane\">" + icon("tape") + "<strong>Clear tape</strong><em>Pressed on the skin, then examined</em></div></div>",
      chain: '<ol class="chain"><li><span>1</span>Agent</li><li><span>2</span>Reservoir</li><li><span>3</span>Exit</li><li><span>4</span>Spread</li><li><span>5</span>Entry</li><li><span>6</span>Host</li></ol>',
      risks: '<div class="risk-row"><span>Immunocompromised</span><span>Diabetes</span><span>Surgery</span><span>Burns</span><span>Older adult</span></div>',
      clean: '<div class="letters"><div class="letter-card">' + icon("net") + "<b>C</b></div><div class=\"letter-card\">" + icon("fish") + "<b>L</b></div><div class=\"letter-card\">" + icon("shield") + "<b>E</b></div><div class=\"letter-card\">" + icon("bug") + "<b>A</b></div><div class=\"letter-card\">" + icon("leaf") + "<b>N</b></div></div>",
      daynight: '<div class="split"><div class="pane">' + icon("sun") + "<strong>Day bite</strong><em>Stored water around the house</em></div><div class=\"pane\">" + icon("moon") + "<strong>Night bite</strong><em>Dusk-to-dawn exposure</em></div></div>",
      stages: '<div class="stages"><div class="stage-card">' + icon("alert") + "<strong>Days 1–4</strong><em>Fever is high</em></div><div class=\"stage-card\">" + icon("drop") + "<strong>Days 4–7</strong><em>Fever has just fallen</em></div><div class=\"stage-card\">" + icon("shield") + "<strong>Days 7–10</strong><em>Afebrile and improving</em></div></div>",
      dots: '<div class="dots">' + new Array(24).join("<i></i>") + '</div>',
      fluids: '<div class="fluids"><div class="pane">' + icon("drop") + "<strong>Hemoconcentration</strong><em>Slower hourly infusion</em></div><div class=\"pane\">" + icon("alert") + "<strong>Shock</strong><em>Fast bolus</em></div></div>",
      clock: '<div class="clock-fig"><div class="time-chip">' + icon("moon") + "<b>Night</b><em>Peripheral blood</em></div><div class=\"time-chip\">" + icon("flask") + "<b>Smear</b><em>Look for microfilaria</em></div></div>",
      limbs: '<div class="limb-grid"><div class="limb"><strong>Scrotum</strong><em>Swelling</em></div><div class="limb"><strong>Limb</strong><em>Temporary swelling</em></div><div class="limb"><strong>Skin</strong><em>Thickened and enlarged</em></div></div>',
      weil: '<div class="split"><div class="pane">' + icon("user") + "<strong>No jaundice</strong><em>Fever, red eyes, meningism</em></div><div class=\"pane\">" + icon("alert") + "<strong>Jaundice</strong><em>Liver and kidney injury</em></div></div>",
      cycle: '<div class="cycle"><div class="pane">' + icon("bug") + "<strong>Mosquito</strong><em>Sexual cycle. Sporozoites go into the person.</em></div><div class=\"pane\">" + icon("user") + "<strong>Human</strong><em>Asexual cycle. Gametes are taken back up.</em></div></div>",
      waves: '<div class="waves"><div class="wave"><div><strong>Every 48 hours</strong><em>3-day rhythm</em></div><div class="spikes"><i></i><i></i><i></i></div></div><div class="wave"><div><strong>Every 72 hours</strong><em>4-day rhythm</em></div><div class="spikes slow"><i></i><i></i></div></div></div>',
      tablets: '<div class="tabs"><div class="pill-count"><b>Day 1</b><span class="pips">●●●●</span></div><div class="pill-count"><b>Day 2</b><span class="pips">●●●●</span></div><div class="pill-count"><b>Day 3</b><span class="pips">●●</span></div></div>'
    };
    var captions = {
      foods: "Match the meat with the tapeworm, then answer.",
      tape: "Pinworm eggs are collected while the person sleeps.",
      chain: "Six links. Decide which one the action breaks.",
      risks: "These are the lecture’s highest-risk hosts.",
      clean: "DOH CLEAN. Use the letters, then recall the words.",
      daynight: "Day bite and night bite are different diseases.",
      stages: "Dengue moves through three timed stages.",
      dots: "Petechiae after a sustained blood-pressure cuff.",
      fluids: "Two dengue fluid situations, two different rates.",
      clock: "Night blood is for nocturnal microfilaria.",
      limbs: "Name the chronic filarial swelling from the picture.",
      weil: "No yellowing versus jaundice decides the type.",
      cycle: "One cycle lives in the mosquito. One lives in the person.",
      waves: "Count the hours between fever spikes.",
      tablets: "Count the tablets on each day, then name the drug."
    };
    if (!html[kind]) return "";
    return '<figure class="figure">' + html[kind] + "<figcaption>" + captions[kind] + "</figcaption></figure>";
  }

  function appEl() {
    return document.getElementById("app");
  }

  function renderHome() {
    state.screen = "home";
    document.title = "NCM 104 Review · Communicable Diseases";
    var save = loadSave();
    var best = save.best ? save.best + "%" : "New";
    var missed = (save.missed || []).length;
    var cards = TOPICS.map(function (topic) {
      var count = QUESTIONS.filter(function (item) { return item.topic === topic.id; }).length;
      return '<button class="topic-card" type="button" data-action="start" data-topic="' + topic.id + '" style="--accent:' + topic.color + '"><h2>' + escapeHtml(topic.name) + "</h2><p>" + escapeHtml(topic.blurb) + '</p><span class="count">' + count + " questions</span></button>";
    }).join("");
    var missedBtn = missed ? '<button class="btn btn-ghost" type="button" data-action="missed">Retry ' + missed + " missed</button>" : "";
    appEl().innerHTML =
      '<div class="home wrap"><div class="home-top"><section class="hero"><p class="kicker">NCM 104 · Part 2</p><h1>Control of communicable diseases</h1><p class="lede">A full multiple-choice review of the lecture. Answer one item. Every wrong choice turns red, the right one turns green, and the next card slides in.</p><p class="lecturer">Lecture of Ms. Argie J. Cajipo, MAN, RN</p><div class="actions"><button class="btn btn-primary" type="button" data-action="start">Start full review</button>' +
      missedBtn +
      '<label class="check"><input id="shuffle" type="checkbox"' +
      (shuffleOn ? " checked" : "") +
      '><span>Shuffle like an exam</span></label></div><div class="stats"><div class="stat"><b>' +
      QUESTIONS.length +
      '</b><span>Questions</span></div><div class="stat"><b>' +
      TOPICS.length +
      '</b><span>Topics</span></div><div class="stat"><b>' +
      best +
      '</b><span>Best score</span></div></div></section><aside class="panel"><h2>How a round works</h2><ol class="steps"><li><b>1</b><span>Pick a topic, or take the whole lecture in order.</span></li><li><b>2</b><span>Tap one answer. Keys 1 to 4 work on a keyboard.</span></li><li><b>3</b><span>Wrong choices turn red and the correct choice turns green. Then the next question slides in.</span></li></ol><div class="legend"><span class="swatch good">Correct answer</span><span class="swatch bad">Wrong answers</span></div></aside></div><h2 class="section-title">Study by topic</h2><div class="topic-grid">' +
      cards +
      '</div><p class="foot">Study aid from the Part 2 notes: helminths, the chain of infection, dengue, filariasis, leptospirosis, and malaria. A few slide spellings are corrected in the explanations, including Brugia malayi, Plasmodium malariae, and fresh frozen plasma. In clinical practice, follow current DOH and hospital protocol.</p></div>';
  }

  function deal(item) {
    return {
      id: item.id,
      topic: item.topic,
      stem: item.stem,
      why: item.why,
      fig: item.fig,
      dealt: shuffle(item.choices.map(function (text, i) {
        return { text: text, correct: i === item.a };
      }))
    };
  }

  function startRound(list, label) {
    if (!list.length) {
      renderHome();
      return;
    }
    round += 1;
    clearTimer();
    session = {
      items: list.map(deal),
      ids: list.map(function (item) { return item.id; }),
      index: 0,
      log: [],
      label: label,
      paused: false,
      locked: false,
      moving: false,
      holdForModal: false,
      started: Date.now()
    };
    state.screen = "quiz";
    appEl().innerHTML =
      '<div class="quiz"><div class="quiz-wrap"><header class="qhead"><div class="qhead-row"><button class="btn btn-ghost btn-small" type="button" data-action="ask-leave">Exit</button><div class="qtitle" id="topicName">Review</div><div id="scoreLabel">0 correct</div></div><div class="progress-track" aria-hidden="true"><span class="progress" id="progress"></span></div><div class="meta"><span id="countLabel">1 / ' +
      list.length +
      '</span><span>' +
      escapeHtml(label) +
      '</span></div></header><div id="stage" class="stage"></div><div id="dock" class="dock"></div><p class="kbd">Keys 1–4 answer. Enter continues. Space pauses.</p></div><div id="leave" class="modal" hidden><div class="modal-card" role="dialog" aria-modal="true" aria-labelledby="leaveTitle"><h2 id="leaveTitle">Leave this round?</h2><p>Answers in this round will not be saved unless you finish.</p><div class="dock-row"><button class="btn btn-ghost" type="button" data-action="stay">Keep going</button><button class="btn btn-primary" type="button" data-action="home">Leave</button></div></div></div><div id="live" class="sr" aria-live="polite"></div></div>';
    renderCard();
  }

  function begin(topicId) {
    var list = QUESTIONS.filter(function (item) {
      return !topicId || item.topic === topicId;
    });
    if (shuffleOn) list = shuffle(list);
    var topic = topicId ? topicById(topicId) : null;
    startRound(list, topic ? topic.name : "Full review");
  }

  function beginIds(ids, label) {
    var map = {};
    QUESTIONS.forEach(function (item) { map[item.id] = item; });
    var list = ids.map(function (id) { return map[id]; }).filter(Boolean);
    if (shuffleOn) list = shuffle(list);
    startRound(list, label);
  }

  function beginMissed() {
    var save = loadSave();
    beginIds(save.missed || [], "Missed questions");
  }

  function renderCard() {
    var item = session.items[session.index];
    var topic = topicById(item.topic);
    document.getElementById("topicName").textContent = topic.name;
    document.getElementById("countLabel").textContent = (session.index + 1) + " / " + session.items.length;
    document.getElementById("scoreLabel").textContent = session.log.filter(function (row) { return row.correct; }).length + " correct";
    document.getElementById("progress").style.width = (session.log.length / session.items.length * 100) + "%";
    document.title = (session.index + 1) + ". " + topic.name + " · NCM 104";
    var choices = item.dealt.map(function (choice, i) {
      return '<button class="choice" type="button" data-action="pick" data-index="' + i + '" style="animation-delay:' + (i * 50) + 'ms"><span class="letter">' + "ABCD"[i] + '</span><span class="choice-text">' + escapeHtml(choice.text) + '</span><span class="status"></span></button>';
    }).join("");
    document.getElementById("stage").innerHTML =
      '<article class="card enter" style="--accent:' + topic.color + '"><p class="eyebrow"><span class="dot"></span>' + escapeHtml(topic.name) + "</p>" +
      figure(item.fig) +
      '<h2 class="stem" tabindex="-1">' + escapeHtml(item.stem) + '</h2><p class="hint">Choose one answer.</p><div class="choices">' + choices + "</div></article>";
    var dock = document.getElementById("dock");
    dock.className = "dock";
    dock.innerHTML = "";
    window.scrollTo({ top: 0, behavior: reducedMotion() ? "auto" : "smooth" });
    var stem = document.querySelector(".stem");
    if (stem) stem.focus({ preventScroll: true });
  }

  function pick(index) {
    if (!session || session.locked || session.moving || modalOpen()) return;
    var item = session.items[session.index];
    var choice = item.dealt[index];
    if (!choice) return;
    session.locked = true;
    var buttons = document.querySelectorAll(".choice");
    var answerText = "";
    buttons.forEach(function (btn, i) {
      var row = item.dealt[i];
      btn.classList.add(row.correct ? "is-correct" : "is-wrong");
      if (i === index) btn.classList.add("is-picked");
      var status = btn.querySelector(".status");
      if (row.correct) {
        status.textContent = "Correct";
        answerText = row.text;
      } else if (i === index) {
        status.textContent = "Your answer";
      } else {
        status.textContent = "Wrong";
      }
    });
    document.querySelector(".choices").classList.add("is-locked");
    session.log.push({
      id: item.id,
      topic: item.topic,
      stem: item.stem,
      why: item.why,
      correct: choice.correct,
      picked: choice.text,
      answer: answerText
    });
    var live = document.getElementById("live");
    if (live) {
      live.textContent = (choice.correct ? "Correct. " : "Incorrect. The correct answer is " + answerText + ". ") + item.why;
    }
    openDock(choice.correct, answerText);
  }

  function streak() {
    var n = 0;
    for (var i = session.log.length - 1; i >= 0; i -= 1) {
      if (!session.log[i].correct) break;
      n += 1;
    }
    return n;
  }

  function openDock(wasCorrect, answerText) {
    var item = session.items[session.index];
    var last = session.index === session.items.length - 1;
    var run = streak();
    var dock = document.getElementById("dock");
    dock.className = "dock open";
    dock.innerHTML =
      '<p class="verdict ' + (wasCorrect ? "good" : "bad") + '">' + (wasCorrect ? "Correct" : "Incorrect") + "</p>" +
      '<p class="answer-line"><span>Correct answer</span>' + escapeHtml(answerText) + "</p>" +
      '<p class="why">' + escapeHtml(item.why) + "</p>" +
      (run >= 2 ? '<p class="streak">' + run + " correct in a row</p>" : "") +
      '<div class="dock-row"><button class="btn btn-ghost btn-small" type="button" id="pauseBtn" data-action="pause">Pause</button><button class="btn btn-primary" type="button" data-action="next">' +
      (last ? "See results" : "Next question") +
      '</button></div><div class="timer" aria-hidden="true"><span id="fill"></span></div><p class="tick" id="tick"></p>';
    var card = document.querySelector(".card");
    if (card) card.classList.add(wasCorrect ? "flash-good" : "flash-bad");
    document.getElementById("scoreLabel").textContent = session.log.filter(function (row) { return row.correct; }).length + " correct";
    document.getElementById("progress").style.width = (session.log.length / session.items.length * 100) + "%";
    startTimer(last);
    var marked = document.querySelector(".choice.is-correct");
    if (marked) marked.scrollIntoView({ behavior: reducedMotion() ? "auto" : "smooth", block: "center" });
  }

  function clearTimer() {
    if (timerId) clearInterval(timerId);
    timerId = null;
    elapsed = 0;
  }

  function startTimer(last) {
    clearTimer();
    session.paused = false;
    timerId = setInterval(function () {
      if (!session || session.paused) return;
      elapsed += 100;
      var fill = document.getElementById("fill");
      var tick = document.getElementById("tick");
      if (fill) fill.style.width = Math.min(100, elapsed / DELAY * 100) + "%";
      var left = Math.max(0, Math.ceil((DELAY - elapsed) / 1000));
      if (tick) tick.textContent = (last ? "Results in " : "Next in ") + left + "s";
      if (elapsed >= DELAY) advance();
    }, 100);
  }

  function togglePause() {
    if (!session || !session.locked || session.moving) return;
    session.paused = !session.paused;
    var btn = document.getElementById("pauseBtn");
    var tick = document.getElementById("tick");
    if (btn) btn.textContent = session.paused ? "Resume" : "Pause";
    if (tick && session.paused) tick.textContent = "Paused — take your time";
  }

  function advance() {
    if (!session || session.moving || state.screen !== "quiz") return;
    session.moving = true;
    clearTimer();
    var ticket = round;
    var card = document.querySelector(".card");
    var wait = !card || reducedMotion() ? 0 : 380;
    if (card && wait) card.classList.add("leave");
    window.setTimeout(function () {
      if (ticket !== round || !session) return;
      session.moving = false;
      session.locked = false;
      session.paused = false;
      session.index += 1;
      if (session.index >= session.items.length) renderResults();
      else renderCard();
    }, wait);
  }

  function modalOpen() {
    var modal = document.getElementById("leave");
    return modal && !modal.hidden;
  }

  function askLeave() {
    if (!session) return;
    if (session.log.length === 0 && !session.locked) {
      goHome();
      return;
    }
    session.holdForModal = session.paused;
    session.paused = true;
    var modal = document.getElementById("leave");
    if (modal) modal.hidden = false;
  }

  function stay() {
    var modal = document.getElementById("leave");
    if (modal) modal.hidden = true;
    if (!session) return;
    session.paused = session.holdForModal;
    var btn = document.getElementById("pauseBtn");
    if (btn) btn.textContent = session.paused ? "Resume" : "Pause";
  }

  function goHome() {
    round += 1;
    clearTimer();
    renderHome();
  }

  function renderResults() {
    state.screen = "results";
    clearTimer();
    var correct = session.log.filter(function (row) { return row.correct; }).length;
    var total = session.items.length;
    var pct = Math.round((correct / total) * 100);
    var save = loadSave();
    var best = save.best || 0;
    if (session.label === "Full review") best = Math.max(best, pct);
    var missedNow = session.log.filter(function (row) { return !row.correct; }).map(function (row) { return row.id; });
    var nextMissed = missedNow;
    if (!missedNow.length && session.label !== "Missed questions" && session.label !== "Full review") {
      nextMissed = save.missed || [];
    }
    persist({ best: best, missed: nextMissed });
    var seconds = Math.max(1, Math.round((Date.now() - session.started) / 1000));
    var timeLabel = seconds < 60 ? seconds + "s" : Math.floor(seconds / 60) + "m " + (seconds % 60) + "s";
    var tone = pct >= 75 ? "high" : pct >= 50 ? "mid" : "low";
    var message = pct >= 90 ? "Excellent recall of this set." : pct >= 75 ? "Solid work. Review the misses once more." : pct >= 60 ? "You are close. The red items below are the ones to reread." : "Restudy this set, then run it again.";
    var radius = 52;
    var circ = 2 * Math.PI * radius;
    var offset = circ * (1 - correct / total);
    var bars = TOPICS.map(function (topic) {
      var rows = session.log.filter(function (row) { return row.topic === topic.id; });
      if (!rows.length) return "";
      var right = rows.filter(function (row) { return row.correct; }).length;
      return '<div class="tbar"><div class="tbar-top"><span>' + escapeHtml(topic.name) + "</span><span>" + right + " / " + rows.length + '</span></div><div class="track"><span style="width:' + Math.round(right / rows.length * 100) + "%;background:" + topic.color + '"></span></div></div>';
    }).join("");
    function cards(rows, className) {
      return rows.map(function (row) {
        var yours = row.correct ? "" : '<p class="bad">Your answer: ' + escapeHtml(row.picked) + "</p>";
        return '<article class="' + className + '"><h3>' + escapeHtml(row.stem) + "</h3>" + yours + '<p class="good">Correct: ' + escapeHtml(row.answer) + '</p><p class="why">' + escapeHtml(row.why) + "</p></article>";
      }).join("");
    }
    var missed = session.log.filter(function (row) { return !row.correct; });
    var got = session.log.filter(function (row) { return row.correct; });
    document.title = "Results · NCM 104 Review";
    appEl().innerHTML =
      '<div class="results"><section class="results-hero"><p class="kicker">Round complete</p><h2>' + escapeHtml(session.label) + '</h2><div class="ring-wrap ' + tone + '"><svg viewBox="0 0 120 120" aria-hidden="true"><circle class="ring-bg" cx="60" cy="60" r="52"></circle><circle id="ringFg" class="ring-fg" cx="60" cy="60" r="52" stroke-dasharray="' + circ + '" stroke-dashoffset="' + circ + '" data-offset="' + offset + '"></circle></svg><div class="score-num"><div><strong>' + pct + '%</strong><span>' + correct + " of " + total + '</span></div></div></div><p class="grade">' + message + '</p><p class="sub">' + timeLabel + " · best saved score " + best + '%</p><div class="result-actions"><button class="btn btn-primary" type="button" data-action="retry">Retry this set</button>' +
      (missed.length ? '<button class="btn btn-ghost" type="button" data-action="missed">Retry missed</button>' : "") +
      '<button class="btn btn-ghost" type="button" data-action="home">Home</button></div></section><h2 class="block-title">By topic</h2><div class="topic-bars">' + bars + "</div>" +
      (missed.length ? '<h2 class="block-title">Revisit these</h2>' + cards(missed, "miss") : '<h2 class="block-title">Every item in this set was correct.</h2>') +
      (got.length ? '<div class="result-actions"><button class="btn btn-ghost" type="button" data-action="show-got" data-open="0">Show correct answers too</button></div><div id="gotWrap" hidden>' + cards(got, "got") + "</div>" : "") +
      "</div>";
    window.scrollTo({ top: 0, behavior: "auto" });
    window.requestAnimationFrame(function () {
      var ring = document.getElementById("ringFg");
      if (ring) ring.style.strokeDashoffset = ring.getAttribute("data-offset");
    });
  }

  function showGot(btn) {
    var wrap = document.getElementById("gotWrap");
    if (!wrap) return;
    var open = btn.getAttribute("data-open") === "1";
    wrap.hidden = open;
    btn.setAttribute("data-open", open ? "0" : "1");
    btn.textContent = open ? "Show correct answers too" : "Hide correct answers";
  }

  function onAppClick(event) {
    var btn = event.target.closest("[data-action]");
    if (!btn) return;
    var action = btn.getAttribute("data-action");
    if (action === "pick") pick(Number(btn.getAttribute("data-index")));
    else if (action === "next") advance();
    else if (action === "pause") togglePause();
    else if (action === "start") begin(btn.getAttribute("data-topic") || "");
    else if (action === "missed") beginMissed();
    else if (action === "retry" && session) beginIds(session.ids, session.label);
    else if (action === "home") goHome();
    else if (action === "ask-leave") askLeave();
    else if (action === "stay") stay();
    else if (action === "show-got") showGot(btn);
  }

  function onAppChange(event) {
    if (event.target.id === "shuffle") shuffleOn = event.target.checked;
  }

  function onKey(event) {
    if (state.screen !== "quiz" || !session || modalOpen()) return;
    if (event.key >= "1" && event.key <= "4" && !session.locked) pick(Number(event.key) - 1);
    if ((event.key === "Enter" || event.key === "n" || event.key === "N") && session.locked) {
      event.preventDefault();
      advance();
    }
    if (event.key === " " && session.locked) {
      event.preventDefault();
      togglePause();
    }
  }

  document.getElementById("app").addEventListener("click", onAppClick);
  document.getElementById("app").addEventListener("change", onAppChange);
  document.addEventListener("keydown", onKey);
  renderHome();
})();
