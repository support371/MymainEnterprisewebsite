import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Alliance Trust Realty Privacy Policy — how we collect, use, and protect your personal information.',
};

const EFFECTIVE = 'January 1, 2025';

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">Legal</p>
      <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
      <p className="text-xs text-slate-500 mb-10">Effective Date: {EFFECTIVE}</p>

      <div className="prose prose-invert prose-sm max-w-none space-y-8 text-slate-400">
        <section>
          <h2 className="text-lg font-semibold text-white">1. Introduction</h2>
          <p>
            Alliance Trust Realty (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard personal
            information when you visit our website, use our services, or communicate with us.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">2. Information We Collect</h2>
          <p>We may collect the following categories of personal information:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="text-slate-300">Contact Information:</strong> Name, email address, phone number, mailing address</li>
            <li><strong className="text-slate-300">Transaction Information:</strong> Property preferences, budget range, financing status, purchase/sale details</li>
            <li><strong className="text-slate-300">Identity Verification Data:</strong> Government-issued ID information collected during client onboarding (portal users only)</li>
            <li><strong className="text-slate-300">Communications:</strong> Messages, emails, and call records related to your real estate transaction</li>
            <li><strong className="text-slate-300">Website Usage Data:</strong> IP address, browser type, pages visited, referring URLs (collected via standard server logs)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Respond to your inquiries and provide requested advisory services</li>
            <li>Process and manage real estate transactions on your behalf</li>
            <li>Comply with legal and regulatory obligations applicable to real estate transactions</li>
            <li>Prevent fraud and protect the security of our clients and platform</li>
            <li>Send transactional communications (e.g., appointment confirmations, document requests)</li>
            <li>Improve our website and services through aggregate usage analysis</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">4. Information Sharing</h2>
          <p>We do not sell your personal information. We may share information with:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="text-slate-300">Transaction Parties:</strong> Attorneys, title companies, lenders, and counterparties as required to complete your transaction</li>
            <li><strong className="text-slate-300">Service Providers:</strong> Technology vendors and service providers who assist us in delivering services, subject to confidentiality obligations</li>
            <li><strong className="text-slate-300">Legal Authorities:</strong> Government agencies or courts when required by law, regulation, or legal process</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">5. Data Security</h2>
          <p>
            We implement technical and organizational measures designed to protect your personal information
            against unauthorized access, disclosure, alteration, and destruction. Client portal communications
            use encryption in transit and at rest. However, no method of data transmission over the internet
            is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">6. Data Retention</h2>
          <p>
            We retain personal information for as long as necessary to fulfill the purposes for which it was
            collected, comply with legal obligations (real estate records may be required to be retained for
            7+ years under state law), resolve disputes, and enforce agreements.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">7. Your Rights (Connecticut Residents)</h2>
          <p>
            Under Connecticut law (CTDPA), Connecticut residents may have the right to access, correct,
            delete, and opt out of the sale of personal data. To exercise these rights, contact us at
            the information below. We will respond within the timeframe required by applicable law.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">8. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or your personal information, contact us at:<br />
            <strong className="text-slate-300">Alliance Trust Realty</strong><br />
            Hartford, CT 06103<br />
            Email: realty@alliancetrustct.com<br />
            Phone: (860) 305-4376
          </p>
        </section>
      </div>
    </div>
  );
}
