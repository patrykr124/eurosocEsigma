"use client"

import { useState } from 'react'
import AccordeonContent from './AccordeonContentKorzysci'
import Image from 'next/image'
import AccordeonContentZagrozenia from './AccordeonContentZagrozenia'
import ZagrozeniaImg from '../../../../../public/assets/img/hacker.jpg'
import KorzysciImg from '../../../../../public/assets/img/korzysci1.jpg'
import { motion } from 'framer-motion'

interface Tabs {
    e: string
    target: { id: string }
}


const BUTTON_CLASSES = "h5-link flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors justify-center w-64 relative z-10"

function Tabs() {
    const [switchTabs, setSwitchTabs] = useState('korzysci')


    let image = switchTabs === 'korzysci' ? KorzysciImg : ZagrozeniaImg

    return (
        <section className={`common-padding transition-all duration-500 ${switchTabs === 'zagrozenia' ? "bg-black" : " "}`}>
            <div className="wrapper">
                <div className="flex gap-12">
                    <div className="left h-[500px] flex w-1/2">
                        <Image
                            src={image}
                            width={800}
                            height={800}
                            className="h-full w-full rounded-2xl object-cover"
                            alt="linear board demo"
                        /></div>
                    <div className="right flex flex-col gap-6 w-1/2">
                        <div className=" relative flex w-fit  items-center rounded-full  ">

                            <button onClick={() => setSwitchTabs('korzysci')} className={`${BUTTON_CLASSES}  ${switchTabs === 'korzysci' ? ' text-white' : 'text-white'}`}>Korzyści</button>
                            <button onClick={() => setSwitchTabs('zagrozenia')} className={`${BUTTON_CLASSES}   ${switchTabs === 'zagrozenia' ? ' text-white' : 'text-black'}`}>Zagrożenia</button>


                            <div className={`absolute inset-0 flex ${switchTabs === "korzysci" ? "justify-start" : "justify-end"}`}>
                                <motion.span layout transition={{ type: "spring", damping: 15, stiffness: 250 }}
                                    className={`h-full w-1/2 rounded-2xl ${switchTabs === "korzysci" ? "bg-secondary-blue" : "bg-red-600"}`} />
                            </div>
                        </div>



                        <div className="">
                            {switchTabs === 'korzysci' ? <AccordeonContent /> : <AccordeonContentZagrozenia />}

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Tabs