import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumnew';
import CTA from '../../components/CTA';
import SingleProduct from '../../components/Product';

import productSingleImg1 from '../../assets/img/books/ai-driven-alzheimer-igi.jpg';

import productImg1 from '../../assets/img/product/product-1.jpg';
import productImg2 from '../../assets/img/product/product-2.jpg';
import productImg3 from '../../assets/img/product/product-3.jpg';
import productImg4 from '../../assets/img/product/product-4.jpg';
import productImg5 from '../../assets/img/product/product-5.jpg';
import productImg6 from '../../assets/img/product/product-6.jpg';

import bgImg from '../../assets/img/cta/cta-bg-2.png';

const AIDrivenAlzheimerIGIDetailsMain = () => {
  let tab1 = "Table of Contents",
    tab2 = "Editor's Biographies"
  const tabStyle = 'nav nav-tabs pro-details-nav-btn';

  return (
    <main>
      <Breadcrumb
        pageTitle="AI-Driven Alzheimer's Disease Detection and Prediction"
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
                <h4 className="product-details__left-title wow animate__fadeInUp" data-wow-duration="1.1s">AI-Driven Alzheimer's Disease Detection and Prediction</h4>
                <h5 className=" wow animate__fadeInUp" data-wow-duration="1.1s">Price: <span>$425.00</span> | Publisher: <span><a href='https://www.igi-global.com/book/driven-alzheimer-disease-detection-prediction/336533' target='_blank'>IGI Global</a></span></h5>
                <p className="wow animate__fadeInUp" data-wow-duration="1.1s">Editors: <a href='#' target='_blank'>Umesh Kumar Lilhore</a>, <a href='#' target='_blank'>Abhineet Anand</a>, <a href='#' target='_blank'>Abhishek Kumar</a>, <a href='#' target='_blank'>Satya Prakash Yadav</a>, <a href='#' target='_blank'>Narayan Vyas</a></p>
                <p className="wow animate__fadeInUp" data-wow-duration="1.1s">Projected Release Date: June 2024 | Copyright: © 2024 | Pages: 350</p>
                <p className="wow animate__fadeInUp" data-wow-duration="1.1s">DOI: <a href='https://dx.doi.org/10.4018/979-8-3693-3605-2' target='_blank'>10.4018/979-8-3693-3605-2</a> | ISBN13: 9798369336052</p>
                <p className="wow animate__fadeInUp" data-wow-duration="1.1s">Alzheimer's disease (AD) poses a significant global health challenge, with an estimated 50 million people affected worldwide and no known cure. Traditional methods of diagnosis and prediction often rely on subjective assessments. They are limited in detecting the disease early, leading to delayed intervention and poorer patient outcomes. Additionally, the complexity of AD, with its multifactorial etiology and diverse clinical manifestations, requires a multidisciplinary approach for effective management.</p>
                <p className="wow animate__fadeInUp" data-wow-duration="1.1s"><b>AI-Driven Alzheimer's Disease Detection and Prediction</b> offers a groundbreaking solution by leveraging advanced artificial intelligence (AI) techniques to enhance early diagnosis and prediction of AD. This edited book provides a comprehensive overview of state-of-the-art research, methodologies, and applications at the intersection of AI and AD detection. By bridging the gap between traditional diagnostic methods and cutting-edge technology, this book facilitates knowledge exchange, fosters interdisciplinary collaboration, and contributes to innovative solutions for AD management.</p>
                <p className="wow animate__fadeInUp" data-wow-duration="1.1s">It also benefits data scientists, engineers, policymakers, and professionals in the pharmaceutical and biotechnology industries. Graduate students interested in healthcare and technology will find accessible information on the latest developments in AI-driven approaches to AD detection and prediction.</p>
                <a className="yellow-btn tp-btn-hover alt-color mt-20 wow animate__fadeInUp" data-wow-duration="1.1s" target='_blank' href="https://www.igi-global.com/book/driven-alzheimer-disease-detection-prediction/336533"><span>Buy Now</span><b></b></a>
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
                              <h6><a href='' target='_blank'>Chapter 1: Introduction to Alzheimer’s Disease, Biomarkers, and the AI Revolution</a></h6>
                              <p>Authors: Bancha Yingngam</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 2: Neuroimaging and Biomarkers in AD Detection</a></h6>
                              <p>Authors: Komal Thapa, Neha Kanojia, Ameya Sharma, Lata Rani Rani, Vivek Puri</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 3: Integrating AI in Alzheimer's Disease Management - A Strategic Approach for Healthcare Administrators</a></h6>
                              <p>Authors: Mazharunnisa Md, Prem Chowary V, Sai B.V., Anuradha T., Indhu Sri</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 4: Advanced Deep Learning Approaches for Alzheimer's Disease: Enhancing Diagnostic Classification and Prognostic Prediction</a></h6>
                              <p>Authors: RAMAKRISHNA KUMAR, Yogesh Kumar Sharma, Monika Dhananjay Rokade, Hidayath Ali Baig</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 5: Advancements in Alzheimer's Diagnosis - A Comprehensive Exploration of AI-Powered Diagnostic Tools and Software</a></h6>
                              <p>Authors: Vatsala Tomar, Arvind Kumar, Vandana Kate, Sandeep Kumar, Prasanthi Gottumukkala</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 6: AI-Powered Paradigm Shift: Non-Invasive Biomarkers for Early Detection of Alzheimer’s Disease</a></h6>
                              <p>Authors: Yogesh Kumar Sharma, RAMAKRISHNA KUMAR, Hidayath Baig, Sunil Sudam Khatal</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 7: AI-Enhanced Drug Discovery for Alzheimer's</a></h6>
                              <p>Authors: D.R. Denslin Brabin, Muralidharan J, Sharath Kumar Jagannathan, Ruth Ramya Kalangi</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 8: AI in Neurodegeneration Prediction - Exploring Advanced Approaches for Alzheimer's Disease Progression</a></h6>
                              <p>Authors: Neelima Priyanka Nutulapati, Naresh Babu Karunakaran, Banupriya V, Malatthi Sivasundaram, Venkata Ramana Kaveripakam</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 9: Strategic Management of AI-Enhanced Alzheimer's Disease Prediction Models - Navigating Ethical and Regulatory Frontiers</a></h6>
                              <p>Authors: Brindha Devi, Thaiyalnayaki M., Vasantha S</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 10: Unravelling AI and Machine Learning Essentials in Alzheimer's Research</a></h6>
                              <p>Authors: Saravanan V, Ruth Ramya Kalangi, Saravanan Thangavel, Venkata Ramana K</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 11: Revolutionizing Alzheimer's Diagnosis- Navigating the Challenges and Embracing Opportunities in the Clinical Integration of AI-Powered Tools</a></h6>
                              <p>Authors: Ananda Kumar K S, Senthil Kumar A, Gireesh H R, Shashidhar V</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 12: Unravelling Alzheimer's-The AI Revolution in Diagnosis and Prediction</a></h6>
                              <p>Authors: Suja G P</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 13: Role of Artificial Intelligence in Cognitive Assessment & Early Detection of Alzheimer’s Disease: Cognitive Assessment & AI</a></h6>
                              <p>Authors: Deepak Panwar, Parul Sharma, Shweta Sharma, Manu Goyal, Kanu Goyal</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 14: Unravelling Data Challenges in AI-Driven Alzheimer's Research</a></h6>
                              <p>Authors: Arunadevi B, Vidyabharathi Dakshinamurthi, Bennilo Fernandes J, Sharmiladevi D.</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 15: Revolutionizing Alzheimer's Diagnosis- Navigating the Challenges and Embracing Opportunities in the Clinical Integration of AI-Powered Tools</a></h6>
                              <p>Authors: Ananda Kumar K S</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 16: Unveiling Alzheimer's Early Signs - AI-driven Insights through Neuroimaging and Biomarkers</a></h6>
                              <p>Authors: Ramani S, Madiajagan M, Shikha Maheshwari, Utpal Saikia</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 17: Real-World Impact - Case Studies and Success Stories in AI-driven Alzheimer's Disease Research and Care</a></h6>
                              <p>Authors: Kireet Muppavaram, Amit Gangopadhyay, Sudhir Ramadass, Prakash N, Siva Shankar S</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 18: Patient-Centered AI Solutions for Managing Alzheimer's Disease</a></h6>
                              <p>Authors: Sheerin Banu M, D Sugumar, Sujatha S, Veeramakali T</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 19: Navigating the Administrative Landscape of AI in Alzheimer's Disease Detection - A Comprehensive Management Studies Perspective</a></h6>
                              <p>Authors: Mohana Krishna I, Lingamsetty Dhanush, Chinni Tejasri, A Hari Teja, K S N L Trisha, NEHA IRRINKI</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 20: Machine Learning Models for Alzheimer's disease Detection - An In-Depth Exploration, Including Deep Learning Approaches</a></h6>
                              <p>Authors: Indira Bharathi, Swarnasudha M, Manjula S, Gethzi Ahila Poornima I</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 21: Intelligent Techniques for Detection and Diagnosis of Neurodegenerative Diseases</a></h6>
                              <p>Authors: DEEPAK VARADAM, Sahana Shankar, Pranathi Hegde, Shobitha V, Sunidhi M, Sanjana N</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 22: Integrating Genomic Data and Genetic Risk Factors with AI for Predicting Susceptibility to Alzheimer's Disease</a></h6>
                              <p>Authors: Nikhat Parveen, Vidyabharathi D, Nazeer Shaik, Ram Nivas D</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 23: Global Initiatives and Collaborations in AI for Alzheimer's Disease</a></h6>
                              <p>Authors: A Chandrashekhar, Nikhat Parveen, Muthumari A., Menaga D.</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 24: Challenges and Future Directions in AI-driven Alzheimer's Disease Research and Care</a></h6>
                              <p>Authors: Balachandra Pattanaik, Rambabu Nalagandla, Varagantham Anitha Avula, Kumarasamy M., Ojasvi Pattanaik</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 25: Educating Health Care Professional on AI in Alzheimer Disease Strategies and Programmes for Educating Health Care Professional on the Use of AI in Alzheimer's</a></h6>
                              <p>Authors: Shweta Sharma, Shavez Mansoori, Manu Goyal, Kanu Goyal, Parul Sharma</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 26: Cognitive Assessment and Early Detection of Alzheimer's disease - Harnessing AI through Tasks and Games</a></h6>
                              <p>Authors: Deena G, Naresh Babu Karunakaran, Saumya Sharma, Vivekanand Pandey, Neerav Nishant</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 27: Ethical and Privacy Considerations in AI-Driven AD Research</a></h6>
                              <p>Authors: Mohammed Abdul Matheen, Zainulabedin Hasan, Amairullah Khan Lodhi, Shaikh Abdul Waheed, Altaf C</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 28: Exploring The Role of Natural Learning Processing in Alzheimer’s Disease Research and Prediction: NLP in AD Research</a></h6>
                              <p>Authors: Ruchi Jakhmola Mani, Yusra Ashfaque Ali, Deepshikha Pande Katare, Snigdha Debashis Bhattacharjee, Prathum Pathak</p>
                            </li>
                          </ul>
                        </TabPanel>
                        <TabPanel>
                          <p><b>Umesh Kumar Lilhore</b> is currently a Professor at the School of Computing Science & Engineering (CSE) at Galgotia University, Greater Noida. With over 19 years of teaching and 8 years of research experience, he has previously held positions at various renowned universities and colleges in India and abroad. Dr. Lilhore holds a Ph.D. and M.Tech in CSE and has completed his postdoctoral research at the Institute of Advanced Computing, University of Louisiana at Lafayette. He has a strong publication record with articles in reputed, peer-reviewed national and international Scopus journals and conferences.</p>
                          <p><b>Abhineet Anand</b> 23+ years of academic and administrative experience, his research includes the following field of endeavour: Cloud Computing, Cloud Security, Decision Tree, nearest neighbour method, Clustering, Rule induction, Optical Fibre Switching in Wavelength Multiplexing, Automata Theory. He has published more than 14 SCI, 53+ Scopus indexed papers, 20+ papers in International conference, 12 Intentional Journal, 3 National Journal, and 3 National Conference with 6 Book with prestigious publishers.</p>
                          <p><b>Abhishek Kumar</b> is currently working as an Assistant Director in the Computer Science & Engineering Department at Chandigarh University, Punjab, India. is doing Post-Doctoral Fellow in Ingenium Research Group Ingenium Research Group Lab, Universidad De Castilla- La Mancha, Ciudad Real, and Ciudad Real Spain. He has total Academic teaching experience of more than 12 years along with 2 years teaching assistantship. He has more than 160 publications in reputed, peer-reviewed National and International Journals, books & Conferences He has authored/Co-Authored 7 books published internationally and edited 39 books (Published & ongoing with IET, Elsevier, Wiley, IGI GLOBAL Springer, Apple Academic Press, De-Gruyter and CRC, etc. He is Patent holder and got Sir CV Raman National award for 2018 in young researcher and faculty Category from IJRP Group. He is acting as Series Editor for three books series, Quantum Computing with Degruyter Germany, Intelligent Energy System with Elsevier, & Mathematical Methods in the Digital Age: Computational Intelligence & Advancements.</p>
                          <p><b>Satya Prakash Yadav</b> is currently theAssociation Professor, School of Computer Science Engineering and Technology (SCSET), Bennett University, Greater Noida, India. and has completed his Postdoctoral under the supervision Prof. (Dr.) Victor Hugo C. de Albuquerque, from Federal Institute of Education, Science and Technology of Ceará, Brazil. He has awarded his PhD degree from Dr. A.P.J. Abdul Kalam Technical University (AKTU) (formerly UPTU). Currently, 4 students are working for Ph.D. under my guidance. A seasoned academician having more than 17 years of experience, he has published four books (Programming in C, Programming in C++ and Blockchain and Cryptocurrency) under I.K. International Publishing House Pvt. Ltd. Including Distributed Artificial Intelligence: A Modern Approach, Published December 18, 2020 by CRC Press. He has undergone industrial training programs during which he was involved in live projects with companies in the areas of SAP, Railway Traffic Management Systems, and Visual Vehicles Counter and Classification (used in the Metro rail network design). He is an alumnus of Netaji Subhas Institute of Technology (NSIT), Delhi University.</p>
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

export default AIDrivenAlzheimerIGIDetailsMain;