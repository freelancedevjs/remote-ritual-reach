"use client"
// Root path "/" — with localePrefix:'always' no locale lives here.
// Redirect visitors to the default locale (/en/).
import { useEffect } from "react"

export default function RootPage() {
  useEffect(() => {
    window.location.replace("/en/")
  }, [])
  return null
}
