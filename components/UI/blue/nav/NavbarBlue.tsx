"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '../../../../public/assets/img/logo-blue.svg'
import NavbarItems from './NavbarItems'
import Link from 'next/link'
import EncryptButton from '../../EncryptButton'
import NavOpen from './NavOpen'
function NavbarBlue() {
    const [ishandleOpen, setIsHandleOpen] = useState(false)

    function isOpen(hoveritem: string) {
        if (hoveritem === 'Usługi') {
            setIsHandleOpen(true)
        } else {
            setIsHandleOpen(false)
        }
    }

    return (
        <header className='bg-black h-16 flex items-center fixed inset-0 z-[9999]'>
            <nav className='wrapper'>
                <div className="flex justify-between items-center">
                    <div className="logo">
                        <Link href='/dashboard/blue'><Image src={Logo} alt='logo' width={160} height={160} /></Link>

                    </div>
                    <div className="items">

                        <NavbarItems isOpen={isOpen} ishandleOpen={ishandleOpen} setIsHandleOpen={setIsHandleOpen} />

                    </div>
                    <div className="action">
                        <EncryptButton textData="Zapisz się" />
                    </div>

                </div>
            </nav>
            <NavOpen ishandleOpen={ishandleOpen} setIsHandleOpen={setIsHandleOpen} />


        </header >
    )
}

export default NavbarBlue