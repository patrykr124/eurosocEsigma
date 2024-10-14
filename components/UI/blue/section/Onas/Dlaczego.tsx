import {CheckCheckIcon} from 'lucide-react'
import React from 'react'
import Parciple from './Parciple'
import EncryptButton from '@/components/UI/EncryptButton'

export default function Dlaczego() {
    return (
        <div className='common-padding bg-tertiary-background'>
            <div className="wrapper">
                <div className="flex">
                    <div className="flex flex-col flex-1 justify-center">
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
                            <EncryptButton textData="Zabezpiecz się" className="w-fit"/>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-center p-2">
                        <Parciple/>
                    </div>
                </div>
            </div>
        </div>
    )
}
