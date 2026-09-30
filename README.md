# Ab Initio Legal — Website (Static Front-end)

Design-approval build: HTML, CSS, JavaScript, Bootstrap 5, GSAP + ScrollTrigger, native scrolling.
No server needed to preview — open `index.html` in a browser. The backend/CMS is to be built after approval.

## Pages
| File | Section |
|---|---|
| `index.html` | Home — hero slider (Supreme Court → Delhi High Court), intro, Three T’s, stats, practice areas, year in review, leadership, clients, culture, publications, CTA |
| `about.html` | About the firm, Three T’s, year in review, key advisors |
| `practice-areas.html` | All 20 practice areas (click for detail), drafting & conveyancing, forums |
| `team.html` | Partners, associates, advisors — photo, profile pop-up, LinkedIn link |
| `publications.html` | Newsletters / articles / research / updates — filter, search, latest first, grouped by year |
| `careers.html` | Recruitment + internships, application process, application form with CV upload |
| `culture.html` | Ethos, values, learning path |
| `clients.html` | Client logos (+ testimonials block, hidden until testimonials are added) |
| `contact.html` | Connect With Us — address, phones, emails, LinkedIn, WhatsApp, enquiry form, map |
| `disclaimer.html`, `privacy-policy.html` | Legal pages |

Shared header, footer, disclaimer pop-up and WhatsApp button are rendered by `assets/js/layout.js`.

## Where the content lives
- `assets/data/site-data.js` — firm details, **team (incl. LinkedIn URLs)**, practice areas, clients, testimonials, job openings.
- `assets/data/publications.js` — publications & newsletters.
- Images: `assets/img/` (hero, banners, team, clients, brand). All images are stored locally.

## Uploading a newsletter (until the CMS is built)
1. Copy the PDF into `publications/newsletters/` — e.g. `2025-10-newsletter.pdf`.
2. Open `assets/data/publications.js` and add an entry to the list:
   ```js
   {
     type: "newsletter",               // newsletter | article | research | update
     title: "Ab Initio Legal Newsletter — October 2025",
     date: "2025-10-15",               // YYYY-MM-DD — page sorts latest first automatically
     summary: "One or two lines describing the issue.",
     tags: ["Supreme Court", "IBC"],
     file: "publications/newsletters/2025-10-newsletter.pdf"
   },
   ```
3. Upload both files to the server. The newsletter appears on the Publications page and, if it is among the latest three, on the Home page.

> The six entries currently marked `sample: true` are **placeholders for design review** — replace them with the firm’s past newsletters before launch.

## Notes for the backend developer
- Forms (`contact.html`, `careers.html`, newsletter subscribe on `publications.html` and in the footer) validate on the front-end and show a success state. Each `<form>` has a `data-endpoint` attribute (`/api/contact`, `/api/careers/apply`, `/api/newsletter/subscribe`); wire the POST in `initForms()` in `assets/js/main.js` (search for `BACKEND HOOK`).
- `publications.js` / `site-data.js` can be replaced by API responses with the same shape.
- Disclaimer acceptance is stored in `localStorage` (`ail_disclaimer_accepted`) and requested again after 24 hours (`DISC_DAYS` in `main.js`).
- The pen cursor (from the logo) is set in `assets/css/style.css` (`--cursor`, `--cursor-link`).

## Pending from the firm
- LinkedIn profile URLs for everyone except Abhay Chitravanshi (currently LinkedIn search links) — `site-data.js`.
- Past newsletters (PDFs) to replace the sample entries.
- Confirm job openings/internship details, office hours, and that +91-8800808022 is the WhatsApp number.
- Any approved client testimonials.

## Image credits
- Supreme Court of India — Wikimedia Commons, CC BY-SA 4.0.
- High Court of Delhi — official photo gallery, delhihighcourt.nic.in.
- Team photos and client logos — from the firm’s litigation profile.
