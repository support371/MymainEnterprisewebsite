import type { Metadata } from 'next';
import { Archive, CheckCircle2, Clock, Search } from 'lucide-react';
export const dynamic = 'force-dynamic';


export const metadata: Metadata = {
  title: 'Assets | Admin | GEM Cyber',
};

const assetSummary = [
  { label: 'Total Assets', value: '245', delta: '+3 this week' },
  { label: 'Digital Assets', value: '186', delta: '76% of portfolio' },
  { label: 'Physical Assets', value: '59', delta: '24% of portfolio' },
  { label: 'At-Risk Assets', value: '7', delta: 'Requires review' },
];

const recentCases = [
  {
    id: 'RC-2026-041',
    type: 'Cryptocurrency Recovery',
    status: 'active',
    value: '$240,000',
    jurisdiction: 'US / UK',
    opened: 'Mar 3, 2026',
    assignee: 'Recovery Team A',
  },
  {
    id: 'RC-2026-038',
    type: 'IP Theft Investigation',
    status: 'active',
    value: 'TBD',
    jurisdiction: 'US',
    opened: 'Feb 27, 2026',
    assignee: 'Recovery Team B',
  },
  {
    id: 'RC-2026-034',
    type: 'Wire Fraud Recovery',
    status: 'resolved',
    value: '$1.2M',
    jurisdiction: 'EU / US',
    opened: 'Feb 14, 2026',
    assignee: 'Recovery Team A',
  },
  {
    id: 'RC-2026-029',
    type: 'Physical Asset Seizure',
    status: 'resolved',
    value: '$85,000',
    jurisdiction: 'US',
    opened: 'Feb 1, 2026',
    assignee: 'Recovery Team C',
  },
  {
    id: 'RC-2026-022',
    type: 'Digital Asset Tracing',
    status: 'closed',
    value: '$620,000',
    jurisdiction: 'US / SG',
    opened: 'Jan 18, 2026',
    assignee: 'Recovery Team B',
  },
];

const assetInventory = [
  { class: 'Cloud Infrastructure', count: 94, risk: 'low', coverage: 99 },
  { class: 'Endpoints & Devices', count: 62, risk: 'medium', coverage: 91 },
  { class: 'SaaS Applications', count: 30, risk: 'low', coverage: 88 },
  { class: 'Source Code & IP', count: 18, risk: 'high', coverage: 95 },
  { class: 'Financial Instruments', count: 12, risk: 'medium', coverage: 100 },
  { class: 'Real Estate Holdings', count: 8, risk: 'low', coverage: 100 },
  { class: 'Crypto & Digital Assets', count: 21, risk: 'high', coverage: 85 },
];

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    active: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/20',
    resolved: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20',
    closed: 'bg-slate-700/60 text-slate-400 border-slate-600',
  };
  return (
    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${styles[status] ?? 'bg-slate-700 text-slate-400'}`}>
      {status}
    </span>
  );
}

function RiskBadge({ risk }: { risk: string }) {
  const styles: Record<string, string> = {
    low: 'text-emerald-400',
    medium: 'text-amber-400',
    high: 'text-red-400',
  };
  return <span className={`text-xs font-semibold uppercase ${styles[risk] ?? 'text-slate-400'}`}>{risk}</span>;
}

export default function AdminAssetsPage() {
  return (
    <div className="space-y-6">

      {/* Page header */}
      <div>
        <h2 className="text-2xl font-semibold">Asset Management</h2>
        <p className="text-sm text-slate-400 mt-0.5">Portfolio overview, recovery case tracking, and governance status.</p>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {assetSummary.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            <p className="text-xs text-slate-500 mt-1">{stat.delta}</p>
          </div>
        ))}
      </div>

      {/* Asset Inventory */}
      <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
        <div className="flex items-center gap-2 mb-4">
          <Archive className="h-4 w-4 text-cyan-400" />
          <h3 className="font-semibold">Asset Inventory by Class</h3>
        </div>
        <div className="space-y-2">
          {assetInventory.map((asset) => (
            <div key={asset.class} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/50 px-4 py-3 gap-4">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="text-sm font-medium text-white min-w-0 truncate">{asset.class}</div>
              </div>
              <div className="flex items-center gap-6 flex-shrink-0 text-right">
                <div>
                  <p className="text-sm font-semibold text-white">{asset.count}</p>
                  <p className="text-xs text-slate-500">assets</p>
                </div>
                <div>
                  <RiskBadge risk={asset.risk} />
                  <p className="text-xs text-slate-500">risk</p>
                </div>
                <div>
                  <p className={`text-sm font-semibold ${asset.coverage >= 95 ? 'text-emerald-400' : asset.coverage >= 85 ? 'text-amber-400' : 'text-red-400'}`}>
                    {asset.coverage}%
                  </p>
                  <p className="text-xs text-slate-500">coverage</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recovery Cases */}
      <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Search className="h-4 w-4 text-cyan-400" />
            <h3 className="font-semibold">Recovery Cases</h3>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Clock className="h-3.5 w-3.5" />
            <span>{recentCases.filter(c => c.status === 'active').length} active</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-800">
                {['Case ID', 'Type', 'Value', 'Jurisdiction', 'Opened', 'Assignee', 'Status'].map((h) => (
                  <th key={h} className="text-left text-xs text-slate-500 uppercase tracking-wider pb-2 pr-4 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {recentCases.map((c) => (
                <tr key={c.id} className="hover:bg-slate-800/30 transition">
                  <td className="py-3 pr-4 font-mono text-xs text-cyan-400">{c.id}</td>
                  <td className="py-3 pr-4 text-slate-200">{c.type}</td>
                  <td className="py-3 pr-4 font-semibold text-white">{c.value}</td>
                  <td className="py-3 pr-4 text-slate-300">{c.jurisdiction}</td>
                  <td className="py-3 pr-4 text-slate-400">{c.opened}</td>
                  <td className="py-3 pr-4 text-slate-300">{c.assignee}</td>
                  <td className="py-3"><StatusBadge status={c.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Governance status */}
      <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
        <h3 className="font-semibold mb-4">Governance Compliance Status</h3>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            { label: 'Classification Review', status: 'current', date: 'Feb 28, 2026', icon: CheckCircle2 },
            { label: 'Access Control Audit', status: 'due', date: 'Due Mar 15, 2026', icon: Clock },
            { label: 'Evidence Collection', status: 'current', date: 'Auto-updating', icon: CheckCircle2 },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className={`rounded-xl border p-4 ${item.status === 'current' ? 'border-emerald-500/20 bg-emerald-500/5' : 'border-amber-500/20 bg-amber-500/5'}`}>
                <div className="flex items-center gap-2 mb-1">
                  <Icon className={`h-4 w-4 ${item.status === 'current' ? 'text-emerald-400' : 'text-amber-400'}`} />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
                <p className="text-xs text-slate-400">{item.date}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
