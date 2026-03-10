import { NextResponse } from 'next/server';

type RequestAccessBody = {
  name?: string;
  email?: string;
  phone?: string;
  role?: string;
  message?: string;
  sourcePage?: string;
};

const VALID_ROLES = [
  'Home Buyer',
  'Home Seller',
  'Real Estate Investor',
  'Business Owner',
  'Portfolio Manager',
  'Other',
];

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function GET() {
  return NextResponse.json({
    endpoint: '/api/alliance/request-access',
    methods: ['GET', 'POST'],
    description: 'Request access to the Alliance Trust Realty secure client portal.',
    requiredFields: ['name', 'email', 'phone', 'role', 'message'],
    optionalFields: ['sourcePage'],
    validRoles: VALID_ROLES,
  });
}

export async function POST(request: Request) {
  let body: RequestAccessBody;
  try {
    body = await request.json() as RequestAccessBody;
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid JSON body' }, { status: 400 });
  }

  const { name, email, phone, role, message, sourcePage } = body;

  const missing: string[] = [];
  if (!name?.trim())    missing.push('name');
  if (!email?.trim())   missing.push('email');
  if (!phone?.trim())   missing.push('phone');
  if (!role?.trim())    missing.push('role');
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

  if (role && !VALID_ROLES.includes(role)) {
    return NextResponse.json({ success: false, message: 'Invalid role value' }, { status: 400 });
  }

  console.log('[alliance/request-access] Portal access request:', {
    name: name!.trim(),
    email: email!.toLowerCase().trim(),
    phone: phone!.trim(),
    role: role!.trim(),
    sourcePage: sourcePage ?? '/alliance-trust-realty/portal',
    ts: new Date().toISOString(),
  });

  return NextResponse.json({
    success: true,
    message: 'Portal access request received. Our team will contact you within 1–2 business days to begin the identity verification process.',
  });
}
