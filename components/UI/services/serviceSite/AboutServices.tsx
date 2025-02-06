'use client'
import React from 'react'
import ParcipleService from "@/components/UI/services/serviceSite/ParcipleService";
import {motion} from 'framer-motion';
import {sectionAnimation} from "@/constants/animations/animation";
import {useTranslations} from "use-intl";

interface props {
    desc: React.ReactNode,
    titleAboutService: string,
    urlImage: string | undefined,
    title2?: string | undefined,
    size: number,
    classH2: string,
    BUTTON: React.ReactNode,
}

export default function AboutServices({desc,title2, titleAboutService, urlImage, size, classH2, BUTTON}: props) {
    const t = useTranslations('servicesPage');
    return (
        <section className='common-padding' style={{
            backgroundImage: `url("/assets/img/backgroundLeft.png")`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
        }}>
            <motion.div variants={sectionAnimation} initial="hidden" animate="visible" whileInView="visible"
                        viewport={{once: true, amount: 0.5}} className="wrapper">
                <div className="flex lg:flex-row flex-col ">
                    <div className="left justify-center lg:order-1 flex-1 flex flex-col ">
                        <h2 className={classH2}>{title2}</h2>
                        <h2 className='h2-medium-42 pb-2'>{titleAboutService}</h2>
                        <p>{desc}</p>
                        {BUTTON}
                    </div>
                    <div className="hidden md:flex right  lg:order-2 pointer-events-none lg:pointer-events-auto flex-1  justify-center items-center -mb-10 -mt-10">

                        <ParcipleService url={urlImage} size={size}/>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
