import React from 'react';
import AboutMeMain from './AboutMeMain';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AboutMe = () => {
  return (
    <>
      <Header
        parentMenu="about"
        headerClass="header__area header__transparent-2 header-width header-bg-color-2 header__mlr header__mt"
      />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <AboutMeMain />
          <Footer />
        </div>
      </div>

    </>
  );
}

export default AboutMe;
