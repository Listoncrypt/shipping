'use client';

import { ServiceDetailLayout } from '@/components/service-detail-layout';

export default function OceanFreightPage() {
  return (
    <ServiceDetailLayout
      title="OCEAN FREIGHT"
      icon="🌊"
      description="Both LCL & FCL with worldwide coverage. With 20+ FCL and LCL shipments weekly, we provide reliable ocean freight solutions to over 150 ports globally."
      details={[
        'Our ocean freight services cover both Full Container Load (FCL) and Less Than Container Load (LCL) options, providing flexibility for shipments of any size.',
        'With established relationships at major ports across Europe, Asia, Americas, and beyond, we ensure your cargo reaches its destination safely and on time.',
        'We handle all documentation, customs clearance, and port procedures so you can focus on your business.',
        'Real-time tracking allows you to monitor your shipment at every stage of its journey across the seas.',
      ]}
      features={[
        'Weekly FCL and LCL departures',
        'Coverage to 150+ ports worldwide',
        'Complete customs documentation',
        'Real-time shipment tracking',
        'Competitive rates and flexible terms',
        'Expert handling of special cargo',
        'Door-to-door delivery options',
        'Insurance coverage available',
      ]}
    />
  );
}
