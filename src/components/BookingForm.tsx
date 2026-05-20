"use client"
import { useState } from "react"
import { useTranslations } from "next-intl"

type Ritual = {
  id: string
  name: string
  description: string
  price: number
  duration: string
  includes: string[]
  livestream?: boolean
}

type Props = {
  rituals: Ritual[]
  placeName: string
  accentClass: string
  accentTextClass: string
  badgeClass: string
  badgeTextClass: string
}

export default function BookingForm({ rituals, placeName, accentClass, accentTextClass, badgeClass, badgeTextClass }: Props) {
  const t = useTranslations('booking')
  const [selectedRitual, setSelectedRitual] = useState<Ritual | null>(null)
  const [prasadAdd, setPrasadAdd] = useState(false)
  const [priorityVideo, setPriorityVideo] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", identifier: "", family: "", whatsapp: "", date: "" })

  const total = selectedRitual ? selectedRitual.price + (prasadAdd ? 15 : 0) + (priorityVideo ? 10 : 0) : 0

  if (submitted) {
    return (
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 text-center">
        <div className="text-6xl mb-5 animate-float inline-block">🙏</div>
        <h3 className="font-display text-2xl font-bold text-stone-800 mb-2">{t('success_title')}</h3>
        <p className="text-stone-500 mb-6 leading-relaxed">{t('success_subtitle', { place: placeName })}</p>
        <div className="bg-white rounded-xl p-5 text-left max-w-sm mx-auto mb-6 border border-green-100 shadow-sm">
          <div className="space-y-2">
            <p className="text-sm text-stone-600"><span className="font-semibold text-stone-700">{t('ritual_label')}:</span> {selectedRitual?.name}</p>
            <p className="text-sm text-stone-600"><span className="font-semibold text-stone-700">{t('name_label')}:</span> {form.name}</p>
            <p className="text-sm text-stone-600"><span className="font-semibold text-stone-700">{t('date_label')}:</span> {form.date}</p>
            <div className="border-t border-stone-100 pt-2 mt-2">
              <p className="text-lg font-bold text-stone-800">{t('total_label')}: ${total}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-3 text-xs">
          <span className="bg-green-100 text-green-700 px-3 py-1.5 rounded-full font-medium">✅ {t('success_note1')}</span>
          <span className="bg-green-100 text-green-700 px-3 py-1.5 rounded-full font-medium">📹 {t('success_note2')}</span>
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
              <div className="flex justify-between items-start mb-2">
                <h3 className={`font-bold text-sm leading-snug ${isSelected ? badgeTextClass : "text-stone-800"}`}>
                  {r.name}
                </h3>
                <span className={`font-display text-base font-bold flex-shrink-0 ml-3 ${isSelected ? badgeTextClass : "text-stone-700"}`}>
                  ${r.price}
                </span>
              </div>
              <p className={`text-xs mb-3 ${isSelected ? `${badgeTextClass} opacity-70` : "text-stone-400"}`}>
                ⏱ {r.duration}{r.livestream && " · 📡 Livestream available"}
              </p>
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
                onClick={() => { if (form.name && form.whatsapp && form.date) setSubmitted(true) }}
                className={`${accentClass} ${accentTextClass} font-bold px-7 py-3.5 rounded-xl transition-all hover:opacity-90 hover:scale-105 active:scale-95 shadow-md text-sm`}
              >
                {t('confirm_button')}
              </button>
            </div>
            <p className="text-xs text-stone-400">{t('required_note')}</p>
          </div>
        </div>
      )}
    </div>
  )
}
