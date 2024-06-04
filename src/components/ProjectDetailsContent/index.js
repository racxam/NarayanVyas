import React from 'react';

const ProjectDetailsContent = ({ project }) => {
    return (
        <div className="project-details__content">
            <div className="row">
                <div className="col-xl-8 col-lg-7">
                    <div className="project-details__main-img">
                        <img src={project.featuredImage} alt={project.title} />
                    </div>
                    <div className="project-details__text">
                        {project.descriptions.map((desc, index) => (
                            <p key={index}>{desc}</p>
                        ))}
                    </div>
                </div>
                <div className="col-xl-4 col-lg-5">
                    <div className="project-details__info">
                        <h4>Project Info</h4>
                        <ul>
                            <li><strong>Client:</strong> {project.client}</li>
                            <li><strong>Location:</strong> {project.location}</li>
                            <li><strong>Duration:</strong> {project.duration}</li>
                            <li><strong>Start Date:</strong> {project.startDate}</li>
                            <li><strong>Completion Date:</strong> {project.completionDate}</li>
                            <li><strong>Status:</strong> {project.status}</li>
                            <li><strong>Budget:</strong> {project.budget}</li>
                            <li><strong>Project Manager:</strong> {project.projectManager}</li>
                        </ul>
                    </div>
                    <div className="project-details__tech-stack">
                        <h4>Tech Stack</h4>
                        <ul>
                            {project.techStack.map((tech, index) => (
                                <li key={index}>
                                    <tech.icon />
                                    <span>{tech.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetailsContent;
