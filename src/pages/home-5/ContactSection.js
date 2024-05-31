import React from 'react';
import { Link } from 'react-router-dom';

import shapeImg1 from '../../assets/img/contact/ct-shape-3.png';
import shapeImg2 from '../../assets/img/contact/ct-shape-4.png';

const Contact = () => {

    return (
        <div className="contact__area contact__plr-2 p-relative  black-bg-2 fix">
            <div className="contact__shape-3 d-none d-xxl-block">
               <img src={shapeImg1} alt="" />
            </div>
            <div className="contact__shape-5 d-none d-xl-block">
               <img src={shapeImg2} alt="" />
            </div>
            <div className="contact__bg black-bg-4">
               <div className="container-fluid">
                  <div className="row align-items-center">
                     <div className="col-xl-8 col-lg-7">
                        <div className="contact__right-side">
                           <div className="contact__section-title pb-10">
                              <h4 className="section-subtitle section-white-bg char-anim wow animate__fadeInUp" data-wow-duration="1.1s">Get In Contact</h4>
                              <h3 className="section-title text-white char-anim wow animate__fadeInUp" data-wow-duration="1.1s">Feel free to get in touch <br/>
                                 Contact with me.
                              </h3>  
                           </div>
                           <div className="contact__text text-color wow animate__fadeInUp" data-wow-duration="1.1s">
                              <p className="char-anim-2">Business tailored it design, management & support services
                                 business agency elit, sed do eiusmod tempor. </p> 
                           </div>
                           <div className="contact__form contact__form-3 wow animate__fadeInUp" data-wow-duration="1.1s">
                              <form action="#">
                                 <div className="row">
                                    <div className="col-sm-6">
                                       <div className="contact__form-input">                                 
                                          <input type="text" placeholder="Your Name" />
                                       </div>
                                    </div>
                                    <div className="col-sm-6">
                                       <div className="contact__form-input">
                                          <input type="email" placeholder="Your Email" />
                                          </div>
                                    </div>
                                    <div className="col-sm-12">
                                       <div className="contact__form-input">
                                          <textarea placeholder="Message"></textarea>
                                          </div>
                                    </div>
                                 </div>                    
                              </form>
                           </div>
                           <div className="contact__button wow animate__fadeInUp" data-wow-duration="1.1s">
                              <button className="main-btn-sm tp-btn-hover alt-color-white">
                                 <span>Send Request</span>
                                 <b></b>
                              </button>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-4 col-lg-5 wow animate__fadeInRight" data-wow-duration="1.1s">
                        <div className="contact__left-side contact__wrapper">
                           <div className="contact__item-box contact__box-2">
                              <div className="contact__item d-flex align-items-center wow animate__fadeInUp" data-wow-duration="1.1s">
                                 <div className="contact__icon contact__icon-color-1">
                                    <span><a href="#"><i className="fal fa-phone-alt"></i></a></span>
                                 </div>
                                 <div className="contact__content">
                                    <h4 className="contact__title-sm title-color-1">Call This Now</h4>
                                    <span className="text-white"><a href="tel:+025461556695">+025461556695 <br/>
                                       +826542556455</a></span>
                                 </div>
                              </div>
                              <div className="contact__item d-flex align-items-center wow animate__fadeInUp" data-wow-duration="1.1s">
                                 <div className="contact__icon contact__icon-color-2">
                                    <span><a href="#"><i className="fal fa-envelope-open-text"></i></a></span>
                                 </div>
                                 <div className="contact__content">
                                    <h4 className="contact__title-sm title-color-2">Your Message</h4>
                                    <span className="text-white"><a href="mailto:amar@mail.com">amar@mail.com <br/>
                                       robi@mail.com</a></span>
                                 </div>
                              </div>
                              <div className="contact__item d-flex align-items-center wow animate__fadeInUp" data-wow-duration="1.1s">
                                 <div className="contact__icon contact__icon-color-3">
                                    <span><a href="#"><i className="fal fa-map-marker-check"></i></a></span>
                                 </div>
                                 <div className="contact__content">
                                    <h4 className="contact__title-sm title-color-3">Your location</h4>
                                    <span className="text-white"><a href="tel:+025461556695">+025461556695 <br/>
                                       +826542556455</a></span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
    );
}

export default Contact;