import React from 'react'

import Link from 'next/link'
import {itemsMenu, itemsMenu_EN} from '../nav'
import {useLocale} from "use-intl";

export default function FooterNavbarItems() {
    const locale = useLocale();
    const itemsMenuData = locale === "pl" ? itemsMenu : itemsMenu_EN
    return (
        <>
            <ul className='flex flex-row lg:gap-8 gap-4'>
                {itemsMenuData.map((item) => (
                    <li key={item.id}><Link className='text-primary-50 lg:p-medium-20 text-sm  hover:text-white/80 transition-all' href={item.url}>{item.name}</Link></li>
                ))}
            </ul>
        </>
    )
}
