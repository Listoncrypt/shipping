'use client';

import { Card } from '@/components/ui/card';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="bg-background">
      

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">WE ARE BLUE</h1>
          <p className="text-white/90 text-lg max-w-3xl">
            A Nantes-based subsidiary of Blue Water Shipping SARL, dedicated to maritime excellence
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Blue Shipping was founded in Nantes with the mission to revolutionize maritime logistics. Our team brings together decades of industry experience and a passion for excellence.
                </p>
                <p>
                  We believe in transparent communication, reliable service, and sustainable practices. Every shipment receives our full attention and professional care.
                </p>
                <p>
                  <strong>This dedicated tracking portal was purpose-built to allow our customers to easily monitor their tracking progress faster and more efficiently than the standard process on our original corporate website.</strong>
                </p>
                <p>
                  As a subsidiary of Blue Water Shipping SARL, we leverage the strength of a larger organization while maintaining the agility and personal touch of a regional specialist.
                </p>
              </div>
            </div>
            <div className="relative h-80 bg-gradient-to-br from-accent/30 to-transparent rounded-lg overflow-hidden flex items-center justify-center text-6xl">
              👥
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '20+', label: 'Years Experience' },
              { number: '150+', label: 'Ports Served' },
              { number: '1000+', label: 'Annual Shipments' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'RELIABILITY',
                description: 'We deliver on our promises, every time. Your cargo gets to its destination safely and on schedule.',
              },
              {
                title: 'TRANSPARENCY',
                description: 'Clear communication and honest pricing. No hidden fees or surprises, just straightforward service.',
              },
              {
                title: 'SUSTAINABILITY',
                description: 'We care about our planet. Green practices and carbon-neutral options are core to our operations.',
              },
            ].map((value, idx) => (
              <Card key={idx} className="bg-white border-0 shadow-md p-8 text-center hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-foreground mb-3 uppercase text-lg">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-muted/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Team</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-center mb-8">
            Our experienced team of maritime professionals is dedicated to providing the highest level of service. With expertise spanning shipping, customs, logistics, and operations, we&apos;re equipped to handle any challenge.
          </p>
          <div className="text-center">
            <Link href="/contact" className="bg-primary text-primary-foreground font-bold px-8 py-3 rounded hover:opacity-90 inline-block">
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>

      
    </main>
  );
}
