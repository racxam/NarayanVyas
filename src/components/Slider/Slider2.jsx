import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import booksData from '../../data/booksData';
import SingleProduct from '../../components/Product';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

const sortedBooks = booksData.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));

const Slider2 = () => {
  // const loopEnabled = sortedBooks.length >= 7; // Enable loop only if there are at least 7 items
  const initialSlide = Math.floor(sortedBooks.length / 2)+1;
  return (
    <div className="d-flex row justify-content-center flex-col h-[900px] bg-[#6c34af]">

      <Swiper
        loop={true}
        initialSlide={initialSlide-1}
        centeredSlides={true}
        slidesPerView={'auto'}
        breakpoints={{
          320: {
            slidesPerView: 'auto',

          },
          480: {
            slidesPerView: 'auto',

          },
          640: {

            slidesPerView: '2',
            spaceBetween:"15px"

          },
          768: {

            slidesPerView: '3',
            spaceBetween:"15px"

          },
          1024: {
            slidesPerView: '4',
            spaceBetween:"15px",
            centeredSlides: true,
            
            
          },1400:{
            slidesPerView: '5',
            spaceBetween:"15px",
            centeredSlides: true,

            
          }
        }}
        freeMode={true}
        grabCursor={true}
        pagination={{ el: '.swiper-pagination2', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next2',
          prevEl: '.swiper-button-prev2',
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Navigation]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        <div className="row">
          {sortedBooks.map(book => (
            <SwiperSlide key={book.id} className="swiperSlide2">
              <div className="flex flex-col gap-6 mb-30 group relative shadow-sm rounded-xl px-6 py-8 h-[280px] w-[215px] lg:h-[520px] lg:w-[350px] overflow-hidden cursor-pointer" style={{ borderRadius: "10px" }}>
                {/* <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" /> */}
                <div className="relative flex flex-col gap-3">
                  <SingleProduct
                    Image={book.title.image}
                    Title={book.title.text}
                    Publisher={book.publisher}
                    Price={book.price}
                    Url={`books/${book.id}`}
                    isPublished={book.isPublished}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <div className="swiper-pagination2 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
    </div>
  );
};

export default Slider2;
