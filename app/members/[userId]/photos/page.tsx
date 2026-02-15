import { getMemberPhotosByUserId } from '@/app/actions/memberActions'
import { notFound } from 'next/navigation'
import MemberPhotosClient from './MemberPhotosClient'

export default async function MemberPhotosPage({
    params,
}: { params: Promise<{ userId: string }> }) {
    const { userId } = await params

    const photos = await getMemberPhotosByUserId(userId)
    if (!photos) return notFound()

    return <MemberPhotosClient photos={photos} />
}
