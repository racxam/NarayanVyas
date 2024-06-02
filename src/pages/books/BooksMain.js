import React from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumnew';
import CTA from '../../components/CTA';
import Books from '../../components/Books/index';


import bgImg from '../../assets/img/cta/cta-bg-2.png';

const BooksMain = () => {
	return (
		<main>
			<Breadcrumb
				pageTitle="Books"
			/>

			<Books/>

			<CTA
				ctaBG={bgImg}
			/>

		</main>
	);
}

export default BooksMain;