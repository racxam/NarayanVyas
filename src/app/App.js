// src/App.js

import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from 'react-router-dom';
import WOW from 'wowjs';

// Custom Components
import Home from '../pages/home';
import AboutMe from '../pages/about/about-me';
import Services from '../pages/service';
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
import BooksDetails from '../pages/books/BookDetails';
import CallForChapterDetails from '../pages/cfc/CallForChapterDetails';
import Appointments from '../pages/appointments';
import CFC from '../pages/cfc';
import KwizzleMobileAppDetailsDetails from '../pages/projects/kwizzle-mobile-app-details';
import Contact from '../pages/contact';
import Publications from '../pages/about/publications';
import ServiceDetailsPage from '../pages/service/ServiceDetailsPage';

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

                    {/* About */}
                    <Route path="/about-me" element={<AboutMe />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/project-details" element={<ProjectDetails />} />
                    <Route path="/publications" element={<Publications />} />
                    <Route path="/certificates" element={<Certificates />} />
                    <Route path="/study-notes" element={<StudyNotes />} />
                    <Route path="/machine-learning-notes" element={<MLNotes />} />
                    <Route path="/java-notes" element={<JavaNotes />} />

                    {/* Books */}
                    <Route path="/books" element={<Books />} />
                    <Route path="/books/:bookId" element={<BooksDetails />} />
                    <Route path="/call-for-chapters" element={<CFC />} />
                    <Route path="/call-for-chapters/:cfcId" element={<CallForChapterDetails />} />

                    {/* Services */}
                    <Route path="/services" element={<Services />} />
                    <Route path="/services/:serviceId" element={<ServiceDetailsPage />} />

                    {/* Mics */}
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/appointments" element={<Appointments />} />
                    <Route path="/terms-of-service" element={<TermsOfService />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/disclaimer" element={<Disclaimer />} />
                    <Route path="/projects/kwizzle-mobile-app" element={<KwizzleMobileAppDetailsDetails />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </>
        </div>
    );
}

export default App;
