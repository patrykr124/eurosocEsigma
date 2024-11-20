"use client"
import Footer from '@/components/UI/blue/footer/Footer';
import NavbarBlue from '@/components/UI/blue/nav/NavbarBlue'
import React, {ReactNode} from 'react'

interface LayoutProps {
    children: ReactNode;
}

export default function layout({children}: LayoutProps) {

    return (
        <>
            <NavbarBlue/>
            <div>
                {children}
            </div>

            <Footer/>
        </>
    )
}
