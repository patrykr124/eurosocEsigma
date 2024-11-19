import React from 'react'
import HeaderRed from "@/components/UI/red/header/HeaderRed";
import MorgueeTextRed from "@/components/UI/red/section/prologue/MorgueeTextRed";
import ServicesRed from "@/components/UI/red/section/service/ServicesRed";
import DlaczegoRed from "@/components/UI/red/section/Onas/DlaczegoRed";
import TabsRed from "@/components/UI/red/section/korzysci/TabsRed";
import Map from "@/components/UI/blue/section/map/Map";
import OpinieRed from "@/components/UI/red/section/opinie/OpinieRed";
import CertificateRed from "@/components/UI/red/section/Certificate/CertificateRed";
import FAQRedHome from "@/components/UI/red/section/FAQ/FAQRedHome";

function Red() {
    return (
        <div>
            <HeaderRed/>
            <MorgueeTextRed/>
            <ServicesRed/>
            <DlaczegoRed/>
            <TabsRed/>
            {/*<Map/>*/}
            <OpinieRed/>
            <CertificateRed/>
            <FAQRedHome/>
        </div>
    )
}

export default Red