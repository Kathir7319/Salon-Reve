import React from 'react';
import { Sparkles, Calendar, CheckCircle2, Scissors } from 'lucide-react';
import { STYLISTS, Stylist } from '../data/salonData';

interface MasterStylistsProps {
  onSelectStylistBooking: (stylistId: string) => void;
}

export const MasterStylists: React.FC<MasterStylistsProps> = ({ onSelectStylistBooking }) => {
  return (
    <section id="stylists" className="py-24 bg-brand-dark text-brand-cream relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-medium tracking-luxury uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master Artisans</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-brand-cream leading-tight mb-4">
            Meet Our Master Stylists
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-6" />
          <p className="text-stone-300 text-base sm:text-lg font-light leading-relaxed">
            Direct from Seoul to Cary. Master Stylists Yuna and Jason combine over three decades of premier Korean salon artistry, bringing elite Gangnam hair craftsmanship to North Carolina.
          </p>
        </div>

        {/* Stylists Profile Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {STYLISTS.map((stylist: Stylist) => (
            <div
              key={stylist.id}
              className="rounded-3xl bg-brand-card border border-stone-800 hover:border-brand-gold/50 transition-all duration-500 overflow-hidden shadow-luxury flex flex-col justify-between group"
            >
              <div>
                {/* Image & Header Banner */}
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={stylist.image}
                    alt={stylist.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 brightness-[0.92]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-brand-card/40 to-transparent" />
                  
                  {/* Floating Experience Badge */}
                  <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-brand-darker/90 backdrop-blur-md border border-brand-gold/40 text-brand-gold text-xs uppercase tracking-wider font-medium flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                    <span>{stylist.experience}</span>
                  </div>

                  {/* Stylist Name overlay at bottom of image */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-xs uppercase tracking-widest text-brand-gold font-medium block">
                      {stylist.koreanName} • {stylist.title}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl text-brand-cream font-medium">
                      {stylist.name}
                    </h3>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Tagline / Subtitle */}
                  <p className="text-brand-gold text-sm font-medium italic border-l-2 border-brand-gold pl-3">
                    "{stylist.tagline}"
                  </p>

                  {/* Bio */}
                  <p className="text-stone-300 text-sm leading-relaxed font-light">
                    {stylist.bio}
                  </p>

                  {/* Heritage highlight */}
                  <div className="p-4 rounded-xl bg-stone-900/70 border border-stone-800 text-xs text-stone-300 leading-relaxed font-light">
                    <span className="text-brand-gold font-medium block mb-1 uppercase tracking-wider text-[11px]">
                      Korean Heritage & Philosophy
                    </span>
                    {stylist.heritage}
                  </div>

                  {/* Specialties List */}
                  <div>
                    <h4 className="text-xs uppercase tracking-luxury text-stone-400 font-medium mb-3 flex items-center gap-2">
                      <Scissors className="w-3.5 h-3.5 text-brand-gold" />
                      <span>Signature Expertise</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {stylist.specialties.map((spec, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-stone-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="border-t border-stone-800 pt-5 text-xs text-stone-400 italic">
                    "{stylist.quote}"
                  </blockquote>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-6 sm:p-8 pt-0 mt-2">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-5 border-t border-stone-800">
                  <div className="text-xs text-stone-400">
                    <span className="text-stone-500 block uppercase tracking-wider text-[10px]">Cary Studio Schedule</span>
                    <span className="text-brand-cream font-medium">{stylist.availability}</span>
                  </div>

                  <button
                    onClick={() => onSelectStylistBooking(stylist.id)}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-brand-gold-dark to-brand-gold hover:from-brand-gold hover:to-brand-gold-hover text-brand-dark font-medium text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-glow active:scale-95"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book with {stylist.name.split(' ')[2] || stylist.name}</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Reassurance Callout */}
        <div className="mt-14 text-center max-w-2xl mx-auto p-6 rounded-2xl bg-stone-900/60 border border-stone-800">
          <p className="text-xs text-stone-400 uppercase tracking-widest mb-1 font-medium text-brand-gold">
            1-on-1 Dedicated Artisanship
          </p>
          <p className="text-sm text-stone-300 font-light">
            At Salon Rêve, your hair is never handed off to unverified assistants. Master Stylist Yuna and Master Stylist Jason personally handle every consultation, precision cut, perm rod setting, and formulation.
          </p>
        </div>

      </div>
    </section>
  );
};
