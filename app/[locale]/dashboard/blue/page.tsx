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


function Blue() {
    return (


        <div>
            <Header />
            <MorgueeText />
            <Services />
            <Dlaczego />
            <Tabs />
            <Map />
            <Opinie />
            <Certificate />
            <FAQBlueHome />
        </div>


    )
}

export default Blue;
