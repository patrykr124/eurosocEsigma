'use client'
import Image from 'next/image';
import Slider from "react-slick";
import { useTranslations } from "use-intl";


function Certificate() {
    const t = useTranslations('certyfikaty');

    const settings = {

        infinite: true,
        speed: 3000,
        slidesToScroll: 1,
        slidesToShow: 5,
        arrows: false,
        autoplay: true,
        cssEase: 'linear',
        autoplaySpeed: 0,
        responsive: [
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]

    };

    const CSS_SLIDER = '!flex items-center justify-center px-10  max-h-[150px] w-full ';
    return (
        <div className='common-padding flex flex-col items-center justify-center bg-gray-2 pb-12'>
            <h2 className="titleFrame">{t("title1")}</h2>
            <div className="wrapper flex flex-col gap-12">
                <div className="text flex flex-col  justify-center items-center">
                    <h2 className='h2-medium-42'>{t("title2")}</h2>
                </div>
                <div className=" slider-container relative  md:gap-12 justify-center">
                    <div className="absolute top-0 right-0  w-12 h-full z-10 bg-gradient-to-r from-transparent to-gray-2"></div>
                    <div className="absolute top-0 left-0  w-12 h-full z-10 bg-gradient-to-l from-transparent to-gray-2"></div>
                    <Slider
                        {...settings}>
                        <div className={CSS_SLIDER}>
                            <Image src='/assets/img/certyfikaty/gray/1.png' alt='certificate' width={190} height={190} />
                        </div>
                        <div className={CSS_SLIDER}>
                            <Image src='/assets/img/certyfikaty/gray/2.png' alt='certificate' width={190} height={190} />
                        </div>
                        <div className={CSS_SLIDER}>
                            <Image src='/assets/img/certyfikaty/gray/3.png' alt='certificate' width={190} height={190} />
                        </div>

                        <div className={CSS_SLIDER}>
                            <Image src='/assets/img/certyfikaty/gray/4.png' alt='certificate' width={150} height={150} />
                        </div>
                        <div className={CSS_SLIDER}>
                            <Image src='/assets/img/certyfikaty/gray/5.png' alt='certificate' width={150} height={150} />
                        </div>
                        <div className={CSS_SLIDER}>
                            <Image src='/assets/img/certyfikaty/gray/6.png' alt='certificate' width={150} height={150} />
                        </div>
                        <div className={CSS_SLIDER}>
                            <Image src='/assets/img/certyfikaty/gray/7.png' alt='certificate' width={190} height={190} />
                        </div>
                        <div className={CSS_SLIDER}>
                            <Image src='/assets/img/certyfikaty/gray/8.png' alt='certificate' width={150} height={150} />
                        </div>
                        <div className={CSS_SLIDER}>
                            <Image src='/assets/img/certyfikaty/gray/9.png' alt='certificate' width={150} height={150} />
                        </div>
                        <div className={CSS_SLIDER}>
                            <Image src='/assets/img/certyfikaty/gray/10.png' alt='certificate' width={150}
                                height={150} />
                        </div>
                        <div className={CSS_SLIDER}>
                            <Image src='/assets/img/certyfikaty/gray/11.png' alt='certificate' width={150}
                                height={150} />
                        </div>
                    </Slider>
                </div>
            </div>

        </div>
    )
}

export default Certificate