export interface Stylist {
  id: string;
  name: string;
  koreanName: string;
  title: string;
  experience: string;
  tagline: string;
  bio: string;
  heritage: string;
  specialties: string[];
  signatureTechniques: string[];
  image: string;
  quote: string;
  availability: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  koreanName: string;
  category: 'cuts' | 'perms' | 'color' | 'scalp' | 'treatment';
  price: string;
  duration: string;
  description: string;
  includes: string[];
  recommendedFor: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  service: string;
  stylist: string;
  rating: number;
  text: string;
  date: string;
}

export interface HeadSpaStep {
  step: number;
  title: string;
  koreanTitle: string;
  duration: string;
  description: string;
  benefit: string;
}

export const SALON_INFO = {
  name: "Salon Rêve",
  koreanName: "살롱 레브",
  tagline: "Authentic Korean Hair Atelier & Luxury Head Spa",
  headline: "Experience Authentic K-Beauty Transformations in Cary.",
  subheadline: "Modern Korean styling, precision cuts, and luxury head spas crafted by elite, Gangnam-trained master stylists.",
  address: {
    street: "1205 Kildaire Farm Rd, Suite 108",
    city: "Cary",
    state: "NC",
    zip: "27511",
    region: "Research Triangle (Cary • Raleigh • Durham)",
    landmark: "Conveniently located near downtown Cary with complimentary private guest parking",
    mapQuery: "1205 Kildaire Farm Rd, Cary, NC 27511"
  },
  contact: {
    phone: "(919) 439-7383",
    displayPhone: "919.439.RÊVE",
    email: "concierge@salonreve-cary.com",
    instagram: "@salonreve.cary",
    instagramUrl: "https://instagram.com"
  },
  hours: [
    { day: "Tuesday – Friday", time: "10:00 AM – 7:00 PM", note: "Appointments & Consultations" },
    { day: "Saturday", time: "9:30 AM – 6:30 PM", note: "Prime Weekend Appointments" },
    { day: "Sunday", time: "11:00 AM – 5:00 PM", note: "Exclusive VIP Bookings Only" },
    { day: "Monday", time: "Closed", note: "Master Stylist Technical Training & Rest" }
  ]
};

export const STYLISTS: Stylist[] = [
  {
    id: "yuna",
    name: "Master Stylist Yuna",
    koreanName: "마스터 유나",
    title: "Artistic Director & Master Stylist",
    experience: "16 Years in Seoul's Prestigious Gangnam District",
    tagline: "Pioneer of effortless feminine volume, ethereal curtain bangs, and bespoke digital perms.",
    bio: "Master Stylist Yuna spent 16 years perfecting her craft in Seoul’s prestigious Gangnam district—the epicentre of global Korean beauty and haute couture hair design. Having directed hair transformations for high-profile Seoul clientele and luxury brand editorials in Cheongdam-dong, Yuna brings her coveted aesthetic sensitivity directly to Cary, North Carolina.",
    heritage: "Trained under top master artisans in Gangnam, Yuna's technique focuses on structural facial contouring—cutting hair to frame cheekbones, soften jawlines, and create that effortless, airy 'chong-soon' elegance that defines modern Korean cinema and fashion.",
    specialties: [
      "Signature Korean Digital Perm (C-Curl & S-Curl)",
      "Korean 'See-Through' & Framing Curtain Bangs",
      "Soft Butterfly & Feather Layered Cuts",
      "Milk Tea & Korean Ash Tonal Formulation",
      "Holistic Gangnam Head Spa Scalp Massage"
    ],
    signatureTechniques: [
      "Face-Contouring Feathered Slide Cutting",
      "Temperature-Calibrated Heat Rod Sculpting",
      "Organic Plant-Based Keratin Infusion"
    ],
    image: "https://images.unsplash.com/photo-1595956553066-fe24a8c33395?auto=format&fit=crop&w=800&q=80",
    quote: "True K-Beauty is never heavy or artificial. It is the art of creating movement, light, and harmony so that you wake up with breathtaking hair that looks completely effortless.",
    availability: "Tuesday – Saturday"
  },
  {
    id: "jason",
    name: "Master Stylist Jason",
    koreanName: "마스터 제이슨",
    title: "Creative Director & Master Stylist",
    experience: "Over 15 Years of Elite Professional Salon Expertise in Korea",
    tagline: "Master of structural Korean two-block cuts, precision down perms, and scalp restoration.",
    bio: "Master Stylist Jason has over 15 years of elite professional salon expertise in Korea, leading premier hair studios in Seoul and training dozens of junior stylists in precision architecture. Jason is renowned for his mastery of difficult Asian hair textures, structural men's grooming, and revitalizing stressed hair with therapeutic head spa methodologies.",
    heritage: "Jason combines the rigorous precision of Korean barbering architecture with cutting-edge chemical formulation science. He perfected the world-renowned Korean 'Down Perm' and iron texture techniques that tame stubborn cowlicks and side flares with surgical accuracy.",
    specialties: [
      "Precision K-Style Men's Two-Block Cut",
      "Korean Down Perm & Side-Calming Treatment",
      "Volume Magic Straightening Perm (볼륨매직)",
      "Bespoke Ash & Dimensional Color Chemistry",
      "Clinical Trichology Scalp Rehabilitation"
    ],
    signatureTechniques: [
      "Micro-Section Scalpel Scissors Architecture",
      "Korean Follicle Down-Fixing Chemistry",
      "Acupressure Meridian Head & Neck Spa"
    ],
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80",
    quote: "Precision is invisible. When hair is engineered with correct structural balance and healthy roots, it naturally holds its silhouette throughout every humid Carolina day.",
    availability: "Tuesday – Sunday"
  }
];

