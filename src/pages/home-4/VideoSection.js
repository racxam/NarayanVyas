import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom';

import videoBG from '../../assets/img/video/video-bg-3.png';
import videoImg from '../../assets/img/video/video-bg-5.png';

const Video = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    return (
        <div className="funfact__area funfact__space">
            <div className="funfact__bg fix" style={{backgroundImage: `url(${videoBG})`}}>
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='PO_fBTkoznc' onClose={() => { openModal(); }} />
                <div className="funfact__shape-1 d-none d-lg-block">
                    <img src={videoImg} alt="" />
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 col-md-10">
                            <div className="funfact__content">
                                <div className="funfact__text  wow animate__fadeInUp" data-wow-duration="1.1s">
                                    <h4 className="section-title text-white char-anim">Our Business Service <br/>
                                        Apps of Agency.</h4>
                                </div>  
                                <div className="funfact__butto wow animate__fadeInUp" data-wow-duration="1.1s">
                                    <a className="border-btn-3 mb-20 mr-15" href="#"><i className="fab fa-apple"></i> App Store</a>
                                    <a className="border-btn-3 mb-20" href="#"><i className="fas fa-cloud"></i>Play Store</a>
                                </div>  
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-2 wow animate__fadeInUp" data-wow-duration="1.1s">
                            <div className="funfact__icon text-left text-md-end d-none d-sm-block">
                                <Link className="popup-video" to="#" onClick={() => { openModal(); }}><span><i className="fas fa-play"></i></span></Link>              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;