"use client"
import ReviewCart from '@/components/UI/ReviewCart';
import {ArrowLeft, ArrowRight} from 'lucide-react';
import {useRef} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {motion} from 'framer-motion';
import {sectionAnimation} from "@/constants/animations/animation";
import {opinieData, opinieData_EN} from "@/constants/opinieData";
import {useLocale, useTranslations} from "use-intl";

function Opinie() {
    const t = useTranslations('opinie')
    const locale = useLocale();
    const opinieLocalData = locale === "pl" ? opinieData : opinieData_EN

    const BUTTON_CSS = 'button bg-blue-1 px-4 py-2 mr-4 rounded-xl shadow-md hover:bg-primary-blue-background transition-all duration-300 ease-in-out';

    let sliderRef = useRef<Slider | null>(null);
    const next = () => {
        sliderRef.current?.slickNext();
    };
    const previous = () => {
        sliderRef.current?.slickPrev();
    };
    const settings = {

        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };


    return (
        <div className="common-padding bg-gray-3">
            <motion.div variants={sectionAnimation} initial="hidden" whileInView="visible"
                        viewport={{once: true, amount: 0.5}} className='wrapper'>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col justify-center items-center">
                        <h2 className='titleFrame'>{t('title1')}</h2>
                        <h2 className='h2-medium-42 flex justify-center text-center'>{t('h2')}
                        </h2>
                    </div>
                    <div className="slider-container space-y-5">
                        <Slider
                            ref={slider => {
                                sliderRef.current = slider;
                            }}
                            {...settings}
                        >
                            <ReviewCart title={opinieLocalData[0].title} desc={opinieLocalData[0].desc} author={opinieLocalData[0].author} />
                            <ReviewCart title={opinieLocalData[1].title} desc={opinieLocalData[1].desc} author={opinieLocalData[1].author} />
                            <ReviewCart title={opinieLocalData[2].title} desc={opinieLocalData[2].desc} author={opinieLocalData[2].author} />
                        </Slider>
                        <div className='flex justify-end '>

                            <button className={`${BUTTON_CSS}`} onClick={previous}>
                                <ArrowLeft size={24} color='white'/>
                            </button>

                            <button className={`${BUTTON_CSS}`} onClick={next}>
                                <ArrowRight size={24} color='white'/>
                            </button>

                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Opinie