import type { LucideIcon } from 'lucide-react';
import {
  Home,
  Building2,
  TrendingUp,
  GraduationCap,
  Landmark,
  ShieldCheck,
  Users,
  FileText,
} from 'lucide-react';

export type AllianceService = {
  id: string;
  title: string;
  slug: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
};

export const allianceServices: AllianceService[] = [
  {
    id: 'residential-buying',
    title: 'Residential Buying',
    slug: 'residential-buying',
    icon: Home,
    tagline: 'Find your ideal home with expert guidance at every step.',
    description:
      'Our seasoned buyer agents provide end-to-end support — from initial market analysis and property tours to offer negotiation, due diligence, and closing. We represent your interests exclusively.',
    features: [
      'Personalized property matching',
      'Neighborhood & school district analysis',
      'Competitive offer strategy',
      'Inspection coordination & contingency management',
      'Closing cost guidance',
    ],
    cta: 'Start Your Home Search',
    href: '/alliance-trust-realty/contact',
  },
  {
    id: 'residential-selling',
    title: 'Residential Selling',
    slug: 'residential-selling',
    icon: Building2,
    tagline: 'Maximize your home\'s value with a proven listing strategy.',
    description:
      'We combine professional staging consultation, targeted digital marketing, and precise pricing analysis to position your property for maximum offers. Our average days-on-market is well below the regional median.',
    features: [
      'Comparative market analysis (CMA)',
      'Professional photography & virtual tour',
      'Multi-channel marketing campaign',
      'Open house & showings management',
      'Negotiation through closing',
    ],
    cta: 'Request a Home Valuation',
    href: '/alliance-trust-realty/contact',
  },
  {
    id: 'commercial-real-estate',
    title: 'Commercial Real Estate',
    slug: 'commercial-real-estate',
    icon: Landmark,
    tagline: 'Office, retail, and industrial acquisitions with institutional-grade analysis.',
    description:
      'From single-tenant NNN leases to multi-tenant mixed-use developments, our commercial team delivers cap-rate analysis, tenant credit reviews, lease abstraction, and disposition advisory.',
    features: [
      'Cap rate & cash-on-cash analysis',
      'Lease review and rent roll audit',
      'Tenant credit and covenant review',
      'Market lease rate benchmarking',
      'Sale-leaseback structuring',
    ],
    cta: 'Schedule a Commercial Consultation',
    href: '/alliance-trust-realty/investment-advisory',
  },
  {
    id: 'investment-property-analysis',
    title: 'Investment Property Analysis',
    slug: 'investment-property-analysis',
    icon: TrendingUp,
    tagline: 'Data-driven underwriting for residential and commercial acquisitions.',
    description:
      'We build pro-forma models for single-family rentals, multi-family, and commercial assets — including vacancy assumptions, expense normalization, debt service coverage, and projected IRR.',
    features: [
      'Pro-forma cash flow modeling',
      'Debt service coverage analysis',
      'Projected IRR & equity multiple',
      'Comparable sale & rental data',
      'Hold-period exit scenario planning',
    ],
    cta: 'Request an Investment Analysis',
    href: '/alliance-trust-realty/investment-advisory',
  },
  {
    id: 'mortgage-guidance',
    title: 'Mortgage Guidance',
    slug: 'mortgage-guidance',
    icon: FileText,
    tagline: 'Navigate financing options with an independent, client-first advisor.',
    description:
      'We help clients understand conventional, FHA, VA, USDA, jumbo, and portfolio loan options. We do not originate loans — we educate and connect clients with vetted lenders to ensure optimal terms.',
    features: [
      'Loan product comparison (conventional, FHA, VA, USDA, jumbo)',
      'Down payment assistance program review',
      'Debt-to-income optimization guidance',
      'Rate lock timing strategy',
      'Lender referral network',
    ],
    cta: 'Explore Financing Options',
    href: '/alliance-trust-realty/mortgage-guidance',
  },
  {
    id: 'investor-education',
    title: 'Investor Education',
    slug: 'investor-education',
    icon: GraduationCap,
    tagline: 'Build real estate literacy with structured learning resources.',
    description:
      'Our education library covers REI fundamentals, market cycle theory, tax strategy basics, and portfolio-building frameworks. Designed for first-time investors through seasoned portfolio holders.',
    features: [
      'Market cycle fundamentals',
      'Rental property ROI basics',
      '1031 exchange overview',
      'Tax strategy primer (consult your CPA)',
      'Portfolio scaling frameworks',
    ],
    cta: 'Access Learning Resources',
    href: '/alliance-trust-realty/investor-education',
  },
  {
    id: 'secure-client-onboarding',
    title: 'Secure Client Onboarding',
    slug: 'secure-client-onboarding',
    icon: ShieldCheck,
    tagline: 'Verified identity and encrypted document workflows for high-value transactions.',
    description:
      'We apply enterprise-grade identity verification and encrypted document exchange to protect clients during high-value acquisitions, wire transfers, and closing processes.',
    features: [
      'Identity verification at intake',
      'Encrypted document exchange',
      'Wire fraud prevention protocols',
      'Closing process security checklist',
      'Dedicated secure portal access',
    ],
    cta: 'Access Secure Portal',
    href: '/alliance-trust-realty/portal',
  },
  {
    id: 'portfolio-support',
    title: 'Portfolio Support',
    slug: 'portfolio-support',
    icon: Users,
    tagline: 'Ongoing asset management and advisory for multi-property investors.',
    description:
      'For clients holding multiple residential or commercial assets, we provide periodic portfolio reviews, property manager coordination, disposition timing analysis, and rebalancing advisory.',
    features: [
      'Annual portfolio performance review',
      'Property manager vetting & coordination',
      'Disposition timing analysis',
      'Refinance & equity extraction review',
      'Portfolio rebalancing advisory',
    ],
    cta: 'Discuss Your Portfolio',
    href: '/alliance-trust-realty/investment-advisory',
  },
];

export const allianceServiceMap = Object.fromEntries(
  allianceServices.map((s) => [s.id, s]),
) as Record<string, AllianceService>;
