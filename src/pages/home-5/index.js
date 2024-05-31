import React from 'react';
import HomeFiveMain from './HomeFiveMain';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeaderStyleTwo from '../../components/Header/HeaderStyleTwo';

const HomeFive = () => {
    return (
        <>
            <HeaderStyleTwo 
                parentMenu="home"
            />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <HomeFiveMain />
                    <Footer footerClass="footer__area footer__plr footer__plr-3" />
                </div>
            </div>
                    
        </>
    );
}

export default HomeFive;
