import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import AllianceLeadForm from '@/components/alliance/AllianceLeadForm';

export const metadata: Metadata = {
  title: 'Contact Alliance Trust Realty',
  description: 'Contact Alliance Trust Realty — schedule a consultation, ask about a property, or speak with a licensed advisor.',
};

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '(860) 305-4376', href: 'tel:+18603054376' },
  { icon: Mail, label: 'Email', value: 'realty@alliancetrustct.com', href: 'mailto:realty@alliancetrustct.com' },
  { icon: MapPin, label: 'Office', value: 'Hartford, CT 06103' },
  { icon: Clock, label: 'Hours', value: 'Mon–Fri 8am–6pm · Sat 9am–4pm ET' },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
      <div className="max-w-2xl mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">Contact Us</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Let&apos;s Start the Conversation
        </h1>
        <p className="text-slate-400 leading-relaxed">
          Whether you&apos;re buying, selling, investing, or just exploring your options,
          our team is ready to help. Reach out and we&apos;ll respond within one business day.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact info */}
        <div>
          <div className="space-y-5 mb-10">
            {contactInfo.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.label} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-600/15 border border-amber-600/25 flex-shrink-0">
                    <Icon className="h-4 w-4 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500 mb-0.5">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-sm text-white hover:text-amber-300 transition">{c.value}</a>
                    ) : (
                      <p className="text-sm text-white">{c.value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
            <h3 className="text-sm font-semibold text-white mb-3">What to Expect</h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <span className="h-1 w-1 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                We respond to all inquiries within one business day
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1 w-1 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                Initial consultations are complimentary and no-obligation
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1 w-1 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                You&apos;ll be connected with a licensed advisor — not a sales representative
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1 w-1 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                All communications are confidential and protected
              </li>
            </ul>
          </div>
        </div>

        <AllianceLeadForm variant="contact" />
      </div>
    </div>
  );
}
