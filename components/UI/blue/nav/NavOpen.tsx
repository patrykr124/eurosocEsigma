'use client'
import Image from 'next/image'
import Link from 'next/link'
import { itemsMenu } from '.'
import { useState } from 'react'

import { usePathname, useRouter } from 'next/navigation'


interface NavOpenProps {
    ishandleOpen: boolean,
    setIsHandleOpen: (value: boolean) => void
}
export default function NavOpen({ ishandleOpen, setIsHandleOpen }: NavOpenProps) {

    const [hoverImg, setHoverImg] = useState<string | null>(null)

    const servicesItem = itemsMenu.find(item => item.name === 'Usługi')


    const pathname = usePathname();


    return (

        <div className={`${ishandleOpen ? " opacity-100" : ' opacity-0 pointer-events-none'} transition-all h-screen duration-300 absolute inset-0 w-full bg-black/60 top-16`}>
            <div className="bg-black" onMouseLeave={() => setIsHandleOpen(false)}>
                <div className="wrapper h-[35vh] w-full flex items-center justify-between">
                    <div className="flex flex-col gap-6 justify-center py-10 ">
                        {servicesItem && servicesItem.featured && servicesItem.featured.map((item) => {
                            const isActive = pathname === item.url
                            return (
                                <Link onClick={() => setIsHandleOpen(false)} onMouseEnter={() => setHoverImg(item.img)} href={item.url} className={`${isActive ? " text-secondary-blue" : "link"} 
                                `} key={item.id}>{item.name}</Link>
                            )
                        })}
                    </div>
                    <div className="image w-[300px] h-[200px] rounded-xl overflow-hidden">
                        {servicesItem && servicesItem.featured && servicesItem.featured.map((img) => (
                            <Image key={img.id} width={500} height={500} src={hoverImg || '/assets/img/przygotowanie.jpg'} alt='usługi' objectFit='cover' />
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}