export const VALUES = [
  {
    title: "Authentic Gangnam Pedigree",
    korean: "강남 오리지널 헤리티지",
    description: "Our master stylists spent over three combined decades in Seoul's top luxury ateliers. No diluted trends—only true, master-level Korean technique.",
    icon: "Award"
  },
  {
    title: "Facial Architecture Design",
    korean: "퍼스널 페이스 컨투어링",
    description: "We analyze your facial structure, cheekbone projection, and head contour to engineer layers and bangs that naturally flatter your unique features.",
    icon: "Sparkles"
  },
  {
    title: "Holistic Scalp Sanctuary",
    korean: "프리미엄 두피 스파 테라피",
    description: "Healthy hair begins at the scalp root. Our Cary studio features a dedicated Japanese-Korean hydrotherapy waterfall head spa for deep rejuvenation.",
    icon: "Droplets"
  },
  {
    title: "Pure Korean Formulations",
    korean: "청정 프리미엄 포뮬러",
    description: "We exclusively import premium, low-ammonia, botanical-rich perms and treatments directly from Korea and Japan to preserve maximum hair integrity.",
    icon: "ShieldCheck"
  }
];

export const SERVICES: ServiceItem[] = [
  // CUTS
  {
    id: "cut-women",
    name: "Women's Korean Signature Cut & Blowout",
    koreanName: "여성 시그니처 디자인 컷 & 드라이",
    category: "cuts",
    price: "From $85",
    duration: "60 mins",
    description: "Bespoke Korean styling designed around your facial shape. Includes aromatic botanical shampoo, signature face-framing layers, texture weight removal, and Korean salon blowout.",
    includes: ["Detailed Facial Contour Consultation", "Herbal Botanical Scalp Wash", "Weightless Korean Slide Cutting", "K-Style Volume C-Curl / S-Curl Blowdry"],
    recommendedFor: "Anyone seeking effortless, airy movement, face-slimming framing, or butterfly layering.",
    popular: true
  },
  {
    id: "cut-men",
    name: "Men's K-Style Architecture Cut & Styling",
    koreanName: "남성 프리미엄 디자인 컷 & 스타일링",
    category: "cuts",
    price: "From $65",
    duration: "45 mins",
    description: "High-precision Korean men's haircut. Features customized two-block or taper fades, soft texture point-cutting on top, hot towel finish, and modern matte wax styling.",
    includes: ["Hair Growth Direction Analysis", "Clean Two-Block / Low Taper Sculpting", "Scalp Refresh Rinse", "Hot Steam Neck Towel & Pomade Styling"],
    recommendedFor: "Men seeking the iconic Seoul clean silhouette, dandy look, comma hair, or textured crop."
  },
  {
    id: "cut-bangs",
    name: "Korean See-Through Bangs & Face-Framing Sculpting",
    koreanName: "시스루 뱅 & 페이스라인 디자인 컷",
    category: "cuts",
    price: "From $35",
    duration: "30 mins",
    description: "The hallmark of K-Beauty. Delicate micro-fringe that can be worn down for an innocent, youthful look or swept seamlessly to the side into soft cheek-framing tendrils.",
    includes: ["Face Shape & Forehead Analysis", "Micro-Fringe Feathering", "Sideburn Tendril Transition", "Thermal Round Brush Technique Lesson"],
    recommendedFor: "Clients wanting to refresh their look instantly without losing hair length."
  },

  // PERMS
  {
    id: "perm-digital",
    name: "Gangnam Digital Setting Perm (C-Curl / S-Curl)",
    koreanName: "강남 열펌 디지털 세팅펌 (C컬/S컬)",
    category: "perms",
    price: "From $260",
    duration: "180 mins",
    description: "The gold standard of Korean effortless waves. Using imported computerized ceramic heat rods and Korean pre-conditioning treatments, we create natural, bouncy waves that look like a salon blowout everyday.",
    includes: ["Korean CMC Pre-Treatment Infusion", "Computerized Heat-Regulated Rod Set", "Neutralizing Gloss Rinse", "Blow-Dry At-Home Styling Masterclass"],
    recommendedFor: "Medium to long hair desiring soft, bouncy, wash-and-wear waves with 4–6 months longevity.",
    popular: true
  },
  {
    id: "perm-volume-magic",
    name: "Korean Volume Magic Straight Perm",
    koreanName: "프리미엄 볼륨 매직 스트레이트",
    category: "perms",
    price: "From $280",
    duration: "210 mins",
    description: "Unlike harsh pin-straight flattening, Korean Volume Magic smooths out stubborn frizz and curl while maintaining natural, curving volume at the roots and soft inward-bending ends.",
    includes: ["Bond-Rebuilding Keratin Therapy", "Curved Ceramic Iron Precision Glide", "Silk Conditioning Barrier", "High-Gloss Glass Finish"],
    recommendedFor: "Frizzy, curly, or unruly hair desiring silky, reflective smoothness with natural movement."
  },
  {
    id: "perm-root-volume",
    name: "Korean Root Lift & Volume Perm (Aeda Perm)",
    koreanName: "뿌리 볼륨 애드펌 (Root Volume)",
    category: "perms",
    price: "From $140",
    duration: "90 mins",
    description: "Specialized Korean micro-rods applied strictly to the first 2 inches of the root to lift flat hair, providing lightweight cranial fullness and bounce without creasing.",
    includes: ["Crown & Parting Architecture Mapping", "Zero-Crease Micro Rod Setting", "Gentle Organic Root Neutralizer", "Crown Volume Blowout"],
    recommendedFor: "Fine, limp hair that quickly falls flat against the scalp."
  },
  {
    id: "perm-down",
    name: "Korean Men's Precision Down Perm",
    koreanName: "남성 다운펌 (Side Hair Calming)",
    category: "perms",
    price: "From $75",
    duration: "45 mins",
    description: "The secret behind every sharp Korean actor and idol hairstyle. Gently flattens resistant, puffy side hair to hug the scalp cleanly, narrowing head silhouette.",
    includes: ["Side Hair Root Direction Assessment", "Calming Korean Down Perm Formulation", "Scalp Soothing Barrier", "Styling Finishing"],
    recommendedFor: "Men with coarse, stubborn hair that sticks straight out at the sides.",
    popular: true
  },

  // SCALP & HEAD SPA
  {
    id: "scalp-luxury-headspa",
    name: "Gangnam 15-Step Luxury Scalp & Waterfall Head Spa",
    koreanName: "강남 15단계 프리미엄 두피 & 워터폴 헤드스파",
    category: "scalp",
    price: "From $165",
    duration: "75 mins",
    description: "Our signature holistic sensory journey. Combines a 200x microscopic scalp diagnostic, deep pore clarifying peel, warm herbal mist steamer, Korean meridian acupressure massage, and the famous circular rainfall halo waterfall.",
    includes: ["Microscopic Digital Scalp Scan", "Herbal Exfoliating Scalp Scale", "Micro-Mist Steam Infusion", "Acupressure Meridian Massage", "Rainfall Halo Hydrotherapy", "Custom Tonic Laser/Cold Light Infusion"],
    recommendedFor: "Stressed, itchy, or oily scalps, hair thinning prevention, or pure luxury relaxation.",
    popular: true
  },
  {
    id: "scalp-detox-quick",
    name: "Express Botanical Scalp Detox Add-On",
    koreanName: "보태니컬 두피 디톡스 스케일링",
    category: "scalp",
    price: "From $65",
    duration: "30 mins",
    description: "A purifying add-on for any cut or color. Removes silicone buildup, hard water minerals, and excess sebum with organic Korean tea tree and salicylic plant complex.",
    includes: ["Herbal Tea Tree Scalp Scrub", "Clarifying Shampoo Rinse", "Menthol Cooling Scalp Pack", "Refreshing Scalp Tonic Spritz"],
    recommendedFor: "Anyone receiving a haircut or blowout who wants a refreshed, lightweight scalp."
  },

  // COLOR
  {
    id: "color-korean-gloss",
    name: "Korean Tone-On-Tone Gloss & Milk Tea Color",
    koreanName: "밀크티 & 애쉬 퍼스널 컬러 염색",
    category: "color",
    price: "From $150",
    duration: "120 mins",
    description: "Customized color formulas inspired by Seoul aesthetics: Korean Milk Tea Beige, Muted Charcoal Ash, Honey Chestnut, and Rose Brown. Formulated with low-ammonia botanical oils.",
    includes: ["Personal Color Skin Tone Undertone Test", "Scalp Barrier Protective Serum", "Custom K-Beauty Color Blend", "Post-Color Acidic Lock Glossing Mask"],
    recommendedFor: "Subtle, luminous, translucent color that complements neutral and warm Asian undertones."
  },
  {
    id: "color-balayage",
    name: "Dimensional Sombre & Korean Ribbon Balayage",
    koreanName: "솜브레 & 입체 리본 발레아쥬",
    category: "color",
    price: "From $290",
    duration: "210 mins",
    description: "Soft, seamless micro-strands that blend effortlessly with natural dark roots. Gives a sun-lit glow with zero harsh line of demarcation as it grows out.",
    includes: ["Plex Bond-Building Multiplier", "Micro-Ribbon Foil Placement", "Custom Ash/Neutralizer Gloss Glaze", "Hydrating Mask & Blowout"],
    recommendedFor: "Low-maintenance luxury color with stunning multidimensional depth."
  },

  // TREATMENTS
  {
    id: "treatment-tokio-inki",
    name: "Korean Keratin Glass Silk Repair Treatment",
    koreanName: "글래스 실크 복구 클리닉",
    category: "treatment",
    price: "From $130",
    duration: "60 mins",
    description: "A deep 5-step molecular reconstructive treatment that fills damaged hair cortices with hydrolyzed silk peptides, hyaluronic acid, and ceramides.",
    includes: ["Pre-Wash Chelating Clarifier", "Amino Acid Moisture Injection", "Nano-Steam Penetration Mist", "Cuticle Sealing Thermal Lock"],
    recommendedFor: "Bleached, heat-damaged, or brittle hair needing immediate mirror shine and strength."
  }
];

