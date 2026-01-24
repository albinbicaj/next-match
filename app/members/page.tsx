"use client"

import { Button, Card, CardBody } from '@heroui/react'
import Link from 'next/link'
import { FaRegSmile, FaArrowLeft } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function MembersPage() {
    return (
        <div className="hero-container px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md w-full"
            >
                <Card className="glass-card p-8 text-center space-y-6">
                    <CardBody className="flex flex-col items-center gap-6">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-pink-500 to-indigo-600 flex items-center justify-center shadow-xl">
                            <FaRegSmile size={40} className="text-white" />
                        </div>
                        <h2 className="text-3xl font-black text-slate-900">Members Area</h2>
                        <p className="text-slate-600 font-medium">
                            Welcome to the inner circle! We're currently building something amazing for you. Stay tuned.
                        </p>
                        <Button
                            as={Link}
                            href="/"
                            variant="light"
                            startContent={<FaArrowLeft />}
                            className="font-bold text-indigo-600"
                        >
                            Back to Home
                        </Button>
                    </CardBody>
                </Card>
            </motion.div>
        </div>
    )
}
