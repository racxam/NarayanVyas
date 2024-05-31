import React from 'react';
import HomeFourMain from './HomeFourMain';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const HomeFour = () => {
    return (
        <>
            <Header
                parentMenu='home'
                headerClass="header__area header__transparent-2 header-width header-bg-color-2 header__mlr"
            />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <HomeFourMain />
                    <Footer footerClass="footer__area footer__plr footer__plr-3" />
                </div>
            </div>
        </>
    );
}

export default HomeFour;
