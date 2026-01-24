"use client"
import { signInUser } from '@/app/actions/authActions'
import { loginSchema, LoginSchema } from '@/app/lib/schemas/loginSchema'
import { Button, Card, CardBody, CardHeader, Input } from '@heroui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { GiPadlock } from 'react-icons/gi'
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi'
import { toast } from 'react-toastify'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function LoginForm() {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors, isValid, isSubmitting } } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        mode: 'onTouched',
    })

    const onSubmit = async (data: LoginSchema) => {
        const result = await signInUser(data);
        if (result.status === "success") {
            router.push("/members")
            router.refresh()
            toast.success("Welcome back!")
        }
        else {
            toast.error(result.error as string)
        }
    }
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Card className="w-full max-w-md bg-white/90 backdrop-blur-xl shadow-2xl border-2 border-transparent transition-all duration-500 focus-within:shadow-[0_0_60px_rgba(191,219,254,0.6)] focus-within:border-blue-100">
                <CardHeader className="flex flex-col gap-1 items-center justify-center pt-10">
                    <motion.div
                        whileHover={{ rotate: -15, scale: 1.1 }}
                        className="rounded-2xl bg-gradient-to-tr from-indigo-600 to-pink-500 p-4 shadow-xl mb-4"
                    >
                        <GiPadlock size={42} className="text-white" />
                    </motion.div>
                    <h1 className="text-4xl font-black bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
                        Login
                    </h1>
                    <p className="text-slate-500 font-medium tracking-tight">Welcome back to Next Match</p>
                </CardHeader>
                <CardBody className="px-10 pb-12">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <Input
                            placeholder="Email Address"
                            variant="bordered"
                            size="lg"
                            startContent={
                                <div className="p-4 rounded-[1.5rem] bg-slate-50 text-slate-400 mr-4 shadow-sm transition-colors group-focus-within:bg-blue-50 group-focus-within:text-blue-500">
                                    <HiOutlineMail size={28} />
                                </div>
                            }
                            {...register('email')}
                            isInvalid={!!errors.email}
                            errorMessage={errors.email?.message}
                            classNames={{
                                inputWrapper: "h-24 border-2 border-slate-100 bg-slate-50/50 hover:bg-white focus-within:!bg-white focus-within:!border-transparent transition-all duration-500 rounded-[2.5rem] shadow-none group",
                                input: "text-xl font-black placeholder:text-slate-400 py-4",
                            }}
                        />
                        <Input
                            placeholder="Password"
                            type="password"
                            variant="bordered"
                            size="lg"
                            startContent={
                                <div className="p-4 rounded-[1.5rem] bg-slate-50 text-slate-400 mr-4 shadow-sm transition-colors group-focus-within:bg-blue-50 group-focus-within:text-blue-500">
                                    <HiOutlineLockClosed size={28} />
                                </div>
                            }
                            {...register('password')}
                            isInvalid={!!errors.password}
                            errorMessage={errors.password?.message}
                            classNames={{
                                inputWrapper: "h-24 border-2 border-slate-100 bg-slate-50/50 hover:bg-white focus-within:!bg-white focus-within:!border-transparent transition-all duration-500 rounded-[2.5rem] shadow-none group",
                                input: "text-xl font-black placeholder:text-slate-400 py-4",
                            }}
                        />
                        <Button
                            fullWidth
                            size="lg"
                            className="btn-gradient h-24 text-3xl shadow-[0_12px_40px_rgba(236,72,153,0.35)] mt-8 rounded-[2.5rem]"
                            type="submit"
                            isLoading={isSubmitting}
                            isDisabled={!isValid}
                        >
                            Sign In
                        </Button>
                    </form>
                    <div className="mt-8 text-center">
                        <p className="text-slate-600 font-medium">
                            Don't have an account?{' '}
                            <Link href="/register" className="text-pink-600 font-black hover:text-pink-700 transition-colors hover:underline underline-offset-4">
                                Register
                            </Link>
                        </p>
                    </div>
                </CardBody>
            </Card>
        </motion.div>
    )
}
