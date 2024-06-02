import React from 'react';
import AppointmentsMain from './AppointmentsMain';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Appointments = () => {
  return (
    <>
      <Header
        parentMenu="page"
        headerClass="header__area header__transparent-2 header-width header-bg-color-2 header__mlr header__mt"
      />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <AppointmentsMain />
          <Footer />
        </div>
      </div>

    </>
  );
}

export default Appointments;
