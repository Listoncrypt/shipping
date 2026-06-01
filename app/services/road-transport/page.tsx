'use client';

import { ServiceDetailLayout } from '@/components/service-detail-layout';

export default function RoadTransportPage() {
  return (
    <ServiceDetailLayout
      title="ROAD TRANSPORT"
      icon="🚛"
      description="We partner with the leading trucking companies in North Europe. Our extensive network ensures seamless transport coverage across the continent."
      details={[
        'Our partnerships with Europe\'s most reliable trucking companies allow us to offer comprehensive road transport solutions.',
        'Whether you need a full truck load (FTL) or part truck load (PTL), we have the right vehicle for your cargo.',
        'We cover all major routes in Northern Europe with guaranteed delivery windows and professional drivers.',
        'Temperature-controlled and specialized vehicles are available for sensitive goods.',
      ]}
      features={[
        'Full and part truck loads available',
        'Express delivery options',
        'Temperature-controlled vehicles',
        'Professional, experienced drivers',
        'GPS tracking and live updates',
        'Coverage across Northern Europe',
        'Dedicated account management',
        'Competitive pricing structure',
      ]}
    />
  );
}
