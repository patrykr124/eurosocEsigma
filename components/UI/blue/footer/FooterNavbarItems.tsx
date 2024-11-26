import React from 'react'

import Link from 'next/link'
import { itemsMenu } from '../nav'

export default function FooterNavbarItems() {
    return (
        <>
            <ul className='flex flex-row gap-8'>
                {itemsMenu.map((item) => (
                    <li key={item.id}><Link className='text-primary-50 p-medium-20 hover:text-white/80 transition-all' href={item.url}>{item.name}</Link></li>
                ))}
            </ul>
        </>
    )
}
