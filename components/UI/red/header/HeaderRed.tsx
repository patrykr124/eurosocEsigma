'use client'
import EncryptButtonRed from "@/components/UI/EncryptButtonRed";
import { headerAnimation, headerAnimationButton, headerAnimationP } from "@/constants/animations/animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale, useTranslations } from "use-intl";
import { FlipWords } from "../../flip-words";

function HeaderRed() {
    const t = useTranslations("dashboard.header");
    const locale = useLocale();
    const words = ["wdrożeniach", "szkoleniach", "audytach",];
    const words_EN = ["training", "education", "audit",];
    const wordsLocale = locale === "pl" ? words : words_EN;

    return (
        <div className="w-full h-[70vh] lg:h-[85vh] overflow-hidden" style={{
            backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0.1) 50%, rgba(0,0,0,1) 100%)",
        }}>
            < div className="relative h-full w-full flex flex-col  justify-center items-center">
                <video className="absolute inset-0 -z-10 h-full w-full object-cover" autoPlay loop muted playsInline
                    preload="none">
                    <source src='/assets/video/redHeader.mp4' type="video/mp4" />
                </video>

                <div className="wrapper flex justify-start">
                    <div className="title max-w-4xl gap-8 flex flex-col items-start">
                        <div className="top overflow-hidden">
                            <motion.p variants={headerAnimationP} initial="hidden" animate="visible"
                                className="p-semibold-20 text-gray-2">{t("p")}
                            </motion.p>
                            <div className="overflow-hidden py-2">
                                <motion.h1 variants={headerAnimation} initial="hidden" animate="visible"
                                    className="h1-bold text-gray-2 whitespace-pre-wrap max-w-3xl" >{t("h1")} <FlipWords
                                        words={wordsLocale} />
                                </motion.h1>
                            </div>
                        </div>
                        <div className="overflow-y-hidden py-2 px-1">
                            <motion.div variants={headerAnimationButton} initial="hidden" animate="visible"
                                className="space-x-5 text-end flex">
                                <EncryptButtonRed onClick="" textData={t("buttonMain")}
                                    className="bg-red-1 hover:red-1-hover" />
                                <Link className="button-white" href="#">{t("buttonInfo")}</Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

        </ div>
    )
}

export default HeaderRed