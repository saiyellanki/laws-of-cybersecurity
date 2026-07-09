/* ==========================================================
   ABOUT PAGE — DATA
   Public-safe only: no employer/firm names, no internal
   regulatory shorthand, no compensation or target-company info.
   ========================================================== */

const PROFILE = {
  name: "Saikrishna \"Sai\" Yellanki",
  initials: "SY",
  title: "Cybersecurity & AI Risk Architect",
  location: "Austin, TX",
  credentials: "CISA · ISO/IEC 27001 Lead Auditor · MSc Information Systems Security",
  statement: "I don't audit via compliance checklists — I audit via technical telemetry and automated control configurations.",
  bio: "I work at the intersection of cybersecurity risk assurance, AI governance, and data privacy — translating emerging technology risk and regulatory frameworks into controls that hold up under real scrutiny. Across roles in enterprise audit and global consulting, the throughline has been the same: building principled governance frameworks before the market fully understood they were needed.",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/hellosai/", icon: "linkedin" },
    { label: "GitHub", href: "https://github.com/saiyellanki", icon: "github" },
    { label: "Portfolio", href: "https://saiyellanki.github.io/sai-agent", icon: "globe" },
    { label: "Email", href: "mailto:saiyellanki.cisa@gmail.com", icon: "mail" },
  ],
};

const ARC_NODES = [
  {
    year: "2016",
    title: "Privacy-by-Design Research",
    tag: "IEEE COMPSAC",
    body: "Published peer-reviewed research designing cryptographic geoprivacy filters that anonymize location telemetry at the API layer — privacy-by-design engineering that predated GDPR by two years. This work established the technical foundation for everything that followed.",
  },
  {
    year: "2018 – 2022",
    title: "GDPR & Cross-Jurisdictional Framework",
    tag: "Global Consulting",
    body: "Co-led an enterprise-wide GDPR and HIPAA compliance program for a global Fortune 500 professional services firm, then went further — designing an open evaluation framework that abstracted GDPR's requirements into modular variables so any jurisdiction's privacy law could be mapped against the same control architecture. Adopted globally as the firm's regulatory readiness standard.",
  },
  {
    year: "2022 – Present",
    title: "Hybrid AI Governance Framework",
    tag: "Financial Services, VP Level",
    body: "Built and deployed a hybrid AI Risk Framework synthesizing NIST AI RMF, the EU AI Act, and Google's Responsible AI principles into a single operational governance instrument — a regulated enterprise's first comprehensive AI governance mechanism. Serves as Senior Technical Advisor on the AI Governance Committee, reviewing enterprise AI deployments weekly, and conducts Model Risk Management assessments for AI/ML systems.",
  },
];

const WIN_CATEGORIES = [
  { id: "ai-gov",     label: "AI Governance & Model Risk",     color: "#9E86F2" },
  { id: "audit",      label: "Cybersecurity Audit & Assurance", color: "#4FC3D9" },
  { id: "privacy",    label: "Data Privacy & Regulatory",       color: "#7C9CF0" },
  { id: "leadership", label: "Program & Team Leadership",       color: "#3FB68B" },
];

