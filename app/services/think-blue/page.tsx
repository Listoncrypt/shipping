'use client';

import { ServiceDetailLayout } from '@/components/service-detail-layout';

export default function ThinkBluePage() {
  return (
    <ServiceDetailLayout
      title="THINK BLUE"
      icon="🌍"
      description="We at Blue Shipping care about our environment and future sustainability. Carbon-neutral shipping options available."
      details={[
        'Sustainability is at the core of our business philosophy. We are committed to reducing our environmental impact across all operations.',
        'We offer carbon-neutral shipping options and actively work to minimize fuel consumption and emissions.',
        'Our fleet includes modern, fuel-efficient vessels and we continuously invest in green technologies.',
        'By choosing Blue Shipping, you\'re supporting responsible maritime practices and a cleaner future.',
      ]}
      features={[
        'Carbon-neutral shipping available',
        'Fuel-efficient modern vessels',
        'Emissions reduction programs',
        'Sustainable packaging options',
        'Green port partnerships',
        'Environmental compliance certification',
        'Transparent sustainability reporting',
        'Renewable energy initiatives',
      ]}
    />
  );
}
