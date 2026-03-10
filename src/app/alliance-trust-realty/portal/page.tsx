import type { Metadata } from 'next';
import { ShieldCheck, Lock, FileText, KeyRound } from 'lucide-react';
import AllianceLeadForm from '@/components/alliance/AllianceLeadForm';

export const metadata: Metadata = {
  title: 'Secure Client Portal',
  description: 'Alliance Trust Realty\'s secure client portal — encrypted document exchange, transaction tracking, and portfolio access for verified clients.',
};

const portalFeatures = [
  {
    icon: Lock,
    title: 'Encrypted Document Exchange',
    description: 'Upload and receive sensitive transaction documents — purchase agreements, title reports, closing disclosures — through encrypted channels that prevent interception.',
  },
  {
    icon: ShieldCheck,
    title: 'Wire Fraud Protection',
    description: 'Verify wire instructions directly through the portal before any funds are transferred. Our protocol eliminates the risk of email-based wire fraud.',
  },
  {
    icon: FileText,
    title: 'Transaction Status Tracking',
    description: 'Monitor every milestone in your active transaction — from accepted offer through final closing — with real-time status updates and document requests.',
  },
  {
    icon: KeyRound,
    title: 'Identity-Verified Access',
    description: 'Portal access requires identity verification at onboarding. Multi-factor authentication protects your account from unauthorized access.',
  },
];

export default function PortalPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
      <div className="max-w-2xl mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">Client Portal</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Secure Client Portal
        </h1>
        <p className="text-slate-400 leading-relaxed">
          Alliance Trust Realty&apos;s secure portal provides verified clients with encrypted document
          exchange, transaction milestone tracking, and wire fraud protection — the security layer
          your high-value real estate transaction deserves.
        </p>
      </div>

      {/* Coming soon badge */}
      <div className="rounded-xl border border-amber-700/40 bg-amber-900/10 px-6 py-4 mb-10 flex items-center gap-3">
        <ShieldCheck className="h-5 w-5 text-amber-400 flex-shrink-0" />
        <div>
          <p className="text-sm font-semibold text-amber-300">Portal Access — Launching Q3 2026</p>
          <p className="text-xs text-slate-400">
            Our secure client portal is currently in final testing. Request access below to be notified
            when your account is ready and to begin the verification process.
          </p>
        </div>
      </div>

      {/* Features */}
      <section className="mb-16">
        <h2 className="text-xl font-bold text-white mb-8">Portal Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {portalFeatures.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-600/15 border border-amber-600/25 mb-4">
                  <Icon className="h-5 w-5 text-amber-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{f.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Request access form */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Request Portal Access</h2>
          <p className="text-sm text-slate-400 leading-relaxed mb-4">
            Portal access is provided to active Alliance Trust Realty clients. Complete the form to
            begin the identity verification process and be notified when your account is activated.
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            {[
              'Identity verification required at intake',
              'Two-factor authentication enforced',
              'Session activity logged and audited',
              'Access revoked automatically at transaction close',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-amber-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <AllianceLeadForm variant="request-access" />
      </section>
    </div>
  );
}
