import { Card } from '@/components/ui/card';
import Link from 'next/link';

interface ServiceDetailLayoutProps {
  title: string;
  icon: string;
  description: string;
  details: string[];
  features: string[];
}

export function ServiceDetailLayout({
  title,
  icon,
  description,
  details,
  features,
}: ServiceDetailLayoutProps) {
  return (
    <main className="bg-background">


      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 mb-6">
            <div className="text-5xl">{icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
          </div>
          <p className="text-white/90 text-lg max-w-3xl">{description}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-foreground mb-6">About This Service</h2>
              <div className="space-y-4 text-muted-foreground mb-12">
                {details.map((detail, idx) => (
                  <p key={idx}>{detail}</p>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-accent font-bold text-lg">✓</span>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <Card className="bg-muted/50 border border-border p-8 sticky top-24">
                <h3 className="font-bold text-foreground mb-4">Ready to get started?</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Contact us today for a quote and learn how we can support your shipping needs.
                </p>
                <Link href="/contact" className="w-full bg-accent text-accent-foreground font-bold py-3 px-4 rounded text-center block hover:opacity-90">
                  Get in Touch
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Explore Other Services</h2>
          <Link href="/services" className="bg-accent text-accent-foreground font-bold px-8 py-3 rounded hover:opacity-90 inline-block">
            View All Services
          </Link>
        </div>
      </section>


    </main>
  );
}
