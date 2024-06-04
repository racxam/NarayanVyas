import React from 'react'
import SectionTitle from '../../components/SectionTitle/index'
import CertificatesMasonary from '../../components/CertificateMasonary';

const CertificationSection = () => {
    return (
        <div className="col-xl-12 col-lg-8 wow animate__fadeIn mt-70" data-wow-duration="1.1s">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-6 wow animate__fadeInUp" data-wow-duration="1.1s">
                    <SectionTitle
                        sectionClass="service__section-box text-center pb-35 section-title-fixed-width"
                        subTitle="My Certificates"
                        Title="Experts in Every Aspect of Technology and Research"
                    />
                </div>
            </div>

            <CertificatesMasonary />
        </div>

    )
}

export default CertificationSection;
