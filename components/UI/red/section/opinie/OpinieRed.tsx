"use client"
import ReviewCart from '@/components/UI/ReviewCart';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {sectionAnimation} from "@/constants/animations/animation";
import { motion } from 'framer-motion';
import {opinieData} from "@/constants/opinieData";

function OpinieRed() {

  const BUTTON_CSS = 'button bg-red-1 px-4 py-2 mr-4 rounded-xl shadow-md hover:bg-primary-blue-background transition-all duration-300 ease-in-out';

  let sliderRef2 = useRef<Slider | null>(null);
  const next = () => {
    sliderRef2.current?.slickNext();
  };
  const previous = () => {
    sliderRef2.current?.slickPrev();
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
          slidesToScroll: 2
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
    <div className="common-padding">
      <motion.div variants={sectionAnimation} initial="hidden" whileInView="visible"
           viewport={{once: true, amount: 0.5}} className='wrapper'>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col justify-center items-center">
            <h2 className='titleFrame-red'>REFERENCJE</h2>
            <h2 className='h2-medium-42 flex justify-center'>Dołącz do grona naszych zadowolonych klientów</h2>
          </div>
          <div className="slider-container space-y-5">
            <Slider
              ref={slider => {
                sliderRef2.current = slider;
              }}
              {...settings}
            >
              <ReviewCart title={opinieData[2].title} desc={opinieData[2].desc} author={opinieData[2].author} />
              <ReviewCart title={opinieData[3].title} desc={opinieData[3].desc} author={opinieData[3].author}/>
              <ReviewCart title={opinieData[4].title} desc={opinieData[4].desc} author={opinieData[4].author}/>
            </Slider>
            <div className='flex justify-end '>

              <button className={`${BUTTON_CSS}`} onClick={previous}>
                <ArrowLeft size={24} color='white' />
              </button>

              <button className={`${BUTTON_CSS}`} onClick={next}>
                <ArrowRight size={24} color='white' />
              </button>

            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default OpinieRed;