const WINS = [
  {
    slug: "hybrid-ai-framework",
    title: "Hybrid AI Risk Framework — Design & Deployment",
    category: "ai-gov",
    summary: "Built the organization's first comprehensive AI governance instrument, synthesizing three major frameworks into one operational protocol.",
    situation: "Enterprise AI adoption was accelerating with no governance instrument to evaluate or control deployments — multiple AI agents and SaaS AI capabilities were being requested simultaneously with no risk differentiation.",
    task: "Design a comprehensive, scalable AI governance framework able to pass enterprise scrutiny and operate at production volume.",
    action: "Built a hybrid AI Risk Framework synthesizing NIST AI RMF (Map/Measure/Manage/Govern), EU AI Act risk classification, and Google's Responsible AI principles into a single operational protocol — a 4-gate evaluation covering model training opt-out and data boundary verification, tenant isolation architecture, context-aware RBAC validation, and continuous session revocation checks.",
    result: "The framework became the organization's governing standard for AI deployments, with enterprise AI systems reviewed weekly on a structured pass/conditional/fail basis with full audit trail.",
    kpi: "15+ weekly reviews · framework operationalized org-wide",
  },
  {
    slug: "ai-agent-sandbox",
    title: "AI Agent Security Sandbox — \"Project Marcus\"",
    category: "ai-gov",
    summary: "Architected an isolated cloud sandbox replicating production controls, letting an autonomous AI agent be piloted with zero production exposure.",
    situation: "A business unit needed to pilot an autonomous AI agent with live transactional API capabilities. Launching directly into production risked data drift, prompt injection, API rate-limit exploitation, and operational outages.",
    task: "Enable the business to safely pilot the AI agent without production risk, on schedule.",
    action: "Architected an isolated cloud sandbox replicating production-equivalent IAM policies, encryption key management, audit logging, and API rate-limiting — then ran simulation logs to stress-test prompt structures, model error handling, and API bottlenecks under synthetic load.",
    result: "The business team completed full safety verification with complete control assurance and zero exposure to production data — the AI roadmap stayed on schedule.",
    kpi: "100% control validation · zero production exposure",
  },
  {
    slug: "sso-bypass-poc",
    title: "SSO Bypass Proof-of-Concept → Safeguards Remediation",
    category: "audit",
    summary: "Proved a federated identity control gap by executing the exploit, then engineered the enterprise-wide fix.",
    situation: "Suspected that federated SSO boundary controls might not be detecting unauthorized cloud account access from corporate endpoints — a potential regulatory safeguards exposure.",
    task: "Design and execute a proof-of-concept to validate whether the gap existed and, if confirmed, engineer a durable remediation.",
    action: "Designed and executed a controlled bypass test: accessed a personal cloud account from a corporate endpoint through the federated SSO boundary and moved dummy sensitive data to an unmonitored location, undetected by existing DLP controls. Once confirmed, engineered a header-based access control remediation deployed across the enterprise proxy layer.",
    result: "A critical safeguards exposure was discovered and permanently closed, shutting down a shadow-IT exfiltration path across all enterprise endpoints.",
    kpi: "100% remediation · exfiltration vector closed",
  },
  {
    slug: "oauth-token-remediation",
    title: "OAuth Token Persistence → Automated Revocation",
    category: "audit",
    summary: "Closed a post-termination access window by chaining identity lifecycle events directly into device management policy.",
    situation: "BYOD devices were retaining active SaaS session tokens for days after employee terminations, creating unauthorized access windows across multiple platforms.",
    task: "Close the post-termination session persistence gap entirely, with a scalable and automated solution.",
    action: "Identified the conditional-access configuration gap allowing tokens to persist post-offboarding, then integrated identity lifecycle offboarding events directly with mobile application management conditional access policies to create a real-time automated revocation chain.",
    result: "Fully automated, real-time session revocation now runs at offboarding across all SaaS platforms with zero manual intervention — it's a standard step in identity lifecycle management.",
    kpi: "100% automated revocation · zero manual steps",
  },
  {
    slug: "osint-attack-surface",
    title: "OSINT Attack Surface Management",
    category: "audit",
    summary: "Mapped the organization's real external footprint using adversary-perspective reconnaissance and cut discoverable exposure by a third.",
    situation: "The organization's real-world external attack surface was largely unmeasured — legacy portals, exposed configurations, and metadata leaks that adversaries could use for initial access.",
    task: "Map the external footprint using adversary-perspective methodology and close what's found.",
    action: "Deployed adversarial OSINT reconnaissance — internet-wide service scanning, DNS zone profiling, WHOIS analysis, and certificate transparency log review — to map the full discoverable external surface, identifying legacy portals, exposed metadata, and unmaintained domain registrations.",
    result: "Cut discoverable external attack surface by over a third and established a recurring quarterly threat-scanning cadence to maintain visibility going forward.",
    kpi: "35% surface reduction · quarterly cadence established",
  },
  {
    slug: "gdpr-cross-jurisdictional",
    title: "GDPR & Cross-Jurisdictional Regulatory Framework",
    category: "privacy",
    summary: "Took a firm to full GDPR/HIPAA compliance, then built a reusable framework so any jurisdiction's privacy law could plug into the same controls.",
    situation: "A global professional services firm needed GDPR and HIPAA compliance across dozens of jurisdictions, with fragmented legacy data flows — while other countries were simultaneously drafting GDPR-equivalent laws, creating a perpetual regulatory catch-up problem.",
    task: "Achieve global compliance and design something that would stay ahead of future privacy regulation in any jurisdiction.",
    action: "Co-led the enterprise-wide GDPR compliance program, restructuring data flows, vendor relationships, and systems globally, then proposed an open evaluation framework abstracting GDPR's requirements into modular regulatory variables so any country's privacy law could be mapped against the same baseline controls.",
    result: "Achieved full global GDPR and HIPAA compliance, eliminating significant regulatory exposure, and the cross-jurisdictional framework was adopted as the firm's global regulatory readiness standard.",
    kpi: "Full GDPR/HIPAA compliance · framework adopted globally",
  },
  {
    slug: "usb-lockout-alternative",
    title: "Secure File-Transit Portal — USB Lockdown Alternative",
    category: "privacy",
    summary: "Preserved a strict USB lockdown policy while restoring a business-critical workflow for 10,000+ employees, without a security exception.",
    situation: "A strict enterprise-wide USB and removable-media block eliminated a malware vector but disabled a global team from physically transferring large media assets to offline production vendors.",
    task: "Maintain the USB lockdown without disrupting a business-critical operation for a large employee population.",
    action: "Instead of granting a security exception, designed and deployed a secure web-based file-transit portal — end-to-end encryption, automated sandboxed malware scanning on every upload, and time-limited automatic file deletion — and presented it as a constructive alternative to both security and business stakeholders.",
    result: "The USB lockdown stayed fully in place, the team's operations were fully preserved with zero project delays, and the portal became a reusable enterprise solution.",
    kpi: "100% lockdown maintained · zero business disruption",
  },
  {
    slug: "common-control-framework",
    title: "Common Control Framework — Audit Overhead Reduction",
    category: "leadership",
    summary: "Consolidated overlapping compliance frameworks into one evidence set, cutting audit prep time by over a third.",
    situation: "Multiple overlapping compliance frameworks required separate, redundant audit evidence collection cycles — consuming excessive team time and producing inconsistent control documentation.",
    task: "Consolidate the frameworks into a unified structure that could satisfy multiple requirements from a single evidence set.",
    action: "Designed and coordinated implementation of a Common Control Framework across the organization's GRC platforms — mapping controls across frameworks, identifying shared control objectives, and eliminating duplicate testing cycles.",
    result: "Audit preparation overhead dropped by over a third, documentation quality improved through standardization, and the audit team's capacity shifted toward higher-value risk assurance work.",
    kpi: "35% audit overhead reduction",
  },
  {
    slug: "technical-upskilling",
    title: "Technical Upskilling Program",
    category: "leadership",
    summary: "Built a hands-on lab curriculum that cut onboarding time nearly in half and produced a perfect first-attempt certification pass rate.",
    situation: "New security analysts were taking excessive time to reach operational proficiency, and professional certification pass rates were inconsistent.",
    task: "Design a scalable, hands-on technical education program to accelerate onboarding and improve certification outcomes.",
    action: "Created a structured lab curriculum using open-source threat simulation platforms mapped to real audit scenarios, and personally mentored analysts through hands-on exercises spanning identity, cloud security, endpoint controls, and GRC tooling.",
    result: "Technical onboarding time dropped by 40%, and every mentored analyst passed their professional certification on the first attempt.",
    kpi: "40% faster onboarding · 100% first-attempt pass rate",
  },
];

