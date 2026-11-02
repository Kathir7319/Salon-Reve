import React from 'react';
import { Droplets, Sparkles, CheckCircle, ShieldCheck, HeartPulse } from 'lucide-react';
import { HEAD_SPA_STEPS } from '../data/salonData';

interface HeadSpaShowcaseProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const HeadSpaShowcase: React.FC<HeadSpaShowcaseProps> = ({ onOpenBooking }) => {
  return (
    <section id="head-spa" className="py-24 bg-brand-dark text-brand-cream relative overflow-hidden">
      {/* Ambient water / glow light */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-brand-sage/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-sage/20 border border-brand-sage/40 text-brand-sage-light text-xs font-medium tracking-luxury uppercase mb-3">
            <Droplets className="w-3.5 h-3.5 text-brand-sage-light" />
            <span>Holistic Scalp Sanctuary</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-brand-cream leading-tight mb-4">
            The Gangnam 15-Step <br />
            Waterfall Scalp & Head Spa
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-6" />
          <p className="text-stone-300 text-base sm:text-lg font-light leading-relaxed">
            Healthy, voluminous hair starts at the root. Experience the Research Triangle's premier authentic Korean head spa—where trichological scalp science meets profound meditative relaxation.
          </p>
        </div>

        {/* Feature Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-stone-800 shadow-luxury group">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
                alt="Korean Waterfall Head Spa hydrotherapy"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.88]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-transparent to-transparent" />
              
              {/* Badge Overlay */}
              <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-brand-dark/90 backdrop-blur-md border border-brand-gold/30 text-xs text-brand-gold font-medium uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Triangle's First Authentic Halo Waterfall</span>
              </div>

              {/* Bottom Quote Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-brand-dark/95 backdrop-blur-md border border-stone-700/60">
                <p className="font-serif text-lg italic text-stone-200 mb-1">
                  "It’s not just a shampoo—it is an hour of pure sensory rebirth that leaves your hair silky and scalp breathing."
                </p>
                <span className="text-[11px] uppercase tracking-wider text-brand-gold">
                  — Korean Holistic Scalp Philosophy
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-luxury text-brand-gold font-medium block">
              Why Scalp Health Matters
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-brand-cream font-normal">
              Treating the Scalp as the Ultimate Extension of Your Skin
            </h3>
            <p className="text-stone-300 font-light leading-relaxed">
              In Korea, the scalp is known as the "foundation skin" of the face. Hard Carolina water, humidity, environmental pollution, and styling product buildup suffocate hair follicles, leading to premature thinning, oiliness, and limp strands.
            </p>
            <p className="text-stone-300 font-light leading-relaxed">
              Our bespoke head spa cleanses at the microscopic level while soothing deep nervous tension through traditional Korean cranial acupressure.
            </p>

            {/* Core Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-900/60 border border-stone-800">
                <CheckCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs uppercase tracking-wider text-brand-cream font-medium">Unclogs Follicles</h5>
                  <p className="text-[11px] text-stone-400">Dissolves sebum plugs & buildup</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-900/60 border border-stone-800">
                <HeartPulse className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs uppercase tracking-wider text-brand-cream font-medium">Migraine Relief</h5>
                  <p className="text-[11px] text-stone-400">Acupressure releases deep head tension</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-900/60 border border-stone-800">
                <Droplets className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs uppercase tracking-wider text-brand-cream font-medium">Deep Rehydration</h5>
                  <p className="text-[11px] text-stone-400">Nano-mist injects botanical peptides</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-900/60 border border-stone-800">
                <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs uppercase tracking-wider text-brand-cream font-medium">Volumizes Roots</h5>
                  <p className="text-[11px] text-stone-400">Lifts roots for lightweight bounce</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenBooking('scalp-luxury-headspa')}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-gold-dark via-brand-gold to-brand-gold-hover text-brand-dark font-medium text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-glow flex items-center gap-2"
              >
                <Droplets className="w-4 h-4" />
                <span>Reserve Head Spa Experience</span>
              </button>
            </div>
          </div>
        </div>

        {/* 6 Core Milestones Horizontal Progression */}
        <div>
          <div className="text-center mb-10">
            <h4 className="font-serif text-2xl text-brand-cream font-medium">
              The 6 Core Milestones of Your Journey
            </h4>
            <p className="text-stone-400 text-xs uppercase tracking-widest mt-1">
              75 Minutes of Pure Head & Mind Renewal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HEAD_SPA_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-brand-card border border-stone-800 hover:border-brand-gold/40 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-full bg-stone-900 border border-brand-gold/30 text-brand-gold font-serif text-sm flex items-center justify-center font-semibold">
                      0{step.step}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-stone-400">
                      {step.duration}
                    </span>
                  </div>

                  <span className="text-[11px] text-brand-gold-dark font-medium tracking-wider block mb-0.5">
                    {step.koreanTitle}
                  </span>
                  <h5 className="font-serif text-lg text-brand-cream font-medium mb-2.5">
                    {step.title}
                  </h5>
                  <p className="text-xs text-stone-400 leading-relaxed font-light mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-800/80 text-[11px] text-brand-gold flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 shrink-0" />
                  <span>Benefit: {step.benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
