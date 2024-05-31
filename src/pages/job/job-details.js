import React from 'react';
import JobDetailsMain from './JobDetailsMain';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const JobDetails = () => {
  return (
    <>
      <Header
        parentMenu="page"
        headerClass="header__area header__transparent-2 header-width header-bg-color-2 header__mlr header__mt"
      />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <JobDetailsMain />
          <Footer />
        </div>
      </div>
          
    </>
  );
}

export default JobDetails;
