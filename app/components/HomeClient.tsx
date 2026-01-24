"use client"
import { Button } from "@heroui/button";
import { FaHeart, FaRocket, FaShieldAlt } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import { Session } from "next-auth";

type Props = {
    session: Session | null
}

export default function HomeClient({ session }: Props) {
    return (
        <div className="hero-container px-6">
            <div className="max-w-5xl w-full text-center space-y-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-white/20 shadow-sm mb-4"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                    </span>
                    <span className="text-xs font-black uppercase tracking-widest text-pink-600">The Future of Dating is Here</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-7xl md:text-9xl font-black tracking-tighter"
                >
                    <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">Next</span>
                    <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent">Match</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl md:text-3xl text-slate-600 font-medium max-w-2xl mx-auto leading-tight"
                >
                    Find your perfect connection. Built for those who value <span className="text-pink-600 font-bold">beauty</span>, <span className="text-purple-600 font-bold">speed</span>, and <span className="text-indigo-600 font-bold">real</span> matches.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-wrap items-center justify-center gap-6 pt-4"
                >
                    {session ? (
                        <Link href="/members">
                            <Button
                                size="lg"
                                className="btn-gradient px-12 h-16 text-xl shadow-[0_10px_40px_rgba(236,72,153,0.3)] rounded-2xl"
                                startContent={<FaHeart />}
                            >
                                Go to Members
                            </Button>
                        </Link>
                    ) : (
                        <>
                            <Link href="/register">
                                <Button
                                    size="lg"
                                    className="btn-gradient px-12 h-16 text-xl shadow-[0_10px_40px_rgba(236,72,153,0.3)] rounded-2xl"
                                    startContent={<FaHeart />}
                                >
                                    Start Matching
                                </Button>
                            </Link>
                            <Link href="/login">
                                <Button
                                    size="lg"
                                    variant="bordered"
                                    className="bg-white/50 backdrop-blur-md border-2 border-slate-200 text-slate-700 font-black px-12 h-16 text-xl rounded-2xl hover:bg-white hover:border-indigo-400 transition-all shadow-sm"
                                >
                                    Sign In
                                </Button>
                            </Link>
                        </>
                    )}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-20 max-w-4xl mx-auto"
                >
                    {[
                        { icon: <FaRocket className="text-pink-500" />, title: "Lighting Fast", desc: "Built with Next.js 16 for instant interactions." },
                        { icon: <FaShieldAlt className="text-purple-500" />, title: "Secure", desc: "Your data is protected with industry standards." },
                        { icon: <FaHeart className="text-indigo-500" />, title: "Real Matches", desc: "Our algorithm finds your true perfect match." }
                    ].map((feature, i) => (
                        <div key={i} className="glass-card p-6 rounded-3xl text-left hover:scale-105 transition-transform cursor-default">
                            <div className="text-2xl mb-3">{feature.icon}</div>
                            <h3 className="text-lg font-black text-slate-900 mb-1">{feature.title}</h3>
                            <p className="text-slate-500 font-medium text-sm leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-pink-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob"></div>
                <div className="absolute top-[20%] right-[-5%] w-[35rem] h-[35rem] bg-indigo-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-[45rem] h-[45rem] bg-purple-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob animation-delay-4000"></div>
            </div>
        </div>
    );
}
