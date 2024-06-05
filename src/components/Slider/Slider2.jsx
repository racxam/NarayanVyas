import { Swiper, SwiperSlide } from "swiper/react";
import booksData from '../../data/booksData';
import SingleProduct from '../../components/Product';
import { FreeMode,Navigation, Pagination } from "swiper";
import { RxArrowTopRight } from "react-icons/rx";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
const sortedBooks = booksData.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));





const Slider2 = () => {
  return (
    <div className="flex items-center justify-center flex-col h-[900px] bg-[#6c34af]">
      <Swiper
        loop={true}
        autoplay= {{
          enabled: true,
          speed: 1000,
      }}
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        grabCursor={true}
        pagination={{  clickable: true }}
        navigation={{
          
          clickable: true,
        }}
        modules={[FreeMode, Pagination,Navigation]}
        className="max-w-[90%] lg:max-w-[80%]"
      >


        {/* {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">

              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />

              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                <h1 className="text-xl lg:text-2xl">{item.title} </h1>
                <p className="lg:text-[18px]">{item.content} </p>
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>



        ))} */}

        <div className="row">


          {sortedBooks.map(book => (

            <SwiperSlide key={book.id}
            className="swiperSlide2"
            
            >
              <div className="flex flex-col gap-6 mb-30 group relative rounded-xl px-6 py-8 h-[280px] w-[215px] lg:h-[520px] lg:w-[350px] overflow-hidden cursor-pointer"
              style={{borderRadius:"10px"}}
              >
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                <div className="relative flex flex-col gap-3" 
           
                >
                  {/* <book.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" /> */}

                  <SingleProduct
                    Image={book.title.image}
                    Title={book.title.text}
                    Publisher={book.publisher}
                    Price={book.price}
                    Url={`books/${book.id}`}
                  />
                </div>

          
              </div>
              

            </SwiperSlide>
          ))}



        </div>
        {/* <div className="slider-controler2">
          <div className="swiper-button-prev2 slider-arrow">
            <i class="far fa-arrow-left"></i>
          </div>
          <div className="swiper-button-next2 slider-arrow">
            <i class="far fa-arrow-right"></i>
          </div>
          <div className="swiper-pagination2 .swiper-pagination-bullet .swiper-pagination-bullet-active"></div>
        </div> */}
      </Swiper>
    </div>
  );
};



export default Slider2;
