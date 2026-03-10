import { NextResponse } from 'next/server';
import { propertyMap } from '@/data/alliance/propertySamples';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const property = propertyMap[id];

  if (!property) {
    return NextResponse.json({ success: false, message: 'Property not found' }, { status: 404 });
  }

  return NextResponse.json({ success: true, property });
}
