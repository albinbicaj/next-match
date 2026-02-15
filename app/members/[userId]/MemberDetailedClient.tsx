"use client"

import { Card, CardBody, Divider } from '@heroui/react'
import { Member, Photo } from '@prisma/client'
import { calculateAge } from '@/app/lib/util'
import Image from 'next/image'
import {
    HiOutlineHeart,
    HiOutlineLocationMarker,
    HiOutlineCake,
    HiOutlineUserCircle,
    HiOutlineAnnotation,
} from 'react-icons/hi'

type Props = {
    member: Member
    photos: Photo[] | null
}

export default function MemberDetailedClient({ member, photos }: Props) {
    return (
        <div className='space-y-6'>
            {/* Profile Header Card */}
            <Card className='border-none glass-card rounded-3xl overflow-hidden'>
                <div className='relative'>
                    {/* Hero Banner */}
                    <div className='h-40 sm:h-52 bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-500 relative overflow-hidden'>
                        <div className='absolute inset-0 opacity-20'>
                            <div className='absolute top-0 left-0 w-40 h-40 bg-white/20 rounded-full blur-2xl' />
                            <div className='absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-3xl' />
                        </div>

                        {/* Like Button */}
                        <button className='absolute top-4 right-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-pink-500 hover:border-pink-500 transition-all duration-300 hover:scale-110 shadow-lg'>
                            <HiOutlineHeart size={24} />
                        </button>
                    </div>

                    {/* Profile Image Overlay */}
                    <div className='absolute -bottom-16 left-6 sm:left-8'>
                        <div className='relative'>
                            <Image
                                src={member.image || '/images/user.png'}
                                alt={member.name}
                                width={128}
                                height={128}
                                className='rounded-3xl aspect-square object-cover border-4 border-white shadow-2xl'
                            />
                            <div className='absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-[3px] border-white shadow-sm' />
                        </div>
                    </div>
                </div>

                <CardBody className='pt-20 pb-6 px-6 sm:px-8'>
                    <div className='flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4'>
                        <div>
                            <h1 className='text-2xl sm:text-3xl font-black text-slate-900'>
                                {member.name}, {calculateAge(member.dateOfBirth)}
                            </h1>
                            <div className='flex items-center gap-4 mt-2'>
                                <div className='flex items-center gap-1.5 text-slate-500'>
                                    <HiOutlineLocationMarker size={16} />
                                    <span className='text-sm font-medium'>{member.city}, {member.country}</span>
                                </div>
                                <div className='flex items-center gap-1.5 text-slate-500'>
                                    <HiOutlineUserCircle size={16} />
                                    <span className='text-sm font-medium capitalize'>{member.gender}</span>
                                </div>
                            </div>
                        </div>

                        <div className='flex items-center gap-2'>
                            <span className='inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold'>
                                Online Now
                            </span>
                        </div>
                    </div>
                </CardBody>
            </Card>

            {/* Details Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* About Section */}
                <Card className='border-none glass-card rounded-3xl'>
                    <CardBody className='p-6'>
                        <div className='flex items-center gap-2 mb-4'>
                            <div className='w-9 h-9 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center'>
                                <HiOutlineAnnotation size={18} className='text-white' />
                            </div>
                            <h3 className='text-lg font-bold text-slate-800'>About Me</h3>
                        </div>
                        <p className='text-slate-600 leading-relaxed'>
                            {member.description || 'This member hasn\'t added a description yet.'}
                        </p>
                    </CardBody>
                </Card>

                {/* Info Section */}
                <Card className='border-none glass-card rounded-3xl'>
                    <CardBody className='p-6'>
                        <div className='flex items-center gap-2 mb-4'>
                            <div className='w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center'>
                                <HiOutlineUserCircle size={18} className='text-white' />
                            </div>
                            <h3 className='text-lg font-bold text-slate-800'>Details</h3>
                        </div>
                        <div className='space-y-4'>
                            <div className='flex items-center gap-3'>
                                <div className='w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center'>
                                    <HiOutlineCake size={16} className='text-pink-500' />
                                </div>
                                <div>
                                    <span className='text-xs text-slate-400 font-medium'>Age</span>
                                    <p className='text-sm font-semibold text-slate-700'>
                                        {calculateAge(member.dateOfBirth)} years old
                                    </p>
                                </div>
                            </div>

                            <div className='flex items-center gap-3'>
                                <div className='w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center'>
                                    <HiOutlineLocationMarker size={16} className='text-indigo-500' />
                                </div>
                                <div>
                                    <span className='text-xs text-slate-400 font-medium'>Location</span>
                                    <p className='text-sm font-semibold text-slate-700'>
                                        {member.city}, {member.country}
                                    </p>
                                </div>
                            </div>

                            <div className='flex items-center gap-3'>
                                <div className='w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center'>
                                    <HiOutlineUserCircle size={16} className='text-purple-500' />
                                </div>
                                <div>
                                    <span className='text-xs text-slate-400 font-medium'>Gender</span>
                                    <p className='text-sm font-semibold text-slate-700 capitalize'>
                                        {member.gender}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>

            {/* Photos Section */}
            {photos && photos.length > 0 && (
                <Card className='border-none glass-card rounded-3xl'>
                    <CardBody className='p-6'>
                        <div className='flex items-center justify-between mb-5'>
                            <div className='flex items-center gap-2'>
                                <div className='w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-[18px] h-[18px] text-white' fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className='text-lg font-bold text-slate-800'>Photos</h3>
                            </div>
                            <span className='text-sm text-slate-400 font-medium'>{photos.length} photos</span>
                        </div>
                        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
                            {photos.map((photo) => (
                                <div key={photo.id} className='relative group rounded-2xl overflow-hidden aspect-square'>
                                    <Image
                                        src={photo.url}
                                        alt='Member photo'
                                        fill
                                        className='object-cover transition-transform duration-500 group-hover:scale-110'
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                                </div>
                            ))}
                        </div>
                    </CardBody>
                </Card>
            )}
        </div>
    )
}
