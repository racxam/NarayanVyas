import React from 'react';
import PriceMain from './PriceMain';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Price = () => {
  return (
    <>
      <Header
        parentMenu="page"
        headerClass="header__area header__transparent-2 header-width header-bg-color-2 header__mlr header__mt"
      />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <PriceMain />
          <Footer />
        </div>
      </div>
          
    </>
  );
}

export default Price;
