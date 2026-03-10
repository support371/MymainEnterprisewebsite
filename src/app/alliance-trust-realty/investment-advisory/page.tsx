import type { Metadata } from 'next';
import { TrendingUp, BarChart3, FileText, DollarSign, RefreshCw, Users } from 'lucide-react';
import AllianceLeadForm from '@/components/alliance/AllianceLeadForm';

export const metadata: Metadata = {
  title: 'Investment Advisory',
  description: 'Data-driven investment property analysis, pro-forma modeling, IRR projections, and portfolio advisory from Alliance Trust Realty.',
};

const advisoryServices = [
  {
    icon: BarChart3,
    title: 'Acquisition Underwriting',
    description: 'Full pro-forma modeling including cash-on-cash return, cap rate analysis, gross yield, DSCR, and projected IRR for holding periods from 3 to 10 years.',
  },
  {
    icon: DollarSign,
    title: 'Commercial Property Analysis',
    description: 'Cap rate benchmarking, rent roll audit, tenant covenant review, and NOI normalization for office, retail, industrial, and multi-family assets.',
  },
  {
    icon: TrendingUp,
    title: 'Portfolio Performance Review',
    description: 'Annual review of multi-property portfolios — equity tracking, refinance triggers, hold vs. sell analysis, and rebalancing advisory.',
  },
  {
    icon: RefreshCw,
    title: 'Disposition Timing',
    description: '1031 exchange planning, depreciation recapture awareness (consult your CPA), and market timing analysis to optimize exit proceeds.',
  },
  {
    icon: FileText,
    title: 'Due Diligence Coordination',
    description: 'Environmental report review, inspection triage, title search coordination, and closing checklist management for investment acquisitions.',
  },
  {
    icon: Users,
    title: 'Property Manager Sourcing',
    description: 'Vetting and introduction to qualified property managers, including fee benchmarking, contract review guidance, and performance monitoring.',
  },
];

const proFormaItems = [
  { label: 'Gross Scheduled Income',       note: 'Market rent × units × 12' },
  { label: 'Vacancy & Credit Loss',         note: 'Typically 5–8% market adj.' },
  { label: 'Effective Gross Income',        note: 'GSI minus vacancy' },
  { label: 'Operating Expenses',            note: 'Tax, insurance, maintenance, mgmt' },
  { label: 'Net Operating Income (NOI)',    note: 'EGI minus expenses' },
  { label: 'Debt Service',                  note: 'P&I on acquisition financing' },
  { label: 'Cash Flow Before Tax',          note: 'NOI minus debt service' },
  { label: 'Cash-on-Cash Return',           note: 'CFBT / equity invested' },
  { label: 'Cap Rate',                      note: 'NOI / purchase price' },
  { label: 'Debt Service Coverage (DSCR)', note: 'NOI / annual debt service' },
];

export default function InvestmentAdvisoryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
      <div className="max-w-2xl mb-14">
        <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">Investment Advisory</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Institutional-Grade Real Estate Investment Analysis
        </h1>
        <p className="text-slate-400 leading-relaxed">
          Whether you&apos;re evaluating your first rental property or managing a diversified multi-asset
          portfolio, our investment advisory team brings rigorous financial analysis to every decision.
        </p>
        <p className="text-xs text-slate-500 mt-3">
          Investment analysis is provided for informational purposes only and does not constitute
          financial, tax, or legal advice. Consult licensed professionals before making investment decisions.
        </p>
      </div>

      {/* Advisory services */}
      <section className="mb-16">
        <h2 className="text-xl font-bold text-white mb-8">Advisory Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {advisoryServices.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-600/15 border border-amber-600/25 mb-3">
                  <Icon className="h-5 w-5 text-amber-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{s.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pro forma explainer */}
      <section className="mb-16 pb-16 border-b border-slate-800/60">
        <h2 className="text-xl font-bold text-white mb-4">What We Model</h2>
        <p className="text-sm text-slate-400 mb-6">
          Every investment property analysis we prepare includes the following line items as a baseline:
        </p>
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-slate-700/60 bg-slate-800/40">
                <th className="text-left px-4 py-3 font-medium text-slate-300">Metric</th>
                <th className="text-left px-4 py-3 font-medium text-slate-300">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/40">
              {proFormaItems.map((item) => (
                <tr key={item.label}>
                  <td className="px-4 py-3 text-white font-medium">{item.label}</td>
                  <td className="px-4 py-3 text-slate-400">{item.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Form */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Request an Investment Analysis</h2>
          <p className="text-sm text-slate-400 leading-relaxed mb-4">
            Have a specific property in mind? Share the details and we&apos;ll prepare a preliminary
            pro-forma within 3–5 business days. Deeper underwriting packages available for qualified clients.
          </p>
          <ul className="space-y-2 text-sm text-slate-300 mb-6">
            {[
              'Residential rental & multi-family',
              'Commercial and NNN properties',
              'Mixed-use developments',
              'Portfolio-level analysis',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <AllianceLeadForm variant="consultation" />
      </section>
    </div>
  );
}
