import React from 'react'

export default function MessagesPage() {
    return (
        <div className='container mx-auto px-4 py-10'>
            <div className='glass-card p-10 rounded-3xl'>
                <h1 className='text-4xl font-black bg-gradient-to-r from-pink-500 to-indigo-600 bg-clip-text text-transparent mb-4'>
                    Messages
                </h1>
                <p className='text-slate-600 font-medium'>Your inbox is empty. Message someone to start a conversation!</p>
            </div>
        </div>
    )
}

