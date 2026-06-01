'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { useState } from 'react';

export default function TrackPage() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [tracking, setTracking] = useState<any>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) {
      alert("Please enter a tracking number.");
      return;
    }

    setTracking({
      number: trackingNumber,
      status: 'Awaiting Pickup',
      origin: 'Nantes, France',
      destination: 'India',
      departure: 'Nantes, France',
      eta: '2026-07-15',
      currentLocation: 'Nantes, France',
      item: 'Xbox Series S',
      size: '27.5 x 15.1 x 6.5 cm',
      weight: '1.93 kg',
      senderName: 'Leo Marceau De Sol',
      address: 'House No. 22-5-2 Street: No 5 mohalla sangolin usman barvi road lyari karachi south',
      alternateAddress: '22, 20, street: No 5-A Mohalla sangolin',
      phone: '+9203363162734',
      email: 'abdullahjan8998@gmail.com'
    });
  };

  return (
    <main className="bg-background">
      

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">TRACK & TRACE</h1>
          <p className="text-white/90 text-lg">Real-time shipment tracking across the globe</p>
        </div>
      </section>

      {/* Tracking Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Form */}
          <div className="bg-[#17629b] p-8 mb-12 shadow-lg">
            <h2 className="text-xl text-white mb-6">Track & Trace</h2>
            <form onSubmit={handleSearch} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="BL number, Container number, Client reference number, booking number"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  required
                  className="w-full bg-white text-black border-0 rounded-none h-12 px-4 placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <Button type="submit" className="w-full bg-[#ff0080] hover:bg-[#e60073] text-white font-medium py-3 rounded-none h-12 flex items-center justify-center gap-2 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                Search
              </Button>
              <div className="mt-6 p-4 bg-[#114b77] text-sm text-white/90 border-l-4 border-accent">
                <p>
                  <strong>Note:</strong> This dedicated tracking portal was purpose-built to allow our customers to easily monitor their tracking progress faster and more efficiently than the standard process on our original corporate website.
                </p>
              </div>
            </form>
          </div>

          {/* Results */}
          {tracking && (
            <Card className="bg-white border-0 shadow-md p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Shipment Details</h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Tracking Number</p>
                    <p className="text-lg font-bold text-foreground">{tracking.number}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Status</p>
                    <p className="text-lg font-bold text-accent">{tracking.status}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Item Details</p>
                    <p className="text-md font-semibold text-foreground">{tracking.item}</p>
                    <p className="text-xs text-muted-foreground">Size: {tracking.size} | Weight: {tracking.weight}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Sender</p>
                    <p className="text-md font-semibold text-foreground">{tracking.senderName}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm text-muted-foreground mb-2">Recipient Information</p>
                    <div className="bg-muted/30 p-4 rounded-md text-sm text-foreground space-y-1">
                      <p><span className="font-semibold">Destination:</span> {tracking.destination}</p>
                      <p><span className="font-semibold">Primary Address:</span> {tracking.address}</p>
                      <p><span className="font-semibold">Alternate Address:</span> {tracking.alternateAddress}</p>
                      <p><span className="font-semibold">Phone:</span> {tracking.phone}</p>
                      <p><span className="font-semibold">Email:</span> {tracking.email}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Current Location</p>
                    <p className="text-md font-semibold text-foreground">{tracking.currentLocation}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">ETA</p>
                    <p className="text-md font-semibold text-foreground">{tracking.eta}</p>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h4 className="font-bold text-foreground mb-4">Journey</h4>
                  <div className="space-y-4 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-muted before:to-transparent">
                    {/* Awaiting Packaging */}
                    <div className="flex gap-4 relative">
                      <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 z-10 shadow">✓</div>
                      <div>
                        <p className="font-semibold text-foreground">Awaiting Packaging</p>
                        <p className="text-sm text-muted-foreground">Item has been packaged</p>
                      </div>
                    </div>
                    {/* Awaiting Pickup */}
                    <div className="flex gap-4 relative">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 z-10 shadow animate-pulse">►</div>
                      <div>
                        <p className="font-semibold text-foreground">Awaiting Pickup</p>
                        <p className="text-sm text-muted-foreground">Ready for carrier pickup at origin</p>
                      </div>
                    </div>
                    {/* Departure */}
                    <div className="flex gap-4 relative opacity-50">
                      <div className="w-8 h-8 rounded-full bg-muted border-2 border-muted-foreground text-muted-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 z-10">◯</div>
                      <div>
                        <p className="font-semibold text-foreground">Departure</p>
                        <p className="text-sm text-muted-foreground">Pending departure from {tracking.origin}</p>
                      </div>
                    </div>
                    {/* In Transit */}
                    <div className="flex gap-4 relative opacity-50">
                      <div className="w-8 h-8 rounded-full bg-muted border-2 border-muted-foreground text-muted-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 z-10">◯</div>
                      <div>
                        <p className="font-semibold text-foreground">In Transit</p>
                        <p className="text-sm text-muted-foreground">Pending transit to destination</p>
                      </div>
                    </div>
                    {/* Arrival */}
                    <div className="flex gap-4 relative opacity-50">
                      <div className="w-8 h-8 rounded-full bg-muted border-2 border-muted-foreground text-muted-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 z-10">◯</div>
                      <div>
                        <p className="font-semibold text-foreground">Arrival</p>
                        <p className="text-sm text-muted-foreground">{tracking.destination} - Expected {tracking.eta}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {!tracking && (
            <Card className="bg-muted/50 border-2 border-dashed border-border p-12 text-center">
              <p className="text-muted-foreground">
                Enter a tracking number above to view real-time shipment status and location information.
              </p>
            </Card>
          )}
        </div>
      </section>

      
    </main>
  );
}
