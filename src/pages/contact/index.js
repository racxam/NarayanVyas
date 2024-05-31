import React from 'react';
import ContactMain from './ContactMain';
import Header from '../../components/Header';
import FooterThree from '../../components/Footer/FooterThree';

const Contact = () => {
    return (
        <>
            <Header
                parentMenu="contact"
                headerClass="header__area header__transparent-2 header-width header-bg-color-2 header__mlr header__mt"
            />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <ContactMain />
                    <FooterThree />
                </div>
            </div>
                    
        </>
    );
}

export default Contact;
