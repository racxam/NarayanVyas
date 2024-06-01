import React from 'react';
import ResearchAndDevelopmentService from './ResearchAndDevelopmentServiceMain';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ResearchAndDevelopmentDetails = () => {
  return (
    <>
      <Header
        parentMenu='service'
        headerClass="header__area header__transparent-2 header-width header-bg-color-2 header__mlr header__mt"
      />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <ResearchAndDevelopmentService />
          <Footer />
        </div>
      </div>

    </>
  );
}

export default ResearchAndDevelopmentDetails;
