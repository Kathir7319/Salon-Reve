import React from 'react';
import { Award, Sparkles, Droplets, ShieldCheck } from 'lucide-react';
import { VALUES } from '../data/salonData';

export const BrandHeritage: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6 text-brand-gold" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-brand-gold" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6 text-brand-gold" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-brand-gold" />;
      default:
        return <Sparkles className="w-6 h-6 text-brand-gold" />;
    }
  };

  return (
    <section id="heritage" className="py-24 bg-brand-surface relative overflow-hidden">
      {/* Decorative subtle texture */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs uppercase tracking-luxury text-brand-gold-dark font-medium mb-3">
            Authentic Korean Beauty Heritage
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-charcoal font-normal leading-tight mb-6">
            Where Seoul’s Elite Hair Architecture <br className="hidden sm:inline" />
            Meets Carolina Serenity.
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-6" />
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-light">
            Founded by veteran Gangnam master stylists, <strong className="font-medium text-stone-900">Salon Rêve</strong> was born to bring the true, uncompromised artistry of Korean hair design to Cary and the greater Research Triangle. In Korean culture, hair is not merely trimmed—it is sculpted to harmonize with bone structure, reflect personal aura, and radiate natural vitality.
          </p>
        </div>

        {/* Narrative Split: The K-Beauty Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-luxury border border-brand-sand">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80"
                alt="Precision Korean hair styling craft"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-brand-dark/90 backdrop-blur-md border border-brand-gold/30 text-brand-cream">
                <span className="text-[10px] tracking-widest text-brand-gold uppercase block mb-1">
                  The Cheongdam-Dong Standard
                </span>
                <p className="font-serif text-lg italic">
                  "Weightless movement, seamless framing, and hair so healthy it glistens."
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl text-brand-charcoal font-medium">
              The Science of Korean Hair Architecture
            </h3>
            <p className="text-stone-600 leading-relaxed font-light">
              Unlike Western blunt-cutting traditions that often result in bulky, heavy silhouettes, Korean master cutting utilizes delicate slide-cutting, weight-reduction slicing, and microscopic point graduation. This creates the famous <span className="text-brand-charcoal font-medium">"chong-soon" (청순)</span> aesthetic—effortless softness that frames your cheekbones, lifts the crown, and moves naturally in the breeze.
            </p>
            <p className="text-stone-600 leading-relaxed font-light">
              Combined with our gentle, temperature-controlled computerized heat perms and authentic Korean down perms, you enjoy a salon-perfect silhouette every morning with minimal styling effort.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-6">
              <div className="border-l-2 border-brand-gold pl-4">
                <span className="font-serif text-3xl font-semibold text-brand-charcoal block">31+</span>
                <span className="text-xs uppercase tracking-wider text-stone-500 font-medium">
                  Years Combined Seoul Expertise
                </span>
              </div>
              <div className="border-l-2 border-brand-gold pl-4">
                <span className="font-serif text-3xl font-semibold text-brand-charcoal block">100%</span>
                <span className="text-xs uppercase tracking-wider text-stone-500 font-medium">
                  Direct Korean & Japanese Formulations
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Excellence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((val, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white border border-stone-200/80 hover:border-brand-gold transition-all duration-300 shadow-sm hover:shadow-luxury group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-surface border border-brand-gold/20 flex items-center justify-center mb-6 group-hover:bg-brand-gold/10 group-hover:scale-110 transition-all duration-300">
                  {getIcon(val.icon)}
                </div>
                <span className="text-[10px] tracking-luxury uppercase text-brand-gold-dark font-medium block mb-1">
                  {val.korean}
                </span>
                <h4 className="font-serif text-xl font-medium text-brand-charcoal mb-3">
                  {val.title}
                </h4>
                <p className="text-sm text-stone-500 leading-relaxed font-light">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
