import React, { useState } from 'react';
import { Sparkles, RotateCcw, Calendar, CheckCircle } from 'lucide-react';

interface QuizProps {
  onBookRecommendation: (stylistId: string, serviceId: string) => void;
}

export const HairConsultationQuiz: React.FC<QuizProps> = ({ onBookRecommendation }) => {
  const [step, setStep] = useState<number>(1);
  const [hairType, setHairType] = useState<string>('');
  const [primaryGoal, setPrimaryGoal] = useState<string>('');

  const hairTypeOptions = [
    { id: 'fine-straight', label: 'Fine / Flat & Straight', desc: 'Lacks root volume and falls flat easily' },
    { id: 'wavy-frizzy', label: 'Wavy, Dry or Frizzy', desc: 'Puffs up in North Carolina humidity' },
    { id: 'coarse-resistant', label: 'Coarse / Puffy Asian Hair', desc: 'Resistant hair with sides that stick straight out' },
    { id: 'bleached-damaged', label: 'Color-Treated or Brittle', desc: 'Needs deep reconstruction & gentle chemical handling' },
  ];

  const primaryGoalOptions = [
    { id: 'effortless-waves', label: 'Effortless Wash-and-Wear Waves', desc: 'Soft C-Curl or S-Curl digital perm that looks like a blowout' },
    { id: 'clean-mens-grooming', label: 'Clean Korean Silhouette / Fade', desc: 'Men’s two-block, dandy cut, or side-taming down perm' },
    { id: 'scalp-revitalization', label: 'Scalp Detox & Waterfall Spa', desc: 'Relieve itchiness, buildup, tension, and stimulate hair growth' },
    { id: 'face-contouring-cut', label: 'Face-Framing Layers & Bangs', desc: 'Delicate see-through bangs, butterfly layers, and slimming contours' },
  ];

  const handleReset = () => {
    setStep(1);
    setHairType('');
    setPrimaryGoal('');
  };

  // Compute recommendation
  const getRecommendation = () => {
    if (primaryGoal === 'clean-mens-grooming' || hairType === 'coarse-resistant') {
      return {
        stylistId: 'jason',
        stylistName: 'Master Stylist Jason',
        serviceId: 'perm-down',
        serviceName: "Men's Precision Two-Block & Korean Down Perm",
        reason: "Jason's 15+ years of Seoul expertise in Asian hair architecture and precision side down perms make him your ideal match.",
        price: 'From $140 bundle',
        duration: '90 mins'
      };
    } else if (primaryGoal === 'effortless-waves') {
      return {
        stylistId: 'yuna',
        stylistName: 'Master Stylist Yuna',
        serviceId: 'perm-digital',
        serviceName: 'Gangnam Digital Setting Perm (C-Curl / S-Curl)',
        reason: "Yuna perfected 16 years of digital perms in Gangnam. She will create soft, bouncy, wash-and-wear waves tailored to your bone structure.",
        price: 'From $260',
        duration: '180 mins'
      };
    } else if (primaryGoal === 'scalp-revitalization') {
      return {
        stylistId: 'yuna',
        stylistName: 'Master Stylist Yuna or Jason',
        serviceId: 'scalp-luxury-headspa',
        serviceName: 'Gangnam 15-Step Luxury Scalp & Waterfall Head Spa',
        reason: "Our holistic trichological treatment will clarify your follicles, calm nervous tension, and restore natural scalp balance.",
        price: 'From $165',
        duration: '75 mins'
      };
    } else {
      return {
        stylistId: 'yuna',
        stylistName: 'Master Stylist Yuna',
        serviceId: 'cut-women',
        serviceName: "Women's Korean Signature Cut & Blowout with Bangs",
        reason: "Yuna's signature slide-cutting and see-through bangs will remove bulk and create an effortless, face-slimming silhouette.",
        price: 'From $85',
        duration: '60 mins'
      };
    }
  };

  const rec = getRecommendation();

  return (
    <section id="quiz" className="py-20 bg-brand-surface border-y border-stone-200 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Container */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-brand-sand shadow-luxury">
          
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold-dark text-xs uppercase tracking-luxury font-medium mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Personalized K-Beauty Diagnostic</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-brand-charcoal font-medium">
              Discover Your Ideal Korean Atelier Transformation
            </h3>
            <p className="text-xs text-stone-500 mt-2 font-light">
              Step {step} of 3 • Answer 2 quick questions to find your tailored service and master stylist match.
            </p>
            
            {/* Progress Bar */}
            <div className="w-full bg-stone-100 h-1.5 rounded-full mt-4 overflow-hidden">
              <div
                className="bg-brand-gold h-full transition-all duration-500"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>

          {/* STEP 1: Hair Type */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <h4 className="text-sm font-semibold text-stone-800 uppercase tracking-wider text-center">
                1. What is your current hair texture & condition?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {hairTypeOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setHairType(opt.id);
                      setStep(2);
                    }}
                    className={`p-5 rounded-2xl text-left border transition-all duration-200 hover:border-brand-gold hover:shadow-sm ${
                      hairType === opt.id
                        ? 'border-brand-gold bg-brand-gold/5 ring-1 ring-brand-gold'
                        : 'border-stone-200 bg-stone-50/50'
                    }`}
                  >
                    <p className="font-medium text-stone-900 text-sm mb-1">{opt.label}</p>
                    <p className="text-xs text-stone-500 font-light">{opt.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Primary Goal */}
          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <h4 className="text-sm font-semibold text-stone-800 uppercase tracking-wider text-center">
                2. What is your dream hair transformation goal?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {primaryGoalOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setPrimaryGoal(opt.id);
                      setStep(3);
                    }}
                    className={`p-5 rounded-2xl text-left border transition-all duration-200 hover:border-brand-gold hover:shadow-sm ${
                      primaryGoal === opt.id
                        ? 'border-brand-gold bg-brand-gold/5 ring-1 ring-brand-gold'
                        : 'border-stone-200 bg-stone-50/50'
                    }`}
                  >
                    <p className="font-medium text-stone-900 text-sm mb-1">{opt.label}</p>
                    <p className="text-xs text-stone-500 font-light">{opt.desc}</p>
                  </button>
                ))}
              </div>
              <div className="flex justify-between items-center pt-2">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs text-stone-500 hover:text-stone-800 flex items-center gap-1"
                >
                  ← Back to Step 1
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Results */}
          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
              <div className="p-6 rounded-2xl bg-brand-cream border border-brand-gold/30">
                <div className="flex items-center gap-2 text-brand-gold-dark text-xs uppercase tracking-wider font-semibold mb-2">
                  <CheckCircle className="w-4 h-4 text-brand-gold" />
                  <span>Your Curated K-Beauty Match</span>
                </div>
                
                <h4 className="font-serif text-2xl text-brand-charcoal font-medium mb-1">
                  {rec.serviceName}
                </h4>
                
                <p className="text-xs text-brand-gold-dark font-medium uppercase tracking-wider mb-4">
                  Recommended Stylist: {rec.stylistName} • {rec.duration} • {rec.price}
                </p>

                <p className="text-stone-600 text-sm leading-relaxed font-light mb-6">
                  {rec.reason}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button
                    onClick={() => onBookRecommendation(rec.stylistId, rec.serviceId)}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-brand-dark hover:bg-stone-800 text-brand-cream text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2 hover:text-brand-gold transition-colors"
                  >
                    <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                    <span>Book Recommended Service</span>
                  </button>

                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-5 py-3 rounded-full border border-stone-300 text-stone-600 hover:text-stone-900 text-xs uppercase tracking-wider flex items-center justify-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Retake Quiz</span>
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
