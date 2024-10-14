import React from 'react'

import Link from 'next/link'
import { itemsMenu } from '../nav'

export default function FooterNavbarItems() {
    return (
        <>
            <ul className='flex flex-col gap-2'>
                {itemsMenu.map((item) => (
                    <li key={item.id}><Link className='text-primary-50 p-medium-14 hover:text-white/80 transition-all' href={item.url}>{item.name}</Link></li>
                ))}
            </ul>
        </>
    )
}
