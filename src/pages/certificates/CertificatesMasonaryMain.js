import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';
import CertificationSection from '../../components/certificates/certificateMasonary';

import bgImg from '../../assets/img/cta/cta-bg-2.png';

const CertificatesMasonaryMain = () => {
	const breakpointColumnsObj = {
		default: 5,
		1200: 5,
		992: 3,
		576: 2
	};

	const tabStyle = 'nav justify-content-center project-2__button-box masonary-menu';

	return (
		<main>
			<Breadcrumb
				pageTitle="My Certifications"
			/>

			<CertificationSection />
			<CTA
				ctaBG={bgImg}
			/>
		</main>
	);
}

export default CertificatesMasonaryMain;
