import React from 'react'

export default function ListsPage() {
    return (
        <div className='container mx-auto px-4 py-10'>
            <div className='glass-card p-10 rounded-3xl'>
                <h1 className='text-4xl font-black bg-gradient-to-r from-pink-500 to-indigo-600 bg-clip-text text-transparent mb-4'>
                    Your Lists
                </h1>
                <p className='text-slate-600 font-medium'>You haven't added anyone to your lists yet. Start matching to find people you like!</p>
            </div>
        </div>
    )
}

