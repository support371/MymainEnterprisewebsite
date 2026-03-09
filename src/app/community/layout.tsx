import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Community | GEM Cyber',
    default: 'Community | GEM Cyber',
  },
};

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
