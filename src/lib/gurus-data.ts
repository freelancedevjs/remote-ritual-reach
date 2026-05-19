export type Guru = {
  slug: string
  name: string
  lifespan: string
  origin: string
  tradition: string
  icon: string
  theme: { bg: string; nav: string; navText: string; accent: string; accentText: string; badge: string; badgeText: string }
  bio: string
  coreTeaching: string
  associatedPlaces: { name: string; slug: string }[]
  keyWorks: string[]
  diaspora: string[]
  tags: string[]
}

export const gurus: Guru[] = [
  {
    slug: "osho",
    name: "Osho (Bhagwan Shree Rajneesh)",
    lifespan: "1931–1990",
    origin: "Kuchwada, Madhya Pradesh, India",
    tradition: "No tradition — synthesis of Zen, Sufism, Tantra, Yoga, Vedanta",
    icon: "🌸",
    theme: { bg: "bg-purple-50", nav: "bg-purple-900", navText: "text-white", accent: "bg-purple-700", accentText: "text-white", badge: "bg-purple-100", badgeText: "text-purple-900" },
    bio: "Osho — also known as Bhagwan Shree Rajneesh — was one of the most provocative spiritual teachers of the 20th century. A philosophy professor turned mystic, he synthesized Eastern mysticism with Western psychology into 3,000+ discourses on meditation, love, creativity, and consciousness. His meditation resort in Pune is now the world's largest.",
    coreTeaching: "'The moment you accept yourself completely, you are free.' Osho emphasized direct experience over belief, meditation over prayer, and individual awakening over collective religion.",
    associatedPlaces: [{ name: "Osho International Meditation Resort, Pune", slug: "osho-ashram" }],
    keyWorks: ["The Book of Secrets", "Vigyan Bhairav Tantra", "The Zen Manifesto", "From Medication to Meditation"],
    diaspora: ["Germany", "Japan", "USA", "Israel", "Netherlands", "Italy", "Brazil"],
    tags: ["osho", "rajneesh", "meditation", "consciousness", "tantra", "zen"],
  },
  {
    slug: "sai-baba-shirdi",
    name: "Sai Baba of Shirdi",
    lifespan: "c.1838–1918",
    origin: "Shirdi, Maharashtra, India",
    tradition: "Universal — Hindu and Muslim elements",
    icon: "✨",
    theme: { bg: "bg-amber-50", nav: "bg-amber-800", navText: "text-white", accent: "bg-amber-600", accentText: "text-white", badge: "bg-amber-100", badgeText: "text-amber-800" },
    bio: "Sai Baba of Shirdi is perhaps the most universally loved saint of modern India. His origins are unknown — his own words 'Allah Malik' and 'Sabka Malik Ek' united Hindus and Muslims who both claim him. Miracles of healing, resurrection, and bilocation are recorded by eyewitnesses. He lived in a mosque, tended a dhuni (sacred fire), and treated the rich and poor identically.",
    coreTeaching: "'Sabka Malik Ek' — There is one God for all. Shraddha (faith) and Saburi (patience) are his two core prescriptions.",
    associatedPlaces: [{ name: "Shri Sai Baba Mandir, Shirdi", slug: "shirdi-sai-baba" }],
    keyWorks: ["Shri Sai Satcharita (biography)", "Sai Baba's recorded sayings"],
    diaspora: ["USA", "UK", "Canada", "UAE", "Australia", "Malaysia"],
    tags: ["sai-baba", "shirdi", "universal", "miracle-worker", "thursday"],
  },
  {
    slug: "guru-nanak",
    name: "Guru Nanak Dev Ji",
    lifespan: "1469–1539",
    origin: "Talwandi (now Nankana Sahib, Pakistan)",
    tradition: "Sikhism — founder",
    icon: "🌟",
    theme: { bg: "bg-blue-50", nav: "bg-blue-900", navText: "text-white", accent: "bg-blue-800", accentText: "text-white", badge: "bg-blue-100", badgeText: "text-blue-900" },
    bio: "Guru Nanak is the founder of Sikhism and the first of the ten Sikh Gurus. At age 30, he disappeared into a river for three days and emerged saying: 'There is no Hindu, there is no Muslim.' He then traveled 28,000 km across four directions — visiting Mecca, Baghdad, Tibet, and Sri Lanka — spreading the message of Ik Onkar: One God, One Creation.",
    coreTeaching: "'Ik Onkar Sat Naam' — One God, whose name is Truth. The three pillars: Naam Japo (meditate on God's name), Kirat Karo (earn honestly), Vand Chakko (share with others).",
    associatedPlaces: [{ name: "Golden Temple, Amritsar", slug: "golden-temple" }, { name: "Hemkund Sahib", slug: "hemkund-sahib" }],
    keyWorks: ["Japji Sahib", "Asa Di Var", "Contributions to the Guru Granth Sahib"],
    diaspora: ["Canada", "UK", "USA", "Australia", "Malaysia", "Kenya"],
    tags: ["sikh", "guru-nanak", "ik-onkar", "founder", "nankana-sahib"],
  },
  {
    slug: "ramakrishna",
    name: "Sri Ramakrishna Paramahamsa",
    lifespan: "1836–1886",
    origin: "Kamarpukur, West Bengal, India",
    tradition: "Hindu Vedanta — synthesized all religions",
    icon: "🙏",
    theme: { bg: "bg-orange-50", nav: "bg-orange-900", navText: "text-white", accent: "bg-orange-800", accentText: "text-white", badge: "bg-orange-100", badgeText: "text-orange-900" },
    bio: "Sri Ramakrishna was a mystic and sage who practiced Hinduism, Islam, and Christianity and declared: 'As many faiths, so many paths.' His direct experience of God in multiple traditions was unprecedented. His chief disciple, Swami Vivekananda, brought his message to the West at the 1893 Parliament of World Religions.",
    coreTeaching: "'As many faiths, so many paths to God.' Direct experience of God is possible in this very life. Service to humans is worship of God.",
    associatedPlaces: [{ name: "Belur Math, West Bengal", slug: "ramakrishna-belur-math" }],
    keyWorks: ["The Gospel of Sri Ramakrishna", "Vivekananda's Complete Works"],
    diaspora: ["USA", "UK", "Germany", "Global Vedanta centers"],
    tags: ["ramakrishna", "vedanta", "vivekananda", "all-religions", "bengal"],
  },
  {
    slug: "khwaja-moinuddin-chishti",
    name: "Khwaja Moinuddin Chishti (Gharib Nawaz)",
    lifespan: "1141–1236",
    origin: "Sijistan (now Iran/Afghanistan border)",
    tradition: "Islam — Chishti Sufi order",
    icon: "🌙",
    theme: { bg: "bg-green-50", nav: "bg-green-900", navText: "text-white", accent: "bg-green-800", accentText: "text-white", badge: "bg-green-100", badgeText: "text-green-900" },
    bio: "Gharib Nawaz — 'Helper of the Poor' — brought the Chishti Sufi order to India in the 12th century, establishing love, music (qawwali), and service as the path to God. Emperors sought his blessing; beggars received the same welcome. He is credited with influencing the spiritual conversion of millions through love alone — never force.",
    coreTeaching: "Love (Muhabbat) is the only true religion. Music (sama/qawwali) is a lawful path to God. Serve humanity as an act of worship.",
    associatedPlaces: [{ name: "Ajmer Sharif Dargah", slug: "ajmer-sharif" }],
    keyWorks: ["Anis al-Arwah", "Dalil al-Arifin"],
    diaspora: ["Pakistan", "Bangladesh", "India diaspora globally", "UK"],
    tags: ["chishti", "sufi", "ajmer", "qawwali", "love-mystic", "gharib-nawaz"],
  },
  {
    slug: "amma",
    name: "Mata Amritanandamayi (Amma)",
    lifespan: "1953–present",
    origin: "Parayakadavu, Kerala, India",
    tradition: "Hindu — Advaita Vedanta & Bhakti (universal)",
    icon: "💛",
    theme: { bg: "bg-pink-50", nav: "bg-pink-900", navText: "text-white", accent: "bg-pink-700", accentText: "text-white", badge: "bg-pink-100", badgeText: "text-pink-900" },
    bio: "Mata Amritanandamayi — 'Amma' (Mother) — is the 'hugging saint' who has embraced over 40 million people individually, listening to each one's grief, joy, or prayer. Born to a poor Kerala fishing family, she showed signs of spiritual gifts from childhood. Her international organization runs hospitals, schools, and disaster relief globally.",
    coreTeaching: "'My religion is love.' Amma teaches that selfless love and service (seva) are the highest spiritual practices. She says: 'Compassion toward all beings is true meditation.'",
    associatedPlaces: [{ name: "Amritapuri Ashram, Kerala", slug: "amma-amritapuri" }],
    keyWorks: ["Awaken Children (collected teachings)", "For My Children (poems)", "The Infinite Potential of Women"],
    diaspora: ["USA", "Europe", "Japan", "Australia", "Global following across 40 countries"],
    tags: ["amma", "hugging-saint", "kerala", "love", "seva", "universal"],
  },
]
