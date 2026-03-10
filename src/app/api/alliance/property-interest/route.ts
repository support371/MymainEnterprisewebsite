import { NextResponse } from 'next/server';
import { propertyMap } from '@/data/alliance/propertySamples';

type PropertyInterestBody = {
  name?: string;
  email?: string;
  phone?: string;
  propertyId?: string;
  propertyAddress?: string;
  purchaseType?: string;
  financing?: string;
  message?: string;
  sourcePage?: string;
};

const VALID_PURCHASE_TYPES = ['Owner-occupied', 'Investment / Rental', 'Commercial / Business use', 'Undecided'];
const VALID_FINANCING = ['Cash', 'Pre-approved mortgage', 'Need mortgage guidance', 'Exploring options'];

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function GET() {
  return NextResponse.json({
    endpoint: '/api/alliance/property-interest',
    methods: ['GET', 'POST'],
    description: 'Express interest in a specific Alliance Trust Realty property listing.',
    requiredFields: ['name', 'email', 'purchaseType', 'financing'],
    optionalFields: ['phone', 'propertyId', 'propertyAddress', 'message', 'sourcePage'],
    validPurchaseTypes: VALID_PURCHASE_TYPES,
    validFinancing: VALID_FINANCING,
  });
}

export async function POST(request: Request) {
  let body: PropertyInterestBody;
  try {
    body = await request.json() as PropertyInterestBody;
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid JSON body' }, { status: 400 });
  }

  const { name, email, phone, propertyId, propertyAddress, purchaseType, financing, message: _message, sourcePage } = body;

  const missing: string[] = [];
  if (!name?.trim())         missing.push('name');
  if (!email?.trim())        missing.push('email');
  if (!purchaseType?.trim()) missing.push('purchaseType');
  if (!financing?.trim())    missing.push('financing');

  if (missing.length > 0) {
    return NextResponse.json(
      { success: false, message: `Missing required fields: ${missing.join(', ')}` },
      { status: 400 },
    );
  }

  if (!validateEmail(email!)) {
    return NextResponse.json({ success: false, message: 'Invalid email address format' }, { status: 400 });
  }

  if (purchaseType && !VALID_PURCHASE_TYPES.includes(purchaseType)) {
    return NextResponse.json({ success: false, message: 'Invalid purchaseType value' }, { status: 400 });
  }

  if (financing && !VALID_FINANCING.includes(financing)) {
    return NextResponse.json({ success: false, message: 'Invalid financing value' }, { status: 400 });
  }

  // Look up property info if ID provided
  const property = propertyId ? propertyMap[propertyId] : undefined;
  const resolvedAddress = property
    ? `${property.address}, ${property.city}, ${property.state} ${property.zip}`
    : (propertyAddress ?? 'Not specified');

  console.log('[alliance/property-interest] New interest:', {
    name: name!.trim(),
    email: email!.toLowerCase().trim(),
    phone: phone?.trim() ?? '',
    propertyId: propertyId ?? 'N/A',
    propertyAddress: resolvedAddress,
    purchaseType: purchaseType!.trim(),
    financing: financing!.trim(),
    sourcePage: sourcePage ?? '/alliance-trust-realty/properties',
    ts: new Date().toISOString(),
  });

  return NextResponse.json({
    success: true,
    message: 'Your interest has been noted. An agent will reach out within one business day to arrange a showing.',
    property: property
      ? { id: property.id, address: resolvedAddress, listPrice: property.listPrice, status: property.status }
      : null,
  });
}
