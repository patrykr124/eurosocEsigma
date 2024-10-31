'use client'
import EncryptButton from '@/components/UI/EncryptButton';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import SliderCart from './SliderCart';
import SwiperSlider from './SwiperSlider';



function Services() {



    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    const [randomString, setRandomString] = useState("");

    useEffect(() => {
        let str = generateRandomString(1500);
        setRandomString(str);
    }, []);




    function onMouseMove({ currentTarget, clientX, clientY }: any) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);

        const str = generateRandomString(6000);
        setRandomString(str);
    }





    return (
        <div style={{ backgroundImage: `url("/assets/img/background.png")`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className="bg-gray-2">
            <div  className="box flex flex-col items-center gap-20 rounded-xl  pb-8">
                <div  onMouseMove={onMouseMove} className="-mt-36 bg-white relative rounded-3xl shadow-lg w-full xl:w-[1400px] py-8 pb-12 overflow-hidden group/box">
                    <BoxAnimationHover mouseX={mouseX} mouseY={mouseY} randomString={randomString} />
                    <div className="wrapper gap-16 flex flex-col ">
                        <div className="text justify-between flex flex-row gap-12 ">
                            <div className="flex-1 z-10">
                                <h2 className='titleFrame'>O NAS</h2>
                                <h2 className='h2-medium-42'>Co zyskasz dzięki EUROSOC?</h2>
                            </div>
                            <div className="links flex flex-col md:flex-row justify-end items-end mb-4 gap-8 flex-1 z-10">
                                <EncryptButton textData="Usługi abonamentowe" icon={<ArrowRight />} className="bg-blue-1 hover:bg-blue-1-hover" />
                                <EncryptButton textData="Usługi jednorazowe" icon={<ArrowRight />} className="bg-blue-1 hover:bg-blue-1-hover" />

                            </div>
                        </div>

                        {/* <SliderCart /> */}
                        <SwiperSlider />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services


export function BoxAnimationHover({ mouseX, mouseY, randomString }: any) {

    let maskImage = useMotionTemplate`radial-gradient(100px at ${mouseX}px ${mouseY}px, white, transparent)`;
    let style = { maskImage, WebkitMaskImage: maskImage };
    return (
        <div className="pointer-events-none ">

            <motion.div
                className="absolute inset-0 rounded-2xl bg-grey-400 opacity-0  group-hover/box:opacity-100 backdrop-blur-xl transition duration-500"
                style={style}
            />
            <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay group-hover/box:opacity-100"
                style={style}
            >
                <p className="absolute inset-0 text-sm h-full w-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
                    {randomString}
                </p>
            </motion.div>
        </div>
    )
}


const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const generateRandomString = (length: number) => {
    let result = "";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};