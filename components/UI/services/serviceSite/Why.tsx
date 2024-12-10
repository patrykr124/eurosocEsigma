"use client"
import React, {useEffect, useState} from "react";
import Image from "next/image";
import TabsSwitches from "@/components/UI/TabsSwitches";
import {usePathname} from "next/navigation";
import {useTranslations} from "use-intl";

interface IconData {
    id: number;
    image: string;
    title: string;
    desc: string;
}

interface Props {
    titleKorzysci: String | undefined;
    titleZagrozenia: String | undefined;
    iconsBlue: IconData[] | undefined;
    iconsRed: IconData[] | undefined;
}

function Why({titleKorzysci, titleZagrozenia, iconsBlue, iconsRed}: Props) {
    const [switchTabs, setSwitchTabs] = useState("korzysci")
    const pathname = usePathname()
    const t = useTranslations("servicesPage")

    useEffect(() => {
        if (pathname?.includes("/dashboard/red/")) {
            setSwitchTabs("zagrozenia");
        } else {
            setSwitchTabs("korzysci");
        }
    }, [])

    const BUTTON_CLASSES = "h5-link flex items-center gap-2  px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors justify-center lg:w-64 w-36 relative z-10"

    return (
        <div className="bg-gray-2 common-padding">
            <div className="wrapper flex flex-col gap-12 ">

                <div className="flex lg:flex-row flex-col justify-between lg:items-center lg:gap-20">
                    <div className="lg:min-h-[180px] min-h-[220px]">
                        <h2 className={`${switchTabs === "korzysci" ? "titleFrame" : "titleFrame-red"}`}>{switchTabs === "korzysci" ? t("switchTabBlue") : t("switchTabRed")}</h2>
                        <h2 className="h2-medium-42">{`${switchTabs === "korzysci" ? titleKorzysci : titleZagrozenia}`}</h2>
                    </div>
                    <TabsSwitches css={BUTTON_CLASSES} switchTabs={switchTabs} setSwitchTabs={setSwitchTabs}
                                  textOtherColor='text-black'/>
                </div>
                {switchTabs === "korzysci" ? (
                        <div className="flex flex-col gap-16">
                            <div className="top grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                                {iconsBlue?.map((item, index) => (
                                    <div key={index} className="box flex gap-4">
                                        <div className="image">
                                            <Image className="min-w-[60px] max-w-[60px]" width="120" height="120"
                                                   src={item.image}
                                                   alt="hand"/>
                                        </div>
                                        <div className="text -mt-2  ">
                                            <h4 className="p-semibold-20">{item.title}</h4>
                                            <p >{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>)
                    : (<div className="flex flex-col gap-16">
                            <div className="top grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                                {iconsRed?.map((item, index) => (
                                    <div key={index} className="box flex gap-4">
                                        <div className="image">
                                            <Image className="min-w-[60px] max-w-[60px]" width="120" height="120"
                                                   src={item.image} alt="redhand"/>
                                        </div>
                                        <div className="text -mt-2  ">
                                            <h4 className="p-semibold-20">{item.title}</h4>
                                            <p >{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

            </div>
        </div>
    );
}

export default Why;