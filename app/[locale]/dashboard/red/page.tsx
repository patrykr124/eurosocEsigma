"use client"
import HeaderRed from "@/components/UI/red/header/HeaderRed";
import CertificateRed from "@/components/UI/red/section/Certificate/CertificateRed";
import FAQRedHome from "@/components/UI/red/section/FAQ/FAQRedHome";
import DlaczegoRed from "@/components/UI/red/section/Onas/DlaczegoRed";
import TabsRed from "@/components/UI/red/section/korzysci/TabsRed";
import OpinieRed from "@/components/UI/red/section/opinie/OpinieRed";
import MorgueeTextRed from "@/components/UI/red/section/prologue/MorgueeTextRed";
import ServicesRed from "@/components/UI/red/section/service/ServicesRed";

function Red() {
    return (


        <div>
            <HeaderRed />
            <MorgueeTextRed />
            <ServicesRed />
            <DlaczegoRed />
            <TabsRed />
            <OpinieRed />
            <CertificateRed />
            <FAQRedHome />
        </div>

    )
}

export default Red