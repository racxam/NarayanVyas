import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';
import CertificateMasonary from '../../components/CertificateMasonary';

const index = () => {
  return (
    <>
      <Header
        parentMenu="page"
        headerClass="header__area header__transparent-2 header-width header-bg-color-2 header__mlr header__mt"
      />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breadcrumb
            pageTitle="My Certifications"
          />

          <div className='pt-100'>
            <CertificateMasonary />
          </div>
          <CTA
            btnText={"Book Appointment"}
          />
          <Footer />
        </div>
      </div>

    </>
  );
}

export default index;
