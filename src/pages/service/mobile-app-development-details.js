import React from 'react';
import MobileAppDevelopmentService from './MobileAppDevelopmentServiceMain';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const MobileAppDevelopmentDetails = () => {
  return (
    <>
      <Header
        parentMenu='service'
        headerClass="header__area header__transparent-2 header-width header-bg-color-2 header__mlr header__mt"
      />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <MobileAppDevelopmentService />
          <Footer />
        </div>
      </div>

    </>
  );
}

export default MobileAppDevelopmentDetails;
