"use client";
import { ChevronDown } from 'lucide-react';

import { itemsMenu } from '.';
import {useLocale} from "use-intl";
import {itemsMenu_EN} from "@/components/UI/red/nav";
import {Link} from "@/navigation";




interface NavbarItemsProps {
    isOpen: (name: string) => void,
    ishandleOpen: boolean,
    setIsHandleOpen: (value: boolean) => void
}
function NavbarItems({ isOpen, ishandleOpen, setIsHandleOpen }: NavbarItemsProps) {
    const locale = useLocale();
    const itemsMenuLocal = locale === "pl" ? itemsMenu : itemsMenu_EN

    return (
        <ul className='flex flex-row gap-10'>
            {itemsMenuLocal.map(item => {
                return (
                    <li key={item.id}>
                        <Link onClick={() => setIsHandleOpen(false)} onMouseEnter={() => isOpen(item.name)} className={`link flex items-center`} href={item.url}>
                            {item.name} {item.arrow && <ChevronDown size={18} className={`${ishandleOpen ? 'rotate-180' : ''} `} />}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default NavbarItems