import React from 'react';
import InnovationsInMLIoTWaterManagementIGIDetailsMain from './InnovationsInMLIoTWaterManagementIGIDetailsMain';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA/index';

const InnovationsInMLIoTWaterManagementIGIDetails = () => {
  return (
    <>
      <Header
        parentMenu="page"
        headerClass="header__area header__transparent-2 header-width header-bg-color-2 header__mlr header__mt"
      />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <InnovationsInMLIoTWaterManagementIGIDetailsMain />
          <Footer />
        </div>
      </div>
      <CTA
				btnText={"Book Appointment"}
			/>

    </>
  );
}

export default InnovationsInMLIoTWaterManagementIGIDetails;
