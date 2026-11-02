import React from 'react';
import { ContactAndHours } from '../components/ContactAndHours';
import { MapPin, Navigation, Calendar } from 'lucide-react';

interface ContactPageProps {
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="pt-20 animate-fade-in">
      {/* Page Header */}
      <section className="py-20 bg-brand-dark text-brand-cream relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs uppercase tracking-luxury font-medium mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Research Triangle Atelier</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-brand-cream font-normal leading-tight mb-6">
            Contact &amp; Hours
          </h1>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-6" />
          <p className="text-stone-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Conveniently located in Cary, NC, just minutes from downtown Cary, Raleigh, Apex, and RTP with ample complimentary guest parking.
          </p>
        </div>
      </section>

      {/* Main Contact & Hours Component */}
      <ContactAndHours />

      {/* Driving Directions & Transit Guide */}
      <section className="py-16 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-luxury text-brand-gold-dark font-semibold block mb-2">
              Getting to Salon Rêve
            </span>
            <h2 className="font-serif text-3xl text-brand-charcoal font-medium">
              Directions from Across the Triangle
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-brand-surface border border-stone-200 space-y-2">
              <div className="flex items-center gap-2 text-stone-900 font-medium text-sm">
                <Navigation className="w-4 h-4 text-brand-gold-dark" />
                <span>From Downtown Raleigh (12–15 mins)</span>
              </div>
              <p className="text-xs text-stone-500 font-light leading-relaxed">
                Take Western Blvd to Cary Towne Blvd, merge onto Kildaire Farm Rd south. Suite 108 is on your right with direct plaza parking.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-surface border border-stone-200 space-y-2">
              <div className="flex items-center gap-2 text-stone-900 font-medium text-sm">
                <Navigation className="w-4 h-4 text-brand-gold-dark" />
                <span>From Durham &amp; RTP (18–22 mins)</span>
              </div>
              <p className="text-xs text-stone-500 font-light leading-relaxed">
                Take I-40 East toward Raleigh, exit at Cary Parkway or Harrison Ave, connect south to Kildaire Farm Rd.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-surface border border-stone-200 space-y-2">
              <div className="flex items-center gap-2 text-stone-900 font-medium text-sm">
                <Navigation className="w-4 h-4 text-brand-gold-dark" />
                <span>From Apex &amp; Holly Springs (8–12 mins)</span>
              </div>
              <p className="text-xs text-stone-500 font-light leading-relaxed">
                Take US-1 North, exit at Cary Parkway or Tryon Rd, turn north onto Kildaire Farm Rd.
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 rounded-3xl bg-brand-dark text-brand-cream border border-brand-gold/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl text-brand-cream font-medium">Ready for your K-Beauty transformation?</h3>
              <p className="text-xs text-stone-400 mt-1">Reserve your 1-on-1 session with Master Stylist Yuna or Jason.</p>
            </div>
            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 rounded-full bg-brand-gold hover:bg-brand-gold-hover text-brand-dark text-xs uppercase tracking-wider font-semibold transition-all shrink-0 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Online</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
