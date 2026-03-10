import type { Metadata } from 'next';
import { AlertCircle } from 'lucide-react';
import AllianceLeadForm from '@/components/alliance/AllianceLeadForm';

export const metadata: Metadata = {
  title: 'Mortgage Guidance',
  description: 'Independent mortgage education and lender referral from Alliance Trust Realty. We do not originate loans — we help you navigate your options.',
};

const loanTypes = [
  {
    name: 'Conventional',
    bestFor: 'Strong credit, 20%+ down',
    minDown: '3–20%',
    notes: 'Best rates; no mortgage insurance with 20% down. Conforming loan limits apply.',
  },
  {
    name: 'FHA',
    bestFor: 'First-time buyers, lower credit',
    minDown: '3.5%',
    notes: 'Government-backed; MIP required for life of loan (if <10% down). Flexible DTI limits.',
  },
  {
    name: 'VA',
    bestFor: 'Veterans, active service, surviving spouses',
    minDown: '0%',
    notes: 'No PMI; competitive rates; funding fee required. Certificate of Eligibility needed.',
  },
  {
    name: 'USDA',
    bestFor: 'Rural properties, moderate income',
    minDown: '0%',
    notes: 'Property must be in USDA-eligible rural area. Income limits apply. Guarantee fee required.',
  },
  {
    name: 'Jumbo',
    bestFor: 'High-value properties above conforming limits',
    minDown: '10–20%+',
    notes: 'Stricter underwriting; lower DTI required; reserves may be required. Portfolio lender rates vary.',
  },
  {
    name: 'Portfolio / Non-QM',
    bestFor: 'Self-employed, investors, non-standard income',
    minDown: '15–30%+',
    notes: 'Lender holds loan in-house; flexible guidelines. DSCR loans available for investment properties.',
  },
];

const steps = [
  { step: '01', title: 'Review Your Credit Profile', description: 'Understand where your score stands and what affects it. We can help you read your credit report — but we do not pull credit.' },
  { step: '02', title: 'Calculate Your True Budget', description: 'Factor in down payment, closing costs (2–5%), reserves required by lenders, and monthly payment within your DTI limits.' },
  { step: '03', title: 'Compare Loan Products', description: 'We walk through the loan types that fit your profile, including rate vs. points tradeoffs and ARM vs. fixed consideration.' },
  { step: '04', title: 'Get Pre-Approved by a Vetted Lender', description: 'We refer you to lenders with a strong track record of closing on time, at rate, without surprises.' },
  { step: '05', title: 'Optimize Rate Lock Timing', description: 'Rate lock strategy matters — locking too early or too late can cost thousands. We help you decide when to lock.' },
  { step: '06', title: 'Navigate Closing', description: 'We coordinate between you, your lender, the attorney, and the title company to ensure a clean close.' },
];

export default function MortgageGuidancePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
      <div className="max-w-2xl mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">Mortgage Guidance</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Navigate Financing with Confidence
        </h1>
        <p className="text-slate-400 leading-relaxed">
          Alliance Trust Realty provides independent mortgage education and lender referrals.
          We help you understand your options, compare loan products, and connect with vetted lenders —
          without the conflict of interest that comes with in-house origination.
        </p>
      </div>

      {/* Disclosure */}
      <div className="flex items-start gap-3 rounded-xl border border-amber-700/30 bg-amber-900/10 px-5 py-4 mb-12 text-xs text-amber-200/80">
        <AlertCircle className="h-4 w-4 text-amber-400 mt-0.5 flex-shrink-0" />
        <p>
          <strong>Important:</strong> Alliance Trust Realty does not originate mortgage loans,
          does not receive compensation from lenders, and is not a licensed mortgage broker or banker.
          All mortgage guidance is educational. You should compare multiple lenders and consult a licensed
          mortgage professional before committing to a loan product.
        </p>
      </div>

      {/* Loan comparison table */}
      <section className="mb-16">
        <h2 className="text-xl font-bold text-white mb-6">Loan Product Overview</h2>
        <div className="rounded-xl border border-slate-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-xs min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-700/60 bg-slate-800/40">
                  <th className="text-left px-4 py-3 font-medium text-slate-300">Product</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-300">Best For</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-300">Min. Down</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-300">Key Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/40 bg-slate-900/30">
                {loanTypes.map((lt) => (
                  <tr key={lt.name}>
                    <td className="px-4 py-3 font-medium text-amber-300">{lt.name}</td>
                    <td className="px-4 py-3 text-slate-300">{lt.bestFor}</td>
                    <td className="px-4 py-3 text-slate-300">{lt.minDown}</td>
                    <td className="px-4 py-3 text-slate-400">{lt.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mb-16 pb-16 border-b border-slate-800/60">
        <h2 className="text-xl font-bold text-white mb-8">Our Mortgage Guidance Process</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((s) => (
            <div key={s.step} className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
              <p className="text-3xl font-bold text-amber-500/30 mb-2">{s.step}</p>
              <h3 className="text-sm font-semibold text-white mb-1">{s.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Get Mortgage Guidance</h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Tell us where you are in the process and we&apos;ll help you understand your options
            and connect you with the right lender for your situation.
          </p>
        </div>
        <AllianceLeadForm variant="consultation" />
      </section>
    </div>
  );
}
