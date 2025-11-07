'use client'
import { useEffect, useState, useRef } from 'react'
import useHorizontalScroll from '@/app/horizontalScroll'
import Layout from '@/components/layout/Layout'
import Banner from '@/components/sections/home2/Banner'
import About from '@/components/sections/home2/About'
import Team from '@/components/sections/home2/Team'
import Footer1 from '@/components/layout/footer/Footer1'

export default function Home() {
  const scrollContainerRef = useRef(null)
  const [isDesktop, setIsDesktop] = useState(false)

  // Detect screen size once client-side (avoids hydration mismatch)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsDesktop(window.innerWidth > 992)
    }
  }, [])

  // Activate smooth horizontal scroll
  useHorizontalScroll(scrollContainerRef, { speed: 1.6, ease: 0.1, breakpoint: 992 })

  return (
    <Layout headerStyle={1} footerStyle={1}>
      <div ref={scrollContainerRef} className="horizontal-scroll">
        <Banner />
        <About />
        {/* Footer only inside scroll on desktop */}
        {isDesktop && (
          <section className="footer-panel">
            <Footer1 />
          </section>
        )}
      </div>
    </Layout>
  )
}
