'use client'
import Link from "next/link"
import {FlipWords} from "../../flip-words";
import EncryptButton from "../../EncryptButton";
import {motion} from "framer-motion";
import {headerAnimation, headerAnimationButton, headerAnimationP} from "@/constants/animations/animation";
import {useLocale, useTranslations} from "use-intl";

function Header() {
    const t = useTranslations("dashboard")
    const locale = useLocale();


    const words = locale === "pl" ? ["wdrożeniach", "szkoleniach", "audytach", "bezpieczeństwie"] : ["training", "security", "academic", "security"];


    return (
        <div className="w-full h-[70vh] lg:h-[85vh] overflow-hidden" style={{
            backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0.1) 25%, rgba(0,0,0,1) 100%)",
        }}>
            < div className="relative h-full w-full flex flex-col  justify-center items-center">
                <video className="absolute inset-0 -z-10 h-full w-full object-cover" autoPlay loop muted playsInline
                       preload="none">
                    <source src='/assets/video/eurosoc.video.blue2H.mp4' type="video/mp4"/>
                </video>

                <div className="wrapper flex justify-start">
                    <div className="title max-w-4xl gap-8 flex flex-col items-start">
                        <div className="top overflow-hidden">
                            <motion.p variants={headerAnimationP} initial="hidden" animate="visible"
                                      className="p-semibold-20 text-gray-2">{ t("header.p")}
                            </motion.p>
                            <div className="overflow-hidden py-2">
                                <motion.h1 variants={headerAnimation} initial="hidden" animate="visible"
                                           className="h1-bold whitespace-pre-wrap text-gray-2 max-w-3xl">{ t("header.h1")} <FlipWords
                                        words={words}/>
                                </motion.h1>
                            </div>
                        </div>

                        <div className="overflow-hidden py-2">
                            <motion.div variants={headerAnimationButton} initial="hidden" animate="visible"
                                        className="space-x-5 text-end">
                                <EncryptButton textData={t("header.buttonMain")} className="bg-blue-1 hover:bg-blue-1-hover"
                                              />
                                <Link className="button-white" href="#">{t("header.buttonInfo")}</Link>

                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

        </ div>
    )
}

export default Header