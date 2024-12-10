import React from "react";
import FAQServices from "@/components/UI/services/serviceSite/FAQ/FAQServices";
import {useTranslations} from "use-intl";

interface data {
    id: number;
    title: string;
    content: string;

}

interface Props {
    FAQLeft: data[] | undefined;
    FAQRight: data[] | undefined;
}

function FAQTemplateRed({FAQLeft, FAQRight}: Props) {
    const t = useTranslations("servicesPage")
    return (
        <div className="common-padding bg-gray-3">
            <div className="wrapper flex flex-col gap-10">
                <div className="title flex flex-col">
                    <h2 className="titleFrame-red">FAQ</h2>
                    <h2 className="h2-medium-42">{t("FAQh2")}</h2>

                </div>
                <FAQServices FAQLeft={FAQLeft} FAQRight={FAQRight}/>
            </div>
        </div>
    );
}

export default FAQTemplateRed;