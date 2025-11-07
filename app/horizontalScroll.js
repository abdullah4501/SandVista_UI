'use client'
import { useEffect } from 'react'

export default function useHorizontalScroll(ref, { speed = 2, ease = 0.1, breakpoint = 992 } = {}) {
  useEffect(() => {
    document.body.classList.add('preload')

    const container = (ref && ref.current) || document.querySelector('.horizontal-scroll')
    if (!container) return

    const isMobile = window.matchMedia(`(max-width: ${breakpoint}px)`).matches

    // --- MOBILE / TABLET ---
    if (isMobile) {
      document.body.classList.remove('preload')
      document.body.classList.remove('locked')
      container.style.overflowX = 'auto'
      container.style.overflowY = 'auto'
      return
    }

    // --- DESKTOP ---
    document.body.classList.remove('preload')
    document.body.classList.add('locked')
    container.style.overflow = 'hidden'

    let current = container.scrollLeft
    let target = container.scrollLeft
    let rafId

    const clamp = (v, min, max) => Math.max(min, Math.min(v, max))
    const lerp = (a, b, t) => a + (b - a) * t

    const animate = () => {
      current = lerp(current, target, ease)
      container.scrollLeft = current
      rafId = requestAnimationFrame(animate)
    }

    const onWheel = (e) => {
      e.preventDefault()
      const max = container.scrollWidth - container.clientWidth
      target = clamp(target + e.deltaY * speed, 0, max)
    }

    // touch support for large screens
    let startY = 0
    let startScroll = 0

    const onTouchStart = (e) => {
      startY = e.touches[0].pageY
      startScroll = container.scrollLeft
    }

    const onTouchMove = (e) => {
      const dy = e.touches[0].pageY - startY
      container.scrollLeft = startScroll - dy * 1.4
      target = container.scrollLeft
    }

    container.addEventListener('wheel', onWheel, { passive: false })
    container.addEventListener('touchstart', onTouchStart, { passive: true })
    container.addEventListener('touchmove', onTouchMove, { passive: true })
    rafId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(rafId)
      container.removeEventListener('wheel', onWheel)
      container.removeEventListener('touchstart', onTouchStart)
      container.removeEventListener('touchmove', onTouchMove)
      document.body.classList.remove('locked')
      document.body.classList.remove('preload')
    }
  }, [ref, speed, ease, breakpoint])
}
