import type { Metadata } from 'next';
import { AlertTriangle, CheckCircle2, Clock, Radar, TrendingUp } from 'lucide-react';
export const dynamic = 'force-dynamic';


export const metadata: Metadata = {
  title: 'Intel | Admin | GEM Cyber',
};

const feedStatus = [
  { name: 'CISA KEV Feed', status: 'active', lastSync: '2 min ago', indicators: 1247, quality: 98 },
  { name: 'FS-ISAC Threat Intel', status: 'active', lastSync: '5 min ago', indicators: 892, quality: 96 },
  { name: 'FBI InfraGard', status: 'active', lastSync: '12 min ago', indicators: 445, quality: 94 },
  { name: 'Shodan Monitor', status: 'active', lastSync: '8 min ago', indicators: 2100, quality: 87 },
  { name: 'AlienVault OTX', status: 'degraded', lastSync: '45 min ago', indicators: 3400, quality: 72 },
  { name: 'MISP Community', status: 'active', lastSync: '3 min ago', indicators: 670, quality: 91 },
];

const recentBriefings = [
  { title: 'Q1 2026 Executive Risk Brief', date: 'Mar 5, 2026', audience: 'Executive', status: 'delivered' },
  { title: 'March Threat Landscape Update', date: 'Mar 1, 2026', audience: 'Technical', status: 'delivered' },
  { title: 'CISA KEV Priority Digest', date: 'Feb 28, 2026', audience: 'Analyst', status: 'delivered' },
  { title: 'Q1 Sector Risk Summary — Finance', date: 'Feb 25, 2026', audience: 'Executive', status: 'draft' },
];

const iocStats = [
  { label: 'Total IOCs Today', value: '8,754', delta: '+12%', trend: 'up' },
  { label: 'Critical Indicators', value: '34', delta: '+3', trend: 'up' },
  { label: 'Suppressed Duplicates', value: '2,140', delta: '-8%', trend: 'down' },
  { label: 'Analyst Reviewed', value: '1,890', delta: '82% coverage', trend: 'neutral' },
];

function StatusDot({ status }: { status: string }) {
  const colors: Record<string, string> = {
    active: 'bg-emerald-400',
    degraded: 'bg-amber-400',
    offline: 'bg-red-400',
  };
  return <span className={`h-2 w-2 rounded-full ${colors[status] ?? 'bg-slate-500'} animate-pulse`} />;
}

export default function AdminIntelPage() {
  return (
    <div className="space-y-6">

      {/* Page header */}
      <div>
        <h2 className="text-2xl font-semibold">Intelligence Operations</h2>
        <p className="text-sm text-slate-400 mt-0.5">Threat feed management, IOC pipeline, and executive briefings.</p>
      </div>

      {/* IOC Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {iocStats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            <p className={`text-xs mt-1 font-medium ${stat.trend === 'up' ? 'text-amber-400' : stat.trend === 'down' ? 'text-emerald-400' : 'text-slate-400'}`}>
              {stat.delta}
            </p>
          </div>
        ))}
      </div>

      {/* Feed Status */}
      <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Radar className="h-4 w-4 text-cyan-400" />
            <h3 className="font-semibold">Threat Feed Status</h3>
          </div>
          <span className="text-xs text-slate-400">{feedStatus.filter(f => f.status === 'active').length}/{feedStatus.length} active</span>
        </div>
        <div className="space-y-2">
          {feedStatus.map((feed) => (
            <div key={feed.name} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/50 px-4 py-3">
              <div className="flex items-center gap-3">
                <StatusDot status={feed.status} />
                <div>
                  <p className="text-sm font-medium text-white">{feed.name}</p>
                  <p className="text-xs text-slate-500">Last sync: {feed.lastSync}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-right">
                <div>
                  <p className="text-sm font-semibold text-white">{feed.indicators.toLocaleString()}</p>
                  <p className="text-xs text-slate-500">indicators</p>
                </div>
                <div>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    feed.quality >= 90 ? 'bg-emerald-500/15 text-emerald-400' :
                    feed.quality >= 80 ? 'bg-amber-500/15 text-amber-400' :
                    'bg-red-500/15 text-red-400'
                  }`}>
                    Q: {feed.quality}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Briefings */}
      <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="h-4 w-4 text-cyan-400" />
          <h3 className="font-semibold">Recent Briefings</h3>
        </div>
        <div className="space-y-2">
          {recentBriefings.map((briefing) => (
            <div key={briefing.title} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/50 px-4 py-3 gap-3">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                {briefing.status === 'delivered'
                  ? <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-none" />
                  : <Clock className="h-4 w-4 text-amber-400 flex-none" />
                }
                <div className="min-w-0">
                  <p className="text-sm font-medium text-white truncate">{briefing.title}</p>
                  <p className="text-xs text-slate-500">{briefing.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-xs text-slate-400 border border-slate-700 rounded-full px-2.5 py-0.5">{briefing.audience}</span>
                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                  briefing.status === 'delivered'
                    ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20'
                    : 'bg-amber-500/15 text-amber-400 border border-amber-500/20'
                }`}>
                  {briefing.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Alert Pipeline summary */}
      <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="h-4 w-4 text-cyan-400" />
          <h3 className="font-semibold">Alert Pipeline — Today</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Critical (P1)', value: '2', color: 'text-red-400 border-red-500/20 bg-red-500/10' },
            { label: 'High (P2)', value: '11', color: 'text-amber-400 border-amber-500/20 bg-amber-500/10' },
            { label: 'Medium (P3)', value: '87', color: 'text-yellow-400 border-yellow-500/20 bg-yellow-500/10' },
            { label: 'Low (P4)', value: '1,147', color: 'text-slate-400 border-slate-700 bg-slate-800/60' },
          ].map((tier) => (
            <div key={tier.label} className={`rounded-xl border p-4 text-center ${tier.color}`}>
              <p className="text-2xl font-bold">{tier.value}</p>
              <p className="text-xs mt-1 opacity-80">{tier.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
