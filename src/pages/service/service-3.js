import React from 'react';
import ServiceThreeMain from './ServiceThreeMain';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ServiceThree = () => {
  return (
    <>
      <Header 
        parentMenu= 'service'
        headerClass="header__area header__transparent-2 header-width header-bg-color-2 header__mlr header__mt"
      />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <ServiceThreeMain />
          <Footer />
        </div>
      </div>
          
    </>
  );
}

export default ServiceThree;
