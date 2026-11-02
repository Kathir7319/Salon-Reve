import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MapPin, Phone, Mail, Instagram, ArrowRight, Check } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setEmailSubscribed(true);
      setEmailInput('');
    }
  };

  return (
    <footer className="bg-brand-darker text-stone-300 pt-20 pb-12 border-t border-brand-gold/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-stone-800">
          
          {/* Col 1: Brand & Heritage (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block hover:opacity-95 transition-opacity">
              <Logo variant="full" size="md" />
            </Link>

            <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
              Cary’s premier destination for authentic Korean hair architecture, Gangnam digital perms, precision cuts, and sensory waterfall head spas, directed by Master Stylists Yuna and Jason.
            </p>

            <div className="flex items-center gap-4 text-brand-gold text-xs">
              <div className="flex items-center gap-1.5 font-serif italic">
                <Sparkles className="w-4 h-4 text-brand-gold" />
                <span>31+ Combined Years of Seoul Mastery</span>
              </div>
              <span>•</span>
              <a
                href={SALON_INFO.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-cream transition-colors flex items-center gap-1 font-sans text-[11px] uppercase tracking-wider"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Col 2: Multi-Page Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-luxury text-brand-gold font-medium">
              Explore Pages
            </h4>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider text-stone-400 font-light">
              <li>
                <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-gold transition-colors">Services &amp; Menu</Link>
              </li>
              <li>
                <Link to="/head-spa" className="hover:text-brand-gold transition-colors">Waterfall Head Spa</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-gold transition-colors">Contact &amp; Hours</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Cary Atelier Location & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-xs">
            <h4 className="text-xs uppercase tracking-luxury text-brand-gold font-medium">
              Cary Location &amp; Hours
            </h4>
            <div className="space-y-2 text-stone-400 font-light">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>
                  {SALON_INFO.address.street}<br />
                  {SALON_INFO.address.city}, {SALON_INFO.address.state} {SALON_INFO.address.zip}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <a href={`tel:${SALON_INFO.contact.phone.replace(/[^0-9]/g, '')}`} className="hover:text-brand-gold">
                  {SALON_INFO.contact.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <a href={`mailto:${SALON_INFO.contact.email}`} className="hover:text-brand-gold">
                  {SALON_INFO.contact.email}
                </a>
              </p>
            </div>

            <div className="pt-2 text-[11px] text-stone-500 space-y-1">
              <p><strong className="text-stone-300">Tue – Fri:</strong> 10:00 AM – 7:00 PM</p>
              <p><strong className="text-stone-300">Saturday:</strong> 9:30 AM – 6:30 PM</p>
              <p><strong className="text-stone-300">Sun:</strong> By Appt • <strong className="text-stone-300">Mon:</strong> Closed</p>
            </div>
          </div>

          {/* Col 4: Newsletter & Exclusive K-Beauty Trends (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-luxury text-brand-gold font-medium">
              Seoul Seasonal Trends
            </h4>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Receive curated Seoul hair trend updates, scalp health rituals, and priority holiday booking access.
            </p>

            {!emailSubscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    className="w-full px-4 py-2.5 bg-stone-900 border border-stone-700 rounded-full text-xs text-brand-cream placeholder-stone-500 focus:outline-none focus:border-brand-gold"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3.5 rounded-full bg-brand-gold hover:bg-brand-gold-hover text-brand-dark flex items-center justify-center transition-colors"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-stone-500 block">
                  We respect your privacy. No spam, ever.
                </span>
              </form>
            ) : (
              <div className="p-3 rounded-xl bg-brand-gold/10 border border-brand-gold/30 text-xs text-brand-gold flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Thank you! You are now subscribed to Salon Rêve updates.</span>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} Salon Rêve LLC. All rights reserved. Cary, North Carolina.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-stone-400 transition-colors">Our Heritage</Link>
            <span>•</span>
            <Link to="/services" className="hover:text-stone-400 transition-colors">Service Menu</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-stone-400 transition-colors">Cary Location</Link>
            <span>•</span>
            <span className="text-brand-gold/80 font-medium">Gangnam • Cheongdam-Dong Certified Artistry</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
