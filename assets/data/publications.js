/* =====================================================================
   PUBLICATIONS & NEWSLETTERS
   ---------------------------------------------------------------------
   Every item here appears on publications.html (latest first — the
   page sorts by date automatically) and the latest three on the home page.

   type:  "newsletter" | "article" | "research" | "update"
   date:  "YYYY-MM-DD"
   file:  path to the PDF, e.g. "publications/newsletters/2025-09-newsletter.pdf"
   link:  (optional) external URL, e.g. a LinkedIn article

   >>> DESIGN-APPROVAL NOTE <<<
   Items marked  sample: true  are PLACEHOLDERS for layout review only.
   Replace them with the firm's actual newsletters before launch.
   (When the backend/CMS is built, this file is replaced by an API feed.)
   ===================================================================== */

window.AIL = window.AIL || {};

AIL.publications = [
  {
    sample: true,
    type: "newsletter",
    title: "Ab Initio Legal Newsletter — September 2025",
    date: "2025-09-15",
    summary: "Monthly round-up of key judgments of the Supreme Court and Delhi High Court, insolvency updates and regulatory developments.",
    tags: ["Supreme Court", "IBC", "Regulatory"],
    file: "#"
  },
  {
    sample: true,
    type: "article",
    title: "Preliminary Enquiry under Section 173(3) BNSS: Scope and Safeguards",
    date: "2025-08-22",
    summary: "An analysis of the preliminary enquiry mechanism introduced by the Bharatiya Nagarik Suraksha Sanhita and its implications for economic offences.",
    tags: ["BNSS", "White-Collar"],
    file: "#"
  },
  {
    sample: true,
    type: "newsletter",
    title: "Ab Initio Legal Newsletter — August 2025",
    date: "2025-08-10",
    summary: "Developments in arbitration law, enforcement of arbitral awards and recent NCLT/NCLAT rulings on Section 7 applications.",
    tags: ["Arbitration", "NCLT"],
    file: "#"
  },
  {
    sample: true,
    type: "research",
    title: "Interim Measures under Section 9 of the Arbitration Act: A Practitioner's Note",
    date: "2025-07-18",
    summary: "Standards applied by courts while granting interim protection before, during and after arbitral proceedings.",
    tags: ["Arbitration", "Interim Relief"],
    file: "#"
  },
  {
    sample: true,
    type: "newsletter",
    title: "Ab Initio Legal Newsletter — July 2025",
    date: "2025-07-08",
    summary: "Commercial Courts Act practice directions, RERA developments and key consumer-law decisions.",
    tags: ["Commercial Courts", "RERA"],
    file: "#"
  },
  {
    sample: true,
    type: "update",
    title: "Moratorium under Section 14 IBC: Protecting Assets of the Corporate Debtor",
    date: "2025-06-20",
    summary: "A short update on the scope of the moratorium and its interplay with pending recovery and exchange-deed proceedings.",
    tags: ["IBC", "Insolvency"],
    file: "#"
  }
];
