import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, ChevronDown, Award, Star, Scissors } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center bg-brand-dark overflow-hidden pt-24 pb-16">
      {/* Background Ambience & Soft Luxury Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80"
          alt="Salon Rêve Luxury Interior"
          className="w-full h-full object-cover object-center opacity-25 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-brand-dark/60" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top K-Beauty Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-medium tracking-luxury uppercase mb-8 shadow-sm animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 animate-pulse-subtle" />
          <span>SEOUL GANGNAM HERITAGE • CARY, NORTH CAROLINA</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-brand-cream tracking-tight leading-[1.12] mb-6 max-w-4xl">
          Experience Authentic <br className="hidden sm:inline" />
          <span className="italic font-light text-brand-gold font-serif">K-Beauty</span> Transformations in Cary.
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-stone-300 font-light max-w-2xl leading-relaxed mb-10">
          {SALON_INFO.subheadline}
        </p>

        {/* Dual Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-brand-gold-dark via-brand-gold to-brand-gold-hover text-brand-dark font-medium text-xs sm:text-sm uppercase tracking-widest shadow-glow hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2.5 active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Master Appointment</span>
          </button>

          <Link
            to="/services"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-200 border border-stone-700/80 hover:border-brand-gold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2.5"
          >
            <Scissors className="w-4 h-4 text-brand-gold" />
            <span>Explore Services & Menu</span>
          </Link>
        </div>

        {/* Credibility / Master Highlights Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-4xl pt-8 border-t border-stone-800/80 text-left">
          {/* Item 1 */}
          <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-stone-900/40 border border-stone-800/60 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-brand-gold" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-brand-gold font-medium">31+ Years Mastery</p>
              <p className="text-xs text-stone-300">Yuna (16 yrs Gangnam) & Jason (15+ yrs Korea)</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-stone-900/40 border border-stone-800/60 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-brand-gold" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-brand-gold font-medium">100% Authentic K-Formulas</p>
              <p className="text-xs text-stone-300">Digital wave perms, down perms & gentle care</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-stone-900/40 border border-stone-800/60 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 text-brand-gold" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-brand-gold font-medium">Triangle's Head Spa</p>
              <p className="text-xs text-stone-300">15-Step Waterfall scalp therapeutic journey</p>
            </div>
          </div>
        </div>

        {/* Subtle Scroll Down Prompt */}
        <Link
          to="/about"
          className="mt-10 text-stone-500 hover:text-brand-gold transition-colors flex flex-col items-center gap-1 group"
          aria-label="Discover Our Heritage"
        >
          <span className="text-[10px] uppercase tracking-luxury text-stone-400 group-hover:text-brand-gold">
            Discover Our Heritage
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-brand-gold" />
        </Link>
      </div>
    </section>
  );
};
