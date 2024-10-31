"use client"

import {useState} from 'react'
import AccordeonContent from './AccordeonContentKorzysci'
import Image from 'next/image'
import AccordeonContentZagrozenia from './AccordeonContentZagrozenia'
import ZagrozeniaImg from '../../../../../public/assets/img/zagrozeniaImg.png'
import KorzysciImg from '../../../../../public/assets/img/korzysciImg.png'
import {motion} from 'framer-motion'

interface Tabs {
    e: string
    target: { id: string }
}


const BUTTON_CLASSES = "h5-link flex items-center gap-2  px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors justify-center lg:w-64 w-36 relative z-10"

const imageVariants = {
    hidden: {scale: 0.98, opacity: 0,},
    visible: {scale: 1, opacity: 1,},
}

function Tabs() {
    const [switchTabs, setSwitchTabs] = useState('korzysci')


    let image = switchTabs === 'korzysci' ? KorzysciImg : ZagrozeniaImg

    return (
        <section id="dlaczegomy"
                 className={`common-padding  ${switchTabs === 'zagrozenia' ? "bg-black" : " "}`}>
            <div className="wrapper">
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
                        <div className=" relative flex w-fit gap-6 lg:gap-0  items-center rounded-full  ">

                            <button onClick={() => setSwitchTabs('korzysci')}
                                    className={`${BUTTON_CLASSES}  ${switchTabs === 'korzysci' ? ' text-white' : 'text-white'}`}>KORZYŚCI
                            </button>
                            <button onClick={() => setSwitchTabs('zagrozenia')}
                                    className={`${BUTTON_CLASSES}   ${switchTabs === 'zagrozenia' ? ' text-white' : 'text-black'}`}>ZAGROŻENIA
                            </button>


                            <div
                                className={`absolute inset-0 flex ${switchTabs === "korzysci" ? "justify-start" : "justify-end"}`}>
                                <motion.span layout transition={{type: "spring", damping: 15, stiffness: 250}}
                                             className={`h-full w-1/2 rounded-xl ${switchTabs === "korzysci" ? "bg-blue-1" : "bg-red-600"}`}/>
                            </div>
                        </div>


                        <div className="">
                            {switchTabs === 'korzysci' ? <AccordeonContent/> : <AccordeonContentZagrozenia/>}

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Tabs