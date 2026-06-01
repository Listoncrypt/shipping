import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <img src="https://blue-shipping.be/wp-content/uploads/2020/09/blue-shipping-logo-01.png" alt="Blue Shipping Logo" className="h-10 mb-6 brightness-0 invert" />
            <p className="text-white/80 text-sm mb-4">
              Leading maritime shipping solutions from Nantes, France. This website is the sub company of BLUE SHIPPING SARL Website.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://www.facebook.com/blueshipping.be" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">f</a>
              <a href="https://www.linkedin.com/company/blue-shipping/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">in</a>
              <a href="https://www.instagram.com/blue.shipping/?hl=nl" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">ig</a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase text-sm">Services</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link href="/services" className="hover:text-accent transition-colors">All Services</Link></li>
              <li><Link href="/services/ocean-freight" className="hover:text-accent transition-colors">Ocean Freight</Link></li>
              <li><Link href="/services/warehousing" className="hover:text-accent transition-colors">Warehousing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase text-sm">Company</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/shipping-terms" className="hover:text-accent transition-colors">Shipping Terms</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase text-sm">Contact</h4>
            <p className="text-sm text-white/80 leading-loose">
              Nantes, France<br />
              Phone: +32 3 493 04 00<br />
              Email: info@blue-shipping.be
            </p>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>&copy; 2024 Blue Shipping. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
