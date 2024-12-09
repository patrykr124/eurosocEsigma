'use client'
import AllServices from '@/components/UI/services/AllServices'
import Header from '@/components/UI/services/Header'
import React from 'react'
import {useTranslations} from "use-intl";


export default function Page() {
    const t = useTranslations('homeServices')

    return (
        <div>
            <Header title={t("title")} title2=''/>
            <AllServices/>
        </div>
    )
}
