import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Shield, Zap, Crown } from 'lucide-react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Membership Programs',
  description: 'GEM CYBER membership tiers — flexible programs aligned to your risk profile and security support depth.',
};

const tiers = [
  {
    name: 'Operational',
    icon: Shield,
    price: 'Contact for pricing',
    description: 'Core security monitoring and incident response for growing organizations.',
    features: [
      '24/7 threat monitoring coverage',
      'Incident response SLA',
      'Monthly security briefing',
      'Dedicated analyst contact',
      'Compliance status dashboard',
    ],
    cta: 'Request Operational Plan',
    highlight: false,
  },
  {
    name: 'Advisory',
    icon: Zap,
    price: 'Contact for pricing',
    description: 'Strategic security leadership and executive-level risk advisory for mid-market enterprises.',
    features: [
      'All Operational features',
      'vCISO advisory sessions',
      'Quarterly risk assessment',
      'Executive risk briefing',
      'Priority incident escalation',
      'Architecture review',
    ],
    cta: 'Request Advisory Plan',
    highlight: true,
  },
  {
    name: 'Compliance',
    icon: CheckCircle2,
    price: 'Contact for pricing',
    description: 'Compliance-first security program for regulated industries and federal contractors.',
    features: [
      'All Advisory features',
      'CMMC 2.0 readiness support',
      'FedRAMP advisory',
      'Audit support and evidence packaging',
      'Continuous control monitoring',
      'Regulatory change alerts',
    ],
    cta: 'Request Compliance Plan',
    highlight: false,
  },
  {
    name: 'Partner Enablement',
    icon: Crown,
    price: 'Contact for pricing',
    description: 'Strategic alliance program for security resellers, MSSPs, and enterprise channel partners.',
    features: [
      'White-label SOC capabilities',
      'Partner portal access',
      'Joint go-to-market support',
      'Technical enablement sessions',
      'Co-branded assessment templates',
      'Revenue share program',
    ],
    cta: 'Request Partner Plan',
    highlight: false,
  },
];

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Header */}
      <section className="border-b border-slate-800/70 bg-slate-900/30 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 text-xs text-slate-400 mb-4">
            <Link href="/community" className="hover:text-cyan-300 transition">Community</Link>
            <span>/</span>
            <span className="text-slate-300">Membership</span>
          </div>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.14em] text-cyan-300 mb-2">Membership Programs</p>
            <h1 className="text-3xl font-bold sm:text-4xl">Security coverage that scales with you</h1>
            <p className="mt-3 text-slate-300 leading-relaxed">
              Flexible membership tiers designed to match your organization&apos;s risk profile, compliance requirements,
              and security operations maturity.
            </p>
          </div>
        </div>
      </section>

      {/* Tier cards */}
      <section className="py-16 border-b border-slate-800/70">
        <div className="container mx-auto px-4">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {tiers.map((tier) => {
              const Icon = tier.icon;
              return (
                <article
                  key={tier.name}
                  className={[
                    'rounded-2xl border p-6 flex flex-col transition',
                    tier.highlight
                      ? 'border-cyan-500/60 bg-slate-900/80 shadow-[0_0_40px_rgba(6,182,212,0.12)]'
                      : 'border-slate-800 bg-slate-900/60 hover:border-cyan-500/30',
                  ].join(' ')}
                >
                  {tier.highlight && (
                    <div className="mb-3">
                      <span className="rounded-full bg-cyan-500/20 border border-cyan-500/40 px-3 py-0.5 text-xs font-semibold text-cyan-300">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-2.5 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="text-lg font-bold">{tier.name}</h2>
                  </div>
                  <p className="text-xs text-slate-400 mb-2">{tier.price}</p>
                  <p className="text-sm text-slate-300 leading-relaxed mb-5">{tier.description}</p>
                  <ul className="space-y-2 flex-1 mb-6">
                    {tier.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="h-4 w-4 text-cyan-400 flex-none mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact-us"
                    className={[
                      'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition',
                      tier.highlight
                        ? 'bg-gradient-to-r from-cyan-400 to-sky-500 text-slate-950'
                        : 'border border-slate-700 text-slate-200 hover:border-cyan-500/40',
                    ].join(' ')}
                  >
                    {tier.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why join */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.14em] text-cyan-300 mb-2">Community Benefits</p>
            <h2 className="text-2xl font-bold mb-4">More than a vendor relationship</h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-8">
              GEM CYBER members get access to the full platform community — case studies, peer events,
              threat intelligence sharing, and direct analyst support.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              {[
                { label: '500+ Active Members', desc: 'Across finance, healthcare, government, and real estate.' },
                { label: 'Shared Intelligence', desc: 'Community threat feeds and anonymized incident learnings.' },
                { label: 'Peer Leadership Events', desc: 'Quarterly executive roundtables and CISO briefings.' },
              ].map((b) => (
                <div key={b.label} className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                  <p className="font-semibold text-white text-sm mb-1">{b.label}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/community/leadership" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition">
                Meet our Leadership Team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
