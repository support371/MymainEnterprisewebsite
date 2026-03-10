import type { Metadata } from 'next';
import { AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Disclosures',
  description: 'Required real estate licensing, agency, and investment disclosures from Alliance Trust Realty.',
};

const disclosures = [
  {
    title: 'Real Estate Brokerage License',
    content:
      'Alliance Trust Realty is a licensed real estate brokerage in the State of Connecticut. Our principal broker is licensed under Connecticut Department of Consumer Protection, Real Estate Division. License information is available upon request.',
  },
  {
    title: 'Agency Relationships',
    content:
      'Connecticut law requires real estate licensees to disclose their agency relationship at the time of first substantive contact with a consumer. Agency options include buyer representation, seller representation, or designated agency (where permitted). A written representation agreement is required to establish any agency relationship. Without a signed representation agreement, we are working as a transaction broker unless otherwise disclosed.',
  },
  {
    title: 'Dual Agency Disclosure',
    content:
      'Alliance Trust Realty does not practice undisclosed dual agency. In situations where the same brokerage represents both buyer and seller, this will be disclosed in writing and your consent will be obtained prior to proceeding. You have the right to decline dual agency representation.',
  },
  {
    title: 'Investment Information Disclaimer',
    content:
      'Investment analysis, pro-forma models, cap rate calculations, IRR projections, and any financial projections provided by Alliance Trust Realty are for informational purposes only. They are based on information believed to be reliable but not guaranteed. Past performance of real estate markets does not predict future results. Alliance Trust Realty is not a registered investment advisor, broker-dealer, or securities dealer. Nothing we provide constitutes an offer to buy or sell securities.',
  },
  {
    title: 'Mortgage Referral Disclosure',
    content:
      'Alliance Trust Realty may refer clients to mortgage lenders or brokers. We do not receive referral fees, kickbacks, or compensation from mortgage lenders in exchange for referrals. Our referrals are based solely on our assessment of lender quality and track record. You are not required to use a referred lender; you may choose any licensed lender.',
  },
  {
    title: 'MLS and Listing Information',
    content:
      'Property listing information is sourced from the Connecticut Multiple Listing Service (CTMLS) and is believed to be accurate but is not guaranteed. All property details, including square footage, lot size, and tax information, should be independently verified before entering into any purchase agreement. Listing information is subject to change without notice.',
  },
  {
    title: 'Fair Housing',
    content:
      'Alliance Trust Realty is committed to the principles of the Fair Housing Act. We do not discriminate on the basis of race, color, religion, sex, national origin, disability, familial status, sexual orientation, gender identity, or any other characteristic protected by federal, state, or local law. If you believe you have been discriminated against, contact HUD at 1-800-669-9777.',
  },
  {
    title: 'Equal Opportunity Employer',
    content:
      'Alliance Trust Realty is an equal opportunity employer. We do not discriminate in employment decisions on the basis of any characteristic protected by applicable law.',
  },
];

export default function DisclosuresPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">Legal</p>
      <h1 className="text-3xl font-bold text-white mb-4">Disclosures</h1>
      <p className="text-sm text-slate-400 mb-3">
        The following disclosures are required by law or are provided voluntarily in the interest of transparency.
      </p>

      <div className="flex items-start gap-3 rounded-xl border border-slate-700/60 bg-slate-900/40 px-5 py-4 mb-10 text-xs text-slate-400">
        <AlertCircle className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
        <p>
          Real estate laws vary by state. These disclosures reflect Connecticut law and practice.
          Clients outside Connecticut should verify applicable requirements with a local licensed professional.
        </p>
      </div>

      <div className="space-y-6">
        {disclosures.map((d, i) => (
          <section key={d.title} className="rounded-xl border border-slate-800 bg-slate-900/30 p-6">
            <h2 className="text-sm font-bold text-white mb-2">
              {i + 1}. {d.title}
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">{d.content}</p>
          </section>
        ))}
      </div>

      <div className="mt-10 text-xs text-slate-600">
        <p>Last reviewed: January 2025. For questions about these disclosures, contact Alliance Trust Realty at realty@alliancetrustct.com or (860) 305-4376.</p>
      </div>
    </div>
  );
}
