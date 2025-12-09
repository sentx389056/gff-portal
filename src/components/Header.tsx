"use client"

import Image from "next/image"
import {LogOutIcon, Menu} from "lucide-react"
import Link from "next/link"
import {Button} from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import React from "react"
import {useSession, signOut} from "next-auth/react"
import AdminPanel from "@/components/AdminComponents/admin-panel";

const navLinks = [
    {
        id: 1,
        title: "Главная",
        href: "/",
        target: "_self",
    },
    {
        id: 2,
        title: "Документы",
        href: "/documents",
        target: "_self",
    },
    {
        id: 3,
        title: "Архив",
        href: "/archive",
        target: "_self",
    },
    {
        id: 4,
        title: "Наша деятельность",
        href: "/activities",
        target: "_self",
    },
    {
        id: 5,
        title: "Руководство портала",
        href: "/management",
        target: "_self",
    },
    {
        id: 6,
        title: "Телефонный справочник",
        href: "http://pb.gff-rf.ru",
        target: "_blank",
    },
    {
        id: 7,
        title: "GLPI",
        href: "http://sd.gff-rf.ru",
        target: "_blank",
    },
]

export default function Header() {
    const {data: session, status} = useSession()
    const [isAdmin, setIsAdmin] = React.useState(false)
    const [userName, setUserName] = React.useState("")

    React.useEffect(() => {
        if (status === "authenticated" && session?.user) {
            const userRole = (session.user as any).role || "user";
            setIsAdmin(userRole === "admin")
            setUserName(session.user.name || "")
            localStorage.setItem("isAdmin", userRole === "admin" ? "true" : "false")
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
            await signOut({callbackUrl: "/", redirect: true})
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
        <header className="flex px-6 h-23 w-full items-center justify-between shadow-md">
            <Sheet>
                <Link href="/" className="flex items-center gap-4">
                    <Image
                        className="invert"
                        src="/logo.svg"
                        alt="GFF logo"
                        width={71}
                        height={47}
                        priority
                    />
                    <div>
                        <h1 className="text-lg">Локальный портал</h1>
                    </div>
                </Link>
                <div className="">
                    <div className="hidden xl:flex items-center justify-center gap-2 md:gap-8">
                        {navLinks.map((item) => (
                            <Link key={item.id}
                                  className="hover:border-b-1 hover:border-b-slate-800 duration-300 focus:border-b-2 focus:border-b-slate-800"
                                  href={item.href}
                                  target={item.target}>
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="hidden xl:flex items-center justify-end gap-[12px] relative">
                    {isAdmin && <AdminPanel/>}
                    {status === "authenticated" && (
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-slate-500">{userName}</span>
                            <Button
                                size="icon"
                                variant="outline"
                                className="cursor-pointer"
                                onClick={handleLogout}
                            >
                                <LogOutIcon/>
                            </Button>
                        </div>
                    )}
                </div>
                <div className="flex grow items-center justify-end xl:hidden">
                    <SheetTrigger
                        asChild
                        className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none"
                    >

                        <Menu className="text-slate-500" size={40} aria-hidden="true"/>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>
                                <div className="text-slate-500 mt-8 flex w-full flex-col gap-6">
                                    {navLinks.map((item) => (
                                        <Link key={item.id}
                                              className="hover:border-b-1 hover:border-b-slate-800 duration-300 focus:border-b-2 focus:border-b-slate-800"
                                              href={item.href}
                                              target={item.target}>
                                            {item.title}
                                        </Link>
                                    ))}
                                </div>
                            </SheetTitle>
                        </SheetHeader>
                    </SheetContent>
                </div>
            </Sheet>
        </header>
    )
}
