
import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/logo/footer-logo.png';
import blogImg1 from '../../assets/img/footer/ft-3.png';
import blogImg2 from '../../assets/img/footer/ft-4.png';
import footerBG from '../../assets/img/footer/footer-bg.jpg';

const FooterTwo = (props) => {
    const { footerLogo, footerClass } = props;
    return (
        <footer>
            <div className={footerClass ? footerClass : 'footer-3__area footer-3__plr'} style={{backgroundImage: `url(${footerBG})`}}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-7 mb-70 wow animate__fadeInUp" data-wow-duration="1.1s">
                            <div className="footer-3__widget footer-3__widget-box footer-2-col-1">
                                 <div className="footer-3__logo">
                                    <Link to="/">
                                        <h1 style={{color:"whitesmoke"}}>Narayan Vyas</h1>
                                    </Link>
                                 </div>
                                 <div className="footer-3__content">
                                    <div className="footer-3__text">
                                       <p>Our approach to itis unique around 
                                          know work an we know doesn’t work
                                          verified factors in play.</p>
                                    </div>
                                    <div className="footer-3__social-box">
                                       <a href="#"><i className="fab fa-facebook-f"></i></a>
                                       <a href="#"><i className="fab fa-twitter"></i></a>
                                       <a href="#"><i className="fab fa-google-plus-g"></i></a>
                                       <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                    </div>
                                </div>
                             </div>
                        </div>
                        <div className="col-xxl-3 col-xl-2 col-lg-6 col-md-6 col-sm-5 mb-70 wow animate__fadeInUp" data-wow-duration="1.1s">
                            <div className="footer-3__widget footer-3-col-2">
                                <h4 className="footer-3__title"><a href="#">Useful Links</a></h4>                     
                                <div className="footer-3__menu-list">
                                    <ul>
                                        <li><a href="#"><i className="fal fa-angle-right"></i>Faq</a></li>
                                        <li><a href="#"><i className="fal fa-angle-right"></i>Privacy</a></li>
                                        <li><a href="#"><i className="fal fa-angle-right"></i>Policy</a></li>
                                        <li><a href="#"><i className="fal fa-angle-right"></i>Support</a></li>
                                        <li><a href="#"><i className="fal fa-angle-right"></i>About</a></li>
                                        <li><a href="#"><i className="fal fa-angle-right"></i>Skill</a></li>
                                        <li><a href="#"><i className="fal fa-angle-right"></i>Team</a></li>
                                        <li><a href="#"><i className="fal fa-angle-right"></i>Blog</a></li>
                                        <li><a href="#"><i className="fal fa-angle-right"></i>Projects</a></li>
                                        <li><a href="#"><i className="fal fa-angle-right"></i>Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-2 col-lg-6 col-md-6 col-sm-5 mb-70 wow animate__fadeInUp" data-wow-duration="1.1s">
                            <div className="footer-3__widget footer-3-col-3">
                                <h4 className="footer-3__title"><a href="#">Recent Post</a></h4>
                                <div className="footer-3__content d-flex align-items-center pb-5">
                                    <div className="footer-3__content-img mr-15 p-relative">
                                        <img src={blogImg1} alt="" />
                                    </div>
                                    <div className="footer-3__content-text">
                                        <h4><a href="#">Received shutters <br/>
                                            expenses.
                                            </a></h4>
                                        <div className="footer-3__meta">
                                            <i className="fal fa-calendar-alt"></i><span>23 jun 2023</span>
                                        </div>
                                    </div>
                                </div>                     
                                <div className="footer-3__content d-flex align-items-center">
                                    <div className="footer-3__content-img mr-15 p-relative">
                                        <img src={blogImg2} alt="" />
                                    </div>
                                    <div className="footer-3__content-text">
                                        <h4>
                                            <a href="#">Received shutters <br/>
                                            expenses.
                                            </a>
                                        </h4>
                                        <div className="footer-3__meta">
                                            <i className="fal fa-calendar-alt"></i><span>23 jun 2023</span>
                                        </div>
                                    </div>
                                </div>                                         
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-7 mb-70 wow animate__fadeInUp" data-wow-duration="1.1s">
                            <div className="footer-3__widget footer-3-col-4">
                                <h4 className="footer-3__title"><a href="#">Newslatter</a></h4>
                                <div className="footer-3__content">
                                    <div className="footer-3__text-2">
                                        <p>In alteration insipidity impression by 
                                            travelling up motionless.</p>
                                    </div>
                                    <div className="footer-3__input">
                                        <form action="#">
                                            <input type="email" placeholder="Your email address" />
                                            <button className="subscribe-btn radious-none"><i className="fas fa-paper-plane"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright__area copyright__border pt-25 pb-25">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-md-12 wow animate__fadeInUp" data-wow-duration="1.1s">
                                    <div className="copyright__text text-center">
                                        <span>Copyright Sorex 2023, All Right Reserved</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterTwo;