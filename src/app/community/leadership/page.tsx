import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Shield, Star, Users } from 'lucide-react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Leadership',
  description: 'GEM CYBER executive and advisory leadership team — cybersecurity and enterprise security operations leaders.',
};

const leaders = [
  {
    name: 'Executive Director, Security Operations',
    role: 'GEM CYBER',
    focus: 'Platform architecture and SOC operations strategy',
    areas: ['SOC leadership', 'Incident response doctrine', 'Platform roadmap'],
  },
  {
    name: 'Chief Compliance Officer',
    role: 'GEM CYBER',
    focus: 'Federal regulatory compliance and audit operations',
    areas: ['CMMC 2.0', 'FedRAMP', 'GDPR / CCPA', 'SOC 2'],
  },
  {
    name: 'Head of Intelligence Operations',
    role: 'GEM CYBER',
    focus: 'Threat intelligence platform and analyst workflows',
    areas: ['Threat feed management', 'Analyst playbooks', 'Executive briefings'],
  },
  {
    name: 'Director of Asset Recovery',
    role: 'GEM CYBER',
    focus: 'International asset recovery and forensic operations',
    areas: ['Digital forensics', 'Jurisdictional coordination', 'Legal liaison'],
  },
  {
    name: 'Head of Client Success',
    role: 'GEM CYBER',
    focus: 'Membership programs and client security outcomes',
    areas: ['Onboarding', 'QBRs', 'Escalation management'],
  },
  {
    name: 'Advisory Board — Cybersecurity',
    role: 'External Advisor',
    focus: 'Strategic guidance on enterprise threat landscape and market positioning',
    areas: ['Strategic advisory', 'Industry relations', 'Research partnerships'],
  },
];

const boardPrinciples = [
  {
    icon: Shield,
    title: 'Security-First Culture',
    description: 'Every decision starts with the question: does this improve the security posture of our clients and our platform?',
  },
  {
    icon: Star,
    title: 'Outcome Accountability',
    description: 'Leadership is measured by client security outcomes — threat reduction, response velocity, and compliance achievement.',
  },
  {
    icon: Users,
    title: 'Community Leadership',
    description: 'We invest in the security community through knowledge sharing, open research, and peer leadership programs.',
  },
];

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Header */}
      <section className="border-b border-slate-800/70 bg-slate-900/30 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 text-xs text-slate-400 mb-4">
            <Link href="/community" className="hover:text-cyan-300 transition">Community</Link>
            <span>/</span>
            <span className="text-slate-300">Leadership</span>
          </div>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.14em] text-cyan-300 mb-2">Leadership Team</p>
            <h1 className="text-3xl font-bold sm:text-4xl">Security leaders. Operator mindset.</h1>
            <p className="mt-3 text-slate-300 leading-relaxed">
              GEM CYBER's leadership team combines deep cybersecurity operations expertise with
              enterprise platform experience — focused on measurable security outcomes for every client.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership principles */}
      <section className="py-14 border-b border-slate-800/70">
        <div className="container mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.14em] text-cyan-300 mb-6">Leadership Principles</p>
          <div className="grid gap-5 md:grid-cols-3">
            {boardPrinciples.map((p) => {
              const Icon = p.icon;
              return (
                <article key={p.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                  <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-3 text-cyan-300 w-fit mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{p.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership profiles */}
      <section className="py-16 border-b border-slate-800/70">
        <div className="container mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.14em] text-cyan-300 mb-2">Team</p>
          <h2 className="text-2xl font-bold mb-8">Executive and advisory team</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {leaders.map((leader) => (
              <article key={leader.name} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-cyan-500/30 transition">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-sky-600/20 border border-cyan-500/30 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-cyan-300">{leader.name.charAt(0)}</span>
                </div>
                <h3 className="font-semibold text-white">{leader.name}</h3>
                <p className="text-xs text-cyan-400 mt-0.5 mb-2">{leader.role}</p>
                <p className="text-sm text-slate-300 mb-3">{leader.focus}</p>
                <div className="flex flex-wrap gap-1.5">
                  {leader.areas.map((area) => (
                    <span key={area} className="rounded-full border border-slate-700 bg-slate-800 px-2.5 py-0.5 text-xs text-slate-300">
                      {area}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl border border-cyan-900/40 bg-slate-900/70 p-8 sm:p-10 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-3">Work with our leadership team</h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Connect with GEM CYBER leadership for enterprise security partnerships, executive advisory,
              or membership inquiries.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-sky-500 px-6 py-3 text-sm font-semibold text-slate-950"
            >
              Request an Executive Meeting
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
