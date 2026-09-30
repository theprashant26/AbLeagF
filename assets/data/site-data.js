/* =====================================================================
   AB INITIO LEGAL — SITE CONTENT
   ---------------------------------------------------------------------
   Edit this file to update firm details, team, practice areas,
   clients and job openings. No coding knowledge needed — just keep
   the quotes, commas and brackets as they are.
   ===================================================================== */

window.AIL = window.AIL || {};

/* ---------- FIRM DETAILS ---------- */
AIL.firm = {
  name: "Ab Initio Legal LLP",
  tagline: "Advocates & Solicitors",
  established: 2016,
  phone: "011-40393888",
  phoneHref: "+911140393888",
  mobile: "+91-8800808022",
  mobileHref: "+918800808022",
  whatsapp: "918800808022",
  emails: ["communications@abinitiolegal.in", "mail@abinitioindia.com"],
  // Form submissions (contact, careers, newsletter sign-up) are delivered here
  formEmail: "communications@abinitiolegal.in",
  address: ["1010 / 1011-B, Indraprakash Building,", "21, Barakhamba Road,", "New Delhi – 110001"],
  mapQuery: "Indraprakash Building, 21 Barakhamba Road, New Delhi 110001",
  website: "www.abinitiolegal.in",
  social: {
    linkedin: "https://in.linkedin.com/company/ab-initio-legal-llp"
    // Add more when available, e.g.  x: "https://x.com/...", instagram: "https://instagram.com/..."
  }
};

/* ---------- OUR TEAM ----------
   linkedin: paste each member's LinkedIn profile URL.
   Photos live in assets/img/team/ (portrait, 4:5 ratio works best). */
