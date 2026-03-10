export type AppRoute = {
  path: string;
  label: string;
  category: 'core' | 'platform' | 'admin' | 'legal' | 'hub';
  description: string;
};

export type LegacyRedirect = {
  source: string;
  destination: string;
  permanent: boolean;
  reason: string;
};

export const appRoutes: AppRoute[] = [
  // ── CORE ──────────────────────────────────────────────────────────────────
  { path: '/', label: 'Home', category: 'core', description: 'Unified enterprise one-page marketing surface.' },
  { path: '/about', label: 'About', category: 'core', description: 'About GEM CYBER mission, history, and operating principles.' },
  { path: '/about-us', label: 'About Us', category: 'core', description: 'Extended about page with team, vision, and timeline.' },
  { path: '/contact-us', label: 'Contact', category: 'core', description: 'Lead capture and support contact entry point.' },
  { path: '/resources', label: 'Resources', category: 'core', description: 'Security and compliance educational resources.' },
  { path: '/news', label: 'News', category: 'core', description: 'Company and threat landscape news updates.' },
  { path: '/leadership', label: 'Leadership', category: 'core', description: 'Leadership enablement and board risk reporting.' },
  { path: '/pricing', label: 'Pricing', category: 'core', description: 'Service pricing tiers and enterprise plan options.' },
  { path: '/teams', label: 'Teams', category: 'core', description: 'Security operations and leadership team directory.' },

  // ── PLATFORM ──────────────────────────────────────────────────────────────
  { path: '/services', label: 'Services', category: 'platform', description: 'Cybersecurity and IT service overview.' },
  { path: '/services/threat-monitoring', label: 'Threat Monitoring', category: 'platform', description: 'Continuous monitoring and alert intelligence delivery.' },
  { path: '/services/incident-response', label: 'Incident Response', category: 'platform', description: 'Coordinated incident triage, containment, and recovery support.' },
  { path: '/services/compliance-management', label: 'Compliance Management', category: 'platform', description: 'Compliance readiness lifecycle and evidence operations.' },
  { path: '/services/federal-compliance', label: 'Federal Compliance', category: 'platform', description: 'Federal-grade controls alignment and reporting support.' },
  { path: '/services/asset-recovery', label: 'Asset Recovery', category: 'platform', description: 'Asset tracking, recovery workflow, and post-incident assurance.' },
  { path: '/intelligence', label: 'Intelligence', category: 'platform', description: 'Threat and regulatory intelligence command center.' },
  { path: '/campaigns', label: 'Campaigns', category: 'platform', description: 'Email campaign planning and delivery workspace.' },
  { path: '/roadmap', label: 'Roadmap', category: 'platform', description: 'Platform delivery roadmap and release trajectory.' },
  { path: '/architecture', label: 'Architecture', category: 'platform', description: 'Architecture overview — unified view of platform design.' },
  { path: '/specs', label: 'Architecture Specs', category: 'platform', description: 'Technical architecture and backend surfaces.' },
  { path: '/routes', label: 'Route Directory', category: 'platform', description: 'Published frontend and backend URL registry.' },
  { path: '/live-preview', label: 'Enterprise Live Preview', category: 'platform', description: 'Unified enterprise surface combining brand homepage and route operations preview.' },
  { path: '/bridge/alliance-trust', label: 'Alliance Trust (legacy)', category: 'platform', description: 'Legacy bridge route — redirects to /alliance-trust-realty.' },

  // ── ALLIANCE TRUST REALTY ─────────────────────────────────────────────────
  { path: '/alliance-trust-realty',                     label: 'Alliance Trust Realty',    category: 'platform', description: 'Premium real estate advisory — residential, commercial, investment, and mortgage guidance.' },
  { path: '/alliance-trust-realty/about',               label: 'ATR: About',               category: 'platform', description: 'About Alliance Trust Realty — mission, team, and history.' },
  { path: '/alliance-trust-realty/services',            label: 'ATR: Services',            category: 'platform', description: 'Full-spectrum real estate services overview.' },
  { path: '/alliance-trust-realty/properties',          label: 'ATR: Properties',          category: 'platform', description: 'Current listings and property opportunities.' },
  { path: '/alliance-trust-realty/investment-advisory', label: 'ATR: Investment Advisory', category: 'platform', description: 'Investment property analysis and portfolio advisory.' },
  { path: '/alliance-trust-realty/mortgage-guidance',   label: 'ATR: Mortgage Guidance',   category: 'platform', description: 'Independent mortgage education and lender referrals.' },
  { path: '/alliance-trust-realty/investor-education',  label: 'ATR: Investor Education',  category: 'platform', description: 'Real estate investor education and learning resources.' },
  { path: '/alliance-trust-realty/contact',             label: 'ATR: Contact',             category: 'platform', description: 'Contact Alliance Trust Realty advisors.' },
  { path: '/alliance-trust-realty/portal',              label: 'ATR: Client Portal',       category: 'platform', description: 'Secure client portal — encrypted document exchange.' },
  { path: '/alliance-trust-realty/privacy',             label: 'ATR: Privacy Policy',      category: 'legal',    description: 'Alliance Trust Realty privacy policy.' },
  { path: '/alliance-trust-realty/terms',               label: 'ATR: Terms of Service',    category: 'legal',    description: 'Alliance Trust Realty terms of service.' },
  { path: '/alliance-trust-realty/disclosures',         label: 'ATR: Disclosures',         category: 'legal',    description: 'Required real estate licensing and agency disclosures.' },
  { path: '/cyber-sentinel-trust', label: 'Cyber Sentinel Trust', category: 'platform', description: 'Enterprise zero-trust security framework and sentinel operations.' },
  { path: '/membership', label: 'Membership', category: 'platform', description: 'Managed security membership tiers and advisory enablement.' },
  { path: '/portfolio', label: 'Portfolio', category: 'platform', description: 'Asset portfolio dashboard with security status overview.' },
  { path: '/case-studies', label: 'Case Studies', category: 'platform', description: 'Client success stories and measurable security outcomes.' },
  { path: '/qfs', label: 'QFS', category: 'platform', description: 'Quantum-secure financial infrastructure monitoring and compliance.' },
  { path: '/superadmin', label: 'Super Admin', category: 'platform', description: 'Super admin entry point with elevated access controls.' },

  // ── ADMIN ─────────────────────────────────────────────────────────────────
  { path: '/admin', label: 'Admin Center', category: 'admin', description: 'Operations portal for internal admins.' },
  { path: '/admin/login', label: 'Admin Login', category: 'admin', description: 'Role-based admin authentication portal.' },
  { path: '/admin/diagnostics', label: 'Admin Diagnostics', category: 'admin', description: 'Runtime and infrastructure diagnostics for operators.' },
  { path: '/admin/inbox', label: 'Admin Inbox', category: 'admin', description: 'Inbound contact message triage and assignment workspace.' },
  { path: '/admin/users', label: 'Admin Users', category: 'admin', description: 'Super-admin user management and role assignment.' },
  { path: '/admin/teams', label: 'Admin Teams', category: 'admin', description: 'Internal team registry and assignment management.' },
  { path: '/admin/organizations', label: 'Admin Organizations', category: 'admin', description: 'Tenant organization tracking, billing, and tier management.' },
  { path: '/admin/grants', label: 'Admin Grants', category: 'admin', description: 'Access grant tracking and privileged operation records.' },

  // ── LEGAL ─────────────────────────────────────────────────────────────────
  { path: '/legal/privacy-policy', label: 'Privacy Policy', category: 'legal', description: 'Legal privacy disclosures and data handling policies.' },
  { path: '/legal/terms-of-service', label: 'Terms of Service', category: 'legal', description: 'Platform terms and service boundaries.' },
  { path: '/legal/cookie-policy', label: 'Cookie Policy', category: 'legal', description: 'Cookie usage and tracking policy.' },

  // ── HUB-AND-SPOKE PRIMARY SURFACES ────────────────────────────────────────
  { path: '/home',              label: 'Home Surface',      category: 'core',     description: 'Canonical home domain surface — hub-and-spoke primary tab.' },
  { path: '/intel',             label: 'Intel',             category: 'platform', description: 'Threat intelligence domain surface with KPI snapshot and module feed.' },
  { path: '/assets',            label: 'Assets',            category: 'platform', description: 'Asset management domain surface — recovery, portfolio, and QFS.' },
  { path: '/community',         label: 'Community',         category: 'platform', description: 'Community domain surface — membership, case studies, and news.' },

  // ── HUB SUB-ROUTES ────────────────────────────────────────────────────────
  { path: '/hub',               label: 'Hub',               category: 'hub',      description: 'Operations hub index — entry to all hub domain surfaces.' },
  { path: '/hub/soc',           label: 'Hub: SOC',          category: 'hub',      description: 'Security Operations Center — threat monitoring and incident response.' },
  { path: '/hub/research',      label: 'Hub: Research',     category: 'hub',      description: 'Research hub — architecture specs, documentation, and roadmap.' },
  { path: '/hub/compliance',    label: 'Hub: Compliance',   category: 'hub',      description: 'Compliance hub — federal controls and audit readiness lifecycle.' },
  { path: '/hub/portfolio',     label: 'Hub: Portfolio',    category: 'hub',      description: 'Portfolio hub — asset dashboard and QFS integration.' },
  { path: '/hub/real-estate',   label: 'Hub: Real Estate',  category: 'hub',      description: 'Real estate hub — Alliance Trust Realty and Cyber Sentinel framework.' },
];

