'use client' // Error boundaries must be Client Components

import { Card } from '@heroui/react'
import { useEffect } from 'react'

export default function ErrorPage({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div>
            <Card className='bg-red-100 text-red-800 p-4 mb-4'>
                <h2 className='text-lg font-bold'>Error</h2>
                <p className='text-sm'>{error.message}</p>
                <p className='text-sm'>{error.digest}</p>
            </Card>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </button>
        </div>
    )
}