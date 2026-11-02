import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { TESTIMONIALS, Testimonial } from '../data/salonData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-brand-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold-dark text-xs uppercase tracking-luxury font-medium mb-3">
            <Star className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
            <span>Client Praise & Stories</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-brand-charcoal leading-tight mb-4">
            Loved Across Cary & the Triangle
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-6" />
          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed">
            Read authentic reviews from guests who traded flights to Seoul or long drives to Washington D.C. for true Gangnam hair artistry right here in Cary, NC.
          </p>

          {/* Aggregate Rating Pill */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-stone-200 shadow-sm mt-6">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-semibold text-stone-800">5.0 / 5.0 Average</span>
            <span className="text-[11px] text-stone-400">• Verified Triangle Clientele</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t: Testimonial) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-sm hover:shadow-luxury hover:border-brand-gold/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Row: Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-stone-300 group-hover:text-brand-gold transition-colors" />
                </div>

                {/* Testimonial text */}
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-light mb-6">
                  "{t.text}"
                </p>
              </div>

              {/* Author & Service Footer */}
              <div className="pt-4 border-t border-stone-100">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-serif text-base text-brand-charcoal font-semibold">
                    {t.author}
                  </h4>
                  <span className="text-[10px] text-stone-400 uppercase tracking-wider">
                    {t.location}
                  </span>
                </div>
                
                <div className="text-[11px] text-brand-gold-dark font-medium truncate">
                  {t.service}
                </div>
                <div className="text-[10px] text-stone-400 mt-0.5 flex items-center gap-1">
                  <CheckCircle className="w-2.5 h-2.5 text-brand-gold" />
                  <span>With {t.stylist}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
