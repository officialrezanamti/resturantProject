'use client';
 import { Swiper , SwiperSlide } from "swiper/react";
 import 'swiper/css';
 import 'swiper/css/navigation';
 import 'swiper/css/pagination';
 
 import { Autoplay , Pagination ,Navigation } from "swiper/modules";
import { useRef } from "react";

export default function Header(){



    return(
        <header className="h-5/6 w-screen ">
            <div className=" header flex justify-end items-center ">
                <div className="text-white  w-[25%] h-[50%] ">
                    <Swiper
                       autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                     
                      modules={[Autoplay, Pagination, Navigation]}
                    className=" cursor-grab active:cursor-grabbing">
                        <SwiperSlide>
                            <h3 className="text-yellow-400 text-2xl mb-2">Hamburger</h3>
                            <p className="text-sm pr-8">The first hamburger in this town that is contain  delicios cow meat and it very well for dinner and lunch. If you wnat to taste it just login</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h3 className="text-yellow-400 text-2xl mb-2">Pizza</h3>
                            <p className="text-sm pr-8">The first hamburger in this town that is contain  delicios cow meat and it very well for dinner and lunch. If you wnat to taste it just login</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h3 className="text-yellow-400 text-2xl mb-2">Salad</h3>
                            <p className="text-sm pr-8">The first hamburger in this town that is contain  delicios cow meat and it very well for dinner and lunch. If you wnat to taste it just login</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h3 className="text-yellow-400 text-2xl mb-2">Drinks</h3>
                            <p className="text-sm pr-8">The first hamburger in this town that is contain  delicios cow meat and it very well for dinner and lunch. If you wnat to taste it just login</p>
                        </SwiperSlide>
                        
                    </Swiper>
                </div>

            </div>
        
            
        </header>
    )
}