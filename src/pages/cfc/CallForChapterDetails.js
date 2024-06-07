// components/CallForChapterDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';
import callForChaptersData from '../../data/callForChaptersBooksData';
import CallForChapterPage from '../../components/CallForChapterPage';
import RelatedBooks from '../../components/RelatedBooks';
import getRelatedBooks from '../../utils/getRelatedBooks';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Error from '../error';
import editorsBiographies from '../../data/editorsBiographies';

const CallForChapterDetails = () => {
    const { cfcId } = useParams();
    const cfcDetails = callForChaptersData.find(cfc => cfc.id === cfcId);

    if (!cfcDetails) {
        return <Error />;
    }

    const relatedBooks = getRelatedBooks(cfcId, true);

    return (
        <main>
            <Header
                headerClass="header__area header__transparent-2 header-width header-bg-color-2 header__mlr header__mt" />
            <Breadcrumb pageTitle="Call For Chapters" />
            <CallForChapterPage {...cfcDetails} editorsBiographies={editorsBiographies} />
            <RelatedBooks relatedBooks={relatedBooks} isCfcPage={true} />
            <CTA
                btnText={"Book Appointment"}
            />
            <Footer />
        </main>
    );
}

export default CallForChapterDetails;