const CERTS_PRIMARY = [
  "CISA — Certified Information Systems Auditor (ISACA)",
  "ISO/IEC 27001 Lead Auditor",
  "AI Security & Governance Certified (Securiti AI)",
];

const CERTS_OTHER = [
  "SailPoint Identity Security Leader",
  "IriusRisk Threat Modeling Champion",
  "AWS Cloud Technical Professional",
  "Oracle Certified Cloud Associate",
  "Qualys Certified Specialist of VMDR",
  "COBIT 5 Foundation",
  "NIST CSF Specialist",
  "GDPR Practitioner",
  "Google Responsible AI",
  "Google Generative AI Fundamentals",
  "ISACA Cybersecurity Mentoring Certificate",
  "CipherTrace Crypto Foundations (Blockchain Security)",
];

const PUBLICATION = {
  citation: "S. Yellanki, D. Lindskog, P. Zavarsky and R. Ruhl, \"Customizing IETF RFC 6280 Geopriv for Compliance of Wi-Fi Positioning System APIs with Privacy Laws,\" IEEE COMPSAC 2016, Atlanta, GA, pp. 93–98.",
  doi: "10.1109/COMPSAC.2016.126",
  note: "Peer-reviewed research on cryptographic geoprivacy compliance at the API layer — privacy-by-design engineering published before GDPR was enacted.",
};

const EDUCATION = {
  degree: "MSc, Information Systems Security and Management",
  school: "Concordia University of Edmonton",
  years: "2014 – 2016",
  coursework: "Cyber Regulations · Cryptographic Systems · Digital Forensics · Risk Management · Security Operations · Security-by-Design Architecture · Network Security",
};

const VOLUNTEERING = [
  { role: "Cybersecurity Panel Judge", org: "Globee Awards", years: "2023 – Present" },
  { role: "Search Party Member (OSINT Investigator)", org: "Trace Labs", years: "2023 – Present" },
  { role: "Cybersecurity Program Mentor", org: "ISACA Austin Chapter", years: "2024 – Present" },
  { role: "Volunteer Staff", org: "Thinkery STEAM Museum, Austin", years: "2024 – Present" },
  { role: "Food Packing Station Team Leader", org: "Feed My Starving Children", years: "2022 – Present" },
  { role: "Volunteer", org: "My Possibilities", years: "2022 – Present" },
  { role: "GLOBE Observer", org: "NASA", years: "2020 – Present" },
  { role: "Mock Interview Coach", org: "ACCES Employment, Toronto", years: "2018 – 2022" },
];
