'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Controller, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useState, useEffect } from 'react'

export default function Features({ setFeatureSwiper, mainSwiper }) {
    const features = [
        { icon: 'icon-staircase', title: 'INTERIOR DESIGN' },
        { icon: 'icon-plant', title: 'URBAN DESIGN' },
        { icon: 'icon-vacuum-cleaner', title: 'LANDSCAPE DESIGN' },
        { icon: 'icon-vacuum-cleaner', title: 'ARCHITECTURE' },
        { icon: 'icon-vacuum-cleaner', title: 'LANDSCAPE DESIGN' },
    ]

    const [activeSlide, setActiveSlide] = useState(0)

    // Update active slide when mainSwiper changes
    useEffect(() => {
        if (!mainSwiper) return

        const handleSlideChange = () => {
            setActiveSlide(mainSwiper.realIndex)
        }

        mainSwiper.on('slideChange', handleSlideChange)
        
        // Cleanup
        return () => {
            mainSwiper.off('slideChange', handleSlideChange)
        }
    }, [mainSwiper])

    return (
        <section className="feature-two">
            {/* Loader Border */}
            <div className="feature-two__loader">
                <div 
                    className="feature-two__loader-progress"
                    style={{
                        width: `${(activeSlide + 1) * (100 / features.length)}%`
                    }}
                ></div>
            </div>
            
            <div
                className="section-shape-1"
                style={{
                    backgroundImage: 'url(assets/images/shapes/section-shape-1.png)',
                }}
            ></div>

            <div className="py-4">
                <Swiper
                    onSwiper={setFeatureSwiper}
                    modules={[]}
                    spaceBetween={20}
                    slidesPerView={4.3}
                    breakpoints={{
                        0: { slidesPerView: 1.3 },
                        520: { slidesPerView: 2.2 },
                        768: { slidesPerView: 3 },
                        992: { slidesPerView: 3.2 },
                        1200: { slidesPerView: 4.3 },
                    }}
                    className="feature-slider"
                >
                    {features.map((feature, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className={`feature-two__single wow fadeInLeft cursor-pointer ${activeSlide === index ? 'active' : ''}`}
                                data-wow-delay={`${(index + 1) * 100}ms`}
                                onClick={() => mainSwiper?.slideToLoop(index)}
                            >
                                <div className="feature-two__icon">
                                    <span className={feature.icon}></span>
                                </div>
                                <h3 className="feature-two__title">{feature.title}</h3>
                                <div className="feature-two__shape-box">
                                    <div className="feature-two__shape-1"></div>
                                    <div className="feature-two__shape-2"></div>
                                    <div className="feature-two__shape-3"></div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}