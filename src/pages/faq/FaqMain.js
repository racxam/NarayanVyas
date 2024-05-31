import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import FaqPage from '../../components/Faq/FaqPage';
import CTA from '../../components/CTA';

import bgImg from '../../assets/img/cta/cta-bg-2.png';

const FaqMain = () => {
	return (
		<main>
     <Breadcrumb
      pageTitle= "Faq"
     />

     <div className="faq__area faq__plr">
      <div className="container-fluid">
        <FaqPage />
      </div>
     </div>

   
     <CTA
      ctaBG={bgImg}
     />
   </main>
	);
}

export default FaqMain;