"use client"
import ReviewCart from '@/components/UI/ReviewCart';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    slidesToShow: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
    <div className="common-padding bg-gray-3">
      <div className='wrapper'>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col justify-center items-center">
            <h2 className='titleFrame'>REFERENCJE</h2>
            <h2 className='h2-medium-42 flex justify-center'>Dołącz do grona naszych zadowolonych klientów</h2>
          </div>
          <div className="slider-container space-y-5">
            <Slider
              ref={slider => {
                sliderRef.current = slider;
              }}
              {...settings}
            >
              <ReviewCart />
              <ReviewCart />
              <ReviewCart />
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
      </div>
    </div>
  )
}

export default Opinie