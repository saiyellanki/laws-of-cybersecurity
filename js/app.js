(function () {
  "use strict";

  const grid = document.getElementById("law-grid");
  const searchInput = document.getElementById("search-input");
  const resultCount = document.getElementById("result-count");
  const filterRow = document.getElementById("filter-row");
  const modalBackdrop = document.getElementById("modal-backdrop");
  const modal = document.getElementById("modal");
  const totalCountEl = document.getElementById("total-count");
  const catCountEl = document.getElementById("cat-count");

  const catById = Object.fromEntries(CATEGORIES.map((c) => [c.id, c]));
  const lawBySlug = Object.fromEntries(LAWS.map((l) => [l.slug, l]));

  let activeCategory = "all";
  let query = "";
  let lastFocused = null;

  totalCountEl.textContent = LAWS.length;
  catCountEl.textContent = CATEGORIES.length;

  /* ---------- build filter chips ---------- */
  function buildChips() {
    const allChip = makeChip("all", "All Laws", null, true);
    filterRow.appendChild(allChip);
    CATEGORIES.forEach((cat) => {
      filterRow.appendChild(makeChip(cat.id, cat.label, cat.color, false));
    });
  }

  function makeChip(id, label, color, pressed) {
    const btn = document.createElement("button");
    btn.className = "chip";
    btn.type = "button";
    btn.dataset.cat = id;
    btn.setAttribute("aria-pressed", pressed ? "true" : "false");
    if (color) btn.style.setProperty("--chip-color", color);
    btn.innerHTML = `<span class="dot" aria-hidden="true"></span>${label}`;
    btn.addEventListener("click", () => {
      activeCategory = id;
      [...filterRow.children].forEach((c) =>
        c.setAttribute("aria-pressed", c.dataset.cat === id ? "true" : "false")
      );
      render();
    });
    return btn;
  }

  /* ---------- render grid ---------- */
  function matches(law) {
    const inCategory = activeCategory === "all" || law.category === activeCategory;
    if (!inCategory) return false;
    if (!query) return true;
    const haystack = (law.title + " " + law.summary + " " + law.origin + " " + law.body).toLowerCase();
    return haystack.includes(query);
  }

  function render() {
    const results = LAWS.filter(matches);
    resultCount.textContent = `${results.length} / ${LAWS.length} laws`;
    grid.innerHTML = "";

    if (results.length === 0) {
      const empty = document.createElement("div");
      empty.className = "empty-state";
      empty.innerHTML = `<span class="big">— NO MATCH —</span>Try a different term or clear the active filter.`;
      grid.appendChild(empty);
      return;
    }

    results.forEach((law, i) => {
      grid.appendChild(buildCard(law, i));
    });
  }

  function buildCard(law, index) {
    const cat = catById[law.category];
    const card = document.createElement("button");
    card.type = "button";
    card.className = "law-card";
    card.style.setProperty("--card-color", cat.color);
    card.setAttribute("aria-haspopup", "dialog");
    const idStr = String(index + 1).padStart(2, "0");

    card.innerHTML = `
      <div class="card-top">
        <span class="card-tag">${cat.label}</span>
        <span class="card-id">§${idStr}</span>
      </div>
      <h3 class="card-title">${law.title}</h3>
      <p class="card-summary">${law.summary}</p>
      <div class="card-bottom">
        <span class="card-origin">${law.origin}</span>
        <span class="card-arrow" aria-hidden="true">&#8594;</span>
      </div>
    `;
    card.addEventListener("click", () => openModal(law.slug));
    return card;
  }

  /* ---------- modal ---------- */
  function openModal(slug) {
    const law = lawBySlug[slug];
    if (!law) return;
    const cat = catById[law.category];
    lastFocused = document.activeElement;

    const relatedHtml = (law.related || [])
      .map((s) => lawBySlug[s])
      .filter(Boolean)
      .map((r) => `<button class="related-pill" data-slug="${r.slug}">${r.title}</button>`)
      .join("");

    modal.style.setProperty("--modal-color", cat.color);
    modal.innerHTML = `
      <button class="modal-close" aria-label="Close">&#10005;</button>
      <span class="modal-tag">${cat.label}</span>
      <h2 class="modal-title" id="modal-title">${law.title}</h2>
      <div class="modal-origin">ORIGIN — ${law.origin}</div>
      <p class="modal-summary">${law.summary}</p>
      <div class="modal-section">
        <p class="modal-h">The Principle</p>
        <p class="modal-body-text">${law.body}</p>
      </div>
      <div class="modal-section">
        <p class="modal-h">Why It Matters</p>
        <p class="modal-body-text">${law.why}</p>
      </div>
      ${relatedHtml ? `<div class="modal-section">
        <p class="modal-h">Related Laws</p>
        <div class="modal-related">${relatedHtml}</div>
      </div>` : ""}
    `;

    modal.querySelector(".modal-close").addEventListener("click", closeModal);
    modal.querySelectorAll(".related-pill").forEach((pill) => {
      pill.addEventListener("click", () => openModal(pill.dataset.slug));
    });

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
    history.replaceState(null, "", location.pathname + location.search);
    if (lastFocused) lastFocused.focus();
  }

  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop.classList.contains("open")) closeModal();
  });

  /* ---------- search ---------- */
  let debounceTimer;
  searchInput.addEventListener("input", (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      query = e.target.value.trim().toLowerCase();
      render();
    }, 120);
  });

  /* ---------- deep link on load ---------- */
  function checkHash() {
    const slug = location.hash.replace("#", "");
    if (slug && lawBySlug[slug]) openModal(slug);
  }

  /* ---------- init ---------- */
  buildChips();
  render();
  checkHash();
})();
