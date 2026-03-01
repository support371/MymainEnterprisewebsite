import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Intel | GEM Cyber',
    default: 'Intel | GEM Cyber',
  },
};

export default function IntelLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
