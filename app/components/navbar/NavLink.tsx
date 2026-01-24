'use client'

import { NavbarItem } from '@heroui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
    href: string
    label: string
}

export default function NavLink({ href, label }: Props) {
    const pathname = usePathname()
    const isActive = pathname === href

    return (
        <NavbarItem
            as={Link}
            href={href}
            isActive={isActive}
            className={`font-bold transition-colors ${isActive ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-500'}`}
        >
            {label}
        </NavbarItem>
    )
}
