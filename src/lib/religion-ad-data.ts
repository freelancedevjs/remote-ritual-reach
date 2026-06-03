// Religion-specific ad landing page data
// ⚠️ YouTube heroVideoId values reference well-known public devotional videos.
//    Verify each ID is still embeddable and non-age-restricted before running ads.

export type LifeProblemRemedy = {
  icon: string
  problem: string
  description: string
  remedy: string       // ritual name
  place: string        // display name
  placeSlug: string    // matches Place.slug from places-data.ts
}

export type ReligionAdData = {
  slug: string
  name: string
  icon: string
  theme: {
    bg: string
    nav: string
    navText: string
    accent: string
    accentText: string
    badge: string
    badgeText: string
  }
  heroTitle: string
  heroSubtitle: string
  // Pexels SD MP4 (640×360) — small, fast, free to embed. Format:
  // https://videos.pexels.com/video-files/{ID}/{ID}-sd_640_360_25fps.mp4
  // Replace any ID: go to pexels.com/videos, open a video, copy ID from the URL.
  heroVideoUrl: string
  quotes: Array<{ text: string; source: string }>
  lifeProblems: LifeProblemRemedy[]
}

export const religions: ReligionAdData[] = [
  {
    slug: "hindu",
    name: "Hinduism",
    icon: "🔱",
    theme: {
      bg: "bg-orange-50",
      nav: "bg-orange-900",
      navText: "text-orange-50",
      accent: "bg-orange-600 hover:bg-orange-700",
      accentText: "text-white",
      badge: "bg-orange-100",
      badgeText: "text-orange-900",
    },
    heroTitle: "Your Prayer Has No Distance",
    heroSubtitle: "Connect with the sacred temples of Bharat — from anywhere in the world",
    // Pexels search: "temple fire puja sacred flame india"
    heroVideoUrl: "https://videos.pexels.com/video-files/5177023/5177023-sd_640_360_25fps.mp4",
    quotes: [
      {
        text: "Whenever righteousness declines and unrighteousness rises, I manifest myself. For the protection of the good, for the destruction of evil, and for the establishment of righteousness, I am born in every age.",
        source: "Bhagavad Gita 4.7–8",
      },
      {
        text: "Fix your mind on Me, be devoted to Me, worship Me, bow down to Me. So shall you come to Me. I promise you truly, for you are dear to Me.",
        source: "Bhagavad Gita 18.65",
      },
      {
        text: "The soul is neither born nor does it die at any time. It has not come into being, does not come into being, and will not come into being. It is unborn, eternal, ever-existing, and primeval.",
        source: "Bhagavad Gita 2.20",
      },
      {
        text: "Let noble thoughts come to us from every side.",
        source: "Rigveda 1.89.1",
      },
    ],
    lifeProblems: [
      {
        icon: "💸",
        problem: "Financial struggles and debt",
        description: "Blocked prosperity often signals an imbalance in the karmic line. Rudrabhishek removes planetary obstructions and invites Lakshmi's grace.",
        remedy: "Rudrabhishek",
        place: "Kashi Vishwanath Temple",
        placeSlug: "kashi-vishwanath",
      },
      {
        icon: "💔",
        problem: "Marriage delayed or broken",
        description: "Kalyanotsavam — the divine wedding ceremony — carries the blessing of Balaji's own marriage. Couples and seekers book this from across the world.",
        remedy: "Kalyanotsavam",
        place: "Tirumala Venkateswara Temple",
        placeSlug: "tirupati-balaji",
      },
      {
        icon: "😰",
        problem: "Fear, anxiety and no inner peace",
        description: "Mahakal is the Lord of Time and Death — worshipping him removes fear at its root. The Bhasma Aarti at 4 AM is performed with ash from the cremation ground.",
        remedy: "Bhasma Aarti Dedication",
        place: "Mahakaleshwar Jyotirlinga",
        placeSlug: "mahakaleshwar",
      },
      {
        icon: "👴",
        problem: "Ancestor spirits causing repeated problems",
        description: "Unresolved ancestor karma (pitru dosha) repeats across generations until addressed with proper rites. Kashi is the only place where Pind Daan grants direct liberation.",
        remedy: "Pind Daan",
        place: "Kashi Vishwanath Temple",
        placeSlug: "kashi-vishwanath",
      },
      {
        icon: "🏥",
        problem: "Chronic illness or slow recovery",
        description: "Vaishno Devi — the mother goddess in her Shakti form — is known for miraculous healing. Her Navratri hawan carries a million prayers.",
        remedy: "Navratri Special Hawan",
        place: "Vaishno Devi Shrine",
        placeSlug: "vaishno-devi",
      },
      {
        icon: "🙏",
        problem: "A long-held wish not yet fulfilled",
        description: "Tirupati Balaji is the most visited sacred place on Earth. His grace is known for answering sincere wishes — temples here operate 24 hours for this reason.",
        remedy: "Archana",
        place: "Tirumala Venkateswara Temple",
        placeSlug: "tirupati-balaji",
      },
    ],
  },

  {
    slug: "islam",
    name: "Islam",
    icon: "🌙",
    theme: {
      bg: "bg-green-50",
      nav: "bg-green-900",
      navText: "text-green-50",
      accent: "bg-green-700 hover:bg-green-800",
      accentText: "text-white",
      badge: "bg-green-100",
      badgeText: "text-green-900",
    },
    heroTitle: "Your Dua Reaches Beyond Any Distance",
    heroSubtitle: "The doors of the Dargah are open — for every heart, from every country",
    // Pexels search: "mosque islamic architecture light lanterns"
    heroVideoUrl: "https://videos.pexels.com/video-files/4114076/4114076-sd_640_360_25fps.mp4",
    quotes: [
      {
        text: "And your Lord says: Call upon Me; I will respond to you.",
        source: "Quran 40:60",
      },
      {
        text: "Verily, with hardship comes ease. Verily, with hardship comes ease.",
        source: "Quran 94:5–6",
      },
      {
        text: "Whoever relies upon Allah — then He is sufficient for him. Indeed, Allah will accomplish His purpose.",
        source: "Quran 65:3",
      },
      {
        text: "The heart of a believer is between two fingers of the Most Merciful — He turns it however He wills.",
        source: "Hadith — Sahih Muslim",
      },
    ],
    lifeProblems: [
      {
        icon: "💰",
        problem: "Poverty and financial hardship",
        description: "Gharib Nawaz — 'Helper of the Poor' — is the title of Khwaja Moinuddin Chishti. He is renowned across centuries for lifting believers from material distress.",
        remedy: "Fatiha & Personal Mannat",
        place: "Dargah Khwaja Moinuddin Chishti, Ajmer",
        placeSlug: "ajmer-sharif",
      },
      {
        icon: "💑",
        problem: "Marriage not happening",
        description: "The saints intercede for righteous union. Thursday offerings at the dargah are considered most potent — the cotton chaddar is offered with your mannat whispered.",
        remedy: "Cotton Chaddar Offering",
        place: "Dargah Khwaja Moinuddin Chishti, Ajmer",
        placeSlug: "ajmer-sharif",
      },
      {
        icon: "🌙",
        problem: "Spiritual emptiness and loss of faith",
        description: "Data Ganj Bakhsh's teachings on divine love restore the wandering heart. His Friday night mehfil is dedicated to seekers from all paths.",
        remedy: "Thursday Night Mehfil Dedication",
        place: "Data Darbar Shrine, Lahore",
        placeSlug: "data-darbar",
      },
      {
        icon: "🏥",
        problem: "Chronic illness",
        description: "Hazrat Nizamuddin Auliya's dargah is visited by millions of the sick. The saint carries prayers beyond what medicine can reach.",
        remedy: "Fatiha Khwani at the Mazaar",
        place: "Hazrat Nizamuddin Dargah, Delhi",
        placeSlug: "nizamuddin-dargah",
      },
      {
        icon: "😔",
        problem: "Grief and inability to move forward",
        description: "Nizamuddin Auliya's teaching on ishq (divine love) and sabr (patience) is the oldest medicine for grief. Thursday qawwali is dedicated for the departed.",
        remedy: "Thursday Qawwali Dedication",
        place: "Hazrat Nizamuddin Dargah, Delhi",
        placeSlug: "nizamuddin-dargah",
      },
      {
        icon: "⭐",
        problem: "A specific wish or mannat not fulfilled",
        description: "The Chishti order has fulfilled sincere mannats for nine centuries. The mannat thread tied at the mazaar binds your intention to the divine.",
        remedy: "Mannat Dedication at the Mazaar",
        place: "Data Darbar Shrine, Lahore",
        placeSlug: "data-darbar",
      },
    ],
  },

  {
    slug: "sikh",
    name: "Sikhism",
    icon: "🌟",
    theme: {
      bg: "bg-amber-50",
      nav: "bg-blue-900",
      navText: "text-blue-50",
      accent: "bg-blue-700 hover:bg-blue-800",
      accentText: "text-white",
      badge: "bg-blue-100",
      badgeText: "text-blue-900",
    },
    heroTitle: "Ek Onkar — One God, No Distance",
    heroSubtitle: "The Golden Temple's doors are open to all — Ardas carries your wish across the world",
    // Pexels search: "golden temple amritsar dawn reflection water"
    heroVideoUrl: "https://videos.pexels.com/video-files/3581397/3581397-sd_640_360_25fps.mp4",
    quotes: [
      {
        text: "Ik Onkar — There is One God, the Creator, the Name is Truth, Without fear, Without enmity, Timeless, Self-illumined.",
        source: "Guru Granth Sahib — Mool Mantar",
      },
      {
        text: "Those who meditate on the Name of the Lord — their faces are radiant and bright in the Court of the Lord.",
        source: "Guru Granth Sahib, Ang 8",
      },
      {
        text: "The Lord's Name is the support of His devotees. The Lord is the life of His saints.",
        source: "Guru Granth Sahib, Ang 669",
      },
      {
        text: "In service to others, we find God. True service is to serve without ego.",
        source: "Guru Nanak Dev Ji",
      },
    ],
    lifeProblems: [
      {
        icon: "🙏",
        problem: "Guidance in a major life decision",
        description: "The Hukamnama — the divine message drawn daily from Guru Granth Sahib at the Golden Temple — is the word of the living Guru. Ardas places your specific question before it.",
        remedy: "Daily Hukamnama + Ardas",
        place: "Harmandir Sahib (Sri Darbar Sahib)",
        placeSlug: "golden-temple",
      },
      {
        icon: "❤️",
        problem: "Family conflict and broken relationships",
        description: "Ardas at Sri Akal Takht — the seat of Sikh temporal authority — carries immense spiritual and moral weight. Family issues placed here have been resolved for centuries.",
        remedy: "Ardas at Sri Akal Takht",
        place: "Harmandir Sahib (Sri Darbar Sahib)",
        placeSlug: "golden-temple",
      },
      {
        icon: "🌍",
        problem: "Blessing a new beginning or journey abroad",
        description: "Langar seva — sponsoring a free meal for pilgrims — creates immense merit (punya) before any new chapter. Sangat's blessings follow you.",
        remedy: "Langar Seva (Sponsor 50 Meals)",
        place: "Harmandir Sahib (Sri Darbar Sahib)",
        placeSlug: "golden-temple",
      },
      {
        icon: "⛰️",
        problem: "Deepest spiritual longing — surrender",
        description: "Hemkund Sahib at 4,329m is where Guru Gobind Singh meditated in a past life. The glacial Ardas carried from this altitude is unlike any other.",
        remedy: "Ardas at the Glacial Sarovar",
        place: "Hemkund Sahib",
        placeSlug: "hemkund-sahib",
      },
      {
        icon: "📖",
        problem: "Seeking God's blessing over a continuous period",
        description: "The Akhand Path — 48 hours of unbroken scripture reading — wraps your intention in continuous divine sound. Many commission one before a surgery, exam, or big decision.",
        remedy: "Akhand Path (48-Hour Gurbani Recitation)",
        place: "Harmandir Sahib (Sri Darbar Sahib)",
        placeSlug: "golden-temple",
      },
    ],
  },

  {
    slug: "christian",
    name: "Christianity",
    icon: "✝️",
    theme: {
      bg: "bg-sky-50",
      nav: "bg-sky-900",
      navText: "text-sky-50",
      accent: "bg-sky-700 hover:bg-sky-800",
      accentText: "text-white",
      badge: "bg-sky-100",
      badgeText: "text-sky-900",
    },
    heroTitle: "Your Prayer Is Heard",
    heroSubtitle: "The shrines of India carry centuries of answered prayers — from believers worldwide",
    // Pexels search: "church candle light devotion prayer"
    heroVideoUrl: "https://videos.pexels.com/video-files/3571264/3571264-sd_640_360_25fps.mp4",
    quotes: [
      {
        text: "Ask and it will be given to you; seek and you will find; knock and the door will be opened for you.",
        source: "Matthew 7:7",
      },
      {
        text: "I can do all things through Christ who strengthens me.",
        source: "Philippians 4:13",
      },
      {
        text: "Cast all your anxiety on Him because He cares for you.",
        source: "1 Peter 5:7",
      },
      {
        text: "He heals the brokenhearted and binds up their wounds.",
        source: "Psalm 147:3",
      },
    ],
    lifeProblems: [
      {
        icon: "🏥",
        problem: "Illness that medicine cannot explain",
        description: "Our Lady of Velankanni — the Lourdes of the East — has healed the sick since the 16th century. Pilgrims arrive with crutches and leave without them.",
        remedy: "9-Day Novena Dedication",
        place: "Basilica of Our Lady of Good Health, Velankanni",
        placeSlug: "velankanni",
      },
      {
        icon: "👶",
        problem: "Longing for a child",
        description: "Mary intercedes for the gift of life. Mothers worldwide have brought their longing to Velankanni — the response has become the faith of generations.",
        remedy: "Holy Mass Intention",
        place: "Basilica of Our Lady of Good Health, Velankanni",
        placeSlug: "velankanni",
      },
      {
        icon: "🙏",
        problem: "Gratitude for a grace received",
        description: "St. Francis Xavier's incorrupt body has been venerated for 500 years. A votive candle at his relic chapel honours what God has done in your life.",
        remedy: "Candle at the Relic Chapel",
        place: "Basilica of Bom Jesus, Goa",
        placeSlug: "bom-jesus-goa",
      },
      {
        icon: "🌊",
        problem: "Safety in dangerous circumstances or travel",
        description: "Our Lady of Good Health first appeared to fishermen in a storm. She is the patroness of those who face danger — especially those who cross seas.",
        remedy: "Candle Lighting & Prayer",
        place: "Basilica of Our Lady of Good Health, Velankanni",
        placeSlug: "velankanni",
      },
      {
        icon: "💔",
        problem: "Forgiveness, shame, and a new beginning",
        description: "St. Francis Xavier was the apostle of Asia, the saint of mission and new beginnings. His basilica is the place to lay down what you carry.",
        remedy: "Holy Mass Intention at the Basilica",
        place: "Basilica of Bom Jesus, Goa",
        placeSlug: "bom-jesus-goa",
      },
    ],
  },

  {
    slug: "buddhist",
    name: "Buddhism",
    icon: "☸️",
    theme: {
      bg: "bg-yellow-50",
      nav: "bg-yellow-900",
      navText: "text-yellow-50",
      accent: "bg-yellow-700 hover:bg-yellow-800",
      accentText: "text-white",
      badge: "bg-yellow-100",
      badgeText: "text-yellow-900",
    },
    heroTitle: "Peace Comes From Within",
    heroSubtitle: "The Bodhi Tree still stands where the Buddha attained enlightenment — your meditation connects to that moment",
    // Pexels search: "buddhist monks meditation temple serene"
    heroVideoUrl: "https://videos.pexels.com/video-files/3643460/3643460-sd_640_360_25fps.mp4",
    quotes: [
      {
        text: "Peace comes from within. Do not seek it without.",
        source: "Dhammapada",
      },
      {
        text: "The mind is everything. What you think, you become.",
        source: "The Buddha",
      },
      {
        text: "Three things cannot be long hidden: the sun, the moon, and the truth.",
        source: "The Buddha",
      },
      {
        text: "May all beings be happy, free from suffering, and the causes of suffering. May all beings be at peace.",
        source: "Metta Sutta — Loving-Kindness Meditation",
      },
    ],
    lifeProblems: [
      {
        icon: "😰",
        problem: "Anxiety, restlessness and mental suffering",
        description: "The Vajrasana — the Diamond Throne where the Buddha attained liberation — holds extraordinary merit for those who meditate here. A monk's dedication carries your intention to the source.",
        remedy: "1-Hour Monk Meditation at Vajrasana",
        place: "Mahabodhi Temple, Bodh Gaya",
        placeSlug: "mahabodhi-bodhgaya",
      },
      {
        icon: "👴",
        problem: "Prayer for a deceased loved one",
        description: "Merit can be transferred across the veil. A monk's dedicated meditation generates powerful punya (merit) that can be offered to those who have passed.",
        remedy: "Oil Lamp Offering at the Bodhi Tree",
        place: "Mahabodhi Temple, Bodh Gaya",
        placeSlug: "mahabodhi-bodhgaya",
      },
      {
        icon: "🌿",
        problem: "Desire to accumulate spiritual merit",
        description: "Lighting a lamp at the Bodhi Tree — the exact spot of enlightenment — generates extraordinary merit. The ritual has been performed continuously for 2,500 years.",
        remedy: "Oil Lamp Offering at the Bodhi Tree",
        place: "Mahabodhi Temple, Bodh Gaya",
        placeSlug: "mahabodhi-bodhgaya",
      },
      {
        icon: "🔄",
        problem: "Feeling stuck in the same patterns",
        description: "Pradakshina — circumambulation of the Bodhi Tree — is a walking meditation that physically releases what holds you. The Buddha himself walked this path after his awakening.",
        remedy: "Pradakshina (Circumambulation Dedication)",
        place: "Mahabodhi Temple, Bodh Gaya",
        placeSlug: "mahabodhi-bodhgaya",
      },
      {
        icon: "💫",
        problem: "Seeking inner clarity and direction",
        description: "The Mahabodhi temple is the navel of the universe in Buddhist understanding. A monk sitting for one hour in meditation for you connects your intention to the source of all awakening.",
        remedy: "1-Hour Monk Meditation at Vajrasana",
        place: "Mahabodhi Temple, Bodh Gaya",
        placeSlug: "mahabodhi-bodhgaya",
      },
    ],
  },

  {
    slug: "jain",
    name: "Jainism",
    icon: "🕊️",
    theme: {
      bg: "bg-stone-50",
      nav: "bg-stone-800",
      navText: "text-stone-50",
      accent: "bg-stone-700 hover:bg-stone-800",
      accentText: "text-white",
      badge: "bg-stone-100",
      badgeText: "text-stone-800",
    },
    heroTitle: "Ahimsa Paramo Dharma",
    heroSubtitle: "Non-violence is the highest religion — Shatrunjaya Hill carries 23 crore liberated souls",
    // Pexels search: "ancient stone temple pillars india peaceful"
    heroVideoUrl: "https://videos.pexels.com/video-files/4629869/4629869-sd_640_360_25fps.mp4",
    quotes: [
      {
        text: "Ahimsa Paramo Dharma — Non-violence is the supreme dharma.",
        source: "Lord Mahavira",
      },
      {
        text: "The soul is the architect of its own fortune and misfortune.",
        source: "Jain Teaching",
      },
      {
        text: "Do not injure, abuse, oppress, enslave, insult, torment, torture, or kill any creature or living being.",
        source: "Lord Mahavira",
      },
      {
        text: "Have compassion towards all living beings. Hatred is never appeased by hatred in this world.",
        source: "Jain Agamas",
      },
    ],
    lifeProblems: [
      {
        icon: "⚖️",
        problem: "Heavy karmic burden from past actions",
        description: "Palitana is the holiest place in Jainism — the 3,800-step climb and Snatra Puja purify layers of karmic debt accumulated across lifetimes.",
        remedy: "Snatra Puja (Abhishek of Adinath)",
        place: "Palitana Temples (Shatrunjaya Hill)",
        placeSlug: "palitana",
      },
      {
        icon: "🕊️",
        problem: "Guilt and need for spiritual purity",
        description: "The Navkar Mantra salutes the five paramesthin (supreme beings). 108 recitations at Shatrunjaya Hill purify the subtle body at the deepest level.",
        remedy: "Navkar Mantra (108 Recitations)",
        place: "Palitana Temples (Shatrunjaya Hill)",
        placeSlug: "palitana",
      },
      {
        icon: "🌿",
        problem: "Desire to live with more purity and compassion",
        description: "Standing at Shatrunjaya — where 23 crore souls attained liberation — renews the resolve to live according to ahimsa, satya, and aparigraha.",
        remedy: "Snatra Puja (Abhishek of Adinath)",
        place: "Palitana Temples (Shatrunjaya Hill)",
        placeSlug: "palitana",
      },
      {
        icon: "🙏",
        problem: "Seeking liberation (moksha)",
        description: "Shatrunjaya is the Jain equivalent of Mount Meru. Prayer performed here, offered in your name by a qualified pujari, joins the eternal stream of liberation.",
        remedy: "Navkar Mantra (108 Recitations)",
        place: "Palitana Temples (Shatrunjaya Hill)",
        placeSlug: "palitana",
      },
      {
        icon: "💼",
        problem: "Business crisis or major life decision",
        description: "Many Jain business families perform Snatra Puja at Palitana before major decisions — the puja aligns action with dharma.",
        remedy: "Snatra Puja (Abhishek of Adinath)",
        place: "Palitana Temples (Shatrunjaya Hill)",
        placeSlug: "palitana",
      },
    ],
  },

  {
    slug: "universal",
    name: "Universal / All Faiths",
    icon: "✨",
    theme: {
      bg: "bg-amber-50",
      nav: "bg-amber-900",
      navText: "text-amber-50",
      accent: "bg-amber-600 hover:bg-amber-700",
      accentText: "text-white",
      badge: "bg-amber-100",
      badgeText: "text-amber-900",
    },
    heroTitle: "One God, Many Names",
    heroSubtitle: "Sai Baba said: Sabka Malik Ek — Come as you are, from wherever you are",
    // Pexels search: "incense smoke meditation sunrise divine light"
    heroVideoUrl: "https://videos.pexels.com/video-files/1723731/1723731-sd_640_360_25fps.mp4",
    quotes: [
      {
        text: "Sabka Malik Ek — The Master of all is One.",
        source: "Sai Baba of Shirdi",
      },
      {
        text: "Why fear when I am here? Put full trust in Me. I shall guide and guard you.",
        source: "Sai Baba of Shirdi",
      },
      {
        text: "My religion is love. All are my children.",
        source: "Mata Amritanandamayi (Amma)",
      },
      {
        text: "Be still and know that I am God.",
        source: "Psalm 46:10",
      },
    ],
    lifeProblems: [
      {
        icon: "✨",
        problem: "A wish that transcends religion",
        description: "Sai Baba promised: 'If you look to me, I look to you.' Shirdi is the most inclusive sacred place in the world — Hindu, Muslim, and all faiths pray side by side.",
        remedy: "Panchamrit Abhishek",
        place: "Shri Sai Baba Mandir, Shirdi",
        placeSlug: "shirdi-sai-baba",
      },
      {
        icon: "🏥",
        problem: "Healing from illness or accident",
        description: "Amma — who has personally embraced over 40 million people — prays for all who come, regardless of faith. A Devi Bhava dedication carries your healing prayer to the Divine Mother.",
        remedy: "Devi Bhava Dedication",
        place: "Amritapuri Ashram (Amma's Ashram)",
        placeSlug: "amma-amritapuri",
      },
      {
        icon: "🧘",
        problem: "Stress, burnout and loss of purpose",
        description: "Osho's meditation science addresses the root of modern suffering. A meditation session at his samadhi — where his ashes rest — transmits a rare stillness.",
        remedy: "Meditation at Osho's Samadhi",
        place: "Osho International Meditation Resort, Pune",
        placeSlug: "osho-ashram",
      },
      {
        icon: "💔",
        problem: "Grief, loss, and inability to heal",
        description: "Amma holds space for grief like no other living being. She has sat through millions of tears. A Devi Bhava night dedication carries your sorrow to the Mother.",
        remedy: "Devi Bhava Night Dedication",
        place: "Amritapuri Ashram (Amma's Ashram)",
        placeSlug: "amma-amritapuri",
      },
      {
        icon: "🗓️",
        problem: "Thursday's prayer — the most powerful day",
        description: "Sai Baba designated Thursdays as especially powerful days for his devotees. The Kakad Aarti at 5:30 AM opens the entire day in his grace.",
        remedy: "Kakad Aarti Pass (5:30 AM)",
        place: "Shri Sai Baba Mandir, Shirdi",
        placeSlug: "shirdi-sai-baba",
      },
      {
        icon: "🚧",
        problem: "Obstacles that keep repeating",
        description: "Sai Baba's teaching: 'Why fear when I am here.' The palki procession carries a million prayers before the divine throne of the universal saint.",
        remedy: "Palki Procession Evening Dedication",
        place: "Shri Sai Baba Mandir, Shirdi",
        placeSlug: "shirdi-sai-baba",
      },
    ],
  },
]
