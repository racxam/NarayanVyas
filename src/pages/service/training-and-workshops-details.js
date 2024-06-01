import React from 'react';
import TrainingAndWorkshopsService from './TrainingAndWorkshopServiceMain';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const TrainingAndWorkshopsDetails = () => {
  return (
    <>
      <Header
        parentMenu='service'
        headerClass="header__area header__transparent-2 header-width header-bg-color-2 header__mlr header__mt"
      />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <TrainingAndWorkshopsService />
          <Footer />
        </div>
      </div>

    </>
  );
}

export default TrainingAndWorkshopsDetails;
