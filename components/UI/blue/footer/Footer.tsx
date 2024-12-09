'use client'
import {Facebook, FactoryIcon, Instagram, LinkedinIcon, MapPinIcon, PhoneCallIcon} from 'lucide-react'
import Image from 'next/image'
import React, {useEffect, useState} from 'react'
import FooterNavbarItems from './FooterNavbarItems'
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Footer() {
    const pathName = usePathname();
    const [logo, setLogo] = useState<string>('');
    console.log(pathName)
    useEffect(() => {
        if (pathName && pathName.includes('/dashboard/red')) {
            setLogo('/assets/img/red/logoRed.svg')
        } else {
            setLogo("/assets/img/logo-blue.svg")
        }
    }, []);


    return (
        <div className='common-padding bg-black-1'>
            <div className="wrapper">
                <div className="flex md:flex-row flex-col gap-8">
                    <div className="left flex flex-col gap-4 flex-1">
                        <div className="pb-4 ">
                            <Image src={logo} width={200} height={50} alt='logo'/>
                        </div>
                        <div className="contact space-y-4 pt-3">
                            <Link href="tel:+48587746289">
                                <p className="text-white flex gap-4">
                                    <PhoneCallIcon size={20}/>+48 58 774 62 89
                                </p>
                            </Link>
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
                    <div className="middle flex-[2] flex flex-col gap-4 justify-end items-center">
                        <div className="overflow-hidden rounded-xl w-full grayscale">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2315.2832805001403!2d18.529015277025668!3d54.52850038561913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda72011a3a47d%3A0x54d1139821f716df!2sPolska%2020%2C%2081-339%20Gdynia!5e0!3m2!1spl!2spl!4v1731420935926!5m2!1spl!2spl"
                                height="200" style={{border: 0, width: '100%'}} loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">

                            </iframe>
                        </div>

                        <div className="flex items-end">
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
