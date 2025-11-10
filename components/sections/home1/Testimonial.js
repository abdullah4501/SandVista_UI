'use client'
import Link from "next/link"
export default function Testimonial() {
    return (
        <>
        
        {/* Testimonial One Start */}
        <section className="testimonial-one">
            <div className="testimonial-one__shape1 wow fadeInRight" data-wow-delay="500ms">
                <img className="float-bob-y" src="assets/images/shapes/testimonial-v1-shape1.png" alt="Shape" />
            </div>
            <div className="testimonial-one__shape2 wow fadeInLeft" data-wow-delay="500ms">
                <img className="float-bob-y" src="assets/images/shapes/testimonial-v1-shape1.png" alt="Shape" />
            </div>
            <div className="section-shape-1" style={{ backgroundImage: ' url(assets/images/shapes/section-shape-1.png)' }} ></div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style2">
                    <h2 className="section-title__title title-animation mb-5" >
                        Let’s Talk!
                    </h2>
                    <p className="testimonial-one__text"> Join the Revolution. <br /> Partner with <span style={{fontWeight:'700', color: '#3bacef'}}>Sand Vista</span> and be part of Pakistan’s new construction frontier. Let us build smarter, greener, and stronger together.</p>
                </div>

                <div className="testimonial-one__top">
                    <div className="row">
                        {/* Testimonial One Single Start */}
                        <div className="col-12 wow fadeInLeft" data-wow-delay="100ms">
                            <div className="testimonial-one__single" style={{ backgroundImage: ' url(assets/images/team/People-img.jpg)' }} >
                                
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-center">
                        <p className="text-white">Mail Us: info@sandvistabuildersanddevelopers.com</p>                        
                    </div>
                </div>

            </div>
        </section>
        {/* Testimonial One End */}

            
        </>
    )
}
