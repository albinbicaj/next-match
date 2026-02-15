import { getMembers } from '../actions/memberActions';
import MemberCard from './MemberCard';
import { HiOutlineUserGroup, HiOutlineSparkles } from 'react-icons/hi';

export default async function MembersPage() {
    const members = await getMembers();

    return (
        <div className='min-h-[calc(100vh-80px)]'>
            {/* Hero Header */}
            <div className='relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 border-b border-white/60'>
                <div className='absolute inset-0'>
                    <div className='absolute top-10 left-10 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl animate-blob' />
                    <div className='absolute top-20 right-20 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl animate-blob animation-delay-2000' />
                    <div className='absolute -bottom-10 left-1/2 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl animate-blob animation-delay-4000' />
                </div>

                <div className='relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16'>
                    <div className='flex flex-col items-center text-center'>
                        <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm mb-6'>
                            <HiOutlineSparkles className='text-pink-500' size={16} />
                            <span className='text-xs font-bold text-slate-600 uppercase tracking-wider'>Discover your match</span>
                        </div>

                        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight'>
                            <span className='text-slate-900'>Find </span>
                            <span className='bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent'>
                                Someone Special
                            </span>
                        </h1>

                        <p className='mt-4 text-lg text-slate-500 max-w-xl font-medium'>
                            Browse through our community of amazing people and find your perfect connection.
                        </p>

                        {members && members.length > 0 && (
                            <div className='mt-8 flex items-center gap-6'>
                                <div className='flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/40 shadow-sm'>
                                    <HiOutlineUserGroup className='text-indigo-500' size={20} />
                                    <span className='text-sm font-bold text-slate-700'>
                                        {members.length} {members.length === 1 ? 'Member' : 'Members'} Online
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Members Grid */}
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14'>
                {members && members.length > 0 ? (
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
                        {members.map((member) => (
                            <MemberCard key={member.id} member={member} />
                        ))}
                    </div>
                ) : (
                    <div className='flex flex-col items-center justify-center py-20'>
                        <div className='w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mb-4'>
                            <HiOutlineUserGroup className='text-slate-400' size={36} />
                        </div>
                        <h3 className='text-xl font-bold text-slate-700'>No members found</h3>
                        <p className='text-slate-500 mt-2'>Check back later for new people to connect with.</p>
                    </div>
                )}
            </div>
        </div>
    )
}
