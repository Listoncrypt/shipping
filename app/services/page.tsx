'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main className="bg-background">
      

      {/* Page Title Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">OUR SERVICES</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Comprehensive maritime and logistics solutions for all your shipping needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'OCEAN FREIGHT',
                desc: 'Both LCL & FCL with worldwide coverage. With 20+ FCL and LCL shipments weekly, we provide reliable ocean freight solutions to over 150 ports globally.',
                icon: '🌊',
                href: '/services/ocean-freight',
              },
              {
                title: 'ROAD TRANSPORT',
                desc: 'We partner with the leading trucking companies in North Europe. Our extensive network ensures seamless transport coverage across the continent.',
                icon: '🚛',
                href: '/services/road-transport',
              },
              {
                title: 'AIRFREIGHT',
                desc: 'The fastest way to transport your goods across continents with guaranteed delivery. Ideal for time-sensitive shipments and perishable goods.',
                icon: '✈️',
                href: '/services/airfreight',
              },
              {
                title: 'WAREHOUSING',
                desc: 'Full and professional handling of your cargo storage and distribution needs. Climate-controlled facilities with 24/7 security monitoring.',
                icon: '📦',
                href: '/services/warehousing',
              },
              {
                title: 'IT SOLUTIONS',
                desc: 'State-of-the-art tracking and management systems for your shipments. Real-time visibility from origin to destination.',
                icon: '💻',
                href: '/services/it-solutions',
              },
              {
                title: 'THINK BLUE',
                desc: 'We at Blue Shipping care about our environment and future sustainability. Carbon-neutral shipping options available.',
                icon: '🌍',
                href: '/services/think-blue',
              },
            ].map((service, idx) => (
              <Card key={idx} className="bg-white border-0 shadow-md p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="font-bold text-foreground mb-3 uppercase text-lg">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.desc}</p>
                <Link href={service.href} className="text-accent font-semibold hover:underline">
                  Learn more →
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      
    </main>
  );
}
