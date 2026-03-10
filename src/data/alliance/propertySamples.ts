export type PropertyType = 'residential' | 'commercial' | 'multi-family' | 'land';
export type PropertyStatus = 'available' | 'under-contract' | 'sold' | 'coming-soon';

export type PropertySample = {
  id: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  type: PropertyType;
  status: PropertyStatus;
  listPrice: number;
  sqft: number;
  bedrooms?: number;
  bathrooms?: number;
  yearBuilt: number;
  lotSize?: string;
  description: string;
  highlights: string[];
  capRate?: number;       // annual gross yield % for investment props
  grossRent?: number;     // monthly gross rent for investment props
};

export const propertySamples: PropertySample[] = [
  {
    id: 'prop-001',
    address: '142 Maple Ridge Drive',
    city: 'Hartford',
    state: 'CT',
    zip: '06103',
    type: 'residential',
    status: 'available',
    listPrice: 489_000,
    sqft: 2_450,
    bedrooms: 4,
    bathrooms: 2.5,
    yearBuilt: 2001,
    lotSize: '0.32 acres',
    description:
      'Colonial-style four-bedroom in a quiet cul-de-sac. Updated kitchen with quartz counters, hardwood throughout, two-car garage, and a finished basement.',
    highlights: ['Updated kitchen', 'Hardwood floors', 'Finished basement', 'Two-car garage'],
  },
  {
    id: 'prop-002',
    address: '880 Farmington Avenue, Suite 200',
    city: 'West Hartford',
    state: 'CT',
    zip: '06119',
    type: 'commercial',
    status: 'available',
    listPrice: 1_250_000,
    sqft: 4_800,
    yearBuilt: 1998,
    description:
      'Class-B medical/professional office suite in a well-maintained mixed-use building. NNN lease with three years remaining at $28/SF. Strong tenant credit profile.',
    highlights: ['NNN lease', '$28/SF current rent', '3 yrs remaining term', 'Medical-grade buildout'],
    capRate: 6.2,
    grossRent: 11_200,
  },
  {
    id: 'prop-003',
    address: '55 Broad Street',
    city: 'New Britain',
    state: 'CT',
    zip: '06051',
    type: 'multi-family',
    status: 'available',
    listPrice: 695_000,
    sqft: 5_100,
    yearBuilt: 1978,
    lotSize: '0.18 acres',
    description:
      'Six-unit multi-family property. Five units occupied at market rent; one vacant for value-add. Separately metered electric. Strong cash flow from day one.',
    highlights: ['6 units', '5 occupied', 'Separately metered', 'Value-add unit'],
    capRate: 7.8,
    grossRent: 7_200,
  },
  {
    id: 'prop-004',
    address: '23 Crestwood Lane',
    city: 'Glastonbury',
    state: 'CT',
    zip: '06033',
    type: 'residential',
    status: 'under-contract',
    listPrice: 610_000,
    sqft: 3_100,
    bedrooms: 5,
    bathrooms: 3,
    yearBuilt: 2008,
    lotSize: '0.55 acres',
    description:
      "Custom-built five-bedroom contemporary on half-acre lot. Open floor plan, chef's kitchen, three-season sunroom, and in-ground pool.",
    highlights: ['Chef kitchen', 'In-ground pool', 'Three-season sunroom', 'Custom build'],
  },
  {
    id: 'prop-005',
    address: '1200 Asylum Avenue',
    city: 'Hartford',
    state: 'CT',
    zip: '06105',
    type: 'commercial',
    status: 'coming-soon',
    listPrice: 2_800_000,
    sqft: 12_400,
    yearBuilt: 2015,
    description:
      'Modern mixed-use building — retail on ground floor, eight residential units above. Fully occupied. Premier location with strong foot traffic.',
    highlights: ['Mixed-use', 'Fully occupied', 'Retail + 8 residential', 'Premier location'],
    capRate: 5.9,
    grossRent: 27_500,
  },
  {
    id: 'prop-006',
    address: '401 Riverside Circle',
    city: 'Windsor',
    state: 'CT',
    zip: '06095',
    type: 'residential',
    status: 'available',
    listPrice: 379_000,
    sqft: 1_850,
    bedrooms: 3,
    bathrooms: 2,
    yearBuilt: 1995,
    lotSize: '0.27 acres',
    description:
      'Well-maintained three-bedroom ranch with updated bathrooms, new roof (2022), and a large private backyard. Single-floor living, ideal for families and downsizers.',
    highlights: ['New roof 2022', 'Updated baths', 'Single-floor living', 'Private backyard'],
  },
];

export const propertyMap = Object.fromEntries(
  propertySamples.map((p) => [p.id, p]),
) as Record<string, PropertySample>;

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(price);
}

export function formatSqft(sqft: number): string {
  return new Intl.NumberFormat('en-US').format(sqft) + ' sq ft';
}
