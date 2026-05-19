"use client"
import React, { useEffect, useRef, type ReactNode } from "react"

type Animation = "reveal" | "reveal-left" | "reveal-right" | "reveal-scale" | "reveal-stagger"

type Props = {
  children: ReactNode
  className?: string
  animation?: Animation
  delay?: number
  threshold?: number
  as?: keyof React.JSX.IntrinsicElements
}

export default function ScrollReveal({
  children,
  className = "",
  animation = "reveal",
  delay = 0,
  threshold = 0.1,
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (delay) el.style.transitionDelay = `${delay}ms`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible")
          observer.disconnect()
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, threshold])

  return (
    // @ts-expect-error – polymorphic ref is fine here
    <Tag ref={ref} className={`${animation} ${className}`}>
      {children}
    </Tag>
  )
}
