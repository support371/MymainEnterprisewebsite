import type { Metadata } from 'next';
import AllianceHeader from '@/components/alliance/AllianceHeader';
import AllianceFooter from '@/components/alliance/AllianceFooter';

export const metadata: Metadata = {
  title: {
    default: 'Alliance Trust Realty | Licensed Real Estate Professionals',
    template: '%s | Alliance Trust Realty',
  },
  description:
    'Alliance Trust Realty — premium residential buying, selling, commercial real estate, investment advisory, and mortgage guidance. Serving Connecticut and the Northeast.',
};

export default function AllianceTrustRealtyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AllianceHeader />
      <main className="min-h-[60vh]">
        {children}
      </main>
      <AllianceFooter />
    </>
  );
}
