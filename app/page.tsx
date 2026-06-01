'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { ShipIllustration } from '@/components/ship-illustration';

export default function Page() {
  const [trackingNumber, setTrackingNumber] = useState('');

  return (
    <main className="bg-background">
      

      {/* Hero Section */}
      <section className="relative h-96 md:h-screen bg-gradient-to-b from-primary/90 to-primary overflow-hidden">
        <Image
          src="/hero-port.png"
          alt="Maritime Port"
          fill
          className="object-cover absolute inset-0 opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
        
        {/* Ship Illustration */}
        <div className="absolute inset-0 pointer-events-none">
          <ShipIllustration />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 leading-tight">
              TOGETHER WITH<br />PASSION
            </h1>
            <p className="text-white/90 text-base md:text-lg mb-8 max-w-xl">
              At Blue Shipping, we pride ourselves on delivering excellence through commitment and expertise. Your cargo is our priority.
            </p>
            <a href="/services" className="bg-accent text-accent-foreground font-semibold px-8 py-3 rounded hover:opacity-90 inline-block">
              LEARN MORE
            </a>
          </div>
        </div>
      </section>

      {/* Tracking Section */}
      <section className="bg-[#17629b] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Track & Trace */}
            <div>
              <h3 className="text-lg font-normal mb-6">Track & Trace</h3>
              <form onSubmit={(e) => { e.preventDefault(); window.location.href = '/track'; }} className="space-y-4">
                <Input
                  type="text"
                  placeholder="BL number, Container number, Client reference number, booking number"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="w-full bg-white text-black border-0 rounded-none h-10 px-3 placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button
                  type="submit"
                  className="w-full bg-[#ff0080] hover:bg-[#e60073] text-white font-normal rounded-none h-10 flex items-center justify-center gap-2 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                  Search
                </Button>
              </form>
            </div>

            {/* LCL Sailing Schedules */}
            <div>
              <h3 className="text-lg font-normal mb-6">LCL Sailing Schedules</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1">Departure</label>
                    <div className="relative">
                      <select className="w-full bg-white text-black border-0 rounded-none h-10 px-3 appearance-none focus:outline-none text-sm">
                        <option>BEABS , ANTWERP.. , BELGIUM</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1">Arrival</label>
                    <div className="relative">
                      <select className="w-full bg-white text-black border-0 rounded-none h-10 px-3 appearance-none focus:outline-none text-sm">
                        <option>AEAAN , AL AIN , U.A.E.</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  type="button"
                  className="w-full bg-[#ff0080] hover:bg-[#e60073] text-white font-normal rounded-none h-10 flex items-center justify-center gap-2 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                  Search
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-accent font-bold text-sm uppercase tracking-wide mb-2">Our Offerings</p>
            <h2 className="text-4xl font-bold text-foreground">WHAT WE PROVIDE</h2>
            <div className="w-12 h-1 bg-accent mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              {
                title: 'OCEAN FREIGHT',
                desc: 'With 20+ FCL and LCL shipments weekly, we provide reliable ocean freight solutions',
                icon: '🌊',
                href: '/services/ocean-freight',
              },
              {
                title: 'ROAD TRANSPORT',
                desc: 'Our partnership with leading logistics providers ensures seamless transport coverage',
                icon: '🚛',
                href: '/services/road-transport',
              },
              {
                title: 'AIRFREIGHT',
                desc: 'The fastest way to transport your goods across continents with guaranteed delivery',
                icon: '✈️',
                href: '/services/airfreight',
              },
            ].map((service, idx) => (
              <Card key={idx} className="bg-white border-0 shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-bold text-foreground mb-3 uppercase text-sm">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
                <a href={service.href} className="text-accent font-semibold text-sm mt-4 inline-block hover:underline">
                  Read more →
                </a>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'WAREHOUSING',
                desc: 'Full and professional handling of your cargo storage and distribution needs',
                icon: '📦',
                href: '/services/warehousing',
              },
              {
                title: 'IT SOLUTIONS',
                desc: 'State-of-the-art tracking and management systems for your shipments',
                icon: '💻',
                href: '/services/it-solutions',
              },
              {
                title: 'THINK BLUE',
                desc: 'We at Blue Shipping care about our environment and future sustainability',
                icon: '🌍',
                href: '/services/think-blue',
              },
            ].map((service, idx) => (
              <Card key={idx} className="bg-white border-0 shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-bold text-foreground mb-3 uppercase text-sm">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
                <a href={service.href} className="text-accent font-semibold text-sm mt-4 inline-block hover:underline">
                  Read more →
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative h-80 md:h-96 bg-gradient-to-br from-accent/30 to-transparent rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-6xl">👤</div>
              </div>
            </div>
            <div>
              <p className="text-accent font-bold text-sm uppercase tracking-wide mb-4">About Us</p>
              <h2 className="text-4xl font-bold mb-6">WE ARE BLUE</h2>
              <p className="text-white/90 mb-4">
                Blue Shipping was founded in Nantes with the mission to revolutionize maritime logistics. Our team brings together decades of industry experience and a passion for excellence.
              </p>
              <p className="text-white/90 mb-6">
                We believe in transparent communication, reliable service, and sustainable practices. Every shipment receives our full attention and professional care.
              </p>
              <a href="/about" className="text-accent font-bold hover:underline text-sm">
                GET STARTED →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Terms */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-bold text-sm uppercase tracking-wide mb-2">Guidelines</p>
          <h2 className="text-4xl font-bold text-foreground mb-4">SHIPPING TERMS</h2>
          <div className="w-12 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our shipping terms ensure transparency and reliability. We offer FOB, CIF, and DAP options for all major routes. Contact our team for detailed information about our current rates and available services.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="/hero-port.png"
                alt="Why Choose Us"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent"></div>
            </div>
            <div>
              <p className="text-accent font-bold text-sm uppercase tracking-wide mb-4">The Best Choice</p>
              <h2 className="text-4xl font-bold text-foreground mb-6">WHY CHOOSE US</h2>
              <ul className="space-y-4 text-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>20+ years of maritime expertise and industry knowledge</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Real-time tracking and transparent communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Competitive rates and flexible shipping solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Commitment to sustainability and environmental responsibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      
    </main>
  );
}
