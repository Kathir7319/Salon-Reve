import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, ExternalLink, ChevronDown, ChevronUp, Sparkles, Navigation } from 'lucide-react';
import { SALON_INFO, FAQS } from '../data/salonData';

export const ContactAndHours: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isOpenNow, setIsOpenNow] = useState<boolean>(false);

  useEffect(() => {
    // Check if salon is open based on local day and time
    const now = new Date();
    const day = now.getDay(); // 0 is Sun, 1 is Mon, 2 is Tue ...
    const hour = now.getHours();
    
    // Tue (2) - Fri (5): 10am - 7pm (19)
    if (day >= 2 && day <= 5) {
      setIsOpenNow(hour >= 10 && hour < 19);
    } else if (day === 6) { // Sat: 9:30am - 6:30pm
      setIsOpenNow(hour >= 9 && hour < 18);
    } else if (day === 0) { // Sun: 11am - 5pm
      setIsOpenNow(hour >= 11 && hour < 17);
    } else { // Mon: Closed
      setIsOpenNow(false);
    }
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    '1205 Kildaire Farm Rd, Suite 108, Cary, NC 27511'
  )}`;

  return (
    <section id="contact" className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-luxury text-brand-gold-dark font-medium mb-3">
            Visit Our Cary Atelier
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-brand-charcoal leading-tight mb-4">
            Contact & Hours
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-6" />
          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed">
            Conveniently situated in central Cary with complimentary guest parking, just minutes from downtown Cary, Raleigh, Apex, and RTP.
          </p>
        </div>

        {/* 2-Column Info & Hours Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          
          {/* Left Column: Direct Info & Location */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Location & Status Card */}
            <div className="p-8 rounded-3xl bg-white border border-stone-200/90 shadow-luxury space-y-6">
              
              {/* Live Status Pill */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-stone-400'
                    }`}
                  />
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-800">
                    {isOpenNow ? 'Salon Open Today' : 'Currently Closed • Accepting Online Appointments'}
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-brand-gold-dark font-medium">
                  Cary, NC
                </span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-surface border border-stone-200 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand-gold-dark" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-stone-400 font-medium mb-1">
                    Atelier Location
                  </h4>
                  <p className="font-serif text-xl text-stone-900 font-medium">
                    {SALON_INFO.address.street}
                  </p>
                  <p className="text-sm text-stone-600">
                    {SALON_INFO.address.city}, {SALON_INFO.address.state} {SALON_INFO.address.zip}
                  </p>
                  <p className="text-xs text-stone-500 font-light mt-1">
                    {SALON_INFO.address.landmark}
                  </p>

                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs text-brand-gold-dark font-medium hover:underline"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Open in Google Maps / Get Driving Directions</span>
                  </a>
                </div>
              </div>

              {/* Direct Phone */}
              <div className="flex items-start gap-4 pt-4 border-t border-stone-100">
                <div className="w-10 h-10 rounded-xl bg-brand-surface border border-stone-200 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-brand-gold-dark" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-stone-400 font-medium mb-1">
                    Direct Phone Line
                  </h4>
                  <a
                    href={`tel:${SALON_INFO.contact.phone.replace(/[^0-9]/g, '')}`}
                    className="font-serif text-2xl text-stone-900 font-medium hover:text-brand-gold-dark transition-colors"
                  >
                    {SALON_INFO.contact.phone}
                  </a>
                  <p className="text-xs text-stone-500 font-light mt-0.5">
                    Concierge available during operating salon hours
                  </p>
                </div>
              </div>

              {/* Direct Email & Instagram */}
              <div className="flex items-start gap-4 pt-4 border-t border-stone-100">
                <div className="w-10 h-10 rounded-xl bg-brand-surface border border-stone-200 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-brand-gold-dark" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-stone-400 font-medium mb-1">
                    Inquiries & Photos
                  </h4>
                  <a
                    href={`mailto:${SALON_INFO.contact.email}`}
                    className="text-sm text-stone-800 hover:text-brand-gold-dark font-medium block"
                  >
                    {SALON_INFO.contact.email}
                  </a>
                  <a
                    href={SALON_INFO.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-brand-gold-dark font-medium mt-1 hover:underline"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Follow {SALON_INFO.contact.instagram}</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Parking & Triangle Access Banner */}
            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-sand flex items-center gap-4">
              <Sparkles className="w-6 h-6 text-brand-gold shrink-0" />
              <div className="text-xs text-stone-600 leading-relaxed font-light">
                <strong className="font-medium text-stone-900">Convenient Triangle Hub:</strong> Located 12 minutes from Downtown Raleigh, 18 minutes from RTP & RDU Airport, with seamless access from US-1 and I-40.
              </div>
            </div>

          </div>

          {/* Right Column: Weekly Hours Table & Visual Map */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Hours Card */}
            <div className="p-8 rounded-3xl bg-white border border-stone-200/90 shadow-luxury">
              <div className="flex items-center gap-2 mb-6">
                <Clock className="w-5 h-5 text-brand-gold-dark" />
                <h3 className="font-serif text-2xl text-brand-charcoal font-medium">
                  Salon Hours of Operation
                </h3>
              </div>

              <div className="divide-y divide-stone-100">
                {SALON_INFO.hours.map((item, idx) => (
                  <div
                    key={idx}
                    className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm"
                  >
                    <span className="font-medium text-stone-800 w-44">{item.day}</span>
                    <span className={`font-serif text-base font-semibold ${item.time === 'Closed' ? 'text-stone-400' : 'text-stone-900'}`}>
                      {item.time}
                    </span>
                    <span className="text-xs text-stone-400 italic sm:text-right">
                      {item.note}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-6 pt-4 border-t border-stone-100 text-xs text-stone-500 font-light italic">
                *Due to meticulous 1-on-1 attention by Master Stylists Yuna and Jason, advance appointment reservations are highly recommended.
              </p>
            </div>

            {/* Map Preview Card */}
            <div className="rounded-3xl overflow-hidden border border-stone-200 shadow-luxury bg-brand-card text-brand-cream relative">
              <div className="p-5 flex items-center justify-between border-b border-stone-800">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-gold" />
                  <span className="text-xs uppercase tracking-wider text-stone-300 font-medium">
                    1205 Kildaire Farm Rd, Cary, NC
                  </span>
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brand-gold hover:underline flex items-center gap-1"
                >
                  <span>Open Full Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Embedded Map iframe */}
              <div className="h-64 w-full bg-stone-900 relative">
                <iframe
                  title="Salon Reve Cary NC Map"
                  src="https://maps.google.com/maps?q=1205%20Kildaire%20Farm%20Rd%2C%20Cary%2C%20NC%2027511&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter grayscale-[20%] contrast-[1.05]"
                  loading="lazy"
                />
              </div>
            </div>

          </div>

        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto pt-8">
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl text-brand-charcoal font-medium">
              Frequently Asked Questions
            </h3>
            <p className="text-xs text-stone-500 uppercase tracking-widest mt-1">
              Everything You Need to Know Before Your Visit
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-stone-200/90 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-stone-50 transition-colors"
                  >
                    <span className="font-serif text-lg text-brand-charcoal font-medium">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-brand-gold-dark shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-stone-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-stone-600 font-light leading-relaxed border-t border-stone-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
