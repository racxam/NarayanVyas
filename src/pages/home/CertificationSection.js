import React from 'react'
import SectionTitle from '../../components/SectionTitle/index'
import CertificatesMasonary from '../../components/CertificateMasonary';
import Globals from '../../Globals';

const CertificationSection = () => {
    return (
        <div className='container-fluid'>

       
        <div className="col-xl-12 col-lg-12 pt-100 grey-bg wow animate__fadeIn " data-wow-duration="1.1s">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-6 wow animate__fadeInUp" data-wow-duration="1.1s">
                    <SectionTitle
                        sectionClass="service__section-box text-center pb-35 section-title-fixed-width"
                        subTitle={Globals.certificatesSectionHeading}
                        Title={Globals.certificatesSectionSubheading}
                    />
                </div>
            </div>

            <CertificatesMasonary />
        </div>
        </div>

    )
}

export default CertificationSection;
