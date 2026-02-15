import { getMemberbyUserId, getMemberPhotosByUserId } from '@/app/actions/memberActions'
import { notFound } from 'next/navigation'
import MemberDetailedClient from './MemberDetailedClient'

export default async function MemberDetailedPage({
    params,
}: { params: Promise<{ userId: string }> }) {
    const { userId } = await params

    const member = await getMemberbyUserId(userId)
    if (!member) return notFound()

    const photos = await getMemberPhotosByUserId(userId)

    return <MemberDetailedClient member={member} photos={photos} />
}
