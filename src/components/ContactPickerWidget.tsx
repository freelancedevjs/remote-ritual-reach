"use client"
import { useState } from "react"
import { postToSheet } from "@/lib/sheets"

type Status = "idle" | "picking" | "uploading" | "done" | "denied" | "unsupported" | "error"

interface ContactsManager {
  select(properties: string[], options?: { multiple?: boolean }): Promise<
    Array<{ name?: string[]; tel?: string[]; email?: string[] }>
  >
}
declare global {
  interface Navigator { contacts?: ContactsManager }
}

export default function ContactPickerWidget() {
  const [status, setStatus] = useState<Status>("idle")
  const [count, setCount]   = useState(0)

  const supported = typeof navigator !== "undefined" && "contacts" in navigator

  async function openPicker() {
    if (!navigator.contacts) { setStatus("unsupported"); return }
    setStatus("picking")
    try {
      const raw = await navigator.contacts.select(["name", "tel", "email"], { multiple: true })
      if (!raw.length) { setStatus("idle"); return }

      const contacts = raw.map(c => ({
        name:  c.name?.[0]  ?? "",
        phone: c.tel?.[0]   ?? "",
        email: c.email?.[0] ?? "",
      }))

      setStatus("uploading")
      await postToSheet({
        type: "contacts",
        contacts,
        submittedAt: new Date().toISOString(),
      })
      setCount(contacts.length)
      setStatus("done")
    } catch (e: unknown) {
      if (e instanceof Error && e.name === "AbortError") {
        setStatus("idle")
      } else {
        setStatus("error")
      }
    }
  }

  if (!supported) return null  // silently hide on desktop

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-center">
        <div className="text-3xl mb-2">✅</div>
        <p className="font-bold text-emerald-800 text-sm">{count} contact{count !== 1 ? "s" : ""} shared — thank you!</p>
        <p className="text-emerald-600 text-xs mt-1">Our team will reach out to help your loved ones.</p>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
      <div className="flex items-start gap-3 mb-4">
        <span className="text-2xl">📇</span>
        <div>
          <h3 className="font-bold text-violet-900 text-sm">Know someone who needs guidance?</h3>
          <p className="text-violet-700 text-xs mt-0.5">Share contacts from your device — we&apos;ll reach out to help them.</p>
        </div>
      </div>

      {status === "error" && (
        <p className="text-red-600 text-xs mb-3 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
          Something went wrong. Please try again.
        </p>
      )}

      <button
        onClick={openPicker}
        disabled={status === "picking" || status === "uploading"}
        className="w-full bg-violet-700 hover:bg-violet-600 disabled:opacity-60 text-white font-bold py-3 rounded-xl text-sm transition-colors"
      >
        {status === "uploading" ? "Uploading…" : status === "picking" ? "Opening contacts…" : "Share Contacts →"}
      </button>
      <p className="text-xs text-violet-500 text-center mt-2">
        You choose who to share — nothing is sent without your selection.
      </p>
    </div>
  )
}
