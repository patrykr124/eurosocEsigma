'use client'
import {CheckCheckIcon} from 'lucide-react'
import React from 'react'
import Parciple from './Parciple'
import EncryptButton from '@/components/UI/EncryptButton'
import {motion} from 'framer-motion'

export default function Dlaczego() {
    return (
        <div className='common-padding bg-gray-2 '>
            <div className="wrapper">
                <div className="flex md:flex-row flex-col">
                    <div className="flex flex-col w-full md:w-1/2 justify-center">
                        <div className="">
                            <motion.h2 initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}}
                                       viewport={{amount: 1,once:true}} transition={{duration: 0.4, ease: "easeOut"}} className='titleFrame'>O NAS
                            </motion.h2>
                        </div>
                        <div className="space-y-6 ">

                            <motion.h2 initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}}
                                       viewport={{amount: 1,once:true}} transition={{duration: 0.6, ease: "easeOut"}}
                                       className='h2-medium-42'>Wiodąca pozycja w zakresie rozwiązań i innowacji w
                                zakresie
                                cyberbezpieczeństwa
                            </motion.h2>

                            <motion.p initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}}
                                      viewport={{amount: 1,once:true}} transition={{duration: 0.8, ease: "easeOut"}}>EUROSOC dostarcza innowacyjne
                                rozwiązania w zakresie cyberbezpieczeństwa, chroniąc
                                Twój
                                cyfrowy świat dzięki specjalistycznej wiedzy, zaangażowaniu i spersonalizowanemu
                                podejściu.
                            </motion.p>
                            <div className="space-y-4">
                                <motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}}
                                            viewport={{amount: 1,once:true}} transition={{duration: 0.7, ease: "easeOut"}} className="flex gap-2 ">
                                    <CheckCheckIcon size={28} color='blue'/> <p className='font-bold'>Innowacyjne
                                    rozwiązania w zakresie cyberbezpieczeństwa dla współczesnych zagrożeń </p>
                                </motion.div>
                                <motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}}
                                            viewport={{amount: 1,once:true}} transition={{duration: 0.8, ease: "easeOut"}} className="flex gap-2 ">
                                    <CheckCheckIcon size={28} color='blue'/> <p className='font-bold'>Zespoły ekspertów
                                    zaangażowane w Twoje bezpieczeństwo </p>
                                </motion.div>
                                <motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}}
                                            viewport={{amount: 1,once:true}} transition={{duration: 0.85, ease: "easeOut"}}
                                            className="flex gap-2 ">
                                    <CheckCheckIcon size={28} color='blue'/> <p className='font-bold'>Silne partnerstwo
                                    na rzecz niezrównanej cyberobrony </p>
                                </motion.div>
                            </div>
                            <motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}}
                                        viewport={{amount: 1,once:true}} transition={{duration: 0.9, ease: "easeOut"}} className="">
                                <EncryptButton textData="Zabezpiecz się"
                                               className="bg-blue-1 hover:bg-blue-1-hover w-fit"/>
                            </motion.div>
                        </div>
                    </div>
                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}}
                                viewport={{amount: 1,once:true}} transition={{duration: 1.2, ease: "easeOut"}} className="hidden lg:flex w-full md:w-1/2   justify-center p-2 mt-6 ">
                        <Parciple url="/assets/img/logoIcon.png"/>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
