import React, { useState } from 'react';
import { Clock, Check, Sparkles, Scissors, Droplets, Palette, Sparkle } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/salonData';

interface ServicesMenuProps {
  onSelectServiceBooking: (serviceId: string) => void;
}

export const ServicesMenu: React.FC<ServicesMenuProps> = ({ onSelectServiceBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Complete Menu', icon: Sparkle },
    { id: 'cuts', label: 'K-Style Precision Cuts', icon: Scissors },
    { id: 'perms', label: 'Authentic Korean Perms', icon: Sparkles },
    { id: 'scalp', label: 'Scalp Therapy & Head Spa', icon: Droplets },
    { id: 'color', label: 'Bespoke Color & Gloss', icon: Palette },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-luxury text-brand-gold-dark font-medium mb-3">
            Atelier Price & Service Architecture
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-brand-charcoal leading-tight mb-4">
            Services & Menu
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-6" />
          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed">
            Every service begins with a comprehensive structural consultation, facial symmetry mapping, and authentic imported Korean formulations calibrated for optimal hair integrity.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-3 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'bg-brand-dark text-brand-gold shadow-md scale-105'
                    : 'bg-white text-stone-600 hover:text-brand-dark hover:bg-stone-100 border border-stone-200'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-brand-gold' : 'text-stone-400'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service: ServiceItem) => (
            <div
              key={service.id}
              className={`p-6 sm:p-8 rounded-2xl bg-white border transition-all duration-300 flex flex-col justify-between hover:shadow-luxury ${
                service.popular
                  ? 'border-brand-gold/80 ring-1 ring-brand-gold/30 shadow-sm relative'
                  : 'border-stone-200 hover:border-brand-gold/40'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-brand-dark text-brand-gold text-[10px] uppercase tracking-luxury font-medium border border-brand-gold/40">
                  Salon Signature
                </div>
              )}

              <div>
                {/* Title & Price Header */}
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <span className="text-[11px] text-brand-gold-dark font-medium tracking-wider block">
                      {service.koreanName}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-brand-charcoal font-medium">
                      {service.name}
                    </h3>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-serif text-2xl font-semibold text-brand-charcoal block">
                      {service.price}
                    </span>
                    <span className="text-[11px] text-stone-400 uppercase tracking-wider flex items-center justify-end gap-1 mt-0.5">
                      <Clock className="w-3 h-3 text-stone-400" />
                      {service.duration}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-stone-600 text-sm leading-relaxed font-light my-4">
                  {service.description}
                </p>

                {/* Included Steps Checklist */}
                <div className="pt-3 pb-4 border-t border-stone-100 space-y-2">
                  <span className="text-[10px] uppercase tracking-wider text-stone-400 font-medium block">
                    What is included:
                  </span>
                  <div className="grid grid-cols-1 gap-1.5">
                    {service.includes.map((inc, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-stone-600">
                        <Check className="w-3.5 h-3.5 text-brand-gold-dark shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommended For pill */}
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-100 text-xs text-stone-500">
                  <span className="font-medium text-stone-700">Best for: </span>
                  {service.recommendedFor}
                </div>
              </div>

              {/* Card Action */}
              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
                <span className="text-[11px] text-stone-400 italic">
                  *Prices may vary with hair length & density
                </span>
                <button
                  onClick={() => onSelectServiceBooking(service.id)}
                  className="px-5 py-2.5 rounded-full bg-brand-dark hover:bg-stone-800 text-brand-cream text-xs uppercase tracking-wider font-medium transition-all duration-200 hover:text-brand-gold flex items-center gap-2"
                >
                  <Sparkles className="w-3 h-3 text-brand-gold" />
                  <span>Reserve Service</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Menu Notice */}
        <div className="mt-16 p-8 rounded-3xl bg-brand-surface border border-brand-sand max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif text-xl text-brand-charcoal font-medium">
              Not sure which K-Beauty treatment suits your hair?
            </h4>
            <p className="text-sm text-stone-600 font-light">
              Take our interactive 60-second hair consultation or book a complimentary 15-minute diagnostic with Yuna or Jason.
            </p>
          </div>
          <a
            href="#quiz"
            className="shrink-0 px-6 py-3.5 rounded-full bg-brand-gold text-brand-dark text-xs uppercase tracking-luxury font-medium shadow-sm hover:scale-105 transition-all"
          >
            Start Hair Assessment
          </a>
        </div>

      </div>
    </section>
  );
};
