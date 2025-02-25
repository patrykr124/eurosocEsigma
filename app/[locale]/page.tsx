'use client'

import EncryptedText from "@/components/EncryptText";
import LocaleSwitcher from "@/components/UI/LocaleSwitch/LocaleSwitcher";
import { Link } from "@/navigation";
import { motion } from 'framer-motion';
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "use-intl";


export default function Home() {
    const t = useTranslations("home");
    const points = t.raw("blue.points");
    const pointsRed = t.raw("red.points");

    const [hover, setHover] = useState(false);
    const [hover2, setHover2] = useState(false);

    const vsgVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1
        }
    }

    const pClass = ` text p-regular-20 font-thin text-gray-3 `

    return (
        <>
            <main className=" h-dvh overflow-hidden hidden md:flex">
                <div className="w-full h-full relative flex" style={{
                    backgroundImage: "url('/assets/img/home/hand.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>

                    <Link onMouseMove={() => setHover2(true)} onMouseLeave={() => setHover2(false)}
                        href="/dashboard/blue"
                        className="w-1/2 h-full  relative RightLinkHand overflow-hidden transition-all duration-300 z-50">

                    </Link>
                    <Link onMouseMove={() => setHover(true)} onMouseLeave={() => setHover(false)} href="/dashboard/red"
                        className="w-1/2 h-full relative leftLinkHand  overflow-hidden  transition-all duration-300 z-50">

                    </Link>

                    {/*/Text/*/}

                    <div
                        className="text absolute left-0 items-center justify-center right-0 flex flex-col h-dvh gap-10 py-20">
                        <motion.div variants={vsgVariants} initial="hidden" animate={hover2 ? 'visible' : 'hidden'}
                            transition={{
                                duration: 0.5, ease: "easeInOut", delay: 0.12
                            }} className="xl:max-w-xl md:max-w-md border-gray-2 md:h-[400px] justify-center  border-[1px] p-8 rounded-lg z-50 flex flex-col gap-4">
                            <p
                                className={`blue break-words  ${pClass}`}><EncryptedText trigger={hover2} text={t("blue.title")} />
                            </p>
                            <ul className="list-disc pl-10 list-outside space-y-2 break-words">
                                {points.map((point: string, index: number) => (
                                    <li key={index} className={`${pClass} `}> <EncryptedText text={point} trigger={hover2} /></li>
                                ))}
                            </ul>
                            <p
                                className={`blue break-words ${pClass}`}>  <EncryptedText text={t("blue.summary")} trigger={hover2} />
                            </p>
                        </motion.div>
                    </div>

                    <div
                        className="text flex flex-col items-center justify-center absolute left-0 right-0  h-dvh gap-10 py-20 ">
                        <motion.div variants={vsgVariants} initial="hidden" animate={hover ? 'visible' : 'hidden'}
                            transition={{
                                duration: 0.5, ease: "easeInOut", delay: 0.12
                            }}
                            className="xl:max-w-xl md:max-w-md border-gray-2 md:h-[400px] justify-center  border-[1px] p-8 rounded-lg z-50 flex flex-col gap-4">
                            <p
                                className={`blue ${pClass} break-words`}><EncryptedText trigger={hover} text={t("red.title")} />
                            </p>
                            <ul className="list-disc pl-10 list-outside space-y-2 break-words">
                                {pointsRed.map((point: string, index: number) => (
                                    <li key={index} className={`${pClass}`}><EncryptedText text={point} trigger={hover} /></li>
                                ))}
                            </ul>
                            <p
                                className={`blue break-words ${pClass}`}> <EncryptedText text={t("red.summary")} trigger={hover} />
                            </p>
                        </motion.div>

                    </div>

                    {/*/image/*/}

                    <div className="rightFire size-[160%] -translate-x-[30%] -translate-y-[12%] absolute  ">
                        <Image className=" object-contain" fill src="/assets/img/home/blue.png" alt="bluefire" />


                    </div>
                    <div
                        className="leftFire size-[160%] absolute -translate-x-[8%] -translate-y-[14%]  overflow-hidden">
                        <Image className=" object-contain" fill src="/assets/img/home/red.png" alt="redfire" />

                    </div>


                    <Image className="absolute left-0 top-0 p-8" width="300" height="300"
                        src="/assets/img/logo-blue.svg"
                        alt="logo" />
                    {/* <h1 className="p-medium-20 text-white absolute lg:right-0 top-20 lg:top-0 p-8 max-w-sm lg:max-w-max">{t("wybor")}</h1> */}
                    <div className="z-50 absolute top-0 right-0 p-8">
                        <LocaleSwitcher />
                    </div>
                </div>
            </main>
            {/*//mobile//*/}
            <main className="h-dvh relative flex md:hidden bg-black">
                <div className=" flex flex-col">
                    <div className="p-6 top flex flex-col gap-8">
                        <Image className=" left-0 top-0" width="150" height="150"
                            src="/assets/img/logo-blue.svg"
                            alt="logo" />
                        {/* <h1 className="p-medium-16 text-white  lg:right-0 top-20 lg:top-0">{t("wybor")}</h1> */}
                    </div>
                    <div className="flex flex-col gap-12 justify-center items-center h-[75vh]">
                        <Link href="/dashboard/blue" className="top relative w-full ">
                            <Image className="" width="500" height="500" src="/assets/img/blueMobile.png"
                                alt="blueMobile" />
                            <p className="px-6 absolute inset-y-0 left-40  sm:left-56 flex flex-col justify-center text text-[12px] text-gray-3  rounded-lg z-50">
                                <span className="text-blue-1 font-bold">EUROSOC BLUE TEAM</span> {t("blueTitleMobile")}
                            </p>
                        </Link>
                        <Link href="/dashboard/red" className="bottom relative w-full flex justify-end">
                            <Image className="" width="500" height="500" src="/assets/img/redMobile.png"
                                alt="blueMobile" />
                            <p className="px-6 absolute inset-y-0 right-40 flex sm:right-56 flex-col justify-center text text-[12px] text-gray-3  rounded-lg z-50">
                                <span className="text-red-1 font-bold">EUROSOC RED TEAM </span>{t("blueTitleMobile")}
                            </p>
                        </Link>
                    </div>


                    <div className="z-50 absolute bottom-0 right-0 p-6">
                        <LocaleSwitcher />
                    </div>
                </div>
            </main>
        </>
    );
}
