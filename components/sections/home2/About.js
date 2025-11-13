'use client'
import Link from "next/link"
export default function About() {

    return (
        <>
            {/*About Two Start*/}
            <section className="about-two">
                <div className="section-shape-1" style={{ backgroundImage: ' url(assets/images/shapes/section-shape-1.png)' }} ></div>
                <div className="about-two__shape-1 float-bob-x">
                    <img src="assets/images/shapes/about-two-shape-1.png" alt="" />
                </div>
                <div className="container">
                    <div className="row items-center">
                        <div className="col-md-6 col- wow fadeInLeft" data-wow-delay="100ms">
                            <div className="about-two__left">
                                <div className="section-title text-left sec-title-animation animation-style2">
                                    <h2 className="section-title__title title-animation">
                                        Message from the CEO — Kamal Ahmed Siddiqui
                                    </h2>
                                </div>

                                <p className="about-two__text">
                                    With over 25 years of experience in Pakistan’s builders and developers industry,
                                    I founded <b>Sand Vista Builders & Developers</b> to redefine how Pakistan builds its future.
                                    Our vision is to merge innovation, sustainability, and digital transformation to deliver
                                    projects that inspire progress and strengthen communities.
                                </p>

                                <ul className="list-unstyled about-two__history">
                                    <li>
                                        <div className="about-two__history-single">
                                            <h3 className="about-two__history-year">Philosophy</h3>
                                            <p className="about-two__history-text">
                                                “Every structure should serve people, empower communities, and stand as a testament to progress.”
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="about-two__history-single">
                                            <h3 className="about-two__history-year">Vision</h3>
                                            <p className="about-two__history-text">
                                                Building digitally intelligent, sustainable, and future-ready spaces for a smarter, greener Pakistan.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                                <h3 className="about-end mt-5">Kamal Ahmed Siddiqui</h3>
                                <p className="about-subtitle">Founder & CEO</p>
                            </div>

                        </div>
                        <div className="col-md-6 wow fadeInRight" data-wow-delay="300ms">
                            <div className="about-two__right">
                                <div className="about-two__img">
                                    <img src="assets/images/team/team4.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*About Two End */}
        </>
    )
}
