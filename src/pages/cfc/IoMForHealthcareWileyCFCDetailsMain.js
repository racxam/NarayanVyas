import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumnew';
import CTA from '../../components/CTA';
import SingleProduct from '../../components/Product';

import productSingleImg1 from '../../assets/img/cfc/iomt-wiley.jpg';

import productImg1 from '../../assets/img/product/product-1.jpg';
import productImg2 from '../../assets/img/product/product-2.jpg';
import productImg3 from '../../assets/img/product/product-3.jpg';
import productImg4 from '../../assets/img/product/product-4.jpg';
import productImg5 from '../../assets/img/product/product-5.jpg';
import productImg6 from '../../assets/img/product/product-6.jpg';

import bgImg from '../../assets/img/cta/cta-bg-2.png';

const IoMForHealthcareWileyCFCDetailsMain = () => {
  let tab1 = "Tentative Table of Contents",
    tab2 = "Important Dates",
    tab3 = "Editor's Biographies"
  const tabStyle = 'nav nav-tabs pro-details-nav-btn';

  return (
    <main>
      <Breadcrumb
        pageTitle="Call For Chapters"
      />

      <div className="product-details__area product-details__plr mt-100 mb-70">
        <div className="container">
          <div className="row gx-40 align-items-center mb-100">
            <div className="col-xl-6 col-lg-6 col-md-6 wow animate__fadeInLeft" data-wow-duration="1.1s">
              <div className="product-details__main-img pb-20">
                <img src={productSingleImg1} alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="product-details__left-side">
                <h4 className="product-details__left-title wow animate__fadeInUp" data-wow-duration="1.1s">Internet of Medicine (IoM) For Smart Healthcare</h4>
                <h5 className=" wow animate__fadeInUp" data-wow-duration="1.1s">Publisher: <span><a href='https://www.scrivenerpublishing.com/' target='_blank'>Wiley</a></span></h5>
                <p className="wow animate__fadeInUp" data-wow-duration="1.1s">Editors: <a href='#' target='_blank'>Abhishek Kumar</a>, <a href='#' target='_blank'>Narayan Vyas</a>, <a href='#' target='_blank'>Pramod Singh Rathore</a>, <a href='#' target='_blank'>Abhineet Anand</a>, <a href='#' target='_blank'>Pooja Dixit</a></p>
                <p className="wow animate__fadeInUp" data-wow-duration="1.1s">Projected Release Date: August 2024</p>
                <p className="wow animate__fadeInUp" data-wow-duration="1.1s">This comprehensive book examines the internet of Medicine (IM), discussing its impact on healthcare delivery, patient outcomes, and chronic disease management. It addresses loM's technological, ethical, and regulatory aspects, including Al and blockchain integration, while exploring its role in improving healthcare accessibility, education, and emergency response.</p>
                <a className="yellow-btn tp-btn-hover alt-color mt-20 wow animate__fadeInUp" data-wow-duration="1.1s" target='_blank' href="#"><span>Submit Abstract</span><b></b></a>
                <a className="yellow-btn tp-btn-hover alt-color mt-20 wow animate__fadeInUp" data-wow-duration="1.1s" target='_blank' href="#"><span>Upload Chapter</span><b></b></a>
                <div className="product-details__social-box mt-35 wow animate__fadeInUp" data-wow-duration="1.1s">
                  <span>Share:</span>
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-google-plus-g"></i></a>
                  <a href="#"><i className="fab fa-pinterest-p"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="productdetails-tabs mb-100">
              <div className="row justify-content-center">
                <div className="col-xl-12 col-lg-12 col-12">
                  <Tabs>
                    <div className="product-additional-tab">
                      <div className="pro-details-nav mb-40">
                        <TabList className={tabStyle}>
                          <Tab><button className="nav-links"><span>{tab1}</span></button></Tab>
                          <Tab><button className="nav-links"><span>{tab2}</span></button></Tab>
                          <Tab><button className="nav-links"><span>{tab3}</span></button></Tab>
                        </TabList>
                      </div>
                      <div className="tab-content tp-content-tab" id="myTabContent-2">
                        <TabPanel>
                          <ul>
                            <li>
                              <p><strong>Chapter 1:</strong> The Impact of IoM on Healthcare Delivery and Patient Outcomes</p>
                            </li>
                            <li>
                              <p><strong>Chapter 2:</strong> Interoperability Standards and Protocols for IoM Devices and Systems</p>
                            </li>
                            <li>
                              <p><strong>Chapter 3:</strong> IoM-enabled Remote Patient Monitoring and Telemedicine</p>
                            </li>
                            <li>
                              <p><strong>Chapter 4:</strong> Personalized Medicine through IoM: Benefits and Challenges</p>
                            </li>
                            <li>
                              <p><strong>Chapter 5:</strong> IoM Applications in Chronic Disease Management</p>
                            </li>
                            <li>
                              <p><strong>Chapter 6:</strong> Ethics and Governance in the Age of IoM</p>
                            </li>
                            <li>
                              <p><strong>Chapter 7:</strong> Data Privacy and Security in IoM: Challenges and Solutions</p>
                            </li>
                            <li>
                              <p><strong>Chapter 8:</strong> Emerging Technologies in IoM: AI, Blockchain, and Beyond</p>
                            </li>
                            <li>
                              <p><strong>Chapter 9:</strong> The Role of IoM in Improving Healthcare Accessibility and Equity</p>
                            </li>
                            <li>
                              <p><strong>Chapter 10:</strong> IoM-enabled Precision Diagnostics and Treatment</p>
                            </li>
                            <li>
                              <p><strong>Chapter 11:</strong> IoM and the Future of Medical Education and Training</p>
                            </li>
                            <li>
                              <p><strong>Chapter 12:</strong> IoM and Public Health: Opportunities and Challenges</p>
                            </li>
                            <li>
                              <p><strong>Chapter 13:</strong> IoM in Emergency Medicine: Enhancing Response and Care</p>
                            </li>
                            <li>
                              <p><strong>Chapter 14:</strong> IoM-enabled Drug Development and Clinical Trials</p>
                            </li>
                            <li>
                              <p><strong>Chapter 15:</strong> IoM and the Evolving Regulatory Landscape: Balancing Innovation and Safety</p>
                            </li>
                          </ul>
                        </TabPanel>
                        <TabPanel>
                          <div className="product__details-info table-responsive">
                            <table className="table table-striped">
                              <tbody>
                                <tr>
                                  <td className="add-info">Abstract Submission Deadline</td>
                                  <td className="add-info-list">2 January 2024</td>
                                </tr>
                                <tr>
                                  <td className="add-info">Abstract Accpetance Notification</td>
                                  <td className="add-info-list">February 2024</td>
                                </tr>
                                <tr>
                                  <td className="add-info">Full Chapter Submission Deadline</td>
                                  <td className="add-info-list">2 March 2024</td>
                                </tr>
                                <tr>
                                  <td className="add-info">Chapter Acceptance Notification</td>
                                  <td className="add-info-list">May 2024</td>
                                </tr>
                                <tr>
                                  <td className="add-info">Projected Book Release Date</td>
                                  <td className="add-info-list">December 2024</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </TabPanel>
                        <TabPanel>
                          <p><b>Abhishek Kumar</b> is currently working as an Assistant Director in the Computer Science & Engineering Department at Chandigarh University, Punjab, India. is doing Post-Doctoral Fellow in Ingenium Research Group Ingenium Research Group Lab, Universidad De Castilla- La Mancha, Ciudad Real, and Ciudad Real Spain. He has total Academic teaching experience of more than 12 years along with 2 years teaching assistantship. He has more than 160 publications in reputed, peer-reviewed National and International Journals, books & Conferences He has authored/Co-Authored 7 books published internationally and edited 39 books (Published & ongoing with IET, Elsevier, Wiley, IGI GLOBAL Springer, Apple Academic Press, De-Gruyter and CRC, etc. He is Patent holder and got Sir CV Raman National award for 2018 in young researcher and faculty Category from IJRP Group. He is acting as Series Editor for three books series, Quantum Computing with Degruyter Germany, Intelligent Energy System with Elsevier, & Mathematical Methods in the Digital Age: Computational Intelligence & Advancements.</p>
                          <p><b>Narayan Vyas</b> a distinguished academic and expert in advanced technologies, is currently working at Chandigarh University, Punjab, India. He cleared the NTA UGC NET & JRF in Computer Science & Applications on his first attempt, underscoring his academic excellence. With profound knowledge of the Internet of Things (IoT) and Mobile Application Development, he has trained students worldwide and authored numerous articles in reputable national and international Scopus-indexed conferences and journals. His research spans IoT, Remote Sensing, Machine Learning, Deep Learning, and Computer Vision. A sought-after keynote speaker, Mr. Vyas collaborates with leading publishers like Wiley, IGI Global, and DeGruyter on various book projects, marking his significant contribution to the field.</p>
                          <p><b>Pramod Singh Rathore</b> is currently a Assistant Professor at the School of Computing &  Communication Engineering (CCE) at Manipal University, Jaipur.</p>
                          <p><b>Abhineet Anand</b> 23+ years of academic and administrative experience, his research includes the following field of endeavour: Cloud Computing, Cloud Security, Decision Tree, nearest neighbour method, Clustering, Rule induction, Optical Fibre Switching in Wavelength Multiplexing, Automata Theory. He has published more than 14 SCI, 53+ Scopus indexed papers, 20+ papers in International conference, 12 Intentional Journal, 3 National Journal, and 3 National Conference with 6 Book with prestigious publishers.</p>
                          <p><b>Pooja Dixit</b> has done M.C.A in Computer Science from MDS University Ajmer, Rajasthan, India. She has been working as the Guest Faculty of Department of Computer science and Engineering MDS University Ajmer. She has total Academic teaching experience of more than 8 years. She has published more than 25 papers in reputable, peer-reviewed national and international journals, books, and conferences, including Wiley, IGI GLOBAL, Taylor & Francis Springer, and IEEE. Her research includes Artificial intelligence, Data Mining, Machine Learning, Internet of Things.</p>
                        </TabPanel>
                      </div>
                    </div>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="product__title-sm wow animate__fadeInUp" data-wow-duration="1.1s">
                <h4>Showing all All Products:</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
              <SingleProduct
                Image={productImg1}
              />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
              <SingleProduct
                Image={productImg2}
              />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
              <SingleProduct
                Image={productImg3}
              />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
              <SingleProduct
                Image={productImg4}
              />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
              <SingleProduct
                Image={productImg5}
              />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
              <SingleProduct
                Image={productImg6}
              />
            </div>
          </div>
        </div>
      </div>

      <CTA
        ctaBG={bgImg}
        btnText={"Book Appointment"}
      />

    </main>
  );
}

export default IoMForHealthcareWileyCFCDetailsMain;