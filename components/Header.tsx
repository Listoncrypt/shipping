'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-lg bg-white">
      {/* Top Info Bar */}
      <div className="bg-primary text-primary-foreground text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex gap-4">
            <a href="tel:+3234930400" className="hover:text-accent flex items-center gap-2">📞 +32 3 493 04 00</a>
            <a href="mailto:info@blue-shipping.be" className="hover:text-accent flex items-center gap-2">✉️ info@blue-shipping.be</a>
          </div>
          <div className="flex gap-4 items-center">
            <Link href="/signin" className="hover:text-accent flex items-center gap-1 font-semibold">
              Log-in <img src="https://blue-shipping.be/wp-content/uploads/blueWAY-white_1.png" alt="Log-in" className="h-3 ml-1" />
            </Link>
            <span className="opacity-50">|</span>
            <div className="flex gap-2">
              <span className="font-bold cursor-pointer">EN</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="bg-white text-foreground py-4 border-b border-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/">
            <img src="https://blue-shipping.be/wp-content/uploads/2020/09/blue-shipping-logo-01.png" alt="Blue Shipping Logo" className="h-10 md:h-12" />
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center font-semibold text-sm">
            <Link href="/" className="hover:text-primary transition-colors">HOME</Link>
            <Link href="/about" className="hover:text-primary transition-colors">ABOUT US</Link>
            <Link href="/services" className="hover:text-primary transition-colors">SERVICES</Link>
            <Link href="/track" className="hover:text-primary transition-colors">TRACK & TRACE</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">CONTACT</Link>
          </nav>
          
          <Link href="/contact" className="bg-accent text-accent-foreground px-6 py-2 rounded text-sm font-bold hover:opacity-90 transition-opacity hidden md:inline-block">
            CONTACT SALES
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-foreground focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-border absolute w-full shadow-xl z-40 pb-4">
          <nav className="flex flex-col px-6 py-4 gap-6 font-bold text-sm">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors py-2 border-b border-gray-100">HOME</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors py-2 border-b border-gray-100">ABOUT US</Link>
            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors py-2 border-b border-gray-100">SERVICES</Link>
            <Link href="/track" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors py-2 border-b border-gray-100">TRACK & TRACE</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-primary transition-colors py-2 border-b border-gray-100">CONTACT</Link>
            
            <div className="flex flex-col gap-4 mt-2">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-accent text-accent-foreground px-6 py-3 rounded text-sm font-bold hover:opacity-90 transition-opacity text-center">
                CONTACT SALES
              </Link>
              <div className="flex justify-between items-center text-xs text-muted-foreground pt-4 border-t border-gray-100">
                <a href="tel:+3234930400" className="hover:text-primary">📞 +32 3 493 04 00</a>
                <Link href="/signin" className="hover:text-primary font-bold">LOG-IN</Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
