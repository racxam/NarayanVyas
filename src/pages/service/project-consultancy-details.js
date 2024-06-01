import React from 'react';
import ProjectConsultancyService from './ProjectConsultancyServiceMain';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ProjectConsultancyDetails = () => {
  return (
    <>
      <Header
        parentMenu='service'
        headerClass="header__area header__transparent-2 header-width header-bg-color-2 header__mlr header__mt"
      />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <ProjectConsultancyService />
          <Footer />
        </div>
      </div>

    </>
  );
}

export default ProjectConsultancyDetails;
