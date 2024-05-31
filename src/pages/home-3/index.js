import React from 'react';
import HomeThreeMain from './HomeThreeMain';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const HomeThree = () => {
    return (
        <>
            <Header
                topbarEnable="enable"
                parentMenu='home'
                headerClass="header__area header__transparent-2 header-bg-color header-width header__mlr"
            />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <HomeThreeMain />
                    <Footer footerClass="footer__area footer__plr footer__plr-3" />
                </div>
            </div>
        </>
    );
}

export default HomeThree;
