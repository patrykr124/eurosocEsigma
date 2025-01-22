import {servicesData} from "@/constants/servicesRed";

import React from "react";
import EncryptButtonRed from "@/components/UI/EncryptButtonRed";
import {motion} from "framer-motion";
import {useLocale} from "use-intl";
import {servicesDataRed_EN} from "@/constants/servicesRed_EN";
import {Link} from "@/navigation";

interface Props {
    activeFilters: string[]
}

function RightSideBoxRed({activeFilters}: Props) {
    const locale = useLocale();

    function truncetData(word: string, maxWord: number) {
        if (!word) return;
        if (word.length > maxWord) {
            return word.slice(0, maxWord) + "...";
        }
    }

    const serviceDataLocale = locale === "pl" ? servicesData : servicesDataRed_EN
    const servicesFilterData = serviceDataLocale.filter((item) =>
        activeFilters.length === 0 || activeFilters.includes(item.filter) || activeFilters.includes(item.filter2)
    );
    console.log(serviceDataLocale);

    return (
        <div className="grid sm:grid-cols-3 gap-4 w-full">
            {servicesFilterData.length === 0 &&
                <div className="w-full h-full flex justify-center items-center"><p>Brak usługi</p></div>}
            {servicesFilterData.map((item) => (
                <motion.div key={item.id} initial={{opacity: 0, scale: 0.98}} animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.5}}>
                    <Link
                        className='group relative shadow-light text-black flex  rounded-xl overflow-hidden'
                        href={item.url}>
                        <div className="w-full relative bg-gray-3  flex flex-col ">
                            <div className="top ">
                                <div className="relative w-full h-[160px] flex justify-center items-center p-2.5"
                                     style={{backgroundImage: `url("${item.headerImg}")`, backgroundSize: "cover"}}>
                                    <h2 className='text-white lg:p-regular-24 p-regular-18 text-center '>{item.title}</h2>
                                </div>
                            </div>
                            <div className="bottom h-full   flex flex-col justify-between lg:py-6 py-3 px-3 lg:px-6 ">
                                <div className="flex flex-col gap-2">
                                    <p className='p-medium-14 mb-2'>{truncetData(item.description, 160)}</p>
                                </div>
                                <EncryptButtonRed onClick="" textData="Zabezpiecz się"
                                                  className="bg-red-1 hover:red-1-hover w-fit"/>
                            </div>
                        </div>

                    </Link>
                </motion.div>
            ))}
        </div>
    );
}

export default RightSideBoxRed;