AIL.team = [
  {
    slug: "amit-manchanda",
    name: "Amit Manchanda",
    designation: "Managing Partner",
    qualifications: "LLB, FCS, PGDBA",
    group: "partners",
    photo: "assets/img/team/amit-manchanda.jpg",
    linkedin: "https://www.linkedin.com/search/results/people/?keywords=Amit%20Manchanda%20Ab%20Initio",
    focus: ["Corporate & Regulatory", "Arbitration", "IPR", "Corporate Governance"],
    bio: [
      "Mr. Amit Manchanda is the Founding Partner of Ab Initio Legal and brings over 21 years of extensive in-house experience, having served in leadership roles with one of India's largest listed organisations. His expertise spans Company Secretarial functions, Arbitration, Intellectual Property Rights (IPR), Corporate Governance, Strategic Decision-making and Regulatory Compliance.",
      "He has a proven track record of handling complex litigation, corporate laws, and matters involving restructuring, corporate schemes, mergers, joint ventures, takeovers and financial instruments. Mr. Manchanda has worked closely with tier-1 law firms and Advocates, further enhancing his ability to navigate intricate legal and regulatory landscapes.",
      "His proficiency includes advising on RBI notices, FEMA and FDI compliances, foreign litigation, ROC/RD/MCA/ED investigations, brand protection and Commercial Arbitration. He has also managed IBC matters, National Green Tribunal cases, and a wide range of other Corporate and Compliance-related issues.",
      "Mr. Manchanda is well-versed in boardroom functions, shareholder meetings and NCLT procedures. Before founding Ab Initio Legal, he held the position of Group Head – Legal and Secretarial at Radico Khaitan Limited, where he was instrumental in managing legal and regulatory affairs at the highest level."
    ]
  },
  {
    slug: "abhay-chitravanshi",
    name: "Abhay Chitravanshi",
    designation: "Partner",
    practice: "Litigation, ADR & White Collar Crimes",
    qualifications: "Campus Law Centre, University of Delhi",
    group: "partners",
    photo: "assets/img/team/abhay-chitravanshi.jpg",
    linkedin: "https://www.linkedin.com/in/abhay-chitravanshi-4028a8137/",
    focus: ["Commercial & Insolvency", "Arbitration", "PMLA & POCA", "Constitutional"],
    bio: [
      "Mr. Abhay Chitravanshi is a seasoned legal practitioner with seven years of extensive litigation experience, heading the litigation practice of the firm. An alumnus of Campus Law Centre (CLC), University of Delhi, he graduated with a First Division.",
      "He regularly appears and has independently argued and secured consistent interim reliefs, final orders and judgments for the firm's clients before the Hon'ble Supreme Court of India, the Hon'ble High Court of Delhi and various judicial and quasi-judicial forums. His practice spans Commercial & Insolvency litigation, Arbitration (International and Domestic), Civil and Criminal Trials, as well as cases under the Prevention of Money Laundering Act (PMLA) and Prevention of Corruption Act (POCA). He also has substantial experience in Consumer & Service matters, POSH, Employment issues and other intricate disputes involving substantial questions of law.",
      "Mr. Chitravanshi has closely worked on Constitutional matters with his involvement in the landmark litigation concerning Marital Rape and Same-Sex Marriage before the Hon'ble Delhi High Court, the former of which is still pending adjudication before the Hon'ble Supreme Court. His expertise extends to cross-examinations in Arbitrations and Commercial Disputes, strategising in Criminal and White-Collar matters, and managing Property, Family Planning & Estates, Trusts and lease disputes.",
      "His career is further highlighted by his successful clearance of the JAG (Indian Army) SSB in 2019 and his selection as a Supreme Court Legal Researcher in 2023."
    ]
  },
  {
    slug: "deepak-shankar",
    name: "Deepak Shankar",
    designation: "Senior Associate",
    qualifications: "LLB",
    group: "associates",
    photo: "assets/img/team/deepak-shankar.jpg",
    linkedin: "https://www.linkedin.com/search/results/people/?keywords=Deepak%20Shankar%20Ab%20Initio%20Legal",
    focus: ["Labour & Industrial", "Criminal Law", "NI Act", "Consumer"],
    bio: [
      "Mr. Deepak Shankar is a law graduate from Shimla University with over six years of experience in litigation and contracting. He represents clients on a wide range of legal matters in various District Courts, Labour Courts and Industrial Tribunals.",
      "With significant practice in the District and Sessions Courts, Mr. Shankar has a thorough understanding of litigation procedure. His experience spans Labour Laws, Electricity Regulations, the Negotiable Instruments Act, Consumer Forums and Criminal Law. He is known for his meticulous approach to client management and trial preparation, and has extensive drafting experience including legal notices, complaints, petitions and contracts."
    ]
  },
  {
    slug: "bhawna-nanda",
    name: "Bhawna Nanda",
    designation: "Associate",
    qualifications: "B.A. LL.B. (Hons.), LL.M. (Constitutional Law)",
    group: "associates",
    photo: "assets/img/team/bhawna-nanda.jpg",
    linkedin: "https://www.linkedin.com/search/results/people/?keywords=Bhawna%20Nanda%20Ab%20Initio%20Legal",
    focus: ["Recovery", "Commercial Suits", "Family Law", "RERA & DRT"],
    bio: [
      "Ms. Bhawna Nanda is a hardworking civil litigator with experience in Recovery Matters, Family Disputes and Commercial Suits. She has appeared before the District Courts, the Delhi High Court and specialised tribunals such as the NCDRC, RERA, the Debt Recovery Tribunal (DRT) and the Debt Recovery Appellate Tribunal (DRAT).",
      "She has represented the firm's clients in Commercial Recovery Suits, Negotiable Instruments matters, Family Law and Property Disputes, as well as criminal matters. Ms. Nanda is adept at legal research, drafting and negotiation, and is known for her detailed approach and dedication to client service."
    ]
  },
  {
    slug: "riya-goel",
    name: "Riya Goel",
    designation: "Associate",
    qualifications: "B.A. LL.B., LL.M. (Alternative Dispute Resolution)",
    group: "associates",
    photo: "assets/img/team/riya-goel.jpg",
    linkedin: "https://www.linkedin.com/search/results/people/?keywords=Riya%20Goel%20Ab%20Initio%20Legal",
    focus: ["Commercial Litigation", "Arbitration", "Mediation & ADR"],
    bio: [
      "Ms. Riya Goel specialises in Commercial Litigation and Alternative Dispute Resolution. She brings a balanced combination of strategic insight and meticulous execution, assisting clients in navigating complex commercial disputes with clarity and efficiency.",
      "Her work involves legal research, drafting, case management and active support in arbitration and litigation proceedings. With a strong inclination towards ADR, she guides clients toward efficient, commercially viable settlements and arbitral resolutions."
    ]
  },
  {
    slug: "narender-gupta",
    name: "Narender Gupta",
    designation: "Key Advisor",
    qualifications: "LLB, FCS, PGDBM",
    group: "advisors",
    photo: "assets/img/team/narender-gupta.jpg",
    linkedin: "https://www.linkedin.com/search/results/people/?keywords=Narender%20Gupta%20FCS",
    focus: ["Corporate Governance", "Public Policy", "Regulatory Affairs"],
    bio: [
      "Mr. Narender Gupta is a distinguished professional with over 35 years of experience. A graduate in Commerce and Law with a post-graduate qualification in Business Management, he is a Fellow Member of the Institute of Company Secretaries of India. His expertise spans Manufacturing, Engineering, Real Estate, Telecom, Broadcasting, Entertainment and Services.",
      "He has played a significant role in shaping forward-looking policies in the telecom and broadcasting sectors, working closely with central and state bureaucracies, industry associations (FICCI, CII, ASSOCHAM), international organisations and policymakers, and has advised numerous Indian and multinational corporations on strategy, public policy and corporate affairs."
    ]
  },
  {
    slug: "ateev-kapoor",
    name: "Ateev Kapoor",
    designation: "Key Advisor",
    qualifications: "MBA (Cardiff University, UK), LLB",
    group: "advisors",
    photo: "assets/img/team/ateev-kapoor.jpg",
    linkedin: "https://www.linkedin.com/search/results/people/?keywords=Ateev%20Kapoor",
    focus: ["Strategy", "Corporate Affairs", "Business Advocacy"],
    bio: [
      "Mr. Ateev Kapoor is a seasoned professional with over 16 years of post-qualification experience and holds an MBA from Cardiff University, UK. His expertise includes strategic assignments, corporate affairs, business advocacy and client relationship management.",
      "He advises businesses on navigating complex challenges, driving strategic initiatives and fostering sustainable growth through well-informed, practical guidance."
    ]
  }
];

