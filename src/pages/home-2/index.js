import React from 'react';
import HomeTwoMain from './HomeTwoMain';
import Header from '../../components/Header';
import FooterTwo from '../../components/Footer/FooterTwo';

const HomeTwo = () => {
    return (
        <>
            <Header
                parentMenu='home'
             />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <HomeTwoMain />
                    <FooterTwo />
                </div>
            </div>
                    
        </>
    );
}

export default HomeTwo;
