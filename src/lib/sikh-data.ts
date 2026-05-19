export const sikhGurdwaras = [
  {
    slug: "golden-temple",
    name: "Harmandir Sahib (Golden Temple)",
    location: "Amritsar, Punjab",
    description: "The holiest shrine in Sikhism, Sri Harmandir Sahib shines in gold in the heart of Amritsar's Amrit Sarovar (nectar pool). The Akhand Path (non-stop reading of Guru Granth Sahib) and langar (free community kitchen) never stop here — day or night.",
    theme: "bg-amber-50",
    icon: "🌟",
    auspiciousDays: ["Gurpurab", "Vaisakhi", "Every day — Waheguru's house is always open"],
    rituals: [
      { id: "ardas", name: "Ardas on Your Behalf", price: 20, duration: "1 day", includes: ["Personal Ardas with your name and family", "Video of the Ardas", "Hukamnama shared with you"] },
      { id: "langar", name: "Langar Dedication (Feed 50 Souls)", price: 40, duration: "1 day", includes: ["Langar served in your family's name", "Certificate of seva", "Photo proof"] },
      { id: "hukamnama", name: "Daily Hukamnama + Ardas", price: 15, duration: "1 day", includes: ["Morning Hukamnama recited for you", "Audio shared on WhatsApp", "Your name in the daily prayer"] },
      { id: "akhand-path", name: "Akhand Path Booking (48-hr)", price: 150, duration: "48 hours", includes: ["48-hour non-stop Gurbani reading", "Your family names throughout", "Certificate + video highlights"] },
    ],
  },
  {
    slug: "hemkund-sahib",
    name: "Hemkund Sahib",
    location: "Chamoli District, Uttarakhand (4,329m)",
    description: "Perched at 4,329 meters in the Himalayas beside a glacial lake, Hemkund Sahib is where Guru Gobind Singh Ji meditated in a previous life. The trek is sacred but impossible for most. Let us carry your prayers there.",
    theme: "bg-blue-50",
    icon: "🏔️",
    auspiciousDays: ["Open June–October", "Gurpurab of Guru Gobind Singh"],
    rituals: [
      { id: "ardas", name: "Ardas at the Sarovar", price: 25, duration: "1 day (trek day)", includes: ["Ardas at the glacial lake shrine", "Trek video", "Sacred jal (water) shipped"] },
      { id: "ishnaan-proxy", name: "Sacred Ishnaan Proxy", price: 30, duration: "1 day", includes: ["Ishnaan performed in your intention", "Video at the lake", "Blessed water + Prasad"] },
    ],
  },
]
