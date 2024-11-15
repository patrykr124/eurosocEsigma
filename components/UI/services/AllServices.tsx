'use client'
import React, {useState} from 'react'
import LeftSideBox from "@/components/UI/services/LeftSideBox";
import {motion} from "framer-motion";
import RightSideBox from "@/components/UI/services/RightSideBox";

export default function AllServices() {
    const BUTTON_CLASSES = "h5-link flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors justify-center w-64 relative z-10"
    const [switchTabs, setSwitchTabs] = useState('Jednorazowe')
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
                <div className="flex gap-8">
                    <div className="flex flex-1">
                        <LeftSideBox/>
                    </div>
                    <div className="flex flex-[3] ">
                        <RightSideBox/>
                    </div>
                </div>
            </div>
        </div>
    )
}
