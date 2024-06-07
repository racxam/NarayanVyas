// src/App.js
import './app.css';
// import 'devicon/devicon.min.css';

import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from 'react-router-dom';
import WOW from 'wowjs';

// Utility Components
import Preloader from "../components/Preloader";
import ScrollToTop from '../components/ScrollTop';
import LoadTop from '../components/ScrollTop/LoadTop';

// Home and About
import Home from '../pages/home';
import AboutMe from '../pages/about/about-me';

// Services
import Services from '../pages/services';
import ServiceDetailsPage from '../pages/services/ServiceDetailsPage';

// Notes
import StudyNotes from '../pages/notes/study-notes';
import MLNotes from '../pages/notes/ml-notes';
import JavaNotes from '../pages/notes/java-notes';

// Miscellaneous
import Error from '../pages/error';

// Projects
import Projects from '../pages/projects';
import ProjectDetails from '../pages/projects/ProjectDetailsPage';

// Certificates
import ContentPage from '../pages/content_page';
import Certificates from '../pages/certificates';

// Books
import Books from '../pages/books';
import BookProposalForm from '../pages/books/BookProposalFormContainer';
import BooksDetails from '../pages/books/BookDetails';

// Call For Chapters
import CFC from '../pages/cfc';
import CallForChapterDetails from '../pages/cfc/CallForChapterDetails';

// Contact and Appointments
import Contact from '../pages/contact';
import Appointments from '../pages/appointments';

// Publications
import Publications from '../pages/publications';


const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();

    const handleRouteChange = (location) => {
        const wow = new WOW.WOW({
            live: false
        });
        wow.init();
    };

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

                    {/* Projects */}
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/:projectId" element={<ProjectDetails />} />

                    {/* Publications */}
                    <Route path="/publications" element={<Publications />} />

                    {/* Certificates */}
                    <Route path="/certificates" element={<Certificates />} />

                    {/* Study Notes */}
                    <Route path="/study-notes" element={<StudyNotes />} />
                    <Route path="/machine-learning-notes" element={<MLNotes />} />
                    <Route path="/java-notes" element={<JavaNotes />} />

                    {/* Books */}
                    <Route path="/books" element={<Books />} />
                    <Route path="/books/:bookId" element={<BooksDetails />} />
                    <Route path="/book-proposal" element={<BookProposalForm />} />

                    {/* Call For Chapters */}
                    <Route path="/call-for-chapters" element={<CFC />} />
                    <Route path="/call-for-chapters/:cfcId" element={<CallForChapterDetails />} />

                    {/* Services */}
                    <Route path="/services" element={<Services />} />
                    <Route path="/services/:serviceId" element={<ServiceDetailsPage />} />

                    {/* Miscellaneous */}
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/appointments" element={<Appointments />} />
                    <Route path="/:pageId" element={<ContentPage />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </>
        </div>
    );
}

export default App;