/* ---------- PRACTICE AREAS ---------- */
AIL.practices = [
  { icon: "bi-bank2", title: "Dispute Resolution", text: "An integrated approach to dispute resolution. We analyse the intricacies of each case and recommend the best-suited mechanism — litigation, arbitration or ADR — across commercial, contractual, employment and property conflicts, with cost-effective and time-sensitive solutions that minimise the impact on our clients' operations." },
  { icon: "bi-buildings", title: "Commercial & Corporate Litigation", text: "Holistic support to corporations, start-ups and businesses — recovery suits, shareholder disagreements, contractual disputes and claims of oppression and mismanagement, together with corporate governance and regulatory compliance issues, and a proactive approach to pre-litigation mediation." },
  { icon: "bi-house-door", title: "Civil Litigation", text: "Property conflicts, contractual disagreements, inheritance disputes and tort claims — end-to-end support from drafting pleadings to trials and appeals before District Courts, High Courts and the Supreme Court." },
  { icon: "bi-globe2", title: "International & Domestic Arbitration", text: "Ad-hoc and institutional arbitrations (including DIAC) across construction, finance and technology — from drafting arbitration agreements to enforcing awards, with a strong emphasis on confidentiality and cost-efficiency." },
  { icon: "bi-graph-down-arrow", title: "Insolvency (IBC)", text: "Representing creditors, debtors and resolution professionals in CIRP, liquidation and debt restructuring before the NCLT and NCLAT, in strict compliance with the timelines of the Insolvency and Bankruptcy Code." },
  { icon: "bi-shield-lock", title: "Criminal & White-Collar Crimes", text: "Robust representation in fraud, corruption, money laundering (PMLA) and embezzlement matters — through investigations, trials and appeals — with defence strategies that also mitigate reputational risk, and support for internal corporate investigations." },
  { icon: "bi-lightning-charge", title: "Injunctions & Interim Reliefs", text: "Urgent injunctions, stay orders and restraining orders across courts and tribunals — securing immediate protection while laying the foundation for favourable final outcomes." },
  { icon: "bi-people", title: "Consumer Disputes", text: "Representing consumers and businesses before District Commissions, State Commissions and the NCDRC in matters of defective goods, deficient services, misleading advertisements and unfair trade practices." },
  { icon: "bi-award", title: "SLPs before the Supreme Court", text: "Special Leave Petitions before the Hon'ble Supreme Court of India — constitutional challenges, statutory interpretation and appeals against orders of lower courts, backed by meticulous research, drafting and advocacy." },
  { icon: "bi-file-earmark-text", title: "Contractual Disputes", text: "Breach of contract, enforcement of agreements and disputes over contractual terms — negotiating settlements and representing clients in litigation and arbitration with a balance of legal and commercial considerations." },
  { icon: "bi-columns-gap", title: "Original Side (Delhi High Court)", text: "High-stakes commercial disputes and civil litigation on the Original Side of the Delhi High Court — injunctions, recovery suits, intellectual property disputes and more, from pleadings to trial and appeal." },
  { icon: "bi-megaphone", title: "Defamation", text: "Civil and criminal defamation — libel and slander in print, broadcast and digital media. We advise on filing suits, seeking damages and defending claims, balancing free speech and reputation." },
  { icon: "bi-journal-bookmark", title: "Writs & Appeals", text: "Writ petitions and appeals before the High Courts and the Supreme Court involving constitutional rights, administrative action and public-interest matters." },
  { icon: "bi-briefcase", title: "Labour, Industrial & Employment", text: "Employment agreements, labour-law compliance and representation before Labour Courts, Industrial Tribunals and appellate authorities — wrongful termination, wage disputes, workplace harassment (POSH) and collective bargaining." },
  { icon: "bi-person-badge", title: "Administrative & Service Law", text: "Government employment, promotions, transfers, pensions and disciplinary proceedings before the Central Administrative Tribunal (CAT), High Courts and the Supreme Court." },
  { icon: "bi-tree", title: "Trusts, Estate & Family Planning", text: "Creation of trusts, estate planning and succession — drafting wills, establishing family trusts and ensuring the smooth administration of estates while minimising future disputes." },
  { icon: "bi-building-check", title: "Property & RERA", text: "Property disputes and matters under the Real Estate (Regulation and Development) Act — drafting property agreements, handling title disputes and representing clients before RERA authorities." },
  { icon: "bi-cash-coin", title: "Banking & Finance", text: "Loan disputes, recovery suits, NPA litigation and regulatory compliance — including drafting loan agreements and advising on financial restructuring for institutions and borrowers." },
  { icon: "bi-heart", title: "Family & Matrimonial", text: "Divorce, child custody, alimony and domestic violence — empathetic yet effective representation through negotiation, mediation and court proceedings." },
  { icon: "bi-book", title: "Constitutional Matters", text: "Complex constitutional questions addressing critical socio-political issues — including the Marital Rape and Same-Sex Marriage litigation argued before the Hon'ble High Court of Delhi and the Hon'ble Supreme Court of India." }
];

