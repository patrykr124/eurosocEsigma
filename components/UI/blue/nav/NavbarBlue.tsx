"use client"
import Image from 'next/image'
import { useState } from 'react'
import Logo from '../../../../public/assets/img/logo-blue.svg'
import NavbarItems from './NavbarItems'

import LocaleSwitcher from "@/components/UI/LocaleSwitch/LocaleSwitcher"
import Switch from "@/components/UI/Switch"
import {
    itemMenuUslugiUtrzymaniowe,
    itemsMenu, itemsMenu_EN,
    itemsMenuUslugiAudytorskie,
    itemsMenuUslugiSzkoleniowe
} from "@/components/UI/blue/nav/index"
import { navbarAnimation, navbarAnimationTransitio } from "@/constants/animations/animation"
import UseMenuShowOnScroll from "@/hooks/useMenuShowOnScroll"
import { Link } from "@/navigation"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"
import { useLocale, useTranslations } from "use-intl"
import NavOpen from './NavOpen'

function NavbarBlue() {
    const [ishandleOpen, setIsHandleOpen] = useState(false)
    const [openMobile, setOpenMobile] = useState(false)
    const [openMobile2, setOpenMobile2] = useState(false)
    const pathname = usePathname();
    const [hiddenMenu, setHiddenMenu] = useState(false)
    const locale = useLocale();
    const t = useTranslations("menu.home")
    const t2 = useTranslations("menu.services")

    const itemsMenuLocale = locale === "pl" ? itemsMenu : itemsMenu_EN

    const servicesItemUslugi = itemsMenuLocale.find(item => item.name === t("uslugi"))

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
            <nav className='wrapper relative '>
                <div className="lg:flex hidden justify-between items-center">
                    <div className="logo">
                        <Link href='/dashboard/blue'><Image src={Logo} priority alt='logo' width={180} height={180} /></Link>
                    </div>
                    <div className="flex items-center justify-center gap-8 ">
                        <div className="items">
                            <NavbarItems isOpen={isOpen} ishandleOpen={ishandleOpen} setIsHandleOpen={setIsHandleOpen} />
                        </div>
                        <div className="flex justify-center items-center gap-8">

                            <LocaleSwitcher />
                            <Switch />
                        </div>
                    </div>
                </div>


                {/*MOBILE*/}
                <div className="flex lg:hidden">
                    <div className="flex w-full justify-between items-center z-10">
                        <div className="logo">
                            <Link href='/dashboard/blue'><Image src={Logo} alt='logo' width={120} height={120} /></Link>
                        </div >
                        <div className="flex items-center justify-center gap-8">
                            <LocaleSwitcher />
                            <Switch />
                            <div className="input_box flex -mr-2">
                                <div className="bar flex  " onClick={openMobileMenu}>
                                    <span className={`top ${openMobile ? "rotate-45 !top-2" : ""}`}></span>
                                    <span
                                        className={`middle ${openMobile ? "translate-x-[-20px] opacity-0" : ""}`}
                                    ></span>
                                    <span className={`bottom ${openMobile ? "rotate-[-45deg] !top-2" : ""}`}></span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div
                        className={`bg-black-1 fixed overflow-y-auto left-0 top-16 w-screen h-screen ${openMobile ? '-translate-y-0 opacity-100' : '-translate-y-full opacity-0'} transition-opacity duration-500`}>
                        <div className="wrapper flex flex-col gap-2 my-10">
                            {itemsMenuLocale.map(item => {
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
                                                    className={`${openMobile2 ? 'rotate-180' : ''} `} />}
                                        </div>
                                        {item.name === t("uslugi") && openMobile2 && (
                                            <div onClick={openMobileMenu} className="ItemsClick">
                                                <div
                                                    className=" gap-2 w-full flex  flex-col items-start justify-between ">
                                                    <div className="1 flex flex-col gap-4 justify-center py-10 ">
                                                        <h2 className="p-bold-18 text-white">{t2("title1")}</h2>
                                                        <div className="flex flex-col gap-4">
                                                            {servicesItemUslugi && servicesItemUslugi.featured && servicesItemUslugi.featured.map((item) => {
                                                                const isActive = pathname?.replace("/pl", "") === item.url

                                                                return (
                                                                    <Link onClick={() => setIsHandleOpen(false)}
                                                                        href={item.url}
                                                                        className={`${isActive ? " text-blue-1 text-[12px] " : "linkSmall"} 
                                                                            relative flex mainLinkBlue`} key={item.id}>
                                                                        {item.name}
                                                                    </Link>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                    <div className="2 flex flex-col gap-4 justify-center  ">
                                                        <h2 className="p-bold-18 text-white">{t2("title2")}</h2>
                                                        {itemsMenuUslugiAudytorskie.map((item) => {
                                                            const isActive = pathname?.replace("/pl", "") === item.url
                                                            return (
                                                                <Link onClick={() => setIsHandleOpen(false)}
                                                                    href={item.url}
                                                                    className={`${isActive ? " text-grey-400 text-[12px]" : "linkSmall"} 
                                                                            relative flex mainLinkBlue`} key={item.id}>
                                                                    {item.name}
                                                                </Link>
                                                            )

                                                        })}
                                                    </div>
                                                    <div className="3 flex flex-col gap-4 justify-center pt-10">
                                                        <h2 className="p-bold-18 text-white">{t2("title3")}</h2>
                                                        {itemsMenuUslugiSzkoleniowe.map((item) => {
                                                            const isActive = pathname?.replace("/pl", "") === item.url
                                                            return (
                                                                <Link onClick={() => setIsHandleOpen(false)}
                                                                    href={item.url}
                                                                    className={`${isActive ? " text-grey-400 text-[12px]" : "linkSmall"} 
                                relative flex mainLinkBlue`} key={item.id}>
                                                                    {item.name}
                                                                </Link>
                                                            )

                                                        })}
                                                    </div>
                                                    <div className="2 flex  flex-col gap-4 justify-center py-10">
                                                        <h2 className="p-bold-18 text-white">{t2("title4")}</h2>
                                                        {itemMenuUslugiUtrzymaniowe.map((item) => {
                                                            const isActive = pathname?.replace("/pl", "") === item.url
                                                            return (
                                                                <Link onClick={() => setIsHandleOpen(false)}
                                                                    href={item.url}
                                                                    className={`${isActive ? " text-grey-400 text-[12px]" : "linkSmall"} 
                                relative flex mainLinkBlue`} key={item.id}>

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
            <NavOpen ishandleOpen={ishandleOpen} setIsHandleOpen={setIsHandleOpen} />




        </motion.header>
    )
}

export default NavbarBlue