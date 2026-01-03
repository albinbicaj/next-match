"use client"

import { Button, Navbar, NavbarBrand, NavbarContent } from '@heroui/react'
import Link from 'next/link'
import React from 'react'
import { GiMatchTip } from 'react-icons/gi'
import NavLink from './NavLink'

function TopNav() {
    return (
        <Navbar>
            <NavbarBrand>
                <GiMatchTip size={40} />
                <div>
                    <span>Next</span>
                    <span>Match</span>
                </div>
            </NavbarBrand>
            <NavbarContent justify="center">
                <NavLink href={"/members"} label="Members" />
                <NavLink href={"/lists"} label="Lists" />
                <NavLink href={"/messages"} label="Messages" />
            </NavbarContent>
            <NavbarContent justify="end">
                <Button as={Link} href={"/login"} variant='bordered'>Login</Button>
                <Button as={Link} href={"/register"} variant='bordered'>Register</Button>
            </NavbarContent>
        </Navbar>
    )
}

export default TopNav
