import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';

const MLNotesMain = () => {
	return (
		<main>
			<Breadcrumb pageTitle="Machine Learning Notes" />

			<div class='container mt-60 mb-60'>
				<iframe src="https://drive.google.com/embeddedfolderview?id=1cbItlLijrCDOLjgBsIiT5FdmBOUYN4RC#grid" title='ML Notes' frameborder="0" width="100%" height="700px" marginheight="0" marginwidth="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
			</div>
			<CTA
				btnText={"Book Appointment"}
			/>
		</main>
	);
}

export default MLNotesMain;
