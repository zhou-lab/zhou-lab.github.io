/* ============================================================
   Dashboard components — render from the data files.
   <member-grid> <alumni-list> <news-feed limit> <pubs-list limit>
   Plus scrollspy for the sidebar + auto counts.
   ============================================================ */

/* ---- Member hover popover (singleton, body-level so it never clips) ---- */
let _pop = null;
function ensurePop() {
  if (!_pop) { _pop = document.createElement("div"); _pop.className = "person-pop"; document.body.appendChild(_pop); }
  return _pop;
}
function showPop(m, el) {
  const pop = ensurePop();
  pop.innerHTML = `<div class="person-pop__name">${m.name}</div>
    <div class="person-pop__role">${m.role}${m.dates ? " · " + m.dates : ""}</div>
    <p class="person-pop__bio">${m.bio || ""}</p>`;
  pop.classList.add("is-on");
  const r = el.getBoundingClientRect();
  const pr = pop.getBoundingClientRect();
  let top = r.top - pr.height - 10;
  if (top < 8) top = r.bottom + 10;                 // flip below if no room above
  let left = r.left + r.width / 2 - pr.width / 2;
  left = Math.max(8, Math.min(left, window.innerWidth - pr.width - 8));
  pop.style.top = top + "px";
  pop.style.left = left + "px";
}
function hidePop() { if (_pop) _pop.classList.remove("is-on"); }
window.addEventListener("scroll", hidePop, true);   // capture inner-panel scrolls too

/* ---- Members ---- */
class MemberGrid extends HTMLElement {
  connectedCallback() {
    if (typeof MEMBERS === "undefined") return;
    const limit = parseInt(this.getAttribute("limit") || "0", 10);
    const items = limit > 0 ? MEMBERS.slice(0, limit) : MEMBERS;
    this.innerHTML = `<div class="people">${items.map((m) => `
      <div class="person${m.lead ? " person--lead" : ""}">
        <img class="person__photo" src="${IMG_BASE}${m.photo}" alt="${m.name}" loading="lazy">
        <div class="person__name">${m.name}</div>
        <div class="person__role">${m.role}</div>
        <div class="person__meta">${[m.dates, m.meta].filter(Boolean).join(" · ")}</div>
      </div>`).join("")}</div>`;
    this.querySelectorAll(".person").forEach((el, i) => {
      const m = items[i];
      if (!m.bio) return;
      el.addEventListener("mouseenter", () => showPop(m, el));
      el.addEventListener("mouseleave", hidePop);
    });
  }
}
customElements.define("member-grid", MemberGrid);

/* ---- Lab Life gallery ---- */
/* lightbox carousel (singleton) */
let _lb = null, _lbItems = [], _lbIndex = 0;
let _lbScale = 1, _lbX = 0, _lbY = 0, _drag = null;

function lbTransform() {
  const img = _lb.querySelector(".lb__img");
  img.style.transform = `translate(${_lbX}px, ${_lbY}px) scale(${_lbScale})`;
  img.style.cursor = _lbScale > 1 ? (_drag ? "grabbing" : "grab") : "zoom-in";
}
function lbResetZoom() { _lbScale = 1; _lbX = 0; _lbY = 0; if (_lb) lbTransform(); }
function lbZoomAt(factor, px, py) {
  const img = _lb.querySelector(".lb__img");
  const r = img.getBoundingClientRect();
  const ns = Math.min(6, Math.max(1, _lbScale * factor));
  const f = ns / _lbScale;
  if (px == null) { px = r.left + r.width / 2; py = r.top + r.height / 2; }
  const dx = px - (r.left + r.width / 2), dy = py - (r.top + r.height / 2);
  _lbX -= dx * (f - 1); _lbY -= dy * (f - 1);
  _lbScale = ns;
  if (_lbScale === 1) { _lbX = 0; _lbY = 0; }
  lbTransform();
}

