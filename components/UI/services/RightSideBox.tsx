import {servicesData} from "@/constants/services";
import Link from "next/link";
import EncryptButton from "@/components/UI/EncryptButton";
import {ArrowRight} from "lucide-react";
import React from "react";
import {motion} from "framer-motion";
interface Props {
    activeFilters: string[]
}

function RightSideBox({activeFilters}: Props) {

    function truncetData(word: string, maxWord: number) {
        if (!word) return;
        if (word.length > maxWord) {
            return word.slice(0, maxWord) + "...";
        }
    }

    const servicesFilterData = servicesData.filter((item) =>
        activeFilters.length === 0 || activeFilters.includes(item.filter) || activeFilters.includes(item.filter2)
    );



    return (
        <div className="flex flex-wrap lg:gap-6 gap-2 ">
            {servicesFilterData.map((item) => (
                <motion.div key={item.id} initial={{opacity:0, scale:0.98}} animate={{opacity:1,scale:1}}  transition={{duration:0.5}} >
                    <Link
                          className='group relative shadow-light text-black flex w-[190px] lg:w-[280px] lg:h-[400px] rounded-xl overflow-hidden'
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
                                    <p className='p-medium-14'>{truncetData(item.description, 160)}</p>
                                </div>
                                <EncryptButton textData="Zapisz się"
                                               className="bg-blue-1 hover:bg-blue-1-hover w-fit text-sm mt-2"
                                               icon={<ArrowRight/>}/>
                            </div>
                        </div>

                    </Link>
                </motion.div>
            ))}
        </div>
    );
}

export default RightSideBox;