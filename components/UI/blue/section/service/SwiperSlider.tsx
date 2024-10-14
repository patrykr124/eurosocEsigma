
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';


export default function SwiperSlider() {

    return (
        <div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                loop={true}
                modules={[Pagination, Navigation, EffectCoverflow, Autoplay]}
                // autoplay={{ delay: 2500, disableOnInteraction: false }}
                spaceBetween={0}
                centeredSlides={true}
                slidesPerView={3}
                pagination={{ el: ".swiper-pigination", clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
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
                        <Image className=' rounded-xl w-[500px] object-cover' src='/assets/img/open.png' alt='services' fill />
                        <h4 className="absolute p-medium-32 p-8 text-center text-white z-20">Wdrożenia komercyjne i Open Source</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[400px] rounded-xl relative flex justify-center items-center bg-black">
                        <Image className=' rounded-xl w-[500px] object-cover' src='/assets/img/szkolenie.png' alt='services' fill />
                        <h4 className="absolute p-medium-32 p-8 text-center text-white z-20">Szkolenia z zakresu cyberbezpieczeństwa</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[400px] rounded-xl relative flex justify-center items-center bg-black">
                        <Image className=' rounded-xl w-[500px] object-cover' src='/assets/img/servicesMonitoring.png' alt='services' fill />
                        <h4 className="absolute p-medium-32 p-8 text-center text-white z-20">Monitorowanie infrastruktury w trybie ciągłym / SOC</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[400px] rounded-xl relative flex justify-center items-center bg-black">
                        <Image className=' rounded-xl w-[500px] object-cover' src='/assets/img/wsparcie.png' alt='services' fill />
                        <h4 className="absolute p-medium-32 p-8 text-center text-white z-20">II linia wsparcia technicznego </h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[400px] rounded-xl relative flex justify-center items-center bg-black">
                        <Image className=' rounded-xl w-[500px] object-cover' src='/assets/img/kopia.png' alt='services' fill />
                        <h4 className="absolute p-medium-32 p-8 text-center text-white z-20">odmiejscowienie kopi zapasowych</h4>
                    </div>
                </SwiperSlide>





                <div className="slider-controler flex justify-center items-center">
                    <div className="swiper-button-prev slider-arrow">
                        <ArrowLeft className='arrow' />
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ArrowRight className='arrow' />
                    </div>
                    <div className="swiper-pigination gap-2 flex justify-center items-center mt-4"></div>
                </div>
            </Swiper>
        </div>
    )
}
