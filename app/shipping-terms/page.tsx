'use client';

import { Card } from '@/components/ui/card';
import Link from 'next/link';

export default function ShippingTermsPage() {
  return (
    <main className="bg-background">
      

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">SHIPPING TERMS</h1>
          <p className="text-white/90 text-lg">Transparent pricing and reliable delivery options</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {[
                {
                  title: 'FOB (Free On Board)',
                  description: 'Seller delivers goods on board the vessel. Buyer assumes risk and cost from that point forward. Best for buyers with logistics expertise.',
                },
                {
                  title: 'CIF (Cost, Insurance, and Freight)',
                  description: 'Seller covers cost, insurance, and freight to destination. Buyer assumes risk once goods are on board. Popular balanced option.',
                },
                {
                  title: 'DAP (Delivered At Place)',
                  description: 'Seller covers all costs and risks until goods arrive at destination. Includes delivery to buyer&apos;s location. Most convenient for buyers.',
                },
              ].map((term, idx) => (
                <div key={idx}>
                  <h2 className="text-2xl font-bold text-foreground mb-3">{term.title}</h2>
                  <p className="text-muted-foreground">{term.description}</p>
                </div>
              ))}

              <div className="border-t border-border pt-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Payment Terms</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Advance payment available with 2% discount</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Net 30/60 payment terms for established customers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Letter of Credit accepted</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Bank transfer and digital payment methods available</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-border pt-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Liability & Insurance</h2>
                <p className="text-muted-foreground mb-4">
                  All shipments are covered by comprehensive insurance. Additional coverage options available upon request.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Standard coverage: All-risk insurance included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Damage claims processed within 30 days</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Total loss coverage guaranteed</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <Card className="bg-primary text-primary-foreground p-8 sticky top-24">
                <h3 className="text-xl font-bold mb-6">Need a Quote?</h3>
                <p className="text-white/90 mb-6 text-sm">
                  Contact our sales team for competitive pricing on your shipment.
                </p>
                <Link href="/contact" className="w-full bg-accent text-accent-foreground font-bold py-3 px-4 rounded text-center block hover:opacity-90 mb-4">
                  Get Quote
                </Link>
                <Link href="/services" className="w-full border border-white/30 text-white font-bold py-3 px-4 rounded text-center block hover:bg-white/10">
                  View Services
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </section>

      
    </main>
  );
}
