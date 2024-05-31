import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom';

import videoBG from '../../assets/img/video/video-bg.jpg';

const Video = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    return (
        <div className="video__area video__plr p-relative" style={{backgroundImage: `url(${videoBG})`}}>
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='PO_fBTkoznc' onClose={() => { openModal(); }} />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-10 col-lg-7 col-md-9">
                        <div className="video__content wow animate__fadeInUp" data-wow-duration="1.1s">
                            <h4 className="section-title text-white char-anim pb-10">We Are to discussing new <br/>
                            Video Creative.</h4>
                            <p className="char-anim-2">Business tailored it design, management & support services <br/>business agency elit, sed do eiusmod tempor. </p>   
                        </div>
                        <div className="video__button wow animate__fadeInUp" data-wow-duration="1.1s">
                            <Link to="/about-me" className="main-btn tp-btn-hover alt-color-white">
                                <span>Video More</span>
                                <b></b>
                            </Link> 
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-5 col-md-3 d-none d-sm-block wow animate__fadeInUp" data-wow-duration="1.1s">
                        <div className="video__icon text-start text-lg-center">
                            <Link className="popup-video" to="#" onClick={() => { openModal(); }}><i className="fas fa-play"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;