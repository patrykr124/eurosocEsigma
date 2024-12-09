'use client'
import EncryptButton from '@/components/UI/EncryptButton';
import {useMotionValue} from 'framer-motion';
import {ArrowRight} from 'lucide-react';
import {useEffect, useState} from 'react';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import SwiperSlider from './SwiperSlider';
import {BoxAnimationHover} from "@/components/UI/BoxAnimationHover";
import {generateRandomString} from "@/components/UI/evervault-card";
import {useTranslations} from "use-intl";


function Services() {
    const t = useTranslations("services")

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    const [randomString, setRandomString] = useState("");

    useEffect(() => {
        let str = generateRandomString(1500);
        setRandomString(str);
    }, [100]);


    function onMouseMove({currentTarget, clientX, clientY}: any) {
        let {left, top} = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);

        const str = generateRandomString(6000);
        setRandomString(str);
    }


    return (
        <div style={{
            backgroundImage: `url("/assets/img/background.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }} className="bg-gray-2">
            <div className="box flex flex-col items-center gap-20 rounded-xl  pb-8">
                <div onMouseMove={onMouseMove}
                     className="-mt-36 bg-white relative rounded-3xl shadow-lg w-full xl:w-[1400px] py-8 pb-12 overflow-hidden group/box">
                    <BoxAnimationHover mouseX={mouseX} mouseY={mouseY} randomString={randomString}/>
                    <div className="wrapper lg:gap-16 flex flex-col ">
                        <div className="text justify-between flex md:flex-row flex-col lg:gap-12 gap-4 ">
                            <div className="flex-1 z-10 flex flex-col items-center md:items-start ">
                                <h2 className='titleFrame'>{t("h21")}</h2>
                                <h2 className='h2-medium-42 text-center md:text-start'>{t("h22")}</h2>
                            </div>
                            <div className="links flex flex-row justify-end items-end mb-4 gap-8 flex-1 z-10">
                                <EncryptButton textData={t("encrypt1")} icon={<ArrowRight/>}
                                               className="bg-blue-1 hover:bg-blue-1-hover"/>
                            </div>
                        </div>
                        <SwiperSlider/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services


