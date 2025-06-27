import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function Banner() {
  return (
   <div className="bg-background dark:bg-dark-background">
     <div className=" h-[calc(100vh-60px)] md:h-[400px]    md:px-8 lg:px-0">
      <Swiper
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper h-full"
      >
        <SwiperSlide>
            <div className="grid px-5 md:grid-cols-2 items-center md:justify-between max-w-6xl mx-auto">
                <div className="lg:ml-20 text-center md:text-left w-full">
                    <h2 className="font-ReemKufi text-[30px] md:text-[50px] text-stone-700 dark:text-white md:leading-[60px] font-medium">Grow with <br className="hidden md:block"/> Confidence</h2>
                    <p className="text-base md:text-lg mt-5 text-stone-500 dark:text-gray-400 text-center md:text-left">Track watering, fertilizing, and health — your plants deserve the best care.</p>
                </div>

                <div className="row-start-1 md:row-start-auto">
                    <img className=" mx-auto md:mx-0 h-[350px] object-contain lg:w-auto lg:ml-auto  md:h-[400px] " src="https://i.ibb.co/NgbG0P18/tree.png" alt="" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className="grid px-5 md:grid-cols-2 items-center md:justify-between max-w-6xl mx-auto">
                <div className="lg:ml-20 text-center w-full md:text-left">
                   <h2 className="font-ReemKufi text-[30px] dark:text-white md:text-[50px] text-stone-700 md:leading-[60px] font-medium">Your Plant’s Personal Assistant</h2>
                    <p className="text-lg mt-5 text-stone-500 text-center dark:text-gray-400 md:text-left">Simplify plant care with smart reminders and personalized schedules.</p>
                </div>

                 <div className="row-start-1 md:row-start-auto">
                    <img  className=" mx-auto md:mx-0 object-contain h-[350px] lg:w-auto lg:ml-auto  md:h-[400px] " src="https://i.ibb.co/qYc2ygY4/zz-plant-gray-pot-removebg-preview.png" alt="" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
             <div className="grid px-5 md:grid-cols-2 items-center md:justify-between max-w-6xl mx-auto">
                <div className="lg:ml-20 text-center w-full md:text-left">
                   <h2 className="font-ReemKufi text-[30px] md:text-[50px] dark:text-white text-stone-700 md:leading-[60px] font-medium">Healthy Plants, <br className="hidden md:block"/> Happy Life</h2>
                    <p className="text-base md:text-lg mt-5 text-stone-500 dark:text-gray-400 text-center md:text-left">Monitor every detail and keep your indoor garden thriving year-round.</p>
                </div>

                 <div className="row-start-1 md:row-start-auto">
                    <img  className=" mx-auto md:mx-0 object-contain h-[350px] lg:w-auto lg:ml-auto  md:h-[400px] " src="https://i.ibb.co/JRXYknxc/peace-lily-plant-white-pot-removebg-preview.png" alt="" />
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
   </div>
  );
}
