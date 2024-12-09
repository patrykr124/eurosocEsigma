'use client'

import {
    itemMenuUslugiUtrzymaniowe,
    itemMenuUslugiUtrzymaniowe_EN,
    itemsMenu,
    itemsMenu_EN,
    itemsMenuUslugiAudytorskie,
    itemsMenuUslugiAudytorskie_EN,
    itemsMenuUslugiSzkoleniowe,
    itemsMenuUslugiSzkoleniowe_EN
} from '.'

import {usePathname} from 'next/navigation'
import {useLocale, useTranslations} from "use-intl";
import {Link} from "@/navigation";


interface NavOpenProps {
    ishandleOpen: boolean,
    setIsHandleOpen: (value: boolean) => void
}

export default function NavOpen({ishandleOpen, setIsHandleOpen}: NavOpenProps) {
    const locale = useLocale();
    const t = useTranslations("menu.services")
    const t2 = useTranslations("menu.home")


    const servicesItemData = locale === "pl" ? itemsMenu : itemsMenu_EN
    const itemsMenuUslugiAudytorskieData = locale === "pl" ? itemsMenuUslugiAudytorskie : itemsMenuUslugiAudytorskie_EN
    const itemsMenuUslugiSzkolenioweData = locale === "pl" ? itemsMenuUslugiSzkoleniowe : itemsMenuUslugiSzkoleniowe_EN
    const itemMenuUslugiUtrzymanioweData = locale === "pl" ? itemMenuUslugiUtrzymaniowe : itemMenuUslugiUtrzymaniowe_EN


    const servicesItem = servicesItemData.find(item => item.name === t2("uslugi"))


    const pathname = usePathname();


    return (

        <div
            className={`${ishandleOpen ? " opacity-100" : ' opacity-0 pointer-events-none'} transition-all h-screen duration-300 absolute inset-0 w-full bg-black/60 top-16`}>
            <div className="bg-black" onMouseLeave={() => setIsHandleOpen(false)}>
                <div
                    className="wrapper min-h-[40vh] gap-10 w-full flex lg:flex-row flex-col items-start justify-between pb-6">
                    <div className="1 flex flex-col gap-4 justify-center py-10 ">
                        <h2 className="p-bold-24 text-white">{t("title1")}</h2>
                        <div className="flex flex-col gap-4">
                            {servicesItem && servicesItem.featured && servicesItem.featured.map((item) => {
                                const isActive = pathname && pathname.includes(item.url);
                                return (
                                    <Link onClick={() => setIsHandleOpen(false)}
                                          href={item.url}
                                          className={`${isActive ? "text-gray-2/80 text-[12px]" : "linkSmall"} 
                                          relative flex mainLinkBlue`} key={item.id}>
                                        {item.name}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                    <div className="2 flex  flex-col gap-4 justify-center py-10 ">
                        <h2 className="p-bold-24 text-white">{t("title2")}</h2>
                        {itemsMenuUslugiAudytorskieData.map((item) => {
                            const isActive = pathname === item.url
                            return (
                                <Link onClick={() => setIsHandleOpen(false)}
                                      href={item.url}
                                      className={`${isActive ? " text-grey-400 text-[12px]" : "linkSmall"} 
                                relative flex mainLinkBlue`} key={item.id}>
                                    {item.name}
                                </Link>
                            )

                        })}
                    </div>
                    <div className="2 flex  flex-col gap-4 justify-center py-10 ">
                        <h2 className="p-bold-24 text-white">{t("title3")}</h2>
                        {itemsMenuUslugiSzkolenioweData.map((item) => {
                            const isActive = pathname === item.url
                            return (
                                <Link onClick={() => setIsHandleOpen(false)}
                                      href={item.url}
                                      className={`${isActive ? " text-grey-400 text-[12px]" : "linkSmall"} 
                                relative flex mainLinkBlue`} key={item.id}>
                                    {item.name}
                                </Link>
                            )

                        })}
                    </div>
                    <div className="2 flex  flex-col gap-4 justify-center py-10 ">
                        <h2 className="p-bold-24 text-white">{t("title4")}</h2>
                        {itemMenuUslugiUtrzymanioweData.map((item) => {
                            const isActive = pathname === item.url
                            return (
                                <Link onClick={() => setIsHandleOpen(false)}
                                      href={item.url}
                                      className={`${isActive ? " text-grey-400 text-[12px]" : "linkSmall"} 
                                relative flex mainLinkBlue`} key={item.id}>

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
