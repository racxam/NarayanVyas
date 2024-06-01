import React from 'react';
import IoTSolutionsService from './IoTSolutionsServiceMain';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const IoTSolutionsDetails = () => {
  return (
    <>
      <Header
        parentMenu='service'
        headerClass="header__area header__transparent-2 header-width header-bg-color-2 header__mlr header__mt"
      />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <IoTSolutionsService />
          <Footer />
        </div>
      </div>

    </>
  );
}

export default IoTSolutionsDetails;
