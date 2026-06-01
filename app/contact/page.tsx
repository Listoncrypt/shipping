'use client';

import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('[v0] Contact form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main className="bg-background">
      

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">CONTACT SALES</h1>
          <p className="text-white/90 text-lg">We&apos;re here to help with your shipping needs</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    Nantes, France<br />
                    Subsidiary of Blue Water Shipping SARL
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Phone</h3>
                  <a href="tel:+33" className="text-accent hover:underline">+33 (0)2 XXXX XXXX</a>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Email</h3>
                  <a href="mailto:contact@maritime.fr" className="text-accent hover:underline">contact@maritime.fr</a>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday - Sunday: By appointment
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white border-0 shadow-md p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                  <div className="text-center py-8">
                    <div className="text-6xl mb-6">✉️</div>
                    <h3 className="text-xl font-semibold mb-4">Reach out to our Sales Team</h3>
                    <p className="text-muted-foreground mb-8">
                      For all sales inquiries, quotes, and partnership opportunities, please contact our dedicated sales team directly via email. We aim to respond to all inquiries within 24 hours.
                    </p>
                    <a href="mailto:info@blue-shipping.be" className="inline-block bg-primary text-primary-foreground font-bold px-8 py-4 rounded-lg hover:opacity-90 text-lg transition-opacity">
                      Email Sales: info@blue-shipping.be
                    </a>
                  </div>
              </Card>
            </div>
          </div>

          {/* Service Areas */}
          <div className="bg-muted/50 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">We Serve</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              We operate across Northern Europe with coverage to 150+ ports worldwide. Contact us to discuss your specific shipping needs and how we can support your business.
            </p>
            <Link href="/services" className="bg-primary text-primary-foreground font-bold px-8 py-3 rounded hover:opacity-90 inline-block">
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      
    </main>
  );
}
