import type { ReactNode } from 'react';
import { Suspense } from 'react';
import HubSubNav from '@/components/layout/HubSubNav';

export default function HubLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Suspense fallback={null}>
        <HubSubNav />
      </Suspense>
      {/* Content — desktop adds top padding for hub sub-nav bar (40px) */}
      <div className="lg:pt-10">{children}</div>
    </div>
  );
}
