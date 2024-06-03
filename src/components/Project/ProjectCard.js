
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Box, Divider } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const ProjectCard = ({ project }) => {
    return (
        <Card sx={{ margin:'auto', boxShadow: 3, borderRadius: 2 ,width:"360px" ,marginBottom:"3px"}}>
            <Link to={project.link}>
                <CardMedia
                    component="img"
                    height="300"

                    image={project.featuredImage}
                    alt={project.title}
                />
            </Link>
            <CardContent>
                <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: 2 }}>
                    <p className="product__title"><Link to={project.title}>{project.title}</Link></p>
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
                    {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <LocationOnIcon sx={{ marginRight: 0.5 }} />
                        <Typography variant="body2">
                            {project.location}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AccessTimeIcon sx={{ marginRight: 0.5 }} />
                        <Typography variant="body2">
                            {project.duration}
                        </Typography>
                    </Box> */}
                </Box>
                <Divider sx={{ marginY: 2 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        {project.techStack.map((tech, index) => (
                            <Box key={index} sx={{ margin: 0.5, color: index % 2 === 0 ? 'primary.main' : 'secondary.main' }}>
                                <tech.icon />
                            </Box>
                        ))}
                    </Box>
                    <div className='service__link service__link-color-2'>
                        <Link to={project.link}>Learn More <i className="fal fa-arrow-right"></i>
                        </Link>
                    </div>
                </Box>
            </CardContent>
        </Card>
    );
};

export default ProjectCard;