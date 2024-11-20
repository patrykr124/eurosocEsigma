"use client"

import {useState} from 'react'
import AccordeonContentKorzysciRed from './AccordeonContentKorzysciRed'
import Image from 'next/image'
import AccordeonContentZagrozeniaRed from './AccordeonContentZagrozeniaRed'
import ZagrozeniaImg from '../../../../../public/assets/img/zagrozeniaImg.png'
import KorzysciImg from '../../../../../public/assets/img/korzysciImg.png'
import {motion} from 'framer-motion'
import TabsSwitches from "@/components/UI/TabsSwitches";
import {sectionAnimation} from "@/constants/animations/animation";


const BUTTON_CLASSES = "h5-link flex items-center gap-2  px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors justify-center lg:w-64 w-36 relative z-10"

const imageVariants = {
    hidden: {scale: 0.98, opacity: 0,},
    visible: {scale: 1, opacity: 1,},
}

function TabsRed() {
    const [switchTabs, setSwitchTabs] = useState('zagrozenia')


    let image = switchTabs === 'korzysci' ? KorzysciImg : ZagrozeniaImg

    return (
        <section id="dlaczegomy"
                 className={`common-padding  ${switchTabs === 'zagrozenia' ? "bg-black" : " "}`}>
            <motion.div variants={sectionAnimation} initial="hidden" whileInView="visible"
                 viewport={{once: true, amount: 0.5}}  className="wrapper">
                <div className="flex md:flex-row flex-col  gap-12">
                    <div className="left h-[500px] flex md:w-1/2 ">
                        <motion.div key={switchTabs} initial="hidden" animate="visible" variants={imageVariants}
                                    transition={{duration: 0.4}}
                                    exit="hidden"
                                    className="h-full w-full relative">

                            <Image
                                src={image}
                                layout="fill"
                                className={`h-full w-full rounded-2xl object-contain`}
                                alt="linear board demo"
                            />

                        </motion.div>
                    </div>
                    <div className="right flex flex-col gap-6 md:w-1/2">
                        <TabsSwitches textOtherColor="text-white" css={BUTTON_CLASSES} switchTabs={switchTabs} setSwitchTabs={setSwitchTabs}/>
                        <div className="">
                            {switchTabs === 'korzysci' ? <AccordeonContentKorzysciRed/> :
                                <AccordeonContentZagrozeniaRed/>}

                        </div>
                    </div>

                </div>
            </motion.div>
        </section>
    )
}

export default TabsRed