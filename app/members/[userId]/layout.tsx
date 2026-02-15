import { getMemberbyUserId } from '@/app/actions/memberActions'
import React from 'react'
import MemberSidebar from '../MemberSidebar'
import { notFound } from 'next/navigation'

interface LayoutProps {
    children: React.ReactNode
    params: Promise<{ userId: string }>
}

export default async function Layout({ children, params }: LayoutProps) {
    const { userId } = await params
    const member = await getMemberbyUserId(userId)

    if (!member) return notFound()

    return (
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8'>
            <div className='grid grid-cols-12 gap-6 lg:gap-8'>
                {/* Sidebar */}
                <div className='col-span-12 lg:col-span-3'>
                    <div className='lg:sticky lg:top-28'>
                        <MemberSidebar member={member} />
                    </div>
                </div>

                {/* Main Content */}
                <div className='col-span-12 lg:col-span-9'>
                    {children}
                </div>
            </div>
        </div>
    )
}
