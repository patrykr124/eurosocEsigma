import FAQ from '@/components/UI/FAQ'
import React from 'react'
import {ContentFAQData, ContentFAQData_EN} from "@/components/UI/blue/section/FAQ/Content";
import {useLocale, useTranslations} from "use-intl";
import {motion} from "framer-motion";
export default function FAQBlueHome() {
    const t = useTranslations('FAQ');
    const locale = useLocale();
    const FAQData = locale === "pl" ? ContentFAQData : ContentFAQData_EN
    return (
        <motion.div initial={{ opacity: 0, }} whileInView={{ opacity: 1, }}
        viewport={{ amount: 0.8, once: true }} transition={{ duration: 0.5, ease: "easeOut" }} style={{
            backgroundImage: `url("/assets/img/background.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0% 30%"
        }} className="common-padding bg-gray-3">
            <div className="wrapper flex flex-col gap-4 md:gap-6 ">
                <div className="title flex flex-col">
                    <h2 className="titleFrame">FAQ</h2>
                    <h2 className="h2-medium-42">{t('title')}</h2>
                </div>
                <FAQ FAQRight={FAQData.ContentRight} FAQLeft={FAQData.ContentLeft} />
            </div>
        </motion.div>
    )
}
