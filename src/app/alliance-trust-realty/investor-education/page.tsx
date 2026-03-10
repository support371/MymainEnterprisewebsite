import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, TrendingUp, RefreshCw, FileText, Calculator, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Investor Education',
  description: 'Real estate investment education from Alliance Trust Realty — market cycles, property analysis, 1031 exchanges, tax strategy overview, and portfolio building.',
};

const modules = [
  {
    icon: TrendingUp,
    title: 'Real Estate Market Cycles',
    level: 'Foundational',
    topics: [
      'Four phases of the real estate cycle (recovery, expansion, hyper-supply, recession)',
      'How to identify where your market is in the cycle',
      'Timing acquisitions and dispositions to cycle phase',
      'National vs. local market dynamics',
    ],
  },
  {
    icon: Calculator,
    title: 'Rental Property ROI Fundamentals',
    level: 'Foundational',
    topics: [
      'Gross rent multiplier (GRM) as a quick screening tool',
      'Cap rate vs. cash-on-cash return — when to use each',
      'Vacancy and expense ratio norms by property type',
      'Calculating break-even occupancy',
    ],
  },
  {
    icon: BookOpen,
    title: 'Single-Family vs. Multi-Family',
    level: 'Intermediate',
    topics: [
      'Economies of scale in multi-family management',
      'Financing differences: residential (1–4 unit) vs. commercial (5+ unit)',
      'Tenant turnover risk in single-family rentals',
      'Value-add strategies for both property types',
    ],
  },
  {
    icon: RefreshCw,
    title: '1031 Exchange Overview',
    level: 'Intermediate',
    topics: [
      'What qualifies as like-kind property under IRC §1031',
      '45-day identification and 180-day closing deadlines',
      'Qualified intermediary requirements',
      'Boot — what triggers partial tax recognition',
      'Reverse 1031 exchanges for competitive markets',
    ],
  },
  {
    icon: FileText,
    title: 'Real Estate Tax Strategy Primer',
    level: 'Intermediate',
    topics: [
      'Depreciation deductions for residential and commercial property',
      'Passive activity loss rules and material participation tests',
      'Qualified business income (QBI) deduction applicability',
      'Cost segregation for accelerated depreciation',
      'Consult your CPA — tax strategy is highly fact-specific',
    ],
  },
  {
    icon: Shield,
    title: 'Portfolio Building & Asset Protection',
    level: 'Advanced',
    topics: [
      'Entity structure considerations (consult your attorney)',
      'Umbrella liability insurance for multi-property owners',
      'Geographic diversification within a real estate portfolio',
      'Transition from active to passive management as scale grows',
      'Succession planning basics for real estate held in estate',
    ],
  },
];

export default function InvestorEducationPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
      <div className="max-w-2xl mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">Investor Education</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Build Your Real Estate Knowledge Foundation
        </h1>
        <p className="text-slate-400 leading-relaxed mb-4">
          Confident real estate investors make better decisions. Our education library covers
          market fundamentals, investment analysis, tax strategy overview, and portfolio-building
          frameworks — designed for beginners through experienced investors.
        </p>
        <p className="text-xs text-slate-500">
          Educational content is provided for informational purposes only and does not constitute
          financial, tax, or legal advice. Always consult licensed professionals for your specific situation.
        </p>
      </div>

      {/* Level legend */}
      <div className="flex items-center gap-4 mb-10">
        {['Foundational', 'Intermediate', 'Advanced'].map((level) => {
          const colors: Record<string, string> = {
            Foundational: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
            Intermediate:  'bg-amber-500/15 text-amber-400 border-amber-500/30',
            Advanced:      'bg-purple-500/15 text-purple-400 border-purple-500/30',
          };
          return (
            <span key={level} className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-medium ${colors[level]}`}>
              {level}
            </span>
          );
        })}
      </div>

      {/* Modules */}
      <div className="space-y-6 mb-16">
        {modules.map((mod) => {
          const Icon = mod.icon;
          const levelColors: Record<string, string> = {
            Foundational: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
            Intermediate:  'bg-amber-500/15 text-amber-400 border-amber-500/30',
            Advanced:      'bg-purple-500/15 text-purple-400 border-purple-500/30',
          };
          return (
            <article key={mod.title} className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-600/15 border border-amber-600/25">
                  <Icon className="h-5 w-5 text-amber-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-base font-bold text-white">{mod.title}</h2>
                    <span className={`inline-flex rounded-full border px-2 py-0.5 text-[10px] font-medium ${levelColors[mod.level]}`}>
                      {mod.level}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {mod.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="h-1 w-1 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* CTA */}
      <div className="rounded-xl border border-amber-800/25 bg-slate-900/40 p-8 text-center">
        <h2 className="text-lg font-bold text-white mb-2">Ready to apply what you&apos;ve learned?</h2>
        <p className="text-sm text-slate-400 mb-6">
          Schedule a consultation with our investment advisory team to discuss a specific property
          or portfolio strategy.
        </p>
        <Link
          href="/alliance-trust-realty/investment-advisory"
          className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-6 py-3 text-sm font-semibold text-white hover:bg-amber-500 transition"
        >
          Explore Investment Advisory
        </Link>
      </div>
    </div>
  );
}
