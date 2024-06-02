import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumnew';
import CTA from '../../components/CTA';
import SingleProduct from '../../components/Product';

import productSingleImg1 from '../../assets/img/cfc/multimodal-wiley.jpg';

import productImg1 from '../../assets/img/product/product-1.jpg';
import productImg2 from '../../assets/img/product/product-2.jpg';
import productImg3 from '../../assets/img/product/product-3.jpg';
import productImg4 from '../../assets/img/product/product-4.jpg';
import productImg5 from '../../assets/img/product/product-5.jpg';
import productImg6 from '../../assets/img/product/product-6.jpg';

import bgImg from '../../assets/img/cta/cta-bg-2.png';

const MultimodalDataFusionyWileyCFCDetailsMain = () => {
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
                <h4 className="product-details__left-title wow animate__fadeInUp" data-wow-duration="1.1s">Multimodal Data Fusion for Bioinformatics AI</h4>
                <h5 className=" wow animate__fadeInUp" data-wow-duration="1.1s">Publisher: <span><a href='https://www.scrivenerpublishing.com/' target='_blank'>Wiley</a></span></h5>
                <p className="wow animate__fadeInUp" data-wow-duration="1.1s">Editors: <a href='#' target='_blank'>Umesh Kumar Lilhore</a>, <a href='#' target='_blank'>Abhishek Kumar</a>, <a href='#' target='_blank'>Narayan Vyas</a>, <a href='#' target='_blank'>Sarita Simaiya</a>, <a href='#' target='_blank'>Vishal Dutt</a></p>
                <p className="wow animate__fadeInUp" data-wow-duration="1.1s">Projected Release Date: August 2024</p>
                <p className="wow animate__fadeInUp" data-wow-duration="1.1s">This book is an indispensable resource for anyone interested in how cutting-edge data fusion methods and the rapidly developing area of bioinformatics interact. Starting with the basics of integrating different data types, this book goes into the use of Al for processing and understanding complex 'omics' data, ranging from genomics to metabolomics. The revolutionary potential of Al techniques in bioinformatics is thoroughly addressed, including using neural networks, graph-based algorithms, single-cell RNA sequencing, and other cutting-edge issues.</p>
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
                              <p><strong>Chapter 1:</strong> Foundations of Multimodal Data Fusion</p>
                            </li>
                            <li>
                              <p><strong>Chapter 2:</strong> Omics Data Integration in AI Systems</p>
                            </li>
                            <li>
                              <p><strong>Chapter 3:</strong> Neural Networks in Genomic Data Fusion</p>
                            </li>
                            <li>
                              <p><strong>Chapter 4:</strong> Graph-based Methods for Biological Networks</p>
                            </li>
                            <li>
                              <p><strong>Chapter 5:</strong> Single-cell RNA Sequencing and AI</p>
                            </li>
                            <li>
                              <p><strong>Chapter 6:</strong> Phenotypic Data Fusion in Precision Medicine</p>
                            </li>
                            <li>
                              <p><strong>Chapter 7:</strong> Microbiome Data Fusion and Analysis</p>
                            </li>
                            <li>
                              <p><strong>Chapter 8:</strong> Evolutionary Computation in Bioinformatics</p>
                            </li>
                            <li>
                              <p><strong>Chapter 9:</strong> AI-driven Drug Discovery and Repurposing</p>
                            </li>
                            <li>
                              <p><strong>Chapter 10:</strong> Natural Language Processing in Biomedical Literature</p>
                            </li>
                            <li>
                              <p><strong>Chapter 11:</strong> Ethical Considerations in Bioinformatic AI</p>
                            </li>
                            <li>
                              <p><strong>Chapter 12:</strong> Time-series Analysis in Functional Genomics</p>
                            </li>
                            <li>
                              <p><strong>Chapter 13:</strong> Spatial Transcriptomics and Multimodal Fusion</p>
                            </li>
                            <li>
                              <p><strong>Chapter 14:</strong> Automated Machine Learning in Bioinformatics</p>
                            </li>
                            <li>
                              <p><strong>Chapter 15:</strong> Future Trends in Bioinformatics AI Integration</p>
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
                          <p><b>Umesh Kumar Lilhore</b> is currently a Professor at the School of Computing Science & Engineering (CSE) at Galgotia University, Greater Noida. With over 19 years of teaching and 8 years of research experience, he has previously held positions at various renowned universities and colleges in India and abroad. Dr. Lilhore holds a Ph.D. and M.Tech in CSE and has completed his postdoctoral research at the Institute of Advanced Computing, University of Louisiana at Lafayette. He has a strong publication record with articles in reputed, peer-reviewed national and international Scopus journals and conferences.</p>
                          <p><b>Abhishek Kumar</b> is currently working as an Assistant Director in the Computer Science & Engineering Department at Chandigarh University, Punjab, India. is doing Post-Doctoral Fellow in Ingenium Research Group Ingenium Research Group Lab, Universidad De Castilla- La Mancha, Ciudad Real, and Ciudad Real Spain. He has total Academic teaching experience of more than 12 years along with 2 years teaching assistantship. He has more than 160 publications in reputed, peer-reviewed National and International Journals, books & Conferences He has authored/Co-Authored 7 books published internationally and edited 39 books (Published & ongoing with IET, Elsevier, Wiley, IGI GLOBAL Springer, Apple Academic Press, De-Gruyter and CRC, etc. He is Patent holder and got Sir CV Raman National award for 2018 in young researcher and faculty Category from IJRP Group. He is acting as Series Editor for three books series, Quantum Computing with Degruyter Germany, Intelligent Energy System with Elsevier, & Mathematical Methods in the Digital Age: Computational Intelligence & Advancements.</p>
                          <p><b>Narayan Vyas</b> a distinguished academic and expert in advanced technologies, is currently working at Chandigarh University, Punjab, India. He cleared the NTA UGC NET & JRF in Computer Science & Applications on his first attempt, underscoring his academic excellence. With profound knowledge of the Internet of Things (IoT) and Mobile Application Development, he has trained students worldwide and authored numerous articles in reputable national and international Scopus-indexed conferences and journals. His research spans IoT, Remote Sensing, Machine Learning, Deep Learning, and Computer Vision. A sought-after keynote speaker, Mr. Vyas collaborates with leading publishers like Wiley, IGI Global, and DeGruyter on various book projects, marking his significant contribution to the field.</p>
                          <p><b>Sarita Simaiya</b> is a distinguished Professor at the School of Computing Science & Engineering (CSE) at Galgotias University, Greater Noida. Boasting over 17 years of teaching and 8 years of research experience, Dr. Sarita has held esteemed positions at various prestigious universities and colleges in India and abroad. With a Ph.D. and M.Tech, BE in CSE, Dr. Sarita completed postdoctoral research at the Institute of Advanced Computing, University of Louisiana at Lafayette. His extensive publication record includes articles in reputed, peer-reviewed national and international Scopus journals and conferences.</p>
                          <p><b>Vishal Dutt</b> is a renowned industry expert in Machine Learning with over eight years of academic teaching experience. He is currently working at Chandigarh University, Punjab, India. He has authored over 50 publications in prestigious national and international journals, SCI and Scopus journals, conferences, and book chapters. Vishal has contributed editorially to multiple books with Wiley, IGI Global, DeGruyter, and Eureka publications and is working on three additional publications with Wiley. A sought-after keynote speaker, he has significantly contributed to workshops and webinars across India. He provides peer review services for elite publishers like Elsevier, Springer, and IEEE Access and was a program committee member and reviewer for ICCIPS 2021. His research focuses on Data Science, Data Mining, Machine Learning, Deep Learning, and Remote Sensing, with extensive experience in data analytics using Rapid Miner, Tableau, and WEKA, as well as over six years in Java and Android development.</p>
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

export default MultimodalDataFusionyWileyCFCDetailsMain;