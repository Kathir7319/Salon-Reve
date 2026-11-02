import React from 'react';
import { HeadSpaShowcase } from '../components/HeadSpaShowcase';
import { Droplets, HeartPulse, ShieldCheck, Calendar } from 'lucide-react';

interface HeadSpaPageProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const HeadSpaPage: React.FC<HeadSpaPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="pt-20 animate-fade-in">
      {/* Page Hero Header */}
      <section className="py-20 bg-brand-dark text-brand-cream relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-sage/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-sage/20 border border-brand-sage/40 text-brand-sage-light text-xs uppercase tracking-luxury font-medium mb-4">
            <Droplets className="w-3.5 h-3.5 text-brand-sage-light" />
            <span>Triangle’s Premier Korean Scalp Sanctuary</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-brand-cream font-normal leading-tight mb-6">
            The Gangnam 15-Step <br className="hidden sm:inline" />
            Waterfall Head Spa
          </h1>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-6" />
          <p className="text-stone-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-8">
            Treat your scalp as the ultimate extension of your skin. Immerse yourself in 75 minutes of microscopic trichology, warm herbal pore steaming, acupressure meridian massage, and circular halo waterfall hydrotherapy.
          </p>
          <button
            onClick={() => onOpenBooking('scalp-luxury-headspa')}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-gold-dark via-brand-gold to-brand-gold-hover text-brand-dark font-semibold text-xs uppercase tracking-widest shadow-glow hover:scale-105 transition-all inline-flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve 15-Step Head Spa ($165)</span>
          </button>
        </div>
      </section>

      {/* Main 6-Milestone Sensory Showcase */}
      <HeadSpaShowcase onOpenBooking={onOpenBooking} />

      {/* Why Scalp Health is Essential */}
      <section className="py-20 bg-brand-surface border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs uppercase tracking-luxury text-brand-gold-dark font-semibold block mb-2">
              Trichological Science
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-charcoal font-medium">
              The Secret to Long-Term Hair Density &amp; Luster
            </h2>
            <div className="w-12 h-0.5 bg-brand-gold mx-auto my-4" />
            <p className="text-sm text-stone-600 font-light leading-relaxed">
              Most people spend thousands on shampoos and hair oils, yet overlook the scalp pores where hair follicles live. A congested scalp creates brittle hair, chronic thinning, and oiliness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-surface flex items-center justify-center text-brand-gold-dark">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-stone-900">
                Dissolves Sebum Plugs
              </h3>
              <p className="text-xs text-stone-500 font-light leading-relaxed">
                Ordinary shampoos only wash the hair shaft. Our fermented Korean herbal scaling cream dissolves hardened sebum plugs choking follicle openings.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-surface flex items-center justify-center text-brand-gold-dark">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-stone-900">
                Relieves Deep Migraines &amp; Stress
              </h3>
              <p className="text-xs text-stone-500 font-light leading-relaxed">
                Tension in the scalp restricts blood flow to hair roots. Our certified acupressure techniques release fascia tension across the neck, temples, and cranial crest.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-surface flex items-center justify-center text-brand-gold-dark">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-stone-900">
                Eliminates Hard Water Mineral Coat
              </h3>
              <p className="text-xs text-stone-500 font-light leading-relaxed">
                North Carolina tap water contains minerals that build up on hair, causing brassiness and dryness. Our chelating rinse restores natural glass silk shine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Head Spa FAQ */}
      <section className="py-16 bg-white border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl text-brand-charcoal font-medium">
              Head Spa Preparation &amp; FAQs
            </h3>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-stone-600 font-light">
            <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
              <p className="font-medium text-stone-900">Should I wash my hair before arriving?</p>
              <p>No, we recommend coming with your hair in its natural state so our 200x microscopic camera can accurately evaluate your baseline sebum levels and scalp condition.</p>
            </div>
            <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
              <p className="font-medium text-stone-900">Can I get a Head Spa if I have extensions or recent color?</p>
              <p>For fresh hair color, we recommend waiting 7–10 days after coloring so the clarifying herbal steam does not affect your fresh toner. For tape-in or sew-in extensions, please let us know in advance so we can customize the technique.</p>
            </div>
            <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
              <p className="font-medium text-stone-900">Is a blowout included?</p>
              <p>Yes, all full 15-step head spa experiences conclude with a Korean signature volume blowout and nutrient tonic spray.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
