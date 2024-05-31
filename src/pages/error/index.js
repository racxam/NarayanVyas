import React from 'react';
import ErrorMain from './ErrorMain';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Error = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <ErrorMain />
          <Footer />
        </div>
      </div>
          
    </>
  );
}

export default Error;
