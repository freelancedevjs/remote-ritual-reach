export const churchShrines = [
  {
    slug: "velankanni",
    name: "Basilica of Our Lady of Good Health",
    saint: "Our Lady of Velankanni (Arokia Matha)",
    location: "Velankanni, Tamil Nadu",
    description: "Called the 'Lourdes of the East', Our Lady of Velankanni has been healing the sick and comforting the suffering since the 16th century. The September feast draws over a million pilgrims. Her intercession is sought by people of all faiths.",
    theme: "bg-sky-50",
    icon: "⛪",
    auspiciousDays: ["Fridays", "September 29 – Feast day", "Christmas", "Good Friday"],
    rituals: [
      { id: "candle", name: "Candle Lighting & Prayer", price: 15, duration: "1 day", includes: ["Candle lit before Our Lady", "Your intention prayed", "Photo of lit candle", "Blessed medal shipped"] },
      { id: "novena", name: "9-Day Novena Dedication", price: 25, duration: "9 days", includes: ["Your name in 9-day novena", "Daily updates", "Novena booklet + medal shipped"] },
      { id: "mass-offering", name: "Holy Mass Offering", price: 35, duration: "1 day", includes: ["Mass offered for your intention", "Mass card provided", "Video of Mass", "Blessed items shipped"] },
      { id: "votive", name: "Votive Offering (Thanksgiving)", price: 20, duration: "1 day", includes: ["Thanksgiving offering in your name", "Photo at the shrine", "Blessed rosary shipped"] },
    ],
  },
  {
    slug: "st-thomas-mount",
    name: "St. Thomas Mount (San Thome)",
    saint: "St. Thomas the Apostle",
    location: "Chennai, Tamil Nadu",
    description: "The sacred hill where St. Thomas, one of the 12 Apostles of Jesus, was martyred in 72 AD. One of only three places in the world where an Apostle was martyred and buried, this site holds profound significance for Catholics worldwide.",
    theme: "bg-indigo-50",
    icon: "✝️",
    auspiciousDays: ["Sundays", "Feast of St. Thomas (July 3)", "Christmas", "Easter"],
    rituals: [
      { id: "mass-offering", name: "Mass Offering", price: 20, duration: "1 day", includes: ["Sunday Mass offered for your intention", "Mass card", "Video of Mass"] },
      { id: "candle", name: "Candle Lighting", price: 12, duration: "1 day", includes: ["Candle lit at the Apostle's tomb", "Photo proof", "Blessed medal shipped"] },
      { id: "special-intention", name: "Special Intention Prayer", price: 25, duration: "1 day", includes: ["Priest prays your specific intention at the tomb", "Video proof", "Blessed cross shipped"] },
    ],
  },
]
