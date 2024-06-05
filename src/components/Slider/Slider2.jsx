import { Swiper, SwiperSlide } from "swiper/react";
import booksData from '../../data/booksData';
import SingleProduct from '../../components/Product';
import { FreeMode, Navigation, Pagination } from "swiper";
import { RxArrowTopRight } from "react-icons/rx";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

const sortedBooks = booksData.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));

const Slider2 = () => {
  const loopEnabled = sortedBooks.length >= 7; // Enable loop only if there are at least 7 items

  return (
    <div className="flex items-center justify-center flex-col h-[900px] bg-[#6c34af]">
      <Swiper
        loop={loopEnabled}
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
        pagination={{ clickable: true }}
        navigation={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Navigation]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        <div className="row">
          {sortedBooks.map(book => (
            <SwiperSlide key={book.id} className="swiperSlide2">
              <div className="flex flex-col gap-6 mb-30 group relative shadow-lg rounded-xl px-6 py-8 h-[280px] w-[215px] lg:h-[520px] lg:w-[350px] overflow-hidden cursor-pointer" style={{ borderRadius: "10px" }}>
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
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
    </div>
  );
};

export default Slider2;
