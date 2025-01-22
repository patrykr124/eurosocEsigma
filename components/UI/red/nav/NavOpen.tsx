'use client'

import {
    itemMenuUslugiUtrzymaniowe, itemMenuUslugiUtrzymaniowe_EN,
    itemsMenu,
    itemsMenuObslugaIncydentow, itemsMenuObslugaIncydentow_EN,
    itemsMenuUslugiSzkoleniowe,
    itemsMenuUslugiSzkoleniowe_EN
} from '.'
import {useState} from 'react'

import {usePathname} from 'next/navigation'
import {Link} from "@/navigation";
import {useLocale, useTranslations} from "use-intl";
import {itemsMenu_EN} from "@/components/UI/red/nav";


interface NavOpenProps {
    ishandleOpen: boolean,
    setIsHandleOpen: (value: boolean) => void
}

export default function NavOpen({ishandleOpen, setIsHandleOpen}: NavOpenProps) {

    const [hoverImg, setHoverImg] = useState<string | null>(null)
    const t = useTranslations('menu.home')
    const t2 = useTranslations("menu.servicesRed")
    const locale = useLocale()

    const servicesItemLocale = locale === "pl" ? itemsMenu : itemsMenu_EN
    const servicesItem = servicesItemLocale.find(item => item.name === t("uslugi"));
    const itemsMenuUslugiSzkolenioweLocale = locale === "pl" ? itemsMenuUslugiSzkoleniowe : itemsMenuUslugiSzkoleniowe_EN
    const itemsMenuObslugaIncydentowLocale = locale === "pl" ? itemsMenuObslugaIncydentow : itemsMenuObslugaIncydentow_EN
    const itemMenuUslugiUtrzymanioweLocale = locale === "pl" ? itemMenuUslugiUtrzymaniowe : itemMenuUslugiUtrzymaniowe_EN

    const pathname = usePathname();


    return (

        <div
            className={`${ishandleOpen ? " opacity-100" : ' opacity-0 pointer-events-none'} transition-all h-screen duration-300 absolute inset-0 w-full bg-black/60 top-16`}>
            <div className="bg-black" onMouseLeave={() => setIsHandleOpen(false)}>
                <div className="wrapper min-h-[40vh] gap-10 w-full flex lg:flex-row flex-col items-start justify-between pb-6">
                    <div className="1 flex flex-col gap-4 justify-center py-10 ">
                        <h2 className="p-bold-24 text-white">{t2("title1")}</h2>
                        <div className="flex flex-col gap-4">
                            {servicesItem && servicesItem.featured && servicesItem.featured.map((item) => {
                                const isActive = pathname && pathname.includes(item.url);
                               
                                return (
                                    <Link onClick={() => setIsHandleOpen(false)}
                                          onMouseEnter={() => setHoverImg(item.img)}
                                          href={item.url}
                                          className={`${isActive ? " text-red-1 text-[12px]" : "linkSmall"} 
                                relative flex mainLinkRed`} key={item.id}>

                                        {item.name}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                    <div className="2 flex  flex-col gap-4 justify-center py-10 ">
                        <h2 className="p-bold-24 text-white">{t2("title2")}</h2>
                        {itemsMenuUslugiSzkolenioweLocale.map((item) => {
                            const isActive = pathname && pathname.includes(item.url);
                            return (
                                <Link onClick={() => setIsHandleOpen(false)}
                                      onMouseEnter={() => setHoverImg(item.img)}
                                      href={item.url}
                                      className={`${isActive ? " text-red-1 text-[12px]" : "linkSmall"} 
                                relative flex mainLinkRed`} key={item.id}>

                                    {item.name}
                                </Link>
                            )

                        })}
                    </div>
                    <div className="2 flex  flex-col gap-4 justify-center py-10 ">
                        <h2 className="p-bold-24 text-white">{t2("title3")}</h2>
                        {itemsMenuObslugaIncydentowLocale.map((item) => {
                            const isActive = pathname && pathname.includes(item.url);
                            return (
                                <Link onClick={() => setIsHandleOpen(false)}
                                      onMouseEnter={() => setHoverImg(item.img)}
                                      href={item.url}
                                      className={`${isActive ? " text-red-1 text-[12px]" : "linkSmall"} 
                                relative flex mainLinkRed`} key={item.id}>

                                    {item.name}
                                </Link>
                            )

                        })}
                    </div>
                    <div className="2 flex  flex-col gap-4 justify-center py-10 ">
                        <h2 className="p-bold-24 text-white">{t2("title4")}</h2>
                        {itemMenuUslugiUtrzymanioweLocale.map((item) => {
                            const isActive = pathname && pathname.includes(item.url);
                            return (
                                <Link onClick={() => setIsHandleOpen(false)}
                                      onMouseEnter={() => setHoverImg(item.img)}
                                      href={item.url}
                                      className={`${isActive ? " text-red-1 text-[12px]" : "linkSmall"} 
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
