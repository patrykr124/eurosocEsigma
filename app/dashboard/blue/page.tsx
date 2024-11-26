"use client"
import Header from "@/components/UI/blue/header/Header";
import Certificate from "@/components/UI/blue/section/Certificate/Certificate";
import FAQBlueHome from "@/components/UI/blue/section/FAQ/FAQBlueHome";
import Tabs from "@/components/UI/blue/section/korzysci/Tabs";
import Map from "@/components/UI/blue/section/map/Map";
import Dlaczego from "@/components/UI/blue/section/Onas/Dlaczego";
import Opinie from "@/components/UI/blue/section/opinie/Opinie";
import MorgueeText from "@/components/UI/blue/section/prologue/MorgueeText";
import Services from "@/components/UI/blue/section/service/Services";
import PageTransition from "@/constants/animations/PageTransition";
import React from "react";
import {AnimatePresence, motion} from "framer-motion";
import {usePathname} from "next/navigation";


function Blue() {
    const pathname = usePathname();
    return (
        <AnimatePresence mode="wait">
            <PageTransition key={pathname}/>
            <motion.div
                key={pathname}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.5}}>
                <Header/>
                <MorgueeText/>
                <Services/>
                <Dlaczego/>
                <Tabs/>
                <Map/>
                <Opinie/>
                <Certificate/>
                <FAQBlueHome/>
            </motion.div>
        </AnimatePresence>

    )
}

export default Blue;
