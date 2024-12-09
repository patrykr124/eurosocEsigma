import FAQ from '@/components/UI/FAQ'
import React from 'react'
import {ContentFAQData, ContentFAQData_EN} from "@/components/UI/blue/section/FAQ/Content";
import {useLocale, useTranslations} from "use-intl";

export default function FAQBlueHome() {
    const t = useTranslations('FAQ');
    const locale = useLocale();
    const FAQData = locale === "pl" ? ContentFAQData : ContentFAQData_EN
    return (
        <div style={{
            backgroundImage: `url("/assets/img/background.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0% 30%"
        }} className="common-padding bg-gray-3">
            <div className="wrapper space-y-10">
                <div className="title flex flex-col">
                    <h2 className="titleFrame">FAQ</h2>
                    <h2 className="h2-medium-42">{t('title')}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, laboriosam aut illo ducimus natus
                        dicta in deleniti excepturi fugiat omnis.</p>
                </div>
                <FAQ FAQRight={FAQData.ContentRight} FAQLeft={FAQData.ContentLeft} />
            </div>
        </div>
    )
}
