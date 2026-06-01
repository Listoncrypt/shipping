'use client';

import { useState, useEffect } from 'react';

export function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;

    // Check if we've already shown the splash screen in this session
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');
    
    if (hasSeenSplash === 'true') {
      setShowSplash(false);
      return;
    }

    // Mark as seen
    sessionStorage.setItem('hasSeenSplash', 'true');

    // Wait 6 seconds so users can clearly read that it's a sub-company
    const timer = setTimeout(() => {
      setOpen(true);
      // Remove from DOM after curtain animation completes (allow 1.5s for safety)
      setTimeout(() => setShowSplash(false), 1500);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  if (!showSplash) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden pointer-events-none flex">
      {/* Left Curtain */}
      <div
        className="h-full w-1/2 bg-primary shadow-2xl z-10"
        style={{
          transform: open ? 'translateX(-100%)' : 'translateX(0)',
          transition: 'transform 1.2s cubic-bezier(0.65, 0, 0.35, 1)'
        }}
      />
      {/* Right Curtain */}
      <div
        className="h-full w-1/2 bg-primary shadow-2xl z-10"
        style={{
          transform: open ? 'translateX(100%)' : 'translateX(0)',
          transition: 'transform 1.2s cubic-bezier(0.65, 0, 0.35, 1)'
        }}
      />
      
      {/* Content */}
      <div
        className="absolute inset-0 z-20 flex flex-col items-center justify-center text-primary-foreground"
        style={{
          opacity: open ? 0 : 1,
          transition: 'opacity 0.6s ease-in-out'
        }}
      >
        <div className="flex flex-col items-center animate-pulse">
          <img 
            src="https://blue-shipping.be/wp-content/uploads/2020/09/blue-shipping-logo-01.png" 
            alt="Blue Shipping Logo" 
            className="h-20 mb-8 brightness-0 invert"
          />
          <div className="w-16 h-1 bg-accent mb-8 shadow-sm"></div>
          <h1 className="text-2xl font-bold tracking-widest text-center drop-shadow-md">
            A SUB-COMPANY OF<br />BLUE SHIPPING SARL
          </h1>
        </div>
      </div>
    </div>
  );
}
