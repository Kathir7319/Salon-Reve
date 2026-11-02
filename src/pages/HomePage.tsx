import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { HairConsultationQuiz } from '../components/HairConsultationQuiz';
import { Testimonials } from '../components/Testimonials';
import { STYLISTS, SERVICES, SALON_INFO, VALUES } from '../data/salonData';
import { Sparkles, ArrowRight, Droplets, MapPin, CheckCircle2 } from 'lucide-react';

interface HomePageProps {
  onOpenBooking: (stylistId?: string, serviceId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBooking }) => {
  const featuredServices = SERVICES.filter((s) => s.popular);

  return (
    <div className="animate-fade-in">
      {/* 1. Hero Section */}
      <Hero onOpenBooking={() => onOpenBooking()} />

      {/* 2. Heritage Pillars Quick Teaser */}
      <section className="py-16 bg-brand-surface border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((val, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-[10px] tracking-luxury uppercase text-brand-gold-dark font-medium block mb-1">
                    {val.korean}
                  </span>
                  <h3 className="font-serif text-lg font-medium text-brand-charcoal mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs text-stone-500 font-light leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-luxury text-brand-charcoal hover:text-brand-gold-dark font-medium group"
            >
              <span>Learn More About Our Seoul Heritage &amp; Artisans</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-brand-gold-dark" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Meet Our Master Stylists Preview */}
      <section className="py-20 bg-brand-dark text-brand-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs uppercase tracking-widest font-medium mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Gangnam-Trained Leadership</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-cream font-normal mb-3">
              Meet Our Master Stylists
            </h2>
            <div className="w-12 h-0.5 bg-brand-gold mx-auto mb-4" />
            <p className="text-stone-300 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
              Master Stylist Yuna spent 16 years perfecting her craft in Seoul’s prestigious Gangnam district. Master Stylist Jason has over 15 years of elite professional salon expertise in Korea.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {STYLISTS.map((s) => (
              <div key={s.id} className="rounded-3xl bg-brand-card border border-stone-800 p-6 sm:p-8 flex flex-col justify-between group hover:border-brand-gold/40 transition-colors">
                <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start mb-6">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-28 h-28 rounded-2xl object-cover border border-brand-gold/30 shrink-0"
                  />
                  <div className="text-center sm:text-left">
                    <span className="text-[11px] text-brand-gold uppercase tracking-wider font-medium block">
                      {s.experience}
                    </span>
                    <h3 className="font-serif text-2xl text-brand-cream font-medium mt-1">
                      {s.name}
                    </h3>
                    <p className="text-xs text-stone-400 font-light mt-2 italic">
                      "{s.tagline}"
                    </p>
                  </div>
                </div>

                <div className="space-y-2 border-t border-stone-800/80 pt-4 mb-6">
                  {s.specialties.slice(0, 3).map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-stone-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-stone-800">
                  <Link
                    to="/about"
                    className="text-xs text-stone-400 hover:text-brand-gold flex items-center gap-1"
                  >
                    <span>Full Biography</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                  <button
                    onClick={() => onOpenBooking(s.id)}
                    className="px-5 py-2 rounded-full bg-brand-gold hover:bg-brand-gold-hover text-brand-dark text-xs uppercase tracking-wider font-semibold transition-colors"
                  >
                    Book with {s.name.split(' ')[2]}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-stone-700 hover:border-brand-gold text-stone-300 hover:text-brand-gold text-xs uppercase tracking-luxury transition-colors"
            >
              <span>Explore Stylist Philosophies &amp; About Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Signature Services Highlights */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <p className="text-xs uppercase tracking-luxury text-brand-gold-dark font-medium mb-2">
                Curated K-Beauty Transformations
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-brand-charcoal font-normal">
                Signature Atelier Offerings
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-luxury text-brand-gold-dark hover:underline font-semibold mt-4 md:mt-0"
            >
              <span>View Full Services &amp; Price Menu</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-luxury hover:border-brand-gold transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] uppercase tracking-wider text-brand-gold-dark font-semibold">
                      {service.category.toUpperCase()}
                    </span>
                    <span className="font-serif text-lg font-semibold text-brand-charcoal">
                      {service.price}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-medium text-brand-charcoal mb-2">
                    {service.name}
                  </h3>
                  <p className="text-xs text-stone-500 font-light leading-relaxed mb-4 line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] text-stone-400">{service.duration}</span>
                  <button
                    onClick={() => onOpenBooking(undefined, service.id)}
                    className="px-3.5 py-1.5 rounded-full bg-brand-dark text-brand-cream hover:text-brand-gold text-xs uppercase tracking-wider font-medium transition-colors"
                  >
                    Reserve
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Luxury Head Spa Feature Banner */}
          <div className="p-8 sm:p-10 rounded-3xl bg-brand-dark text-brand-cream border border-brand-gold/30 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold flex items-center justify-center lg:justify-start gap-1.5">
                <Droplets className="w-4 h-4" />
                <span>The Research Triangle's Premier Scalp Sanctuary</span>
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-brand-cream font-medium">
                The Gangnam 15-Step Waterfall Scalp &amp; Head Spa
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                Experience 75 minutes of microscopic diagnostic trichology, warm herbal pore steaming, acupressure meridian massage, and the famous halo rainfall waterfall.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                to="/head-spa"
                className="px-6 py-3.5 rounded-full border border-brand-gold/40 hover:border-brand-gold text-brand-gold text-xs uppercase tracking-wider font-medium text-center transition-colors"
              >
                Learn About Head Spa
              </Link>
              <button
                onClick={() => onOpenBooking(undefined, 'scalp-luxury-headspa')}
                className="px-6 py-3.5 rounded-full bg-brand-gold hover:bg-brand-gold-hover text-brand-dark text-xs uppercase tracking-wider font-semibold shadow-glow transition-all"
              >
                Reserve Session
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive Hair Consultation Quiz */}
      <HairConsultationQuiz onBookRecommendation={onOpenBooking} />

      {/* 6. Testimonials */}
      <Testimonials />

      {/* 7. Cary Atelier Contact & Hours Quick Card */}
      <section className="py-16 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-brand-surface border border-brand-sand flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-gold-dark font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>Cary, North Carolina</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-brand-charcoal font-medium">
                Visit Our Cary Atelier
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-light">
                {SALON_INFO.address.street}, {SALON_INFO.address.city}, {SALON_INFO.address.state} {SALON_INFO.address.zip} • Direct Line: {SALON_INFO.contact.phone}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-full bg-brand-dark hover:bg-stone-800 text-brand-cream hover:text-brand-gold text-xs uppercase tracking-wider font-medium transition-colors"
              >
                Location &amp; Hours
              </Link>
              <button
                onClick={() => onOpenBooking()}
                className="px-6 py-3.5 rounded-full bg-brand-gold hover:bg-brand-gold-hover text-brand-dark text-xs uppercase tracking-wider font-semibold shadow-sm transition-colors"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
