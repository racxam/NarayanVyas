import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MenuItems = (props) => {
    const { parentMenu } = props;
    const location = useLocation();

    const [menuState, setMenuState] = useState({
        home: false,
        about: false,
        publication: false,
        books: false,
        page: false,

    });

    const openMobileMenu = menu => {
        setMenuState({
            home: menu === 'home' ? !menuState.home : false,
            about: menu === 'about' ? !menuState.about : false,
            books: menu === 'books' ? !menuState.books : false,
            page: menu === 'page' ? !menuState.page : false,
            publication: menu === 'publication' ? !menuState.publication : false,

        });
    };

    return (
        <>
            <li

            >
                <Link to="/">Home</Link>
            </li>
            <li className={parentMenu === 'about-me' ? 'has-dropdown active' : 'has-dropdown'}

            >
                <Link to="/about-me">About</Link>
                <ul className={menuState.about ? "submenu submenu-open" : "submenu"}>
                    {/* <li className={location.pathname === "/projects" ? "active" : ""}><Link to="/projects">Projects</Link></li> */}
                    <li className={location.pathname === "/certificates" ? "active" : ""}><Link to="/certificates">Certificates</Link></li>
                    <li className={location.pathname === "/study-notes" ? "active" : ""}><Link to="/study-notes">Study Notes</Link></li>
                    <li className={location.pathname === "/machine-learning-notes" ? "active" : ""}><Link to="/machine-learning-notes">ML Notes</Link></li>
                    <li className={location.pathname === "/java-notes" ? "active" : ""}><Link to="/java-notes">Java Notes</Link></li>
                </ul>
                {/* <a href="#" onClick={() => openMobileMenu('about')}></a> */}
                <a className={menuState.page ? 'mean-expand mean-expand mean-clicked' : 'mean-expand'} href="#" onClick={() => openMobileMenu('about')}>
                    <i className="fal fa-plus"></i>
                </a>
            </li>
            <li className={location.pathname === "/publications" ? "active" : ""}

            >
                <Link to="/publications">Publications</Link>
            </li>
            <li className={parentMenu === 'books' ? 'has-dropdown active' : 'has-dropdown'}

            >
                <Link to="/books">Books</Link>
                <ul className={menuState.books ? "submenu submenu-open" : "submenu"}>
                    <li className={location.pathname === "/call-for-chapters" ? "active" : ""}><Link to="/call-for-chapters">Call for Chapters</Link></li>
                </ul>
                <a className={menuState.page ? 'mean-expand mean-expand mean-clicked' : 'mean-expand'} href="#" onClick={() => openMobileMenu('books')}>
                    <i className="fal fa-plus"></i>
                </a>
            </li>
            <li className={parentMenu === 'services' ? 'has-dropdown active' : 'has-dropdown'}

            >
                <Link to="/services">Services</Link>
                <ul className={menuState.page ? "submenu submenu-open" : "submenu"}>
                    <li className={location.pathname === "/services/mobile-app-development" ? "active" : ""}><Link to="/services/mobile-app-development">Mobile App Development</Link></li>
                    <li className={location.pathname === "/services/iot-solutions" ? "active" : ""}><Link to="/services/iot-solutions">IoT Solutions</Link></li>
                    <li className={location.pathname === "/services/research-and-development" ? "active" : ""}><Link to="/services/research-and-development">Research and Development</Link></li>
                    <li className={location.pathname === "/services/project-consultancy" ? "active" : ""}><Link to="/services/project-consultancy">Project Consultancy</Link></li>
                    <li className={location.pathname === "/services/publication-assistance" ? "active" : ""}><Link to="/services/publication-assistance">Publication Assistance</Link></li>
                    <li className={location.pathname === "/services/training-and-workshops" ? "active" : ""}><Link to="/services/training-and-workshops">Training & Workshops</Link></li>
                </ul>
                <a className={menuState.page ? 'mean-expand mean-expand mean-clicked' : 'mean-expand'} href="#" onClick={() => openMobileMenu('page')}>
                    <i className="fal fa-plus"></i>
                </a>
            </li>
            <li className={location.pathname === "/contact" ? "active" : ""}

            >
                <Link to="/contact">Contact</Link>
            </li>
        </>
    );
}

export default MenuItems;
