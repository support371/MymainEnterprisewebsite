import type { Metadata } from 'next';
import { AlertTriangle, CheckCircle2, Clock, Siren } from 'lucide-react';
export const dynamic = 'force-dynamic';


export const metadata: Metadata = {
  title: 'Incidents | Admin | GEM Cyber',
};

const activeIncidents = [
  {
    id: 'INC-2026-0034',
    title: 'Suspicious outbound traffic — Client APEX Corp',
    severity: 'P2',
    status: 'investigating',
    assigned: 'Analyst Martinez',
    opened: 'Mar 8, 2026 09:12 UTC',
    lastUpdate: '14 min ago',
    client: 'APEX Corp',
    affectedSystems: ['firewall-edge-01', 'proxy-gw-03'],
  },
  {
    id: 'INC-2026-0033',
    title: 'Credential stuffing attempt — Client NovaTech',
    severity: 'P3',
    status: 'contained',
    assigned: 'Analyst Chen',
    opened: 'Mar 7, 2026 22:40 UTC',
    lastUpdate: '2 hr ago',
    client: 'NovaTech LLC',
    affectedSystems: ['auth-api-prod'],
  },
  {
    id: 'INC-2026-0032',
    title: 'Elevated failed logins — Client DeltaHealth',
    severity: 'P3',
    status: 'monitoring',
    assigned: 'Analyst Patel',
    opened: 'Mar 7, 2026 18:55 UTC',
    lastUpdate: '4 hr ago',
    client: 'DeltaHealth',
    affectedSystems: ['vpn-concentrator-01'],
  },
];

const recentClosed = [
  { id: 'INC-2026-0031', title: 'Phishing campaign — internal staff', severity: 'P2', client: 'Internal', closedAt: 'Mar 6, 2026', mttr: '47 min', outcome: 'Contained — 2 accounts remediated' },
  { id: 'INC-2026-0030', title: 'Ransomware precursor activity', severity: 'P1', client: 'RhoFinancial', closedAt: 'Mar 4, 2026', mttr: '22 min', outcome: 'Prevented — endpoint isolated, malware removed' },
  { id: 'INC-2026-0029', title: 'Data exfiltration alert — false positive', severity: 'P3', client: 'AuroraTech', closedAt: 'Mar 2, 2026', mttr: '18 min', outcome: 'False positive — tuning applied' },
  { id: 'INC-2026-0028', title: 'Brute force against RDP', severity: 'P2', client: 'ValueCorp', closedAt: 'Feb 28, 2026', mttr: '31 min', outcome: 'Blocked — geo-restriction applied' },
];

const mttrStats = [
  { label: 'Open Incidents', value: '3', color: 'text-amber-400' },
  { label: 'Avg MTTR (30d)', value: '18 min', color: 'text-cyan-300' },
  { label: 'P1 SLA Adherence', value: '100%', color: 'text-emerald-400' },
  { label: 'Closed This Month', value: '31', color: 'text-white' },
];

function SeverityBadge({ sev }: { sev: string }) {
  const styles: Record<string, string> = {
    P1: 'bg-red-500/20 text-red-400 border-red-500/30',
    P2: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    P3: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/25',
    P4: 'bg-slate-700/60 text-slate-400 border-slate-600',
  };
  return (
    <span className={`text-xs font-bold px-2 py-0.5 rounded border ${styles[sev] ?? 'bg-slate-700 text-slate-400'}`}>
      {sev}
    </span>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    investigating: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/20',
    contained: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20',
    monitoring: 'bg-blue-500/15 text-blue-400 border-blue-500/20',
    closed: 'bg-slate-700/60 text-slate-400 border-slate-600',
  };
  return (
    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${styles[status] ?? 'bg-slate-700 text-slate-400'}`}>
      {status}
    </span>
  );
}

export default function AdminIncidentsPage() {
  return (
    <div className="space-y-6">

      {/* Page header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">Incident Management</h2>
          <p className="text-sm text-slate-400 mt-0.5">Active incidents, response tracking, and closed case log.</p>
        </div>
        {activeIncidents.length > 0 && (
          <div className="flex items-center gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-2">
            <Siren className="h-4 w-4 text-amber-400" />
            <span className="text-sm font-semibold text-amber-400">{activeIncidents.length} Active</span>
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {mttrStats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Active incidents */}
      <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="h-4 w-4 text-amber-400" />
          <h3 className="font-semibold">Active Incidents</h3>
        </div>
        {activeIncidents.length === 0 ? (
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center">
            <CheckCircle2 className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
            <p className="font-semibold text-emerald-300">No active incidents</p>
            <p className="text-sm text-slate-400 mt-1">All systems nominal. SOC monitoring is active.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {activeIncidents.map((inc) => (
              <article key={inc.id} className="rounded-xl border border-slate-800 bg-slate-950/50 p-5">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <SeverityBadge sev={inc.severity} />
                    <StatusBadge status={inc.status} />
                    <span className="font-mono text-xs text-slate-500">{inc.id}</span>
                  </div>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    Updated {inc.lastUpdate}
                  </span>
                </div>
                <h4 className="font-semibold text-white mb-2">{inc.title}</h4>
                <div className="grid sm:grid-cols-3 gap-3 text-xs text-slate-400">
                  <div><span className="text-slate-500">Client: </span>{inc.client}</div>
                  <div><span className="text-slate-500">Analyst: </span>{inc.assigned}</div>
                  <div><span className="text-slate-500">Opened: </span>{inc.opened}</div>
                </div>
                {inc.affectedSystems.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {inc.affectedSystems.map((sys) => (
                      <span key={sys} className="rounded border border-slate-700 bg-slate-800 px-2 py-0.5 text-xs font-mono text-slate-300">
                        {sys}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Recently closed */}
      <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle2 className="h-4 w-4 text-cyan-400" />
          <h3 className="font-semibold">Recently Closed</h3>
        </div>
        <div className="space-y-2">
          {recentClosed.map((inc) => (
            <div key={inc.id} className="flex items-start justify-between gap-4 rounded-lg border border-slate-800 bg-slate-950/50 px-4 py-3">
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <SeverityBadge sev={inc.severity} />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-slate-200 truncate">{inc.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{inc.client} · Closed {inc.closedAt} · MTTR: {inc.mttr}</p>
                  <p className="text-xs text-cyan-400/80 mt-0.5">{inc.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
