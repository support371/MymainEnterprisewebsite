import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Alliance Trust Realty Terms of Service — the terms governing use of our website and advisory services.',
};

const EFFECTIVE = 'January 1, 2025';

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">Legal</p>
      <h1 className="text-3xl font-bold text-white mb-2">Terms of Service</h1>
      <p className="text-xs text-slate-500 mb-10">Effective Date: {EFFECTIVE}</p>

      <div className="prose prose-invert prose-sm max-w-none space-y-8 text-slate-400">
        <section>
          <h2 className="text-lg font-semibold text-white">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Alliance Trust Realty website (alliancetrustct.com or any subdomain thereof),
            you agree to be bound by these Terms of Service. If you do not agree, do not use this website.
            These Terms apply to all visitors, users, and clients.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">2. Services Described</h2>
          <p>
            Alliance Trust Realty is a licensed real estate brokerage providing residential buying and
            selling advisory, commercial real estate advisory, investment property analysis, independent
            mortgage guidance (educational only — we do not originate loans), investor education, and
            secure client onboarding services. Use of this website does not establish a brokerage relationship.
            A brokerage relationship is established only through a written representation agreement.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">3. Information Accuracy</h2>
          <p>
            Property listings, pricing, and market information on this website are provided for informational
            purposes and are believed to be reliable but are not guaranteed. All property information should
            be independently verified. Market conditions change; past performance of real estate markets
            does not guarantee future results.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">4. Not Financial or Legal Advice</h2>
          <p>
            Nothing on this website, including investment analysis, pro-forma models, mortgage comparisons,
            or educational content, constitutes financial, tax, investment, or legal advice. Always consult
            licensed financial advisors, CPAs, and attorneys before making real estate investment decisions.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">5. Intellectual Property</h2>
          <p>
            All content on this website — including text, graphics, logos, and software — is the property
            of Alliance Trust Realty or its licensors and is protected by copyright and trademark law.
            You may not reproduce, distribute, or create derivative works without prior written permission.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Alliance Trust Realty shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages arising from your use of
            this website or reliance on any information provided herein. Our total liability to you for
            any claim shall not exceed the amount paid by you for services in the preceding 12 months,
            or $100, whichever is greater.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">7. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of the State of Connecticut,
            without regard to its conflict of law provisions. Any dispute arising under these Terms shall
            be resolved in the state or federal courts located in Hartford County, Connecticut.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">8. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes become effective upon posting
            to the website. Continued use of the website after changes constitutes acceptance of the revised Terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">9. Contact</h2>
          <p>
            Questions about these Terms should be directed to:<br />
            <strong className="text-slate-300">Alliance Trust Realty</strong><br />
            Hartford, CT 06103<br />
            Email: realty@alliancetrustct.com
          </p>
        </section>
      </div>
    </div>
  );
}
