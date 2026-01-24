import type { Service, ServiceCategory } from '../types';

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'housekeeping',
    name: 'Housekeeping & Laundry',
    description: 'Industrial detergents, premium linens, and laundry delivery services',
    icon: 'Home'
  },
  {
    id: 'kitchen',
    name: 'Food & Beverage (Horeca)',
    description: 'Kitchen detergents, cleaning tools, and catering supplies',
    icon: 'Utensils'
  },
  {
    id: 'amenities',
    name: 'Guest Amenities',
    description: 'Toiletries, branded kits, and room accessories',
    icon: 'Package'
  }
];

export const services: Service[] = [
  {
    id: 'detergents',
    title: 'Industrial Detergents',
    description: 'Heavy-duty powders and liquid emulsifiers for high-turnover hotel linens',
    category: 'housekeeping',
    icon: 'Droplets',
    features: [
      'Heavy-duty cleaning power',
      'Eco-friendly options available',
      'Bulk pricing for hotels',
      'Fast delivery in Nairobi'
    ],
    trustBadges: ['Eco-Friendly', 'NEMA Approved', '24hr Delivery']
  },
  {
    id: 'linens',
    title: 'Premium Linen Supply',
    description: '200-400 thread count bedsheets, plush terry towels, and branded bathrobes',
    category: 'housekeeping',
    icon: 'BedDouble',
    features: [
      '200-400 thread count options',
      'Custom branding available',
      'Durability guaranteed',
      'White-glove delivery'
    ],
    trustBadges: ['Premium Quality', 'Custom Branding', 'Fast Delivery']
  },
  {
    id: 'laundry-service',
    title: 'White-Label Laundry Service',
    description: 'Professional laundry delivery for Airbnbs and boutique hotels',
    category: 'housekeeping',
    icon: 'Truck',
    features: [
      'Same-day pickup & delivery',
      'Custom branding options',
      'Online tracking system',
      'Flexible scheduling'
    ],
    trustBadges: ['24/7 Service', 'Real-time Tracking', 'Eco-Friendly']
  },
  {
    id: 'kitchen-chemicals',
    title: 'Kitchen Chemicals',
    description: 'Food-grade sanitizers, degreasers, and dishwashing solutions',
    category: 'kitchen',
    icon: 'Beaker',
    features: [
      'Food-safe certified',
      'Commercial-grade strength',
      'Eco-friendly options',
      'Safety training included'
    ],
    trustBadges: ['Food Grade', 'NSF Certified', 'Safe Handling']
  },
  {
    id: 'cleaning-equipment',
    title: 'Cleaning Equipment',
    description: 'Color-coded cloths, industrial mops, and protective gear',
    category: 'kitchen',
    icon: 'Wrench',
    features: [
      'Color-coded system',
      'Industrial durability',
      'Staff training available',
      'Bulk discounts'
    ],
    trustBadges: ['Professional Grade', 'Training Support', 'Bulk Pricing']
  },
  {
    id: 'eco-toiletries',
    title: 'Eco-Friendly Toiletries',
    description: 'Biodegradable soaps and bamboo vanity kits for eco-lodges',
    category: 'amenities',
    icon: 'Leaf',
    features: [
      '100% biodegradable',
      'Bamboo packaging',
      'Custom scents available',
      'Bulk supply options'
    ],
    trustBadges: ['Biodegradable', 'Zero Waste', 'Kenyan Made']
  },
  {
    id: 'bulk-dispensers',
    title: 'Bulk Dispensers',
    description: '5L dispensers for shampoo and shower gel to reduce plastic waste',
    category: 'amenities',
    icon: 'Database',
    features: [
      '5L capacity options',
      'Wall-mounted design',
      'Refill service available',
      'Custom branding'
    ],
    trustBadges: ['Eco-Friendly', 'Cost Effective', 'Maintenance Free']
  },
  {
    id: 'branded-kits',
    title: 'Branded Amenity Kits',
    description: 'Custom-branded vanity kits and welcome packages',
    category: 'amenities',
    icon: 'Gift',
    features: [
      'Full customization',
      'Premium materials',
      'Fast turnaround',
      'Design support'
    ],
    trustBadges: ['Custom Design', 'Premium Quality', 'Quick Delivery']
  }
];