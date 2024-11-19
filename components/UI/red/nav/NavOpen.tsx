'use client'
import Link from 'next/link'
import {itemMenuUslugiUtrzymaniowe, itemsMenu, itemsMenuObslugaIncydentow, itemsMenuUslugiSzkoleniowe} from '.'
import {useState} from 'react'

import {usePathname} from 'next/navigation'


interface NavOpenProps {
    ishandleOpen: boolean,
    setIsHandleOpen: (value: boolean) => void
}

export default function NavOpen({ishandleOpen, setIsHandleOpen}: NavOpenProps) {

    const [hoverImg, setHoverImg] = useState<string | null>(null)

    const servicesItem = itemsMenu.find(item => item.name === 'Usługi')


    const pathname = usePathname();


    return (

        <div
            className={`${ishandleOpen ? " opacity-100" : ' opacity-0 pointer-events-none'} transition-all h-screen duration-300 absolute inset-0 w-full bg-black/60 top-16`}>
            <div className="bg-black" onMouseLeave={() => setIsHandleOpen(false)}>
                <div className="wrapper min-h-[40vh] gap-10 w-full flex items-start justify-between pb-6">
                    <div className="1 flex flex-col gap-4 justify-center py-10 ">
                        <h2 className="p-bold-24 text-white">Usługi audytorskie </h2>
                        <div className="flex flex-col gap-4">
                            {servicesItem && servicesItem.featured && servicesItem.featured.map((item) => {
                                const isActive = pathname === item.url
                                return (
                                    <Link onClick={() => setIsHandleOpen(false)}
                                          onMouseEnter={() => setHoverImg(item.img)}
                                          href={item.url}
                                          className={`${isActive ? " text-grey-400 text-[12px]" : "linkSmall"} 
                                relative flex mainLinkRed`} key={item.id}>

                                        {item.name}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                    <div className="2 flex  flex-col gap-4 justify-center py-10 ">
                        <h2 className="p-bold-24 text-white">Usługi szkoleniowe</h2>
                        {itemsMenuUslugiSzkoleniowe.map((item) => {
                            const isActive = pathname === item.url
                            return (
                                <Link onClick={() => setIsHandleOpen(false)}
                                      onMouseEnter={() => setHoverImg(item.img)}
                                      href={item.url}
                                      className={`${isActive ? " text-grey-400 text-[12px]" : "linkSmall"} 
                                relative flex mainLinkRed`} key={item.id}>

                                    {item.name}
                                </Link>
                            )

                        })}
                    </div>
                    <div className="2 flex  flex-col gap-4 justify-center py-10 ">
                        <h2 className="p-bold-24 text-white">Obsługa incydentów</h2>
                        {itemsMenuObslugaIncydentow.map((item) => {
                            const isActive = pathname === item.url
                            return (
                                <Link onClick={() => setIsHandleOpen(false)}
                                      onMouseEnter={() => setHoverImg(item.img)}
                                      href={item.url}
                                      className={`${isActive ? " text-grey-400 text-[12px]" : "linkSmall"} 
                                relative flex mainLinkRed`} key={item.id}>

                                    {item.name}
                                </Link>
                            )

                        })}
                    </div>
                    <div className="2 flex  flex-col gap-4 justify-center py-10 ">
                        <h2 className="p-bold-24 text-white">Usługi utrzymaniowe </h2>
                        {itemMenuUslugiUtrzymaniowe.map((item) => {
                            const isActive = pathname === item.url
                            return (
                                <Link onClick={() => setIsHandleOpen(false)}
                                      onMouseEnter={() => setHoverImg(item.img)}
                                      href={item.url}
                                      className={`${isActive ? " text-grey-400 text-[12px]" : "linkSmall"} 
                                relative flex mainLinkRed`} key={item.id}>

                                    {item.name}
                                </Link>
                            )

                        })}
                    </div>

                </div>
            </div>
        </div>
    )
}
