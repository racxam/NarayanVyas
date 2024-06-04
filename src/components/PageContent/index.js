// src/components/PageContent.js

import React from 'react';
import Breadcrumb from '../Breadcrumb';
import CTA from '../CTA';

const PageContent = ({ pageData }) => {
    const { pageTitle, content } = pageData;

    return (
        <main>
            <Breadcrumb pageTitle={pageTitle} />
            <div className='container mt-100 mb-100'>
                {content.map((section, index) => (
                    <div key={index}>
                        {section.heading && <h5>{section.heading}</h5>}
                        {section.subheading && <h6>{section.subheading}</h6>}
                        <p dangerouslySetInnerHTML={{ __html: section.text }}></p>
                    </div>
                ))}
            </div>
            <CTA btnText={"Book Appointment"} />
        </main>
    );
}

export default PageContent;
