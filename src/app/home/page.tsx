import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  LayoutGrid,
  Radar,
  Archive,
  Users,
  ShieldCheck,
  Siren,
  TimerReset,
  Workflow,
  Lock,
  TrendingUp,
} from 'lucide-react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'GEM CYBER | Enterprise Security Command Center',
  description:
    'Unified enterprise cybersecurity platform — managed detection, compliance operations, asset protection, and response orchestration.',
};

const kpis = [
  { label: 'Active Clients',  value: '500+' },
  { label: 'Threats Blocked', value: '2.4M+' },
  { label: 'Avg Response',    value: '<2 min' },
  { label: 'Uptime SLA',      value: '99.97%' },
];

const platformModules = [
  {
    label: 'Intel',
    href: '/intel',
    icon: Radar,
    description: 'Threat feeds, indicator scoring, and executive risk briefings.',
    stat: '8,400+ IOCs/day',
  },
  {
    label: 'Assets',
    href: '/assets',
    icon: Archive,
    description: 'Asset recovery, portfolio security, and physical asset protection.',
    stat: '$12M+ recovered',
  },
  {
    label: 'Community',
    href: '/community',
    icon: Users,
    description: 'Membership programs, case studies, and partner network.',
    stat: '500+ members',
  },
  {
    label: 'Hub',
    href: '/hub',
    icon: LayoutGrid,
    description: 'SOC operations, compliance lifecycle, and assessments.',
    stat: '6 frameworks',
  },
];

const trustItems = [
  { label: '24/7 SOC Monitoring', icon: Activity },
  { label: 'Incident Response SLA', icon: Siren },
  { label: 'Compliance Operations', icon: FileCheck2 },
  { label: 'Secure-by-Design Architecture', icon: Lock },
  { label: 'SOC 2-Ready Controls', icon: ShieldCheck },
  { label: 'Continuous Assessment', icon: TrendingUp },
];

const howItWorks = [
  {
    title: 'Assess',
    description: 'Baseline your risk profile, assets, and compliance requirements with a focused security assessment.',
    icon: ShieldCheck,
    cta: 'Start Assessment',
    href: '/hub/assessments',
  },
  {
    title: 'Deploy',
    description: 'Implement controls, monitoring workflows, and analyst-ready playbooks aligned to your environment.',
    icon: Workflow,
    cta: 'View SOC',
    href: '/hub/soc',
  },
  {
    title: 'Monitor & Respond',
    description: 'Operate 24/7 detection and response with measurable SLA-backed escalation paths.',
    icon: Activity,
    cta: 'View Intel',
    href: '/intel',
  },
];

