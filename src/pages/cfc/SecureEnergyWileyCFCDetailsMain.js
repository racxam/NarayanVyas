import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumnew';
import CTA from '../../components/CTA';
import SingleProduct from '../../components/Product';

import productSingleImg1 from '../../assets/img/cfc/secure-energy-wiley.jpg';

import productImg1 from '../../assets/img/books/few-shot-zero-shot-igi.jpg';
import productImg2 from '../../assets/img/books/ai-driven-alzheimer-igi.jpg';
import productImg3 from '../../assets/img/books/quantam-for-biomedical-igi.jpg';
import productImg4 from '../../assets/img/books/water-management-igi.jpg';
import productImg5 from '../../assets/img/books/quantum-machine-learning-degruyter.jpg';
import productImg6 from '../../assets/img/cfc/iomt-wiley.jpg';

import bgImg from '../../assets/img/cta/cta-bg-2.png';

const SecureEnergyWileyCFCDetailsMain = () => {
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
                <h4 className="product-details__left-title wow animate__fadeInUp" data-wow-duration="1.1s">Secure Energy Optimization: Leveraging IoT And AI For Enhanced Efficiency</h4>
                <h5 className=" wow animate__fadeInUp" data-wow-duration="1.1s">Publisher: <span><a href='https://www.scrivenerpublishing.com/' target='_blank'>Wiley</a></span></h5>
                <p className="wow animate__fadeInUp" data-wow-duration="1.1s">Editors: <a href='#' target='_blank'>Abhishek Kumar</a>, <a href='#' target='_blank'>Surbhi Bhatia Khan</a>, <a href='#' target='_blank'>Narayan Vyas</a>, <a href='#' target='_blank'>Vishal Dutt</a>, <a href='#' target='_blank'>Shakila Basheer</a></p>
                <p className="wow animate__fadeInUp" data-wow-duration="1.1s">Projected Release Date: August 2024</p>
                <p className="wow animate__fadeInUp" data-wow-duration="1.1s">Explore the synergy of loT and Al in revolutionizing energy management and security. This comprehensive guide unveils the principles, applications, and challenges of integrating these technologies for efficient energy use. Discover real-world case studies, cybersecurity insights, and practical solutions to enhance energy efficiency and sustainability while ensuring a secure energy future.</p>
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
                              <p><strong>Chapter 1:</strong> Introduction to Secure Energy Optimization</p>
                            </li>
                            <li>
                              <p><strong>Chapter 2:</strong> The Role of IoT and AI in Energy Efficiency</p>
                            </li>
                            <li>
                              <p><strong>Chapter 3:</strong> Understanding Energy Security Challenges</p>
                            </li>
                            <li>
                              <p><strong>Chapter 4:</strong> IoT and AI-Based Monitoring and Control Systems for Energy Optimization</p>
                            </li>
                            <li>
                              <p><strong>Chapter 5:</strong> Data Collection & Analysis for Secure Energy Optimization</p>
                            </li>
                            <li>
                              <p><strong>Chapter 6:</strong> Machine Learning Algorithms for Energy Efficiency Enhancement</p>
                            </li>
                            <li>
                              <p><strong>Chapter 7:</strong> Cybersecurity Measures for IoT-Enabled Energy Systems</p>
                            </li>
                            <li>
                              <p><strong>Chapter 8:</strong> Securing Communication Networks in Smart Grids</p>
                            </li>
                            <li>
                              <p><strong>Chapter 9:</strong> Privacy Protection in IoT-Based Energy Management</p>
                            </li>
                            <li>
                              <p><strong>Chapter 10:</strong> Predictive Analytics for Demand Response and Load Management</p>
                            </li>
                            <li>
                              <p><strong>Chapter 11:</strong> Dynamic Pricing and Energy Optimization Strategies</p>
                            </li>
                            <li>
                              <p><strong>Chapter 12:</strong> Real-Time Monitoring & Fault Detection in Energy Infrastructure</p>
                            </li>
                            <li>
                              <p><strong>Chapter 13:</strong> Energy Storage and Optimization Techniques</p>
                            </li>
                            <li>
                              <p><strong>Chapter 14:</strong> Integrating Renewable Energy Sources with IoT and AI</p>
                            </li>
                            <li>
                              <p><strong>Chapter 15:</strong> Case Studies: Successful Implementations of Secure Energy Optimization using IoT and AI</p>
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
                          <p><b>Surbhi Bhatia Khan</b>, a young professional with a strong theoretical knowledge and over 11 years of teaching and practical experience of Machine Learning, Natural Language Processing, Data bases, Data Mining and Python programming in universities in India, Saudi Arabia and United Kindgom. I completed my doctorate in Computer Science and Engineering in the area of Machine learning and Social media analytics. I also earned Project management Professional Certification from reputed Project Management Institute, USA. I am currently working in the Department of Department of Data Science, School of Science, Engineering and environment, University of Salford, Manchester, United Kingdom. I was also awarded the Research Excellence award by the King Faisal University, Saudi Arabia in 2021. I have published 100+ papers in many reputed journals in high indexed outlets, 12 international patents from India, Australia and USA, 3 authored books 10+ edited books. I am also currently serving as an Academic editor, Associate Editor and Guest editor in journals of Springer, Elsevier, Tech science press, Bentham Science, PLOS ONE journals, and HCIS. My area of interest is Knowledge Management, Information Systems, Artificial Intelligence and Data Analytics.</p>
                          <p><b>Narayan Vyas</b> a distinguished academic and expert in advanced technologies, is currently working at Chandigarh University, Punjab, India. He cleared the NTA UGC NET & JRF in Computer Science & Applications on his first attempt, underscoring his academic excellence. With profound knowledge of the Internet of Things (IoT) and Mobile Application Development, he has trained students worldwide and authored numerous articles in reputable national and international Scopus-indexed conferences and journals. His research spans IoT, Remote Sensing, Machine Learning, Deep Learning, and Computer Vision. A sought-after keynote speaker, Mr. Vyas collaborates with leading publishers like Wiley, IGI Global, and DeGruyter on various book projects, marking his significant contribution to the field.</p>
                          <p><b>Vishal Dutt</b> is a renowned industry expert in Machine Learning with over eight years of academic teaching experience. He is currently working at Chandigarh University, Punjab, India. He has authored over 50 publications in prestigious national and international journals, SCI and Scopus journals, conferences, and book chapters. Vishal has contributed editorially to multiple books with Wiley, IGI Global, DeGruyter, and Eureka publications and is working on three additional publications with Wiley. A sought-after keynote speaker, he has significantly contributed to workshops and webinars across India. He provides peer review services for elite publishers like Elsevier, Springer, and IEEE Access and was a program committee member and reviewer for ICCIPS 2021. His research focuses on Data Science, Data Mining, Machine Learning, Deep Learning, and Remote Sensing, with extensive experience in data analytics using Rapid Miner, Tableau, and WEKA, as well as over six years in Java and Android development.</p>
                          <p><b>Shakila Basheer</b> is currently an Assistant Professor with the College of Computer and Information Systems, Princess Nourah bint Abdulrahman University. She is working on data mining, machine learning for vehicular networks, blockchain, and the Internet of Things. She has more than ten years of teaching experience and has published more technical articles in international journals/international conference proceedings/ edited chapters of famous publications. She has worked and contributed to data mining, image processing, and fuzzy logic. Her research also focuses on data mining algorithms using fuzzy logic.</p>
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
                Title='Applying Machine Learning Techniques to Bioinformatics: Few-Shot and Zero-Shot Methods'
                Publisher='IGI Global'
                Price='$340'
                Url='/books/applying-ml-in-bioinformatics-igi'
              />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
              <SingleProduct
                Image={productImg2}
                Title='AI-Driven Alzheimers Disease Detection and Prediction'
                Publisher='IGI Global'
                Price='$425'
                Url='/books/ai-driven-alzheimer-disease-prediction-igi'
              />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
              <SingleProduct
                Image={productImg3}
                Title='Quantum Innovations at the Nexus of Biomedical Intelligence'
                Publisher='IGI Global'
                Price='$330'
                Url='/books/quantum-in-biomedical-igi'
              />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
              <SingleProduct
                Image={productImg4}
                Title='Innovations in Machine Learning and IoT for Water Management'
                Publisher='IGI Global'
                Price='$300'
                Url='innovation-in-ml-iot-water-management-igi'
              />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
              <SingleProduct
                Image={productImg5}
                Title='Quantum Machine Learning: Quantum Algorithms and Neural Networks'
                Publisher='De Gruyter'
                Price='144,95 €'
                Url='/books/quantum-machine-learning-degruyter'
              />
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
              <SingleProduct
                Image={productImg6}
                Title='Secure Energy Optimization: Leveraging IoT And AI For Enhanced Efficiency'
                Publisher='Wiley'
                Price='Not Released'
                Url='/cfc/secure-energy-wiley'
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

export default SecureEnergyWileyCFCDetailsMain;