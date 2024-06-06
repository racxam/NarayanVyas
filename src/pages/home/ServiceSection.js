import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import SingleService from '../../components/Service';
import servicesData from '../../data/servicesData';

import shapeImg1 from '../../assets/img/service/sv-shape-1.png';
import shapeImg2 from '../../assets/img/service/sv-shape-2.png';
import Globals from '../../Globals';

const Service = () => {
    return (
        <div className="service__area service__space service__mlr pt-100 pb-100 grey-bg p-relative mt-1">
            <div className="service__shape-1">
                <img src={shapeImg1} alt="" />
            </div>
            <div className="service__shape-2">
                <img src={shapeImg2} alt="" />
            </div>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-6 wow animate__fadeInUp" data-wow-duration="1.1s">
                        <SectionTitle
                            sectionClass="service__section-box text-center pb-35 section-title-fixed-width"
                            subTitle={Globals.servicesSectionHeading}
                            Title={Globals.servicesSectionSubheading}
                        />
                    </div>
                </div>
                <div className="row">
                    {servicesData.map((service, index) => {
                        const colorIndex = (index % 6) + 1; // Ensures the color index loops between 1 and 6
                        return (
                            <div key={service.id} className="col-xl-4 col-lg-6 col-md-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
                                <SingleService
                                    itemClass="service__item service__item-bg p-relative fix shape-none"
                                    descClass="text-white"
                                    btnClass={`service__link service__link-color-${colorIndex}`}
                                    titleClass={`service__title color-${colorIndex}`}
                                    serviceIconBg={service.iconBg}
                                    Title={service.pageTitle}
                                    Description={service.shortDescription}
                                    btnText="Read More"
                                    btnURL={`services/${service.id}`}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Service;
