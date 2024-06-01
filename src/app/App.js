import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from 'react-router-dom';
import WOW from 'wowjs';


//Custom Components

import Home from '../pages/home';
import HomeTwo from '../pages/home-2';
import HomeThree from '../pages/home-3';
import HomeFour from '../pages/home-4';
import HomeFive from '../pages/home-5';
import About from '../pages/about';
import AboutMe from '../pages/about/about-me';
import Service from '../pages/service';
import ServiceTwo from '../pages/service/service-2';
import ServiceThree from '../pages/service/service-3';
import ServiceDetails from '../pages/service/service-details';
import MobileAppDevelopmentDetails from '../pages/service/mobile-app-development-details';
import IoTSolutionsDetails from '../pages/service/iot-solutions-details';
import ResearchAndDevelopmentDetails from '../pages/service/research-and-development-details';
import ProjectConsultancyDetails from '../pages/service/project-consultancy-details';
import PublicationAssistanceDetails from '../pages/service/publication-assistance-details';
import TrainingAndWorkshopsDetails from '../pages/service/training-and-workshops-details';
import Project from '../pages/project';
import ProjectOne from '../pages/project/project-1';
import ProjectTwo from '../pages/project/project-2';
import ProjectMasonary from '../pages/project/project-masonary';
import ProjectDetails from '../pages/project/project-details';
import Cart from '../pages/cart';
import Checkout from '../pages/checkout';
import Faq from '../pages/faq';
import Price from '../pages/price';
import Testimonial from '../pages/testimonial';
import Login from '../pages/login';
import Register from '../pages/register';
import Error from '../pages/error';
import Job from '../pages/job';
import JobDetails from '../pages/job/job-details';
import Product from '../pages/product';
import ProductDetails from '../pages/product/product-details';
import Blog from '../pages/blog';
import BlogDetails from '../pages/blog/blog-details';
import Contact from '../pages/contact';

import Preloader from "../components/Preloader";
import ScrollToTop from '../components/ScrollTop';
import LoadTop from '../components/ScrollTop/LoadTop'
import MobileAppDevelopmentService from "../pages/service/ServiceDetailsMain";


const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    function handleRouteChange(location) {

        const wow = new WOW.WOW({
            live: false
        });
        wow.init();
    }

    const location = useLocation();

    useEffect(() => {
        handleRouteChange(location);
    }, [location]);

    useEffect(() => {
        // Simulate data loading delay
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);

    return (
        <div className='App'>
            {isLoading ?
                <Preloader /> : ''
            }
            <>
                <ScrollToTop />
                <LoadTop />
                <Routes>
                    <Route path="/" exact element={<Home/>} />
                    <Route path="/home-2" element={<HomeTwo />} />
                    <Route path="/about-me" element={<AboutMe />} />
                    <Route path="/home-3" element={<HomeThree />} />
                    <Route path="/home-4" element={<HomeFour />} />
                    <Route path="/home-5" element={<HomeFive />} />
                    <Route path="/appointments" element={<About />} />
                    <Route path="/service-1" element={<Service />} />
                    <Route path="/service-2" element={<ServiceTwo />} />
                    <Route path="/service-3" element={<ServiceThree />} />
                    <Route path="/service-details" element={<ServiceDetails />} />
                    <Route path="/services/mobile-app-development" element={<MobileAppDevelopmentDetails />} />
                    <Route path="/services/iot-solutions" element={<IoTSolutionsDetails />} />
                    <Route path="/services/research-and-development" element={<ResearchAndDevelopmentDetails />} />
                    <Route path="/services/project-consultancy" element={<ProjectConsultancyDetails />} />
                    <Route path="/services/publication-assistance" element={<PublicationAssistanceDetails />} />
                    <Route path="/services/training-and-workshops" element={<TrainingAndWorkshopsDetails />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/project-1" element={<ProjectOne />} />
                    <Route path="/project-2" element={<ProjectTwo />} />
                    <Route path="/project-masonary" element={<ProjectMasonary />} />
                    <Route path="/project-details" element={<ProjectDetails />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/product-details" element={<ProductDetails />} />
                    <Route path="/job" element={<Job />} />
                    <Route path="/job-details" element={<JobDetails />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/price" element={<Price />} />
                    <Route path="/testimonial" element={<Testimonial />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog-details" element={<BlogDetails />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </>
        </div>
    );
}

export default App;
