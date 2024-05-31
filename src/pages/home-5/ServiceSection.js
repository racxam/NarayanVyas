import React from 'react';
import SingleServiceFour from '../../components/Service/SingleServiceFour';

import shapeImg1 from '../../assets/img/service/sv-item-shape-1.png';
import shapeImg2 from '../../assets/img/service/sv-item-shape-2.png';
import shapeImg3 from '../../assets/img/service/sv-item-shape-3.png';
import shapeImg4 from '../../assets/img/service/sv-item-shape-4.png';
import shapeImg5 from '../../assets/img/service/sv-item-shape-5.png';
import shapeImg6 from '../../assets/img/service/sv-item-shape-6.png';

import shapeIcon1 from '../../assets/img/service/sv-icon-shape-7.png';
import shapeIcon2 from '../../assets/img/service/sv-icon-shape-8.png';
import shapeIcon3 from '../../assets/img/service/sv-icon-shape-9.png';
import shapeIcon4 from '../../assets/img/service/sv-icon-shape-10.png';
import shapeIcon5 from '../../assets/img/service/sv-icon-shape-11.png';
import shapeIcon6 from '../../assets/img/service/sv-icon-shape-12.png';

const Service = () => {

    return (
        <div className="service__area service__plr black-bg-2 pb-70 p-relative">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8 wow animate__fadeInUp" data-wow-duration="1.1s">
                     <div className="service__section-box text-center pb-35">
                        <h4 className="section-subtitle section-white-bg title-anim">Our Best Service</h4>
                        <h3 className="section-title text-white title-anim">What Do Agency It-Service</h3>
                     </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s"
                     >
                        <SingleServiceFour
                           titleClass="service__title service__title-color-1"
                           btnClass= "service__link service__link-color-1"
                           shapeImg={shapeImg1}
                           serviceIconBg= {shapeIcon1}
                           Title= "Get Latest Updates"
                        />
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s"
                     >
                        <SingleServiceFour
                           titleClass="service__title service__title-color-2"
                           btnClass= "service__link service__link-color-2"
                           shapeImg={shapeImg2}
                           serviceIconBg= {shapeIcon2}
                           Title= "Growth Marketing"
                        />
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s"
                     >
                     <SingleServiceFour
                        titleClass="service__title service__title-color-3"
                        btnClass= "service__link service__link-color-3"
                        shapeImg={shapeImg3}
                        serviceIconBg= {shapeIcon3}
                        Title= "Website Of Branding"
                     />
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s"
                     >
                     <SingleServiceFour
                        titleClass="service__title service__title-color-4"
                        btnClass= "service__link service__link-color-4"
                        shapeImg={shapeImg4}
                        serviceIconBg= {shapeIcon4}
                        Title= "Social This Promotion"
                     />
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s"
                     >
                     <SingleServiceFour
                        titleClass="service__title service__title-color-5"
                        btnClass= "service__link service__link-color-5"
                        shapeImg={shapeImg5}
                        serviceIconBg= {shapeIcon5}
                        Title= "Get Latest Updates"
                     />
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s"
                     >
                     <SingleServiceFour
                        titleClass="service__title service__title-color-6"
                        btnClass= "service__link service__link-color-6"
                        shapeImg={shapeImg6}
                        serviceIconBg= {shapeIcon6}
                        Title= "Agency best Service"
                     />
                  </div>
               </div>
            </div>
         </div>
    );
}

export default Service;