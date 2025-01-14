import InputTemplate from "@/components/UI/InputTemplate";
import {filtrData, filtrData_EN} from "@/constants/filtrData";
import React, {useState} from "react";
import {useLocale} from "use-intl";


interface Props {
    setActiveFilters: React.Dispatch<React.SetStateAction<string[]>>
}

function LeftSideBox({setActiveFilters}: Props) {
    const locale = useLocale();
    const filterAllData = locale === "pl" ? filtrData: filtrData_EN
    const [selectedFilters, setSelectedFilters] = useState<string[]>([])

    const handleCheckboxChange = (id: string) => {
        setSelectedFilters((prev) => {
            const isChecked = prev.includes(id);
            const updatedFilters = isChecked ? prev.filter((item) => item !== id) : [...prev, id];
            setActiveFilters(updatedFilters)
            return updatedFilters;
        })
    }


    return (
        <div className="sticky flex top-[10%] lg:shadow-light  lg:bg-gray-3 w-full h-[300px] xl:h-[250px] rounded-xl p-4 ">
            <div className="flex items-center justify-center gap-4 flex-col text-black">
                <div className="flex flex-col gap-2">
                    {filterAllData.map((item) => (
                        <InputTemplate key={item.id} onChange={() => handleCheckboxChange(item.id)} id={item.id}
                                       title={item.title} selectedFilters={[]}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LeftSideBox;
