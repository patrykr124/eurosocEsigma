'use client'
import {CheckCheckIcon} from 'lucide-react'
import React from 'react'
import Parciple from './Parciple'
import EncryptButton from '@/components/UI/EncryptButton'
import {motion} from 'framer-motion'
import {sectionAnimation} from "@/constants/animations/animation";

export default function Dlaczego() {
    return (
        <div className='common-padding bg-gray-2 '>
            <motion.div variants={sectionAnimation} initial="hidden" whileInView="visible"
                        viewport={{once: true, amount: 0.5}} className="wrapper">
                <div className="flex md:flex-row flex-col">
                    <div className="flex flex-col w-full md:w-1/2 justify-center">
                        <div className="">
                            <h2 className='titleFrame'>O NAS</h2>
                        </div>
                        <div className="space-y-6">
                            <h2 className='h2-medium-42'>Wiodąca pozycja w zakresie rozwiązań i innowacji w zakresie
                                cyberbezpieczeństwa </h2>
                            <p>EUROSOC dostarcza innowacyjne rozwiązania w zakresie cyberbezpieczeństwa, chroniąc Twój
                                cyfrowy świat dzięki specjalistycznej wiedzy, zaangażowaniu i spersonalizowanemu
                                podejściu. </p>
                            <div className="space-y-4">
                                <div className="flex gap-2 ">
                                    <CheckCheckIcon size={28} color='blue'/> <p className='font-bold'>Innowacyjne
                                    rozwiązania w zakresie cyberbezpieczeństwa dla współczesnych zagrożeń </p>
                                </div>
                                <div className="flex gap-2 ">
                                    <CheckCheckIcon size={28} color='blue'/> <p className='font-bold'>Zespoły ekspertów
                                    zaangażowane w Twoje bezpieczeństwo </p>
                                </div>
                                <div className="flex gap-2 ">
                                    <CheckCheckIcon size={28} color='blue'/> <p className='font-bold'>Silne partnerstwo
                                    na rzecz niezrównanej cyberobrony </p>
                                </div>
                            </div>
                            <EncryptButton textData="Zabezpiecz się" className="bg-blue-1 hover:bg-blue-1-hover w-fit"/>
                        </div>
                    </div>
                    <div className="flex w-full md:w-1/2   justify-center p-2 mt-6 ">
                        <Parciple url="/assets/img/logoIcon.png"/>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
