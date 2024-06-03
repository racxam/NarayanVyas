import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';
import bgImg from '../../assets/img/cta/cta-bg-2.png';

const TermsOfServiceMain = () => {
	return (
		<main>
			<Breadcrumb pageTitle="Terms of Service" />

			<div class='container mt-100 mb-100'>
				<p>If you have any questions about our Terms of Service, please contact us by email at <a href="mailto:contact@narayanvyas.com">contact@narayanvyas.com</a>.</p>

				<h5>Introduction</h5>
				<p>By using this website, you accept these terms and conditions in full. If you disagree with any part of these terms, do not use this website. You must be at least 18 years of age to use this website.</p>

				<h5>License to use website</h5>
				<p>Unless otherwise stated, www.narayanvyas.com and/or its licensors own the intellectual property rights on this website. You may view, download, and print pages for personal use, subject to the restrictions below.</p>
				<p>You must not:</p>
				<ul>
					<li>Republish material from this website without permission.</li>
					<li>Sell, rent, or sub-license material from the website.</li>
					<li>Reproduce, duplicate, or copy material for commercial purposes.</li>
					<li>Edit or modify any material on the website.</li>
					<li>Redistribute material except for content specifically made available for redistribution.</li>
				</ul>

				<h5>Acceptable use</h5>
				<p>You must not use this website in any way that causes damage or is unlawful, illegal, or harmful. You must not use this website to transmit or distribute malicious software.</p>

				<h5>Restricted access</h5>
				<p>Access to certain areas of this website is restricted. We reserve the right to restrict access to other areas or the entire website at our discretion. If we provide you with a user ID and password, you must keep them confidential.</p>

				<h5>User content</h5>
				<p>You grant www.narayanvyas.com a license to use, reproduce, and distribute your content. Your content must not be illegal or infringe any third party’s legal rights. We reserve the right to edit or remove any material submitted to this website.</p>

				<h5>No warranties</h5>
				<p>This website is provided "as is" without any representations or warranties. We do not warrant that the website will be available or that the information is complete, true, or accurate.</p>

				<h5>Limitations of liability</h5>
				<p>We will not be liable for any loss or damage of any nature. These limitations apply even if we have been advised of the potential loss.</p>

				<h5>Exceptions</h5>
				<p>Nothing in this disclaimer will exclude or limit any warranty implied by law that it would be unlawful to exclude or limit.</p>

				<h5>Indemnity</h5>
				<p>You agree to indemnify us against any losses, damages, costs, liabilities, and expenses arising from your use of this website or breach of these terms and conditions.</p>

				<h5>Breaches of these terms and conditions</h5>
				<p>If you breach these terms, we may take appropriate action, including suspending your access to the website.</p>
			</div>
			<CTA
				btnText={"Book Appointment"}
			/>
		</main>
	);
}

export default TermsOfServiceMain;
