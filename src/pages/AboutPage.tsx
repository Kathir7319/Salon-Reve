import React from 'react';
import { BrandHeritage } from '../components/BrandHeritage';
import { MasterStylists } from '../components/MasterStylists';
import { BrandIdentityShowcase } from '../components/BrandIdentityShowcase';
import { Sparkles, Award, ShieldCheck, HeartHandshake } from 'lucide-react';

interface AboutPageProps {
  onOpenBooking: (stylistId?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="pt-20 animate-fade-in">
      {/* Page Hero Header */}
      <section className="py-20 bg-brand-dark text-brand-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1920&q=80"
            alt="Atelier artistry"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs uppercase tracking-luxury font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Seoul Gangnam Atelier Lineage</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-brand-cream font-normal leading-tight mb-6">
            The Heritage &amp; Artisans of Salon Rêve
          </h1>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-6" />
          <p className="text-stone-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Founded in Cary, NC by elite master stylists from Seoul’s prestigious Gangnam district, bringing over three decades of authentic Korean hair architecture and holistic scalp wellness to North Carolina.
          </p>
        </div>
      </section>

      {/* 1. Authentic Korean Beauty Heritage & Core Values */}
      <BrandHeritage />

      {/* 2. Meet Our Master Stylists (Yuna & Jason) */}
      <MasterStylists onSelectStylistBooking={onOpenBooking} />

      {/* 3. Dedicated Philosophy & Atelier Standards */}
      <section className="py-20 bg-brand-cream border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs uppercase tracking-luxury text-brand-gold-dark font-semibold block mb-2">
              Our Uncompromising Standards
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-charcoal font-medium">
              The 1-on-1 Atelier Experience
            </h2>
            <div className="w-12 h-0.5 bg-brand-gold mx-auto my-4" />
            <p className="text-sm text-stone-600 font-light leading-relaxed">
              In Seoul's most exclusive Cheongdam-dong salons, clients are never hurried or passed along an assembly line of assistants. We maintain this revered artisan tradition right here in Cary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-brand-surface flex items-center justify-center text-brand-gold-dark mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-stone-900 mb-2">
                Pure Master Direct Touch
              </h3>
              <p className="text-xs text-stone-500 font-light leading-relaxed">
                From initial facial symmetry consultation to precision rod placement and final styling, Yuna or Jason handles every step of your appointment personally.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-brand-surface flex items-center justify-center text-brand-gold-dark mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-stone-900 mb-2">
                100% Genuine Formulations
              </h3>
              <p className="text-xs text-stone-500 font-light leading-relaxed">
                We import our digital perm chemicals, volume magic treatments, and botanical scalp scales directly from top laboratories in Seoul and Tokyo.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-xl bg-brand-surface flex items-center justify-center text-brand-gold-dark mb-4">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-medium text-stone-900 mb-2">
                Home Styling Education
              </h3>
              <p className="text-xs text-stone-500 font-light leading-relaxed">
                We teach you the simple 3-minute Korean finger-twirl drying technique so your digital curls and bang volume look salon-fresh every single morning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Signature Logo & Brand Identity Showcase */}
      <BrandIdentityShowcase />
    </div>
  );
};
