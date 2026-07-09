(function () {
  "use strict";

  const catById = Object.fromEntries(WIN_CATEGORIES.map((c) => [c.id, c]));
  const winBySlug = Object.fromEntries(WINS.map((w) => [w.slug, w]));

  const ICONS = {
    linkedin: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>',
    github: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.46-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.32 9.32 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .28.18.6.69.5A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z"/></svg>',
    globe: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z"/></svg>',
    mail: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2.5" y="4.5" width="19" height="15" rx="1.5"/><path d="M3 6l9 7 9-7"/></svg>',
  };

  /* ---------- profile header ---------- */
  function renderProfile() {
    document.getElementById("profile-name").textContent = PROFILE.name;
    document.getElementById("profile-title").textContent = PROFILE.title;
    document.getElementById("profile-location").textContent = PROFILE.location;
    document.getElementById("profile-credentials").textContent = PROFILE.credentials;
    document.getElementById("profile-statement").textContent = "\u201C" + PROFILE.statement + "\u201D";
    document.getElementById("profile-bio").textContent = PROFILE.bio;
    document.getElementById("monogram").textContent = PROFILE.initials;

    const linksEl = document.getElementById("profile-links");
    linksEl.innerHTML = PROFILE.links
      .map(
        (l) =>
          `<a class="profile-link" href="${l.href}" target="_blank" rel="noopener">${ICONS[l.icon] || ""}<span>${l.label}</span></a>`
      )
      .join("");
  }

  /* ---------- career arc timeline ---------- */
  function renderArc() {
    const el = document.getElementById("arc-timeline");
    el.innerHTML = ARC_NODES.map(
      (n, i) => `
      <div class="arc-node">
        <div class="arc-marker"><span class="arc-marker-dot"></span></div>
        <div class="arc-content">
          <div class="arc-meta"><span class="arc-year">${n.year}</span><span class="arc-tag">${n.tag}</span></div>
          <h3 class="arc-title">${n.title}</h3>
          <p class="arc-body">${n.body}</p>
        </div>
      </div>`
    ).join("");
  }

  /* ---------- case file chips + grid ---------- */
  let activeCat = "all";

  function buildChips() {
    const row = document.getElementById("win-filter-row");
    const all = makeChip("all", "All Case Files", null, true);
    row.appendChild(all);
    WIN_CATEGORIES.forEach((c) => row.appendChild(makeChip(c.id, c.label, c.color, false)));

    function makeChip(id, label, color, pressed) {
      const btn = document.createElement("button");
      btn.className = "chip";
      btn.type = "button";
      btn.dataset.cat = id;
      btn.setAttribute("aria-pressed", pressed ? "true" : "false");
      if (color) btn.style.setProperty("--chip-color", color);
      btn.innerHTML = `<span class="dot" aria-hidden="true"></span>${label}`;
      btn.addEventListener("click", () => {
        activeCat = id;
        [...row.children].forEach((c) => c.setAttribute("aria-pressed", c.dataset.cat === id ? "true" : "false"));
        renderWins();
      });
      return btn;
    }
  }

  function renderWins() {
    const grid = document.getElementById("win-grid");
    const results = activeCat === "all" ? WINS : WINS.filter((w) => w.category === activeCat);
    grid.innerHTML = results.map((w, i) => buildWinCard(w, i)).join("");
    grid.querySelectorAll(".law-card").forEach((card) => {
      card.addEventListener("click", () => openWinModal(card.dataset.slug));
    });
  }

  function buildWinCard(win, index) {
    const cat = catById[win.category];
    const idStr = String(index + 1).padStart(2, "0");
    return `
      <button type="button" class="law-card" data-slug="${win.slug}" style="--card-color:${cat.color}" aria-haspopup="dialog">
        <div class="card-top">
          <span class="card-tag">${cat.label}</span>
          <span class="card-id">§${idStr}</span>
        </div>
        <h3 class="card-title">${win.title}</h3>
        <p class="card-summary">${win.summary}</p>
        <div class="card-bottom">
          <span class="card-origin">${win.kpi}</span>
          <span class="card-arrow" aria-hidden="true">&#8594;</span>
        </div>
      </button>`;
  }

  /* ---------- win modal (STAR format) ---------- */
  const modalBackdrop = document.getElementById("modal-backdrop");
  const modal = document.getElementById("modal");
  let lastFocused = null;

  function openWinModal(slug) {
    const win = winBySlug[slug];
    if (!win) return;
    const cat = catById[win.category];
    lastFocused = document.activeElement;

    modal.style.setProperty("--modal-color", cat.color);
    modal.innerHTML = `
      <button class="modal-close" aria-label="Close">&#10005;</button>
      <span class="modal-tag">${cat.label}</span>
      <h2 class="modal-title" id="modal-title">${win.title}</h2>
      <div class="modal-origin">OUTCOME — ${win.kpi}</div>
      <p class="modal-summary">${win.summary}</p>
      <div class="modal-section"><p class="modal-h">Situation</p><p class="modal-body-text">${win.situation}</p></div>
      <div class="modal-section"><p class="modal-h">Task</p><p class="modal-body-text">${win.task}</p></div>
      <div class="modal-section"><p class="modal-h">Action</p><p class="modal-body-text">${win.action}</p></div>
      <div class="modal-section"><p class="modal-h">Result</p><p class="modal-body-text">${win.result}</p></div>
    `;
    modal.querySelector(".modal-close").addEventListener("click", closeModal);
    modalBackdrop.classList.add("open");
    modalBackdrop.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    modal.querySelector(".modal-close").focus();
    history.replaceState(null, "", `#${slug}`);
  }

  function closeModal() {
    modalBackdrop.classList.remove("open");
    modalBackdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    history.replaceState(null, "", location.pathname);
    if (lastFocused) lastFocused.focus();
  }

  modalBackdrop.addEventListener("click", (e) => { if (e.target === modalBackdrop) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && modalBackdrop.classList.contains("open")) closeModal(); });

  /* ---------- certifications ---------- */
  function renderCerts() {
    document.getElementById("cert-primary").innerHTML = CERTS_PRIMARY
      .map((c) => `<li class="cert-primary-item">${c}</li>`).join("");
    document.getElementById("cert-other").innerHTML = CERTS_OTHER
      .map((c) => `<span class="cert-badge">${c}</span>`).join("");
  }

  /* ---------- education + publication ---------- */
  function renderEducation() {
    document.getElementById("edu-degree").textContent = EDUCATION.degree;
    document.getElementById("edu-school").textContent = `${EDUCATION.school} · ${EDUCATION.years}`;
    document.getElementById("edu-coursework").textContent = EDUCATION.coursework;

    document.getElementById("pub-citation").textContent = PUBLICATION.citation;
    document.getElementById("pub-doi").innerHTML = `DOI: <a href="https://doi.org/${PUBLICATION.doi}" target="_blank" rel="noopener">${PUBLICATION.doi}</a>`;
    document.getElementById("pub-note").textContent = PUBLICATION.note;
  }

  /* ---------- volunteering ---------- */
  function renderVolunteering() {
    const el = document.getElementById("volunteer-list");
    el.innerHTML = VOLUNTEERING.map(
      (v) => `
      <div class="volunteer-row">
        <span class="volunteer-role">${v.role}</span>
        <span class="volunteer-org">${v.org}</span>
        <span class="volunteer-years">${v.years}</span>
      </div>`
    ).join("");
  }

  /* ---------- deep link ---------- */
  function checkHash() {
    const slug = location.hash.replace("#", "");
    if (slug && winBySlug[slug]) openWinModal(slug);
  }

  /* ---------- init ---------- */
  renderProfile();
  renderArc();
  buildChips();
  renderWins();
  renderCerts();
  renderEducation();
  renderVolunteering();
  checkHash();
})();