export const HEAD_SPA_STEPS: HeadSpaStep[] = [
  {
    step: 1,
    title: "Digital Scalp Diagnostic",
    koreanTitle: "정밀 두피 진단",
    duration: "10 mins",
    description: "We use a 200x optical trichoscope to inspect your scalp pore health, follicle density, sebum level, and sensitivity.",
    benefit: "Pinpoints root issues before treatment begins"
  },
  {
    step: 2,
    title: "Organic Herb Pore Peeling",
    koreanTitle: "천연 허브 딥 스케일링",
    duration: "10 mins",
    description: "Application of Korean fermented herbal scaling cream to dissolve hardened sebum plugs and dead skin cells around follicles.",
    benefit: "Unclogs suffocated follicles and reduces flakiness"
  },
  {
    step: 3,
    title: "Nano Micro-Steam Mist",
    koreanTitle: "나노 스팀 온열 테라피",
    duration: "15 mins",
    description: "Warm, ionized nano-mist gently opens pores, boosts microcirculation, and deeply softens the cuticle layer.",
    benefit: "Amplifies nutrient absorption and eases head tension"
  },
  {
    step: 4,
    title: "Acupressure Meridian Massage",
    koreanTitle: "지압 경락 두피 & 림프 마사지",
    duration: "20 mins",
    description: "Targeted Korean acupressure on vital cranial points (Baihui, Fengchi, Taiyang) and neck lymphatic drainage channels.",
    benefit: "Instant tension relief, migraine reduction, and lymphatic detox"
  },
  {
    step: 5,
    title: "Circular Waterfall Halo Ring",
    koreanTitle: "원형 레인폴 워터폴 힐링",
    duration: "10 mins",
    description: "Warm, rhythmic cascading mineral water continuously envelops the head in soothing hydrotherapy accompanied by calming soundscapes.",
    benefit: "Deep meditative calm and gentle scalp rinse"
  },
  {
    step: 6,
    title: "Peptide Tonic & Laser Infusion",
    koreanTitle: "줄기세포 토닉 & 쿨링 인퓨전",
    duration: "10 mins",
    description: "Application of concentrated Korean scalp growth peptides followed by cryogenic cold-air calming to seal the pores.",
    benefit: "Strengthens hair roots and prevents thinning"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "rev-1",
    author: "Grace L.",
    location: "Cary, NC",
    service: "Korean Digital S-Curl Perm & Bangs",
    stylist: "Master Stylist Yuna",
    rating: 5,
    text: "Finding Yuna in Cary is literally a dream come true! I used to drive to Annandale or wait until trips to Seoul just to get my digital perm done properly. Yuna's technique is authentic Gangnam precision. My curls are bouncy, soft, and my see-through bangs frame my face so naturally. 100/10!",
    date: "2 weeks ago"
  },
  {
    id: "rev-2",
    author: "David K.",
    location: "Raleigh, NC",
    service: "Two-Block Cut & Down Perm",
    stylist: "Master Stylist Jason",
    rating: 5,
    text: "Jason is hands down the best Korean men's stylist on the East Coast. My side hair used to flare out horribly, but his down perm makes it lay flat and clean for over two months. The precision in his fading and scissor work is unmatched. Worth every penny.",
    date: "1 month ago"
  },
  {
    id: "rev-3",
    author: "Hannah M.",
    location: "Durham / RTP, NC",
    service: "15-Step Luxury Head Spa & Cut",
    stylist: "Master Stylist Yuna",
    rating: 5,
    text: "The Waterfall Head Spa was an out-of-body experience. The scalp camera showed how congested my follicles were, and after the herbal steam and waterfall halo, my scalp felt like it could breathe for the first time in years. Plus, my blowout lasted 4 days!",
    date: "3 weeks ago"
  },
  {
    id: "rev-4",
    author: "Sarah W.",
    location: "Morrisville, NC",
    service: "Korean Milk Tea Color & Feathered Cut",
    stylist: "Master Stylist Jason",
    rating: 5,
    text: "The salon aesthetic is stunning, calming, and ultra-luxurious. Jason customized the exact cool ash milk-tea shade I wanted without turning it brassy. It's so rare to find stylists with over 15 years of genuine Korean experience right here in Cary.",
    date: "Last month"
  }
];

