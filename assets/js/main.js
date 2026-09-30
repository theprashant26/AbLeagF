/* =====================================================================
   AB INITIO LEGAL — main script
   Rendering of data-driven sections + GSAP motion.
   ===================================================================== */
(function () {
  "use strict";

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasGSAP = typeof window.gsap !== "undefined";
  const animate = hasGSAP && !reduceMotion;
  if (animate) document.documentElement.classList.add("js-anim");

  const pad = (n) => String(n).padStart(2, "0");
  const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const fmtDate = (iso) => { const d = new Date(iso + "T00:00:00"); return isNaN(d) ? iso : `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`; };
  const coverDate = (iso) => { const d = new Date(iso + "T00:00:00"); return isNaN(d) ? esc(iso) : `${MONTHS[d.getMonth()]}<br><em>${d.getFullYear()}</em>`; };
  const TYPE_LABEL = { newsletter: "Newsletter", article: "Article", research: "Research Paper", update: "Legal Update" };

  /* ==================================================================
     1. RENDERERS
     ================================================================== */

  // ---- Practice areas ----
  function renderPractices() {
    const grid = $("#practiceGrid");
    if (!grid || !AIL.practices) return;
    const limit = parseInt(grid.dataset.limit || "0", 10);
    const list = limit ? AIL.practices.slice(0, limit) : AIL.practices;
    grid.innerHTML = list.map((p, i) => `
      <a class="practice-card" href="#" data-practice="${i}" data-stagger-item>
        <span class="p-num">${pad(i + 1)}</span>
        <span><i class="bi ${esc(p.icon)} p-icon"></i></span>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.text)}</p>
        <span class="p-more">Read more <i class="bi bi-arrow-right"></i></span>
      </a>`).join("");

    if (!$("#practiceModal")) {
      document.body.insertAdjacentHTML("beforeend", `
        <div class="modal fade modal-ail" id="practiceModal" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg"><div class="modal-content">
            <div class="modal-header"><button type="button" class="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button></div>
            <div class="modal-body"></div>
          </div></div>
        </div>`);
    }
    grid.addEventListener("click", (e) => {
      const card = e.target.closest("[data-practice]");
      if (!card) return;
      e.preventDefault();
      const p = AIL.practices[+card.dataset.practice];
      $("#practiceModal .modal-body").innerHTML = `
        <i class="bi ${esc(p.icon)} p-icon"></i>
        <div class="eyebrow mt-3 mb-2">Practice Area ${pad(+card.dataset.practice + 1)}</div>
        <h3 class="mb-4">${esc(p.title)}</h3>
        <p class="lead-text mb-4" style="max-width:none">${esc(p.text)}</p>
        <div class="d-flex flex-wrap gap-3">
          <a class="btn-ail" href="contact.html">Discuss a Matter <i class="bi bi-arrow-right"></i></a>
          <a class="btn-ail btn-dark-outline" href="team.html">Meet the Team</a>
        </div>`;
      bootstrap.Modal.getOrCreateInstance($("#practiceModal")).show();
    });
  }

  // ---- Team ----
  function teamCard(m) {
    return `
      <div class="team-card" data-member="${esc(m.slug)}" data-stagger-item tabindex="0" role="button" aria-label="View profile of ${esc(m.name)}">
        <div class="team-card__img">
          <img src="${esc(m.photo)}" alt="${esc(m.name)}, ${esc(m.designation)}" loading="lazy">
          <div class="team-card__actions">
            <span>View Profile</span>
            <a class="li-btn" href="${esc(m.linkedin)}" target="_blank" rel="noopener" aria-label="${esc(m.name)} on LinkedIn" data-stop><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div class="team-card__body">
          <div class="team-card__role">${esc(m.designation)}${m.practice ? " · " + esc(m.practice) : ""}</div>
          <h3>${esc(m.name)}</h3>
          <div class="team-card__qual">${esc(m.qualifications)}</div>
          <a class="li-inline" href="${esc(m.linkedin)}" target="_blank" rel="noopener" data-stop><i class="bi bi-linkedin"></i> LinkedIn Profile</a>
        </div>
      </div>`;
  }
  // Short bio excerpt: first sentence (plus the next if the first is very short)
  function excerpt(m) {
    const sentences = (m.bio[0] || "").match(/[^.!?]+[.!?]+(\s|$)/g) || [m.bio[0] || ""];
    let out = sentences[0].trim();
    if (out.length < 110 && sentences[1]) out += " " + sentences[1].trim();
    return out;
  }
  // Horizontal "feature" card used for Partners / Key Advisors
  function leadCard(m) {
    return `
      <article class="lead-card" data-member="${esc(m.slug)}" data-stagger-item tabindex="0" role="button" aria-label="View profile of ${esc(m.name)}">
        <div class="lead-card__img"><img src="${esc(m.photo)}" alt="${esc(m.name)}, ${esc(m.designation)}" loading="lazy"></div>
        <div class="lead-card__body">
          <div class="team-card__role">${esc(m.designation)}</div>
          <h3>${esc(m.name)}</h3>
          ${m.practice ? `<div class="lead-card__practice">${esc(m.practice)}</div>` : ""}
          <div class="team-card__qual">${esc(m.qualifications)}</div>
          <p class="lead-card__excerpt">${esc(excerpt(m))}</p>
          <div class="lead-card__tags">${(m.focus || []).slice(0, 4).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
          <div class="lead-card__actions">
            <span class="link-arrow">View Profile <i class="bi bi-arrow-right"></i></span>
            <a class="li-btn" href="${esc(m.linkedin)}" target="_blank" rel="noopener" aria-label="${esc(m.name)} on LinkedIn" data-stop><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
      </article>`;
  }
  function renderTeam() {
    $$("[data-team]").forEach((el) => {
      const groups = el.dataset.team.split(",");
      const card = el.classList.contains("lead") ? leadCard : teamCard;
      el.innerHTML = AIL.team.filter((m) => groups.includes(m.group)).map(card).join("");
    });
    if (!$("[data-member]")) return;

    if (!$("#profileModal")) {
      document.body.insertAdjacentHTML("beforeend", `
        <div class="modal fade profile-modal" id="profileModal" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered"><div class="modal-content">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <div class="row"></div>
          </div></div>
        </div>`);
    }
    const open = (slug) => {
      const m = AIL.team.find((x) => x.slug === slug);
      if (!m) return;
      $("#profileModal .row").innerHTML = `
        <div class="col-md-5"><div class="profile-img" style="background-image:url('${esc(m.photo)}')" role="img" aria-label="${esc(m.name)}"></div></div>
        <div class="col-md-7"><div class="profile-body">
          <div class="team-card__role">${esc(m.designation)}${m.practice ? " · " + esc(m.practice) : ""}</div>
          <h3>${esc(m.name)}</h3>
          <div class="team-card__qual">${esc(m.qualifications)}</div>
          <div class="tags">${(m.focus || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
          ${m.bio.map((p) => `<p>${esc(p)}</p>`).join("")}
          <div class="d-flex flex-wrap gap-3 mt-4">
            <a class="btn-ail" href="${esc(m.linkedin)}" target="_blank" rel="noopener"><i class="bi bi-linkedin"></i> Connect on LinkedIn</a>
            <a class="btn-ail btn-dark-outline" href="contact.html">Get in Touch</a>
          </div>
        </div></div>`;
      bootstrap.Modal.getOrCreateInstance($("#profileModal")).show();
    };
    document.addEventListener("click", (e) => {
      if (e.target.closest("[data-stop]")) return;
      const card = e.target.closest("[data-member]");
      if (card) open(card.dataset.member);
    });
    document.addEventListener("keydown", (e) => {
      if ((e.key === "Enter" || e.key === " ") && e.target.matches("[data-member]")) { e.preventDefault(); open(e.target.dataset.member); }
    });
  }

  // ---- Clients ----
  function renderClients() {
    const mq = $("#clientsMarquee");
    if (mq) {
      const items = AIL.clients.map((c) => `<div class="client-logo"><img src="${esc(c.logo)}" alt="${esc(c.name)}" loading="lazy"></div>`).join("");
      mq.innerHTML = `<div class="marquee__track">${items}${items.replace(/alt="/g, 'aria-hidden="true" alt="')}</div>`;
    }
    const grid = $("#clientsGrid");
    if (grid) {
      grid.innerHTML = AIL.clients.map((c) => `
        <div class="client-tile" data-stagger-item>
          <div class="client-tile__logo"><img src="${esc(c.logo)}" alt="${esc(c.name)}" loading="lazy"></div>
          <h4>${esc(c.name)}</h4><span>${esc(c.sector)}</span>
        </div>`).join("");
    }
    const tw = $("#testimonials");
    if (tw) {
      if (AIL.testimonials && AIL.testimonials.length) {
        $("#testimonialsList").innerHTML = AIL.testimonials.map((t) => `
          <div class="col-md-6" data-stagger-item><div class="testimonial">
            <i class="bi bi-quote text-gold" style="font-size:2.6rem"></i>
            <blockquote>${esc(t.quote)}</blockquote>
            <div class="who">${esc(t.name)}</div><small class="text-muted">${esc(t.role)}</small>
          </div></div>`).join("");
      } else tw.remove();
    }
  }

  // ---- Forums marquee ----
  function renderForums() {
    const el = $("#forumsMarquee");
    if (!el) return;
    const items = AIL.forums.map((f) => `<span class="marquee__item">${esc(f)}</span>`).join("");
    el.innerHTML = `<div class="marquee__track">${items}${items}</div>`;
  }

  // ---- Drafting list ----
  function renderDrafting() {
    const el = $("#draftingList");
    if (el) el.innerHTML = AIL.drafting.map((d) => `<li>${esc(d)}</li>`).join("");
  }

  // ---- Publications ----
  function pubCard(p) {
    const hasFile = p.file && p.file !== "#";
    const href = p.link || p.file || "#";
    return `
      <article class="pub-card" data-stagger-item>
        <div class="pub-cover t-${esc(p.type)}">
          ${p.sample ? '<span class="sample-flag">Sample</span>' : ""}
          <span class="type">${esc(TYPE_LABEL[p.type] || p.type)}</span>
          <span class="cover-title">${coverDate(p.date)}</span>
          <span class="cover-date">Ab Initio Legal · ${esc((p.tags || [])[0] || "Insights")}</span>
        </div>
        <div class="pub-body">
          <div class="pub-date">${fmtDate(p.date)}</div>
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.summary || "")}</p>
          <div class="pub-tags">${(p.tags || []).map((t) => `<span>${esc(t)}</span>`).join("")}</div>
          <div class="pub-actions">
            <a href="${esc(href)}" ${href !== "#" ? 'target="_blank" rel="noopener"' : 'data-sample-link'}>Read <i class="bi bi-arrow-up-right"></i></a>
            ${hasFile ? `<a href="${esc(p.file)}" download>Download PDF <i class="bi bi-download"></i></a>` : ""}
          </div>
        </div>
      </article>`;
  }
  const sortedPubs = () => (AIL.publications || []).slice().sort((a, b) => (a.date < b.date ? 1 : -1));

  function renderLatestPubs() {
    const el = $("#latestPubs");
    if (!el) return;
    const list = sortedPubs().slice(0, 3);
    el.innerHTML = list.length ? list.map(pubCard).join("") : `<div class="pub-empty" style="grid-column:1/-1"><i class="bi bi-journal-text"></i><h3 class="mt-3">Publications coming soon</h3></div>`;
  }

  function renderPublicationsPage() {
    const list = $("#pubList");
    if (!list) return;
    const all = sortedPubs();
    const params = new URLSearchParams(location.search);
    let type = params.get("type") || "all";
    let q = "";

    const counts = all.reduce((acc, p) => ((acc[p.type] = (acc[p.type] || 0) + 1), acc), {});
    const PLURAL = { newsletter: "Newsletters", article: "Articles", research: "Research Papers", update: "Legal Updates" };
    const types = [["all", "All", all.length], ...Object.keys(PLURAL).filter((t) => counts[t]).map((t) => [t, PLURAL[t], counts[t]])];
    $("#pubFilters").innerHTML = types.map(([k, label, n]) => `<button class="filter-btn${k === type ? " active" : ""}" data-type="${k}">${label}<span class="count">${n}</span></button>`).join("");

    function draw() {
      const items = all.filter((p) => (type === "all" || p.type === type) &&
        (!q || (p.title + " " + (p.summary || "") + " " + (p.tags || []).join(" ")).toLowerCase().includes(q)));
      if (!items.length) {
        list.innerHTML = `<div class="pub-empty"><i class="bi bi-search"></i><h3 class="mt-3">No publications found</h3><p class="text-muted mb-0">Try a different filter or search term.</p></div>`;
        return;
      }
      const byYear = {};
      items.forEach((p) => (byYear[p.date.slice(0, 4)] = byYear[p.date.slice(0, 4)] || []).push(p));
      list.innerHTML = Object.keys(byYear).sort().reverse().map((y) => `
        <div class="pub-year">${y}</div>
        <div class="pub-grid">${byYear[y].map(pubCard).join("")}</div>`).join("");
      if (animate) gsap.fromTo($$(".pub-card", list), { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: .8, stagger: .07, ease: "power3.out", onComplete: () => window.ScrollTrigger && ScrollTrigger.refresh() });
    }
    $("#pubFilters").addEventListener("click", (e) => {
      const b = e.target.closest(".filter-btn");
      if (!b) return;
      type = b.dataset.type;
      $$(".filter-btn").forEach((x) => x.classList.toggle("active", x === b));
      const u = new URL(location.href);
      type === "all" ? u.searchParams.delete("type") : u.searchParams.set("type", type);
      history.replaceState(null, "", u);
      draw();
    });
    let t;
    $("#pubSearch").addEventListener("input", (e) => { clearTimeout(t); t = setTimeout(() => { q = e.target.value.trim().toLowerCase(); draw(); }, 180); });
    draw();
  }
  document.addEventListener("click", (e) => {
    if (e.target.closest("[data-sample-link]")) { e.preventDefault(); toast("Sample entry — the PDF will be linked once the firm’s newsletters are uploaded."); }
  });

  // ---- Careers openings ----
  function renderOpenings() {
    const el = $("#openings");
    if (!el) return;
    const tabs = $("#careerTabs");
    let kind = "job";
    const draw = () => {
      const items = AIL.openings.filter((o) => o.open && o.type === kind);
      el.innerHTML = items.length ? items.map((o) => `
        <div class="job-card" data-stagger-item>
          <div>
            <div class="eyebrow mb-2">${o.type === "internship" ? "Internship" : "Recruitment"}</div>
            <h3>${esc(o.title)}</h3>
            <div class="job-meta">
              <span><i class="bi bi-geo-alt"></i>${esc(o.location)}</span>
              <span><i class="bi bi-mortarboard"></i>${esc(o.experience)}</span>
              ${o.duration ? `<span><i class="bi bi-calendar3"></i>${esc(o.duration)}</span>` : ""}
            </div>
            <ul>${o.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
          </div>
          <a class="btn-ail" href="#apply" data-apply="${esc(o.title)}">Apply <i class="bi bi-arrow-right"></i></a>
        </div>`).join("") : `<div class="pub-empty"><i class="bi bi-briefcase"></i><h3 class="mt-3">No open positions right now</h3><p class="text-muted mb-0">We are always happy to receive applications from outstanding candidates — use the form below.</p></div>`;
      if (animate) gsap.fromTo($$(".job-card", el), { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: .7, stagger: .08, ease: "power3.out" });
    };
    tabs && tabs.addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      kind = b.dataset.kind;
      $$("button", tabs).forEach((x) => x.classList.toggle("active", x === b));
      draw();
    });
    el.addEventListener("click", (e) => {
      const a = e.target.closest("[data-apply]");
      if (!a) return;
      const sel = $("#applyPosition");
      if (sel) {
        [...sel.options].forEach((o) => { if (o.value === a.dataset.apply) sel.value = o.value; });
      }
    });
    const sel = $("#applyPosition");
    if (sel) {
      AIL.openings.filter((o) => o.open).forEach((o) => sel.insertAdjacentHTML("beforeend", `<option value="${esc(o.title)}">${esc(o.title)}</option>`));
      sel.insertAdjacentHTML("beforeend", `<option value="General application">General application</option>`);
    }
    draw();
  }

  /* ==================================================================
     2. UI BEHAVIOUR
     ================================================================== */

  function toast(msg) {
    let t = $("#ailToast");
    if (!t) {
      document.body.insertAdjacentHTML("beforeend", `<div id="ailToast" style="position:fixed;left:50%;bottom:30px;transform:translateX(-50%) translateY(20px);background:#0e0e11;color:#fff;padding:16px 26px;border-left:3px solid #b08434;z-index:3000;font-size:14px;opacity:0;transition:all .45s cubic-bezier(.2,.7,.1,1);max-width:90vw;box-shadow:0 20px 50px rgba(0,0,0,.3)"></div>`);
      t = $("#ailToast");
    }
    t.textContent = msg;
    requestAnimationFrame(() => { t.style.opacity = 1; t.style.transform = "translateX(-50%)"; });
    clearTimeout(t._h);
    t._h = setTimeout(() => { t.style.opacity = 0; t.style.transform = "translateX(-50%) translateY(20px)"; }, 3600);
  }

  // Scroll lock — reference-counted so preloader, disclaimer and menu never unlock each other.
  const locks = new Set();
  function lockScroll(key, on) {
    on ? locks.add(key) : locks.delete(key);
    document.documentElement.classList.toggle("is-locked", locks.size > 0);
  }

  function initHeader() {
    const header = $("#siteHeader");
    const toggle = $("#navToggle");
    const toTop = $("#toTop");
    const ring = $("#toTopRing");
    let lastY = 0;
    const onScroll = () => {
      const y = window.scrollY;
      header && header.classList.toggle("is-scrolled", y > 60);
      header && header.classList.toggle("is-hidden", y > 400 && y > lastY && !document.body.classList.contains("nav-open"));
      lastY = y;
      if (toTop) {
        toTop.classList.toggle("show", y > 600);
        const max = document.documentElement.scrollHeight - innerHeight;
        ring && ring.setAttribute("stroke-dashoffset", String(169.6 * (1 - Math.min(1, y / (max || 1)))));
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    toggle && toggle.addEventListener("click", () => {
      const open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open);
      $("#mobileNav").setAttribute("aria-hidden", !open);
      lockScroll("menu", open);
      if (open && animate) gsap.fromTo("#mobileNav li", { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: .05, delay: .25, duration: .6, ease: "power3.out" });
    });
    toTop && toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));
    // Close the mobile menu if the window is resized to desktop, or a menu link is used
    const closeMenu = () => {
      if (!document.body.classList.contains("nav-open")) return;
      document.body.classList.remove("nav-open");
      toggle && toggle.setAttribute("aria-expanded", "false");
      $("#mobileNav") && $("#mobileNav").setAttribute("aria-hidden", "true");
      lockScroll("menu", false);
    };
    window.addEventListener("resize", () => innerWidth >= 1200 && closeMenu());
    $$("#mobileNav a").forEach((a) => a.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (e) => e.key === "Escape" && closeMenu());
  }

  // ---- Disclaimer (Agree / Disagree) ----
  const DISC_KEY = "ail_disclaimer_accepted";
  const DISC_DAYS = 1; // ask again after 24 hours
  function disclaimerAccepted() {
    try { const v = +localStorage.getItem(DISC_KEY); return v && Date.now() - v < DISC_DAYS * 864e5; } catch (e) { return false; }
  }
  function initDisclaimer(onDone) {
    const d = $("#disclaimer");
    if (!d || document.body.hasAttribute("data-no-disclaimer") || disclaimerAccepted()) { onDone && onDone(); return; }
    d.classList.add("show");
    lockScroll("disclaimer", true);
    if (animate) gsap.fromTo(".disclaimer__box", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: .9, ease: "power4.out" });
    setTimeout(() => $("#discAgree").focus(), 300);
    $("#discAgree").addEventListener("click", () => {
      try { localStorage.setItem(DISC_KEY, String(Date.now())); } catch (e) {}
      const close = () => { d.classList.remove("show"); lockScroll("disclaimer", false); onDone && onDone(); };
      animate ? gsap.to(d, { opacity: 0, duration: .5, onComplete: () => { close(); gsap.set(d, { opacity: 1 }); } }) : close();
    });
    $("#discDisagree").addEventListener("click", () => d.classList.add("declined"));
    $("#discReview").addEventListener("click", () => d.classList.remove("declined"));
  }

  // ---- Forms (front-end only — backend to be connected later) ----
  function initForms() {
    $$(".file-drop input[type=file]").forEach((inp) => {
      const box = inp.closest(".file-drop");
      const out = $(".fname", box);
      inp.addEventListener("change", () => { out.textContent = inp.files[0] ? `${inp.files[0].name} · ${(inp.files[0].size / 1048576).toFixed(2)} MB` : "PDF or Word, max 5 MB"; });
      ["dragenter", "dragover"].forEach((ev) => inp.addEventListener(ev, () => box.classList.add("drag")));
      ["dragleave", "drop"].forEach((ev) => inp.addEventListener(ev, () => box.classList.remove("drag")));
    });

    $$("form[data-ail-form]").forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        let ok = true;
        $$("[required]", form).forEach((f) => {
          let valid = f.type === "checkbox" ? f.checked : f.value.trim() !== "";
          if (valid && f.type === "email") valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.value.trim());
          if (valid && f.type === "tel") valid = /^[+\d][\d\s-]{7,}$/.test(f.value.trim());
          if (valid && f.type === "file") {
            const file = f.files[0];
            valid = !!file && file.size <= 5 * 1048576 && /\.(pdf|docx?)$/i.test(file.name);
          }
          f.classList.toggle("is-invalid", !valid);
          if (!valid) ok = false;
        });
        if (!ok) {
          const first = $(".is-invalid", form);
          first && first.focus();
          return;
        }
        /* ------------------------------------------------------------
           BACKEND HOOK: when the backend is ready, POST FormData(form)
           to form.dataset.endpoint here, then show the success state.
           ------------------------------------------------------------ */
        const btn = $("button[type=submit]", form);
        btn.disabled = true;
        btn.dataset.label = btn.innerHTML;
        btn.innerHTML = 'Sending… <span class="spinner-border spinner-border-sm ms-2"></span>';
        setTimeout(() => {
          const success = $(form.dataset.success);
          form.style.display = "none";
          if (success) {
            success.classList.add("show");
            animate && gsap.fromTo(success, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: .8, ease: "power3.out" });
          }
          form.reset();
          btn.disabled = false;
          btn.innerHTML = btn.dataset.label;
        }, 900);
      });
      $$("input, textarea, select", form).forEach((f) => f.addEventListener("input", () => f.classList.remove("is-invalid")));
    });

    $$("[data-form-reset]").forEach((b) => b.addEventListener("click", () => {
      const s = b.closest(".form-success");
      s.classList.remove("show");
      $(b.dataset.formReset).style.display = "";
    }));

    const fs = $("#footerSub");
    fs && fs.addEventListener("submit", (e) => {
      e.preventDefault();
      const v = fs.email.value.trim();
      const msg = $("#footerSubMsg");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) { msg.textContent = "Please enter a valid email address."; return; }
      /* BACKEND HOOK: newsletter subscription */
      msg.textContent = "Thank you — you’re subscribed to our newsletter.";
      fs.reset();
    });
  }

  /* ==================================================================
     3. MOTION (GSAP)
     ================================================================== */

  function splitLines(el) {
    // Splits heading into words wrapped for a masked rise animation.
    if (el.dataset.splitDone) return;
    const walk = (node) => {
      [...node.childNodes].forEach((n) => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach((w) => {
            if (!w) return;
            if (/^\s+$/.test(w)) { frag.appendChild(document.createTextNode(" ")); return; }
            const outer = document.createElement("span");
            outer.className = "split-line";
            outer.style.display = "inline-block";
            const inner = document.createElement("span");
            inner.textContent = w;
            outer.appendChild(inner);
            frag.appendChild(outer);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1 && n.tagName !== "BR") {
          if (!n.children.length && n.textContent.trim().split(/\s+/).length === 1) {
            const outer = document.createElement("span");
            outer.className = "split-line";
            outer.style.display = "inline-block";
            n.replaceWith(outer);
            const inner = document.createElement("span");
            inner.appendChild(n);
            outer.appendChild(inner);
          } else walk(n);
        }
      });
    };
    walk(el);
    el.dataset.splitDone = "1";
  }

  // In-page anchors: native smooth scroll with an offset for the fixed header.
  function initAnchors() {
    document.addEventListener("click", (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  // Keep ScrollTrigger measurements correct when lazy images / web fonts change page height.
  function initRefreshers() {
    if (!animate) return;
    // Mobile address-bar show/hide must not trigger a re-measure (it causes scroll jumps).
    ScrollTrigger.config({ ignoreMobileResize: true });
    // Re-measure only when the page height really changed, and never in the middle of a scroll
    // (a refresh mid-scroll interrupts smooth scrolling and makes the page jump).
    let t, lastScroll = 0, lastH = document.documentElement.scrollHeight;
    window.addEventListener("scroll", () => (lastScroll = performance.now()), { passive: true });
    const refresh = () => {
      clearTimeout(t);
      t = setTimeout(() => {
        if (performance.now() - lastScroll < 300) return refresh();
        const h = document.documentElement.scrollHeight;
        if (h !== lastH) { lastH = h; ScrollTrigger.refresh(); }
      }, 200);
    };
    $$("img").forEach((img) => { if (!img.complete) img.addEventListener("load", refresh, { once: true }); });
    document.fonts && document.fonts.ready.then(refresh);
    window.addEventListener("load", refresh);
  }

  // Safety net: anything that is on screen but still hidden (a missed trigger) gets revealed.
  function initRevealFallback() {
    if (!animate || !("IntersectionObserver" in window)) return;
    const show = (el) => {
      if (el.matches("[data-split]")) gsap.to($$(".split-line > span", el), { yPercent: 0, duration: .8, ease: "power3.out", stagger: .03 });
      else if (el.matches("[data-reveal-img]")) gsap.to(el, { clipPath: "inset(0% 0 0 0)", duration: 1, ease: "power3.out" });
      else gsap.to(el, { opacity: 1, y: 0, duration: .8, ease: "power3.out" });
    };
    const isHidden = (el) => {
      if (el.matches("[data-split]")) { const w = $(".split-line > span", el); return w && Math.abs(gsap.getProperty(w, "yPercent")) > 50; }
      if (el.matches("[data-reveal-img]")) return getComputedStyle(el).clipPath.includes("100%");
      return parseFloat(getComputedStyle(el).opacity) < 0.5;
    };
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target;
      io.unobserve(el);
      setTimeout(() => isHidden(el) && show(el), 1600);
    }), { threshold: 0.01 });
    $$("main [data-split], main [data-reveal], main [data-reveal-img], main [data-stagger-item]").forEach((el) => io.observe(el));
  }

  function initScrollAnimations() {
    if (!animate) return;
    gsap.registerPlugin(ScrollTrigger);

    // Split headings
    $$("[data-split]").forEach((el) => {
      splitLines(el);
      const words = $$(".split-line > span", el);
      gsap.set(words, { yPercent: 110 });
      gsap.to(words, {
        yPercent: 0, duration: 1.1, ease: "power4.out", stagger: 0.045,
        scrollTrigger: { trigger: el, start: "top 88%", once: true }
      });
    });

    // Fade-up reveals
    $$("[data-reveal]").forEach((el) => {
      gsap.to(el, {
        opacity: 1, y: 0, duration: 1.1, ease: "power3.out", delay: parseFloat(el.dataset.delay || 0),
        scrollTrigger: { trigger: el, start: "top 90%", once: true }
      });
    });

    // Image clip reveals
    $$("[data-reveal-img]").forEach((el) => {
      gsap.to(el, { clipPath: "inset(0% 0 0 0)", duration: 1.5, ease: "power4.inOut", scrollTrigger: { trigger: el, start: "top 85%", once: true } });
      const img = $("img", el);
      img && gsap.from(img, { scale: 1.3, duration: 1.8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 85%", once: true } });
    });

    // Staggered groups
    $$("[data-stagger]").forEach((group) => {
      const items = $$("[data-stagger-item]", group);
      if (!items.length) return;
      gsap.set(items, { y: 50, opacity: 0 });
      ScrollTrigger.batch(items, {
        start: "top 92%", once: true,
        onEnter: (batch) => gsap.to(batch, { y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.09 })
      });
    });

    // Parallax
    $$("[data-parallax]").forEach((el) => {
      const amt = parseFloat(el.dataset.parallax || 12);
      gsap.fromTo(el, { yPercent: -amt / 2 }, {
        yPercent: amt / 2, ease: "none",
        scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true }
      });
    });

    // Counters
    $$("[data-count]").forEach((el) => {
      const end = parseFloat(el.dataset.count);
      const obj = { v: 0 };
      gsap.to(obj, {
        v: end, duration: 2.2, ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
        onUpdate: () => (el.textContent = Math.round(obj.v))
      });
    });

    // Gold lines draw
    $$(".divider-gold").forEach((el) => gsap.from(el, { scaleX: 0, transformOrigin: "left", duration: 1.2, ease: "power3.inOut", scrollTrigger: { trigger: el, start: "top 90%", once: true } }));

    // Page banner intro
    const banner = $(".page-banner");
    if (banner) {
      gsap.from(".page-banner__img", { scale: 1.2, duration: 2.2, ease: "power3.out" });
      gsap.from(".page-banner .crumbs, .page-banner p", { y: 30, opacity: 0, duration: 1, delay: .5, stagger: .1, ease: "power3.out" });
    }
  }

  // ---- Hero slider (Supreme Court → Delhi High Court) ----
  function initHero() {
    const hero = $(".hero");
    if (!hero) return;
    const slides = $$(".hero__slide", hero);
    const dots = $$(".hero__dot", hero);
    const DURATION = 7;
    let idx = 0, timer = null, busy = false;

    slides.forEach((s) => $$("[data-hero-split]", s).forEach(splitLines));

    const intro = (s) => {
      if (!animate) return;
      const words = $$("[data-hero-split] .split-line > span", s);
      gsap.fromTo($(".hero__img", s), { scale: 1.16 }, { scale: 1, duration: DURATION + 2, ease: "none" });
      gsap.fromTo($(".hero__label", s), { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: .2 });
      gsap.fromTo(words, { yPercent: 115 }, { yPercent: 0, duration: 1.2, ease: "power4.out", stagger: .06, delay: .3 });
      gsap.fromTo($$(".hero__text, .hero__actions", s), { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: .12, delay: .8 });
    };
    const progress = (i) => {
      dots.forEach((d, k) => d.classList.toggle("is-active", k === i));
      if (!animate) return;
      $$(".hero__dot .bar span").forEach((b, k) => { gsap.killTweensOf(b); gsap.set(b, { scaleX: k < i ? 1 : 0 }); });
      gsap.fromTo($$(".hero__dot .bar span")[i], { scaleX: 0 }, { scaleX: 1, duration: DURATION, ease: "none" });
    };
    const go = (n) => {
      if (busy || n === idx) return;
      busy = true;
      const cur = slides[idx], nxt = slides[n];
      nxt.classList.add("is-active");
      if (animate) {
        gsap.set(nxt, { zIndex: 2, clipPath: "inset(0 0 0 100%)" });
        gsap.set(cur, { zIndex: 1 });
        gsap.to(nxt, { clipPath: "inset(0 0 0 0%)", duration: 1.4, ease: "power4.inOut", onComplete: () => { cur.classList.remove("is-active"); gsap.set(nxt, { clearProps: "clipPath" }); busy = false; } });
        const cap = $(".hero__caption", cur);
        gsap.to(cap, { opacity: 0, x: -40, duration: .6, ease: "power2.in", onComplete: () => gsap.set(cap, { opacity: 1, x: 0 }) });
      } else { cur.classList.remove("is-active"); busy = false; }
      idx = n;
      if (animate) { gsap.killTweensOf($(".hero__caption", nxt)); gsap.set($(".hero__caption", nxt), { opacity: 1, x: 0 }); }
      intro(nxt);
      progress(n);
      schedule();
    };
    const schedule = () => { clearTimeout(timer); timer = setTimeout(() => go((idx + 1) % slides.length), DURATION * 1000); };
    dots.forEach((d, k) => d.addEventListener("click", () => go(k)));
    document.addEventListener("visibilitychange", () => { if (document.hidden) clearTimeout(timer); else if (hero._started) schedule(); });

    // Mouse-move depth on hero image
    if (animate && matchMedia("(pointer:fine)").matches) {
      const imgs = $$(".hero__img", hero);
      const qx = imgs.map((i) => gsap.quickTo(i, "x", { duration: 1.4, ease: "power3.out" }));
      const qy = imgs.map((i) => gsap.quickTo(i, "y", { duration: 1.4, ease: "power3.out" }));
      hero.addEventListener("mousemove", (e) => {
        const x = (e.clientX / innerWidth - .5), y = (e.clientY / innerHeight - .5);
        qx.forEach((f) => f(x * -24)); qy.forEach((f) => f(y * -16));
      });
    }
    // Hero content drifts on scroll
    if (animate) gsap.to($$(".hero__content", hero), { yPercent: 18, opacity: .2, ease: "none", scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true } });

    hero._start = () => { hero._started = true; intro(slides[0]); progress(0); schedule(); };
  }

  // ---- Preloader then page intro ----
  function runIntro() {
    const pre = $("#preloader");
    const hero = $(".hero");
    const startPage = () => {
      initDisclaimer(() => {});
      hero && hero._start && hero._start();
    };
    if (!pre || !animate) {
      pre && pre.remove();
      startPage();
      return;
    }
    lockScroll("preloader", true);
    const tl = gsap.timeline({
      onComplete: () => { pre.remove(); lockScroll("preloader", false); }
    });
    tl.to(".preloader__mark", { clipPath: "inset(0% 0 0 0)", duration: .7, ease: "power3.inOut" })
      .to(".preloader__word", { opacity: 1, letterSpacing: ".7em", duration: .6, ease: "power2.out" }, "-=.3")
      .to(".preloader__bar span", { scaleX: 1, duration: .6, ease: "power2.inOut" }, "-=.6")
      .to(".preloader__inner", { opacity: 0, y: -20, duration: .3, ease: "power2.in" })
      .to(pre, { yPercent: -100, duration: .7, ease: "power4.inOut" }, "-=.05")
      .add(startPage, "-=.4");
  }

  /* ==================================================================
     BOOT
     ================================================================== */
  function boot() {
    renderPractices();
    renderTeam();
    renderClients();
    renderForums();
    renderDrafting();
    renderLatestPubs();
    renderPublicationsPage();
    renderOpenings();

    if (animate) gsap.registerPlugin(ScrollTrigger);
    initAnchors();
    initHeader();
    initForms();
    initHero();
    initScrollAnimations();
    initRefreshers();
    initRevealFallback();
    runIntro();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
