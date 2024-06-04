import React from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';
import projects from '../../data/projectsData';
import ProjectDetailsContent from '../../components/ProjectDetailsContent';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Error from '../error';

const ProjectDetails = () => {
    const { projectId } = useParams();
    const projectDetails = projects.find(project => project.id === parseInt(projectId));

    if (!projectDetails) {
        return <Error />;
    }

    return (
        <>
            <Header
                headerClass="header__area header__transparent-2 header-width header-bg-color-2 header__mlr header__mt"
            />
            <main>
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <Breadcrumb pageTitle={projectDetails.title} />
                        <div className="project-details__area project-details__plr mt-110 mb-30">
                            <div className="container-fluid">
                                <ProjectDetailsContent project={projectDetails} />
                            </div>
                        </div>
                        <CTA btnText={"Get in Touch"} />
                    </div>
                </div>
                <Footer />
            </main>
        </>
    );
}

export default ProjectDetails;
