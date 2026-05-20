"use client"
import { useState } from "react"
import { useTranslations } from "next-intl"
import { submitBooking } from "@/app/actions/booking"

type Ritual = {
  id: string
  name: string
  description: string
  offerings: string
  price: number
  duration: string
  includes: string[]
  livestream?: boolean
  source?: string
}

type Props = {
  rituals: Ritual[]
  placeName: string
  locale?: string
  accentClass: string
  accentTextClass: string
  badgeClass: string
  badgeTextClass: string
}

export default function BookingForm({ rituals, placeName, locale = "en", accentClass, accentTextClass, badgeClass, badgeTextClass }: Props) {
  const t = useTranslations('booking')
  const [selectedRitual, setSelectedRitual] = useState<Ritual | null>(null)
  const [prasadAdd, setPrasadAdd] = useState(false)
  const [priorityVideo, setPriorityVideo] = useState(false)
  const [bookingId, setBookingId] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [bookingError, setBookingError] = useState<string | null>(null)
  const [form, setForm] = useState({ name: "", identifier: "", family: "", whatsapp: "", date: "" })

  const total = selectedRitual ? selectedRitual.price + (prasadAdd ? 15 : 0) + (priorityVideo ? 10 : 0) : 0

  if (bookingId) {
    return (
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-8 text-center">
        <div className="text-6xl mb-5 animate-float inline-block">🙏</div>
        <h3 className="font-display text-2xl font-bold text-stone-800 mb-2">{t('success_title')}</h3>

        {/* Booking summary */}
        <div className="bg-white rounded-xl p-5 text-left max-w-sm mx-auto mb-6 border border-amber-100 shadow-sm">
          <div className="space-y-2">
            <p className="text-sm text-stone-500 font-medium">{placeName}</p>
            <p className="text-sm text-stone-600"><span className="font-semibold text-stone-700">{t('ritual_label')}:</span> {selectedRitual?.name}</p>
            <p className="text-sm text-stone-600"><span className="font-semibold text-stone-700">{t('name_label')}:</span> {form.name}</p>
            <p className="text-sm text-stone-600"><span className="font-semibold text-stone-700">{t('date_label')}:</span> {form.date}</p>
            <div className="border-t border-stone-100 pt-2 mt-2">
              <p className="text-lg font-bold text-stone-800">{t('total_label')}: ${total}</p>
            </div>
          </div>
        </div>

        {/* Hopeful message */}
        <p className="text-stone-500 text-sm leading-relaxed max-w-sm mx-auto mb-8">
          {t('success_hope')}
        </p>

        {/* Payment buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-7 py-3.5 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-md text-sm"
          >
            💳 {t('pay_now')}
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-white border-2 border-amber-300 hover:border-amber-400 text-amber-700 hover:text-amber-800 font-bold px-7 py-3.5 rounded-xl transition-all hover:scale-105 active:scale-95 text-sm"
          >
            🤲 {t('donate')}
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        {rituals.map(r => {
          const isSelected = selectedRitual?.id === r.id
          return (
            <button
              key={r.id}
              onClick={() => setSelectedRitual(r)}
              className={`text-left rounded-2xl border-2 p-5 transition-all duration-200 hover:shadow-md ${
                isSelected
                  ? `${badgeClass} border-current shadow-md`
                  : "border-stone-200 bg-white hover:border-stone-300 hover:bg-stone-50/50"
              }`}
            >
              {/* Title + price row */}
              <div className="flex justify-between items-start mb-2">
                <h3 className={`font-bold text-sm leading-snug pr-2 ${isSelected ? badgeTextClass : "text-stone-800"}`}>
                  {r.name}
                </h3>
                <span className={`font-display text-lg font-bold flex-shrink-0 ${isSelected ? badgeTextClass : "text-stone-700"}`}>
                  ${r.price}
                </span>
              </div>

              {/* Description */}
              <p className={`text-xs leading-relaxed mb-3 ${isSelected ? `${badgeTextClass} opacity-80` : "text-stone-500"}`}>
                {r.description}
              </p>

              {/* Meta row: duration + livestream badge */}
              <div className={`flex flex-wrap items-center gap-2 text-xs mb-3 ${isSelected ? `${badgeTextClass} opacity-70` : "text-stone-400"}`}>
                <span>⏱ {r.duration}</span>
                {r.livestream && (
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${isSelected ? "bg-white/25" : "bg-emerald-50 text-emerald-700 border border-emerald-200"}`}>
                    📡 Livestream
                  </span>
                )}
              </div>

              {/* Offerings */}
              {r.offerings && (
                <p className={`text-xs mb-3 ${isSelected ? `${badgeTextClass} opacity-65` : "text-stone-400"}`}>
                  🌸 <span className="font-medium">Offerings:</span> {r.offerings}
                </p>
              )}

              {/* Includes */}
              <ul className="space-y-1">
                {r.includes.map(inc => (
                  <li key={inc} className={`text-xs flex items-start gap-1.5 ${isSelected ? badgeTextClass : "text-stone-500"}`}>
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>

              {isSelected && (
                <div className={`mt-3 pt-3 border-t border-current/20 ${badgeTextClass} opacity-70 text-xs font-semibold`}>
                  ✓ {t('select_ritual')}
                </div>
              )}
            </button>
          )
        })}
      </div>

      {selectedRitual && (
        <div className="bg-white border border-stone-200 rounded-2xl p-6 mt-2 shadow-sm">
          <h3 className="font-display font-bold text-stone-800 mb-5 text-lg">{t('your_details')}</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide">
                {t('full_name')} *
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/15 transition-all"
                placeholder={t('full_name_placeholder')}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide">
                {t('identifier')}
              </label>
              <input
                type="text"
                value={form.identifier}
                onChange={e => setForm({ ...form, identifier: e.target.value })}
                className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/15 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide">
                {t('family')}
              </label>
              <input
                type="text"
                value={form.family}
                onChange={e => setForm({ ...form, family: e.target.value })}
                className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/15 transition-all"
                placeholder={t('family_placeholder')}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide">
                {t('whatsapp')} *
              </label>
              <input
                type="tel"
                required
                value={form.whatsapp}
                onChange={e => setForm({ ...form, whatsapp: e.target.value })}
                className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/15 transition-all"
                placeholder={t('whatsapp_placeholder')}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide">
                {t('date')} *
              </label>
              <input
                type="date"
                required
                value={form.date}
                onChange={e => setForm({ ...form, date: e.target.value })}
                className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/15 transition-all"
                min={new Date().toISOString().split("T")[0]}
              />
            </div>

            <div className="border border-stone-100 rounded-xl p-4 bg-stone-50">
              <p className="text-xs font-bold text-stone-600 uppercase tracking-wide mb-3">{t('addons')}</p>
              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={prasadAdd}
                    onChange={e => setPrasadAdd(e.target.checked)}
                    className="mt-0.5 w-4 h-4 accent-amber-500 cursor-pointer"
                  />
                  <div>
                    <span className="text-sm font-semibold text-stone-700 group-hover:text-amber-700 transition-colors">
                      📦 {t('prasad_label')}
                    </span>
                    <p className="text-xs text-stone-400 mt-0.5">{t('prasad_desc')}</p>
                  </div>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={priorityVideo}
                    onChange={e => setPriorityVideo(e.target.checked)}
                    className="mt-0.5 w-4 h-4 accent-amber-500 cursor-pointer"
                  />
                  <div>
                    <span className="text-sm font-semibold text-stone-700 group-hover:text-amber-700 transition-colors">
                      🎥 {t('priority_video_label')}
                    </span>
                    <p className="text-xs text-stone-400 mt-0.5">{t('priority_video_desc')}</p>
                  </div>
                </label>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-stone-100">
              <div>
                <p className="text-xs text-stone-400 uppercase tracking-wide">{t('total')}</p>
                <p className="font-display text-3xl font-bold text-stone-800">${total}</p>
              </div>
              <button
                disabled={submitting}
                onClick={async () => {
                  if (!form.name || !form.whatsapp || !form.date || !selectedRitual) return
                  setSubmitting(true)
                  setBookingError(null)
                  const result = await submitBooking({
                    name: form.name, identifier: form.identifier, family: form.family,
                    whatsapp: form.whatsapp, date: form.date,
                    placeName, ritualId: selectedRitual.id, ritualName: selectedRitual.name,
                    ritualPrice: selectedRitual.price, prasadAddon: prasadAdd,
                    priorityVideo, totalAmount: total, locale,
                  })
                  setSubmitting(false)
                  if (result.ok) setBookingId(result.id)
                  else setBookingError(result.error)
                }}
                className={`${accentClass} ${accentTextClass} font-bold px-7 py-3.5 rounded-xl transition-all hover:opacity-90 hover:scale-105 active:scale-95 shadow-md text-sm disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {submitting ? "…" : t('confirm_button')}
              </button>
            </div>
            {bookingError && (
              <p className="text-xs text-red-500 font-medium">{bookingError}</p>
            )}
            <p className="text-xs text-stone-400">{t('required_note')}</p>
          </div>
        </div>
      )}
    </div>
  )
}
