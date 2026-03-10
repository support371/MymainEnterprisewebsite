import type { Metadata } from 'next';
import Link from 'next/link';
import { allianceServices } from '@/data/alliance/services';

export const metadata: Metadata = {
  title: 'Real Estate Services',
  description:
    'Alliance Trust Realty offers full-spectrum real estate services: residential buying and selling, commercial acquisitions, investment analysis, mortgage guidance, investor education, and portfolio support.',
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
      <div className="max-w-2xl mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">Services</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Full-Spectrum Real Estate Advisory
        </h1>
        <p className="text-slate-400 leading-relaxed">
          From residential transactions to commercial acquisitions and investment portfolio management,
          Alliance Trust Realty provides expert guidance at every stage of the real estate lifecycle.
        </p>
      </div>

      <div className="space-y-8">
        {allianceServices.map((service, i) => {
          const Icon = service.icon;
          return (
            <article
              key={service.id}
              id={service.id}
              className="flex flex-col md:flex-row gap-6 rounded-xl border border-slate-800/70 bg-slate-900/40 p-6 scroll-mt-32"
            >
              <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-600/15 border border-amber-600/25">
                <Icon className="h-6 w-6 text-amber-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h2 className="text-lg font-bold text-white">{i + 1}. {service.title}</h2>
                </div>
                <p className="text-sm text-amber-300/80 mb-3">{service.tagline}</p>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-1.5 mb-5">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="h-1 w-1 rounded-full bg-amber-500 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-amber-600/30 bg-amber-600/10 px-4 py-2 text-xs font-medium text-amber-300 hover:bg-amber-600/20 transition"
                >
                  {service.cta} →
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-12 rounded-xl border border-amber-800/25 bg-slate-900/40 p-8 text-center">
        <h2 className="text-lg font-bold text-white mb-2">Not sure which service fits your needs?</h2>
        <p className="text-sm text-slate-400 mb-6">Schedule a free 30-minute discovery call and we&apos;ll help you find the right path forward.</p>
        <Link
          href="/alliance-trust-realty/contact"
          className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-6 py-3 text-sm font-semibold text-white hover:bg-amber-500 transition"
        >
          Book a Discovery Call
        </Link>
      </div>
    </div>
  );
}
