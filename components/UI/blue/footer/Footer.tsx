import { Facebook, Instagram, LinkedinIcon, MapPinIcon, PhoneCallIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import NavbarItems from '../nav/NavbarItems'
import FooterNavbarItems from './FooterNavbarItems'

export default function Footer() {
    return (
        <div className='common-padding bg-black'>
            <div className="wrapper">
                <div className="flex">
                    <div className="left flex flex-col gap-4 flex-1">
                        <div className="border-b pb-6 border-grey-600">
                            <Image src='/assets/img/logo-blue.svg' width={200} height={50} alt='logo' />
                        </div>
                        <div className="contact space-y-4 pt-3">
                            <p className="text-white flex gap-2"><PhoneCallIcon /> 123-456-7890</p>
                            <p className="text-white flex gap-2"><PhoneCallIcon /> 123-456-7890</p>
                            <div className="local flex gap-2">
                                <MapPinIcon color='white' />
                                <div className="">

                                    <p className="text-white">ul. Główna 123</p>
                                    <p className="text-white">00-000 Warszawa</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="middle flex-[2] flex flex-row gap-20 mx-16 justify-center">
                        <div className="">
                            <h3 className='p-medium-24 text-white'>O nas</h3>
                            <FooterNavbarItems />
                        </div>
                        <div className="">
                            <h3 className='p-medium-24 text-white'>Oferta</h3>
                            <FooterNavbarItems />
                        </div>
                        <div className="">
                            <h3 className='p-medium-24 text-white'>Pomoc</h3>
                            <FooterNavbarItems />
                        </div>
                    </div>
                    <div className="right flex-1 flex justify-end items-end">
                        <div className="social text-white items-start flex gap-4">
                            <div className="icons">
                                <Facebook size={20} />
                            </div>
                            <div className="icons">
                                <Instagram size={20} />
                            </div>
                            <div className="icons">
                                <LinkedinIcon size={20} />
                            </div>
                        </div></div>
                </div>
            </div>
        </div>
    )
}
