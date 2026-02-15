"use client"

import { Card, CardBody } from '@heroui/react'
import { Photo } from '@prisma/client'
import Image from 'next/image'
import { HiOutlinePhotograph } from 'react-icons/hi'

type Props = {
    photos: Photo[]
}

export default function MemberPhotosClient({ photos }: Props) {
    if (photos.length === 0) {
        return (
            <Card className='border-none glass-card rounded-3xl'>
                <CardBody className='p-10'>
                    <div className='flex flex-col items-center justify-center py-10'>
                        <div className='w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4'>
                            <HiOutlinePhotograph className='text-slate-400' size={30} />
                        </div>
                        <h3 className='text-lg font-bold text-slate-700'>No photos yet</h3>
                        <p className='text-slate-500 mt-1 text-sm'>This member hasn&apos;t uploaded any photos.</p>
                    </div>
                </CardBody>
            </Card>
        )
    }

    return (
        <Card className='border-none glass-card rounded-3xl'>
            <CardBody className='p-6'>
                <div className='flex items-center gap-2 mb-6'>
                    <div className='w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center'>
                        <HiOutlinePhotograph size={18} className='text-white' />
                    </div>
                    <h3 className='text-lg font-bold text-slate-800'>Photos</h3>
                    <span className='ml-auto text-sm text-slate-400 font-medium'>{photos.length} photos</span>
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
                    {photos.map((photo) => (
                        <div
                            key={photo.id}
                            className='relative group rounded-2xl overflow-hidden aspect-square cursor-pointer'
                        >
                            <Image
                                src={photo.url}
                                alt='Photo'
                                fill
                                className='object-cover transition-transform duration-500 group-hover:scale-110'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                        </div>
                    ))}
                </div>
            </CardBody>
        </Card>
    )
}
