import { NextResponse } from 'next/server';

type ConsultationBody = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  message?: string;
  sourcePage?: string;
};

const VALID_TIMELINES = [
  'Immediate (within 30 days)',
  '1–3 months',
  '3–6 months',
  '6–12 months',
  'Just exploring',
];

const VALID_SERVICES = [
  'Residential Buying',
  'Residential Selling',
  'Commercial Real Estate',
  'Investment Property Analysis',
  'Mortgage Guidance',
  'Investor Education',
  'Portfolio Support',
  'General Inquiry',
];

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function GET() {
  return NextResponse.json({
    endpoint: '/api/alliance/consultation',
    methods: ['GET', 'POST'],
    description: 'Schedule a consultation with Alliance Trust Realty advisory team.',
    requiredFields: ['name', 'email', 'phone', 'service', 'timeline'],
    optionalFields: ['budget', 'message', 'sourcePage'],
    validTimelines: VALID_TIMELINES,
    validServices: VALID_SERVICES,
  });
}

export async function POST(request: Request) {
  let body: ConsultationBody;
  try {
    body = await request.json() as ConsultationBody;
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid JSON body' }, { status: 400 });
  }

  const { name, email, phone, service, timeline, budget, message: _message, sourcePage } = body;

  const missing: string[] = [];
  if (!name?.trim())     missing.push('name');
  if (!email?.trim())    missing.push('email');
  if (!phone?.trim())    missing.push('phone');
  if (!service?.trim())  missing.push('service');
  if (!timeline?.trim()) missing.push('timeline');

  if (missing.length > 0) {
    return NextResponse.json(
      { success: false, message: `Missing required fields: ${missing.join(', ')}` },
      { status: 400 },
    );
  }

  if (!validateEmail(email!)) {
    return NextResponse.json({ success: false, message: 'Invalid email address format' }, { status: 400 });
  }

  if (timeline && !VALID_TIMELINES.includes(timeline)) {
    return NextResponse.json({ success: false, message: 'Invalid timeline value' }, { status: 400 });
  }

  console.log('[alliance/consultation] New consultation request:', {
    name: name!.trim(),
    email: email!.toLowerCase().trim(),
    phone: phone!.trim(),
    service: service!.trim(),
    timeline: timeline!.trim(),
    budget: budget ?? 'Not disclosed',
    sourcePage: sourcePage ?? '/alliance-trust-realty/contact',
    ts: new Date().toISOString(),
  });

  return NextResponse.json({
    success: true,
    message: 'Consultation request received. An advisor will contact you within one business day to confirm timing.',
  });
}
