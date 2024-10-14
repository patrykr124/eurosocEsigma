import { EvervaultCard } from '@/components/UI/evervault-card'

import React from 'react'

interface CardProps {
    text: string,
    button: string,
    title: string,
    img: string

}

function Card({ text, button, title, img }: CardProps) {
    return (
        <div className=" w-[350px]  rounded-2xl shadow-sm bg-black flex flex-col items-start p-4 relative ">


            <EvervaultCard text={title} backgroundImg={img} className='object-fit ' />

            <p className="text-sm border font-light dark:border-white/[0.2] border-white rounded-lg mt-4 text-white dark:text-white px-2 py-1">
                {button}
            </p>
        </div>
    )
}

export default Card