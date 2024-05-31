import React from 'react';
import { Link } from 'react-router-dom';

import bgImg from '../../assets/img/newsletter/news-bg-2.jpg';

import shapeImg1 from '../../assets/img/newsletter/news-1.png';


const Newsletter = () => {

    return (
        <div className="newsletter-2__area newsletter-2__space newsletter-2__plr" style={{backgroundImage: `url(${bgImg})`}}>
            <div className="container-fluid">
               <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                     <div className="newsletter-2__item d-flex align-items-center wow animate__fadeInUp" data-wow-duration="1.1s">
                        <div className="newsletter-2__icon">
                            <img src={shapeImg1} alt="" />
                        </div>                           
                        <div className="newsletter-2__text">
                           <h4 className="section-title text-white char-anim">Subscribe to <br/>
                              Our Newsletter Call</h4>
                        </div>                           
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                     <div className="newsletter-2__input-box wow animate__fadeInUp" data-wow-duration="1.1s">
                        <form action="#">
                           <input type="email" placeholder="Your Email Address" />
                           <button className="subscribe-btn-3  tp-btn-hover alt-color-blue"><span>Subscribe</span>
                              <b></b>
                           </button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
        </div>
    );
}

export default Newsletter;