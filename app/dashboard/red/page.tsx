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
import PageTransition from "@/constants/animations/PageTransition";
import {AnimatePresence, motion} from "framer-motion";
import {usePathname} from "next/navigation";
import Vurnerabilities from "@/components/UI/red/section/vulnerabilitiers/Vurnerabilities";

function Red() {
    const pathname = usePathname();
    return (
        <AnimatePresence mode="wait">
            <PageTransition key={pathname}/>
            <motion.div
                key={pathname}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.5}}
            >
                <HeaderRed/>
                <MorgueeTextRed/>
                <ServicesRed/>
                <DlaczegoRed/>
                <TabsRed/>
                {/*<Vurnerabilities/>*/}
                <OpinieRed/>
                <CertificateRed/>
                <FAQRedHome/>
            </motion.div>
        </AnimatePresence>
    )
}

export default Red