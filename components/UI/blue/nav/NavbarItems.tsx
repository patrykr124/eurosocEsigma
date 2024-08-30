import Link from 'next/link'
import React from 'react'


const itemsMenu = [
    {
        id: 1,
        name: 'Home',
        url: '/'
    },
    {
        id: 2,
        name: 'Pages',
        url: '/pages'
    },
    {
        id: 3,
        name: 'Solution',
        url: '/solution'
    },
    {
        id: 4,
        name: 'Shop',
        url: '/shop'
    },
    {
        id: 5,
        name: 'Blog',
        url: '/blog'
    },
    {
        id: 6,
        name: 'Contact',
        url: '/contact'
    },
]

function NavbarItems() {
    return (
        <ul className='flex flex-row gap-8'>
            {itemsMenu.map(item => (
                <li key={item.id}>
                    <Link className='text-primary-50 p-medium-14 hover:text-white/80 transition-all' href={item.url}>
                        {item.name}
                    </Link>
                </li>))}
        </ul>
    )
}

export default NavbarItems