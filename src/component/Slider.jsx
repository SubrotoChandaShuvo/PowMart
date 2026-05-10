import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
      <Swiper 
        navigation={true} 
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Navigation, Pagination, Autoplay]} 
        className="mySwiper rounded-2xl overflow-hidden shadow-2xl"
      >
        <SwiperSlide>
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="https://i.pinimg.com/1200x/97/78/1a/97781a0c73206bff1eab4aa6f8303ae0.jpg"
              alt="Cute dog"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
              <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-extrabold drop-shadow-xl text-center max-w-3xl leading-tight">
                Find Your Furry Friend Today!
              </h2>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="https://i.pinimg.com/1200x/63/21/a4/6321a41a1f3271970fa986a8f281628c.jpg"
              alt="Cute cat"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-start p-6 md:p-16">
              <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-extrabold drop-shadow-xl text-left max-w-2xl leading-tight">
                Adopt, Don’t Shop —<br className="hidden sm:block" /> Give a Pet a Home.
              </h2>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="https://i.postimg.cc/fRZ76CP9/amazed-dog-owner-pointing-his-cute-black-pug-smiling-happy-puppy-wearing-costume-white-background.jpg"
              alt="Happy pet owner"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-end p-6 md:p-16">
              <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-extrabold drop-shadow-xl text-right max-w-2xl leading-tight">
                Because Every Pet Deserves Love and Care.
              </h2>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Slider;
