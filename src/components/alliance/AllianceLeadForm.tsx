"use client";

import { useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';

type FormVariant = 'contact' | 'consultation' | 'property-interest' | 'request-access';

interface AllianceLeadFormProps {
  variant: FormVariant;
  propertyId?: string;
  propertyAddress?: string;
  className?: string;
}

type FieldConfig = {
  id: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  required: boolean;
  placeholder?: string;
  options?: string[];
};

const SERVICE_OPTIONS = [
  'Residential Buying',
  'Residential Selling',
  'Commercial Real Estate',
  'Investment Property Analysis',
  'Mortgage Guidance',
  'Investor Education',
  'Portfolio Support',
  'General Inquiry',
];

const FIELD_SETS: Record<FormVariant, FieldConfig[]> = {
  contact: [
    { id: 'name', label: 'Full Name', type: 'text', required: true, placeholder: 'Jane Smith' },
    { id: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'jane@example.com' },
    { id: 'phone', label: 'Phone', type: 'tel', required: false, placeholder: '(860) 555-0100' },
    { id: 'service', label: 'Service Interest', type: 'select', required: true, options: SERVICE_OPTIONS },
    { id: 'message', label: 'Message', type: 'textarea', required: true, placeholder: 'How can Alliance Trust Realty help you?' },
  ],
  consultation: [
    { id: 'name', label: 'Full Name', type: 'text', required: true, placeholder: 'Jane Smith' },
    { id: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'jane@example.com' },
    { id: 'phone', label: 'Phone', type: 'tel', required: true, placeholder: '(860) 555-0100' },
    { id: 'service', label: 'Consultation Type', type: 'select', required: true, options: SERVICE_OPTIONS },
    { id: 'budget', label: 'Budget Range', type: 'select', required: false,
      options: ['Under $300K', '$300K–$500K', '$500K–$750K', '$750K–$1M', '$1M–$2M', '$2M+', 'Not disclosed'] },
    { id: 'timeline', label: 'Timeline', type: 'select', required: true,
      options: ['Immediate (within 30 days)', '1–3 months', '3–6 months', '6–12 months', 'Just exploring'] },
    { id: 'message', label: 'Additional Details', type: 'textarea', required: false, placeholder: 'Tell us more about your goals...' },
  ],
  'property-interest': [
    { id: 'name', label: 'Full Name', type: 'text', required: true, placeholder: 'Jane Smith' },
    { id: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'jane@example.com' },
    { id: 'phone', label: 'Phone', type: 'tel', required: false, placeholder: '(860) 555-0100' },
    { id: 'purchaseType', label: 'Purchase Intent', type: 'select', required: true,
      options: ['Owner-occupied', 'Investment / Rental', 'Commercial / Business use', 'Undecided'] },
    { id: 'financing', label: 'Financing', type: 'select', required: true,
      options: ['Cash', 'Pre-approved mortgage', 'Need mortgage guidance', 'Exploring options'] },
    { id: 'message', label: 'Questions or Comments', type: 'textarea', required: false, placeholder: 'Any specific questions about this property?' },
  ],
  'request-access': [
    { id: 'name', label: 'Full Name', type: 'text', required: true, placeholder: 'Jane Smith' },
    { id: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'jane@example.com' },
    { id: 'phone', label: 'Phone', type: 'tel', required: true, placeholder: '(860) 555-0100' },
    { id: 'role', label: 'Your Role', type: 'select', required: true,
      options: ['Home Buyer', 'Home Seller', 'Real Estate Investor', 'Business Owner', 'Portfolio Manager', 'Other'] },
    { id: 'message', label: 'Why do you need portal access?', type: 'textarea', required: true, placeholder: 'Please describe your need for secure portal access...' },
  ],
};

const ENDPOINT_MAP: Record<FormVariant, string> = {
  contact:           '/api/alliance/contact',
  consultation:      '/api/alliance/consultation',
  'property-interest': '/api/alliance/property-interest',
  'request-access':  '/api/alliance/request-access',
};

const HEADING_MAP: Record<FormVariant, string> = {
  contact:           'Send Us a Message',
  consultation:      'Schedule a Consultation',
  'property-interest': 'Express Interest',
  'request-access':  'Request Portal Access',
};

export default function AllianceLeadForm({ variant, propertyId, propertyAddress, className = '' }: AllianceLeadFormProps) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fields = FIELD_SETS[variant];

  function handleChange(id: string, value: string) {
    setValues((prev) => ({ ...prev, [id]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const payload = { ...values, propertyId, propertyAddress, sourcePage: `/alliance-trust-realty/${variant}` };
      const res = await fetch(ENDPOINT_MAP[variant], {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json() as { success: boolean; message?: string };
      if (!res.ok || !data.success) throw new Error(data.message ?? 'Submission failed');
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className={`flex flex-col items-center justify-center gap-4 rounded-xl border border-emerald-700/40 bg-emerald-900/10 p-8 text-center ${className}`}>
        <CheckCircle2 className="h-10 w-10 text-emerald-400" />
        <div>
          <p className="text-base font-semibold text-white">Received!</p>
          <p className="text-sm text-slate-400 mt-1">A member of our team will be in touch within one business day.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`rounded-xl border border-amber-800/25 bg-slate-900/60 p-6 ${className}`}>
      <h3 className="text-base font-semibold text-white mb-5">{HEADING_MAP[variant]}</h3>

      {propertyAddress && (
        <p className="text-xs text-amber-400 bg-amber-400/10 rounded-lg px-3 py-2 mb-4">
          Re: {propertyAddress}
        </p>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {fields.map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id} className="block text-xs font-medium text-slate-300 mb-1">
              {field.label}{field.required && <span className="text-amber-400 ml-0.5">*</span>}
            </label>

            {field.type === 'textarea' ? (
              <textarea
                id={field.id}
                required={field.required}
                placeholder={field.placeholder}
                rows={3}
                value={values[field.id] ?? ''}
                onChange={(e) => handleChange(field.id, e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-800/70 px-3 py-2 text-sm text-white
                           placeholder:text-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition resize-none"
              />
            ) : field.type === 'select' ? (
              <select
                id={field.id}
                required={field.required}
                value={values[field.id] ?? ''}
                onChange={(e) => handleChange(field.id, e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-800/70 px-3 py-2 text-sm text-white
                           focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition"
              >
                <option value="">Select an option</option>
                {field.options!.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            ) : (
              <input
                id={field.id}
                type={field.type}
                required={field.required}
                placeholder={field.placeholder}
                value={values[field.id] ?? ''}
                onChange={(e) => handleChange(field.id, e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-800/70 px-3 py-2 text-sm text-white
                           placeholder:text-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition"
              />
            )}
          </div>
        ))}

        {error && (
          <p className="rounded-lg border border-red-700/40 bg-red-900/20 px-3 py-2 text-xs text-red-400">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600
                     px-4 py-2.5 text-sm font-semibold text-white shadow-[0_0_16px_rgba(251,191,36,0.25)]
                     hover:from-amber-400 hover:to-amber-500 disabled:opacity-60 transition"
        >
          {loading && <Loader2 className="h-4 w-4 animate-spin" />}
          {loading ? 'Sending…' : HEADING_MAP[variant]}
        </button>
      </form>
    </div>
  );
}
