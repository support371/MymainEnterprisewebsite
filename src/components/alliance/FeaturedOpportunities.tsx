import Link from 'next/link';
import { MapPin, Home, Building2 } from 'lucide-react';
import { propertySamples, formatPrice, formatSqft } from '@/data/alliance/propertySamples';
import type { PropertySample } from '@/data/alliance/propertySamples';

const STATUS_STYLES: Record<PropertySample['status'], string> = {
  available:       'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  'under-contract': 'bg-amber-500/15 text-amber-400 border-amber-500/30',
  sold:            'bg-slate-700/40 text-slate-400 border-slate-600/30',
  'coming-soon':   'bg-sky-500/15 text-sky-400 border-sky-500/30',
};

const STATUS_LABELS: Record<PropertySample['status'], string> = {
  available:       'Available',
  'under-contract': 'Under Contract',
  sold:            'Sold',
  'coming-soon':   'Coming Soon',
};

interface FeaturedOpportunitiesProps {
  limit?: number;
  showAll?: boolean;
}

export default function FeaturedOpportunities({ limit = 3, showAll = false }: FeaturedOpportunitiesProps) {
  const featured = showAll ? propertySamples : propertySamples.filter((p) => p.status !== 'sold').slice(0, limit);

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-white">Featured Opportunities</h2>
        {!showAll && (
          <Link href="/alliance-trust-realty/properties" className="text-xs text-amber-400 hover:text-amber-300 transition">
            View all properties →
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((property) => {
          const TypeIcon = property.type === 'residential' ? Home : Building2;
          return (
            <Link
              key={property.id}
              href={`/alliance-trust-realty/properties?id=${property.id}`}
              className="group flex flex-col rounded-xl border border-slate-700/60 bg-slate-900/50
                         hover:border-amber-600/40 hover:bg-slate-900/80 transition-all overflow-hidden"
            >
              {/* Thumbnail placeholder */}
              <div className="h-36 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border-b border-slate-700/40">
                <TypeIcon className="h-10 w-10 text-slate-700" />
              </div>

              <div className="p-4 flex flex-col flex-1">
                {/* Status + type */}
                <div className="flex items-center gap-2 mb-2">
                  <span className={`inline-flex rounded-full border px-2 py-0.5 text-[10px] font-medium ${STATUS_STYLES[property.status]}`}>
                    {STATUS_LABELS[property.status]}
                  </span>
                  <span className="text-[10px] text-slate-500 capitalize">{property.type.replace('-', ' ')}</span>
                </div>

                {/* Price */}
                <p className="text-base font-bold text-amber-300">{formatPrice(property.listPrice)}</p>

                {/* Address */}
                <div className="flex items-start gap-1 mt-1 mb-2">
                  <MapPin className="h-3 w-3 text-slate-500 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-slate-300 leading-snug">
                    {property.address}<br />
                    {property.city}, {property.state} {property.zip}
                  </p>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-auto pt-2 border-t border-slate-700/40">
                  <span>{formatSqft(property.sqft)}</span>
                  {property.bedrooms && <span>{property.bedrooms} bd</span>}
                  {property.bathrooms && <span>{property.bathrooms} ba</span>}
                  {property.capRate && <span className="text-emerald-400">{property.capRate}% cap</span>}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
