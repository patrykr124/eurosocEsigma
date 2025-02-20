import FAQ from '@/components/UI/FAQ'
import React from 'react'
import {ContentFAQData, ContentFAQData_EN} from "@/components/UI/red/section/FAQ/Content";
import {useLocale, useTranslations} from "use-intl";
import {motion} from "framer-motion";
export default function FAQRedHome() {
    const locale = useLocale();
    const t = useTranslations('FAQ')

    const ContentFAQDataLocal = locale === "pl" ? ContentFAQData : ContentFAQData_EN

    return (
        <motion.div initial={{ opacity: 0, }} whileInView={{ opacity: 1, }}
        viewport={{ amount: 1, once: true }} transition={{ duration: 0.5, ease: "easeOut" }} style={{
            backgroundImage: `url("/assets/img/background.png")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0% 30%"
        }} className="common-padding">
            <div className="wrapper space-y-10">
                <div className="title flex flex-col">
                    <h2 className="titleFrame-red">FAQ</h2>
                    <h2 className="h2-medium-42">{t("title")}</h2>
                    {/*<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, laboriosam aut illo ducimus natus*/}
                    {/*    dicta in deleniti excepturi fugiat omnis.</p>*/}
                </div>
                <FAQ FAQRight={ContentFAQDataLocal.ContentRight} FAQLeft={ContentFAQDataLocal.ContentLeft} />
            </div>
        </motion.div>
    )
}