export const FAQS = [
  {
    question: "What makes Salon Rêve different from traditional salons?",
    answer: "Our master stylists Jason and Yuna trained and practiced for over 15 and 16 years respectively in Seoul's prestigious Gangnam district. We specialize exclusively in authentic Korean hair architecture—including face-contouring slide cuts, computerized digital perms, Korean down perms, and multi-step hydrotherapy head spas using products imported directly from Korea."
  },
  {
    question: "Do you only work with Asian hair textures?",
    answer: "Absolutely not! While our master stylists possess world-class expertise with resilient, coarse, or straight Asian hair, our advanced cutting, organic perms, and scalp therapy treatments are universally beneficial for all hair types, textures, and ethnicities. Everyone is warmly welcome."
  },
  {
    question: "How long does a Korean Digital Perm last?",
    answer: "Unlike traditional chemical perms that can look frizzy, a Korean Digital Perm creates soft, defined C-curls or S-curls that look like a blowout. With proper care and gentle twirl-drying, results typically last 4 to 6 months."
  },
  {
    question: "What should I expect during the 15-Step Waterfall Head Spa?",
    answer: "You will recline in our fully ergonomic Japanese wash bed. The experience begins with a digital microscopic scalp analysis, followed by botanical pore scaling, warm herbal steam, acupressure meridian massage, our signature circular waterfall halo ring, and restorative growth tonic infusion."
  },
  {
    question: "Where are you located in Cary, NC?",
    answer: "We are conveniently located at 1205 Kildaire Farm Rd, Suite 108, Cary, NC 27511. We are easily accessible from anywhere in the Research Triangle (Raleigh, Durham, Morrisville, Apex) with ample dedicated free parking right in front of the salon."
  }
];
