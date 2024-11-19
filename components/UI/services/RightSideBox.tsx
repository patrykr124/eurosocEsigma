import {servicesData} from "@/constants/services";
import Link from "next/link";
import EncryptButton from "@/components/UI/EncryptButton";
import {ArrowRight} from "lucide-react";
import React from "react";


function RightSideBox() {

    function truncetData(word : string, maxWord: number){
        if (!word) return;
        if (word.length > maxWord){
            return word.slice(0,maxWord) + "...";
        }
    }

    return (
        <div className="flex flex-wrap justify-end gap-6 ">
            {servicesData.map((item) => (
                <Link
                    className='group relative shadow-light text-black flex w-[280px] h-[350px] rounded-xl overflow-hidden'
                    href={item.url}>
                    <div className="w-full relative bg-gray-3  flex flex-col ">
                        <div className="top ">
                            <div className="relative w-full h-[160px] flex justify-center items-center p-2.5"
                                 style={{backgroundImage: `url("${item.headerImg}")`, backgroundSize: "cover"}}>
                                <h2 className='text-white p-regular-24 text-center '>{item.title}</h2>
                            </div>
                        </div>
                        <div className="bottom h-full   flex flex-col justify-between py-6 px-6 ">
                            <div className="flex flex-col gap-2">
                                <p className='p-medium-14'>{truncetData(item.description,100)}</p>
                            </div>
                            <EncryptButton textData="Zapisz się"
                                           className="bg-blue-1 hover:bg-blue-1-hover w-fit text-sm mt-2"
                                           icon={<ArrowRight/>}/>
                        </div>
                    </div>

                </Link>
            ))}
        </div>
    );
}

export default RightSideBox;