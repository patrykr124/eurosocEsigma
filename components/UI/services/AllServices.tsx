'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
import EncryptButton from '../EncryptButton'
import {ArrowRight} from 'lucide-react'
import {servicesData} from "@/constants/services";
import LeftSideBox from "@/components/UI/services/LeftSideBox";
import {motion} from "framer-motion";

export default function AllServices() {
    const BUTTON_CLASSES = "h5-link flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors justify-center w-64 relative z-10"
    const [switchTabs, setSwitchTabs] = useState('korzysci')
    return (
        <div className='common-padding ' style={{
            backgroundImage: `url("/assets/img/background.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }}>
            <div className="wrapper flex flex-col gap-16 items-end ">
                <div className="w-full flex justify-between">
                    <div className="">
                        <h2 className="h2-medium">Ochrona jednym kliknięciem</h2>
                    </div>

                    <div className=" relative flex w-fit  rounded-full  ">
                        <button onClick={() => setSwitchTabs('Abonamentowe')}
                                className={`${BUTTON_CLASSES}  ${switchTabs === 'Abonamentowe' ? ' text-white' : 'text-black'}`}>Abonamentowe
                        </button>
                        <button onClick={() => setSwitchTabs('Jednorazowe')}
                                className={`${BUTTON_CLASSES}   ${switchTabs === 'Jednorazowe' ? ' text-white' : 'text-black'}`}>Jednorazowe
                        </button>
                        <div
                            className={`absolute inset-0 flex ${switchTabs === "Abonamentowe" ? "justify-start" : "justify-end"}`}>
                            <motion.span layout transition={{type: "spring", damping: 15, stiffness: 250}}
                                         className={`h-full w-1/2 rounded-2xl ${switchTabs === "Abonamentowe" ? "bg-blue-1" : "bg-red-600"}`}/>
                        </div>
                    </div>
                </div>
                <div className="flex gap-16">
                    <div className="flex flex-1">
                        <LeftSideBox/>
                    </div>
                    <div className="flex flex-[2] ">
                        <div className="flex gap-20 flex-wrap justify-between">
                            {servicesData.map((item) => (
                                <Link
                                    className='group shadow-sm text-black flex w-[350px] h-[450px] rounded-xl overflow-hidden'
                                    href={item.url}>

                                    <div className="w-full relative bg-gray-2 ">
                                        <div className="top overflow-hidden ">
                                            <Image width={350} height={350}
                                                   className='object-cover group-hover:scale-110 transition-all duration-1000'
                                                   src='/assets/img/referencje.jpg' alt='monitoring'/>
                                        </div>
                                        <div className="bottom h-[220px] flex flex-col justify-between py-6 px-6 ">
                                            <h2 className='text-black p-regular-24 '>{item.title}</h2>
                                            <p className='h-10'>{item.title2}</p>
                                            <EncryptButton textData="Zapisz się" className="bg-blue-1 hover:bg-blue-1-hover w-fit text-sm mt-2"
                                                           icon={<ArrowRight/>}/>
                                        </div>
                                    </div>

                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
