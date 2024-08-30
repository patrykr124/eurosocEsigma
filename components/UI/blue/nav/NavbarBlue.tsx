import Image from 'next/image'
import React from 'react'
import Logo from '../../../../public/assets/img/logo.jpeg'
import NavbarItems from './NavbarItems'
import Link from 'next/link'
import EncryptButton from '../../EncryptButton'
function NavbarBlue() {
    return (
        <header className='bg-black h-16 flex items-center fixed inset-0 z-50'>
            <nav className='wrapper'>
                <div className="flex justify-between items-center">
                    <div className="logo">
                        <Link href='/'><Image src={Logo} alt='logo' width={150} height={150} /></Link>

                    </div>
                    <div className="items">

                        <NavbarItems />

                    </div>
                    <div className="action">
                        <EncryptButton textData="Zapisz się" />
                    </div>
                </div>
            </nav>


        </header >
    )
}

export default NavbarBlue