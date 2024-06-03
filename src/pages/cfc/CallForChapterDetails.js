import React from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumnew';
import CTA from '../../components/CTA';
import SingleProduct from '../../components/Product';

import editorsBiographies from '../../data/editorsBiographies';
import callForChaptersData from '../../data/callForChaptersBooksData';
import CallForChapterPage from '../../components/CallForChapterPage';
import RelatedBooks from '../../components/RelatedBooks';
import getRelatedBooks from '../../utils/getRelatedBooks';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const CallForChapterDetails = () => {
    const { cfcId } = useParams();
    const cfcDetails = callForChaptersData.find(cfc => cfc.id === 'iom-smart-healthcare-wiley');
    if (!cfcDetails) {
        return <div>Call For Chapter details not found.</div>;
    }

    const relatedBooks = getRelatedBooks('iom-smart-healthcare-wiley', true);

    return (
        <main>
            <Header
                headerClass="header__area header__transparent-2 header-width header-bg-color-2 header__mlr header__mt" />
            <Breadcrumb pageTitle="Call For Chapters" />
            <CallForChapterPage {...cfcDetails} editorsBiographies={editorsBiographies} />
            <RelatedBooks relatedBooks={relatedBooks} />
            <CTA
                btnText={"Book Appointment"}
            />
            <Footer />
        </main>
    );
}

export default CallForChapterDetails;
