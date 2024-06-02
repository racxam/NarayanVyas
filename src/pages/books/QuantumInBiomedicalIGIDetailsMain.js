import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumnew';
import CTA from '../../components/CTA';
import SingleProduct from '../../components/Product';

import productSingleImg1 from '../../assets/img/books/quantam-for-biomedical-igi.jpg';

import productImg1 from '../../assets/img/books/few-shot-zero-shot-igi.jpg';
import productImg2 from '../../assets/img/books/ai-driven-alzheimer-igi.jpg';
import productImg3 from '../../assets/img/books/quantam-for-biomedical-igi.jpg';
import productImg4 from '../../assets/img/books/water-management-igi.jpg';
import productImg5 from '../../assets/img/books/quantum-machine-learning-degruyter.jpg';
import productImg6 from '../../assets/img/cfc/iomt-wiley.jpg';

import bgImg from '../../assets/img/cta/cta-bg-2.png';

const QuantumInBiomedicalIGIDetailsMain = () => {
  let tab1 = "Table of Contents",
    tab2 = "Editor's Biographies"
  const tabStyle = 'nav nav-tabs pro-details-nav-btn';

  return (
    <main>
      <Breadcrumb
        pageTitle="Quantum Innovations at the Nexus of Biomedical Intelligence"
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
                <h4 className="product-details__left-title wow animate__fadeInUp" data-wow-duration="1.1s">Quantum Innovations at the Nexus of Biomedical Intelligence</h4>
                <h5 className=" wow animate__fadeInUp" data-wow-duration="1.1s">Price: <span>$330.00</span> | Publisher: <span><a href='https://www.igi-global.com/book/quantum-innovations-nexus-biomedical-intelligence/328543' target='_blank'>IGI Global</a></span></h5>
                <p className="wow animate__fadeInUp" data-wow-duration="1.1s">Editors: <a href='#' target='_blank'>Vishal Dutt</a>, <a href='#' target='_blank'>Abhishek Kumar</a>, <a href='#' target='_blank'>Sachin Ahuja</a>, <a href='#' target='_blank'>Anupam Baliyan</a>, <a href='#' target='_blank'>Narayan Vyas</a></p>
                <p className="wow animate__fadeInUp" data-wow-duration="1.1s">Release Date: December 2023 | Copyright: © 2024 | Pages: 287</p>
                <p className="wow animate__fadeInUp" data-wow-duration="1.1s">DOI: <a href='https://dx.doi.org/10.4018/979-8-3693-1479-1' target='_blank'>10.4018/979-8-3693-1479-1</a> | ISBN13: 9798369314791</p>
                <p className="wow animate__fadeInUp" data-wow-duration="1.1s">The convergence of quantum technologies and biomedical intelligence is a frontier of boundless potential. The quantum advancements revolutionize disease detection, personalized medicine, and health monitoring frameworks while confronting the pressing challenge of accountability in machine learning systems within the biomedical domain. How do quantum innovations at the nexus of biomedical intelligence redefine biomedical research and healthcare, addressing critical inquiries such as the transformative potential of quantum computing, machine learning, and sensing technologies?</p>
                <p className="wow animate__fadeInUp" data-wow-duration="1.1s"><b>Quantum Innovations at the Nexus of Biomedical Intelligence</b> explores the intricate synergy between quantum mechanics and the biomedical domain. This book elucidates the profound implications and applications arising from the fusion of quantum computing, artificial intelligence, and biomedical sciences.</p>
                <p className="wow animate__fadeInUp" data-wow-duration="1.1s">This book introduces biomedical engineering, setting the stage for a deep dive into the transformative role of quantum computing and artificial intelligence. As the narrative unfolds, the text navigates the reader through the uncharted territories of quantum-enhanced machine learning, quantum sensing and their profound impact on diagnostics, personalized medicine, and health monitoring frameworks. The intersection of quantum computing and AI in medical advancements and cybersecurity is illuminated, offering a comprehensive understanding of the multifaceted applications of these cutting-edge technologies.</p>
                <p className="wow animate__fadeInUp" data-wow-duration="1.1s">The book is a collaborative effort, allowing luminaries from quantum computing, artificial intelligence, biomedicine, bioengineering, molecular biology, and healthcare to share their expertise. Readers will find in-depth discussions on topics ranging from the detection of cardiomegaly using quantum-enhanced deep convolutional neural networks to applying quantum machine learning algorithms in predicting outbreaks of diseases such as dengue fever. The challenges of accountability in machine learning systems are explored beyond mere technical obstacles, establishing a critical dialogue on responsible innovation in this burgeoning field.</p>
                <p className="wow animate__fadeInUp" data-wow-duration="1.1s">This book is ideal for researchers, scientists, academics, and professionals across diverse disciplines in quantum innovations within biomedical intelligence. Graduate students and postdoctoral researchers will discover a valuable resource that expands their knowledge and unveils new avenues for research and future investigations.</p>
                <a className="yellow-btn tp-btn-hover alt-color mt-20 wow animate__fadeInUp" data-wow-duration="1.1s" target='_blank' href="https://www.igi-global.com/book/quantum-innovations-nexus-biomedical-intelligence/328543"><span>Buy Now</span><b></b></a>
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
                              <h6><a href='' target='_blank'>Chapter 1: AI-Driven Plant Leaf Disease Detection for Modern Agriculture</a></h6>
                              <p>Authors: M. Suchetha, Jaya Sai Kotamsetti, Dasapalli Sasidhar Reddy, S. Preethi, D. Edwin Dhas</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 2: Enhancing Elderly Health Monitoring Framework With Quantum-Assisted Machine Learning Models as Micro Services</a></h6>
                              <p>Authors: A. Bhuvaneswari, R. Srivel, N. Elamathi, S. Shitharth, K. Sangeetha</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 3: Explaining the Challenges of Accountability in Machine Learning Systems Beyond Technical Obstacles</a></h6>
                              <p>Authors: Srinivas Kumar Palvadi</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 4: Exploring the Potential of Quantum Computing in AI, Medical Advancements, and Cyber Security</a></h6>
                              <p>Authors: Srinivas Kumar Palvadi</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 5: Hybrid Algorithms for Medical Insights Using Quantum Computing</a></h6>
                              <p>Authors: Nitika Kapoor, Parminder Singh, Kusrini M. Kom, Vishal Bharti</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 6: Impact of Pairwise Electrode Features in the Classification of Emotions for EEG Signal Analysis</a></h6>
                              <p>Authors: M. Suchetha, V. V. Rama Raghavan, Shaik Fardeen, P. V. S. Nithish, S. Preethi, D. Edwin Dhas</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 7: Infected Plant Leaves Detection Using Multilayered Convolutional Neural Network and Quantum Classifier</a></h6>
                              <p>Authors: Damandeep Kaur, Shamandeep Singh, Simarjeet Kaur, Gurpreet Singh, Rani Kumari</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 8: Machine Learning and Quantum Computing in Biomedical Intelligence</a></h6>
                              <p>Authors: Pradeepta Kumar Sarangi, Shreya Kumari, Mani Sawhney, Amit Vajpayee, Mukesh Rohra, Srikanta Mallik</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 9: Personalized Medicine Through Quantum Computing: Tailoring Treatments in Healthcare</a></h6>
                              <p>Authors: Muskan Sharma, Yash Mahajan, Abdullah Alzahrani</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 10: Quantum Computing for Dengue Fever Outbreak Prediction: Machine Learning and Genetic Hybrid Algorithms Approach</a></h6>
                              <p>Authors: Dhaya Chinnathambi, Srivel Ravi, Mohammed Abdul Matheen, Saravanan Pandiaraj</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 11: Quantum Machine Learning for Biomedical Data Analysis</a></h6>
                              <p>Authors: Dankan Gowda V., Harshali Yogesh Patil, Shafiqul Abidin, Ribhu Abhusan Panda, Sampathirao Suneetha</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 12: Revolutionizing Biomedical Engineering With Quantum Computing and AI</a></h6>
                              <p>Authors: Mamta, Nitin Garla, Inam Ul Haq, Hardik Dhiman</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 13: Smart Detection and Removal of Artifacts in Cognitive Signals Using Biomedical Signal Intelligence Applications</a></h6>
                              <p>Authors: R. Kishore Kanna, K. Yamuna Devi, R. Gomalavalli, A. Ambikapathy</p>
                            </li>
                            <li>
                              <h6><a href='' target='_blank'>Chapter 14: Understanding Biomedical Engineering for Quantum Computing</a></h6>
                              <p>Authors: Rashmi Agrawal, Vicente Garcia Diaz</p>
                            </li>
                          </ul>
                        </TabPanel>
                        <TabPanel>
                          <p><b>Vishal Dutt</b> is a renowned industry expert in Machine Learning with over eight years of academic teaching experience. He is currently working at Chandigarh University, Punjab, India. He has authored over 50 publications in prestigious national and international journals, SCI and Scopus journals, conferences, and book chapters. Vishal has contributed editorially to multiple books with Wiley, IGI Global, DeGruyter, and Eureka publications and is working on three additional publications with Wiley. A sought-after keynote speaker, he has significantly contributed to workshops and webinars across India. He provides peer review services for elite publishers like Elsevier, Springer, and IEEE Access and was a program committee member and reviewer for ICCIPS 2021. His research focuses on Data Science, Data Mining, Machine Learning, Deep Learning, and Remote Sensing, with extensive experience in data analytics using Rapid Miner, Tableau, and WEKA, as well as over six years in Java and Android development.</p>
                          <p><b>Abhishek Kumar</b> is currently working as an Assistant Director in the Computer Science & Engineering Department at Chandigarh University, Punjab, India. is doing Post-Doctoral Fellow in Ingenium Research Group Ingenium Research Group Lab, Universidad De Castilla- La Mancha, Ciudad Real, and Ciudad Real Spain. He has total Academic teaching experience of more than 12 years along with 2 years teaching assistantship. He has more than 160 publications in reputed, peer-reviewed National and International Journals, books & Conferences He has authored/Co-Authored 7 books published internationally and edited 39 books (Published & ongoing with IET, Elsevier, Wiley, IGI GLOBAL Springer, Apple Academic Press, De-Gruyter and CRC, etc. He is Patent holder and got Sir CV Raman National award for 2018 in young researcher and faculty Category from IJRP Group. He is acting as Series Editor for three books series, Quantum Computing with Degruyter Germany, Intelligent Energy System with Elsevier, & Mathematical Methods in the Digital Age: Computational Intelligence & Advancements.</p>
                          <p><b>Sachin Ahuja</b> is presently serving Chandigarh University as Executive Director of Engineering. With over 2 decades of academic and research experience to his position he has held major positions at significant higher education institutions and has proven a strong dedication to knowledge advancement. Dr. Ahuja is an experienced mentor who has advised several ME and PhD students in cutting-edge subjects such as Artificial Intelligence, Machine Learning, and Data Mining. His scientific impact extends beyond mentorship, with contributions to edited books and articles published in peer-reviewed journals and over 150+ patents in latest technological interventions. Dr. Ahuja's participation in supported projects demonstrates his commitment to impactful research. His broad skills demonstrates an innovative leadership approach, promoting innovation and excellence in the ever-changing engineering and technology sector.</p>
                          <p><b>Anupam Baliyan</b> is working as Dean Engineering in Geeta University India .He has more than 24 Years of Experience in Academic. He is MCA from Gurukul kangari University, MTech(CSE) and Ph.D.(CSE) from Banasthali University. He published more than 80 Research papers in various International Journal indexed at Scopus and SCI. He is Life time member of CSI and ISTE. He has been chaired many sessions in International Conferences across the INDIA. He also published 3 Authored and 10 Edited books with repute Publishers. He is also the Asst. Editor of some Journals those are Scopus indexed. His Research Area is Algorithms, Machine learning, Wireless networks and AI.</p>
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

export default QuantumInBiomedicalIGIDetailsMain;