import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';
import bgImg from '../../assets/img/cta/cta-bg-2.png';

const DisclaimerMain = () => {
	return (
		<main>
			<Breadcrumb pageTitle="Disclaimer" />

			<div class='container mt-100 mb-100'>
				<p>If you require any more information or have any questions about our site’s disclaimer, please feel free to contact us by email at <a href="mailto:contact@narayanvyas.com">contact@narayanvyas.com</a>.</p>

				<h5>Disclaimers for www.narayanvyas.com:</h5>
				<p>All the information on this website is published in good faith and for general information purposes only. www.narayanvyas.com does not make any warranties about the completeness, reliability, and accuracy of this information. Any action you take upon the information you find on this website (www.narayanvyas.com) is strictly at your own risk. www.narayanvyas.com will not be liable for any losses and/or damages in connection with the use of our website.</p>

				<p>From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone ‘bad’.</p>

				<p>Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their “Terms of Service” before engaging in any business or uploading any information.</p>

				<h5>Consent</h5>
				<p>By using our website, you hereby consent to our disclaimer and agree to its terms.</p>

				<h5>Update</h5>
				<p>This site disclaimer was last updated on: June 2, 2024. Should we update, amend, or make any changes to this document, those changes will be prominently posted here.</p>
			</div>
			<CTA ctaBG={bgImg} />
		</main>
	);
}

export default DisclaimerMain;
