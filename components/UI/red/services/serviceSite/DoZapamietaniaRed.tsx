import React from "react";
import Image from "next/image";
import DozapamietaniaContentRed from "@/components/UI/red/services/serviceSite/DozapamietaniaContentRed";
import {useTranslations} from "use-intl";

interface data {
    id: number;
    image: string;
    title: string;
    desc: string;
}

interface Props {
    doZapamietaniaBottom: data[] | undefined;
    doZapamietaniaTop: data[] | undefined;
}

function DoZapamietaniaRed({doZapamietaniaTop, doZapamietaniaBottom}: Props) {
    const t = useTranslations("servicesPage")
    return (
        <div className="common-padding bg-gray-2">
            <div className="wrapper flex flex-col gap-8">
                <div className="flex md:flex-row flex-col gap-10">
                    <div className="left relative h-[300px] md:h-[450px] w-full md:flex-1 rounded-xl overflow-hidden">
                        <Image fill className="object-cover" src="/assets/img/servicesRed.png" alt="doZapamietania"/>
                    </div>
                    <div className="right flex-1 gap-8 flex flex-col">
                        <div className="">
                            <h2 className='titleFrame-red'>{t("h22")}</h2>
                            <h2 className='h2-medium-42'>{t("h23")}</h2>
                        </div>
                        <div className="flex ">
                            <DozapamietaniaContentRed doZapamietaniaTop={doZapamietaniaTop}
                                                      doZapamietaniaBottom={doZapamietaniaBottom}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default DoZapamietaniaRed;