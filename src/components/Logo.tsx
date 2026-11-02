import React from 'react';

interface LogoProps {
  variant?: 'mark' | 'full' | 'stacked';
  theme?: 'dark' | 'light' | 'auto';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  theme = 'light',
  className = '',
  size = 'md',
}) => {
  // Dimensions map
  const markSizeMap = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  const isDark = theme === 'dark';

  if (variant === 'mark') {
    return (
      <div className={`relative shrink-0 ${markSizeMap[size]} ${className}`}>
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full drop-shadow-sm select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoMarkGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EAD7B5" />
              <stop offset="50%" stopColor="#C5A880" />
              <stop offset="100%" stopColor="#9E7E56" />
            </linearGradient>
            <linearGradient id="logoMarkDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1A1918" />
              <stop offset="100%" stopColor="#0E0E0D" />
            </linearGradient>
          </defs>

          {/* Atelier Disk */}
          <circle cx="60" cy="60" r="58" fill="url(#logoMarkDark)" stroke="url(#logoMarkGold)" strokeWidth="1.5" />
          <circle cx="60" cy="60" r="52" fill="none" stroke="#C5A880" strokeWidth="0.75" strokeOpacity="0.4" strokeDasharray="2 3" />

          {/* Stem & Serifs */}
          <path d="M 40 34 L 46 34 L 46 86 L 40 86" fill="none" stroke="url(#logoMarkGold)" strokeWidth="2" strokeLinecap="round" />
          <path d="M 43 36 L 43 84" fill="none" stroke="url(#logoMarkGold)" strokeWidth="4.5" strokeLinecap="square" />

          {/* Flowing Wave Bowl */}
          <path d="M 43 38 C 65 37, 78 43, 78 54 C 78 65, 65 69, 44 69" fill="none" stroke="url(#logoMarkGold)" strokeWidth="3" strokeLinecap="round" />
          <path d="M 44 43 C 60 42, 71 46, 71 54 C 71 61, 61 65, 44 65" fill="none" stroke="url(#logoMarkGold)" strokeWidth="1" strokeOpacity="0.6" />

          {/* Swirling C-Curl Leg */}
          <path d="M 56 67 C 68 76, 77 82, 88 84" fill="none" stroke="url(#logoMarkGold)" strokeWidth="2.5" strokeLinecap="round" />

          {/* Sparkle Accent */}
          <g transform="translate(77, 33)">
            <circle cx="0" cy="0" r="2.5" fill="url(#logoMarkGold)" />
            <path d="M 0 -6 L 0 6 M -6 0 L 6 0" stroke="url(#logoMarkGold)" strokeWidth="1" strokeLinecap="round" />
          </g>

          {/* Korean Hangul: 살롱 레브 */}
          <text
            x="60"
            y="103"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fontSize="5.5"
            fontWeight="600"
            fill="#EAD7B5"
            letterSpacing="4"
            textAnchor="middle"
            opacity="0.9"
          >
            살롱 레브
          </text>
        </svg>
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <Logo variant="mark" size={size} className="mb-3" />
        <span className={`font-serif text-2xl tracking-[0.2em] font-normal ${isDark ? 'text-brand-cream' : 'text-brand-charcoal'}`}>
          SALON RÊVE
        </span>
        <div className="w-12 h-0.5 bg-brand-gold my-1.5" />
        <span className="text-[10px] tracking-luxury uppercase text-brand-gold-dark font-medium">
          살롱 레브 • K-Beauty Atelier
        </span>
        <span className="text-[9px] tracking-widest uppercase text-stone-400">
          Cary, NC
        </span>
      </div>
    );
  }

  // Default 'full' variant
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      <Logo variant="mark" size={size} />
      <div className="flex flex-col justify-center">
        <span
          className={`font-serif text-2xl sm:text-[26px] tracking-[0.18em] font-light leading-none ${
            isDark ? 'text-brand-cream' : 'text-brand-cream'
          }`}
        >
          SALON RÊVE
        </span>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-[10px] tracking-luxury uppercase text-brand-gold font-medium font-sans leading-none">
            Cary • Seoul Heritage
          </span>
          <span className="text-[9px] text-stone-500 font-sans tracking-widest hidden sm:inline">
            살롱 레브
          </span>
        </div>
      </div>
    </div>
  );
};
