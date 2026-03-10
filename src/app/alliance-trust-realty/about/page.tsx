import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, ShieldCheck, TrendingUp, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Alliance Trust Realty',
  description: 'Learn about Alliance Trust Realty\'s mission, team, and commitment to client-first real estate advisory.',
};

const values = [
  {
    icon: ShieldCheck,
    title: 'Fiduciary Standard',
    description:
      'We act exclusively in our clients\' best interests — not the interests of a brokerage production quota, a referral network, or a mortgage originator.',
  },
  {
    icon: TrendingUp,
    title: 'Investment-Grade Analysis',
    description:
      'Our advisory team brings institutional underwriting rigor to residential and commercial acquisitions, so you make decisions based on data — not emotion.',
  },
  {
    icon: Users,
    title: 'Relationship-First',
    description:
      'Clients are partners, not transactions. We measure success by the quality of the long-term relationships we build and the portfolio outcomes we deliver.',
  },
  {
    icon: Building2,
    title: 'Full-Spectrum Coverage',
    description:
      'From a first home purchase to a multi-asset commercial portfolio, we cover the full real estate lifecycle with a single, consistent advisory relationship.',
  },
];

const milestones = [
  { year: '2009', event: 'Alliance Trust Realty founded in Hartford, CT' },
  { year: '2012', event: 'Commercial division launched; first NNN lease advisory' },
  { year: '2015', event: '500th residential transaction milestone' },
  { year: '2018', event: 'Investment Advisory Practice formally established' },
  { year: '2021', event: 'Secure Client Portal launched with encrypted document workflows' },
  { year: '2023', event: 'Partnership with GEM CYBER for enterprise asset protection services' },
  { year: '2025', event: '800+ lifetime transactions; Northeast market expansion' },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="max-w-2xl mb-14">
        <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">About Us</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Real Estate Advisory You Can Build a Future On
        </h1>
        <p className="text-slate-400 leading-relaxed">
          Alliance Trust Realty was founded on a simple premise: real estate clients deserve the same
          institutional-grade advisory that was once reserved for large funds and family offices.
          Today, we deliver that standard to every client — from first-time buyers to seasoned portfolio investors.
        </p>
      </div>

      {/* Mission + story */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 pb-16 border-b border-slate-800/60">
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-sm text-slate-400 leading-relaxed mb-4">
            To provide fiduciary real estate advisory that empowers clients to make confident,
            well-informed decisions throughout every phase of the real estate lifecycle —
            buying, selling, investing, financing, and building wealth over time.
          </p>
          <p className="text-sm text-slate-400 leading-relaxed">
            We do not originate mortgages, take referral fees from lenders, or represent both
            sides of a transaction without full disclosure. Our independence is our clients&apos; advantage.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Our Market</h2>
          <p className="text-sm text-slate-400 leading-relaxed mb-4">
            Headquartered in Hartford, Connecticut, Alliance Trust Realty serves buyers, sellers,
            and investors across the Greater Hartford area, the Connecticut shoreline, and
            the broader Northeast corridor including western Massachusetts and Rhode Island.
          </p>
          <p className="text-sm text-slate-400 leading-relaxed">
            Our commercial team advises on acquisitions and dispositions in all major Connecticut markets,
            with referral relationships for out-of-state portfolio transactions.
          </p>
        </div>
      </div>

      {/* Values */}
      <section className="mb-16 pb-16 border-b border-slate-800/60">
        <h2 className="text-xl font-bold text-white mb-8">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-600/15 border border-amber-600/25 mb-4">
                  <Icon className="h-4.5 w-4.5 text-amber-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{v.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{v.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-16">
        <h2 className="text-xl font-bold text-white mb-8">Our History</h2>
        <div className="relative pl-6 border-l border-amber-800/30 space-y-6">
          {milestones.map((m) => (
            <div key={m.year} className="relative">
              <div className="absolute -left-[1.5625rem] top-0.5 h-3 w-3 rounded-full border-2 border-amber-500 bg-slate-950" />
              <p className="text-[11px] font-semibold text-amber-400 mb-0.5">{m.year}</p>
              <p className="text-sm text-slate-300">{m.event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="rounded-xl border border-amber-800/25 bg-slate-900/40 p-8 text-center">
        <h2 className="text-lg font-bold text-white mb-2">Ready to work together?</h2>
        <p className="text-sm text-slate-400 mb-6">
          Contact us to schedule a no-obligation consultation with one of our advisors.
        </p>
        <Link
          href="/alliance-trust-realty/contact"
          className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-6 py-3 text-sm font-semibold text-white hover:bg-amber-500 transition"
        >
          Schedule a Consultation
        </Link>
      </div>
    </div>
  );
}