export default function HomeTabPage() {
  return (
    <div className="bg-slate-950 text-white">

      {/* Command-Center Hero */}
      <section className="relative overflow-hidden border-b border-slate-800/70 pt-10 pb-0 sm:pt-14">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_10%,rgba(6,182,212,0.22),transparent_40%),radial-gradient(ellipse_at_85%_5%,rgba(59,130,246,0.18),transparent_35%),radial-gradient(ellipse_at_50%_90%,rgba(6,182,212,0.08),transparent_50%)]" />
        <div className="container relative z-10 mx-auto px-4 pb-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">

            {/* Left: headline + CTAs */}
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-1.5">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-[0.13em] text-cyan-300">
                  Unified Security Operations Platform
                </span>
              </div>

              <h1 className="text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
                Enterprise Security,
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-400">
                  Command-Ready
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                GEM CYBER delivers managed detection, compliance operations, and asset protection
                in one enterprise-grade platform built for hybrid environments.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/hub/assessments"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_24px_rgba(0,212,255,0.3)] hover:from-cyan-300 hover:to-sky-400 transition"
                >
                  Schedule Security Assessment
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/hub"
                  className="inline-flex items-center gap-2 rounded-lg border border-cyan-500/50 px-6 py-3 text-sm font-semibold text-cyan-100 hover:bg-cyan-500/10 transition"
                >
                  Explore the Platform
                </Link>
              </div>
            </div>

            {/* Right: Command panel */}
            <article className="rounded-2xl border border-cyan-900/50 bg-slate-900/80 p-6 shadow-[0_24px_80px_rgba(2,8,23,0.5)] sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-cyan-300 mb-0.5">Platform Status</p>
                  <p className="text-lg font-semibold">Command Overview</p>
                </div>
                <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  All Systems Nominal
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                {kpis.map((kpi) => (
                  <div key={kpi.label} className="rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-center">
                    <div className="text-2xl font-bold text-cyan-300">{kpi.value}</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">{kpi.label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-2.5">
                {[
                  { label: 'SOC Coverage', value: '24/7 Active', color: 'text-emerald-400' },
                  { label: 'Threat Response', value: '< 2 min MTTR', color: 'text-cyan-300' },
                  { label: 'Compliance Status', value: '6 Frameworks Active', color: 'text-sky-400' },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/50 px-4 py-2.5 text-sm">
                    <span className="text-slate-400">{row.label}</span>
                    <span className={`font-semibold ${row.color}`}>{row.value}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Platform Modules Grid */}
      <section className="border-b border-slate-800/70 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.14em] text-cyan-300 mb-2">Platform Modules</p>
            <h2 className="text-2xl font-bold sm:text-3xl">One platform. Every security domain.</h2>
            <p className="mt-2 text-slate-400 max-w-xl">
              Each surface is purpose-built for enterprise security operations — connected, not siloed.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {platformModules.map((mod) => {
              const Icon = mod.icon;
              return (
                <Link
                  key={mod.label}
                  href={mod.href}
                  className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition hover:border-cyan-500/50 hover:bg-slate-900/80"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-2.5 text-cyan-300 group-hover:border-cyan-400/60 transition">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-semibold text-white">{mod.label}</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed mb-3">{mod.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-cyan-400/80">{mod.stat}</span>
                    <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-cyan-300 transition" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust & Compliance Strip */}
      <section className="border-b border-slate-800/70 bg-slate-900/30 py-10">
        <div className="container mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.14em] text-cyan-300 mb-5 text-center">
            Built for Enterprise Trust
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-4 text-center"
                >
                  <Icon className="h-5 w-5 text-cyan-400/70" />
                  <span className="text-xs font-medium text-slate-300 leading-tight">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 border-b border-slate-800/70">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-10">
            <p className="text-xs uppercase tracking-[0.14em] text-cyan-300 mb-2">Engagement Model</p>
            <h2 className="text-3xl font-bold sm:text-4xl">From assessment to active operations</h2>
            <p className="mt-2 text-slate-400">Outcome-driven onboarding from risk discovery to 24/7 response coverage.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {howItWorks.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Step {index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed flex-1">{step.description}</p>
                <Link
                  href={step.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition"
                >
                  {step.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-16 border-b border-slate-800/70">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-cyan-300 mb-2">Services & Solutions</p>
              <h2 className="text-2xl font-bold sm:text-3xl mb-4">
                Comprehensive security coverage, by design
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                GEM CYBER delivers integrated security services across threat monitoring, incident response,
                federal compliance, and asset recovery — all operating from a single command surface.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-lg border border-cyan-500/50 px-5 py-2.5 text-sm font-semibold text-cyan-100 hover:bg-cyan-500/10 transition"
              >
                Request a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {[
                { label: 'Threat Monitoring & Detection', href: '/services/threat-monitoring', desc: '24/7 AI-powered SOC coverage across your entire environment.' },
                { label: 'Incident Response', href: '/hub/soc/incident-response', desc: 'Rapid containment with <2 min response SLA and full forensic documentation.' },
                { label: 'Federal Compliance', href: '/hub/compliance/federal', desc: 'NIST, CMMC 2.0, GDPR, and FedRAMP — audit-ready controls lifecycle.' },
                { label: 'Asset Recovery', href: '/assets/recovery', desc: 'Forensic-level recovery of high-value corporate assets across jurisdictions.' },
              ].map((svc) => (
                <Link
                  key={svc.label}
                  href={svc.href}
                  className="group flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-900/60 px-5 py-4 hover:border-cyan-500/40 transition"
                >
                  <CheckCircle2 className="h-5 w-5 text-cyan-400 flex-none mt-0.5" />
                  <div>
                    <p className="font-medium text-white text-sm group-hover:text-cyan-300 transition">{svc.label}</p>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{svc.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl border border-cyan-900/40 bg-gradient-to-br from-slate-900/90 to-slate-900/60 p-8 sm:p-12 text-center">
            <p className="text-xs uppercase tracking-[0.14em] text-cyan-300 mb-3">Get Started</p>
            <h2 className="text-3xl font-bold sm:text-4xl max-w-2xl mx-auto">
              Ready to secure your enterprise posture?
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-slate-300 text-sm leading-relaxed">
              Get a tailored security assessment and implementation roadmap from GEM CYBER specialists.
              No commitment — just clarity on your current risk posture.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link
                href="/hub/assessments"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-sky-500 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_24px_rgba(0,212,255,0.3)] hover:from-cyan-300 hover:to-sky-400 transition"
              >
                Schedule Security Assessment
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-7 py-3.5 text-sm font-semibold text-slate-100 hover:bg-slate-800 transition"
              >
                Request a Call
                <TimerReset className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
