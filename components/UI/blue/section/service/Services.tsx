import { EvervaultCard, Icon } from '@/components/UI/evervault-card'
import React from 'react'
import Card from './Card'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import EncryptButton from '@/components/UI/EncryptButton'


function Services() {
    return (
        <div className="">
            <div className="box flex flex-col items-center gap-20  rounded-xl  z-10">

                <div className="-mt-36 bg-white rounded-3xl shadow-2xl w-full xl:w-[1400px] py-16">
                    <div className="wrapper gap-16 flex flex-col">
                        <div className="text justify-between flex flex-row gap-12">
                            <h2 className='h2-normal '>Co zyskasz dzięki Eurosoc?</h2>
                            <div className="links flex justify-center gap-8 ">
                                <EncryptButton textData="Usługi abonamentowe" icon={<ArrowRight />} />
                                <EncryptButton textData="Usługi jednorazowe" icon={<ArrowRight />} />

                            </div>
                        </div>

                        <div className="cardbox flex justify-between  ">
                            <Card img='/assets/img/1.png' title='Twoje systemy w bezpiecznych rękach' text="Wykrywanie anomalii i analiza maszynowa / ludzka 24/7/365"
                                button="Learn more" />
                            <Card img='/assets/img/2.png' title='VPN, L2 lub Ciemne włókno' text="Skanowanie nowych podatności i / lub testy penetracyjne"
                                button="Learn more" />
                            <Card img='/assets/img/3.png' title='EUROSOC infrastruktura' text="Kontrolowane ataki phishingowe na pracowników"
                                button="Learn more" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services