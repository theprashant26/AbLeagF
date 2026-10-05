/* =====================================================================
   Shared layout — header, mobile nav, footer, disclaimer, floating
   buttons and preloader are rendered here so every page stays in sync.
   ===================================================================== */
(function () {
  const F = AIL.firm;
  const page = document.body.dataset.page || "";
  const act = (p) => (p === page ? " active" : "");
  const aboutPages = ["about", "culture", "clients"];

  const NAV = `
    <div class="topbar">
      <div class="container-xl">
        <ul class="topbar__list">
          <li><i class="bi bi-geo-alt"></i>New Delhi · Pan-India Presence</li>
          <li class="d-none d-lg-block"><i class="bi bi-envelope"></i><a href="mailto:${F.emails[0]}">${F.emails[0]}</a></li>
        </ul>
        <ul class="topbar__list">
          <li><i class="bi bi-telephone"></i><a href="tel:${F.phoneHref}">${F.phone}</a></li>
          <li><a href="${F.social.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="bi bi-linkedin"></i>LinkedIn</a></li>
        </ul>
      </div>
    </div>
    <header class="site-header" id="siteHeader">
      <div class="container-xl">
        <a class="brand" href="index.html" aria-label="Ab Initio Legal LLP — Home">
          <img src="assets/img/brand/logo-light.png" alt="Ab Initio Legal LLP — Advocates &amp; Solicitors" width="240" height="68">
        </a>
        <nav aria-label="Main">
          <ul class="main-nav">
            <li><a class="${act("home").trim()}" href="index.html">Home</a></li>
            <li class="has-sub">
              <a class="${aboutPages.includes(page) ? "active" : ""}" href="about.html">The Firm <i class="bi bi-chevron-down"></i></a>
              <ul class="subnav">
                <li><a class="${act("about").trim()}" href="about.html">About Us</a></li>
                <li><a class="${act("culture").trim()}" href="culture.html">Our Culture</a></li>
                <li><a class="${act("clients").trim()}" href="clients.html">Our Clients</a></li>
              </ul>
            </li>
            <li><a class="${act("practice").trim()}" href="practice-areas.html">Practice Areas</a></li>
            <li><a class="${act("team").trim()}" href="team.html">Our Team</a></li>
            <li><a class="${act("publications").trim()}" href="publications.html">Publications</a></li>
            <li><a class="${act("careers").trim()}" href="careers.html">Careers</a></li>
          </ul>
        </nav>
        <div class="d-flex align-items-center">
          <a class="btn-ail header-cta" href="contact.html">Connect With Us</a>
          <button class="nav-toggle" id="navToggle" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
        </div>
      </div>
    </header>
    <div class="mobile-nav" id="mobileNav" aria-hidden="true">
      <ul>
        <li><a class="${act("home").trim()}" href="index.html">Home</a></li>
        <li><a class="${act("about").trim()}" href="about.html">About Us</a></li>
        <li class="mobile-sub"><a class="${act("culture").trim()}" href="culture.html">Our Culture</a></li>
        <li class="mobile-sub"><a class="${act("clients").trim()}" href="clients.html">Our Clients</a></li>
        <li><a class="${act("practice").trim()}" href="practice-areas.html">Practice Areas</a></li>
        <li><a class="${act("team").trim()}" href="team.html">Our Team</a></li>
        <li><a class="${act("publications").trim()}" href="publications.html">Publications</a></li>
        <li><a class="${act("careers").trim()}" href="careers.html">Careers</a></li>
        <li><a class="${act("contact").trim()}" href="contact.html">Connect With Us</a></li>
      </ul>
      <div class="mobile-nav__foot">
        <p class="mb-1"><a href="tel:${F.phoneHref}">${F.phone}</a> &nbsp;·&nbsp; <a href="tel:${F.mobileHref}">${F.mobile}</a></p>
        <p class="mb-1"><a href="mailto:${F.emails[0]}">${F.emails[0]}</a></p>
        <p><a href="${F.social.linkedin}" target="_blank" rel="noopener"><i class="bi bi-linkedin"></i> Follow us on LinkedIn</a></p>
      </div>
    </div>`;

  const year = new Date().getFullYear();
  const FOOTER = `
    <footer class="site-footer">
      <div class="footer-top">
        <div class="container-xl">
          <div class="row g-5">
            <div class="col-lg-4">
              <img class="footer-logo" src="assets/img/brand/logo-light.png" alt="Ab Initio Legal LLP" loading="lazy">
              <p>A full-service, litigation-driven law firm established in ${F.established}, representing corporates, financial institutions and individuals before courts and tribunals across India.</p>
              <div class="footer-social">
                <a href="${F.social.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
                <a href="mailto:${F.emails[0]}" aria-label="Email"><i class="bi bi-envelope"></i></a>
                <a href="https://wa.me/${F.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a>
                <a href="tel:${F.phoneHref}" aria-label="Call"><i class="bi bi-telephone"></i></a>
              </div>
            </div>
            <div class="col-6 col-md-4 col-lg-2">
              <h5>The Firm</h5>
              <ul class="footer-links">
                <li><a href="about.html">About Us</a></li>
                <li><a href="team.html">Our Team</a></li>
                <li><a href="culture.html">Our Culture</a></li>
                <li><a href="clients.html">Our Clients</a></li>
                <li><a href="careers.html">Careers</a></li>
              </ul>
            </div>
            <div class="col-6 col-md-4 col-lg-2">
              <h5>Explore</h5>
              <ul class="footer-links">
                <li><a href="practice-areas.html">Practice Areas</a></li>
                <li><a href="publications.html">Publications</a></li>
                <li><a href="publications.html?type=newsletter">Newsletters</a></li>
                <li><a href="contact.html">Connect With Us</a></li>
                <li><a href="disclaimer.html">Disclaimer</a></li>
              </ul>
            </div>
            <div class="col-md-4 col-lg-4">
              <h5>Reach Us</h5>
              <p class="mb-1 text-white footer-firm">${F.name}</p>
              <p class="mb-2">${F.address.join(" ")}</p>
              <p class="mb-2 footer-offices"><i class="bi bi-geo-alt"></i> ${(F.offices || []).map((o) => o.city + (o.hq ? " (Head Office)" : "")).join(" · ")}</p>
              <p class="mb-1"><a class="text-white" href="tel:${F.phoneHref}">${F.phone}</a> &nbsp;/&nbsp; <a class="text-white" href="tel:${F.mobileHref}">${F.mobile}</a></p>
              <p class="mb-4"><a class="text-white" href="mailto:${F.emails[0]}">${F.emails[0]}</a></p>
              <h5 class="mb-2">Newsletter</h5>
              <form class="footer-sub" id="footerSub" novalidate>
                <input type="email" name="email" placeholder="Your email address" aria-label="Email address" required>
                <button type="submit" aria-label="Subscribe"><i class="bi bi-arrow-right"></i></button>
              </form>
              <div class="footer-sub-msg" id="footerSubMsg" aria-live="polite"></div>
            </div>
          </div>
        </div>
      </div>
      <p class="footer-big" aria-hidden="true">Ab Initio Legal LLP</p>
      <div class="footer-bottom">
        <div class="container-xl">
          <span>© ${year} ${F.name}. All rights reserved.</span>
          <span><a href="disclaimer.html">Disclaimer</a> &nbsp;·&nbsp; <a href="privacy-policy.html">Privacy Policy</a></span>
        </div>
        <div class="container-xl mt-3">
          <p class="footer-note mb-0">As per the rules of the Bar Council of India, law firms are not permitted to solicit work or advertise. This website is meant only to provide information about the firm and does not constitute legal advice or an invitation to create an advocate–client relationship. Court photographs: Supreme Court of India — Wikimedia Commons (CC BY-SA 4.0); High Court of Delhi — official photo gallery.</p>
        </div>
      </div>
    </footer>
    <div class="fab-stack">
      <a class="fab fab-wa" href="https://wa.me/${F.whatsapp}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp"><i class="bi bi-whatsapp"></i></a>
      <button class="fab fab-top" id="toTop" aria-label="Back to top">
        <svg viewBox="0 0 56 56" width="56" height="56"><circle cx="28" cy="28" r="27" stroke-dasharray="169.6" stroke-dashoffset="169.6" id="toTopRing"/></svg>
        <i class="bi bi-arrow-up"></i>
      </button>
    </div>`;

  const DISCLAIMER = `
    <div class="disclaimer" id="disclaimer" role="dialog" aria-modal="true" aria-labelledby="discTitle">
      <div class="disclaimer__box">
        <div class="disclaimer__head">
          <img src="assets/img/brand/logo-dark.png" alt="Ab Initio Legal LLP — Advocates &amp; Solicitors">
          <h2 id="discTitle">Disclaimer</h2>
          <small>As per the Rules of the Bar Council of India</small>
        </div>
        <div class="disclaimer__body">
          <p>The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner. By accessing this website, <strong>${F.website}</strong>, you acknowledge and confirm that:</p>
          <ul>
            <li>You are seeking information relating to ${F.name} of your own accord. No solicitation, advertisement, personal communication, invitation or inducement of any kind has been made by Ab Initio Legal LLP or any of its partners or representatives for the purpose of soliciting work through this website.</li>
            <li>The information on this website is provided solely for informational purposes and should not be construed as legal advice or a legal opinion. It does not create an advocate–client relationship.</li>
            <li>Ab Initio Legal LLP shall not be liable for any consequences arising from any action taken by you in reliance on the material or information provided on this website. You should seek independent legal advice for your specific situation.</li>
            <li>Any information you share with us through this website will not be treated as confidential until an advocate–client relationship is formally established.</li>
            <li>The contents of this website, including text, logos and graphics, are the intellectual property of Ab Initio Legal LLP.</li>
          </ul>
          <p class="mb-0">If you have any questions, please write to <a href="mailto:${F.emails[0]}">${F.emails[0]}</a>.</p>
        </div>
        <div class="disclaimer__foot">
          <button class="btn-ail btn-dark-outline" id="discDisagree" type="button">I Disagree</button>
          <button class="btn-ail" id="discAgree" type="button">I Agree <i class="bi bi-arrow-right"></i></button>
        </div>
        <div class="disclaimer__declined">
          <img src="assets/img/brand/mark-dark.png" alt="" style="height:70px" class="mb-4">
          <h2 class="mb-3">Thank you for visiting.</h2>
          <p class="text-muted mb-4">Access to this website requires acceptance of the disclaimer, in keeping with the rules of the Bar Council of India.</p>
          <button class="btn-ail" id="discReview" type="button">Review Disclaimer Again</button>
        </div>
      </div>
    </div>`;

  const PRELOADER = `
    <div class="preloader" id="preloader" aria-hidden="true">
      <div class="preloader__inner">
        <img class="preloader__mark" src="assets/img/brand/mark-light.png" alt="">
        <div class="preloader__word">Ab Initio</div>
        <div class="preloader__bar"><span></span></div>
      </div>
    </div>`;

  const h = document.getElementById("ail-header");
  const f = document.getElementById("ail-footer");
  if (h) h.outerHTML = NAV;
  if (f) f.outerHTML = FOOTER;
  document.body.insertAdjacentHTML("beforeend", DISCLAIMER);
  // Preloader only on first page view of the session
  let seen = false;
  try { seen = sessionStorage.getItem("ail_loaded") === "1"; } catch (e) {}
  if (!seen && !document.body.hasAttribute("data-no-preloader")) {
    document.body.insertAdjacentHTML("afterbegin", PRELOADER);
  }
  try { sessionStorage.setItem("ail_loaded", "1"); } catch (e) {}
})();
