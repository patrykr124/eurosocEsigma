"use client"
import ReviewCart from '@/components/UI/ReviewCart';
import {ArrowLeft, ArrowRight} from 'lucide-react';
import {useRef} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {motion} from 'framer-motion';
import {sectionAnimation} from "@/constants/animations/animation";
import {opinieData} from "@/constants/opinieData";

function Opinie() {

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
        slidesToShow: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
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
                        <h2 className='titleFrame'>REFERENCJE</h2>
                        <h2 className='h2-medium-42 flex justify-center text-center'>Dołącz do grona naszych zadowolonych
                            klientów</h2>
                    </div>
                    <div className="slider-container space-y-5">
                        <Slider
                            ref={slider => {
                                sliderRef.current = slider;
                            }}
                            {...settings}
                        >
                            <ReviewCart title={opinieData[0].title} desc={opinieData[0].desc} author={opinieData[0].author} />
                            <ReviewCart title={opinieData[1].title} desc={opinieData[1].desc} author={opinieData[1].author} />
                            <ReviewCart title={opinieData[2].title} desc={opinieData[2].desc} author={opinieData[2].author} />
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