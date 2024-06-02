import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MenuItems = (props) => {
    const { parentMenu } = props;

    const location = useLocation();

    const [home, setHome] = useState(false)
    const [about, setAbout] = useState(false)
    const [service, setService] = useState(false)
    const [page, setPage] = useState(false)
    const [blog, setBlog] = useState(false)

    const openMobileMenu = menu => {

        if (menu === 'home') {
            setHome(!home)
            setAbout(false)
            setService(false)
            setPage(false)
            setBlog(false)
        }
        else if (menu === 'about') {
            setHome(false)
            setAbout(!about)
            setService(false)
            setPage(false)
            setBlog(false)
        }
        else if (menu === 'service') {
            setHome(false)
            setAbout(false)
            setService(!service)
            setPage(false)
            setBlog(false)
        }
        else if (menu === 'page') {
            setHome(false)
            setAbout(false)
            setService(false)
            setPage(!page)
            setBlog(false)
        }
        else if (menu === 'blog') {
            setHome(false)
            setAbout(false)
            setService(false)
            setPage(false)
            setBlog(!blog)
        }
    };

    return (
        <>
            {/* <li className={parentMenu === 'home' ? 'has-dropdown active' : 'has-dropdown'}><Link to="/">Home</Link> */}
            <li><Link to="/">Home</Link>
                {/* <ul className={home ? "submenu submenu-open" : "submenu"}>
                    <li className={location.pathname === "/" ? "active" : ""}><Link to="/">Creative Agency</Link></li>
                    <li className={location.pathname === "/home-2" ? "active" : ""}><Link to="/home-2">Personal Portfolio</Link></li>
                    <li className={location.pathname === "/home-3" ? "active" : ""}><Link to="/home-3">Startup Business</Link></li>
                    <li className={location.pathname === "/home-4" ? "active" : ""}><Link to="/home-4">Digital Agency</Link></li>
                    <li className={location.pathname === "/home-5" ? "active" : ""}><Link to="/home-5">IT Service Agency</Link></li>
                </ul> */}
                {/* <a href="#" onClick={() => { openMobileMenu('home'); }}></a> */}
            </li>
            <li className={parentMenu === 'about-me' ? 'has-dropdown active' : 'has-dropdown'}><Link to="/about-me">About</Link>
                <ul className={about ? "submenu submenu-open" : "submenu"}>
                    <li className={location.pathname === "/projects" ? "active" : ""}><Link to="/projects">Projects</Link></li>
                    <li className={location.pathname === "/publications" ? "active" : ""}><Link to="/publications">Publications</Link></li>
                    <li className={location.pathname === "/certificates" ? "active" : ""}><Link to="/certificates">Certificates</Link></li>
                    <li className={location.pathname === "/study-notes" ? "active" : ""}><Link to="/study-notes">Study Notes</Link></li>
                    <li className={location.pathname === "/machine-learning-notes" ? "active" : ""}><Link to="/machine-learning-notes">ML Notes</Link></li>
                    <li className={location.pathname === "/java-notes" ? "active" : ""}><Link to="/java-notes">Java Notes</Link></li>
                </ul>
                <a href="#" onClick={() => { openMobileMenu('about'); }}></a>
            </li>

            <li className={parentMenu === 'books' ? 'has-dropdown active' : 'has-dropdown'}><Link to="/books">Books</Link>
                <ul className={service ? "submenu submenu-open" : "submenu"}>
                    <li className={location.pathname === "/call-for-chapters" ? "active" : ""}><Link to="/call-for-chapters">Call for Chapters</Link></li>
                </ul>
                <a href="#" onClick={() => { openMobileMenu('service'); }}></a>
            </li>

            <li className={parentMenu === 'Services' ? 'has-dropdown active' : 'has-dropdown'}><Link to="/project">Services</Link>
                <ul className={page ? "submenu submenu-open" : "submenu"}>
                    <li className={location.pathname === "/services/mobile-app-development" ? "active" : ""}><Link to="/services/mobile-app-development">Mobile App Development</Link></li>
                    <li className={location.pathname === "/services/iot-solutions" ? "active" : ""}><Link to="/services/iot-solutions">IoT Solutions</Link></li>
                    <li className={location.pathname === "/services/research-and-development" ? "active" : ""}><Link to="/services/research-and-development">Research and Development</Link></li>
                    <li className={location.pathname === "/services/project-consultancy" ? "active" : ""}><Link to="/services/project-consultancy">Project Consultancy</Link></li>
                    <li className={location.pathname === "/services/publication-assistance" ? "active" : ""}><Link to="/services/publication-assistance"> Publication Assistance</Link></li>
                    <li className={location.pathname === "/services/training-and-workshops" ? "active" : ""}><Link to="/services/training-and-workshops">Training & Workshops</Link></li>
                </ul>
                <a className={page ? 'mean-expand mean-expand mean-clicked' : 'mean-expand'} href="#" onClick={() => { openMobileMenu('page'); }}><i className="fal fa-plus"></i></a>

            </li>

            {/* <li className={parentMenu === 'blog' ? 'has-dropdown active' : 'has-dropdown'}><Link to="/blog-details">Blog</Link>
                <ul className={blog ? "submenu submenu-open" : "submenu"}>
                    <li className={location.pathname === "/blog" ? "active" : ""}><Link to="/blog">Blog Sidebar</Link></li>
                    <li className={location.pathname === "/blog-details" ? "active" : ""}><Link to="/blog-details">Blog Details</Link></li>
                </ul>
                <a className={blog ? 'mean-expand mean-expand mean-clicked' : 'mean-expand'} href="#" onClick={() => { openMobileMenu('blog'); }}><i className="fal fa-plus"></i></a>
            </li> */}

            <li className={location.pathname === "/contact" ? "active" : ""}><Link to="/contact">Contact</Link></li>
        </>
    );
}

export default MenuItems;