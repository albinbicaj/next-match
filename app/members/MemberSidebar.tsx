"use client"

import { Card, CardBody, Divider } from '@heroui/react'
import { Member } from '@prisma/client'
import { calculateAge } from '../lib/util'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    HiOutlineUser,
    HiOutlinePhotograph,
    HiOutlineChatAlt2,
    HiOutlineLocationMarker,
    HiOutlineCalendar,
} from 'react-icons/hi'

type Props = {
    member: Member
}

export default function MemberSidebar({ member }: Props) {
    const pathname = usePathname()
    const basePath = `/members/${member.userId}`

    const navLinks = [
        { name: 'Profile', href: basePath, icon: <HiOutlineUser size={20} /> },
        { name: 'Photos', href: `${basePath}/photos`, icon: <HiOutlinePhotograph size={20} /> },
        { name: 'Chat', href: `${basePath}/chat`, icon: <HiOutlineChatAlt2 size={20} /> },
    ]

    return (
        <Card className='w-full items-center overflow-hidden border-none glass-card rounded-3xl'>
            {/* Cover Image */}
            <div className='relative w-full h-28 bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-500'>
                <div className='absolute inset-0 opacity-20'>
                    <div className='absolute top-2 left-4 w-20 h-20 bg-white/30 rounded-full blur-xl' />
                    <div className='absolute bottom-2 right-6 w-16 h-16 bg-white/20 rounded-full blur-lg' />
                </div>
            </div>

            {/* Profile Image */}
            <div className='-mt-14 relative z-10'>
                <div className='relative'>
                    <Image
                        src={member.image || '/images/user.png'}
                        alt={member.name}
                        width={112}
                        height={112}
                        className='rounded-full aspect-square object-cover border-4 border-white shadow-xl'
                    />
                    <div className='absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 border-[3px] border-white shadow-sm' />
                </div>
            </div>

            {/* Member Info */}
            <CardBody className='pt-3 pb-6 px-5'>
                <div className='flex flex-col items-center text-center'>
                    <h2 className='text-xl font-bold text-slate-800'>
                        {member.name}, {calculateAge(member.dateOfBirth)}
                    </h2>

                    <div className='flex items-center gap-1.5 mt-1 text-slate-500'>
                        <HiOutlineLocationMarker size={14} />
                        <span className='text-sm font-medium'>{member.city}, {member.country}</span>
                    </div>

                    <div className='flex items-center gap-1.5 mt-1 text-slate-400'>
                        <HiOutlineCalendar size={14} />
                        <span className='text-xs font-medium'>
                            Member since {new Date(member.created).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                        </span>
                    </div>
                </div>

                <Divider className='my-5' />

                {/* Navigation Links */}
                <nav className='flex flex-col gap-2'>
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-semibold text-sm transition-all duration-200 ${isActive
                                    ? 'bg-gradient-to-r from-pink-500 to-indigo-600 text-white shadow-lg shadow-pink-200/50'
                                    : 'text-slate-600 hover:bg-slate-100/80 hover:text-slate-800'
                                    }`}
                            >
                                <span className={isActive ? 'text-white' : 'text-slate-400'}>{link.icon}</span>
                                {link.name}
                            </Link>
                        )
                    })}
                </nav>
            </CardBody>
        </Card>
    )
}
