import { NextResponse } from 'next/server';
import { propertySamples } from '@/data/alliance/propertySamples';
import type { PropertyType, PropertyStatus } from '@/data/alliance/propertySamples';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type    = searchParams.get('type') as PropertyType | null;
  const status  = searchParams.get('status') as PropertyStatus | null;
  const minPrice = searchParams.get('minPrice');
  const maxPrice = searchParams.get('maxPrice');

  let results = [...propertySamples];

  if (type)     results = results.filter((p) => p.type === type);
  if (status)   results = results.filter((p) => p.status === status);
  if (minPrice) results = results.filter((p) => p.listPrice >= parseInt(minPrice, 10));
  if (maxPrice) results = results.filter((p) => p.listPrice <= parseInt(maxPrice, 10));

  return NextResponse.json({
    success: true,
    count: results.length,
    properties: results,
  });
}
