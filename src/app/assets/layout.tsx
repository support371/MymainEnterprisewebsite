import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Assets | GEM Cyber',
    default: 'Assets | GEM Cyber',
  },
};

export default function AssetsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
