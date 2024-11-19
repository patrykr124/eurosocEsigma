
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { itemsMenu } from '.';




interface NavbarItemsProps {
    isOpen: (name: string) => void,
    ishandleOpen: boolean,
    setIsHandleOpen: (value: boolean) => void
}
function NavbarItems({ isOpen, ishandleOpen, setIsHandleOpen }: NavbarItemsProps) {



    return (
        <ul className='flex flex-row gap-8'>
            {itemsMenu.map(item => {
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