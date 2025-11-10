import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import { goToSection } from "@/app/scrollToSection";

export default function Header1({ scroll, handlePopup, handleMobileMenu }) {
    return (
        <>

            <header className="main-header">
                <nav className="main-menu">
                    <div className="main-menu__wrapper">
                        <div className="container header-margin">
                            <div className="main-menu__wrapper-inner">
                                <div className="main-menu__logo">
                                    <Link href="/" onClick={() => goToSection("banner")}><img src="assets/images/resources/logo-2.png" alt="" /></Link>
                                </div>
                                <div className="main-menu__bottom">
                                    <div className="main-menu__main-menu-box">
                                        <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                        <Menu />
                                    </div>

                                    <div className="main-menu__search-and-btn-box">
                                      
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <div className={`stricky-header stricked-menu main-menu ${scroll ? "stricky-fixed" : ""}`}>
                <div className="sticky-header__content">
                    <nav className="main-menu">
                        <div className="main-menu__wrapper">
                            <div className="">
                                <div className="main-menu__wrapper-inner">
                                    <div className="main-menu__logo">
                                        <div className="section-shape-1"></div>
                                        <Link href="/"><img src="assets/images/resources/logo-2.png" alt="" /></Link>
                                    </div>
                                    <div className="main-menu__top">
                                        <div className="main-menu__top-inner">
                                            <ul className="list-unstyled main-menu__contact-list">
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-telephone"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p><Link href="tel:15502505260">+1 (550) 250 5260</Link></p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-envelope-2"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p><Link href="mailto:info@tecture.com">info@tecture.com</Link>
                                                        </p>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="main-menu__top-right">
                                                <div className="main-menu__top-time">
                                                    <div className="main-menu__top-time-icon">
                                                        <span className="far fa-clock"></span>
                                                    </div>
                                                    <p className="main-menu__top-text">Mon - Fri: 09:00 - 05:00</p>
                                                </div>
                                                <div className="main-menu__social">
                                                    <Link href="#"><i className="fab fa-twitter"></i></Link>
                                                    <Link href="#"><i className="fab fa-facebook"></i></Link>
                                                    <Link href="#"><i className="fab fa-pinterest-p"></i></Link>
                                                    <Link href="#"><i className="fab fa-instagram"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-menu__bottom">
                                        <div className="main-menu__main-menu-box">
                                            <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                            <Menu />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>{/* /.sticky-header__content */}
            </div>{/* /.stricky-header */}

            <MobileMenu handleMobileMenu={handleMobileMenu} />

        </>
    )
}
