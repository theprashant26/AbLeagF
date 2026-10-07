/* =====================================================================
   PUBLICATIONS & NEWSLETTERS
   ---------------------------------------------------------------------
   Every item here appears on publications.html (latest first, the
   page sorts by date automatically) and the latest three on the home page.

   type:  "newsletter" | "article" | "research" | "update"
   date:  "YYYY-MM-DD", or "YYYY-MM" for a monthly issue (shown as "January 2026")
   file:  path to the PDF, e.g. "publications/newsletters/2026-10-litigation-newsletter.pdf"
   link:  (optional) external URL, e.g. a LinkedIn article

   To add a new issue: copy the PDF into publications/newsletters/ and add
   an entry at the top of this list. (When the backend/CMS is built, this
   file is replaced by an admin upload screen.)
   ===================================================================== */

window.AIL = window.AIL || {};

AIL.publications = [
  {
    type: "newsletter",
    title: "Third-Party Funding in Arbitration: Disclosure, Costs and the Regulatory Road Ahead for India",
    date: "2026-09",
    summary: "As arbitration grows more complex and costly, third-party funding is becoming a feature of high-value disputes. This issue examines disclosure obligations, cost consequences and the regulatory path ahead for India.",
    tags: ["Arbitration", "Litigation Funding"],
    file: "publications/newsletters/2026-09-litigation-newsletter.pdf"
  },
  {
    type: "newsletter",
    title: "Facial Recognition at Protest Sites: Surveillance, Dissent and the Constitutional Limits of State Power",
    date: "2026-08",
    summary: "Following the Supreme Court's decision to hear a petition on facial-recognition surveillance at protest sites, this issue considers constitutional legality, the DPDP Act, 2023, proportionality and India's legislative gap.",
    tags: ["Constitutional Law", "Privacy", "Technology"],
    file: "publications/newsletters/2026-08-litigation-newsletter.pdf"
  },
  {
    type: "newsletter",
    title: "Bulldozer Justice: Due Process, Property and the Constitutional Limits of State Power",
    date: "2026-07",
    summary: "Prompted by the split verdict of the Allahabad High Court in Faimuddeen & Ors. v. State of U.P., this issue examines due process, the right to property and the limits on punitive demolitions.",
    tags: ["Constitutional Law", "Due Process"],
    file: "publications/newsletters/2026-07-litigation-newsletter.pdf"
  },
  {
    type: "newsletter",
    title: "Digital Censorship in India",
    date: "2026-06",
    summary: "An analysis of the tension between freedom of speech and expression under Article 19(1)(a) and the State's regulatory authority under Article 19(2) in India's digital governance framework.",
    tags: ["Constitutional Law", "Free Speech", "Technology"],
    file: "publications/newsletters/2026-06-litigation-newsletter.pdf"
  },
  {
    type: "newsletter",
    title: "Contempt of Court in the Digital Age: Social Media, Free Speech and Judicial Authority",
    date: "2026-05",
    summary: "How social media has changed public discussion of court proceedings, and where the line lies between fair criticism and interference with the administration of justice.",
    tags: ["Contempt of Court", "Free Speech"],
    file: "publications/newsletters/2026-05-litigation-newsletter.pdf"
  },
  {
    type: "newsletter",
    title: "Insolvency and Bankruptcy Code (Amendment) Act, 2026 - Comprehensive Analysis",
    date: "2026-04",
    summary: "A detailed analysis of the IBC (Amendment) Act, 2026, enforced on 6 April 2026, one of the most consequential developments in India's insolvency framework since the Code was enacted.",
    tags: ["Insolvency (IBC)", "Legislative Update"],
    file: "publications/newsletters/2026-04-litigation-newsletter.pdf"
  },
  {
    type: "newsletter",
    title: "Loopholes in IBC: A Comparative Analysis and Road Ahead for India",
    date: "2026-03",
    summary: "A comparative look at the practical gaps in the Insolvency and Bankruptcy Code, 2016 and the reforms that could strengthen time-bound resolution and value maximisation.",
    tags: ["Insolvency (IBC)", "Comparative Law"],
    file: "publications/newsletters/2026-03-litigation-newsletter.pdf"
  },
  {
    type: "newsletter",
    title: "Emergency Arbitration: The New Interim Paradigm",
    date: "2026-02",
    summary: "How emergency arbitration allows parties to obtain urgent interim relief before an arbitral tribunal is constituted, and its place in Indian and international arbitration practice.",
    tags: ["Arbitration", "Interim Relief"],
    file: "publications/newsletters/2026-02-litigation-newsletter.pdf"
  },
  {
    type: "newsletter",
    title: "Deepfakes Before Courts: The Legal and Evidentiary Crisis of Synthetic Media",
    date: "2026-01",
    summary: "The legal and evidentiary challenges posed by AI-generated deepfakes, such as synthetic audio, video and images, and how courts may respond.",
    tags: ["Technology", "Evidence", "Artificial Intelligence"],
    file: "publications/newsletters/2026-01-litigation-newsletter.pdf"
  }
];
