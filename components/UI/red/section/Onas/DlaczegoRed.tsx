import {CheckCheckIcon} from 'lucide-react'
import React from 'react'
import ParcipleRed from './ParcipleRed'
import EncryptButton from '@/components/UI/EncryptButton'
import EncryptButtonRed from "@/components/UI/EncryptButtonRed";

export default function DlaczegoRed() {
    return (
        <div className='common-padding bg-gray-2 '>
            <div className="wrapper">
                <div className="flex md:flex-row flex-col">
                    <div className="flex flex-col w-full md:w-1/2 justify-center">
                        <div className="">
                            <h2 className='titleFrame-red'>O NAS</h2>
                        </div>
                        <div className="space-y-6">
                            <h2 className='h2-medium-42'>Wiodąca pozycja w zakresie rozwiązań i innowacji w zakresie
                                cyberbezpieczeństwa </h2>
                            <p>EUROSOC dostarcza innowacyjne rozwiązania w zakresie cyberbezpieczeństwa, chroniąc Twój
                                cyfrowy świat dzięki specjalistycznej wiedzy, zaangażowaniu i spersonalizowanemu
                                podejściu. </p>
                            <div className="space-y-4">
                                <div className="flex gap-2 ">
                                    <CheckCheckIcon size={28} color='red'/> <p className='font-bold'>Innowacyjne
                                    rozwiązania w zakresie cyberbezpieczeństwa dla współczesnych zagrożeń </p>
                                </div>
                                <div className="flex gap-2 ">
                                    <CheckCheckIcon size={28} color='red'/> <p className='font-bold'>Zespoły ekspertów
                                    zaangażowane w Twoje bezpieczeństwo </p>
                                </div>
                                <div className="flex gap-2 ">
                                    <CheckCheckIcon size={28} color='red'/> <p className='font-bold'>Silne partnerstwo
                                    na rzecz niezrównanej cyberobrony </p>
                                </div>
                            </div>
                            <EncryptButtonRed textData="Zabezpiecz się"  className="bg-red-1 hover:bg-red-1-hover w-fit"/>
                        </div>
                    </div>
                    <div className="flex w-full md:w-1/2   justify-center p-2">
                        <ParcipleRed url="/assets/img/logoRed.png"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
