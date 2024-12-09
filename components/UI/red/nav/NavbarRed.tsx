"use client"
import Image from 'next/image'
import React, {useState} from 'react'
import Logo from '../../../../public/assets/img/red/logoRed.svg'
import NavbarItems from './NavbarItems'

import NavOpen from './NavOpen'
import Switch from "@/components/UI/Switch";
import {motion} from 'framer-motion'
import UseMenuShowOnScroll from "@/hooks/useMenuShowOnScroll";
import {navbarAnimation, navbarAnimationTransitio} from "@/constants/animations/animation";
import {
    itemMenuUslugiUtrzymaniowe,
    itemsMenu,
    itemsMenu_EN,
    itemsMenuObslugaIncydentow,
    itemsMenuUslugiSzkoleniowe
} from "@/components/UI/red/nav";
import {ChevronDown} from "lucide-react";
import {usePathname} from "next/navigation";
import LocaleSwitcher from "@/components/UI/LocaleSwitch/LocaleSwitcher";
import {Link} from "@/navigation";
import {useLocale, useTranslations} from "use-intl";

function NavbarRed() {
    const [ishandleOpen, setIsHandleOpen] = useState(false)
    const [hiddenMenu, setHiddenMenu] = useState(false)
    const [openMobile, setOpenMobile] = useState(false)
    const [openMobile2, setOpenMobile2] = useState(false)
    const pathname = usePathname();
    const locale = useLocale();
    const t = useTranslations('menu.home');
    const servicesItemUslugiLocale = locale === "pl" ? itemsMenu : itemsMenu_EN
    const servicesItemUslugi = servicesItemUslugiLocale.find(item => item.name === t("uslugi"))

    function isOpen(hoveritem: string) {
        if (hoveritem === t("uslugi")) {
            setIsHandleOpen(true)
        } else {
            setIsHandleOpen(false)
        }
    }

    function openMobileMenu() {
        setOpenMobile((prevState) => !prevState);
    }

    function openMobileMenu2() {
        setOpenMobile2((prevState) => !prevState);
    }

    UseMenuShowOnScroll(setHiddenMenu)

    return (
        <motion.header variants={navbarAnimation} animate={hiddenMenu ? 'hidden' : 'visible'}
                       transition={navbarAnimationTransitio}
                       className='bg-black-1 h-16 flex items-center fixed inset-0 z-[9999]'>
            <nav className='wrapper'>
                <div className="lg:flex hidden justify-between items-center">
                    <div className="logo">
                        <Link href='/dashboard/red'><Image src={Logo} alt='logo' width={160} height={160}/></Link>

                    </div>
                    <div className="items">

                        <NavbarItems isOpen={isOpen} ishandleOpen={ishandleOpen} setIsHandleOpen={setIsHandleOpen}/>

                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <LocaleSwitcher/>
                        <Switch/>
                    </div>


                </div>

                {/*//mobile*/}
                <div className="flex lg:hidden">
                    <div className="flex w-full  justify-between items-center z-10">
                        <div className="logo">
                            <Link href='/dashboard/blue'><Image src={Logo} alt='logo' width={150} height={150}/></Link>
                        </div>
                        <div className="input_box flex">
                            <div className="bar" onClick={openMobileMenu}>
                                <span className={`top ${openMobile ? "rotate-45 !top-2" : ""}`}></span>
                                <span
                                    className={`middle ${openMobile ? "translate-x-[-20px] opacity-0" : ""}`}
                                ></span>
                                <span className={`bottom ${openMobile ? "rotate-[-45deg] !top-2" : ""}`}></span>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`bg-black-1 fixed overflow-y-auto left-0 top-16 w-screen h-screen ${openMobile ? '-translate-y-0 opacity-100' : '-translate-y-full opacity-0'} transition-opacity duration-500`}>
                        <div className="wrapper flex flex-col gap-6 my-10">
                            {servicesItemUslugiLocale.map(item => {
                                return (
                                    <li key={item.id}>
                                        <div className="flex">
                                            <Link onClick={openMobileMenu}
                                                  className={`linkMobile text-2xl flex items-center`}
                                                  href={item.url}>
                                                {item.name}
                                            </Link>
                                            {item.arrow &&
                                                <ChevronDown onClick={openMobileMenu2} color="white" size={25}
                                                             className={`${openMobile2 ? 'rotate-180' : ''} `}/>}
                                        </div>
                                        {item.name === t("uslugi")  && openMobile2 && (
                                            <div onClick={openMobileMenu} className="ItemsClick">
                                                <div
                                                    className=" gap-2 w-full flex  flex-col items-start justify-between ">
                                                    <div className="1 flex flex-col gap-4 justify-center py-10 ">
                                                        <h2 className="p-bold-18 text-white">Usługi audytorskie
                                                        </h2>
                                                        <div className="flex flex-col gap-4">
                                                            {servicesItemUslugi && servicesItemUslugi.featured && servicesItemUslugi.featured.map((item) => {
                                                                const isActive = pathname && pathname.includes(item.url)
                                                                return (
                                                                    <Link onClick={() => setIsHandleOpen(false)}
                                                                          href={item.url}
                                                                          className={`${isActive ? " text-grey-400 text-[12px]" : "linkSmall"} 
                                                                            relative flex mainLinkRed`} key={item.id}>
                                                                        {item.name}
                                                                    </Link>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                    <div className="2 flex flex-col gap-4 justify-center  ">
                                                        <h2 className="p-bold-18 text-white">Usługi szkoleniowe
                                                        </h2>
                                                        {itemsMenuUslugiSzkoleniowe.map((item) => {
                                                            const isActive = pathname === item.url
                                                            return (
                                                                <Link onClick={() => setIsHandleOpen(false)}
                                                                      href={item.url}
                                                                      className={`${isActive ? " text-grey-400 text-[12px]" : "linkSmall"} 
                                                                            relative flex mainLinkRed`} key={item.id}>
                                                                    {item.name}
                                                                </Link>
                                                            )

                                                        })}
                                                    </div>
                                                    <div className="3 flex flex-col gap-4 justify-center ">
                                                        <h2 className="p-bold-18 text-white">Obsługa incydentów </h2>
                                                        {itemsMenuObslugaIncydentow.map((item) => {
                                                            const isActive = pathname === item.url
                                                            return (
                                                                <Link onClick={() => setIsHandleOpen(false)}
                                                                      href={item.url}
                                                                      className={`${isActive ? " text-grey-400 text-[12px]" : "linkSmall"} 
                                relative flex mainLinkRed`} key={item.id}>
                                                                    {item.name}
                                                                </Link>
                                                            )

                                                        })}
                                                    </div>
                                                    <div className="2 flex  flex-col gap-4 justify-center py-10 ">
                                                        <h2 className="p-bold-18 text-white">Usługi
                                                            utrzymaniowe </h2>
                                                        {itemMenuUslugiUtrzymaniowe.map((item) => {
                                                            const isActive = pathname === item.url
                                                            return (
                                                                <Link onClick={() => setIsHandleOpen(false)}
                                                                      href={item.url}
                                                                      className={`${isActive ? " text-grey-400 text-[12px]" : "linkSmall"} 
                                relative flex mainLinkRed`} key={item.id}>

                                                                    {item.name}
                                                                </Link>
                                                            )

                                                        })}
                                                    </div>

                                                </div>
                                            </div>
                                        )}
                                    </li>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </nav>
            <NavOpen ishandleOpen={ishandleOpen} setIsHandleOpen={setIsHandleOpen}/>


        </motion.header>
    )
}

export default NavbarRed