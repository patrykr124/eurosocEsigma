'use client'
import React, {useState} from 'react'
import LeftSideBox from "@/components/UI/services/LeftSideBox";
import RightSideBox from "@/components/UI/services/RightSideBox";
import SwitchAbonament from "@/components/UI/SwitchAbonament";
import FilterMobile from "@/components/UI/FilterMobile";

export default function AllServices() {
    const BUTTON_CLASSES = "h5-link flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors justify-center w-64 relative z-10"
    const [switchTabs, setSwitchTabs] = useState('Jednorazowe')

    const [activeFilters, setActiveFilters] = useState<string[]>([])


    return (
        <div className='common-padding '>
            <div className="wrapper flex flex-col lg:gap-16 gap-8 items-end ">
                <FilterMobile setActiveFilters={setActiveFilters}/>
                <SwitchAbonament  switchTabs={switchTabs} setSwitchTabs={setSwitchTabs} BUTTON_CLASSES={BUTTON_CLASSES}/>
                <div className="flex lg:flex-row flex-col gap-16 w-full" >
                    <div className="lg:flex flex-1 hidden " >
                        <LeftSideBox setActiveFilters={setActiveFilters}/>
                    </div>
                    <div className="flex flex-[3] ">
                        <RightSideBox activeFilters={activeFilters} />
                    </div>
                </div>
            </div>
        </div>
    )
}
