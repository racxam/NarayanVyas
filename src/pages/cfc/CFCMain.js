import React from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumnew';
import CTA from '../../components/CTA';
import SingleProduct from '../../components/Product';

import productImg1 from '../../assets/img/cfc/secure-energy-wiley.jpg';
import productImg2 from '../../assets/img/cfc/iomt-wiley.jpg';
import productImg3 from '../../assets/img/cfc/multimodal-wiley.jpg';
import CFCComponent from '../../components/CallForChapters/index'

import bgImg from '../../assets/img/cta/cta-bg-2.png';

const CFCMain = () => {
	return (
		<main>
			<Breadcrumb
				pageTitle="Call For Chapters"
			/>

			<CFCComponent/>

			<CTA
				ctaBG={bgImg}
			/>

		</main>
	);
}

export default CFCMain;