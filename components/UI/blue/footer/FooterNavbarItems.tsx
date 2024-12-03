import React from 'react'

import Link from 'next/link'
import { itemsMenu } from '../nav'

export default function FooterNavbarItems() {
    return (
        <>
            <ul className='flex flex-row lg:gap-8 gap-4'>
                {itemsMenu.map((item) => (
                    <li key={item.id}><Link className='text-primary-50 lg:p-medium-20 text-sm  hover:text-white/80 transition-all' href={item.url}>{item.name}</Link></li>
                ))}
            </ul>
        </>
    )
}
