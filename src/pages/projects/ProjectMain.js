import React from 'react';
import projectsData from '../../data/projectsData';
import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';
import ProjectCard from '../../components/Project/ProjectCard'; // Import ProjectCard

const ProjectMain = () => {
	const sortedProjects = projectsData.sort((a, b) => new Date(b.completionDate) - new Date(a.completionDate));
	return (
		<main>
			<Breadcrumb pageTitle="Projects" />
			<div className="product__area product__plr mt-100 mb-70">
				<div className="container-fluid">
					<div className="row">
						{sortedProjects.map((project) => (
							<div
								key={project.id}
								className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp"
								data-wow-duration="1.1s"
							>
								<ProjectCard project={project} Url={`/projects/${project.id}`} />
							</div>
						))}
					</div>
				</div>
			</div>
			<CTA btnText={"Book Appointment"} />
		</main>
	);
}

export default ProjectMain;
