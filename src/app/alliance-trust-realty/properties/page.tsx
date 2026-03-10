import type { Metadata } from 'next';
import FeaturedOpportunities from '@/components/alliance/FeaturedOpportunities';
import AllianceLeadForm from '@/components/alliance/AllianceLeadForm';

export const metadata: Metadata = {
  title: 'Properties',
  description: 'Browse residential, commercial, and investment properties represented by Alliance Trust Realty across Connecticut and the Northeast.',
};

export default function PropertiesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
      <div className="max-w-2xl mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">Properties</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Current Listings &amp; Opportunities
        </h1>
        <p className="text-slate-400 leading-relaxed">
          Residential, multi-family, and commercial properties across Connecticut and the Northeast.
          Contact us directly for off-market opportunities not listed here.
        </p>
      </div>

      <FeaturedOpportunities showAll />

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Can&apos;t find what you&apos;re looking for?</h2>
          <p className="text-sm text-slate-400 leading-relaxed mb-4">
            We have access to off-market inventory, pre-market listings, and properties not yet
            visible in the MLS. Tell us your criteria and we&apos;ll source opportunities that match.
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            {[
              'Buyer criteria matching & MLS alerts',
              'Off-market and pocket listing access',
              'Commercial off-market deal flow',
              'Investment property sourcing',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <AllianceLeadForm variant="consultation" />
      </div>
    </div>
  );
}
