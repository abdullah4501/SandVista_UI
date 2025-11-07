'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination, Controller } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Features from "@/components/sections/home2/Features"
import { useState } from "react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation, Controller],
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}

export default function Banner() {
    const [mainSwiper, setMainSwiper] = useState(null)
    const [featureSwiper, setFeatureSwiper] = useState(null)

    return (
        <>
            {/* Main Slider Two Start */}
            <section className="main-slider-two">
                <div
                    className="section-shape-1"
                    style={{ backgroundImage: 'url(assets/images/shapes/section-shape-1.png)' }}
                ></div>

                <Swiper
                    {...swiperOptions}
                    onSwiper={setMainSwiper}
                    // REMOVED controller connection
                    className="main-slider__carousel owl-theme owl-carousel"
                >
                    <SwiperSlide>
                        <div className="item">
                            <div className="main-slider-two__bg"
                                style={{ backgroundImage: ' url(assets/images/backgrounds/slider-2-1.jpg)' }} >
                            </div>{/* /.slider-one__bg */}

                            <div className="container">
                                <div className="main-slider-two__content">
                                    <h2 className="main-slider-two__title">Stunning Interior <br />
                                        Design Possibilities
                                    </h2>
                                    <p className="main-slider-two__text">Ut elementum sergeoi mollis eu sapien neque des tempus
                                        Tristique nisl nibh desing here this de tinci dunt our designer <br /> here is Tristique
                                        nisl nibh desing here this de tinci Tristique nisl nibh desing here this de tinci</p>
                                    <div className="main-slider-two__btn-box">
                                        <Link href="about" className="thm-btn main-slider-two__btn">More Details <span
                                            className="icon-up-right-arrow"></span> </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="main-slider-two__bg"
                                style={{ backgroundImage: ' url(assets/images/backgrounds/slider-2-2.jpg)' }} >
                            </div>{/* /.slider-one__bg */}

                            <div className="container">
                                <div className="main-slider-two__content">
                                    <h2 className="main-slider-two__title">Stunning Interior <br />
                                        Design Possibilities
                                    </h2>
                                    <p className="main-slider-two__text">Ut elementum sergeoi mollis eu sapien neque des tempus
                                        Tristique nisl nibh desing here this de tinci dunt our designer <br /> here is Tristique
                                        nisl nibh desing here this de tinci Tristique nisl nibh desing here this de tinci</p>
                                    <div className="main-slider-two__btn-box">
                                        <Link href="about" className="thm-btn main-slider-two__btn">More Details <span
                                            className="icon-up-right-arrow"></span> </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="main-slider-two__bg"
                                style={{ backgroundImage: ' url(assets/images/backgrounds/slider-2-3.jpg)' }} >
                            </div>{/* /.slider-one__bg */}

                            <div className="container">
                                <div className="main-slider-two__content">
                                    <h2 className="main-slider-two__title">Stunning Interior <br />
                                        Design Possibilities
                                    </h2>
                                    <p className="main-slider-two__text">Ut elementum sergeoi mollis eu sapien neque des tempus
                                        Tristique nisl nibh desing here this de tinci dunt our designer <br /> here is Tristique
                                        nisl nibh desing here this de tinci Tristique nisl nibh desing here this de tinci</p>
                                    <div className="main-slider-two__btn-box">
                                        <Link href="about" className="thm-btn main-slider-two__btn">More Details <span
                                            className="icon-up-right-arrow"></span> </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div
                                className="main-slider-two__bg"
                                style={{ backgroundImage: 'url(assets/images/backgrounds/slider-1-1.jpg)' }}
                            ></div>
                            <div className="container">
                                <div className="main-slider-two__content">
                                    <h2 className="main-slider-two__title">Modern Urban <br /> Architecture</h2>
                                    <p className="main-slider-two__text">Experience innovative urban design blending functionality with aesthetics.</p>
                                    <div className="main-slider-two__btn-box">
                                        <Link href="architecture" className="thm-btn main-slider-two__btn">
                                            More Details <span className="icon-up-right-arrow"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div
                                className="main-slider-two__bg"
                                style={{ backgroundImage: 'url(assets/images/backgrounds/slider-1-2.jpg)' }}
                            ></div>
                            <div className="container">
                                <div className="main-slider-two__content">
                                    <h2 className="main-slider-two__title">Landscape & <br /> Outdoor Design</h2>
                                    <p className="main-slider-two__text">Create breathtaking outdoor environments that harmonize with nature.</p>
                                    <div className="main-slider-two__btn-box">
                                        <Link href="landscape-design" className="thm-btn main-slider-two__btn">
                                            More Details <span className="icon-up-right-arrow"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>

                {/* Features Component - NOW OUTSIDE the Swiper but inside the same section */}
                <Features setFeatureSwiper={setFeatureSwiper} mainSwiper={mainSwiper} />
            </section>
            {/* Slider Two End */}
        </>
    )
}