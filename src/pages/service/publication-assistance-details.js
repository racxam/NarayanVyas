import React from 'react';
import PublicationAssistanceService from './PublicationAssistanceServiceMain';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PublicationAssistanceDetails = () => {
  return (
    <>
      <Header
        parentMenu='service'
        headerClass="header__area header__transparent-2 header-width header-bg-color-2 header__mlr header__mt"
      />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <PublicationAssistanceService />
          <Footer />
        </div>
      </div>

    </>
  );
}

export default PublicationAssistanceDetails;
