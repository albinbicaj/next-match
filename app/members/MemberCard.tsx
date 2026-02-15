"use client"

import { Card, CardFooter, Image } from '@heroui/react'
import { Member } from '@prisma/client'
import { calculateAge } from '../lib/util'
import Link from 'next/link'
import { HiOutlineHeart, HiOutlineLocationMarker } from 'react-icons/hi'

type Props = {
    member: Member
}

export default function MemberCard({ member }: Props) {
    return (
        <Card
            as={Link}
            href={`/members/${member.userId}`}
            isPressable
            className='group overflow-hidden border-none cursor-pointer rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-pink-100/50 transition-all duration-500 hover:-translate-y-1'
        >
            {/* Image Section */}
            <div className='relative'>
                <Image
                    isZoomed
                    src={member.image || "/images/user.svg"}
                    alt={member.name}
                    radius='none'
                    className='aspect-[3/4] object-cover w-full'
                />

                {/* Like Button */}
                <div className='absolute top-3 right-3 z-20'>
                    <button
                        className='w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-pink-500 hover:text-white hover:scale-110'
                        onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                        }}
                    >
                        <HiOutlineHeart size={20} />
                    </button>
                </div>

                {/* Online Indicator */}
                <div className='absolute top-3 left-3 z-20'>
                    <div className='flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-white/40 shadow-sm'>
                        <div className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse' />
                        <span className='text-[10px] font-bold text-slate-700 uppercase tracking-wider'>Online</span>
                    </div>
                </div>
            </div>

            {/* Footer Info */}
            <CardFooter className='flex flex-col items-start gap-1 p-4 bg-white'>
                <div className='flex items-center justify-between w-full'>
                    <h3 className='text-base font-bold text-slate-800 truncate'>
                        {member.name}, {calculateAge(member.dateOfBirth)}
                    </h3>
                </div>
                <div className='flex items-center gap-1 text-slate-500'>
                    <HiOutlineLocationMarker size={14} />
                    <span className='text-xs font-medium'>{member.city}, {member.country}</span>
                </div>
            </CardFooter>
        </Card>
    )
}
