import React from 'react';

import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';

const ProjectMain = () => {
	let tab1 = "All",
		tab2 = "Development",
		tab3 = "App Design",
		tab4 = "Branding Design"
	const tabStyle = 'nav nav-pill justify-content-center mb-3';

	return (
		<main>
			<Breadcrumb
				pageTitle="Projects"
			/>

			<div class='container mt-100 mb-100'>
			</div>
			<CTA
				btnText={"Book Appointment"}
			/>

		</main>
	);
}

export default ProjectMain;