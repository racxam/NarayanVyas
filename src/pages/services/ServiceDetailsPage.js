import React from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';
import servicesData from '../../data/servicesData';
import Faq from '../../components/Faq';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Error from '../error'

const ServiceDetailsPage = () => {
    const { serviceId } = useParams();
    const serviceDetails = servicesData.find(service => service.id === serviceId);

    if (!serviceDetails) {
        return <Error />;
    }

    return (
        <>

            <main>
                <Header
                    parentMenu='service'
                    headerClass="header__area header__transparent-2 header-width header-bg-color-2 header__mlr header__mt"
                />
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <Breadcrumb pageTitle={serviceDetails.pageTitle} />
                        <div className="service-details__area service-details__plr mt-110 mb-30">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-xl-8 col-lg-7 wow animate__fadeInLeft" data-wow-duration="1.1s">
                                        <div className="service-details__main-img">
                                            <img src={serviceDetails.mainImage} alt={serviceDetails.pageTitle} />
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-5 wow animate__fadeInRight" data-wow-duration="1.1s">
                                        <div className="service-details__service-item">
                                            <h4>{serviceDetails.subheaderHeading}</h4>
                                            <ul>
                                                {serviceDetails.whatYouGet.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="service-details__item pt-40 wow animate__fadeInUp" data-wow-duration="1.1s">
                                            <div className="service-details__text">
                                                {serviceDetails.descriptionParagraphs.map((paragraph, index) => (
                                                    <div key={index}>
                                                        <h6>{paragraph.title}</h6>
                                                        <p>{paragraph.content}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 mb-30">
                                        <Faq />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <CTA btnText={"Book Appointment"} />
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
}

export default ServiceDetailsPage;
