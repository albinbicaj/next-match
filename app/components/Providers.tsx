"use client"
import { HeroUIProvider } from '@heroui/react'
import React from 'react'
import { ToastContainer } from 'react-toastify'

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <HeroUIProvider>
            <ToastContainer position='bottom-right' hideProgressBar
                className='z-50'
            />
            {children}
        </HeroUIProvider>
    )
}

