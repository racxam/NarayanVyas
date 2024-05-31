import React from 'react';
import ServiceTwoMain from './ServiceTwoMain';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ServiceTwo = () => {
  return (
    <>
      <Header 
        parentMenu= 'service'
        headerClass="header__area header__transparent-2 header-width header-bg-color-2 header__mlr header__mt"
      />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <ServiceTwoMain />
          <Footer />
        </div>
      </div>
          
    </>
  );
}

export default ServiceTwo;
