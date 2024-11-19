import {Autoplay, EffectCoverflow, Navigation, Pagination} from '@/node_modules/swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {ArrowLeft, ArrowRight} from 'lucide-react';
import Image from 'next/image';


export default function SwiperSliderRed() {

    return (
        <div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                loop={true}
                modules={[Pagination, Navigation, EffectCoverflow, Autoplay]}
                autoplay={{delay: 2800, disableOnInteraction: false}}
                spaceBetween={0}
                slidesPerView={1.1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                        centeredSlides: false,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                        centeredSlides: true,
                    },

                }}
                pagination={{el: ".swiper-pigination", clickable: true}}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',

                }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 10,
                    depth: 200,
                    modifier: 2,
                    slideShadows: false,

                }}
                className='swiper_container'

            >
                <SwiperSlide>
                    <div className="w-full h-[400px] rounded-xl relative flex justify-center items-center bg-black ">
                        <Image className=' rounded-xl w-[500px] object-cover' src='/assets/img/services/auditServices.png' alt='services'
                               fill/>
                        <h4 className="absolute p-medium-32 p-8 text-center text-white z-20">kompleksowe usługi audytorskie</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[400px] rounded-xl relative flex justify-center items-center bg-black">
                        <Image className=' rounded-xl w-[500px] object-cover' src='/assets/img/services/courseServices.png'
                               alt='services' fill/>
                        <h4 className="absolute p-medium-32 p-8 text-center text-white z-20">profesjonalne szkolenia z cyberbezpieczeństwa</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[400px] rounded-xl relative flex justify-center items-center bg-black">
                        <Image className=' rounded-xl w-[500px] object-cover' src='/assets/img/services/help.png'
                               alt='services' fill/>
                        <h4 className="absolute p-medium-32 p-8 text-center text-white z-20">skany podatności i testy bezpieczeństwa fizycznego</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[400px] rounded-xl relative flex justify-center items-center bg-black">
                        <Image className=' rounded-xl w-[500px] object-cover' src='/assets/img/services/dds.png'
                               alt='services' fill/>
                        <h4 className="absolute p-medium-32 p-8 text-center text-white z-20">testy penetracyjne i DDoS</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[400px] rounded-xl relative flex justify-center items-center bg-black">
                        <Image className=' rounded-xl w-[500px] object-cover' src='/assets/img/services/iii.png' alt='services'
                               fill/>
                        <h4 className="absolute p-medium-32 p-8 text-center text-white z-20">cykliczne testy socjotechniczne i III linia wsparcia</h4>
                    </div>
                </SwiperSlide>


                <div className="slider-controler red flex justify-center items-center">
                    <div className="swiper-button-prev slider-arrow">
                        <ArrowLeft className='arrow'/>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ArrowRight className='arrow'/>
                    </div>
                    <div className="swiper-pigination gap-2 flex justify-center items-center mt-4"></div>
                </div>
            </Swiper>
        </div>
    )
}
