export type ConsultationPackage = {
  id: string
  name: string
  description: string
  youProvide: string        // what the client needs to share
  duration: string
  price: number
  includes: string[]
  delivery: "report" | "video-call" | "audio" | "live-chat"
  source: string
}

export type MysticalScience = {
  slug: string
  id: string
  name: string
  originalName: string      // Sanskrit / Persian / other language name
  category:
    | "numerology" | "astrology" | "vastu" | "nameology"
    | "palmistry" | "tarot" | "nadi" | "gemstone"
    | "rudraksha" | "lal-kitab" | "face-reading" | "chakra"
    | "prashna" | "mantra"
  icon: string
  theme: {
    bg: string; nav: string; navText: string
    accent: string; accentText: string
    badge: string; badgeText: string
  }
  tagline: string
  description: string
  origin: string
  significance: string
  whatItReveals: string[]
  packages: ConsultationPackage[]
  prominentTraditions: string[]
  bestFor: string[]           // life problems it addresses
  auspiciousTimes: string[]
  diaspora: string[]
  tags: string[]
}

export const mysticalSciences: MysticalScience[] = [

  // ── 1. NUMEROLOGY ──────────────────────────────────────────────────────────
  {
    slug: "numerology",
    id: "MS001",
    name: "Numerology",
    originalName: "Ank Jyotish / Ank Shastra",
    category: "numerology",
    icon: "🔢",
    theme: {
      bg: "bg-violet-50",
      nav: "bg-violet-800",
      navText: "text-white",
      accent: "bg-violet-600",
      accentText: "text-white",
      badge: "bg-violet-100",
      badgeText: "text-violet-800",
    },
    tagline: "Every number vibrates. Yours has a message.",
    description:
      "Numerology (Ank Jyotish) is the sacred science of numbers — the belief that the universe speaks in digits, and your birth date and name are not accidental. Each number carries a vibrational frequency that shapes your personality, destiny, and life path. Rooted in Vedic, Pythagorean, and Chaldean traditions, numerology has been used by saints, kings, and scholars across every civilization for thousands of years.",
    origin: "Ancient India (Vedic Ank Shastra), Babylon, Pythagorean Greece",
    significance:
      "Pythagoras said: 'Numbers rule the universe.' In the Vedic tradition, every letter, every deity, and every cosmic event is governed by a number. Your Life Path, Destiny, Soul Urge, and Personality numbers form a complete map of your incarnation.",
    whatItReveals: [
      "Your Life Path Number — the master theme of this lifetime",
      "Your Destiny Number — what you are here to achieve",
      "Your Soul Urge Number — your deepest inner motivations",
      "Your Personal Year Number — what 2025/2026 holds for you",
      "Why certain ages (21, 28, 35, 42…) mark turning points",
      "Name vibration compatibility for marriage, business, and children",
      "Lucky numbers, colors, and days specific to your chart",
      "Karmic debt numbers that explain recurring struggles",
    ],
    packages: [
      {
        id: "life-path-report",
        name: "Life Path & Destiny Report",
        description:
          "Core numerology analysis based on your full name and date of birth — includes Life Path, Destiny, Soul Urge, and Personality numbers with their meanings and guidance.",
        youProvide: "Full birth name (as on birth certificate), date of birth",
        duration: "Delivered within 48 hours",
        price: 22,
        includes: [
          "Life Path Number analysis (primary destiny theme)",
          "Destiny Number reading (career, purpose)",
          "Soul Urge Number (inner desires & motivations)",
          "Personality Number (how others perceive you)",
          "Personal Year forecast (current year cycle)",
          "8-12 page written report (PDF) in your language",
        ],
        delivery: "report",
        source:
          "Standard numerology report rate from certified practitioners: $20–$35. Practitioner: Vedic Ank Jyotish tradition.",
      },
      {
        id: "full-blueprint",
        name: "Full Numerology Blueprint + Name Correction",
        description:
          "Complete numerological map of your life plus analysis of whether your current name is in harmony with your birth numbers — and suggested name tweaks if needed.",
        youProvide: "Full birth name, current signature name, date of birth, current life question",
        duration: "Delivered within 72 hours",
        price: 45,
        includes: [
          "All core numbers (Life Path, Destiny, Soul Urge, Personality, Maturity)",
          "Name number analysis and harmony check",
          "Name correction recommendation (if needed)",
          "15-20 page comprehensive report (PDF)",
          "Lucky numbers, colors, days, and gemstones",
          "30-minute follow-up voice note explanation",
        ],
        delivery: "report",
        source:
          "Full numerology blueprint with name correction: $40–$60. Certified numerologist standard rate.",
      },
      {
        id: "annual-forecast",
        name: "Annual Forecast + Monthly Cycles",
        description:
          "Your 12-month numerological forecast — each Personal Month broken down with advice on career, relationships, finance, and health windows.",
        youProvide: "Date of birth, the year you want forecast for (e.g. 2026)",
        duration: "Delivered within 48 hours",
        price: 30,
        includes: [
          "Annual Personal Year analysis",
          "Month-by-month forecast for 12 months",
          "Best months for major decisions (marriage, business, travel)",
          "Warning months to avoid risks",
          "10-page annual roadmap report (PDF)",
        ],
        delivery: "report",
        source:
          "Annual numerology forecast: $25–$40. Standard market rate among certified numerologists.",
      },
    ],
    prominentTraditions: [
      "Vedic Ank Jyotish (India)",
      "Pythagorean Numerology (Greece/West)",
      "Chaldean Numerology (Babylon)",
      "Kabbalah Numerology (Jewish mysticism)",
    ],
    bestFor: [
      "Career confusion",
      "Marriage timing",
      "Business name selection",
      "Baby name selection",
      "Understanding recurring life patterns",
      "Lucky number guidance",
    ],
    auspiciousTimes: [
      "9, 18, 27 of each month (universal 9 days)",
      "Your Life Path Number day each month",
      "Numerologically auspicious years (per chart)",
    ],
    diaspora: ["India", "USA", "UK", "UAE", "Canada", "Australia"],
    tags: ["numerology", "ank-jyotish", "life-path", "destiny-number", "name-correction"],
  },

  // ── 2. VEDIC ASTROLOGY ─────────────────────────────────────────────────────
  {
    slug: "vedic-astrology",
    id: "MS002",
    name: "Vedic Astrology",
    originalName: "Jyotish Shastra / Kundali Vichar",
    category: "astrology",
    icon: "⭐",
    theme: {
      bg: "bg-indigo-50",
      nav: "bg-indigo-900",
      navText: "text-white",
      accent: "bg-indigo-700",
      accentText: "text-white",
      badge: "bg-indigo-100",
      badgeText: "text-indigo-800",
    },
    tagline: "The sky at your birth is your cosmic blueprint.",
    description:
      "Vedic Astrology (Jyotish Shastra — 'Science of Light') is one of the six Vedangas, a limb of the Vedas itself. Unlike Western astrology, Jyotish uses the sidereal zodiac (actual star positions) and places unique emphasis on the Moon sign, Ascendant (Lagna), and the 9 planets (Navagraha). A Kundali (birth chart) is a precise mathematical map of the heavens at your moment of birth — and it is considered a mirror of your soul's karma.",
    origin: "Ancient India (Vedic period, 6,000+ BCE) — codified in Brihat Parashara Hora Shastra",
    significance:
      "Jyotish is not just prediction — it is a tool for understanding your karma and making conscious choices. The great sage Parashara said: 'The planets do not compel — they incline. Wisdom lies in knowing the inclination.'",
    whatItReveals: [
      "Your Rashi (Moon sign) — your emotional nature and inner world",
      "Your Lagna (Ascendant) — your physical body, personality, and life approach",
      "Your Navamsha chart — destiny in marriage and spiritual life",
      "Current Dasha-Antardasha periods — what planetary phase rules your life now",
      "Career yoga — which fields are written in your chart",
      "Marriage timing and partner qualities (7th house + Venus analysis)",
      "Health vulnerabilities and their planetary remedies",
      "Financial periods — when wealth expands and contracts",
      "Spiritual inclinations and past-life karmas (12th house)",
    ],
    packages: [
      {
        id: "birth-chart-analysis",
        name: "Full Birth Chart (Kundali) Analysis",
        description:
          "Comprehensive reading of your Vedic birth chart — all 12 houses, 9 planets, Ascendant, and current Dasha period. Covers personality, career, relationships, and the next 2 years.",
        youProvide: "Date, exact time, and city of birth",
        duration: "Delivered within 72 hours",
        price: 45,
        includes: [
          "Full Kundali (birth chart) cast in Lahiri Ayanamsha",
          "Analysis of all 12 houses and 9 Navagraha",
          "Current Mahadasha + Antardasha prediction (2 years)",
          "Key yogas in chart (Raj, Dhana, Viparita, etc.)",
          "Marriage timing window and partner description",
          "Career & wealth analysis",
          "Remedies: mantra, gemstone, and fasting recommendations",
          "15-20 page written report (PDF) + 30-min audio reading",
        ],
        delivery: "report",
        source:
          "Full Kundali analysis by experienced Vedic astrologer: $40–$75. ICAS/IVAS certified practitioner rates.",
      },
      {
        id: "kundali-matching",
        name: "Kundali Matching (Marriage Compatibility)",
        description:
          "Traditional Ashtakoota (8-factor) compatibility analysis for prospective couples — includes Guna Milan, Mangal Dosha check, and detailed advice.",
        youProvide: "Both partners' birth date, time, and city",
        duration: "Delivered within 48 hours",
        price: 35,
        includes: [
          "Ashtakoota Guna Milan (36-point compatibility score)",
          "Mangal/Kuja Dosha analysis for both",
          "7th house compatibility (Venus/Mars synastry)",
          "Nadi Dosha and its remedies (if present)",
          "Final recommendation with remedial measures",
          "10-page compatibility report (PDF)",
        ],
        delivery: "report",
        source:
          "Kundali matching service: $30–$50. Standard rate among ICAS-affiliated Jyotish practitioners.",
      },
      {
        id: "career-finance-reading",
        name: "Career & Finance Forecast (Live Video Call)",
        description:
          "One-on-one live Jyotish consultation focused on career, business, and financial timing — the astrologer reads your chart live and answers your specific questions.",
        youProvide: "Date, exact time, city of birth; your specific career/finance questions",
        duration: "45-minute video call",
        price: 65,
        includes: [
          "Live 45-minute Jyotish consultation via Zoom/Google Meet",
          "Dashas and transits for next 3 years (career/finance focus)",
          "Best periods for job change, business launch, investment",
          "Specific question answers",
          "Post-call 5-page summary report",
        ],
        delivery: "video-call",
        source:
          "Live Vedic astrology consultation: $55–$85 per 45 minutes. Certified Jyotish Acharya rate.",
      },
    ],
    prominentTraditions: [
      "Parashara Jyotish (mainstream Vedic)",
      "Jaimini Jyotish (sutra-based)",
      "KP Astrology (Krishnamurti Paddhati)",
      "Nadi Jyotish (palm leaf manuscripts)",
    ],
    bestFor: [
      "Marriage timing",
      "Career confusion",
      "Business launch timing",
      "Health issues",
      "Financial planning",
      "Understanding life purpose",
      "Choosing the right city to live in",
    ],
    auspiciousTimes: [
      "Guru Pushya Nakshatra",
      "Auspicious Muhurats (planetary conjunction days)",
      "Navratri for Shakti-based remedies",
    ],
    diaspora: ["India", "USA", "UK", "Canada", "Australia", "UAE", "Southeast Asia"],
    tags: ["jyotish", "kundali", "vedic-astrology", "navagraha", "dasha", "horoscope"],
  },

  // ── 3. VASTU SHASTRA ───────────────────────────────────────────────────────
  {
    slug: "vastu-shastra",
    id: "MS003",
    name: "Vastu Shastra",
    originalName: "Vaastu Vidya",
    category: "vastu",
    icon: "🏠",
    theme: {
      bg: "bg-amber-50",
      nav: "bg-amber-800",
      navText: "text-white",
      accent: "bg-amber-600",
      accentText: "text-white",
      badge: "bg-amber-100",
      badgeText: "text-amber-800",
    },
    tagline: "Your home breathes. Make sure it breathes wealth.",
    description:
      "Vastu Shastra (Sanskrit: 'Science of Dwelling') is the ancient Vedic architecture of energy flow. It teaches that every structure — home, office, factory — sits within a web of directional, elemental, and cosmic energies. When a building's layout harmonizes with these forces, the inhabitants experience health, wealth, and happiness. When it conflicts, invisible drains on energy, finance, and relationships occur. Vastu is rooted in the Manasara, Mayamata, and Vishwakarma texts — written thousands of years before modern architecture.",
    origin: "Vedic India — codified in Manasara Silpashastra and Mayamata (3,000+ years old)",
    significance:
      "Traditional Indian kings would not lay the foundation of any palace, temple, or city without a Vastu consultation. The Taj Mahal, Fatehpur Sikri, and the entire layout of Jaipur follow Vastu principles.",
    whatItReveals: [
      "Which direction your main door should face for maximum positive energy",
      "Why the kitchen in your current home may be causing financial stress",
      "The exact zones responsible for health, wealth, marriage, and career",
      "Vastu doshas (defects) in your current floor plan and their remedies",
      "Bedroom placement effects on sleep, health, and relationships",
      "Which zones to use for a home office, prayer room, and study",
      "Color recommendations per room based on elemental direction",
      "Non-demolition remedies — corrections without breaking walls",
    ],
    packages: [
      {
        id: "home-vastu-photo",
        name: "Home Vastu Report (Photo-Based)",
        description:
          "Our expert analyzes your home's Vastu using photos of your floor plan and exterior — identifies major doshas and provides specific, actionable remedies.",
        youProvide:
          "Photos of floor plan (all floors), north-facing reference, each room, and main entrance",
        duration: "Delivered within 72 hours",
        price: 38,
        includes: [
          "Complete directional analysis (16-zone Vastu grid)",
          "Identification of all Vastu doshas",
          "Room-by-room recommendations",
          "Remedies without demolition (yantra, color, furniture placement)",
          "10-15 page report with annotated floor plan",
        ],
        delivery: "report",
        source:
          "Photo-based home Vastu report: $35–$55. Standard Vastu consultant market rate.",
      },
      {
        id: "full-floor-plan",
        name: "Full Floor Plan + Live Consultation",
        description:
          "Detailed technical analysis of your floor plan with a live video call — the consultant walks you through every room, identifies doshas, and prescribes remedies in real time.",
        youProvide: "Scaled floor plan (AutoCAD/PDF or clear photo), north direction, your main concerns",
        duration: "60-minute video call + written report",
        price: 75,
        includes: [
          "Pre-call full floor plan analysis",
          "60-minute live consultation via video",
          "Detailed annotated floor plan",
          "Priority zone remedies (bedroom, kitchen, entrance, puja room)",
          "Yantra, crystal, and pyramid placement guidance",
          "Post-call follow-up report (PDF)",
        ],
        delivery: "video-call",
        source:
          "Full floor plan Vastu consultation with live call: $65–$90. Senior Vastu consultant rate.",
      },
      {
        id: "business-vastu",
        name: "Business / Office Vastu Analysis",
        description:
          "Vastu for commercial premises — office, shop, factory, or restaurant. Identifies energy drains affecting business growth and recommends targeted corrections.",
        youProvide: "Business floor plan, entrance direction, owner's birth date, nature of business",
        duration: "Delivered within 5 business days",
        price: 95,
        includes: [
          "Commercial Vastu analysis (all zones)",
          "Cash register / reception / owner cabin placement",
          "Branding color Vastu (signboard, logo placement direction)",
          "Employee seating Vastu for maximum productivity",
          "Remedies: pyramid grids, yantras, plants, color corrections",
          "20-page business Vastu report (PDF)",
        ],
        delivery: "report",
        source:
          "Business Vastu analysis: $80–$120. Senior Vastu consultant for commercial property.",
      },
    ],
    prominentTraditions: [
      "Manasara Vastu (classical text)",
      "Mayamata Vastu (South Indian tradition)",
      "Pyramid Vastu (modern adaptation)",
      "Feng Shui (Chinese parallel — not Vastu but often cross-referenced)",
    ],
    bestFor: [
      "Financial stagnation",
      "Relationship conflicts at home",
      "Health issues in specific family members",
      "Business not growing",
      "Children's performance issues",
      "Building or buying a new home",
      "Office renovation",
    ],
    auspiciousTimes: [
      "Vastu Puja Muhurats (before construction begins)",
      "Griha Pravesh (housewarming) auspicious dates",
      "Akshaya Tritiya for new property",
    ],
    diaspora: ["India", "USA", "UK", "Australia", "Canada", "UAE", "Singapore"],
    tags: ["vastu", "vaastu-vidya", "home-energy", "floor-plan", "dosha-remedy", "architecture"],
  },

  // ── 4. NAMEOLOGY ──────────────────────────────────────────────────────────
  {
    slug: "nameology",
    id: "MS004",
    name: "Nameology",
    originalName: "Naam Vidya / Naam Ank Shastra",
    category: "nameology",
    icon: "🔤",
    theme: {
      bg: "bg-rose-50",
      nav: "bg-rose-800",
      navText: "text-white",
      accent: "bg-rose-600",
      accentText: "text-white",
      badge: "bg-rose-100",
      badgeText: "text-rose-800",
    },
    tagline: "Your name is not just a label — it is your daily mantra.",
    description:
      "Every time your name is spoken aloud, it vibrates. Every letter carries a number, and every number carries an energy frequency. Nameology (Naam Vidya) studies how the letters and numbers of your name align — or conflict — with your birth chart and destiny number. A name that vibrates in harmony with your birth numbers acts like a daily mantra, amplifying your potential. A discordant name creates subtle, invisible friction that can persist across a lifetime.",
    origin:
      "Vedic India (Naam Karan tradition), Pythagorean and Chaldean numerology, Hebrew Kabbalah",
    significance:
      "Ancient Indian tradition mandates a Naam Karan (naming ceremony) on the 11th or 12th day after birth, selecting a name according to the birth nakshatra. Corporate India and Bollywood celebrities routinely change their screen names on numerological advice.",
    whatItReveals: [
      "Whether your current name vibrates in harmony with your birth number",
      "The specific letter(s) causing energetic friction in your name",
      "The ideal first letter and number vibration for your name",
      "Why a name change or spelling adjustment can shift life trajectory",
      "Ideal name for your newborn baby based on birth date and family surname",
      "Best business / brand names that align with your destiny number",
      "Whether your company / product name has a winning vibration",
      "Impact of nickname vs. formal name on daily energy",
    ],
    packages: [
      {
        id: "name-harmony-check",
        name: "Name Harmony Check",
        description:
          "Analysis of your current name's numerical vibration against your birth numbers — identifies harmony or conflict and gives specific recommendations.",
        youProvide: "Full birth name, current used name, date of birth",
        duration: "Delivered within 48 hours",
        price: 18,
        includes: [
          "Chaldean + Pythagorean name number analysis",
          "Harmony check with birth (Psychic) number and Life Path number",
          "Specific letter analysis (which letters help/hurt)",
          "Correction recommendation (if needed)",
          "5-7 page report (PDF)",
        ],
        delivery: "report",
        source: "Name numerology check: $15–$25. Standard numerologist rate for name analysis.",
      },
      {
        id: "baby-name",
        name: "Baby Name Selection (5 Personalized Options)",
        description:
          "For new parents — 5 numerologically perfect name options for your child based on their birth date, nakshatra, and family surname, with full reasoning for each.",
        youProvide: "Baby's date of birth, time (if known), family surname",
        duration: "Delivered within 72 hours",
        price: 35,
        includes: [
          "5 name options with numerical analysis",
          "Nakshatra-based first letter recommendations",
          "Meaning of each name (Sanskrit/other language)",
          "Vibration score for each option",
          "Top recommendation with full reasoning",
          "10-page report (PDF)",
        ],
        delivery: "report",
        source: "Baby name numerology: $30–$45. Standard Vedic Naam Karan consultation rate.",
      },
      {
        id: "business-name",
        name: "Business / Brand Name Consultation",
        description:
          "Numerological analysis for company name, brand, or product — ensures the name vibrates with growth, trust, and success frequencies aligned to the founder's chart.",
        youProvide: "Proposed business names (up to 5), founder's date of birth, type of business",
        duration: "Delivered within 72 hours",
        price: 42,
        includes: [
          "Analysis of all proposed names",
          "Harmony check with founder's destiny number",
          "Chaldean business name scoring",
          "Best name recommendation with reasoning",
          "Alternative suggestions if none qualify",
          "Domain name vibration check (up to 3 domain options)",
        ],
        delivery: "report",
        source: "Business name numerology: $35–$55. Corporate numerology consultant rate.",
      },
    ],
    prominentTraditions: [
      "Vedic Naam Karan (naming ceremony tradition)",
      "Chaldean Numerology (most used for names)",
      "Kabbalah (Hebrew letter-number mapping)",
      "Pythagorean (Western name numerology)",
    ],
    bestFor: [
      "Naming a newborn baby",
      "Business / brand name selection",
      "Understanding why life isn't flowing smoothly",
      "Screen name for performers/creators",
      "Name correction after marriage",
      "Domain and app name selection",
    ],
    auspiciousTimes: [
      "11th or 12th day post-birth (Naam Karan)",
      "Auspicious Muhurat for business launch",
      "Personal Year 1 (new beginning year) for name change",
    ],
    diaspora: ["India", "UK", "UAE", "USA", "Canada", "Australia", "Singapore"],
    tags: ["nameology", "naam-vidya", "baby-name", "name-correction", "brand-name", "alphabet-impact"],
  },

  // ── 5. PALMISTRY ──────────────────────────────────────────────────────────
  {
    slug: "palmistry",
    id: "MS005",
    name: "Palmistry",
    originalName: "Hast Rekha Shastra / Hasta Samudrika",
    category: "palmistry",
    icon: "✋",
    theme: {
      bg: "bg-orange-50",
      nav: "bg-orange-800",
      navText: "text-white",
      accent: "bg-orange-600",
      accentText: "text-white",
      badge: "bg-orange-100",
      badgeText: "text-orange-800",
    },
    tagline: "Every line on your hand is a sentence in your life story.",
    description:
      "Palmistry (Hast Rekha Shastra — 'Science of Hand Lines') is the most ancient and democratic of all divination arts — your hands are always with you. The lines, mounts, shapes, and textures of your palms are a map of your temperament, health, potential, and key life events. The Vedic tradition (Hasta Samudrika Shastra) recognizes 72 key lines and 30+ mounts and signs. A skilled palm reader integrates all of these into a cohesive life reading.",
    origin:
      "Ancient India (Hasta Samudrika), China (3,000 BCE), Egypt, Persia — brought to Europe through the Romani tradition",
    significance:
      "In the Vedic tradition, Hast Rekha was taught alongside astrology as a complementary system. Where astrology shows potential, palmistry shows the channels through which it expresses.",
    whatItReveals: [
      "Life Line — vitality, major life transitions, and health turning points",
      "Heart Line — emotional nature, love style, and major relationships",
      "Head Line — intellect, decision-making style, and career aptitude",
      "Fate/Saturn Line — career trajectory and destiny path",
      "Sun/Apollo Line — fame, success, and recognition potential",
      "Mercury Line — communication, business acumen, health of nervous system",
      "Marriage Lines — timing and number of significant relationships",
      "Travel Lines — foreign settlement potential and major journeys",
      "Children Lines — potential for children and their nature",
      "Mounts of Jupiter, Saturn, Sun, Mercury, Moon — character strengths",
    ],
    packages: [
      {
        id: "photo-palm-reading",
        name: "Hand Photo Reading (Basic)",
        description:
          "Send clear photos of both palms — our palmist analyzes the major lines and gives you a comprehensive written reading covering career, love, health, and destiny.",
        youProvide: "Clear photos of both palms (left and right, well-lit, all lines visible), date of birth",
        duration: "Delivered within 72 hours",
        price: 25,
        includes: [
          "Analysis of 4 major lines (Life, Heart, Head, Fate)",
          "Key mounts analysis",
          "Career and relationship insights",
          "Health indicators",
          "8-12 page written report (PDF) with annotated palm images",
        ],
        delivery: "report",
        source:
          "Photo-based palm reading: $20–$35. Standard palmist market rate for written report.",
      },
      {
        id: "detailed-palm-analysis",
        name: "Detailed Palm Analysis — All Lines",
        description:
          "In-depth analysis of all 72+ lines, mounts, special signs, and quadrangles — the most complete palm reading for those who want every detail of their hand.",
        youProvide:
          "High-resolution photos of both palms + fingerprints (rolled prints preferred), date and time of birth",
        duration: "Delivered within 5 business days",
        price: 48,
        includes: [
          "All major and minor line analysis",
          "Mount analysis (Jupiter through Moon)",
          "Special signs: Star, Cross, Triangle, Square, Island, Chain",
          "Fingerprint type analysis",
          "Marriage line timing estimate",
          "Children line analysis",
          "20-25 page comprehensive report (PDF) with annotated diagrams",
          "15-minute audio explanation by the palmist",
        ],
        delivery: "report",
        source:
          "Comprehensive palm reading report: $40–$65. Senior Hasta Samudrika practitioner rate.",
      },
      {
        id: "live-palm-session",
        name: "Live Video Palm Reading Session",
        description:
          "Real-time palmistry session — show your palms live on video, ask questions as the reader goes, and get immediate answers on the areas that matter most to you.",
        youProvide: "Good lighting, your two hands, your most pressing life questions",
        duration: "45-minute video call",
        price: 55,
        includes: [
          "Live 45-minute palm reading via Zoom/Google Meet",
          "Interactive Q&A during the session",
          "Post-session 5-page key points summary",
          "Gemstone/color recommendation based on dominant mounts",
        ],
        delivery: "video-call",
        source: "Live video palmistry session: $45–$70. Experienced Hast Rekha practitioner rate.",
      },
    ],
    prominentTraditions: [
      "Hasta Samudrika Shastra (Vedic)",
      "Chinese Palmistry (Shou Xiang)",
      "European/Romani Palmistry",
      "KP / Modern Scientific Palmistry",
    ],
    bestFor: [
      "Understanding your natural talents",
      "Marriage timing and relationship questions",
      "Career aptitude assessment",
      "Health risk awareness",
      "Children and family planning questions",
      "Understanding past traumas written in the hand",
    ],
    auspiciousTimes: [
      "Full Moon (Purnima) for palm reading sessions",
      "Auspicious Nakshatra days",
      "Sundays (governed by Sun — life force)",
    ],
    diaspora: ["India", "UK", "USA", "UAE", "Canada", "Australia", "Southeast Asia"],
    tags: ["palmistry", "hast-rekha", "hand-lines", "hasta-samudrika", "life-line", "marriage-line"],
  },

  // ── 6. NADI ASTROLOGY ─────────────────────────────────────────────────────
  {
    slug: "nadi-astrology",
    id: "MS006",
    name: "Nadi Astrology",
    originalName: "Nadi Jyotish / Thumb Impression Reading",
    category: "nadi",
    icon: "📜",
    theme: {
      bg: "bg-yellow-50",
      nav: "bg-yellow-800",
      navText: "text-white",
      accent: "bg-yellow-600",
      accentText: "text-white",
      badge: "bg-yellow-100",
      badgeText: "text-yellow-900",
    },
    tagline: "Your future was written 5,000 years ago. Find your leaf.",
    description:
      "Nadi Astrology is the most mysterious of all Indian divination arts — it claims that the destiny of every soul who has ever lived (or will live) was inscribed on palm leaves by the ancient sages (Maharishis) thousands of years ago. By matching your thumb impression against these preserved manuscripts, a Nadi reader can locate your 'leaf' and read your past, present, and future with uncanny accuracy — including family details, current circumstances, and specific future events.",
    origin:
      "Tamil Nadu, South India — manuscripts preserved in Vaitheeswaran Koil and other centers for 3,000–5,000 years",
    significance:
      "Nadi Astrology has baffled researchers because it reportedly reveals specific personal details — parents' names, number of siblings, current profession, key life events — without any prior information. The leaves are attributed to sages including Agastya, Bhrigu, Shukra, and Sapta Rishis.",
    whatItReveals: [
      "Your name and parents' names (revealed from the leaf)",
      "Your past life karma and how it manifests in this life",
      "Specific predictions for all 12 areas of life (by kandam/chapter)",
      "Health chapter — diseases and their remedies",
      "Marriage chapter — spouse description and timing",
      "Children chapter — number and nature of children",
      "Foreign settlement chapter — foreign travel and residence",
      "Shanti chapter — remedies to neutralize past-life karmas",
      "Moksha chapter — spiritual path and liberation indicators",
    ],
    packages: [
      {
        id: "thumb-nadi-reading",
        name: "Thumb Impression Nadi Reading (General + 3 Chapters)",
        description:
          "Send your thumb impressions — our partner Nadi reader in Vaitheeswaran Koil locates your leaf among the bundles and reads the General Kandam (overview) plus 3 chapters of your choice.",
        youProvide:
          "Clear photo of right thumb impression (male) or left thumb impression (female), specific areas of focus",
        duration: "7–14 business days (leaf search takes time)",
        price: 65,
        includes: [
          "Leaf search across relevant bundles",
          "General Kandam (overview of life, identity confirmation)",
          "3 specific Kandams (e.g. career, marriage, health)",
          "Video recording of the reading (in Tamil + English translation)",
          "Written English summary report",
          "Remedies specified in the leaf",
        ],
        delivery: "report",
        source:
          "Nadi reading at Vaitheeswaran Koil through verified reader: ₹3,000–₹6,000 per kandam. $65–$120 for 3-chapter reading via verified Nadi center.",
      },
      {
        id: "nadi-remedies",
        name: "Nadi Remedies + Temple Shanti",
        description:
          "After your leaf is found and the Shanti Kandam (remedies chapter) read, our representative performs the prescribed temple rituals at the specified shrine near Vaitheeswaran Koil.",
        youProvide: "Previous Nadi reading transcript (if available), or new thumb impression for full reading",
        duration: "10–21 days",
        price: 95,
        includes: [
          "Shanti Kandam (remedies chapter) reading",
          "Temple rituals performed at prescribed shrine",
          "Video proof of all rituals",
          "Prasad from the temple shipped",
          "Post-remedy written guidance",
        ],
        delivery: "report",
        source:
          "Nadi Shanti remedies at Vaitheeswaran Koil: ₹5,000–₹15,000 depending on prescribed rituals. Arranged via verified Nadi center.",
      },
    ],
    prominentTraditions: [
      "Agastya Nadi (most common, Tamil Nadu)",
      "Bhrigu Nadi (Hoshiarpur, Punjab)",
      "Shuka Nadi (Karnataka)",
      "Sapta Rishi Nadi",
    ],
    bestFor: [
      "Understanding past-life karmas",
      "Unexplained recurring problems",
      "Ancestral curse removal",
      "Deep life purpose questions",
      "When conventional astrology hasn't helped",
      "Terminal or chronic illness",
    ],
    auspiciousTimes: [
      "Any time — Nadi is date-independent",
      "Shivaratri for Agastya Nadi consultations",
    ],
    diaspora: ["India", "USA", "UK", "Canada", "Australia", "Singapore", "Malaysia"],
    tags: ["nadi-astrology", "palm-leaf", "thumb-impression", "vaitheeswaran-koil", "agastya", "past-life"],
  },

  // ── 7. TAROT ───────────────────────────────────────────────────────────────
  {
    slug: "tarot-reading",
    id: "MS007",
    name: "Tarot Reading",
    originalName: "Tarot / Tarash",
    category: "tarot",
    icon: "🃏",
    theme: {
      bg: "bg-purple-50",
      nav: "bg-purple-900",
      navText: "text-white",
      accent: "bg-purple-700",
      accentText: "text-white",
      badge: "bg-purple-100",
      badgeText: "text-purple-900",
    },
    tagline: "The cards don't predict fate. They reveal your choices.",
    description:
      "Tarot is a 78-card archetypal system that mirrors the landscape of the human soul. Originating in 15th-century Europe and absorbed into Hermetic, Kabbalistic, and now global spiritual traditions, Tarot has become the world's most widely practiced divination system. Each of the 78 cards — 22 Major Arcana (soul lessons) and 56 Minor Arcana (daily life) — embodies a universal human experience. A skilled reader weaves these into coherent, insightful narratives about your current situation and likely trajectory.",
    origin:
      "Northern Italy (15th century) → French Hermeticism → Rider-Waite deck (1910) → Global",
    significance:
      "Jung saw Tarot as a crystallization of the collective unconscious. Modern practitioners use it as a mirror for psychological insight and decision support — a conversation between the conscious and subconscious mind.",
    whatItReveals: [
      "The hidden energy around a specific situation or question",
      "Your subconscious blocks and their symbolic nature",
      "The likely trajectory if current patterns continue",
      "Alternative paths and what each leads to",
      "Relationship dynamics — what the other person's energy suggests",
      "Career and financial timing signals",
      "The 'shadow' (what you're not seeing) in any situation",
      "Monthly or annual energy themes and guidance",
    ],
    packages: [
      {
        id: "three-card-reading",
        name: "3-Card Spread (Past · Present · Future)",
        description:
          "The foundational Tarot spread — one card for the past energy, one for the present moment, one for the likely future. Perfect for a single question or general life check-in.",
        youProvide: "Your specific question or the area of life you want clarity on",
        duration: "Delivered within 24 hours",
        price: 18,
        includes: [
          "3-card draw with full interpretation",
          "Photo of the spread",
          "Written reading (400–600 words)",
          "Actionable guidance for next 30 days",
        ],
        delivery: "report",
        source: "3-card Tarot reading: $15–$25. Standard professional Tarot reader market rate.",
      },
      {
        id: "celtic-cross",
        name: "Celtic Cross Full Reading (10 Cards)",
        description:
          "The most comprehensive single-reading spread — 10 cards covering past influences, present situation, hopes/fears, likely outcome, and hidden factors. For deep life questions.",
        youProvide: "Your main question and any relevant background context",
        duration: "Delivered within 48 hours",
        price: 38,
        includes: [
          "10-card Celtic Cross spread",
          "Full photo of the spread",
          "Detailed interpretation (1,000–1,500 words)",
          "Each card's position meaning explained",
          "Overall guidance and key message",
          "Optional follow-up question via WhatsApp (within 7 days)",
        ],
        delivery: "report",
        source: "Celtic Cross Tarot reading: $30–$50. Professional Tarot practitioner rate.",
      },
      {
        id: "live-tarot-session",
        name: "Live Tarot Session (Interactive)",
        description:
          "Real-time Tarot session via video — you watch the cards being drawn, ask multiple questions, and have a conversation with the reader. Most dynamic and responsive format.",
        youProvide: "Your key questions (come with 3–5 questions or areas)",
        duration: "45-minute video call",
        price: 55,
        includes: [
          "Live 45-minute Tarot session via Zoom",
          "Multiple card draws during session",
          "Interactive Q&A",
          "Recording of the session (sent post-call)",
          "5-page written summary sent within 24 hours",
        ],
        delivery: "video-call",
        source: "Live Tarot session (45 min): $45–$70. Professional reader rate for live sessions.",
      },
    ],
    prominentTraditions: [
      "Rider-Waite-Smith (most widely used)",
      "Thoth Tarot (Aleister Crowley / Lady Frieda Harris)",
      "Marseille Tarot (oldest surviving system)",
      "Osho Zen Tarot (meditation-based modern deck)",
    ],
    bestFor: [
      "Relationship clarity",
      "Career crossroads",
      "Whether to stay or leave a situation",
      "Understanding a conflict with another person",
      "Monthly or annual guidance",
      "Emotional healing and shadow work",
    ],
    auspiciousTimes: [
      "New Moon (new beginnings spread)",
      "Full Moon (manifestation and release spread)",
      "Mercury retrograde (reflection and review readings)",
    ],
    diaspora: ["Global — particularly USA, UK, Europe, Brazil, Australia, India"],
    tags: ["tarot", "celtic-cross", "major-arcana", "rider-waite", "divination", "oracle"],
  },

  // ── 8. GEMSTONE THERAPY ────────────────────────────────────────────────────
  {
    slug: "gemstone-therapy",
    id: "MS008",
    name: "Gemstone Therapy",
    originalName: "Ratna Shastra / Navaratna Vidya",
    category: "gemstone",
    icon: "💎",
    theme: {
      bg: "bg-cyan-50",
      nav: "bg-cyan-800",
      navText: "text-white",
      accent: "bg-cyan-600",
      accentText: "text-white",
      badge: "bg-cyan-100",
      badgeText: "text-cyan-900",
    },
    tagline: "Nine planets. Nine gemstones. One destiny-altering prescription.",
    description:
      "Ratna Shastra (Gemstone Science) is the Vedic practice of wearing specific gemstones to strengthen the positive planets in your birth chart and mitigate harmful ones. The 9 Navaratna (Nine Gems) — Ruby, Pearl, Red Coral, Emerald, Yellow Sapphire, Diamond, Blue Sapphire, Hessonite, and Cat's Eye — each correspond to one of the 9 Navagraha (planets). Worn in the correct metal, on the correct finger, on the correct day, a prescribed gemstone acts as a constant planetary amplifier.",
    origin:
      "Vedic India — codified in Agni Purana, Garuda Purana, and Mani Shastra (2,000+ years ago)",
    significance:
      "The Navaratna ring — all 9 gems set together — was worn by Mughal emperors and Maharajas specifically for its all-planet protective power. Even today, gemstone therapy is prescribed by Jyotish Acharyas across India as a primary remedy alongside mantras.",
    whatItReveals: [
      "Which planets in your chart need strengthening (benefic planets)",
      "Which planets are causing problems and should NOT be worn (malefic planets for you)",
      "The specific gemstone, metal, weight, and finger for your prescription",
      "The exact day and mantra to energize (prana-pratishtha) the gemstone",
      "Why some gemstones backfire — the danger of wearing the wrong stone",
      "Substitute stones for those who cannot afford primary gems",
      "How long to wear and when to change the stone",
      "Crystal vs. gemstone — which has what effect",
    ],
    packages: [
      {
        id: "single-gem-consult",
        name: "Single Planet Gemstone Recommendation",
        description:
          "Focused analysis for one specific planet in your chart — identifies whether to wear that planet's gem, which stone, which metal, weight, and full wearing instructions.",
        youProvide: "Date, time, city of birth; which area of life you want to improve (career/love/health)",
        duration: "Delivered within 48 hours",
        price: 25,
        includes: [
          "Birth chart analysis (focused on one planet)",
          "Gemstone prescription with weight (carats) and metal",
          "Wearing instructions (finger, day, mantra)",
          "Substitute stone options (if primary gem is out of budget)",
          "5-page report (PDF)",
          "Sourcing guidance for certified stones",
        ],
        delivery: "report",
        source:
          "Single planet gemstone recommendation: $20–$35. Jyotish Acharya / certified gemstone consultant rate.",
      },
      {
        id: "full-navagraha-analysis",
        name: "Full 9-Planet Gem Analysis (Navagraha Report)",
        description:
          "Complete analysis of all 9 planets in your birth chart — identifies the two most beneficial stones for you, two to avoid, and gives a priority action plan.",
        youProvide: "Date, exact time, city of birth; current life situation summary",
        duration: "Delivered within 72 hours",
        price: 55,
        includes: [
          "All 9 Navagraha analyzed",
          "Top 2 gemstone prescriptions",
          "2 gemstones explicitly to AVOID",
          "Metal and finger specifications for each",
          "Mantra for energizing each stone",
          "Substitute crystals for each planet",
          "15-page comprehensive report (PDF)",
        ],
        delivery: "report",
        source:
          "Full Navagraha gemstone analysis: $45–$70. Senior Jyotish Acharya rate for full planetary gem prescription.",
      },
      {
        id: "gemstone-with-sourcing",
        name: "Gemstone Prescription + Certified Stone Sourcing",
        description:
          "Full gemstone prescription AND sourcing of the recommended certified natural stone — we source from GIA/IGI-certified dealers in Jaipur, Burma, or Sri Lanka.",
        youProvide: "Date, exact time, city of birth; budget for stone; desired area of improvement",
        duration: "Prescription in 48 hours; stone delivery 10–21 days",
        price: 85,
        includes: [
          "Full gemstone prescription (as above)",
          "Sourcing of certified natural stone (GIA/IGI certified)",
          "Stone setting consultation (ring/pendant)",
          "Energization ritual (Prana Pratishtha) performed before shipping",
          "Certificate of authenticity",
          "Stone value typically $50–$150 additional (quoted separately)",
        ],
        delivery: "report",
        source:
          "Gemstone consultation + certified sourcing service: $75–$100 for consultation + sourcing coordination. Stone cost additional.",
      },
    ],
    prominentTraditions: [
      "Vedic Jyotish Ratna Shastra",
      "Tibetan Buddhist crystal therapy",
      "Ayurvedic Bhasma gemstone medicine",
      "Modern crystal healing (Western adaptation)",
    ],
    bestFor: [
      "Career and financial breakthrough",
      "Marriage delays",
      "Health chronic issues",
      "Strengthening a weak planet in the birth chart",
      "Protection during Sade Sati (Saturn transit)",
      "After Kundali analysis prescribes gems",
    ],
    auspiciousTimes: [
      "Sunrise on the prescribed day (e.g., Sunday for Ruby/Sun)",
      "Shukla Paksha (waxing moon) for wearing new stones",
      "Pushya Nakshatra for all gem-wearing rituals",
    ],
    diaspora: ["India", "USA", "UK", "UAE", "Canada", "Australia", "Singapore"],
    tags: ["gemstone", "navaratna", "ratna-shastra", "ruby", "blue-sapphire", "emerald", "jyotish-remedies"],
  },

  // ── 9. RUDRAKSHA CONSULTATION ──────────────────────────────────────────────
  {
    slug: "rudraksha",
    id: "MS009",
    name: "Rudraksha Consultation",
    originalName: "Rudraksha Dharana Vidya",
    category: "rudraksha",
    icon: "📿",
    theme: {
      bg: "bg-brown-50 bg-stone-50",
      nav: "bg-stone-800",
      navText: "text-white",
      accent: "bg-stone-700",
      accentText: "text-white",
      badge: "bg-stone-100",
      badgeText: "text-stone-800",
    },
    tagline: "Shiva's tears, fallen from the Himalayas — for you.",
    description:
      "Rudraksha beads (literally 'tears of Shiva' — Rudra + Aksha) are the dried fruits of the Elaeocarpus ganitrus tree, found primarily in Nepal and Java. Each bead is categorized by its number of 'Mukhis' (faces/segments), ranging from 1 to 21. Each Mukhi corresponds to a specific deity, planet, and purpose. According to the Shiva Purana, Devi Bhagavata, and Padma Purana, wearing the correct Rudraksha can protect from negative energies, heal physical ailments, attract wealth, and accelerate spiritual evolution.",
    origin:
      "Himalayas, Nepal, Java — mentioned in Shiva Purana, Devi Bhagavata Purana, Padma Purana",
    significance:
      "The 5-Mukhi Rudraksha (Panchmukhi) represents the five forms of Shiva and is considered universally safe and beneficial for all wearers. Certain Mukhis (1, 14, 21) are extremely rare and fetch enormous prices. Yogis and Babas across India wear malas of 108+1 Rudraksha for constant spiritual protection.",
    whatItReveals: [
      "Which Mukhi is prescribed for your planetary chart",
      "The correct Rudraksha for each of your life problems",
      "How to test if a Rudraksha is genuine (several methods)",
      "How to energize, wear, and maintain your Rudraksha mala",
      "The specific mantra to recite when wearing each Mukhi",
      "Which metal cap and thread color to use",
      "Can women wear Rudraksha? (Yes — with specific guidance)",
      "How many beads to wear and in what configuration",
    ],
    packages: [
      {
        id: "basic-rudraksha",
        name: "Basic Rudraksha Selection Consultation",
        description:
          "Identify the ideal Mukhi(s) for your birth chart and current life situation — includes wearing instructions, mantra, and authenticity-testing methods.",
        youProvide: "Date of birth (exact time helpful), your main intention (protection/wealth/health/spirituality)",
        duration: "Delivered within 48 hours",
        price: 18,
        includes: [
          "Recommended Mukhi(s) for your chart",
          "Purpose and deity of each prescribed bead",
          "Mantra for daily recitation",
          "Wearing instructions (thread, metal, side)",
          "Authenticity tests for genuine beads",
          "5-7 page report (PDF)",
        ],
        delivery: "report",
        source:
          "Rudraksha consultation: $15–$25. Rudraksha Ratna Science Therapy (RRST) certified practitioner rate.",
      },
      {
        id: "custom-mala",
        name: "Custom Rudraksha Mala Recommendation",
        description:
          "Full prescription for a personalized Rudraksha mala — combination of specific Mukhis strung in the correct order for maximum benefit, with energization ritual.",
        youProvide: "Date, time, city of birth; life areas to address (max 3); budget range",
        duration: "Delivered within 72 hours",
        price: 35,
        includes: [
          "Custom Mala design with specific Mukhi combination",
          "Sequence and placement of each bead",
          "Energization mantra for the full mala",
          "Wearing-day recommendations",
          "Care and maintenance instructions",
          "Sourcing guidance for Nepal-origin certified beads",
          "10-page custom mala report (PDF)",
        ],
        delivery: "report",
        source:
          "Custom Rudraksha Mala prescription: $30–$45. RRST-certified Rudraksha therapist rate.",
      },
    ],
    prominentTraditions: [
      "Shaivite (Shiva worship tradition — primary)",
      "RRST — Rudraksha Ratna Science Therapy (modern scientific approach)",
      "Tantric tradition (Rudraksha in specific Sadhana)",
    ],
    bestFor: [
      "Spiritual protection",
      "Meditation enhancement",
      "Hypertension and blood pressure",
      "Mental clarity and focus",
      "Attracting prosperity",
      "After planetary trouble (Sade Sati, Rahu/Ketu transit)",
    ],
    auspiciousTimes: [
      "Shivaratri (most powerful day for Rudraksha wearing)",
      "Mondays (Shiva's day)",
      "Shravan month",
      "Solar/Lunar eclipses (don't wear during — remove and re-energize after)",
    ],
    diaspora: ["India", "Nepal", "USA", "UK", "UAE", "Australia", "Europe"],
    tags: ["rudraksha", "shiva", "panchmukhi", "nepal-rudraksha", "mala", "spiritual-protection"],
  },

  // ── 10. LAL KITAB ──────────────────────────────────────────────────────────
  {
    slug: "lal-kitab",
    id: "MS010",
    name: "Lal Kitab",
    originalName: "Lal Kitab — The Red Book",
    category: "lal-kitab",
    icon: "📕",
    theme: {
      bg: "bg-red-50",
      nav: "bg-red-800",
      navText: "text-white",
      accent: "bg-red-600",
      accentText: "text-white",
      badge: "bg-red-100",
      badgeText: "text-red-800",
    },
    tagline: "The Red Book prescribes the strangest remedies — and they work.",
    description:
      "Lal Kitab (Urdu: 'Red Book') is a unique North Indian astrological system published in 5 volumes between 1939 and 1952 by Pt. Roop Chand Joshi of Punjab. It is one of the most popular predictive systems in North India, Pakistan, and the Punjabi diaspora. Unlike classical Jyotish, Lal Kitab uses an Ascendant-based chart, identifies 'debts' (Rin) from past lives, and prescribes remarkably simple, inexpensive remedies — such as throwing specific items in running water, feeding birds, or lighting lamps of a specific color — that are said to work faster than conventional astrology remedies.",
    origin: "Punjab, India — Pt. Roop Chand Joshi (1939–1952)",
    significance:
      "Lal Kitab remedies are famous for their immediacy and simplicity. Where conventional astrology may prescribe years of gem-wearing or expensive rituals, Lal Kitab might say: 'Throw a copper coin in running water on Thursday for 11 weeks.' Followers swear by results within weeks.",
    whatItReveals: [
      "Your past-life debts (Rin) and how they manifest as current problems",
      "The specific planet causing each life difficulty — and why",
      "Whether your house (residential) has a Lal Kitab defect (Ghar ka Rin)",
      "Why certain family relationships are particularly difficult",
      "Career blockages and their planetary source",
      "Financial drain patterns and their Lal Kitab cause",
      "Marriage delays and their specific remedy",
      "Ancestral karmas affecting the current generation",
    ],
    packages: [
      {
        id: "annual-predictions",
        name: "Annual Lal Kitab Predictions",
        description:
          "Month-by-month Lal Kitab forecast for the year — identifies periods of difficulty, opportunity, and the simple daily remedies to smooth each month.",
        youProvide: "Date, time, city of birth; primary concern for the year",
        duration: "Delivered within 72 hours",
        price: 28,
        includes: [
          "Lal Kitab annual chart calculation",
          "Month-by-month predictions for the current year",
          "Key problem periods and their remedies",
          "Simple daily Upay (remedies) for the year",
          "10-12 page annual report (PDF)",
        ],
        delivery: "report",
        source:
          "Lal Kitab annual predictions: $25–$40. Certified Lal Kitab practitioner rate.",
      },
      {
        id: "full-lal-kitab",
        name: "Full Lal Kitab Analysis + Problem-Specific Upay",
        description:
          "Comprehensive Lal Kitab reading for your whole birth chart — identifies all past-life debts, current triggers, and provides a specific, easy Upay (remedy) protocol for each.",
        youProvide: "Date, exact time, city of birth; your top 3 life problems",
        duration: "Delivered within 72 hours",
        price: 45,
        includes: [
          "Full Lal Kitab birth chart analysis",
          "All past-life Rin (debts) identified",
          "Problem-by-problem remedy protocol",
          "Upay list with materials, timing, and method",
          "Monthly Upay calendar for 12 months",
          "15-page comprehensive report (PDF)",
          "Follow-up WhatsApp clarification within 30 days",
        ],
        delivery: "report",
        source:
          "Full Lal Kitab analysis with upay: $40–$60. Senior Lal Kitab expert rate.",
      },
    ],
    prominentTraditions: [
      "Pt. Roop Chand Joshi tradition (original)",
      "Punjab / North India Lal Kitab practitioners",
      "Pakistan / Punjabi diaspora tradition",
    ],
    bestFor: [
      "Quick, simple remedies for chronic problems",
      "Financial drain and debt",
      "Enemy or black magic concerns",
      "Marriage obstacles",
      "Career stagnation despite hard work",
      "When conventional astrology remedies haven't worked",
    ],
    auspiciousTimes: [
      "Sunrise on the prescribed day for each remedy",
      "Sundays for Sun-related Upay",
      "Saturdays for Saturn-related Upay",
    ],
    diaspora: ["North India", "Punjab (India & Pakistan)", "UK (Punjabi)", "Canada (Punjabi)", "UAE"],
    tags: ["lal-kitab", "red-book", "upay", "past-life-debt", "punjabi-astrology", "quick-remedies"],
  },

  // ── 11. FACE READING ───────────────────────────────────────────────────────
  {
    slug: "face-reading",
    id: "MS011",
    name: "Face Reading",
    originalName: "Samudrika Shastra / Mukh Vichar",
    category: "face-reading",
    icon: "👁️",
    theme: {
      bg: "bg-teal-50",
      nav: "bg-teal-800",
      navText: "text-white",
      accent: "bg-teal-600",
      accentText: "text-white",
      badge: "bg-teal-100",
      badgeText: "text-teal-800",
    },
    tagline: "Your face is the autobiography of your soul.",
    description:
      "Samudrika Shastra (Face & Body Reading) is the Vedic science of physiognomy — reading the character, fate, and fortune written in the body's features. Every facial feature, mole, shape, and line carries meaning. The Vedic tradition maps the entire face against planetary archetypes: the forehead governs Saturn/Jupiter, the eyes reflect Mercury/Moon, the nose shows Mars, the lips reveal Venus, and the chin represents Jupiter. Chinese physiognomy (Mien Shiang), practiced for 3,000 years, is the most sophisticated parallel system.",
    origin:
      "Ancient India (Samudrika Shastra), China (Mien Shiang — 3,000 BCE), Greece (Aristotle's Physiognomica)",
    significance:
      "Traditional Indian matchmakers used Samudrika Shastra to assess prospective brides and grooms before horoscopes were even compared. A mole on a specific location on the face was considered as significant as a planetary placement.",
    whatItReveals: [
      "Your dominant personality archetype from facial structure",
      "Career aptitude and leadership potential from forehead shape",
      "Emotional and relationship nature from eye shape and distance",
      "Financial fate indicators from nose shape and tip",
      "Communication style and sensuality from lip shape",
      "Health markers in the facial zones",
      "Mole analysis — luck, character, or caution indicators",
      "Past-life energy patterns visible in the face",
      "Life chapters written in the facial zones (ages 1–99 mapped)",
    ],
    packages: [
      {
        id: "face-photo-analysis",
        name: "Face Photo Analysis",
        description:
          "Send a clear face photo and receive a comprehensive face reading covering personality, career aptitude, relationship nature, and key life indicators.",
        youProvide: "Clear, well-lit front-facing photo (no glasses, no strong filters), date of birth",
        duration: "Delivered within 72 hours",
        price: 22,
        includes: [
          "Full face shape and structure analysis",
          "Each zone (forehead, eyes, nose, lips, chin) analyzed",
          "Personality profile and strengths",
          "Career aptitude and natural talents",
          "Relationship and emotional nature",
          "Mole analysis (significant moles)",
          "8-12 page written report with annotated photo",
        ],
        delivery: "report",
        source:
          "Face reading report: $18–$30. Certified Samudrika / Mien Shiang practitioner rate.",
      },
      {
        id: "face-destiny-reading",
        name: "Face + Destiny Reading (Physiognomy + Numerology Combined)",
        description:
          "Combined reading of your face and your numerological destiny numbers — the two systems are cross-referenced for a uniquely accurate and detailed reading.",
        youProvide: "Clear face photo, full birth name, date of birth",
        duration: "Delivered within 5 business days",
        price: 42,
        includes: [
          "Full face reading (as above)",
          "Numerology destiny analysis",
          "Cross-reference: where face and numbers agree",
          "Key life patterns identified",
          "Specific advice per decade of life",
          "15-page integrated report (PDF)",
          "15-minute audio walkthrough by the reader",
        ],
        delivery: "report",
        source:
          "Combined face + numerology reading: $35–$55. Senior Samudrika + Ank Jyotish practitioner rate.",
      },
    ],
    prominentTraditions: [
      "Samudrika Shastra (Vedic — India)",
      "Mien Shiang / Siang Mien (Chinese face reading)",
      "Traditional Korean/Japanese physiognomy",
      "Aristotelian Physiognomics (Greek/Western)",
    ],
    bestFor: [
      "Self-understanding and career clarity",
      "Assessing a potential partner or employee",
      "Understanding why certain patterns repeat",
      "Children's talent identification",
      "Mole interpretation and concern",
      "General personality audit",
    ],
    auspiciousTimes: [
      "No specific requirement — photo-based readings are available anytime",
    ],
    diaspora: ["India", "China", "Japan", "Korea", "USA", "UK", "Southeast Asia"],
    tags: ["face-reading", "samudrika", "physiognomy", "mien-shiang", "mole-reading", "mukh-vichar"],
  },

  // ── 12. CHAKRA & AURA READING ─────────────────────────────────────────────
  {
    slug: "chakra-aura-reading",
    id: "MS012",
    name: "Chakra & Aura Reading",
    originalName: "Chakra Darshan / Pranamaya Kosha Vichar",
    category: "chakra",
    icon: "🌈",
    theme: {
      bg: "bg-fuchsia-50",
      nav: "bg-fuchsia-800",
      navText: "text-white",
      accent: "bg-fuchsia-600",
      accentText: "text-white",
      badge: "bg-fuchsia-100",
      badgeText: "text-fuchsia-800",
    },
    tagline: "Your body is a universe of spinning energy. Know what's blocked.",
    description:
      "The chakra system — from the Sanskrit word for 'wheel' — is the Vedic map of the body's energy centers. The 7 main chakras (Muladhara to Sahasrara) govern specific physical organs, emotional states, and spiritual capacities. When a chakra is blocked or imbalanced, it manifests as emotional struggle, physical illness, or spiritual stagnation in the corresponding life area. An aura reader perceives the electromagnetic field around the body — its colors, density, and disturbances — to assess the overall energy state.",
    origin:
      "Vedic India (Yoga Sutras, Tantra texts) — parallel systems in Chinese acupuncture (meridians), Sufi Lataif, and Kabbalistic Sephirot",
    significance:
      "Quantum physics now acknowledges bioelectromagnetic fields around the body. Kirlian photography captures the aura. The chakra system maps these fields with precision that modern energy medicine is only beginning to validate.",
    whatItReveals: [
      "Which of your 7 chakras are blocked, deficient, or overactive",
      "The life area each blocked chakra corresponds to",
      "Root Chakra issues — survival, money, home security",
      "Sacral Chakra issues — creativity, sexuality, pleasure blocks",
      "Solar Plexus — self-worth, personal power, confidence",
      "Heart Chakra — ability to give and receive love, grief",
      "Throat Chakra — self-expression, speaking your truth",
      "Third Eye — intuition, clarity, mental fog",
      "Crown Chakra — spiritual connection, life purpose",
      "Color and density of your aura — what it says about current state",
    ],
    packages: [
      {
        id: "chakra-audit",
        name: "Chakra Audit Report",
        description:
          "Based on a detailed questionnaire and your date of birth, our energy reader assesses all 7 chakras — identifying blocks, deficiencies, and overactivities with specific healing recommendations.",
        youProvide:
          "Completed 40-question chakra assessment form (sent after booking), date of birth, current symptoms or concerns",
        duration: "Delivered within 72 hours",
        price: 25,
        includes: [
          "All 7 chakra states assessed",
          "Blocked/deficient/overactive identification for each",
          "Life areas affected by each imbalance",
          "Healing recommendations: crystals, sounds, yoga poses, affirmations, foods",
          "Personalized chakra activation sequence",
          "10-page illustrated chakra report (PDF)",
        ],
        delivery: "report",
        source: "Chakra audit report: $20–$35. Certified chakra practitioner rate.",
      },
      {
        id: "live-chakra-healing",
        name: "Live Chakra Healing Session",
        description:
          "Real-time distance chakra healing via video — the practitioner scans your energy field, identifies blockages, and performs distance healing protocols with sound, intention, and breath work.",
        youProvide: "Your intention for healing; comfortable sitting position during the session",
        duration: "60-minute video session",
        price: 55,
        includes: [
          "Live 60-minute distance chakra healing via Zoom",
          "Real-time energy scan and block identification",
          "Healing techniques: Reiki, sound healing (tuning forks/singing bowls), breathwork",
          "Post-session self-care prescription",
          "Follow-up 7-day integration plan",
        ],
        delivery: "video-call",
        source:
          "Live distance chakra healing session (60 min): $45–$70. Certified energy healer / Reiki master rate.",
      },
      {
        id: "aura-photo-analysis",
        name: "Aura Photography Analysis",
        description:
          "If you have access to an aura photography booth (available in many yoga studios globally) — send us your aura photo and we provide a detailed interpretation of every color and zone.",
        youProvide: "Your aura photograph (digital), date and approximate time of the photo",
        duration: "Delivered within 48 hours",
        price: 30,
        includes: [
          "Full aura color analysis (zone by zone)",
          "Dominant energy interpretation",
          "Weak or missing zones identification",
          "Current emotional/spiritual state",
          "Next 3-month energy forecast",
          "Recommendations to strengthen weak aura zones",
          "8-page aura report (PDF)",
        ],
        delivery: "report",
        source:
          "Aura photo interpretation: $25–$40. Certified aura reader market rate.",
      },
    ],
    prominentTraditions: [
      "Vedic Tantra chakra system (primary)",
      "Reiki (Japanese — Mikao Usui tradition)",
      "Pranic Healing (Master Choa Kok Sui)",
      "Barbara Brennan School of Healing (Western aura mapping)",
    ],
    bestFor: [
      "Chronic emotional blocks",
      "Unexplained physical symptoms",
      "Relationship difficulties",
      "Low energy / fatigue",
      "Anxiety or depression",
      "Spiritual dryness or disconnection",
      "After major life trauma or grief",
    ],
    auspiciousTimes: [
      "Full Moon (most powerful for energy healing)",
      "Equinoxes and Solstices",
      "Personal New Year (birthday) for full chakra audit",
    ],
    diaspora: ["USA", "UK", "Australia", "India", "Europe", "Canada", "New Zealand"],
    tags: ["chakra", "aura", "energy-healing", "reiki", "muladhara", "sahasrara", "pranic-healing"],
  },

  // ── 13. PRASHNA KUNDALI ────────────────────────────────────────────────────
  {
    slug: "prashna-kundali",
    id: "MS013",
    name: "Prashna Kundali",
    originalName: "Prashna Jyotish / Horary Astrology",
    category: "prashna",
    icon: "❓",
    theme: {
      bg: "bg-lime-50",
      nav: "bg-lime-800",
      navText: "text-white",
      accent: "bg-lime-600",
      accentText: "text-white",
      badge: "bg-lime-100",
      badgeText: "text-lime-800",
    },
    tagline: "Don't have your birth time? Ask one specific question instead.",
    description:
      "Prashna Jyotish (Horary Astrology — from Sanskrit 'Prashna' meaning 'question') casts a fresh chart for the exact moment a question is sincerely asked — and answers that specific question from the chart without needing the questioner's birth data. It is particularly powerful for time-sensitive questions: 'Will this deal go through?' 'When will I get a job?' 'Is this person trustworthy?' 'Should I marry this person?' The foundational texts — Prasna Marga and Bṛhat Prasna — are as ancient as Parashara Jyotish itself.",
    origin:
      "Ancient India — Prashna Marga, Tajika Shastra, Krishnamurti Paddhati's application to Horary",
    significance:
      "Prashna is indispensable when birth data is unavailable or unreliable — which is common in India for people born before 1970, and globally for adoptees. It is also used as a secondary confirmation alongside the natal chart.",
    whatItReveals: [
      "A yes/no answer to any specific, sincere question",
      "Timing — when an event is likely to occur",
      "Whether a business deal, job, or relationship will succeed",
      "Whether a lost item or person will be found",
      "The motives of a third party in a situation",
      "Medical prognosis for a specific health concern",
      "Whether to proceed with a planned trip, purchase, or decision",
      "The most likely outcome of a legal matter or dispute",
    ],
    packages: [
      {
        id: "single-question",
        name: "Single Question Prashna Reading",
        description:
          "Ask one clear, sincere question — the astrologer casts the Prashna chart for the exact moment of asking and gives a detailed answer with timing.",
        youProvide:
          "Your single, clearly phrased question; your current location (for chart casting)",
        duration: "Delivered within 24 hours",
        price: 22,
        includes: [
          "Prashna chart cast for the question moment",
          "Answer with reasoning (yes/no + explanation)",
          "Likely timing (if applicable)",
          "Key factors in the chart supporting the answer",
          "5-7 page report (PDF)",
        ],
        delivery: "report",
        source: "Prashna single question reading: $18–$30. Jyotish Acharya (Prashna specialist) rate.",
      },
      {
        id: "multi-question-prashna",
        name: "3-Question Prashna Session (Live Video)",
        description:
          "Live Prashna consultation for up to 3 questions — most powerful as the astrologer casts charts in real time and engages with your follow-up questions.",
        youProvide: "Your 3 most pressing questions; your current location",
        duration: "45-minute video call",
        price: 48,
        includes: [
          "Live casting of up to 3 Prashna charts during the session",
          "Full explanation of each chart's answer",
          "Remedies (if needed) for negative indications",
          "Timing estimates for each answer",
          "Post-session summary report (PDF)",
        ],
        delivery: "video-call",
        source:
          "Prashna multi-question live session: $40–$60. Experienced Prashna Jyotish practitioner rate.",
      },
    ],
    prominentTraditions: [
      "Prashna Marga (classical Indian Horary text)",
      "Krishnamurti Paddhati (KP Horary — sub-lord system)",
      "Tajika Prashna (Perso-Arabic influence on Indian Jyotish)",
      "Western Horary Astrology (William Lilly tradition)",
    ],
    bestFor: [
      "Urgent questions needing fast answers",
      "No birth data available",
      "Second opinion on a natal chart reading",
      "Business decisions",
      "Lost items or missing persons",
      "Medical prognosis questions",
    ],
    auspiciousTimes: [
      "Any time a sincere question arises — the chart is cast at that moment",
    ],
    diaspora: ["India", "UK", "USA", "Australia", "Canada", "UAE"],
    tags: ["prashna-jyotish", "horary-astrology", "single-question", "kp-astrology", "prashna-marga"],
  },

  // ── 14. MANTRA HEALING ────────────────────────────────────────────────────
  {
    slug: "mantra-healing",
    id: "MS014",
    name: "Mantra Healing",
    originalName: "Mantra Vigyan / Mantra Sadhana",
    category: "mantra",
    icon: "🕉️",
    theme: {
      bg: "bg-sky-50",
      nav: "bg-sky-800",
      navText: "text-white",
      accent: "bg-sky-600",
      accentText: "text-white",
      badge: "bg-sky-100",
      badgeText: "text-sky-800",
    },
    tagline: "Sound is the oldest medicine. Your mantra is your prescription.",
    description:
      "Mantra Vigyan (Science of Sacred Sound) is the Vedic practice of using specific syllables, words, and phrases — charged with intentional repetition — to alter consciousness, heal the body, and invoke divine energies. Unlike prayer, which speaks to God, mantra works through vibrational physics: specific sound frequencies resonate with specific energy centers in the body and with specific cosmic intelligences. A personalized mantra prescribed according to your birth chart and spiritual goal acts as a daily energetic tool far more powerful than any generic affirmation.",
    origin:
      "Rig Veda (3,500+ BCE) — 'Manas' (mind) + 'Tra' (to cross/protect) = that which protects the mind",
    significance:
      "NASA has recorded that the universe hums at 432 Hz — the frequency of Sanskrit mantra. Modern neuroscience confirms that mantra repetition alters brainwave states, reduces cortisol, and creates measurable neuroplasticity. Swami Sivananda called mantra 'the fastest path to God in this age.'",
    whatItReveals: [
      "Your ideal Ishta Devata (personal deity) and their primary mantra",
      "The specific Graha (planet) mantra to recite for your chart's weak planet",
      "How many repetitions constitute an effective Japa session",
      "The best time of day for your mantra Sadhana",
      "Beeja (seed) mantras for each chakra to heal specific life areas",
      "Whether a specific mantra requires Guru Diksha (initiation)",
      "How to use mantra for specific healing (insomnia, anxiety, relationships)",
      "The difference between silent, whispered, and aloud mantra practice",
    ],
    packages: [
      {
        id: "personal-mantra",
        name: "Personalized Mantra Assignment",
        description:
          "Based on your birth chart and current life challenge, our Vedic scholar assigns your personalized mantra with full instructions — including frequency, timing, and method.",
        youProvide: "Date, time, city of birth; your primary goal (healing/prosperity/love/spiritual growth)",
        duration: "Delivered within 48 hours",
        price: 20,
        includes: [
          "Personalized mantra selected from Vedic canon",
          "Correct pronunciation guide (transliteration + audio link)",
          "Recommended Japa count (daily repetitions)",
          "Best time window in your day",
          "Visualization to combine with the mantra",
          "6-week practice schedule",
          "6-8 page report (PDF)",
        ],
        delivery: "report",
        source: "Personalized Vedic mantra assignment: $18–$30. Vedic scholar / Jyotish practitioner rate.",
      },
      {
        id: "mantra-sadhana-kit",
        name: "Mantra Sadhana Kit + 21-Day Practice",
        description:
          "Complete mantra healing program — personalized mantra, a 21-day Sadhana schedule, supporting rituals, and weekly check-ins via WhatsApp.",
        youProvide: "Date, time, city of birth; current life situation; what you want to heal or manifest",
        duration: "21-day program; kit delivered within 72 hours",
        price: 55,
        includes: [
          "Personalized mantra (as above)",
          "21-day structured Sadhana schedule",
          "Supporting rituals: lamp, incense, color cloth specification",
          "Weekly WhatsApp check-in with the guide",
          "Custom Sankalpa (intention statement) for daily use",
          "Day 21 completion ritual guidance",
          "Physical Rudraksha mala shipped for use in practice",
        ],
        delivery: "report",
        source:
          "21-day Mantra Sadhana program: $45–$65. Vedic Sadhana guide rate including physical mala.",
      },
    ],
    prominentTraditions: [
      "Vedic Mantra Vigyan (Vedic tradition — primary)",
      "Tantric Beeja Mantra practice",
      "Transcendental Meditation (TM) — personalized mantra-based",
      "Tibetan Buddhist mantra (Om Mani Padme Hum tradition)",
      "Sikh Naam Simran (Gurbani as mantra)",
    ],
    bestFor: [
      "Anxiety and mental restlessness",
      "Chronic illness with spiritual component",
      "Spiritual awakening and meditation deepening",
      "Attracting specific life goals",
      "Protection from negative energies",
      "Healing relationships",
      "After loss or grief",
    ],
    auspiciousTimes: [
      "Brahma Muhurta (4–6 AM) — most powerful time for mantra",
      "Sunrise and Sunset (Sandhya Kaal)",
      "Shivaratri for Shiva mantras",
      "Navratri for Devi mantras",
      "Guru Purnima for Guru mantras",
    ],
    diaspora: ["India", "USA", "UK", "Europe", "Australia", "Canada", "Global spiritual seekers"],
    tags: ["mantra", "mantra-vigyan", "beeja-mantra", "japa", "sadhana", "vedic-sound", "healing"],
  },
]
