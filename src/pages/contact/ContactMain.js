import React from 'react';
import ContactTwo from '../../components/Contact/ContactTwo';
import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';

import bgImg from '../../assets/img/cta/cta-bg-2.png';

const ContactMain = () => {
	return (
		<main>
			<Breadcrumb
				pageTitle= "Contact"
			/>

			<ContactTwo />
			
			<CTA
				ctaBG={bgImg}
				btnText="Book Appointment"
			/>

		</main>
	);
}

export default ContactMain;