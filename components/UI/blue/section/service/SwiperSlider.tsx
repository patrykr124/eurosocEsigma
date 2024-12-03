'use client'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import {Autoplay, EffectCoverflow, Navigation, Pagination} from "swiper";
import {SWIPER_DATA_BLUE} from "@/constants/SwiperData";
import {ArrowLeft, ArrowRight} from "lucide-react";
import {useEffect, useState} from "react";


export default function SwiperSlider() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [texts, setTexts] = useState<string[]>(SWIPER_DATA_BLUE.map((item) => item.title))

    const scrambleText = (text: string): string => {
        const CHARS = "011001001";
        return text
            .split("")
            .map((char) =>
                Math.random() > 0.8
                    ? CHARS[Math.floor(Math.random() * CHARS.length)]
                    : char
            )
            .join("");
    };

    useEffect(() => {
        let interval: number | null = null;
        let timeout: number | null = null;
        if (activeIndex !== null) {
            interval = window.setInterval(() => {
                setTexts((prevTexts) =>
                    prevTexts.map((text, index) =>
                        activeIndex === index
                            ? scrambleText(SWIPER_DATA_BLUE[index].title)
                            : SWIPER_DATA_BLUE[index].title
                    )
                );
            }, 100);
            timeout = window.setTimeout(() => {
                if (interval) window.clearInterval(interval);
                setTexts(SWIPER_DATA_BLUE.map((item) => item.title));
            }, 800);
        }

        return () => {
            if (interval) window.clearInterval(interval);
            if (timeout) window.clearTimeout(timeout);
        };
    }, [activeIndex]);


    return (
        <div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                loop={true}
                modules={[Pagination, Navigation, EffectCoverflow, Autoplay]}
                // autoplay={{delay: 2800, disableOnInteraction: false}}
                spaceBetween={0}
                slidesPerView={1.1}
                onSlideChange={(swiper) => {
                    setActiveIndex(swiper.realIndex)
                }}
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
                    modifier: 2.2,
                    slideShadows: false,

                }}
                className='swiper_container'

            >
                {SWIPER_DATA_BLUE.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div
                            className="w-full overflow-hidden h-[400px] rounded-xl relative flex justify-center items-center bg-black ">
                            <Image className=' rounded-xl w-[500px] object-cover' src={item.img} alt='services' fill/>
                            <div className="absolute max-w-[80%]">
                                <div className="overflow-hidden flex ">
                                    <h4 className={`${activeIndex === item.id ? 'opacity-1' : 'opacity-0'} transition-all duration-700   swiperHeaderText p-medium-32 text-center  text-white z-20`}>{texts[item.id]}</h4>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                <div className="slider-controler flex justify-center items-center">
                    <div className="swiper-button-prev slider-arrow">
                        <ArrowLeft className="arrow"/>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ArrowRight className="arrow"/>
                    </div>
                    <div className="swiper-pigination gap-2 flex justify-center items-center mt-4"></div>
                </div>
            </Swiper>
        </div>
    )
}
