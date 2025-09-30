"use client"

import Image from "next/image"
import { LogOutIcon, Menu, Search } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import React from "react"
import LoginDialog from "@/components/login-dialog"
import { useSession, signOut } from "next-auth/react"
import AdminPanel from "@/components/AdminComponents/admin-panel";

export default function Header() {
    const [query, setQuery] = React.useState("")
    const [loginOpen, setLoginOpen] = React.useState(false)
    const { data: session, status } = useSession()
    const [isAdmin, setIsAdmin] = React.useState(false)
    const [userName, setUserName] = React.useState("")

    React.useEffect(() => {
        if (status === "authenticated" && session?.user) {
            setIsAdmin(session.user.role === "admin")
            setUserName(session.user.name || "")
            localStorage.setItem("isAdmin", session.user.role === "admin" ? "true" : "false")
            localStorage.setItem("userName", session.user.name || "")
        } else {
            setIsAdmin(false)
            setUserName("")
            localStorage.removeItem("isAdmin")
            localStorage.removeItem("userName")
        }
    }, [session, status])

    const handleLogout = async () => {
        try {
            // Вызываем API для обновления статуса и очистки куки
            const response = await fetch("/api/auth/signout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            if (!response.ok) {
                throw new Error(`Ошибка при выходе: ${response.status}`)
            }

            // Выполняем выход
            await signOut({ callbackUrl: "/", redirect: true })
        } catch (error) {
            console.error("Ошибка при выходе:", error)
        } finally {
            // Очищаем состояние независимо от результата
            setIsAdmin(false)
            setUserName("")
            localStorage.removeItem("isAdmin")
            localStorage.removeItem("userName")
        }
    }

    return (
        <header className="grid grid-cols-3 px-6 h-23 w-full items-center shadow-md">
            <Sheet>
                <Link href="/" className="flex items-center gap-4">
                    <Image
                        className="hidden sm:flex invert"
                        src="/logo.svg"
                        alt="GFF logo"
                        width={71}
                        height={47}
                        priority
                    />
                    <div>
                        <h1 className="text-[19px] leading-[28px]">Госфильмофонд России</h1>
                        <p className="text-[13px] leading-[20px] text-slate-500">
                            Государственный фонд кинофильмов Российской Федерации
                        </p>
                    </div>
                </Link>
                <div className="">
                    <div className="hidden xl:flex items-center justify-center gap-2 md:gap-8">
                        <Link className="text-slate-500" href="/">Главная</Link>
                        <Link className="text-slate-500" href="/documents">Документы</Link>
                        <Link className="text-slate-500" href="/archive">Архив</Link>
                    </div>
                </div>
                <div className="hidden xl:flex items-center justify-end gap-[12px] relative">
                    {isAdmin && <AdminPanel />}
                    {status === "authenticated" && (
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-slate-500">{userName}</span>
                            <Button
                                size="icon"
                                variant="outline"
                                className="cursor-pointer"
                                onClick={handleLogout}
                            >
                                <LogOutIcon />
                            </Button>
                        </div>
                    )}
                    {status !== "authenticated" && (
                        <LoginDialog
                            open={loginOpen}
                            setOpen={setLoginOpen}
                            setIsAdmin={setIsAdmin}
                            setUserName={setUserName}
                        />
                    )}
                </div>
                <div className="flex grow items-center justify-end xl:hidden">
                    <SheetTrigger
                        asChild
                        className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none"
                    >
                        <Button variant="ghost" className="hover:bg-slate-200/50 cursor-pointer">
                            <span className="sr-only">Открыть меню</span>
                            <Menu className="text-slate-500" aria-hidden="true" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>
                                <div className="mt-8 flex items-center gap-[12px]">
                                    <Button className="cursor-pointer">
                                        <Search className="text-slate-500" aria-hidden="true" />
                                    </Button>
                                    <Input placeholder="Поиск..." />
                                </div>
                            </SheetTitle>
                            <nav className="mt-8 flex w-full flex-col gap-6">
                                <Link className="text-slate-500" href="/">Главная</Link>
                                <Link className="text-slate-500" href="/documents">Документы</Link>
                                <Link className="text-slate-500" href="/archive">Архив</Link>
                            </nav>
                        </SheetHeader>
                    </SheetContent>
                </div>
            </Sheet>
        </header>
    )
}
