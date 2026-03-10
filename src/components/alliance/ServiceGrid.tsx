import Link from 'next/link';
import type { AllianceService } from '@/data/alliance/services';

interface ServiceGridProps {
  services: AllianceService[];
  columns?: 2 | 3 | 4;
}

export default function ServiceGrid({ services, columns = 3 }: ServiceGridProps) {
  const colClass =
    columns === 4
      ? 'sm:grid-cols-2 lg:grid-cols-4'
      : columns === 2
      ? 'sm:grid-cols-2'
      : 'sm:grid-cols-2 lg:grid-cols-3';

  return (
    <div className={`grid grid-cols-1 gap-5 ${colClass}`}>
      {services.map((service) => {
        const Icon = service.icon;
        return (
          <Link
            key={service.id}
            href={service.href}
            className="group relative flex flex-col rounded-xl border border-amber-800/20 bg-slate-900/60
                       p-5 hover:border-amber-600/50 hover:bg-slate-900/90 transition-all"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-600/15 border border-amber-600/25">
              <Icon className="h-5 w-5 text-amber-400" />
            </div>
            <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-amber-300 transition">
              {service.title}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed flex-1">{service.tagline}</p>
            <div className="mt-3 flex items-center gap-1 text-[11px] font-medium text-amber-500 group-hover:text-amber-300 transition">
              <span>Learn more</span>
              <svg className="h-3 w-3 translate-x-0 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 16 16">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
