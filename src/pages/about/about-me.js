import React from 'react';
import AboutMeMain from './AboutMeMain';
import Header from '../../components/Header';
import FooterThree from '../../components/Footer/FooterThree';

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
          <FooterThree />
        </div>
      </div>
          
    </>
  );
}

export default AboutMe;
