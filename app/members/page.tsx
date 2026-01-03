"use client"

import { Button } from '@heroui/button'
import Link from 'next/link'
import { FaRegSmile } from 'react-icons/fa'

function MembersPage() {
    return (
        <div>
            <Button
                href='/'
                as={Link}
                color='primary'
                variant='bordered'
                startContent={<FaRegSmile />}
            >
                Click me
            </Button>
        </div>
    )
}

export default MembersPage
