"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"
import {UserIcon} from "lucide-react";

interface LoginDialogProps {
  open: boolean
  setOpen: (open: boolean) => void
  setIsAdmin: (isAdmin: boolean) => void
  setUserName: (name: string) => void
}

export default function LoginDialog({ open, setOpen, setIsAdmin, setUserName }: LoginDialogProps) {
  const [login, setLogin] = React.useState("")
  const [pass, setPass] = React.useState("")
  const [loginError, setLoginError] = React.useState("")
  const [loading, setLoading] = React.useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("handleLogin вызван", { username: login, password: pass })
    setLoginError("")
    setLoading(true)

    try {
      const result = await signIn("credentials", {
        redirect: false,
        username: login,
        password: pass,
      })

      console.log("Результат signIn:", result)

      if (result?.error) {
        throw new Error(result.error)
      }

      if (result?.ok) {
        const response = await fetch("/api/auth/session", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        if (!response.ok) {
          throw new Error(`Ошибка при получении сессии: ${response.status}`)
        }
        const session = await response.json()
        console.log("Сессия после входа:", session)
        if (session?.user) {
          setIsAdmin(session.user.role === "admin")
          setUserName(session.user.name || "")
          localStorage.setItem("isAdmin", session.user.role === "admin" ? "true" : "false")
          localStorage.setItem("userName", session.user.name || "")
        }
        setLogin("")
        setPass("")
        setOpen(false)
      } else {
        throw new Error("Не удалось выполнить вход")
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Произошла ошибка"
      setLoginError(errorMessage)
      console.error("Ошибка в handleLogin:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="icon" variant="outline">
            <UserIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleLogin}>
          <DialogHeader>
            <DialogTitle>Вход в аккаунт</DialogTitle>
            <DialogDescription>Введите логин и пароль</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="login-1">Логин:</Label>
              <Input
                id="login-1"
                name="login"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                disabled={loading}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="pass-1">Пароль:</Label>
              <Input
                id="pass-1"
                name="pass"
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                disabled={loading}
              />
            </div>
            {loginError && <div className="text-red-500 text-sm">{loginError}</div>}
          </div>
          <DialogFooter className="mt-7">
            <DialogClose asChild>
              <Button type="button" variant="outline" className="cursor-pointer" disabled={loading}>
                Отмена
              </Button>
            </DialogClose>
            <Button type="submit" className="cursor-pointer" disabled={loading}>
              {loading ? "Вход..." : "Продолжить"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}