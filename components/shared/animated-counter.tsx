'use client'

import { useRef, useEffect } from "react"
import {
  useMotionValue,
  useTransform,
  useInView,
  animate,
} from "framer-motion"

export default function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number
  suffix?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))

  useEffect(() => {
    if (inView) {
      animate(count, target, { duration: 2, ease: [0.16, 1, 0.3, 1] })
    }
  }, [inView, count, target])

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${v}${suffix}`
    })
    return unsubscribe
  }, [rounded, suffix])

  return <span ref={ref}>0{suffix}</span>
}
