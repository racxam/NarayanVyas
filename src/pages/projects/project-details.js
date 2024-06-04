import React from 'react';
import ProjectDetailsMain from './ProjectDetailsMain';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ProjectDetails = () => {
  return (
    <>
      <Header
        parentMenu="page"
        headerClass="header__area header__transparent-2 header-width header-bg-color-2 header__mlr header__mt"
      />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <ProjectDetailsMain />
          <Footer />
        </div>
      </div>

    </>
  );
}

export default ProjectDetails;
