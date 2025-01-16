import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import { useState } from "react";

export default () => {
  const [data, setData] = useState([
    {
      image: "/clients/dashmesh-logo.png",
    },
    {
      image: "/clients/pdc-logo.png",
    },
    {
      image: "/clients/amber-logo.png",
    },
    {
      image: "/clients/jagat-logo.webp",
    },
    {
      image: "/clients/bir-logo.png",
    },
    {
      image: "/clients/avtar-logo.png",
    },
    
  ]);

  return (
    <>
      {" "}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: "20px",
          },
          425: {
            slidesPerView: 2,
            spaceBetween: "20px",
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: "20px",
          },
        }}
        //   onSlideChange={() => console.log('slide change')}
        //   onSwiper={(swiper) => console.log(swiper)}
      >
        {data?.map((brand, i) => (
          <SwiperSlide
            key={i}
            className="py-4 flex items-center justify-center"
          >
            <div className="flex w-full items-center justify-center">
              <img
                className="w-[150px] h-[150px] object-contain object-center"
                src={brand?.image}
                alt="..."
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
