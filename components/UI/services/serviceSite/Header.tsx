'use client'
import {motion} from 'framer-motion'
import React from 'react'
import {servicesHeaderAnimation, servicesHeaderAnimation2} from "@/constants/animations/animation";


interface Props {
    title?: string | undefined,
    title2?: string | undefined,
    headerImg?: string | undefined,
    position?: string | undefined,
}

export default function Header({title, title2, headerImg, position}: Props) {
    return (
        <header style={{
            backgroundImage: `url('${headerImg}')`,
            backgroundPosition: `${position}`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
        }} className="sectionPadding flex flex-col justify-center items-center">
            <div className="wrapper ">
                <div className="overflow-hidden">
                    <motion.h1 variants={servicesHeaderAnimation} initial="hidden" animate="visible"
                               className='h1-bold text-gray-3 text-center'>{title}</motion.h1>
                </div>
                <div className="overflow-hidden">
                    <motion.h2 variants={servicesHeaderAnimation2} initial="hidden" animate="visible"
                               className='h4-medium text-gray-3 text-center'>{title2}</motion.h2>
                </div>
            </div>
        </header>
    )
}