export const legacyRedirects: LegacyRedirect[] = [
  // ── WELL-ESTABLISHED PERMANENT REDIRECTS ──────────────────────────────────
  { source: '/contact', destination: '/contact-us', permanent: true, reason: 'Legacy renamed URL redirected to contact-us.' },
  { source: '/privacy', destination: '/legal/privacy-policy', permanent: true, reason: 'Legacy privacy URL redirected to legal namespace.' },
  { source: '/terms', destination: '/legal/terms-of-service', permanent: true, reason: 'Legacy terms URL redirected to legal namespace.' },

  // ── HUB-AND-SPOKE SURFACE REDIRECTS (soft / 307) ──────────────────────────
  // /home is now a real page — redirect removed (old /home → / entry deleted)
  // Old service routes → hub surfaces
  { source: '/intelligence', destination: '/intel', permanent: false, reason: 'Intelligence route feeds new /intel domain surface.' },
  { source: '/services/threat-monitoring', destination: '/hub/soc', permanent: false, reason: 'Threat monitoring is surfaced under Hub SOC.' },
  { source: '/services/incident-response', destination: '/hub/soc', permanent: false, reason: 'Incident response is surfaced under Hub SOC.' },
  { source: '/services/compliance-management', destination: '/hub/compliance', permanent: false, reason: 'Compliance management is surfaced under Hub Compliance.' },
  { source: '/services/federal-compliance', destination: '/hub/compliance', permanent: false, reason: 'Federal compliance is surfaced under Hub Compliance.' },
  { source: '/services/asset-recovery', destination: '/assets', permanent: false, reason: 'Asset recovery is surfaced under /assets domain.' },
  { source: '/portfolio', destination: '/hub/portfolio', permanent: false, reason: 'Portfolio is surfaced under Hub Portfolio.' },
  { source: '/qfs', destination: '/hub/portfolio', permanent: false, reason: 'QFS is surfaced under Hub Portfolio.' },
  { source: '/bridge/alliance-trust', destination: '/alliance-trust-realty', permanent: true, reason: 'Alliance Trust Realty now lives at /alliance-trust-realty; legacy bridge route permanently redirected.' },
  { source: '/cyber-sentinel-trust', destination: '/alliance-trust-realty', permanent: false, reason: 'Cyber Sentinel surfaced under Alliance Trust Realty.' },
  { source: '/hub/real-estate', destination: '/alliance-trust-realty', permanent: false, reason: 'Hub real-estate surface redirected to Alliance Trust Realty full section.' },
  { source: '/specs', destination: '/hub/research', permanent: false, reason: 'Specs surfaced under Hub Research.' },
  { source: '/architecture', destination: '/hub/research', permanent: false, reason: 'Architecture surfaced under Hub Research (replaces old /architecture → /specs redirect).' },
  { source: '/membership', destination: '/community', permanent: false, reason: 'Membership surfaced under /community domain.' },
  { source: '/case-studies', destination: '/community', permanent: false, reason: 'Case Studies surfaced under /community domain.' },
  { source: '/news', destination: '/community', permanent: false, reason: 'News surfaced under /community domain.' },
];
