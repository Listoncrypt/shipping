'use client';

import { ServiceDetailLayout } from '@/components/service-detail-layout';

export default function ITSolutionsPage() {
  return (
    <ServiceDetailLayout
      title="IT SOLUTIONS"
      icon="💻"
      description="State-of-the-art tracking and management systems for your shipments. Real-time visibility from origin to destination."
      details={[
        'Our advanced IT systems provide complete visibility of your shipments from pickup to delivery.',
        'Real-time GPS tracking, automated notifications, and detailed reporting help you manage your logistics efficiently.',
        'Integration with your existing systems is seamless, allowing you to access data exactly how you need it.',
        'Our secure, cloud-based platform ensures your data is always accessible and protected.',
      ]}
      features={[
        'Real-time GPS tracking',
        'Automated status notifications',
        'Detailed analytics and reporting',
        'API integration available',
        'Mobile app access',
        'Customizable dashboards',
        'Document management system',
        'EDI/XML compatibility',
      ]}
    />
  );
}
