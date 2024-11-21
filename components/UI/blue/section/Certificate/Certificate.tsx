'use client'
import Image from 'next/image'
import React from 'react'
import Slider from "react-slick";


function Certificate() {

    const settings = {

        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 4,
        arrows: false,
        responsive: [
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }}
        ]

    };

    const CSS_SLIDER = '!flex items-center justify-center p-2  min-h-[100px] max-h-[100px]';
    return (
        <div className='common-padding flex flex-col items-center justify-center bg-gray-2 pb-12'>
            <h2 className="titleFrame">CERTYFIKATY</h2>
            <div className="wrapper flex flex-col gap-12">
                <div className="text flex flex-col  justify-center items-center">
                    <h2 className='h2-medium-42'>Nasze certyfikaty</h2>
                    <p className='max-w-2xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                        provident autem! Culpa pariatur dolorem ad officia aut modi minus quae.</p>
                </div>
                <div className=" slider-container  md:gap-12 justify-center">

                    <Slider
                        {...settings}
                    >
                        <div className={CSS_SLIDER}>
                            <Image src='/assets/img/nask.png' alt='certificate' width={200} height={200}/>
                        </div>
                        <div className={CSS_SLIDER}>
                            <Image src='/assets/img/exatel.png' alt='certificate' width={200} height={200}/>
                        </div>
                        <div className={CSS_SLIDER}>
                            <Image src='/assets/img/certificate/hyp.png' className="object-contain" alt='certificate'
                                   width={280} height={200}/>
                        </div>

                        <div className={CSS_SLIDER}>
                            <Image src='/assets/img/certificate/adva.svg' alt='certificate' width={220}
                                   height={200}/>
                        </div>
                    </Slider>
                </div>
            </div>

        </div>
    )
}

export default Certificate