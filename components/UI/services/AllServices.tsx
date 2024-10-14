import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import EncryptButton from '../EncryptButton'
import { ArrowRight } from 'lucide-react'

export default function AllServices() {

    const servicesData = [
        {
            id: 1,
            title: 'MONITORING',
            desc: 'Identify and understand your cyber security weaknesses.',

        },
        {
            id: 2,
            title: 'PENETRATION TESTING',
            desc: 'Identify your cyber security weaknesses.',
        },
        {
            id: 3,
            title: 'TRAINING',
            desc: "Identify and understand security ",
        },
        {
            id: 4,
            title: 'INCIDENT RESPONSE',
            desc: 'Identify and understand your cyber security weaknesses.',
        },
    ]

    return (
        <div className='common-padding ' style={{ backgroundImage: `url("/assets/img/background.png")`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
            <div className="wrapper flex flex-col justify-center items-center">
                <div className="flex">
                    <div className="flex flex-1 ">
                        <h2 className='h2-medium-42 uppercase'>Wyznacz swoją ścieżkę w bezpieczeństwie</h2>
                    </div>
                    <div className="flex flex-1 max-w-md">
                        <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    </div>
                </div>
                <div className="flex gap-12 flex-wrap mt-12 justify-between">
                    {servicesData.map((item) => (
                        <Link className='group shadow-sm text-black flex w-[350px] rounded-xl overflow-hidden' href='/dashboard/blue/services/monitoring'>

                            <div className="w-full bg-tertiary-background ">
                                <div className="top overflow-hidden ">
                                    <Image width={350} height={350} className='object-cover group-hover:scale-110 transition-all duration-1000' src='/assets/img/referencje.jpg' alt='monitoring' />
                                </div>
                                <div className="bottom  flex flex-col  items-start py-6 px-6 gap-2 ">
                                    <h2 className='text-black p-medium-28 '>{item.title}</h2>
                                    <p className='h-12'>{item.desc}</p>
                                    <EncryptButton textData="Zapisz się" className='w-fit text-sm mt-2' icon={<ArrowRight />} />
                                </div>
                            </div>

                        </Link>
                    ))}
                </div>
            </div>
        </div >
    )
}