function ensureLightbox() {
  if (_lb) return _lb;
  _lb = document.createElement("div");
  _lb.className = "lightbox";
  _lb.innerHTML = `
    <div class="lb__bar">
      <span class="lb__count"></span>
      <div class="lb__tools">
        <button class="lb__zoom" data-z="out" aria-label="Zoom out">&minus;</button>
        <button class="lb__zoom" data-z="in" aria-label="Zoom in">+</button>
        <button class="lb__close" aria-label="Close">&times;</button>
      </div>
    </div>
    <button class="lb__nav lb__prev" aria-label="Previous">&#8249;</button>
    <figure class="lb__fig"><img class="lb__img" alt=""></figure>
    <button class="lb__nav lb__next" aria-label="Next">&#8250;</button>
    <div class="lb__foot">
      <figcaption class="lb__cap"></figcaption>
      <div class="lb__strip"></div>
    </div>`;
  document.body.appendChild(_lb);
  _lb.querySelector(".lb__close").addEventListener("click", closeLightbox);
  _lb.querySelector(".lb__prev").addEventListener("click", (e) => { e.stopPropagation(); lbStep(-1); });
  _lb.querySelector(".lb__next").addEventListener("click", (e) => { e.stopPropagation(); lbStep(1); });
  _lb.querySelectorAll(".lb__zoom").forEach((b) =>
    b.addEventListener("click", (e) => { e.stopPropagation(); lbZoomAt(b.dataset.z === "in" ? 1.25 : 1 / 1.25); }));
  _lb.addEventListener("click", (e) => { if (e.target === _lb || e.target.classList.contains("lb__fig")) closeLightbox(); });

  const img = _lb.querySelector(".lb__img");
  img.addEventListener("click", (e) => e.stopPropagation());
  img.addEventListener("wheel", (e) => {
    e.preventDefault();
    const d = Math.max(-40, Math.min(40, e.deltaY));   // clamp big trackpad jumps
    lbZoomAt(Math.exp(-d * 0.0016), e.clientX, e.clientY);
  }, { passive: false });
  img.addEventListener("dblclick", (e) => { e.preventDefault(); _lbScale > 1 ? lbResetZoom() : lbZoomAt(2.5, e.clientX, e.clientY); });
  img.addEventListener("pointerdown", (e) => {
    if (_lbScale <= 1) return;
    e.preventDefault(); _drag = { x: e.clientX, y: e.clientY, ox: _lbX, oy: _lbY };
    img.setPointerCapture(e.pointerId); lbTransform();
  });
  img.addEventListener("pointermove", (e) => {
    if (!_drag) return;
    _lbX = _drag.ox + (e.clientX - _drag.x); _lbY = _drag.oy + (e.clientY - _drag.y); lbTransform();
  });
  const endDrag = (e) => { if (_drag) { try { img.releasePointerCapture(e.pointerId); } catch (_) {} _drag = null; lbTransform(); } };
  img.addEventListener("pointerup", endDrag);
  img.addEventListener("pointercancel", endDrag);
  return _lb;
}
/* Grids and the lightbox strip render 52-150px boxes; only the lightbox itself
   needs the full-size file. Thumbs are pre-rendered alongside each source. */
