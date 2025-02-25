
import { ChevronDown } from 'lucide-react';

import {itemsMenu, itemsMenu_EN} from '.';
import {Link} from "@/navigation";
import {useLocale} from "use-intl";




interface NavbarItemsProps {
    isOpen: (name: string) => void,
    ishandleOpen: boolean,
    setIsHandleOpen: (value: boolean) => void
}
function NavbarItems({ isOpen, ishandleOpen, setIsHandleOpen }: NavbarItemsProps) {
    const locale = useLocale()

    const itemMenuData = locale === "pl" ? itemsMenu : itemsMenu_EN


    return (
        <ul className='flex flex-row gap-10'>
            {itemMenuData.map(item => {
                return (
                    <li key={item.id}>
                        <Link onClick={() => setIsHandleOpen(false)} onMouseEnter={() => isOpen(item.name)} className={`link flex items-center `} href={item.url}>
                            {item.name} {item.arrow && <ChevronDown size={18} className={`${ishandleOpen ? 'rotate-180' : ''} `} />}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default NavbarItems