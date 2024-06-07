
import React from 'react';
import { Link } from 'react-router-dom';
import Globals from '../../Globals';

import PublicationStatsCard from '../../components/PublicationStatsCard';
import footerBG from '../../assets/img/footer/footer-bg.jpg';

const Footer = (props) => {
    const currentYear = new Date().getFullYear();
    const { footerLogo, footerClass } = props;
    return (
        <footer>
            <div className={footerClass ? footerClass : 'footer__area footer__plr'} style={{ backgroundImage: `url(${footerBG})` }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-7 mb-70 wow animate__fadeInUp"
                            data-wow-duration="1.1s">
                            <div className="footer__widget footer-col-1">
                                <div className="footer__logo">
                                    <Link to="/">
                                        {/* <img src={footerLogo ? footerLogo : Logo} alt="" /> */}
                                        <h2 style={{ color: 'whitesmoke' }}>{Globals.myName}</h2>
                                    </Link>
                                </div>
                                <div className="footer__content">
                                    <div className="footer__text">
                                        <p>{Globals.footerDescription}</p>
                                    </div>
                                    <div className="footer-3__social-box" style={{ marginTop: "16px" }}>
                                        <a href={Globals.facebookUrl} target='_blank' rel='noreferrer'><i className="fab fa-facebook-f"></i></a>
                                        <a href={Globals.linkedinUrl} target='_blank' rel='noreferrer'><i className="fab fa-linkedin"></i></a>
                                        <a href={Globals.githubUrl} target='_blank' rel='noreferrer'><i className="fab fa-brands fa-github"></i></a>
                                        <a href={Globals.globalEmailUrl} target='_blank' rel='noreferrer'><i className="far fa-envelope"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-2 col-lg-6 col-md-6 col-sm-5 mb-70 wow animate__fadeInUp"
                            data-wow-duration="1.1s">
                            <div className="footer__widget footer-col-2">
                                <h4 className="footer__title"><Link to="/service">Services</Link></h4>
                                <div className="footer__menu-list">
                                    <ul>
                                        <li><a href="/services/mobile-app-development"><i className="fal fa-angle-right"></i>&ensp;Mobile Application Development</a></li>
                                        <li><a href="/services/iot-solutions"><i className="fal fa-angle-right"></i>&ensp;IoT Solutions</a></li>
                                        <li><a href="/services/research-and-development"><i className="fal fa-angle-right"></i>&ensp;Research & Development</a></li>
                                        <li><a href="/services/project-consultancy"><i className="fal fa-angle-right"></i>&ensp;Project Consultancy</a></li>
                                        <li><a href="/services/training-and-workshops"><i className="fal fa-angle-right"></i>&ensp;Training & Workshops</a></li>
                                        <li><a href="/services/publication-assistance"><i className="fal fa-angle-right"></i>&ensp;Publication Assistance</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-2 col-lg-6 col-md-6 col-sm-5 mb-70 wow animate__fadeInUp"
                            data-wow-duration="1.1s">
                            <div className="footer__widget footer-col-3">
                                <h4 className="footer__title">
                                    <a href="#">Important Links</a>
                                </h4>
                                <div className="footer__menu-list">
                                    <ul>
                                        <li><a href={Globals.scopusUrl} target='_blank' rel='noreferrer'><i className="fal fa-angle-right"></i>&ensp;Scopus</a></li>
                                        <li><a href={Globals.googleScholarUrl} target='_blank' rel='noreferrer'><i className="fal fa-angle-right"></i>&ensp;Google Scholar</a></li>
                                        <li><a href={Globals.researchGateUrl} target='_blank' rel='noreferrer'><i className="fal fa-angle-right"></i>&ensp;ResearchGate</a></li>
                                        <li><a href={Globals.orcidUrl} target='_blank' rel='noreferrer'><i className="fal fa-angle-right"></i>&ensp;ORCID</a></li>
                                        <li><a href={Globals.fiverrUrl} target='_blank' rel='noreferrer'><i className="fal fa-angle-right"></i>&ensp;Fiverr</a></li>
                                        <li><a href={Globals.teacherOnUrl} target='_blank' rel='noreferrer'><i className="fal fa-angle-right"></i>&ensp;TeacherOn</a></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-7 mb-70 wow animate__fadeInUp"
                            data-wow-duration="1.1s">
                            <div className="footer__widget footer-col-4">
                                <div className="footer__text">
                                    <PublicationStatsCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright__area copyright__plr black-bg-3">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-6 wow animate__slideInUp" data-wow-duration="1.1s">
                            <div className="copyright__text">
                                <span>Copyright &copy; {currentYear} {Globals.myName}, All Right Reserved</span>
                            </div>
                        </div>
                        <div className="col-md-6 wow animate__fadeInUp" data-wow-duration="1.1s">
                            <div className="copyright__item text-start text-md-end">
                                <span><a href="/">Home</a></span>
                                <span><a href="/about-me">About</a></span>
                                <span><a href="privacy-policy">Privacy Policy</a></span>
                                <span><a href="/terms-of-service">Terms of Service</a></span>
                                <span><a href="/disclaimer">Disclaimer</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;