function thumbOf(src) {
  return src.replace(/^(images\/(?:lab|papers))\//, "$1/thumbs/");
}
function lbRender() {
  const g = _lbItems[_lbIndex];
  const img = _lb.querySelector(".lb__img");
  lbResetZoom();
  img.classList.remove("is-loaded");
  img.onload = () => img.classList.add("is-loaded");
  img.src = g.src;
  img.alt = g.caption || "";
  _lb.querySelector(".lb__cap").innerHTML = (g.caption || "") +
    (g.link ? ` <a class="lb__link" href="${g.link}" target="_blank" rel="noopener">Read paper ↗</a>` : "");
  _lb.querySelector(".lb__count").textContent = `${_lbIndex + 1} / ${_lbItems.length}`;
  const multi = _lbItems.length > 1 ? "" : "none";
  _lb.querySelector(".lb__prev").style.display = multi;
  _lb.querySelector(".lb__next").style.display = multi;
  const thumbs = _lb.querySelectorAll(".lb__thumb");
  thumbs.forEach((t, i) => t.classList.toggle("is-active", i === _lbIndex));
  if (thumbs[_lbIndex]) thumbs[_lbIndex].scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
}
function lbBuildStrip() {
  const strip = _lb.querySelector(".lb__strip");
  strip.style.display = _lbItems.length > 1 ? "" : "none";
  strip.innerHTML = _lbItems.map((g, i) =>
    `<button class="lb__thumb" data-i="${i}"><img src="${thumbOf(g.src)}" alt="" loading="lazy"></button>`).join("");
  strip.querySelectorAll(".lb__thumb").forEach((t) =>
    t.addEventListener("click", (e) => { e.stopPropagation(); _lbIndex = parseInt(t.dataset.i, 10); lbRender(); }));
}
function lbStep(d) { _lbIndex = (_lbIndex + d + _lbItems.length) % _lbItems.length; lbRender(); }
function lbKey(e) {
  if (e.key === "Escape") closeLightbox();
  else if (e.key === "ArrowLeft") lbStep(-1);
  else if (e.key === "ArrowRight") lbStep(1);
}
function openLightbox(items, index) {
  _lbItems = items; _lbIndex = index;
  ensureLightbox(); lbBuildStrip(); lbRender();
  _lb.classList.add("is-on");
  document.body.style.overflow = "hidden";
  document.addEventListener("keydown", lbKey);
}
function closeLightbox() {
  if (!_lb) return;
  _lb.classList.remove("is-on");
  document.body.style.overflow = "";
  document.removeEventListener("keydown", lbKey);
}

class PhotoGallery extends HTMLElement {
  connectedCallback() {
    if (typeof GALLERY === "undefined") return;
    const items = [...GALLERY].sort((a, b) => (b.year || 0) - (a.year || 0)); // newest first
    let html = "", lastYear = null;
    items.forEach((g, i) => {
      const y = g.year || "";
      if (y !== lastYear) { html += `<div class="gallery-sep">${y}</div>`; lastYear = y; }
      html += `<button class="shot" data-i="${i}" title="${g.caption || ""}">
        <img src="${thumbOf(g.src)}" alt="${g.caption || "Lab photo"}" loading="lazy"></button>`;
    });
    this.innerHTML = `<div class="gallery-row">${html}</div>`;
    this.querySelectorAll(".shot").forEach((btn) =>
      btn.addEventListener("click", () => openLightbox(items, parseInt(btn.dataset.i, 10))));
  }
}
customElements.define("photo-gallery", PhotoGallery);

class PaperGallery extends HTMLElement {
  connectedCallback() {
    if (typeof PAPERS === "undefined") return;
    const lbItems = PAPERS.map((p) => ({ src: p.src, caption: `${p.title} · ${p.journal}`, link: p.link }));
    this.innerHTML = `<div class="gallery-row paper-row">${PAPERS.map((p, i) => `
      <button class="pshot" data-i="${i}" title="${p.title}">
        <img src="${thumbOf(p.src)}" alt="${p.journal}" loading="lazy">
        <span class="pshot__journal">${p.journal}</span>
        <span class="pshot__title">${p.title}</span>
      </button>`).join("")}</div>`;
    this.querySelectorAll(".pshot").forEach((btn) =>
      btn.addEventListener("click", () => openLightbox(lbItems, parseInt(btn.dataset.i, 10))));
  }
}
customElements.define("paper-gallery", PaperGallery);

class AlumniList extends HTMLElement {
  connectedCallback() {
    if (typeof ALUMNI === "undefined") return;
    this.innerHTML = `<ul class="alumni">${ALUMNI.map((a) => `
      <li class="alum">
        <div class="alum__top">
          <span class="alum__name">${a.name}</span>
          <span class="alum__dates">${a.dates || ""}</span>
        </div>
        <div class="alum__role">${a.role}</div>
        ${a.now ? `<div class="alum__now">${a.now}</div>` : ""}
      </li>`).join("")}</ul>`;
  }
}
customElements.define("alumni-list", AlumniList);

/* ---- News ---- */
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
function fmtDate(s) {
  const p = String(s).split("-");           // "2026-05-13" | "2025-09" | "2026"
  if (p.length === 1) return p[0];
  const mon = MONTHS[parseInt(p[1], 10) - 1];
  if (p.length === 2) return `${mon} ${p[0]}`;
  return `${mon} ${parseInt(p[2], 10)}, ${p[0]}`;
}
class NewsFeed extends HTMLElement {
  connectedCallback() {
    if (typeof NEWS === "undefined") return;
    const limit = parseInt(this.getAttribute("limit") || "0", 10);
    const items = limit > 0 ? NEWS.slice(0, limit) : NEWS;
    this.innerHTML = `<ul class="news-list">${items.map((n) => {
      const title = n.link
        ? `<a href="${n.link}" target="_blank" rel="noopener" class="news-item__title">${n.title}</a>`
        : `<span class="news-item__title">${n.title}</span>`;
      return `<li class="news-item"><span class="news-item__date">${fmtDate(n.date)}</span>
        <span class="news-item__tag">${n.tag}</span>
        <p class="news-item__body">${title}</p></li>`;
    }).join("")}</ul>`;
  }
}
customElements.define("news-feed", NewsFeed);

/* ---- Publications ---- */
const PUB_LINK_LABELS = { pdf: "PDF", code: "Code", server: "Server", doc: "Data", link: "Link" };
function pubLink(type, href, label) {
  return `<a class="pub__link" href="${href}" target="_blank" rel="noopener">${label || PUB_LINK_LABELS[type] || "Link"}</a>`;
}
function pubItem(p) {
  const links = [];
  if (p.pdf) links.push(pubLink("pdf", PUB_PDF_BASE + p.pdf));
  (p.links || []).forEach((l) => links.push(pubLink(l.type, l.href, l.label)));
  const titleHtml = p.titleLink ? `<a href="${p.titleLink}" target="_blank" rel="noopener">${p.title}</a>` : p.title;
  const note = p.note ? `<span class="pub__note">· ${p.note}</span>` : "";
  const press = (p.press || []).length
    ? `<div class="pub__press"><span class="lbl">Media</span>${p.press.map((x) =>
        `<a href="${x.href}" target="_blank" rel="noopener">${x.label}</a>`).join(" · ")}</div>`
    : "";
  return `<div class="pub">
    <div class="pub__title">${titleHtml}</div>
    <p class="pub__authors">${p.authors}</p>
    <div class="pub__line"><span class="pub__journal">${p.journal} · ${p.year}</span>${note}
      ${links.length ? `<span class="pub__links">${links.join("")}</span>` : ""}</div>
    ${press}
  </div>`;
}
class PubsList extends HTMLElement {
  connectedCallback() {
    if (typeof PUBS === "undefined") return;
    const limit = parseInt(this.getAttribute("limit") || "0", 10);
    if (limit > 0) {
      this.innerHTML = PUBS.filter((p) => !p.prelab).slice(0, limit).map(pubItem).join("");
      return;
    }
    let html = "", lastYear = null, dividerShown = false;
    PUBS.forEach((p) => {
      if (p.prelab && !dividerShown) { html += `<p class="pub-divider">Prior to the Zhou Lab</p>`; dividerShown = true; lastYear = null; }
      if (p.year !== lastYear) { html += `<h2 class="pub-year">${p.year}</h2>`; lastYear = p.year; }
      html += pubItem(p);
    });
    this.innerHTML = html;
  }
}
customElements.define("pubs-list", PubsList);

/* ---- Counts + scrollspy ---- */
document.addEventListener("DOMContentLoaded", () => {
  const counts = {
    pubs: typeof PUBS !== "undefined" ? PUBS.length : 0,
    members: typeof MEMBERS !== "undefined" ? MEMBERS.length : 0,
    alumni: typeof ALUMNI !== "undefined" ? ALUMNI.length : 0,
    news: typeof NEWS !== "undefined" ? NEWS.length : 0,
  };
  document.querySelectorAll("[data-count]").forEach((el) => {
    const v = counts[el.getAttribute("data-count")];
    if (v != null) el.textContent = v;
  });

  /* foldable panels — click the header to toggle short ↔ full */
  document.querySelectorAll(".panel--fold").forEach((panel) => {
    const head = panel.querySelector(".panel__head");
    if (!head) return;
    head.addEventListener("click", (e) => {
      if (e.target.closest("a")) return; // let header links work
      const expanded = panel.classList.toggle("is-expanded");
      const btn = head.querySelector(".fold");
      if (btn) {
        btn.setAttribute("aria-expanded", String(expanded));
        const txt = btn.querySelector(".fold__txt");
        if (txt) txt.textContent = expanded ? "Collapse" : "Expand";
      }
    });
  });

  const links = [...document.querySelectorAll(".snav a[href^='#']")];
  const map = {};
  links.forEach((l) => (map[l.getAttribute("href").slice(1)] = l));
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        links.forEach((x) => x.classList.remove("is-active"));
        map[e.target.id] && map[e.target.id].classList.add("is-active");
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  document.querySelectorAll("[data-section]").forEach((s) => obs.observe(s));
});
