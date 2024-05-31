import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';

import bgImg from '../../assets/img/cta/cta-bg-2.png';

const LoginMain = () => {
	return (
		<main>
     <Breadcrumb
      pageTitle= "Login"
     />
			  
     <div className="Register__area Register__plr mt-110 mb-100">
        <div className="container">
         <div className="row justify-content-center">
           <div className="col-xl-10">
            <div className="Register__box">
              <h4 className="Register__title wow animate__fadeInUp" data-wow-duration="1.1s">Login your Account</h4>
              <div className="Register__form">
               <form action="#">
                 <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 wow animate__fadeInUp" data-wow-duration="1.1s">
                    <input type="email" placeholder="Username or email address*" />
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 wow animate__fadeInUp" data-wow-duration="1.1s">
                    <input type="password" placeholder="Password*" />
                  </div>
                  <div className="Register__box-2 d-flex justify-content-between wow animate__fadeInUp" data-wow-duration="1.1s">
                    <div className="Register__checkbox login d-flex align-items-center">
                     <input type="checkbox" id="Remember" name="fav_language" value="Remember" />
                     <label for="Remember">Remember Me</label>
                    </div>
                    <div className="Register__forgot">
                     <a href="#">Forgot password?</a>
                    </div>
                  </div>
                  <div className="button pt-30 wow animate__fadeInUp" data-wow-duration="1.1s">
                    <button className="yellow-btn-sm yellow-bg">Login</button>
                  </div>
                 </div>
               </form>
              </div>
            </div>
           </div>
         </div>
        </div>
     </div>
   
     <CTA
      ctaBG={bgImg}
     />
   </main>
	);
}

export default LoginMain;