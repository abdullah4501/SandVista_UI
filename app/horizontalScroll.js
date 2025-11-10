'use client'
import { useEffect, useRef } from 'react'

export let horizontalScrollController = null;

export default function useHorizontalScroll(
  ref,
  { speed = 2, ease = 0.1, breakpoint = 992 } = {}
) {
  const targetRef = useRef(0)

  // expose a helper so external code can scroll correctly
  const scrollToX = (x) => {
    targetRef.current = x
  }

  useEffect(() => {
    document.body.classList.add('preload')

    const container = (ref && ref.current) || document.querySelector('.horizontal-scroll')
    if (!container) return

    const isMobile = window.matchMedia(`(max-width: ${breakpoint}px)`).matches
    if (isMobile) {
      document.body.classList.remove('preload', 'locked')
      container.style.overflowX = 'auto'
      container.style.overflowY = 'auto'
      return
    }

    document.body.classList.remove('preload')
    document.body.classList.add('locked')
    container.style.overflow = 'hidden'

    let current = container.scrollLeft
    targetRef.current = current
    let rafId

    const clamp = (v, min, max) => Math.max(min, Math.min(v, max))
    const lerp = (a, b, t) => a + (b - a) * t

    const animate = () => {
      current = lerp(current, targetRef.current, ease)
      container.scrollLeft = current
      rafId = requestAnimationFrame(animate)
    }

    const onWheel = (e) => {
      e.preventDefault()
      const max = container.scrollWidth - container.clientWidth
      targetRef.current = clamp(targetRef.current + e.deltaY * speed, 0, max)
    }

    let startY = 0
    let startScroll = 0

    const onTouchStart = (e) => {
      startY = e.touches[0].pageY
      startScroll = container.scrollLeft
    }

    const onTouchMove = (e) => {
      const dy = e.touches[0].pageY - startY
      container.scrollLeft = startScroll - dy * 1.4
      targetRef.current = container.scrollLeft
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
      document.body.classList.remove('locked', 'preload')
    }
  }, [ref, speed, ease, breakpoint])

  horizontalScrollController = scrollToX
  return scrollToX
}
