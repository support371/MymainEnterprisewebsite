import AllianceHeader from './AllianceHeader';
import AllianceFooter from './AllianceFooter';

interface AllianceLayoutProps {
  children: React.ReactNode;
}

export default function AllianceLayout({ children }: AllianceLayoutProps) {
  return (
    <div className="min-h-screen">
      <AllianceHeader />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        {children}
      </div>
      <AllianceFooter />
    </div>
  );
}
