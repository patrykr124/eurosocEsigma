import React from "react";
import EncryptButton from "@/components/UI/EncryptButton";
import {useTranslations} from "use-intl";
import { useLocale } from "next-intl";
import { servicesData } from "@/constants/services";
import { servicesData_EN } from "@/constants/services_EN";

interface Props{
    classH2?:string;
    BUTTON: React.ReactNode;
    h2:string | undefined
    p:string | undefined
}
function ParallaxInfo({classH2, BUTTON,h2,p}: Props) {
   
    return (
        <div className="bg-black-1 common-padding">
            <div className="wrapper flex md:flex-row flex-col justify-center items-center gap-10 md:gap-0">
                <div className="left flex-1 text-white text-center md:text-start ">
                    <div className="flex flex-col items-center md:items-start">
                        <h2 className="h2-medium-42">{h2}</h2>
                        <p>{p}</p>
                    </div>
                </div>
                <span className="md:flex hidden w-[1px] h-40 bg-white/20 mx-10"/>
                <div className="right flex-1 flex justify-center items-center">
                    {BUTTON}
                </div>
            </div>
        </div>
    );
}

export default ParallaxInfo;