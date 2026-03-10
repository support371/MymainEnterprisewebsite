import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

// Legacy bridge route — permanently moved to /alliance-trust-realty
export default function AllianceTrustPage() {
  redirect('/alliance-trust-realty');
}
