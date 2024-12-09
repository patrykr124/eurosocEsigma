import React, {ReactNode} from 'react'
import NavbarRed from "@/components/UI/red/nav/NavbarRed";
import Footer from "@/components/UI/blue/footer/Footer";

interface LayoutProps {
    children: ReactNode;
}

export default function layout({children}: LayoutProps) {
    return (
        <>
            <NavbarRed/>
            {children}
            <Footer/>
        </>
    )
}
