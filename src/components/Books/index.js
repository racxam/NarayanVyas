import React from 'react'
import SingleProduct from '../../components/Product';
import SectionTitle from '../../components/SectionTitle/index'
import productImg1 from '../../assets/img/books/few-shot-zero-shot-igi.jpg';
import productImg2 from '../../assets/img/books/ai-driven-alzheimer-igi.jpg';
import productImg3 from '../../assets/img/books/quantam-for-biomedical-igi.jpg';
import productImg4 from '../../assets/img/books/water-management-igi.jpg';
import productImg5 from '../../assets/img/books/quantum-machine-learning-degruyter.jpg';
const index = () => {
  return (
    <div className="product__area product__plr mt-100 mb-70">
    <div className="container-fluid">
    <div className="col-xl-12 col-lg-8 wow animate__fadeIn mt-100" data-wow-duration="1.1s">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-6 wow animate__fadeInUp" data-wow-duration="1.1s">
                    <SectionTitle
                        sectionClass="service__section-box text-center pb-35 section-title-fixed-width"
                        subTitle="Published Books"
                        Title="Showing All Published Books"
                    />
                </div>
            </div>


        </div>
        <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
                <SingleProduct
                    Image={productImg1}
                    Title='Applying Machine Learning Techniques to Bioinformatics: Few-Shot and Zero-Shot Methods'
                    Publisher='IGI Global'
                    Price='$340'
                    Url='/books/applying-ml-in-bioinformatics-igi'
                />
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
                <SingleProduct
                    Image={productImg2}
                    Title='AI-Driven Alzheimers Disease Detection and Prediction'
                    Publisher='IGI Global'
                    Price='$425'
                    Url='/books/ai-driven-alzheimer-disease-prediction-igi'
                />
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
                <SingleProduct
                    Image={productImg3}
                    Title='Quantum Innovations at the Nexus of Biomedical Intelligence'
                    Publisher='IGI Global'
                    Price='$330'
                    Url='/books/quantum-in-biomedical-igi'
                />
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
                <SingleProduct
                    Image={productImg4}
                    Title='Innovations in Machine Learning and IoT for Water Management'
                    Publisher='IGI Global'
                    Price='$300'
                    Url='innovation-in-ml-iot-water-management-igi'
                />
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30 wow animate__fadeInUp" data-wow-duration="1.1s">
                <SingleProduct
                    Image={productImg5}
                    Title='Quantum Machine Learning: Quantum Algorithms and Neural Networks'
                    Publisher='De Gruyter'
                    Price='144,95 €'
                    Url='/books/quantum-machine-learning-degruyter'
                />
            </div>
        </div>
    </div>
</div>
  )
}

export default index
