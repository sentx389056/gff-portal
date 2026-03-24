"use client"

import Image from "next/image"
import { LogOutIcon, Menu, ChevronDown } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React from "react"
import { useSession, signOut } from "next-auth/react"
import AdminPanel from "@/components/AdminComponents/admin-panel";
import MasterBookingsPanel from "@/components/MasterBookingsPanel";

const navLinks = [
    { id: 1, title: "Главная",          href: "/",           target: "_self" },
    { id: 2, title: "Документы",        href: "/documents",  target: "_self" },
    { id: 3, title: "Архив",            href: "/archive",    target: "_self" },
    { id: 4, title: "Наша деятельность",href: "/activities", target: "_self" },
    { id: 5, title: "Структура",        href: "/management", target: "_self" },
    { id: 6, title: "Услуги",           href: "/services",   target: "_self" },
]

const resourceLinks = [
    { id: 1, title: "Телефонный справочник", href: "http://pb.gff-rf.ru", target: "_blank" },
    { id: 2, title: "Служба поддержки",      href: "http://sd.gff-rf.ru", target: "_blank" },
]

export default function Header() {
    const { data: session, status } = useSession()
    const [isAdmin, setIsAdmin] = React.useState(false)
    const [isMaster, setIsMaster] = React.useState(false)
    const [userName, setUserName] = React.useState("")

    React.useEffect(() => {
        if (status === "authenticated" && session?.user) {
            const userRole = (session.user as { role?: string }).role || "user";
            setIsAdmin(userRole === "admin")
            setIsMaster(userRole === "master")
            setUserName(session.user.name || "")
            localStorage.setItem("isAdmin", userRole === "admin" ? "true" : "false")
            localStorage.setItem("userName", session.user.name || "")
        } else {
            setIsAdmin(false)
            setIsMaster(false)
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
        <header className="flex px-6 h-23 w-full items-center gap-6 shadow-md">
            {/* Лого */}
            <Link href="/" className="flex items-center gap-4 shrink-0">
                <Image
                    className="invert"
                    src="/logo.svg"
                    alt="GFF logo"
                    width={71}
                    height={47}
                    priority
                />
                <div>
                    <h1 className="text-lg">Портал Госфильмофонда</h1>
                </div>
            </Link>

            {/* Навигация — десктоп */}
            <nav className="hidden 2xl:flex flex-1 items-center justify-center gap-6">
                {navLinks.map((item) => (
                    <Link key={item.id}
                        className="hover:border-b hover:border-b-slate-800 duration-300 focus:border-b-2 focus:border-b-slate-800"
                        href={item.href}
                        target={item.target}>
                        {item.title}
                    </Link>
                ))}
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 hover:border-b hover:border-b-slate-800 duration-300 outline-none">
                        Ресурсы <ChevronDown size={14} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {resourceLinks.map((item) => (
                            <DropdownMenuItem key={item.id} asChild>
                                <Link href={item.href} target={item.target}>
                                    {item.title}
                                </Link>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </nav>

            {/* Правая панель — десктоп */}
            <div className="hidden 2xl:flex items-center gap-3 shrink-0">
                {isAdmin && <AdminPanel />}
                {isMaster && <MasterBookingsPanel />}
                {status === "authenticated" ? (
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
                ) : (
                    <Button variant="outline" asChild>
                        <Link href="/auth">Войти</Link>
                    </Button>
                )}
            </div>

            {/* Мобильное меню */}
            <div className="flex 2xl:hidden ml-auto">
                <Sheet>
                    <SheetTrigger
                        asChild
                        className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none"
                    >
                        <Menu className="text-slate-500" size={40} aria-hidden="true" />
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>
                                <div className="text-slate-500 mt-8 flex w-full flex-col gap-6">
                                    {[...navLinks, ...resourceLinks].map((item) => (
                                        <Link key={item.id + item.href}
                                            className="hover:border-b hover:border-b-slate-800 duration-300"
                                            href={item.href}
                                            target={item.target}>
                                            {item.title}
                                        </Link>
                                    ))}
                                </div>
                            </SheetTitle>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}
