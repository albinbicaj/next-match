'use client'

import {
    Button,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    Avatar,
    Divider,
} from '@heroui/react'
import Link from 'next/link'
import { GiMatchTip } from 'react-icons/gi'
import NavLink from './NavLink'
import UserMenu from './UserMenu'
import { Session } from 'next-auth'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { HiOutlineUserGroup, HiOutlineHeart, HiOutlineChatAlt2, HiOutlineLogin, HiOutlineUserAdd, HiOutlineLogout, HiOutlineUser, HiOutlineSparkles } from 'react-icons/hi'
import { signOut } from 'next-auth/react'

type Props = {
    session: Session | null
}

const Path = (props: any) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="currentColor"
        strokeLinecap="round"
        {...props}
    />
);

export default function TopNavClient({ session }: Props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '/members', label: 'Explore', icon: <HiOutlineUserGroup size={22} />, desc: 'Find your match' },
        { href: '/lists', label: 'Likes', icon: <HiOutlineHeart size={22} />, desc: 'Your connections' },
        { href: '/messages', label: 'Chats', icon: <HiOutlineChatAlt2 size={22} />, desc: 'Start talking' },
    ];

    return (
        <Navbar
            onMenuOpenChange={setIsMenuOpen}
            maxWidth="full"
            className="bg-white/40 backdrop-blur-2xl border-b border-white/20 h-20 fixed top-0 transition-all duration-500 z-[100]"
            isMenuOpen={isMenuOpen}
            classNames={{
                wrapper: "w-full max-w-full px-4 sm:px-12 h-full",
                menu: "bg-white/80 backdrop-blur-3xl pt-10 h-screen border-r border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.1)] overflow-y-auto scrollbar-hide",
            }}
        >
            <NavbarContent className="lg:hidden" justify="start">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/50 border border-white/20 text-slate-800 hover:bg-white hover:shadow-lg transition-all"
                >
                    <svg width="23" height="23" viewBox="0 0 23 23">
                        <Path
                            variants={{
                                closed: { d: "M 2 2.5 L 20 2.5" },
                                open: { d: "M 3 16.5 L 17 2.5" }
                            }}
                            initial={false}
                            animate={isMenuOpen ? "open" : "closed"}
                        />
                        <Path
                            d="M 2 9.423 L 20 9.423"
                            variants={{
                                closed: { opacity: 1 },
                                open: { opacity: 0 }
                            }}
                            initial={false}
                            animate={isMenuOpen ? "open" : "closed"}
                            transition={{ duration: 0.1 }}
                        />
                        <Path
                            variants={{
                                closed: { d: "M 2 16.346 L 20 16.346" },
                                open: { d: "M 3 2.5 L 17 16.346" }
                            }}
                            initial={false}
                            animate={isMenuOpen ? "open" : "closed"}
                        />
                    </svg>
                </button>
            </NavbarContent>

            <NavbarContent justify="start" className="gap-4">
                <NavbarBrand as={Link} href="/" className="gap-2 cursor-pointer group">
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                        className="p-1.5 bg-gradient-to-tr from-pink-500 to-indigo-600 rounded-2xl shadow-lg glow-primary"
                    >
                        <GiMatchTip size={32} className="text-white" />
                    </motion.div>
                    <div className="font-black text-2xl tracking-tighter hidden xs:flex flex-col">
                        <span className="text-slate-900 leading-none">Next</span>
                        <span className="bg-gradient-to-r from-pink-500 to-indigo-600 bg-clip-text text-transparent leading-none">Match</span>
                    </div>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent justify="center" className="hidden lg:flex gap-4 p-1 bg-white/50 rounded-full border border-white/40 shadow-sm backdrop-blur-md">
                {navLinks.map((link) => (
                    <NavbarItem key={link.href}>
                        <Link
                            href={link.href}
                            className="flex items-center gap-2 px-6 py-2 rounded-full font-bold text-slate-600 hover:bg-white hover:text-pink-600 hover:shadow-sm transition-all"
                        >
                            <span className="opacity-70 group-hover:opacity-100">{link.icon}</span>
                            <span>{link.label}</span>
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify="end" className="gap-4">
                {session ? (
                    <UserMenu user={session.user} />
                ) : (
                    <div className="flex items-center gap-2 sm:gap-4">
                        <Link href="/login" className="text-sm font-black text-slate-700 hover:text-pink-600 transition-colors hidden sm:block">
                            Sign In
                        </Link>
                        <Button
                            as={Link}
                            href="/register"
                            className="btn-gradient px-6 sm:px-10 h-12 text-sm sm:text-base font-black rounded-2xl shadow-xl glow-primary hover:scale-[1.02] transition-transform"
                        >
                            Join Free
                        </Button>
                    </div>
                )}
            </NavbarContent>

            <NavbarMenu className="max-w-[340px] px-6">
                <AnimatePresence mode="wait">
                    {session && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className='mb-10 w-full'
                        >
                            <div className="glass-premium p-6 rounded-[2.5rem] relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <HiOutlineSparkles size={100} className="text-pink-500 rotate-12" />
                                </div>
                                <div className="flex flex-col items-center relative z-10">
                                    <div className="relative mb-4">
                                        <Avatar
                                            isBordered
                                            className='w-24 h-24 ring-4 ring-pink-500/20'
                                            src={session.user?.image || undefined}
                                            showFallback
                                            fallback={<HiOutlineUser size={40} className="text-slate-400" />}
                                        />
                                        <div className="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-4 border-white shadow-sm"></div>
                                    </div>
                                    <span className='font-black text-2xl text-slate-900'>{session.user?.name}</span>
                                    <div className="mt-2 px-4 py-1 rounded-full bg-indigo-50 text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em]">Verified Member</div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className='flex flex-col gap-3'>
                    {navLinks.map((link, i) => (
                        <NavbarMenuItem key={link.href}>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Link
                                    className="flex items-center gap-5 w-full p-4 rounded-[1.8rem] bg-white/40 border border-transparent hover:border-pink-100 hover:bg-white hover:shadow-xl hover:shadow-pink-50 transition-all group"
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <div className='p-3.5 rounded-2xl bg-slate-100 text-slate-500 group-hover:bg-pink-500 group-hover:text-white transition-all group-hover:scale-110 group-hover:rotate-3'>
                                        {link.icon}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className='text-lg font-black text-slate-800 group-hover:text-pink-600'>{link.label}</span>
                                        <span className='text-xs font-bold text-slate-400'>{link.desc}</span>
                                    </div>
                                </Link>
                            </motion.div>
                        </NavbarMenuItem>
                    ))}
                </div>

                <div className='mt-auto pb-10 flex flex-col gap-6 pt-10'>
                    <Divider className='bg-slate-100' />
                    {!session ? (
                        <div className="grid grid-cols-1 gap-4">
                            <NavbarMenuItem>
                                <Button
                                    as={Link}
                                    fullWidth
                                    variant="bordered"
                                    className="h-16 rounded-[1.8rem] border-2 border-slate-100 text-slate-700 font-bold text-lg hover:bg-slate-50"
                                    href="/login"
                                    onClick={() => setIsMenuOpen(false)}
                                    startContent={<HiOutlineLogin size={24} />}
                                >
                                    Sign In
                                </Button>
                            </NavbarMenuItem>
                            <NavbarMenuItem>
                                <Button
                                    as={Link}
                                    fullWidth
                                    className="h-16 rounded-[1.8rem] btn-gradient text-white font-black text-lg glow-primary"
                                    href="/register"
                                    onClick={() => setIsMenuOpen(false)}
                                    startContent={<HiOutlineUserAdd size={24} />}
                                >
                                    Create Account
                                </Button>
                            </NavbarMenuItem>
                        </div>
                    ) : (
                        <NavbarMenuItem>
                            <Button
                                fullWidth
                                variant="light"
                                className="h-16 rounded-[1.8rem] text-red-500 font-black text-lg hover:bg-red-50 flex items-center gap-4"
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    signOut({ callbackUrl: '/' });
                                }}
                                startContent={<HiOutlineLogout size={24} />}
                            >
                                Log Out Account
                            </Button>
                        </NavbarMenuItem>
                    )}
                </div>
            </NavbarMenu>
        </Navbar>
    )
}





