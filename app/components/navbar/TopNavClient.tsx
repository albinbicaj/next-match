'use client'

import {
    Button,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from '@heroui/react'
import Link from 'next/link'
import { GiMatchTip } from 'react-icons/gi'
import NavLink from './NavLink'
import UserMenu from './UserMenu'
import { Session } from 'next-auth'
import { motion } from 'framer-motion'

type Props = {
    session: Session | null
}

export default function TopNavClient({ session }: Props) {
    return (
        <Navbar
            maxWidth="full"
            className="bg-white/70 backdrop-blur-xl border-b border-white/20 h-20 px-0"
            classNames={{
                wrapper: "max-w-[100%] w-full px-6 sm:px-12",
                item: [
                    "flex",
                    "relative",
                    "h-full",
                    "items-center",
                    "data-[active=true]:after:content-['']",
                    "data-[active=true]:after:absolute",
                    "data-[active=true]:after:bottom-0",
                    "data-[active=true]:after:left-0",
                    "data-[active=true]:after:right-0",
                    "data-[active=true]:after:h-[3px]",
                    "data-[active=true]:after:rounded-t-full",
                    "data-[active=true]:after:bg-indigo-600",
                ],
            }}
        >
            <NavbarBrand as={Link} href="/" className="gap-3 cursor-pointer flex-grow-0">
                <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <GiMatchTip size={42} className="text-pink-600 drop-shadow-sm" />
                </motion.div>
                <div className="font-black text-2xl tracking-tighter flex items-center">
                    <span className="text-slate-900">Next</span>
                    <span className="bg-gradient-to-r from-pink-500 to-indigo-600 bg-clip-text text-transparent">Match</span>
                </div>
            </NavbarBrand>

            <NavbarContent justify="center" className="hidden sm:flex gap-10 absolute left-1/2 -translate-x-1/2">
                <NavLink href="/members" label="Members" />
                <NavLink href="/lists" label="Lists" />
                <NavLink href="/messages" label="Messages" />
            </NavbarContent>

            <NavbarContent justify="end" className="flex-grow justify-end">
                {session ? (
                    <UserMenu user={session.user} />
                ) : (
                    <div className="flex items-center gap-3">
                        <Button
                            as={Link}
                            href="/login"
                            variant="light"
                            className="text-slate-700 font-bold hover:bg-slate-100"
                        >
                            Login
                        </Button>
                        <Button
                            as={Link}
                            href="/register"
                            className="btn-gradient px-8 font-bold shadow-lg"
                        >
                            Get Started
                        </Button>
                    </div>
                )}
            </NavbarContent>
        </Navbar>
    )
}
