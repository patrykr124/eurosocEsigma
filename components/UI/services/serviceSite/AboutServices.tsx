'use client'
import React from 'react'
import ParcipleService from "@/components/UI/services/serviceSite/ParcipleService";
import {motion} from 'framer-motion';
import {sectionAnimation} from "@/constants/animations/animation";

interface props {
    desc: React.ReactNode,
    titleAboutService: string,
    urlImage: string | undefined,
    size: number,
    classH2: string,
    BUTTON: React.ReactNode,
}

export default function AboutServices({desc, titleAboutService, urlImage, size, classH2, BUTTON}: props) {
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
                    <div className="left order-2 lg:order-1 flex-1 flex flex-col">
                        <h2 className={classH2}>O USŁUDZE</h2>
                        <h2 className='h2-medium-42'>{titleAboutService}</h2>
                        <p>{desc}</p>
                        {BUTTON}
                    </div>
                    <div
                        className="right order-1 lg:order-2 pointer-events-none lg:pointer-events-auto flex-1 flex justify-center items-center -mb-10 -mt-10">

                        <ParcipleService url={urlImage} size={size}/>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
