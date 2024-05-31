import React from 'react';
import { Link } from 'react-router-dom';

import bgImg from '../../assets/img/newsletter/news-bg-3.jpg';
import shapeImg1 from '../../assets/img/newsletter/news-1.png';


const Newsletter = () => {

    return (
        <div className="newsletter__area newsletter__bg newsletter__plr mb-100" style={{backgroundImage: `url(${bgImg})`}}>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-12">
                        <div className="newsletter__item d-flex align-items-center">
                            <div className="newsletter__icon d-none d-sm-block">
                                <img src={shapeImg1} alt="" />
                            </div>                           
                            <div className="newsletter__text">
                                <h4 className="section-title char-anim">Subscribe to <br/>
                                Our Newsletter Call</h4>
                            </div>                           
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12">
                        <div className="newsletter__input-box text-start text-xxl-end">
                            <form action="#">
                                <input type="email" placeholder="Your Email Address" />
                                <button className="subscribe-btn-2 tp-btn-hover alt-color-black"><span>Subscribe</span>
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