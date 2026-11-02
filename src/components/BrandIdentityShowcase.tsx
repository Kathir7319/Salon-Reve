import React, { useState } from 'react';
import { Logo } from './Logo';
import { Sparkles, Download, Check } from 'lucide-react';

export const BrandIdentityShowcase: React.FC = () => {
  const [downloadedAsset, setDownloadedAsset] = useState<string | null>(null);

  const handleDownload = (fileName: string, url: string) => {
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setDownloadedAsset(fileName);
    setTimeout(() => setDownloadedAsset(null), 3000);
  };

  return (
    <section id="brand-identity" className="py-20 bg-brand-surface border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-gold/10 text-brand-gold-dark text-xs uppercase tracking-luxury font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Official Atelier Brand Identity</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-charcoal font-normal leading-tight mb-4">
            The Salon Rêve Signature Mark
          </h2>
          <div className="w-16 h-0.5 bg-brand-gold mx-auto mb-4" />
          <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
            Crafted to reflect authentic Gangnam luxury: an intertwining of the letter <strong className="font-semibold text-stone-900">“R”</strong> with the fluid contour of a Korean digital perm C-curl wave, the precision of master styling scissors, and refined Hangul script (<span className="text-brand-charcoal font-medium">살롱 레브</span>).
          </p>
        </div>

        {/* 3 Logo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Card 1: Monogram Seal */}
          <div className="p-8 rounded-3xl bg-brand-dark text-brand-cream border border-brand-gold/30 shadow-luxury flex flex-col items-center justify-between text-center group">
            <div className="space-y-4 flex flex-col items-center">
              <span className="text-[10px] uppercase tracking-luxury text-brand-gold font-medium">
                Atelier Seal &amp; Favicon
              </span>
              <div className="p-6 rounded-2xl bg-brand-darker border border-stone-800 group-hover:scale-105 transition-transform duration-300">
                <Logo variant="mark" size="xl" />
              </div>
              <h3 className="font-serif text-xl font-medium text-brand-cream">
                The Monogram Emblem
              </h3>
              <p className="text-xs text-stone-400 font-light leading-relaxed">
                Circular wax-seal medallion with dual gold hairline rings, C-curl perm wave flourish, and Cheongdam celestial star.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-800 w-full">
              <button
                onClick={() => handleDownload('salon-reve-mark.svg', '/logo-mark.svg')}
                className="w-full py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-brand-gold text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2 border border-brand-gold/30 transition-colors"
              >
                {downloadedAsset === 'salon-reve-mark.svg' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Downloaded!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    <span>Download SVG Mark</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 2: Full Horizontal Logo (Dark) */}
          <div className="p-8 rounded-3xl bg-brand-darker text-brand-cream border border-stone-800 shadow-luxury flex flex-col items-center justify-between text-center group">
            <div className="space-y-4 flex flex-col items-center w-full">
              <span className="text-[10px] uppercase tracking-luxury text-brand-gold font-medium">
                Primary Header &amp; Signage
              </span>
              <div className="p-6 rounded-2xl bg-brand-dark border border-stone-800 w-full flex items-center justify-center group-hover:scale-102 transition-transform duration-300">
                <Logo variant="full" theme="dark" size="lg" />
              </div>
              <h3 className="font-serif text-xl font-medium text-brand-cream">
                Horizontal Master Logo
              </h3>
              <p className="text-xs text-stone-400 font-light leading-relaxed">
                Complete horizontal brandmark paired with serif letterspacing and Cary/Seoul pedigree subtitles.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-800 w-full">
              <button
                onClick={() => handleDownload('salon-reve-white.svg', '/logo-white.svg')}
                className="w-full py-2.5 rounded-full bg-brand-gold hover:bg-brand-gold-hover text-brand-dark text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2 transition-colors"
              >
                {downloadedAsset === 'salon-reve-white.svg' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-brand-dark" />
                    <span>Downloaded!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Dark Banner SVG</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 3: Full Horizontal Logo (Light) */}
          <div className="p-8 rounded-3xl bg-white text-stone-900 border border-stone-200 shadow-luxury flex flex-col items-center justify-between text-center group">
            <div className="space-y-4 flex flex-col items-center w-full">
              <span className="text-[10px] uppercase tracking-luxury text-brand-gold-dark font-medium">
                Print, Cards &amp; Letterhead
              </span>
              <div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 w-full flex items-center justify-center group-hover:scale-102 transition-transform duration-300">
                <Logo variant="stacked" theme="light" size="lg" />
              </div>
              <h3 className="font-serif text-xl font-medium text-stone-900">
                Editorial Stacked Mark
              </h3>
              <p className="text-xs text-stone-500 font-light leading-relaxed">
                Vertical stacked composition ideal for salon appointment cards, retail product packaging, and gift vouchers.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 w-full">
              <button
                onClick={() => handleDownload('salon-reve-full.svg', '/logo-full.svg')}
                className="w-full py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-brand-cream text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2 transition-colors"
              >
                {downloadedAsset === 'salon-reve-full.svg' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Downloaded!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Light SVG</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

        {/* Brand Palette & Typography Tokens */}
        <div className="p-6 rounded-2xl bg-white border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-stone-600">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <span className="w-7 h-7 rounded-full bg-[#121211] border-2 border-white shadow-sm" title="Noir Obsidian #121211" />
              <span className="w-7 h-7 rounded-full bg-[#C5A880] border-2 border-white shadow-sm" title="Champagne Gold #C5A880" />
              <span className="w-7 h-7 rounded-full bg-[#FDFBF7] border-2 border-stone-200 shadow-sm" title="Porcelain Cream #FDFBF7" />
              <span className="w-7 h-7 rounded-full bg-[#6B8772] border-2 border-white shadow-sm" title="Botanical Sage #6B8772" />
            </div>
            <div>
              <span className="font-semibold text-stone-800 block">Brand Palette Tokens</span>
              <span className="text-[11px] text-stone-500">Noir Obsidian • Champagne Gold • Porcelain Cream • Botanical Celadon</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-stone-500 text-[11px]">
            <span>Serif: <strong className="font-serif text-stone-800 text-sm">Cormorant Garamond</strong></span>
            <span>•</span>
            <span>Sans: <strong className="font-sans text-stone-800">Plus Jakarta Sans</strong></span>
            <span>•</span>
            <span>Hangul: <strong className="text-stone-800">Noto Serif KR</strong></span>
          </div>
        </div>

      </div>
    </section>
  );
};
