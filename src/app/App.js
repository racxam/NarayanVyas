// src/App.js

import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from 'react-router-dom';
import WOW from 'wowjs';

// Custom Components
import Home from '../pages/home';
import AboutMe from '../pages/about/about-me';
import Services from '../pages/service';
import ServiceDetails from '../pages/service/service-details';
import MobileAppDevelopmentDetails from '../pages/service/mobile-app-development-details';
import IoTSolutionsDetails from '../pages/service/iot-solutions-details';
import ResearchAndDevelopmentDetails from '../pages/service/research-and-development-details';
import ProjectConsultancyDetails from '../pages/service/project-consultancy-details';
import PublicationAssistanceDetails from '../pages/service/publication-assistance-details';
import TrainingAndWorkshopsDetails from '../pages/service/training-and-workshops-details';
import StudyNotes from '../pages/notes/study-notes';
import MLNotes from '../pages/notes/ml-notes';
import JavaNotes from '../pages/notes/java-notes';
import TermsOfService from '../pages/misc/terms-of-service';
import PrivacyPolicy from '../pages/misc/privacy-policy';
import Disclaimer from '../pages/misc/disclaimer';
import Projects from '../pages/projects';
import ProjectDetails from '../pages/projects/project-details';
import Error from '../pages/error';
import Certificates from '../pages/certificates/certificates-masonary';
import Books from '../pages/books';
import BooksDetails from '../pages/books/BookDetails'; // Import the correct BooksDetailsPage component
import Appointments from '../pages/appointments';
import CFC from '../pages/cfc';
import SecureEnergyWileyCFCDetails from '../pages/cfc/secure-energy-wiley-cfc-details';
import MultimodalDataFusionCFCDetails from '../pages/cfc/multimodal-data-fusion-wiley-cfc-details';
import IoMForHealthcareCFCDetails from '../pages/cfc/iom-for-healthcare-wiley-cfc-details';
import KwizzleMobileAppDetailsDetails from '../pages/projects/kwizzle-mobile-app-details';
import Contact from '../pages/contact';
import Publications from '../pages/about/publications';

import Preloader from "../components/Preloader";
import ScrollToTop from '../components/ScrollTop';
import LoadTop from '../components/ScrollTop/LoadTop';

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
            {isLoading ? <Preloader /> : ''}
            <>
                <ScrollToTop />
                <LoadTop />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/about-me" element={<AboutMe />} />
                    <Route path="/publications" element={<Publications />} />
                    <Route path="/appointments" element={<Appointments />} />
                    <Route path="/service-details" element={<ServiceDetails />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/services/mobile-app-development" element={<MobileAppDevelopmentDetails />} />
                    <Route path="/services/iot-solutions" element={<IoTSolutionsDetails />} />
                    <Route path="/services/research-and-development" element={<ResearchAndDevelopmentDetails />} />
                    <Route path="/services/project-consultancy" element={<ProjectConsultancyDetails />} />
                    <Route path="/services/publication-assistance" element={<PublicationAssistanceDetails />} />
                    <Route path="/services/training-and-workshops" element={<TrainingAndWorkshopsDetails />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/project-details" element={<ProjectDetails />} />
                    <Route path="/certificates" element={<Certificates />} />
                    <Route path="/study-notes" element={<StudyNotes />} />
                    <Route path="/machine-learning-notes" element={<MLNotes />} />
                    <Route path="/java-notes" element={<JavaNotes />} />
                    <Route path="/terms-of-service" element={<TermsOfService />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/disclaimer" element={<Disclaimer />} />
                    <Route path="/books" element={<Books />} />
                    <Route path="/books/:bookId" element={<BooksDetails />} />
                    <Route path="/call-for-chapters" element={<CFC />} />
                    <Route path="/call-for-chapters/secure-energy-wiley" element={<SecureEnergyWileyCFCDetails />} />
                    <Route path="/call-for-chapters/multimodal-data-fusion-wiley" element={<MultimodalDataFusionCFCDetails />} />
                    <Route path="/call-for-chapters/iom-for-healthcare-wiley" element={<IoMForHealthcareCFCDetails />} />
                    <Route path="/projects/kwizzle-mobile-app" element={<KwizzleMobileAppDetailsDetails />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </>
        </div>
    );
}

export default App;
