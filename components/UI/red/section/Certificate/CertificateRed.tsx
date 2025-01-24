import Image from 'next/image'
import React from 'react'
import Slider from "react-slick";
import {useTranslations} from "use-intl";


function CertificateRed() {
    const t = useTranslations("certyfikaty");

    const settings = {
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 5,
        arrows: false,
        responsive: [
            {
                breakpoint: 760,
                settings: {
                    slidesToShow:3,
                    slidesToScroll: 1,
                }}
        ]

    };

    const CSS_SLIDER = '!flex items-center justify-center p-2  max-h-[150px] w-full';
    return (
        <div className='common-padding flex flex-col items-center justify-center bg-gray-2 pb-12'>
            <h2 className="titleFrame-red">{t("title1")}</h2>
            <div className="wrapper flex flex-col gap-12">
                <div className="text flex flex-col  justify-center items-center">
                    <h2 className='h2-medium-42'>{t("title2")}</h2>
                </div>
                <div className=" slider-container  md:gap-12 justify-center">

                    <Slider
                        {...settings}
                    >
                        <div className={CSS_SLIDER}>
                            <Image src='/assets/img/certyfikaty/gray/1.png' alt='certificate' width={185} height={185}/>
                        </div>
                        <div className={CSS_SLIDER}>
                            <Image src='/assets/img/certyfikaty/gray/2.png' alt='certificate' width={185} height={185}/>
                        </div>
                        <div className={CSS_SLIDER}>
                            <Image src='/assets/img/certyfikaty/gray/3.png' alt='certificate' width={185} height={185}/>
                        </div>

                        <div className={CSS_SLIDER}>
                            <Image src='/assets/img/certyfikaty/gray/4.png' alt='certificate' width={150} height={150}/>
                        </div>
                        <div className={CSS_SLIDER}>
                            <Image src='/assets/img/certyfikaty/gray/5.png' alt='certificate' width={150} height={150}/>
                        </div>
                        <div className={CSS_SLIDER}>
                            <Image src='/assets/img/certyfikaty/gray/6.png' alt='certificate' width={150} height={150}/>
                        </div>
                        <div className={CSS_SLIDER}>
                            <Image src='/assets/img/certyfikaty/gray/7.png' alt='certificate' width={180} height={180}/>
                        </div>
                        <div className={CSS_SLIDER}>
                            <Image src='/assets/img/certyfikaty/gray/8.png' alt='certificate' width={150} height={150}/>
                        </div>
                        <div className={CSS_SLIDER}>
                            <Image src='/assets/img/certyfikaty/gray/9.png' alt='certificate' width={145} height={150}/>
                        </div>
                        <div className={CSS_SLIDER}>
                            <Image src='/assets/img/certyfikaty/gray/10.png' alt='certificate' width={150}
                                   height={150}/>
                        </div>
                        <div className={CSS_SLIDER}>
                            <Image src='/assets/img/certyfikaty/gray/11.png' alt='certificate' width={150}
                                   height={150}/>
                        </div>
                    </Slider>
                </div>
            </div>

        </div>
    )
}

export default CertificateRed