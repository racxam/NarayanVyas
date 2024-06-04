// src/pages/ContentPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageContent from '../../components/PageContent';
import pageContent from '../../data/pageContent';
import Error from '../../components/Error';

const ContentPage = () => {
    const { pageId } = useParams();
    const pageData = pageContent.find(page => page.id === pageId);

    if (!pageData) {
        return <Error />;
    }

    return (
        <>
            <Header
                parentMenu="page"
                headerClass="header__area header__transparent-2 header-width header-bg-color-2 header__mlr header__mt"
            />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <PageContent pageData={pageData} />
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default ContentPage;
