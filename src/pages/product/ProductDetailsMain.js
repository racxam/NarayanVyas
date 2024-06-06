import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Breadcrumb from '../../components/Breadcrumb';
import CTA from '../../components/CTA';
import SingleProduct from '../../components/Product';
import FaqTwo from '../../components/Faq/FaqTwo';

import productSingleImg1 from '../../assets/img/product/product-9.jpg';

import productImg1 from '../../assets/img/books/few-shot-zero-shot-igi.jpg';
import productImg2 from '../../assets/img/books/ai-driven-alzheimer-igi.jpg';
import productImg3 from '../../assets/img/books/quantam-for-biomedical-igi.jpg';
import productImg4 from '../../assets/img/books/water-management-igi.jpg';
import productImg5 from '../../assets/img/books/quantum-machine-learning-degruyter.jpg';
import productImg6 from '../../assets/img/cfc/iomt-wiley.jpg';

import bgImg from '../../assets/img/cta/cta-bg-2.png';

const ProductDetailsMain = () => {
  let tab1 = "Prodcut Details",
    tab2 = "Additional Info",
    tab3 = "Review (08)",
    tab4 = "Faq"
  const tabStyle = 'nav nav-tabs pro-details-nav-btn';

  return (
    <main>
      <Breadcrumb
        pageTitle="Product Details"
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
                <h4 className="product-details__left-title wow animate__fadeInUp" data-wow-duration="1.1s">Pride and Prejudice Usage
                </h4>
                <h5 className=" wow animate__fadeInUp" data-wow-duration="1.1s"><s>$63.00</s><span> - $36.00</span></h5>
                <div className="product-details__star wow animate__fadeInUp" data-wow-duration="1.1s">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star color"></i>
                  <i className="fas fa-star color"></i>
                  <span>(03)</span>
                </div>
                <p className="wow animate__fadeInUp" data-wow-duration="1.1s">Being able to crank out videos consistently, localize them for <br /> different regions, and still save resources, time, energy has <br /><span><i>+</i> Best mukap book design.</span></p>
                <a className="yellow-btn tp-btn-hover alt-color mt-20 wow animate__fadeInUp" data-wow-duration="1.1s" href="#"><span>Add To Cart</span><b></b></a>
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
                          <Tab><button className="nav-links"><span>{tab4}</span></button></Tab>
                        </TabList>
                      </div>
                      <div className="tab-content tp-content-tab" id="myTabContent-2">
                        <TabPanel>
                          <p className="mb-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget viverra pretium, dolor tellus aliquet nunc, vitae ultricies erat elit eu lacus. Vestibulum non justo consectetur, cursus ante, tincidunt sapien. Nulla quis diam sit amet turpis interdum accumsan quis nec enim. Vivamus faucibus ex sed nibh egestas elementum. Mauris et bibendum dui. Aenean consequat pulvinar luctus. Suspendisse consectetur tristique tortor</p>
                          <p>We have covered many special events such as fireworks, fairs, parades, races, walks, awards ceremonies, fashion shows, sporting events, and even a memorial service.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget viverra pretium, dolor tellus aliquet nunc, vitae ultricies erat elit eu lacus. Vestibulum non justo consectetur, cursus ante, tincidunt sapien. Nulla quis diam sit amet turpis interdum accumsan quis nec enim. Vivamus faucibus ex sed nibh egestas elementum. Mauris et bibendum dui. Aenean consequat pulvinar luctus. Suspendisse consectetur</p>
                        </TabPanel>
                        <TabPanel>
                          <div className="product__details-info table-responsive">
                            <table className="table table-striped">
                              <tbody>
                                <tr>
                                  <td className="add-info">Weight</td>
                                  <td className="add-info-list"> 2 lbs</td>
                                </tr>
                                <tr>
                                  <td className="add-info">Dimensions</td>
                                  <td className="add-info-list"> 12 × 16 × 19 in</td>
                                </tr>
                                <tr>
                                  <td className="add-info">Product</td>
                                  <td className="add-info-list"> Purchase this product on rag-bone.com</td>
                                </tr>
                                <tr>
                                  <td className="add-info">Color</td>
                                  <td className="add-info-list"> Gray, Black</td>
                                </tr>
                                <tr>
                                  <td className="add-info">Size</td>
                                  <td className="add-info-list"> S, M, L, XL</td>
                                </tr>
                                <tr>
                                  <td className="add-info">Model</td>
                                  <td className="add-info-list"> Model </td>
                                </tr>
                                <tr>
                                  <td className="add-info">Shipping</td>
                                  <td className="add-info-list"> Standard shipping: $5,95L</td>
                                </tr>
                                <tr>
                                  <td className="add-info">Care Info</td>
                                  <td className="add-info-list"> Machine Wash up to 40ºC/86ºF Gentle Cycle</td>
                                </tr>
                                <tr>
                                  <td className="add-info">Brand</td>
                                  <td className="add-info-list"> Kazen</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </TabPanel>
                        <TabPanel>
                          <div className="product-details-review">
                            <h3 className="tp-comments-title mb-35">3 reviews for “Wide Cotton Tunic extreme hammer”</h3>
                            <div className="latest-comments mb-55">
                              <ul>
                                <li>
                                  <div className="comments-box d-flex">
                                    <div className="comments-text">
                                      <div className="comments-top d-sm-flex align-items-start justify-content-between mb-5">
                                        <div className="avatar-name">
                                          <b>Siarhei Dzenisenka</b>
                                          <div className="comments-date mb-20">
                                            <span>March 27, 2018 9:51 am</span>
                                          </div>
                                        </div>
                                        <div className="user-rating">
                                          <ul>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                          </ul>
                                        </div>
                                      </div>
                                      <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget viverra pretium, dolor tellus aliquet nunc, vitae ultricies erat elit eu lacus. Vestibulum non justo consectetur, cursus ante, tincidunt sapien. Nulla quis diam sit amet turpis interdum accumsan quis nec enim. Vivamus faucibus ex sed nibh egestas elementum. Mauris et bibendum dui. Aenean consequat pulvinar luctus. Suspendisse consectetur tristique tortor</p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="comments-box d-flex">
                                    <div className="comments-text">
                                      <div className="comments-top d-sm-flex align-items-start justify-content-between mb-5">
                                        <div className="avatar-name">
                                          <b>Tommy Jarvis </b>
                                          <div className="comments-date mb-20">
                                            <span>March 27, 2018 9:51 am</span>
                                          </div>
                                        </div>
                                        <div className="user-rating">
                                          <ul>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                          </ul>
                                        </div>
                                      </div>
                                      <p className="m-0">We have covered many special events such as fireworks, fairs, parades, races, walks, awards ceremonies, fashion shows, sporting events, and even a memorial service.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget viverra pretium, dolor tellus aliquet nunc, vitae ultricies erat elit eu lacus. Vestibulum non justo consectetur, cursus ante, tincidunt sapien. Nulla quis diam sit amet turpis interdum accumsan quis nec enim. Vivamus faucibus ex sed nibh egestas elementum. Mauris et bibendum dui. Aenean consequat pulvinar luctus. Suspendisse consectetur</p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="comments-box d-flex">
                                    <div className="comments-text">
                                      <div className="comments-top d-sm-flex align-items-start justify-content-between mb-5">
                                        <div className="avatar-name">
                                          <b>Johnny Cash</b>
                                          <div className="comments-date mb-20">
                                            <span>March 27, 2018 9:51 am</span>
                                          </div>
                                        </div>
                                        <div className="user-rating">
                                          <ul>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fas fa-star"></i></a></li>
                                            <li><a href="#"><i className="fal fa-star"></i></a></li>
                                          </ul>
                                        </div>
                                      </div>
                                      <p className="m-0">This is cardigan is a comfortable warm classic piece. Great to layer with a light top and you can dress up or down given the jewel buttons. I'm 5'8” 128lbs a 34A and the Small fit fine.</p>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="product-details-comment pb-100">
                              <div className="comment-title mb-20">
                                <h3>Add a review</h3>
                                <p>Your email address will not be published. Required fields are marked*</p>
                              </div>
                              <div className="comment-rating mb-20 d-flex">
                                <span>Overall ratings</span>
                                <ul>
                                  <li><a href="#"><i className="fas fa-star"></i></a></li>
                                  <li><a href="#"><i className="fas fa-star"></i></a></li>
                                  <li><a href="#"><i className="fas fa-star"></i></a></li>
                                  <li><a href="#"><i className="fas fa-star"></i></a></li>
                                  <li><a href="#"><i className="fal fa-star"></i></a></li>
                                </ul>
                              </div>
                              <div className="comment-input-box">
                                <form action="#">
                                  <div className="row">
                                    <div className="col-xxl-12">
                                      <div className="comment-input">
                                        <textarea placeholder="Your review..."></textarea>
                                      </div>
                                    </div>
                                    <div className="col-xxl-6">
                                      <div className="comment-input">
                                        <input type="text" placeholder="Your Name*" />
                                      </div>
                                    </div>
                                    <div className="col-xxl-6">
                                      <div className="comment-input">
                                        <input type="email" placeholder="Your Email*" />
                                      </div>
                                    </div>
                                    <div className="col-xxl-12">
                                      <div className="comment-submit">
                                        <button type="submit" className="it-btn">Submit</button>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </TabPanel>
                        <TabPanel>
                          <FaqTwo />
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
                Url='/call-for-chapters/secure-energy-wiley'
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

export default ProductDetailsMain;