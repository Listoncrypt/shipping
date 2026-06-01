'use client';

import { ServiceDetailLayout } from '@/components/service-detail-layout';

export default function AirfreightPage() {
  return (
    <ServiceDetailLayout
      title="AIRFREIGHT"
      icon="✈️"
      description="The fastest way to transport your goods across continents with guaranteed delivery. Ideal for time-sensitive shipments and perishable goods."
      details={[
        'When time is critical, airfreight is the solution. We provide fast, reliable air transport services to destinations worldwide.',
        'Our relationships with major airlines and cargo handlers ensure competitive rates without compromising on speed or reliability.',
        'From urgent documents to valuable goods, we handle your cargo with care and professionalism.',
        'We manage all customs clearance, documentation, and ground handling to ensure smooth delivery.',
      ]}
      features={[
        'Fast delivery worldwide',
        'Competitive air freight rates',
        'Handling of perishable goods',
        'Customs documentation included',
        'Insurance and liability coverage',
        'Real-time flight tracking',
        'Express delivery options',
        'Hazmat cargo handling available',
      ]}
    />
  );
}
