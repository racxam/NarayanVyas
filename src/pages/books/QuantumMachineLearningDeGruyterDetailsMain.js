import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumnew';
import CTA from '../../components/CTA';
import SingleProduct from '../../components/Product';

import productSingleImg1 from '../../assets/img/books/quantum-machine-learning-degruyter.jpg';

import productImg1 from '../../assets/img/books/few-shot-zero-shot-igi.jpg';
import productImg2 from '../../assets/img/books/ai-driven-alzheimer-igi.jpg';
import productImg3 from '../../assets/img/books/quantam-for-biomedical-igi.jpg';
import productImg4 from '../../assets/img/books/water-management-igi.jpg';
import productImg5 from '../../assets/img/books/quantum-machine-learning-degruyter.jpg';
import productImg6 from '../../assets/img/cfc/iomt-wiley.jpg';

import bgImg from '../../assets/img/cta/cta-bg-2.png';

const QuantumMachineLearningDeGruyterDetailsMain = () => {
  let tab1 = "Table of Contents",
    tab2 = "Editor's Biographies"
  const tabStyle = 'nav nav-tabs pro-details-nav-btn';

  return (
    <main>
      <Breadcrumb
        pageTitle="Quantum Machine Learning: Quantum Algorithms and Neural Networks"
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
                <h4 className="product-details__left-title wow animate__fadeInUp" data-wow-duration="1.1s">Quantum Machine Learning: Quantum Algorithms and Neural Networks</h4>
                <h5 className=" wow animate__fadeInUp" data-wow-duration="1.1s">Price: <span>144,95 €</span> | Publisher: <span><a href='https://www.degruyter.com/document/isbn/9783111342276/html' target='_blank'>De Gruyter</a></span></h5>
                <p className="wow animate__fadeInUp" data-wow-duration="1.1s">Editors: <a href='#' target='_blank'>Pethuru Raj</a>, <a href='#' target='_blank'>Houbing Herbert Song</a>, <a href='#' target='_blank'>Dac-Nhuong Le</a>, <a href='#' target='_blank'>Narayan Vyas</a></p>
                <p className="wow animate__fadeInUp" data-wow-duration="1.1s">Projected Release Date: August 2024 | Pages: 326</p>
                <p className="wow animate__fadeInUp" data-wow-duration="1.1s">ISBN13: 9783111342092</p>
                <p className="wow animate__fadeInUp" data-wow-duration="1.1s">Quantum computing has shown a potential to tackle specific types of problems, especially those involving a daunting number of variables, at an exponentially faster rate compared to classical computers. This volume focuses on quantum variants of machine learning algorithms, such as quantum neural networks, quantum reinforcement learning, quantum principal component analysis, quantum support vectors, quantum Boltzmann machines, and many more.</p>
                <p className="wow animate__fadeInUp" data-wow-duration="1.1s">Provides an overview of the basic concepts, preliminaries, and principles of quantum computing and machine learning. Presents the most advanced and well-known quantum machine learning and optimisation algorithms.</p>
                <a className="yellow-btn tp-btn-hover alt-color mt-20 wow animate__fadeInUp" data-wow-duration="1.1s" target='_blank' href='https://www.degruyter.com/document/isbn/9783111342276/html'><span>Buy Now</span><b></b></a>
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
                          <p>Coming Soon</p>
                        </TabPanel>
                        <TabPanel>
                          <p><b>Pethuru Raj</b> is Working at Reliance Jio Platforms Ltd. (JPL) Bangalore. Previously. worked in IBM global Cloud center of Excellence (CoE), Wipro consulting services (WCS), and Robert Bosch Corporate Research (CR). In total, he has gained more than 22 years of IT industry experience and 8 years of research experience. Finished the CSIR-sponsored PhD degree at Anna University, Chennai and continued with the UGC-sponsored postdoctoral research in the Department of Computer Science and Automation, Indian Institute of Science (IISc), Bangalore. Thereafter, he was granted a couple of international research fellowships (JSPS and JST) to work as a research scientist for 3.5 years in two leading Japanese universities. He has been an ACM and IEEE professional member. Focuses on some of the digital transformation technologies such as the Internet of Things (IoT), Artificial Intelligence (AI), Big and streaming Data Analytics, Blockchain, Digital Twins, Cloud-native computing, Edge and Serverless computing, Reliability engineering, Microservices architecture (MSA), Event-driven architecture (EDA), 5G/6G, etc.</p>
                          <p><b>Houbing Herbert Song</b> is a renowned expert in the field of information systems and cybersecurity, serving as the Founding Center Director of the NSF Center for Aviation Big Data Analytics. He is also the Associate Director (Leadership) and UMBC Director of the DOT Transportation Cybersecurity Center for Advanced Research and Education (CYBER-CARE, Tier 1 Center). In addition, Dr. [Name] is the Director of the Security and Optimization for Networked Globe Laboratory (SONG Lab) and an Associate Professor in the Department of Information Systems at the University of Maryland, Baltimore County (UMBC). His extensive accolades include being an IEEE Fellow, an ACM Distinguished Scientist, an IEEE Systems Council Distinguished Lecturer, an ACM Distinguished Speaker, and an IEEE VTS Distinguished Lecturer.</p>
                          <p><b>Dac-Nhuong Le</b> has an MSc and PhD in computer science from Vietnam National University, Vietnam in 2009, and 2015, respectively. He is an Associate Professor on Computer Science, Dean of Faculty of Information Technology, Haiphong University, Vietnam. He has a total academic teaching experience of 20+ years in computer science. He has more than 110+ publications in the reputed international conferences, journals, and book chapter contributions (Indexed by SCIE, SSCI, ESCI, Scopus). His areas of research are in the field of intelligence computing, multi-objective optimization, network security, cloud computing, virtual reality/argument reality. Recently, he has been on the technique program committee, the technique reviews, the track chair for international conferences under Springer- ASIC/LNAI/CISC Series. Presently, he is serving on the editorial board of international journals and edited/authored 30+ computer science books published by Springer, Wiley, CRC Press, IET, and Bentham Publishers.</p>
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

export default QuantumMachineLearningDeGruyterDetailsMain;