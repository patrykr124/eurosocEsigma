'use client'
import {Facebook, FactoryIcon, Instagram, LinkedinIcon, MapPinIcon, PhoneCallIcon} from 'lucide-react'
import Image from 'next/image'
import React, {useEffect, useState} from 'react'
import FooterNavbarItems from './FooterNavbarItems'
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";

export default function Footer() {
    const pathName = usePathname();
    const [logo, setLogo] = useState<string>('/assets/img/logo-blue.svg');

    useEffect(() => {
        if (pathName && pathName.startsWith('/dashboard/red')){
            setLogo('/assets/img/red/logoRed.svg')
        }
    }, []);


    return (
        <div className='common-padding bg-black-1'>
            <div className="wrapper">
                <div className="flex md:flex-row flex-col gap-16">
                    <div className="left flex flex-col gap-4 flex-1">
                        <div className="pb-4 ">
                            <Image src={logo} width={200} height={50} alt='logo'/>
                        </div>
                        <div className="contact space-y-4 pt-3">
                            <p className="text-white flex gap-4">
                                <PhoneCallIcon size={20}/> 123-456-7890</p>
                            <div className="local">
                                <Link target="_blank" className="flex gap-4"
                                      href="https://maps.app.goo.gl/jtMrtqAxUUqFgqVY9">
                                    <MapPinIcon size={20} color='white'/>
                                    <div className="">
                                        <p className="text-white">ul. Polska 20</p>
                                        <p className="text-white">81-339 Gdynia </p>
                                        <p className="text-white">Polska</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="info flex gap-4">
                                <FactoryIcon size={20} color='white'/>
                                <div className="">
                                    <p className="text-white">KRS 0000387835</p>
                                    <p className="text-white">NIP 8471607042</p>
                                    <p className="text-white">REGON 280616356</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="middle flex-[2] flex flex-row gap-20 mx-16 justify-center">
                        <div className="">
                            <h3 className='p-medium-24 text-white'>O nas</h3>
                            <FooterNavbarItems/>
                        </div>
                        <div className="">
                            <h3 className='p-medium-24 text-white'>Oferta</h3>
                            <FooterNavbarItems/>
                        </div>
                        <div className="">
                            <h3 className='p-medium-24 text-white'>Pomoc</h3>
                            <FooterNavbarItems/>
                        </div>
                    </div>
                    <div className="right flex-1 flex justify-end items-end">
                        <div className="social text-white items-start flex gap-4">
                            <div className="icons">
                                <Facebook size={20}/>
                            </div>
                            <div className="icons">
                                <Instagram size={20}/>
                            </div>
                            <div className="icons">
                                <LinkedinIcon size={20}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
