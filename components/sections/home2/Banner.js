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
  loop: false,

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
          className="main-slider__carousel owl-theme owl-carousel"
        >

          {/* Slide 1 – Introduction */}
          <SwiperSlide>
            <div className="item">
              <div className="main-slider-two__bg"
                style={{ backgroundImage: 'url(assets/images/backgrounds/slider-2-1.jpg)' }} ></div>
              <div className="container">
                <div className="main-slider-two__content">
                  <h3 className="main-slider-subtitle">Welcome to</h3>
                  <h2 className="main-slider-two__title">
                    Sand Vista <br />Builders & Developers
                  </h2>
                  <p className="main-slider-two__text">
                    At <b>Sand Vista Builders & Developers</b>, we are not just constructing buildings<br />
                    we are redefining the future of construction in Pakistan.

                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 – Vision */}
          <SwiperSlide>
            <div className="item">
              <div className="main-slider-two__bg"
                style={{ backgroundImage: 'url(assets/images/backgrounds/slider-2-2.jpg)' }} ></div>
              <div className="container">
                <div className="main-slider-two__content">
                  <h2 className="main-slider-two__title">Innovation, sustainability, <br />and smart technology</h2>
                  <p className="main-slider-two__text">
                    We combine innovation, sustainability, and smart technology to deliver projects <br />that meet
                    the demands of tomorrow, today.
                  </p>
                  <h3 className="main-slider-subtitle">Our Vision</h3>
                  <p className="main-slider-two__text">
                    To lead Pakistan into a new era of intelligent, efficient, and sustainable construction <br />
                    where digital tools, modular methods, and green practices come together to create spaces
                    that inspire, perform, and last.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 – Global Construction Trends */}
          <SwiperSlide>
            <div className="item">
              <div className="main-slider-two__bg"
                style={{ backgroundImage: 'url(assets/images/backgrounds/slider-2-3.jpg)' }} ></div>
              <div className="container">
                <div className="main-slider-two__content">
                  <h2 className="main-slider-two__title">We Bring Global Construction <br />Trends to Pakistan</h2>
                  <p className="main-slider-two__text">
                    At Sand Vista, we are bridging the gap between Pakistan and the world’s most advanced
                    construction methodologies. <br />Our focus is on <b>digital transformation, </b>
                    <b>modular construction</b>, and <b>sustainability</b>, ensuring excellence from planning to delivery.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 4 – Digital & Smart Operations */}
          <SwiperSlide>
            <div className="item">
              <div className="main-slider-two__bg"
                style={{ backgroundImage: 'url(assets/images/backgrounds/slider-1-1.jpg)' }} ></div>
              <div className="container">
                <div className="main-slider-two__content">
                  <h2 className="main-slider-two__title">Digital & Smart Operations</h2>
                  <p className="main-slider-two__text mb-0">
                    We integrate <b>Building Information Modeling (BIM)</b>, <b>digital twins</b>,
                    and <b>IoT-enabled systems</b> <br />into every project for real-time monitoring, precision design,
                    and data-driven decision-making. <br /><br />
                    Every structure we build is backed by digital intelligence from concept to completion.
                  </p> <br />
                  <ul className="main-slider-two__text">
                    <li><span>✔</span> Enhanced design accuracy</li>
                    <li><span>✔</span> Transparent project tracking</li>
                    <li><span>✔</span> Real-time cost and schedule management</li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 5 – Prefabrication & Modular Construction */}
          <SwiperSlide>
            <div className="item">
              <div className="main-slider-two__bg"
                style={{ backgroundImage: 'url(assets/images/backgrounds/slider-1-2.jpg)' }} ></div>
              <div className="container">
                <div className="main-slider-two__content">
                  <h2 className="main-slider-two__title">Prefabrication & <br />Modular Construction</h2>
                  <p className="main-slider-two__text">
                    Time is value that’s why Sand Vista embraces <b>off-site construction</b>,
                    <b>prefabrication</b>, <br />and <b>modular systems</b> that dramatically reduce build times
                    while maintaining superior quality and sustainability.
                  </p>
                  <h3 className="main-slider-subtitle mb-0">Our Promise:</h3>
                  <ul className="main-slider-two__text">
                    <li><span>✔</span> Faster delivery</li>
                    <li><span>✔</span> Lower waste</li>
                    <li><span>✔</span> Precision-engineered excellence built to global standards right here in Pakistan</li>
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>

        <Features
          setFeatureSwiper={setFeatureSwiper}
          featureSwiper={featureSwiper}
          mainSwiper={mainSwiper}
        />
      </section>
      {/* Slider Two End */}
    </>

  )
}