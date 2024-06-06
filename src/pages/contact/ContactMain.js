import React from 'react';
import ContactTwo from '../../components/Contact/ContactTwo';
import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';


const ContactMain = () => {
	return (
		<main>
			<Breadcrumb
				pageTitle="Contact"
			/>

			<ContactTwo />

			<CTA

				btnText="Book Appointment"
			/>

		</main>
	);
}

export default ContactMain;