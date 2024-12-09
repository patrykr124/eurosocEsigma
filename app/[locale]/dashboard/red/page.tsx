"use client"
import React from 'react'
import HeaderRed from "@/components/UI/red/header/HeaderRed";
import MorgueeTextRed from "@/components/UI/red/section/prologue/MorgueeTextRed";
import ServicesRed from "@/components/UI/red/section/service/ServicesRed";
import DlaczegoRed from "@/components/UI/red/section/Onas/DlaczegoRed";
import TabsRed from "@/components/UI/red/section/korzysci/TabsRed";
import OpinieRed from "@/components/UI/red/section/opinie/OpinieRed";
import CertificateRed from "@/components/UI/red/section/Certificate/CertificateRed";
import FAQRedHome from "@/components/UI/red/section/FAQ/FAQRedHome";
import {usePathname} from "next/navigation";

function Red() {
    const pathname = usePathname();
    return (


        <div>
            <HeaderRed/>
            <MorgueeTextRed/>
            <ServicesRed/>
            <DlaczegoRed/>
            <TabsRed/>
            {/*<Vurnerabilities/>*/}
            <OpinieRed/>
            <CertificateRed/>
            <FAQRedHome/>
        </div>

    )
}

export default Red