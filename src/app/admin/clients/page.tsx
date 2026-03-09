import type { Metadata } from 'next';
import { Building2, CheckCircle2, Clock, Users } from 'lucide-react';
export const dynamic = 'force-dynamic';


export const metadata: Metadata = {
  title: 'Clients | Admin | GEM Cyber',
};

const clientStats = [
  { label: 'Total Clients', value: '500+' },
  { label: 'Enterprise Tier', value: '47' },
  { label: 'Advisory Members', value: '124' },
  { label: 'Renewals Due (30d)', value: '8' },
];

const clients = [
  {
    name: 'APEX Corp',
    tier: 'Enterprise',
    industry: 'Financial Services',
    status: 'active',
    contacts: 3,
    since: 'Jan 2023',
    openItems: 2,
    renewal: 'Jun 2026',
  },
  {
    name: 'NovaTech LLC',
    tier: 'Advisory',
    industry: 'Technology',
    status: 'active',
    contacts: 2,
    since: 'Mar 2024',
    openItems: 1,
    renewal: 'Mar 2027',
  },
  {
    name: 'DeltaHealth',
    tier: 'Compliance',
    industry: 'Healthcare',
    status: 'active',
    contacts: 4,
    since: 'Aug 2022',
    openItems: 0,
    renewal: 'Aug 2026',
  },
  {
    name: 'RhoFinancial',
    tier: 'Enterprise',
    industry: 'Financial Services',
    status: 'active',
    contacts: 2,
    since: 'Nov 2023',
    openItems: 0,
    renewal: 'Nov 2026',
  },
  {
    name: 'AuroraTech',
    tier: 'Operational',
    industry: 'Technology',
    status: 'active',
    contacts: 1,
    since: 'May 2024',
    openItems: 0,
    renewal: 'May 2026',
  },
  {
    name: 'ValueCorp',
    tier: 'Advisory',
    industry: 'Retail',
    status: 'onboarding',
    contacts: 2,
    since: 'Feb 2026',
    openItems: 4,
    renewal: 'Feb 2027',
  },
  {
    name: 'FedPrime Contractors',
    tier: 'Compliance',
    industry: 'Government / DoD',
    status: 'active',
    contacts: 3,
    since: 'Sep 2022',
    openItems: 1,
    renewal: 'Sep 2026',
  },
  {
    name: 'PropGuard Realty',
    tier: 'Operational',
    industry: 'Real Estate',
    status: 'at-risk',
    contacts: 1,
    since: 'Jun 2023',
    openItems: 5,
    renewal: 'Jun 2026',
  },
];

function TierBadge({ tier }: { tier: string }) {
  const styles: Record<string, string> = {
    Enterprise: 'bg-purple-500/15 text-purple-400 border-purple-500/25',
    Advisory: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/25',
    Compliance: 'bg-blue-500/15 text-blue-400 border-blue-500/25',
    Operational: 'bg-slate-700/60 text-slate-300 border-slate-600',
  };
  return (
    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${styles[tier] ?? 'bg-slate-700 text-slate-400'}`}>
      {tier}
    </span>
  );
}

function ClientStatusDot({ status }: { status: string }) {
  const map: Record<string, { color: string; label: string }> = {
    active: { color: 'bg-emerald-400', label: 'Active' },
    onboarding: { color: 'bg-cyan-400', label: 'Onboarding' },
    'at-risk': { color: 'bg-amber-400', label: 'At Risk' },
    churned: { color: 'bg-red-400', label: 'Churned' },
  };
  const { color, label } = map[status] ?? { color: 'bg-slate-500', label: status };
  return (
    <span className="flex items-center gap-1.5 text-xs text-slate-300">
      <span className={`h-2 w-2 rounded-full ${color}`} />
      {label}
    </span>
  );
}

export default function AdminClientsPage() {
  return (
    <div className="space-y-6">

      {/* Page header */}
      <div>
        <h2 className="text-2xl font-semibold">Client Management</h2>
        <p className="text-sm text-slate-400 mt-0.5">Account overview, membership tiers, and renewal tracking.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {clientStats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* At-risk alert */}
      {clients.some(c => c.status === 'at-risk') && (
        <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-5 py-4 flex items-center gap-3">
          <Clock className="h-5 w-5 text-amber-400 flex-none" />
          <div>
            <p className="text-sm font-semibold text-amber-300">
              {clients.filter(c => c.status === 'at-risk').length} client(s) flagged as at-risk
            </p>
            <p className="text-xs text-slate-400 mt-0.5">Review open items and schedule a health check call.</p>
          </div>
        </div>
      )}

      {/* Client list */}
      <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4 text-cyan-400" />
            <h3 className="font-semibold">Client Accounts</h3>
          </div>
          <span className="text-xs text-slate-400">{clients.length} accounts shown</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-800">
                {['Client', 'Industry', 'Tier', 'Status', 'Open Items', 'Since', 'Renewal', 'Contacts'].map((h) => (
                  <th key={h} className="text-left text-xs text-slate-500 uppercase tracking-wider pb-2 pr-4 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {clients.map((client) => (
                <tr key={client.name} className="hover:bg-slate-800/30 transition">
                  <td className="py-3 pr-4 font-semibold text-white">{client.name}</td>
                  <td className="py-3 pr-4 text-slate-400 text-xs">{client.industry}</td>
                  <td className="py-3 pr-4"><TierBadge tier={client.tier} /></td>
                  <td className="py-3 pr-4"><ClientStatusDot status={client.status} /></td>
                  <td className="py-3 pr-4">
                    {client.openItems > 0
                      ? <span className="text-amber-400 font-semibold">{client.openItems}</span>
                      : <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    }
                  </td>
                  <td className="py-3 pr-4 text-slate-400 text-xs">{client.since}</td>
                  <td className="py-3 pr-4 text-slate-400 text-xs">{client.renewal}</td>
                  <td className="py-3 pr-4">
                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <Users className="h-3.5 w-3.5" />
                      {client.contacts}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Renewals due */}
      <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
        <h3 className="font-semibold mb-4">Renewals Due (Next 90 Days)</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {clients
            .filter(c => ['Jun 2026', 'May 2026', 'Aug 2026'].includes(c.renewal))
            .map((c) => (
              <div key={c.name} className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                <p className="font-semibold text-sm text-white">{c.name}</p>
                <p className="text-xs text-slate-400 mt-0.5">{c.tier}</p>
                <p className="text-xs text-cyan-400 mt-2 font-medium">Renewal: {c.renewal}</p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
