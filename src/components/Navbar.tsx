import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar, Sparkles } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenBooking: (stylistId?: string, serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Clean, multi-page navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services & Menu', path: '/services' },
    { name: 'Waterfall Head Spa', path: '/head-spa' },
    { name: 'Contact & Hours', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-dark/95 backdrop-blur-md text-brand-cream shadow-luxury border-b border-brand-gold/20 py-3'
            : 'bg-brand-dark/85 backdrop-blur-sm text-brand-cream border-b border-white/10 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Left: Brand Logo */}
            <Link
              to="/"
              className="group flex items-center shrink-0 transition-transform duration-300 hover:scale-[1.02]"
              aria-label="Salon Rêve Home"
            >
              <Logo variant="full" size="md" />
            </Link>

            {/* Center: Desktop Multi-Page Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-[12px] xl:text-[13px] uppercase tracking-wider transition-colors duration-200 py-1 whitespace-nowrap relative group ${
                      isActive
                        ? 'text-brand-gold font-semibold'
                        : 'text-stone-300 hover:text-brand-gold font-medium'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      <span
                        className={`absolute bottom-0 left-0 h-[1.5px] bg-brand-gold transition-all duration-300 ${
                          isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Right: Phone & Booking CTA Actions */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              {/* Phone Quick Link (Hidden on mid screens to prevent crowding) */}
              <a
                href={`tel:${SALON_INFO.contact.phone.replace(/[^0-9]/g, '')}`}
                className="hidden xl:flex items-center gap-2 text-xs tracking-wider uppercase text-stone-300 hover:text-brand-gold transition-colors whitespace-nowrap py-1"
                title="Call Salon Rêve in Cary, NC"
              >
                <Phone className="w-3.5 h-3.5 text-brand-gold" />
                <span>(919) 439-7383</span>
              </a>

              {/* Primary Call to Action */}
              <button
                onClick={() => onOpenBooking()}
                className="px-4 sm:px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-gold-dark via-brand-gold to-brand-gold-hover text-brand-dark font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-glow hover:scale-105 active:scale-95 flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-stone-300 hover:text-brand-gold focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Touch Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`fixed top-0 right-0 w-4/5 max-w-sm h-full bg-brand-darker border-l border-brand-gold/20 p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-stone-800">
              <Logo variant="full" size="sm" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-400 hover:text-brand-gold p-1"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col space-y-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-sm uppercase tracking-wider py-2.5 transition-colors border-b border-stone-900 ${
                      isActive ? 'text-brand-gold font-semibold' : 'text-stone-300 hover:text-brand-gold'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-800">
            <a
              href={`tel:${SALON_INFO.contact.phone.replace(/[^0-9]/g, '')}`}
              className="flex items-center justify-center gap-2 w-full py-3 border border-stone-700 rounded-full text-stone-200 text-xs uppercase tracking-wider hover:border-brand-gold hover:text-brand-gold transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-gold" />
              <span>(919) 439-7383</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-full bg-brand-gold text-brand-dark font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-luxury"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>

            <p className="text-center text-[11px] text-stone-500">
              1205 Kildaire Farm Rd, Suite 108, Cary, NC
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
