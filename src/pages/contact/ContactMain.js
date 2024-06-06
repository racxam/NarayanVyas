import React from 'react';
import Contact from '../../components/Contact/Contact';
import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';


const ContactMain = () => {
	return (
		<main>
			<Breadcrumb
				pageTitle="Contact"
			/>

			<Contact />

			<CTA

				btnText="Book Appointment"
			/>

		</main>
	);
}

export default ContactMain;