"use client"

import EncryptButton from '@/components/UI/EncryptButton'
import { servicesInfoData } from '@/data/servicesInfo'
import Image from 'next/image'
import { useState } from 'react'

function Onas() {

    const [showTabs, setShowTabs] = useState(0)

    return (

        <section  className='common-padding relative bg-tertiary-background ' >
            <div className="wrapper flex gap-12 mb-10">
                <div className="flex-1 flex z-10 ">
                    <div className="flex flex-col ">
                        <div className="space-y-10">
                            <div>
                                <h2 className='h2-medium-42'>Dlaczego warto nam zaufać?</h2>

                            </div>
                            <div className="tabs flex  gap-10">
                                {servicesInfoData.map((item, index) => (
                                    <p onClick={() => setShowTabs(index)} key={item.id} className={`p-bold-16 cursor-pointer pb-4 transition-all duration-300 z-50 ${showTabs === index ? "active text-secondary-blue border-b-[3px] border-secondary-blue" : "border-secondary-blue"}`}>{item.tabs}</p>
                                ))}
                            </div>
                        </div>
                        <hr className='-mt-[2px]'></hr>
                        <div className="space-y-10">
                            <div className="tabsContent ">
                                {servicesInfoData.map((item, index) => (
                                    <p key={item.id} className={`text-justify  ${showTabs === index ? "block" : "hidden"}`}>{item.content}</p>
                                ))}
                            </div>
                            <div className="">
                                <EncryptButton textData="Zabezpiecz się" className="w-fit" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1  rounded-2xl overflow-hidden h-[500px]">
                    <Image alt='referencje' src='/assets/img/referencje.jpg' width={1000} height={1000} />
                </div>
            </div>

        </section >

    )
}


export default Onas