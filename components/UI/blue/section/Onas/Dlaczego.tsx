'use client'

import React from 'react'
import Parciple from './Parciple'
import EncryptButton from '@/components/UI/EncryptButton'
import {motion} from 'framer-motion'
import CheckIcons from './CheckIcons'
import {useTranslations} from "use-intl";

export default function Dlaczego() {
    const t = useTranslations("dlaczego");
    return (
        <div className='common-padding bg-gray-2 '>
            <div className="wrapper">
                <div className="flex md:flex-row flex-col -my-20">
                    <div className="flex flex-col w-full md:w-1/2 justify-center ">
                        <div className="">
                            <motion.h2 initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}}
                                       viewport={{amount: 1,once:true}} transition={{duration: 0.4, ease: "easeOut"}} className='titleFrame'>{ t("h21")}
                            </motion.h2>
                        </div>
                        <div className="space-y-6 ">

                            <motion.h2 initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}}
                                       viewport={{amount: 1,once:true}} transition={{duration: 0.6, ease: "easeOut"}}
                                       className='h2-medium-42'>{ t("h22")}
                            </motion.h2>

                            <motion.p initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}}
                                      viewport={{amount: 1,once:true}} transition={{duration: 0.8, ease: "easeOut"}}>{t("p")}
                            </motion.p>
                            <div className="space-y-4">
                               <CheckIcons/>
                            </div>
                            <motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}}
                                        viewport={{amount: 1,once:true}} transition={{duration: 0.9, ease: "easeOut"}} className="">
                                <EncryptButton textData={t("button")}
                                               className="bg-blue-1 hover:bg-blue-1-hover w-fit"/>
                            </motion.div>
                        </div>
                    </div>
                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}}
                                viewport={{amount: 1,once:true}} transition={{duration: 1.2, ease: "easeOut"}} className="hidden lg:flex w-full md:w-1/2  justify-center p-2 mt-6 ">
                        <Parciple url="/assets/img/logoIcon.png"/>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
