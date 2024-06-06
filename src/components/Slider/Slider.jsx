import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import cfcData from '../../data/callForChaptersBooksData';
import CallForChaptersImageOnly from '../../components/CallForChapters/call_for_chapters_image_only';
const sortedCfcData = cfcData.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));

function Slider1() {
  return (
    <div className="container1">
      <div className="row">

        <Swiper


          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView='auto'
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,

          }}
          breakpoints={{
            320: {
              slidesPerView: 'auto',

            },
            480: {
              slidesPerView: 'auto',

            },
            640: {
              slidesPerView: 'auto',

            },
            768: {
              slidesPerView: 'auto',

            },
            1024: {
              slidesPerView: 5,


          },
        }}
         
         

          pagination={{ el: '.swiper-pagination1', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container1"
        >
          {/* <SwiperSlide className='swiperslide1'
        >
        <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className='swiperslide1'>
        <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide >
        <SwiperSlide className='swiperslide1'>
        <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className='swiperslide1'>
        <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className='swiperslide1'>
        <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className='swiperslide1'>
        <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className='swiperslide1'>
        <img src={slide_image_7} alt="slide_image" />
      </SwiperSlide> */}






          {sortedCfcData.map(book => (
            <SwiperSlide key={book.id} className={"swiperslide1"}>

              <CallForChaptersImageOnly
                Image={book.title.image}
                Title={book.title.text}
                Publisher={book.publisher}
                Price={book.price}
                Url={`call-for-chapters/${book.id}`}
              />


            </SwiperSlide>
          ))}


          <div className="slider-controler1">
            <div className="swiper-button-prev slider-arrow">
              <i class="far fa-arrow-left"></i>
            </div>
            <div className="swiper-button-next slider-arrow">
              <i class="far fa-arrow-right"></i>
            </div>
            <div className="swiper-pagination1 .swiper-pagination-bullet .swiper-pagination-bullet-active"></div>
          </div>




        </Swiper>
      </div>
    </div>
  );
}



export default Slider1
