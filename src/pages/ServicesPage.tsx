import React from 'react';
import { ServicesMenu } from '../components/ServicesMenu';
import { HairConsultationQuiz } from '../components/HairConsultationQuiz';
import { Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';

interface ServicesPageProps {
  onOpenBooking: (stylistId?: string, serviceId?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="pt-20 animate-fade-in">
      {/* Page Header */}
      <section className="py-20 bg-brand-dark text-brand-cream relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-gold/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs uppercase tracking-luxury font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Atelier Price &amp; Service Architecture</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-brand-cream font-normal leading-tight mb-6">
            Services &amp; Menu
          </h1>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-6" />
          <p className="text-stone-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Categorized menu of authentic K-style precision cuts, Gangnam digital perms, bespoke color chemistry, and therapeutic scalp head spas.
          </p>
        </div>
      </section>

      {/* Main Filterable Services Menu */}
      <ServicesMenu onSelectServiceBooking={(serviceId) => onOpenBooking(undefined, serviceId)} />

      {/* Pricing Transparency & Consultation Policy */}
      <section className="py-16 bg-white border-y border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-brand-surface border border-brand-sand space-y-4">
            <div className="flex items-center gap-2 text-stone-900 font-serif text-xl font-medium">
              <AlertCircle className="w-5 h-5 text-brand-gold-dark" />
              <span>Atelier Consultation &amp; Pricing Transparency</span>
            </div>
            <p className="text-xs text-stone-600 font-light leading-relaxed">
              All prices shown are starting rates. Because Korean hair sculpting and chemical wave reconstitution are personalized art forms, final pricing may vary slightly based on your hair length, density, previous chemical history (such as box color or heavy bleach), and restorative pre-treatments required to safeguard your hair’s health.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold-dark shrink-0" />
                <span>Complimentary 10-min pre-service consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold-dark shrink-0" />
                <span>Premium Korean botanical wash included with all cuts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold-dark shrink-0" />
                <span>Zero-surprise upfront quote before work begins</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold-dark shrink-0" />
                <span>Styling and home-care tutorial included</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Hair Quiz */}
      <HairConsultationQuiz onBookRecommendation={onOpenBooking} />
    </div>
  );
};
