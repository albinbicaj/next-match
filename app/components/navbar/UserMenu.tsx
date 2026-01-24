'use client'
import { signOut } from 'next-auth/react'
import {
    Avatar,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Button,
} from '@heroui/react'
import { User } from 'next-auth'
import { HiOutlineLogout, HiOutlineUser, HiOutlineCog, HiChevronDown } from 'react-icons/hi'

type Props = {
    user: User | null | undefined
}

export default function UserMenu({ user }: Props) {
    return (
        <Dropdown placement="bottom-end" className="glass-card border-none min-w-[220px] shadow-2xl">
            <DropdownTrigger>
                <Button
                    variant="light"
                    className="h-14 p-0 px-2 min-w-0 hover:bg-slate-100/50 rounded-2xl transition-all"
                >
                    <div className="flex items-center gap-3">
                        <div className="text-right hidden sm:flex flex-col">
                            <span className="text-sm font-black text-slate-900 leading-tight">{user?.name}</span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Premium Member</span>
                        </div>
                        <div className="relative">
                            <Avatar
                                isBordered
                                className="ring-2 ring-pink-500 ring-offset-2 w-10 h-10"
                                name={user?.name?.[0] || 'U'}
                                size="sm"
                                src={user?.image || undefined}
                                showFallback
                                fallback={<HiOutlineUser size={20} className="text-slate-400" />}
                            />
                            <div className="absolute -bottom-1 -right-1 bg-green-500 w-3 h-3 rounded-full border-2 border-white shadow-sm"></div>
                        </div>
                        <HiChevronDown className="text-slate-400 hidden sm:block" size={16} />
                    </div>
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions" variant="flat" className="p-2 gap-1">
                <DropdownItem
                    key="profile"
                    startContent={<HiOutlineUser className="text-pink-500" size={20} />}
                    className="h-12 flex items-center gap-3 rounded-xl hover:bg-pink-50"
                >
                    <span className="font-bold text-slate-700">My Profile</span>
                </DropdownItem>
                <DropdownItem
                    key="settings"
                    startContent={<HiOutlineCog className="text-indigo-500" size={20} />}
                    className="h-12 flex items-center gap-3 rounded-xl hover:bg-indigo-50"
                >
                    <span className="font-bold text-slate-700">Settings</span>
                </DropdownItem>
                <DropdownItem
                    key="logout"
                    color="danger"
                    startContent={<HiOutlineLogout size={20} />}
                    className="h-12 flex items-center gap-3 rounded-xl hover:!bg-red-50 text-red-600"
                    onPress={() => signOut({ callbackUrl: '/' })}
                >
                    <span className="font-black">Log Out</span>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}
