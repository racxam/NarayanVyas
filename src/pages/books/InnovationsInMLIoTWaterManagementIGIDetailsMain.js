import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumnew';
import CTA from '../../components/CTA';
import SingleProduct from '../../components/Product';

import productSingleImg1 from '../../assets/img/books/few-shot-zero-shot-igi.jpg';

import productImg1 from '../../assets/img/product/product-1.jpg';
import productImg2 from '../../assets/img/product/product-2.jpg';
import productImg3 from '../../assets/img/product/product-3.jpg';
import productImg4 from '../../assets/img/product/product-4.jpg';
import productImg5 from '../../assets/img/product/product-5.jpg';
import productImg6 from '../../assets/img/product/product-6.jpg';

import bgImg from '../../assets/img/cta/cta-bg-2.png';

const InnovationsInMLIoTWaterManagementIGIDetailsMain = () => {
  let tab1 = "Table of Contents",
    tab2 = "Editor's Biographies"
  const tabStyle = 'nav nav-tabs pro-details-nav-btn';

  return (
    <main>
      <Breadcrumb
        pageTitle="Innovations in Machine Learning and IoT for Water Management"
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
                <h4 className="product-details__left-title wow animate__fadeInUp" data-wow-duration="1.1s">Applying Machine Learning Techniques to Bioinformatics: Few-Shot and Zero-Shot Methods
                </h4>
                <h5 className=" wow animate__fadeInUp" data-wow-duration="1.1s">Price: <span>$300.00</span> | Publisher: <span><a href='https://www.igi-global.com/book/innovations-machine-learning-iot-water/326935' target='_blank'>IGI Global</a></span></h5>
                <p className="wow animate__fadeInUp" data-wow-duration="1.1s">Editors: <a href='#' target='_blank'>Abhishek Kumar</a>, <a href='#' target='_blank'>Arun Lal Srivastav</a>, <a href='#' target='_blank'>Ashutosh Kumar Dubey</a>, <a href='#' target='_blank'>Vishal Dutt</a>, <a href='#' target='_blank'>Narayan Vyas</a></p>
                <p className="wow animate__fadeInUp" data-wow-duration="1.1s">Release Date: November 2023 | Copyright: 2024 | Pages: 312</p>
                <p className="wow animate__fadeInUp" data-wow-duration="1.1s">DOI: <a href='https://dx.doi.org/10.4018/979-8-3693-1194-3' target='_blank'>10.4018/979-8-3693-1194-3</a> | ISBN: 9798369311943</p>
                <p className="wow animate__fadeInUp" data-wow-duration="1.1s">Water, our planet's life force, faces multiple challenges in the 21st century, including surging global demand, shifting climate patterns, and the urgent need for sustainable management. Guidance, knowledge, and hope is sharply needed in academia and technology industries, and <b>Innovations in Machine Learning and IoT for Water Management</b> is a formidable resource to provide these necessities. This book delves into the dynamic synergy of Artificial Intelligence (AI), Machine Learning (ML), and the Internet of Things (IoT), ushering in a new era of water resource stewardship.</p>
                <p className="wow animate__fadeInUp" data-wow-duration="1.1s">This book embarks on a journey through the frontiers of AI and IoT, unveiling their transformative impact on water management. From the vantage point of satellite imagery analysis, it scrutinizes the Earth's vital signs, unlocking crucial insights into water resources. It chronicles the rise of AI-powered predictive analytics, a revolutionary force propelling precision water usage and conservation.</p>
                <p className="wow animate__fadeInUp" data-wow-duration="1.1s">This book explains how IoT can be an effective tool to increase intelligence of our water systems. The book meticulously navigates through domains as diverse as aquifer monitoring, hydropower generation optimization, and predictive analytics for water consumption. At its core, it reveals how IoT underpins more intelligent decision-making, rendering water systems more efficient and resilient.</p>
                <p className="wow animate__fadeInUp" data-wow-duration="1.1s">Discover how AI and IoT technologies metamorphose water management practices, from enhancing water quality monitoring to predicting microclimates. The digital revolution demystifies and invigorates weather forecasting, leak detection, wastewater treatment optimization, smart irrigation, and demand response systems. This book caters to a diverse audience, from water management experts and environmental scientists to data science aficionados and IoT enthusiasts. Engineers seeking to reimagine the future of water systems, technology enthusiasts eager to delve into AI's potential, and individuals impassioned by preserving water will all find a well-needed resource in these pages.</p>
                <a className="yellow-btn tp-btn-hover alt-color mt-20 wow animate__fadeInUp" data-wow-duration="1.1s" target='_blank' href="https://www.igi-global.com/book/innovations-machine-learning-iot-water/326935"><span>Buy Now</span><b></b></a>
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
                        </TabList>
                      </div>
                      <div className="tab-content tp-content-tab" id="myTabContent-2">
                        <TabPanel>
                          <ul>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 1: Introduction to ML and IoT for Water Management</a></h6>
                              <p>Authors: Nalluri Poojitha, B. Ramya Kuber, Ambati Vanshika</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 2: A Comprehensive Exploration of Machine Learning and IoT Applications for Transforming Water Management</a></h6>
                              <p>Authors: Mandeep Kaur, Rajni Aron, Heena Wadhwa, Righa Tandon, Htet Ne Oo, Ramandeep Sandhu</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 3: Artificial Intelligence for Water Resource Planning and Management</a></h6>
                              <p>Authors: Richa Saxena, Vaishnavi Srivastava, Dipti Bharti, Rahul Singh, Amit Kumar, Abhilekha Sharma</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 4: Forecasting Weather and Water Management Through Machine Learning</a></h6>
                              <p>Authors: Inzimam Ul Hassan, Zeeshan Ahmad Lone, Swati Swati, Aya Gamal</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 5: Optimizing Water Resources With IoT and ML: A Water Management System</a></h6>
                              <p>Authors: Rakhi Chauhan, Neera Batra, Sonali Goyal, Amandeep Kaur</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 6: Utilizing Machine Learning for Enhanced Weather Forecasting and Sustainable Water Resource Management</a></h6>
                              <p>Authors: Risha Dhargalkar, Viosha Cruz, Abdullah Alzahrani</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 7: AI-Based Smart Water Quality Monitoring and Wastewater Management: An Integrated Bio-Computational Approach</a></h6>
                              <p>Authors: Dipankar Ghosh, Sayan Adhikary, Srijaa Sau</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 8: Revolutionizing Water Quality Monitoring: The Smart Tech Frontier</a></h6>
                              <p>Authors: Ambati Vanshika, B. Ramya Kuber, Nalluri Poojitha</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 9: Data-Driven Aquatics: The Future of Water Management With IoT and Machine Learning</a></h6>
                              <p>Authors: V. Dankan Gowda, Anil Sharma, Rama Chaithanya Tanguturi, K. D. V. Prasad, Vasifa Sameer Kotwal</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 10: Detection of Ephemeral Sand River Flow Using Hybrid Sandpiper Optimization-Based CNN Model</a></h6>
                              <p>Authors: Arunadevi Thirumalraj, V. S. Anusuya, B. Manjunatha</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 11: Design of IoT-Based Automatic Rain-Gauge Radar System for Rainfall Intensity Monitoring</a></h6>
                              <p>Authors: Ahmad Budi Setiawan, Danny Ismarianto Ruhiyat, Aries Syamsuddin, Djoko Waluyo, Ardison Ardison</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 12: Empowering Safety by Embracing IoT for Leak Detection Excellence</a></h6>
                              <p>Authors: Neha Bhati, Ronak Duggar, Abeer Saber</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 13: Using Augmented Reality (AR) and the Internet of Things (IoT) to Improve Water Management Maintenance and Training</a></h6>
                              <p>Authors: Muskan Sharma, Yash Mahajan, Abeer Saber</p>
                            </li>
                          </ul>
                        </TabPanel>
                        <TabPanel>
                          <p><b>Abhishek Kumar</b> is currently working as an Assistant Director in the Computer Science & Engineering Department at Chandigarh University, Punjab, India. is doing Post-Doctoral Fellow in Ingenium Research Group Ingenium Research Group Lab, Universidad De Castilla- La Mancha, Ciudad Real, and Ciudad Real Spain. He has total Academic teaching experience of more than 12 years along with 2 years teaching assistantship. He has more than 160 publications in reputed, peer-reviewed National and International Journals, books & Conferences He has authored/Co-Authored 7 books published internationally and edited 39 books (Published & ongoing with IET, Elsevier, Wiley, IGI GLOBAL Springer, Apple Academic Press, De-Gruyter and CRC, etc. He is Patent holder and got Sir CV Raman National award for 2018 in young researcher and faculty Category from IJRP Group. He is acting as Series Editor for three books series, Quantum Computing with Degruyter Germany, Intelligent Energy System with Elsevier, & Mathematical Methods in the Digital Age: Computational Intelligence & Advancements.</p>
                          <p><b>Arun Lal Srivastav</b> works as an Associate Professor at Chitkara University, Himachal Pradesh, India. He obtained Ph.D. degree from the Indian Institute of Technology (BHU), Varanasi, India. He has done post-doctoral research at National Chung Hsing University, Taiwan. He is currently involved in teaching Environmental Science, Environmental Engineering, Disaster Management, and Design Thinking to undergraduate engineering students. His research interests include Water Quality Surveillance, Climate Change, Water Treatment, River Ecosystems, Soil Health, Phytoremediation and Waste Management. He has published over 80 research papers in various prestigious journals (Elsevier, Springer Nature, IWA, Wiley, etc.), including book chapters and conference papers. He is the editor of 17 books with Elsevier, Nova, Springer, IGI Global, and Wiley.</p>
                          <p><b>Ashutosh Kumar Dubey</b> is an Associate Professor in the Department of Computer Science at Chitkara University in Himachal Pradesh, India. He is a Postdoctoral Fellow at the Ingenium Research Group Lab, Universidad de Castilla-La Mancha, Ciudad Real, Spain. Dr. Dubey completed his BE and M. Tech degrees in Computer Science and Engineering from RGPV, Bhopal, Madhya Pradesh. He completed his PhD in Computer Science and Engineering at JK Lakshmipat University in Jaipur, Rajasthan, India. He is a Senior Member of both IEEE and ACM and possesses more than 16 years of teaching experience. Dr. Dubey has authored and edited fifteen books and has published over 65 articles in peer-reviewed international journals and conference proceedings. He serves as an Editor, Editorial Board Member, and Reviewer for numerous peer-reviewed journals. His research interests encompass Machine Learning, Renewable Energy, Health Informatics, Nature-Inspired Algorithms, Cloud Computing, and Big Data.</p>
                          <p><b>Vishal Dutt</b> is a renowned industry expert in Machine Learning with over eight years of academic teaching experience. He is currently working at Chandigarh University, Punjab, India. He has authored over 50 publications in prestigious national and international journals, SCI and Scopus journals, conferences, and book chapters. Vishal has contributed editorially to multiple books with Wiley, IGI Global, DeGruyter, and Eureka publications and is working on three additional publications with Wiley. A sought-after keynote speaker, he has significantly contributed to workshops and webinars across India. He provides peer review services for elite publishers like Elsevier, Springer, and IEEE Access and was a program committee member and reviewer for ICCIPS 2021. His research focuses on Data Science, Data Mining, Machine Learning, Deep Learning, and Remote Sensing, with extensive experience in data analytics using Rapid Miner, Tableau, and WEKA, as well as over six years in Java and Android development.</p>
                          <p><b>Narayan Vyas</b> a distinguished academic and expert in advanced technologies, is currently working at Chandigarh University, Punjab, India. He cleared the NTA UGC NET & JRF in Computer Science & Applications on his first attempt, underscoring his academic excellence. With profound knowledge of the Internet of Things (IoT) and Mobile Application Development, he has trained students worldwide and authored numerous articles in reputable national and international Scopus-indexed conferences and journals. His research spans IoT, Remote Sensing, Machine Learning, Deep Learning, and Computer Vision. A sought-after keynote speaker, Mr. Vyas collaborates with leading publishers like Wiley, IGI Global, and DeGruyter on various book projects, marking his significant contribution to the field.</p>
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

export default InnovationsInMLIoTWaterManagementIGIDetailsMain;