"use client"
import { useState } from "react"

type Ritual = {
  id: string
  name: string
  description: string
  price: number
  duration: string
  includes: string[]
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
  const [selectedRitual, setSelectedRitual] = useState<Ritual | null>(null)
  const [prasadAdd, setPrasadAdd] = useState(false)
  const [priorityVideo, setPriorityVideo] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", identifier: "", family: "", whatsapp: "", date: "" })

  const identifierLabel = "Your gotra / father's name / village (optional)"
  const total = selectedRitual ? selectedRitual.price + (prasadAdd ? 15 : 0) + (priorityVideo ? 10 : 0) : 0

  const selectedBorderClass = `border-2 ${badgeClass} ${badgeTextClass}`

  if (submitted) {
    return (
      <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center">
        <div className="text-5xl mb-4">🙏</div>
        <h3 className="text-xl font-bold text-stone-800 mb-2">Booking Received!</h3>
        <p className="text-stone-600 mb-4">Your ritual at <strong>{placeName}</strong> has been booked.<br />A confirmation will be sent to your WhatsApp within 2 hours.</p>
        <div className="bg-white rounded-xl p-4 text-left max-w-sm mx-auto mb-6">
          <p className="text-sm text-stone-600"><span className="font-medium">Ritual:</span> {selectedRitual?.name}</p>
          <p className="text-sm text-stone-600"><span className="font-medium">Name:</span> {form.name}</p>
          <p className="text-sm text-stone-600"><span className="font-medium">Date:</span> {form.date}</p>
          <p className="text-sm font-bold text-stone-800 mt-2">Total: ${total}</p>
        </div>
        <div className="flex justify-center gap-2 flex-wrap text-sm text-stone-500">
          <span>✅ Priest will be assigned within 24h</span>
          <span>•</span>
          <span>📹 Video within 24h of ritual</span>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Ritual selection */}
      <div className="grid md:grid-cols-2 gap-4">
        {rituals.map(r => (
          <button key={r.id} onClick={() => setSelectedRitual(r)}
            className={`text-left rounded-xl border-2 p-4 transition-all ${selectedRitual?.id === r.id ? selectedBorderClass : "border-stone-200 bg-white hover:border-stone-300"}`}>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-stone-800 text-sm">{r.name}</h3>
              <span className="font-bold text-stone-700 text-sm">${r.price}</span>
            </div>
            <p className="text-stone-400 text-xs mb-2">Duration: {r.duration}</p>
            <ul className="space-y-0.5">
              {r.includes.map(i => <li key={i} className="text-xs text-stone-500 flex items-start gap-1"><span className="text-green-500 mt-0.5">✓</span>{i}</li>)}
            </ul>
          </button>
        ))}
      </div>

      {selectedRitual && (
        <div className="bg-white border border-stone-200 rounded-2xl p-6 mt-4">
          <h3 className="font-bold text-stone-800 mb-4">Your Details</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Your Full Name *</label>
              <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-stone-400"
                placeholder="As you want it read in the ritual" />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">{identifierLabel}</label>
              <input type="text" value={form.identifier} onChange={e => setForm({...form, identifier: e.target.value})}
                className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-stone-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Family Members to Include (optional)</label>
              <input type="text" value={form.family} onChange={e => setForm({...form, family: e.target.value})}
                className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-stone-400"
                placeholder="e.g. Spouse name, children names" />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">WhatsApp Number * (for video delivery)</label>
              <input type="tel" required value={form.whatsapp} onChange={e => setForm({...form, whatsapp: e.target.value})}
                className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-stone-400"
                placeholder="+1 555 000 0000" />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Preferred Date *</label>
              <input type="date" required value={form.date} onChange={e => setForm({...form, date: e.target.value})}
                className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-stone-400"
                min={new Date().toISOString().split("T")[0]} />
            </div>

            {/* Add-ons */}
            <div className="border-t pt-4">
              <p className="text-sm font-medium text-stone-700 mb-3">Add-ons</p>
              <label className="flex items-start gap-3 cursor-pointer mb-3">
                <input type="checkbox" checked={prasadAdd} onChange={e => setPrasadAdd(e.target.checked)} className="mt-1" />
                <div>
                  <span className="text-sm font-medium text-stone-700">📦 Prasad International Shipping (+$15)</span>
                  <p className="text-xs text-stone-400">Blessed items shipped to your address worldwide. 10–21 days.</p>
                </div>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" checked={priorityVideo} onChange={e => setPriorityVideo(e.target.checked)} className="mt-1" />
                <div>
                  <span className="text-sm font-medium text-stone-700">🎥 Priority Video Delivery (+$10)</span>
                  <p className="text-xs text-stone-400">Edited HD video with your name overlay, delivered within 4 hours.</p>
                </div>
              </label>
            </div>

            {/* Total + submit */}
            <div className="border-t pt-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-stone-500">Total</p>
                <p className="text-2xl font-bold text-stone-800">${total}</p>
              </div>
              <button
                onClick={() => { if (form.name && form.whatsapp && form.date) setSubmitted(true) }}
                className={`${accentTextClass} font-semibold px-6 py-3 rounded-xl ${accentClass} transition-colors hover:opacity-90`}>
                Confirm Booking →
              </button>
            </div>
            <p className="text-xs text-stone-400">* Fields required. Payment collected after priest assignment confirmation.</p>
          </div>
        </div>
      )}
    </div>
  )
}
