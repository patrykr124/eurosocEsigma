'use client'
import {CheckCheckIcon} from 'lucide-react'
import React from 'react'
import ParcipleRed from './ParcipleRed'
import EncryptButton from '@/components/UI/EncryptButton'
import EncryptButtonRed from "@/components/UI/EncryptButtonRed";
import {sectionAnimation} from "@/constants/animations/animation";
import { motion } from 'framer-motion'
import {useTranslations} from "use-intl";

export default function DlaczegoRed() {
    const t = useTranslations("dlaczego");
    return (
        <div className='common-padding bg-gray-2 '>
            <motion.div variants={sectionAnimation} initial="hidden" whileInView="visible"
                        viewport={{once: true, amount: 0.5}} className="wrapper">
                <div className="flex md:flex-row flex-col">
                    <div className="flex flex-col w-full md:w-1/2 justify-center">
                        <div className="">
                            <h2 className='titleFrame-red'>{t("h21")}</h2>
                        </div>
                        <div className="space-y-6">
                            <h2 className='h2-medium-42'>{t("h22")}</h2>
                            <p>{t("p")}</p>
                            <div className="space-y-4">
                                <div className="flex gap-2 ">
                                    <CheckCheckIcon size={28} color='red'/> <p className='font-bold'>{t("checkIcon1")}</p>
                                </div>
                                <div className="flex gap-2 ">
                                    <CheckCheckIcon size={28} color='red'/> <p className='font-bold'>{t("checkIcon2")}</p>
                                </div>
                                <div className="flex gap-2 ">
                                    <CheckCheckIcon size={28} color='red'/> <p className='font-bold'>{t("checkIcon3")}</p>
                                </div>
                            </div>
                            <EncryptButtonRed onClick="" textData={t("button")}  className="bg-red-1 hover:bg-red-1-hover w-fit"/>
                        </div>
                    </div>
                    <div className="hidden lg:flex w-full md:w-1/2   justify-center p-2">
                        <ParcipleRed url="/assets/img/logoRed.png"/>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
