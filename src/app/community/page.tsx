import type { Metadata } from 'next';
import { BookOpenCheck, Handshake, Newspaper, Users } from 'lucide-react';
import PlatformModuleCard from '@/components/ui/PlatformModuleCard';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Community',
  description: 'Membership programs, leadership, case studies, and industry news for GEM CYBER clients.',
};

const kpis = [
  { label: 'Active Members',   value: '500+' },
  { label: 'Case Studies',     value: '6' },
  { label: 'News Articles',    value: '24+' },
  { label: 'Membership Tiers', value: '4' },
];

const modules = [
  {
    title: 'Membership Programs',
    description: 'Flexible membership tiers aligned to your risk profile and security support depth.',
    outcomes: ['Operational', 'Advisory', 'Compliance', 'Partner Enablement'],
    ctaLabel: 'View Membership',
    href: '/community/membership',
    icon: Users,
  },
  {
    title: 'Leadership Team',
    description: 'Meet the GEM CYBER executive and advisory team driving security outcomes.',
    outcomes: ['Security operations leadership', 'Compliance expertise', 'Advisory board', 'Client success'],
    ctaLabel: 'Meet the Team',
    href: '/community/leadership',
    icon: Handshake,
  },
  {
    title: 'Case Studies',
    description: 'Real security outcomes across finance, healthcare, government, and real estate.',
    outcomes: ['2.4M+ threats prevented', '$0 breach losses', '500+ clients'],
    ctaLabel: 'Read Case Studies',
    href: '/case-studies',
    icon: BookOpenCheck,
  },
  {
    title: 'News & Threat Landscape',
    description: 'Current threat intelligence news and GEM CYBER company updates.',
    outcomes: ['Gartner alerts', 'Industry briefings', 'Platform releases'],
    ctaLabel: 'Browse News',
    href: '/news',
    icon: Newspaper,
  },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* KPI Snapshot */}
      <section className="border-b border-slate-800/70 bg-slate-900/30 py-6">
        <div className="container mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.14em] text-cyan-300 mb-3">Community Snapshot</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {kpis.map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-center
                           hover:border-cyan-500/30 transition"
              >
                <div className="text-2xl font-bold text-cyan-300">{kpi.value}</div>
                <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">{kpi.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Page header */}
      <section className="py-10 container mx-auto px-4">
        <h1 className="text-3xl font-bold">Community</h1>
        <p className="mt-2 max-w-2xl text-slate-300">
          Membership programs, client success stories, leadership team, and threat landscape news —
          all in one place.
        </p>
      </section>

      {/* Module card feed */}
      <section className="container mx-auto px-4 pb-12">
        <div className="grid gap-5 md:grid-cols-2">
          {modules.map((m) => (
            <PlatformModuleCard key={m.title} {...m} />
          ))}
        </div>
      </section>
    </div>
  );
}