AIL.drafting = [
  "Joint Venture & Foreign Collaboration Agreements (incl. RBI / FIPB approvals)",
  "Technology Transfer Agreements",
  "Shareholders' Agreements, M&A and Takeover Agreements",
  "Sale / Purchase / Collaboration / Escrow Agreements",
  "SPV formation & sale / purchase of running units",
  "Partnership admission, retirement & succession",
  "Retail Agency, Dealer & Distributor Agreements",
  "Assignment & Transfer of IPR",
  "Consortium & Power Purchase Agreements",
  "Hire Purchase & Infrastructure Project Agreements",
  "Immovable Property Agreements",
  "Confidentiality & Non-circumvention Agreements",
  "Expatriate, Arbitration, Service & Insurance Contracts",
  "Vendor & Service Agreements",
  "Lease Deeds (incl. aircraft, oil rigs & ships)",
  "Trust Deeds, Recovery Agency & Labour Agreements",
  "Corporate policies"
];

/* ---------- FORUMS ---------- */
AIL.forums = [
  "Supreme Court of India", "High Court of Delhi", "NCLT", "NCLAT", "DIAC",
  "NCDRC", "RERA", "DRT & DRAT", "Commercial Courts", "Labour Courts", "CAT", "Arbitral Tribunals"
];

