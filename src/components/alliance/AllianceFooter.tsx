import Link from 'next/link';
import { Building2, Phone, Mail, MapPin } from 'lucide-react';

const footerLinks = {
  Services: [
    { label: 'Residential Buying',   href: '/alliance-trust-realty/services#residential-buying' },
    { label: 'Residential Selling',  href: '/alliance-trust-realty/services#residential-selling' },
    { label: 'Commercial Real Estate', href: '/alliance-trust-realty/services#commercial-real-estate' },
    { label: 'Investment Advisory',  href: '/alliance-trust-realty/investment-advisory' },
    { label: 'Mortgage Guidance',    href: '/alliance-trust-realty/mortgage-guidance' },
    { label: 'Investor Education',   href: '/alliance-trust-realty/investor-education' },
  ],
  Company: [
    { label: 'About Alliance Trust', href: '/alliance-trust-realty/about' },
    { label: 'Properties',           href: '/alliance-trust-realty/properties' },
    { label: 'Contact Us',           href: '/alliance-trust-realty/contact' },
    { label: 'Client Portal',        href: '/alliance-trust-realty/portal' },
  ],
  Legal: [
    { label: 'Privacy Policy',       href: '/alliance-trust-realty/privacy' },
    { label: 'Terms of Service',     href: '/alliance-trust-realty/terms' },
    { label: 'Disclosures',          href: '/alliance-trust-realty/disclosures' },
  ],
};

export default function AllianceFooter() {
  return (
    <footer className="border-t border-amber-800/20 bg-slate-950/80 mt-20">
      <div className="mx-auto max-w-6xl px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/alliance-trust-realty" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-amber-600">
                <Building2 className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-bold text-amber-300">Alliance Trust Realty</span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Premium residential and commercial real estate advisory. Serving Connecticut and the broader Northeast market.
            </p>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-amber-500/70" />
                <span>(860) 305-4376</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-amber-500/70" />
                <span>realty@alliancetrustct.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 text-amber-500/70 mt-0.5 flex-shrink-0" />
                <span>Hartford, CT 06103</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-amber-400">{heading}</h4>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-xs text-slate-400 hover:text-amber-300 transition">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-amber-800/20 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} Alliance Trust Realty. All rights reserved. Licensed Real Estate Brokerage.
          </p>
          <p className="text-[11px] text-slate-600">
            A division of{' '}
            <Link href="/home" className="hover:text-slate-400 transition">GEM CYBER</Link>
          </p>
        </div>

        {/* Required real estate disclaimer */}
        <p className="mt-4 text-[10px] text-slate-600 leading-relaxed">
          Alliance Trust Realty is a licensed real estate brokerage. All information is deemed reliable but not guaranteed.
          This is not an offer to buy or sell securities. Investment property analysis is provided for informational purposes only and
          does not constitute financial, tax, or legal advice. Please consult licensed professionals before making investment decisions.
        </p>
      </div>
    </footer>
  );
}
