"use client"
import Image from 'next/image'
import React, {useState} from 'react'
import Logo from '../../../../public/assets/img/red/logoRed.svg'
import NavbarItems from './NavbarItems'
import Link from 'next/link'
import NavOpen from './NavOpen'
import Switch from "@/components/UI/Switch";
import {motion} from 'framer-motion'
import UseMenuShowOnScroll from "@/hooks/useMenuShowOnScroll";
import {navbarAnimation, navbarAnimationTransitio} from "@/constants/animations/animation";

function NavbarRed() {
    const [ishandleOpen, setIsHandleOpen] = useState(false)
    const [hiddenMenu, setHiddenMenu] = useState(false)

    function isOpen(hoveritem: string) {
        if (hoveritem === 'Usługi') {
            setIsHandleOpen(true)
        } else {
            setIsHandleOpen(false)
        }
    }

    UseMenuShowOnScroll(setHiddenMenu)

    return (
        <motion.header variants={navbarAnimation} animate={hiddenMenu ? 'hidden' : 'visible'}
                       transition={navbarAnimationTransitio}
                       className='bg-black-1 h-16 flex items-center fixed inset-0 z-[9999]'>
            <nav className='wrapper'>
                <div className="flex justify-between items-center">
                    <div className="logo">
                        <Link href='/dashboard/red'><Image src={Logo} alt='logo' width={160} height={160}/></Link>

                    </div>
                    <div className="items">

                        <NavbarItems isOpen={isOpen} ishandleOpen={ishandleOpen} setIsHandleOpen={setIsHandleOpen}/>

                    </div>
                    <Switch/>


                </div>
            </nav>
            <NavOpen ishandleOpen={ishandleOpen} setIsHandleOpen={setIsHandleOpen}/>


        </motion.header>
    )
}

export default NavbarRed