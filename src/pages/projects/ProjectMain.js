import React from 'react';

import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';

const ProjectMain = () => {
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