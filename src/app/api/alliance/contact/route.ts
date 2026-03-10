import { NextResponse } from 'next/server';

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  sourcePage?: string;
};

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function GET() {
  return NextResponse.json({
    endpoint: '/api/alliance/contact',
    methods: ['GET', 'POST'],
    description: 'Alliance Trust Realty general contact form handler.',
    requiredFields: ['name', 'email', 'service', 'message'],
    optionalFields: ['phone', 'sourcePage'],
    serviceOptions: [
      'Residential Buying', 'Residential Selling', 'Commercial Real Estate',
      'Investment Property Analysis', 'Mortgage Guidance', 'Investor Education',
      'Portfolio Support', 'General Inquiry',
    ],
  });
}

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = await request.json() as ContactBody;
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid JSON body' }, { status: 400 });
  }

  const { name, email, phone, service, message, sourcePage } = body;

  const missing: string[] = [];
  if (!name?.trim())    missing.push('name');
  if (!email?.trim())   missing.push('email');
  if (!service?.trim()) missing.push('service');
  if (!message?.trim()) missing.push('message');

  if (missing.length > 0) {
    return NextResponse.json(
      { success: false, message: `Missing required fields: ${missing.join(', ')}` },
      { status: 400 },
    );
  }

  if (!validateEmail(email!)) {
    return NextResponse.json({ success: false, message: 'Invalid email address format' }, { status: 400 });
  }

  console.log('[alliance/contact] New contact:', {
    name: name!.trim(),
    email: email!.toLowerCase().trim(),
    phone: phone?.trim() ?? '',
    service: service!.trim(),
    sourcePage: sourcePage ?? '/alliance-trust-realty/contact',
    ts: new Date().toISOString(),
  });

  return NextResponse.json({ success: true, message: 'Your message has been received. We will respond within one business day.' });
}
