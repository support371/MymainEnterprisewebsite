import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Phone, Star } from 'lucide-react';
import ServiceGrid from '@/components/alliance/ServiceGrid';
import FeaturedOpportunities from '@/components/alliance/FeaturedOpportunities';
import { allianceServices } from '@/data/alliance/services';

export const metadata: Metadata = {
  title: 'Alliance Trust Realty | Premium Real Estate Advisory',
  description:
    'Alliance Trust Realty delivers expert residential buying, selling, commercial real estate, and investment advisory services across Connecticut and the Northeast.',
};

export const dynamic = 'force-dynamic';

const stats = [
  { label: 'Transactions Closed',    value: '800+' },
  { label: 'Avg Days on Market',     value: '18' },
  { label: 'Client Satisfaction',    value: '98%' },
  { label: 'Years in Market',        value: '15+' },
];

const whyChoose = [
  'Dedicated buyer and seller representation',
  'Investment-grade property underwriting',
  'Independent mortgage guidance (no originations)',
  'Secure, encrypted transaction workflows',
  'Portfolio advisory for multi-property owners',
  'Licensed professionals — no unlicensed referrals',
];

export default function AllianceTrustRealtyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-amber-800/20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.06),transparent_60%)]" />
        <div className="mx-auto max-w-4xl text-center relative">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-600/30 bg-amber-600/10 px-3 py-1 text-xs font-medium text-amber-400 mb-6">
            <Star className="h-3 w-3" />
            Licensed Real Estate Professionals · Connecticut &amp; Northeast
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            Real Estate You Can{' '}
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              Trust
            </span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Alliance Trust Realty provides premium residential buying and selling,
            commercial acquisitions, investment property analysis, and independent
            mortgage guidance — with the fiduciary care your transaction deserves.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/alliance-trust-realty/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3
                         text-sm font-semibold text-white shadow-[0_0_24px_rgba(251,191,36,0.3)]
                         hover:from-amber-400 hover:to-amber-500 transition"
            >
              Speak with an Advisor <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/alliance-trust-realty/properties"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/50 px-6 py-3
                         text-sm font-medium text-slate-300 hover:border-amber-600/40 hover:text-amber-300 transition"
            >
              Browse Properties
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Stats */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-12 border-b border-slate-800/60">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-amber-300">{stat.value}</p>
              <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Services */}
        <section className="py-14">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white">Our Services</h2>
            <p className="text-slate-400 text-sm mt-1">
              Comprehensive real estate advisory — residential, commercial, investment, and portfolio.
            </p>
          </div>
          <ServiceGrid services={allianceServices} columns={4} />
          <div className="mt-6 text-center">
            <Link href="/alliance-trust-realty/services" className="text-sm text-amber-400 hover:text-amber-300 transition">
              View full service details →
            </Link>
          </div>
        </section>

        {/* Featured properties */}
        <section className="py-14 border-t border-slate-800/60">
          <FeaturedOpportunities limit={3} />
        </section>

        {/* Why Alliance Trust */}
        <section className="py-14 border-t border-slate-800/60">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Why Alliance Trust Realty?</h2>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                In a market saturated with transactional agents, Alliance Trust Realty
                operates as a trusted advisor — not just a transaction facilitator.
                We bring institutional rigor to residential and commercial real estate,
                protecting your interests from first showing to final closing.
              </p>
              <ul className="space-y-3">
                {whyChoose.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA card */}
            <div className="rounded-xl border border-amber-800/30 bg-gradient-to-br from-slate-900 to-slate-950 p-8">
              <h3 className="text-lg font-bold text-white mb-2">Ready to get started?</h3>
              <p className="text-sm text-slate-400 mb-6">
                Whether you&apos;re buying your first home, selling an investment property,
                or building a real estate portfolio, we&apos;re here to guide you through
                every decision with clarity and expertise.
              </p>
              <div className="space-y-3">
                <Link
                  href="/alliance-trust-realty/consultation"
                  className="block w-full text-center rounded-lg bg-amber-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-amber-500 transition"
                >
                  Schedule a Consultation
                </Link>
                <Link
                  href="/alliance-trust-realty/contact"
                  className="block w-full text-center rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-300 hover:border-amber-600/40 hover:text-amber-300 transition"
                >
                  Send a Message
                </Link>
                <a
                  href="tel:+18603054376"
                  className="flex items-center justify-center gap-2 w-full text-sm text-slate-400 hover:text-amber-300 transition pt-1"
                >
                  <Phone className="h-4 w-4" />
                  (860) 305-4376
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
