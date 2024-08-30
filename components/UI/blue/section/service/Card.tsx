import { EvervaultCard, Icon } from '@/components/UI/evervault-card'

import React from 'react'

interface CardProps {
    text: string,
    button: string,
    title: string,
    img: string

}

function Card({ text, button, title, img }: CardProps) {
    return (
        <div className="border border-black/[0.2] rounded-3xl shadow-lg bg-black  dark:border-white/[0.2] flex flex-col items-start   p-4 relative h-[30rem] max-w-[30%] ">


            <EvervaultCard text={title} backgroundImg={img} />

            <h2 className="dark:text-white text-white mt-4 text-sm font-light">
                {text}
            </h2>
            <p className="text-sm border font-light dark:border-white/[0.2] border-white rounded-lg mt-4 text-white dark:text-white px-2 py-1">
                {button}
            </p>
        </div>
    )
}

export default Card