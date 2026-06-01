'use client';

import { ServiceDetailLayout } from '@/components/service-detail-layout';

export default function WarehousingPage() {
  return (
    <ServiceDetailLayout
      title="WAREHOUSING"
      icon="📦"
      description="Full and professional handling of your cargo storage and distribution needs. Climate-controlled facilities with 24/7 security monitoring."
      details={[
        'Our modern warehouse facilities are strategically located to provide optimal coverage for European distribution.',
        'We offer flexible storage solutions for short-term and long-term needs with climate control options for sensitive goods.',
        'Our experienced team provides professional handling, quality control, and inventory management.',
        '24/7 security monitoring and insurance coverage ensure your cargo is always protected.',
      ]}
      features={[
        'Climate-controlled storage',
        'Flexible contract terms',
        'Real-time inventory tracking',
        '24/7 security and monitoring',
        'Professional packing services',
        'Cross-docking facilities',
        'Quality control inspections',
        'Insurance coverage included',
      ]}
    />
  );
}
