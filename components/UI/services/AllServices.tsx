'use client'
import React, {useState} from 'react'
import LeftSideBox from "@/components/UI/services/LeftSideBox";
import RightSideBox from "@/components/UI/services/RightSideBox";
import SwitchAbonament from "@/components/UI/SwitchAbonament";
import FilterMobile from "@/components/UI/FilterMobile";
import {useTranslations} from "use-intl";

export default function AllServices() {
    const t = useTranslations();

    const [activeFilters, setActiveFilters] = useState<string[]>([])


    return (
        <div className='common-padding '>
            <div className="wrapper flex flex-col lg:gap-16 gap-8 items-end ">
                <FilterMobile setActiveFilters={setActiveFilters}/>
                <SwitchAbonament setActiveFilters={setActiveFilters}/>
                <div className="flex lg:flex-row flex-col gap-16 w-full">
                    <div className="lg:flex flex-1 hidden ">
                        <LeftSideBox setActiveFilters={setActiveFilters}/>
                    </div>
                    <div className="flex flex-[3] ">
                        <RightSideBox activeFilters={activeFilters}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