/* ---------- CLIENTS ----------
   Logos live in assets/img/clients/ */
AIL.clients = [
  { name: "Escorts Kubota Limited", logo: "assets/img/clients/escorts-kubota.png", sector: "Agri-machinery & Engineering" },
  { name: "Panasonic", logo: "assets/img/clients/panasonic.png", sector: "Consumer Electronics" },
  { name: "BSES Rajdhani Power Ltd.", logo: "assets/img/clients/bses-rajdhani.png", sector: "Power Distribution" },
  { name: "IIFL", logo: "assets/img/clients/iifl.png", sector: "Financial Services" },
  { name: "Radico Khaitan Ltd.", logo: "assets/img/clients/radico-khaitan.png", sector: "Consumer Goods" },
  { name: "Burger King", logo: "assets/img/clients/burger-king.png", sector: "Food & Hospitality" },
  { name: "Air Works", logo: "assets/img/clients/air-works.png", sector: "Aviation" },
  { name: "Centre for Sight", logo: "assets/img/clients/centre-for-sight.png", sector: "Healthcare" },
  { name: "NAWADCO", logo: "assets/img/clients/nawadco.png", sector: "Public Sector" },
  { name: "ICCA", logo: "assets/img/clients/icca.png", sector: "Institutional" },
  { name: "Grexter Living", logo: "assets/img/clients/grexter-living.png", sector: "Real Estate & Co-living" },
  { name: "Gabon Veneer", logo: "assets/img/clients/gabon-veneer.png", sector: "Manufacturing & Trade" }
];

/* ---------- TESTIMONIALS ----------
   Add only testimonials the client has approved for publication.
   Example:
   { quote: "…", name: "Name", role: "General Counsel, Company" }
   The section stays hidden until at least one is added. */
AIL.testimonials = [];

/* ---------- CAREERS: OPEN POSITIONS ----------
   type: "internship" or "job". Set open: false to hide a role. */
AIL.openings = [
  {
    type: "job", open: true,
    title: "Junior Associate — Litigation",
    location: "New Delhi (Barakhamba Road)",
    experience: "0–2 years PQE",
    points: [
      "Drafting pleadings, applications, legal notices and opinions",
      "Appearances before District Courts, Delhi High Court, NCLT and tribunals",
      "Research and brief preparation for commercial, civil and criminal matters"
    ]
  },
  {
    type: "job", open: true,
    title: "Associate — Commercial Litigation & Arbitration",
    location: "New Delhi (Barakhamba Road)",
    experience: "2–5 years PQE",
    points: [
      "Independent handling of commercial suits, arbitrations and IBC matters",
      "Client interaction, case strategy and cross-examination",
      "Mentoring junior associates and interns"
    ]
  },
  {
    type: "internship", open: true,
    title: "Litigation Internship",
    location: "New Delhi (in-office)",
    experience: "3rd–5th year (5-yr) / 2nd–3rd year (3-yr) LL.B.",
    duration: "4–6 weeks, rolling",
    points: [
      "Assisting in research, drafting and case preparation",
      "Attending hearings before the Supreme Court, Delhi High Court and tribunals",
      "Exposure to arbitration, insolvency, white-collar and constitutional matters"
    ]
  }
];
