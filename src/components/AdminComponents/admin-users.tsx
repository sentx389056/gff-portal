"use client"

import * as React from "react"
import { EllipsisVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useSession } from "next-auth/react"

interface UserItem {
    id: string
    username: string
    name: string
    role_id: string
    status_id: string
    role: { role: string }
    status: { status: string }
    last_activity: string
    created_at: string
}

interface RoleType {
    id: string
    role: string
}

interface StatusType {
    id: string
    status: string
}

interface FormState {
    username: string
    password: string
    name: string
    role_id: string
    status_id: string
}

export default function AdminUsers() {
    const { data: session, status } = useSession()
    const [users, setUsers] = React.useState<UserItem[]>([])
    const [roles, setRoles] = React.useState<RoleType[]>([])
    const [statuses, setStatuses] = React.useState<StatusType[]>([])
    const [loading, setLoading] = React.useState<boolean>(true)
    const [addOpen, setAddOpen] = React.useState<boolean>(false)
    const [form, setForm] = React.useState<FormState>({
        username: "",
        password: "",
        name: "",
        role_id: "",
        status_id: "",
    })
    const [formErrors, setFormErrors] = React.useState<Partial<FormState>>({})
    const [addError, setAddError] = React.useState<string | null>(null)
    const [mode, setMode] = React.useState<"add" | "edit">("add")
    const [editId, setEditId] = React.useState<string | null>(null)

    React.useEffect(() => {
        async function fetchData() {
            setLoading(true)
            console.log("Сессия:", session)
            if (status === "loading" || !session || session.user.role !== "admin") {
                console.log("Сессия не готова или доступ запрещён")
                setAddError("Требуется авторизация как администратор")
                setLoading(false)
                return
            }

            try {
                const [usersResponse, rolesResponse, statusesResponse] = await Promise.all([
                    fetch("/api/users").then(async res => {
                        const json = await res.json()
                        console.log("Ответ /api/users:", json, "Статус:", res.status)
                        if (!res.ok) throw new Error(`Ошибка при получении пользователей: ${res.status}`)
                        return json
                    }),
                    fetch("/api/roles").then(async res => {
                        const json = await res.json()
                        console.log("Ответ /api/roles:", json, "Статус:", res.status)
                        if (!res.ok) throw new Error(`Ошибка при получении ролей: ${res.status}`)
                        return json
                    }),
                    fetch("/api/statuses").then(async res => {
                        const json = await res.json()
                        console.log("Ответ /api/statuses:", json, "Статус:", res.status)
                        if (!res.ok) throw new Error(`Ошибка при получении статусов: ${res.status}`)
                        return json
                    }),
                ])
                setUsers(Array.isArray(usersResponse) ? usersResponse : [])
                setRoles(Array.isArray(rolesResponse) ? rolesResponse : [])
                setStatuses(Array.isArray(statusesResponse) ? statusesResponse : [])
            } catch (error) {
                setAddError(error instanceof Error ? error.message : "Ошибка при загрузке данных")
                console.error("Ошибка при загрузке данных:", error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [addOpen, session, status])

    const validateForm = (isEdit: boolean): boolean => {
        const errors: Partial<FormState> = {}
        if (!isEdit) {
            if (!form.username) errors.username = "Логин обязателен"
            else if (form.username.length > 50) errors.username = "Логин слишком длинный"
            if (!form.password) errors.password = "Пароль обязателен"
            else if (form.password.length < 6) errors.password = "Пароль должен быть не короче 6 символов"
            if (!form.name) errors.name = "Имя обязательно"
            else if (form.name.length > 100) errors.name = "Имя слишком длинное"
            if (!form.role_id) errors.role_id = "Выберите роль"
            if (!form.status_id) errors.status_id = "Выберите статус"
        } else {
            if (form.username && form.username.length > 50) errors.username = "Логин слишком длинный"
            if (form.password && form.password.length < 6) errors.password = "Пароль должен быть не короче 6 символов"
            if (form.name && form.name.length > 100) errors.name = "Имя слишком длинное"
        }
        setFormErrors(errors)
        return Object.keys(errors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setAddError(null)
        setFormErrors({})

        if (!session || session.user.role !== "admin") {
            setAddError("Требуется авторизация как администратор")
            setLoading(false)
            return
        }

        if (!validateForm(mode === "edit")) {
            setLoading(false)
            return
        }

        try {
            if (mode === "add") {
                if (!roles.some(r => r.id === form.role_id) || !statuses.some(s => s.id === form.status_id)) {
                    throw new Error("Недопустимая роль или статус")
                }
                const response = await fetch("/api/users", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        username: form.username,
                        password: form.password,
                        name: form.name,
                        role_id: form.role_id,
                        status_id: form.status_id,
                    }),
                })

                if (!response.ok) {
                    throw new Error((await response.json()).error || "Ошибка добавления пользователя")
                }

                const userData = await response.json()
                setUsers((prev) => [...prev, userData])
            } else if (mode === "edit" && editId) {
                const response = await fetch("/api/users/update", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        id: editId,
                        username: form.username || undefined,
                        password: form.password || undefined,
                        name: form.name || undefined,
                        role_id: form.role_id || undefined,
                        status_id: form.status_id || undefined,
                    }),
                })

                if (!response.ok) {
                    throw new Error((await response.json()).error || "Ошибка обновления пользователя")
                }

                const updatedUser = await response.json()
                setUsers((prev) => prev.map((item) => (item.id === editId ? updatedUser : item)))
            }

            setForm({ username: "", password: "", name: "", role_id: "", status_id: "" })
            setAddOpen(false)
            setMode("add")
            setEditId(null)
        } catch (error) {
            setAddError(error instanceof Error ? error.message : "Неизвестная ошибка")
            console.error(`Ошибка при ${mode === "add" ? "добавлении" : "обновлении"} пользователя:`, error)
        } finally {
            setLoading(false)
        }
    }

    const handleEdit = (user: UserItem) => {
        setMode("edit")
        setEditId(user.id)
        setForm({
            username: user.username,
            password: "",
            name: user.name,
            role_id: user.role_id,
            status_id: user.status_id,
        })
        setAddOpen(true)
    }

    const handleDelete = async (id: string) => {
        if (!session || session.user.role !== "admin") {
            setAddError("Требуется авторизация как администратор")
            return
        }

        try {
            const response = await fetch("/api/users/delete", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id }),
            })

            if (!response.ok) {
                throw new Error((await response.json()).error || "Ошибка удаления пользователя")
            }

            setUsers((prevUsers) => prevUsers.filter((item) => item.id !== id))
        } catch (error) {
            console.error("Ошибка при удалении пользователя:", error)
            setAddError(error instanceof Error ? error.message : "Ошибка при удалении пользователя")
        }
    }

    if (status === "loading") {
        return <div>Загрузка...</div>
    }

    if (!session || session.user.role !== "admin") {
        return <div>Доступ запрещён. Пожалуйста, войдите как администратор.</div>
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-3">
                <Dialog open={addOpen} onOpenChange={(open) => {
                    setAddOpen(open)
                    if (!open) {
                        setForm({ username: "", password: "", name: "", role_id: "", status_id: "" })
                        setFormErrors({})
                        setAddError(null)
                        setMode("add")
                        setEditId(null)
                    }
                }}>
                    <DialogTrigger asChild>
                        <Button className="cursor-pointer" onClick={() => setMode("add")}>
                            Добавить
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md w-full">
                        <DialogHeader>
                            <DialogTitle>{mode === "add" ? "Добавить пользователя" : "Редактировать пользователя"}</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Логин</label>
                                <Input
                                    type="text"
                                    placeholder="Введите логин"
                                    value={form.username}
                                    onChange={(e) => setForm((prev) => ({ ...prev, username: e.target.value }))}
                                    disabled={loading}
                                />
                                {formErrors.username && (
                                    <p className="text-xs text-red-500 mt-1">{formErrors.username}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Пароль</label>
                                <Input
                                    type="password"
                                    placeholder={mode === "edit" ? "Новый пароль (необязательно)" : "Введите пароль"}
                                    value={form.password}
                                    onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
                                    disabled={loading}
                                />
                                {formErrors.password && (
                                    <p className="text-xs text-red-500 mt-1">{formErrors.password}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Имя</label>
                                <Input
                                    type="text"
                                    placeholder="Введите имя"
                                    value={form.name}
                                    onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                                    disabled={loading}
                                />
                                {formErrors.name && (
                                    <p className="text-xs text-red-500 mt-1">{formErrors.name}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Роль</label>
                                <Select
                                    value={form.role_id}
                                    onValueChange={(value) => setForm((prev) => ({ ...prev, role_id: value }))}
                                    disabled={loading || roles.length === 0}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder={roles.length === 0 ? "Роли не загружены" : "Выберите роль"} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {roles.map((role) => (
                                            <SelectItem key={role.id} value={role.id}>
                                                {role.role}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {formErrors.role_id && (
                                    <p className="text-xs text-red-500 mt-1">{formErrors.role_id}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Статус</label>
                                <Select
                                    value={form.status_id}
                                    onValueChange={(value) => setForm((prev) => ({ ...prev, status_id: value }))}
                                    disabled={loading || statuses.length === 0}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder={statuses.length === 0 ? "Статусы не загружены" : "Выберите статус"} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {statuses.map((status) => (
                                            <SelectItem key={status.id} value={status.id}>
                                                {status.status}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {formErrors.status_id && (
                                    <p className="text-xs text-red-500 mt-1">{formErrors.status_id}</p>
                                )}
                            </div>
                            {addError && <p className="text-red-500 text-sm">{addError}</p>}
                            <div className="flex gap-2 justify-end">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => {
                                        setForm({ username: "", password: "", name: "", role_id: "", status_id: "" })
                                        setAddOpen(false)
                                        setMode("add")
                                        setEditId(null)
                                    }}
                                    disabled={loading}
                                >
                                    Отмена
                                </Button>
                                <Button type="submit" disabled={loading || roles.length === 0 || statuses.length === 0}>
                                    {loading ? "Сохранение..." : mode === "add" ? "Добавить" : "Сохранить"}
                                </Button>
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[30%]">Логин</TableHead>
                        <TableHead>Имя</TableHead>
                        <TableHead>Роль</TableHead>
                        <TableHead>Статус</TableHead>
                        <TableHead>Последняя активность</TableHead>
                        <TableHead>Дата создания</TableHead>
                        <TableHead className="text-right">Действие</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {loading ? (
                        <TableRow>
                            <TableCell colSpan={7} className="text-center">
                                Загрузка...
                            </TableCell>
                        </TableRow>
                    ) : users.length > 0 ? (
                        users.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell className="font-medium">{item.username}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>
                                    <Badge>{item.role?.role || "Неизвестная роль"}</Badge>
                                </TableCell>
                                <TableCell>
                                    <Badge>{item.status?.status || "Неизвестный статус"}</Badge>
                                </TableCell>
                                <TableCell>{new Date(item.last_activity).toLocaleString()}</TableCell>
                                <TableCell>{new Date(item.created_at).toLocaleDateString()}</TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0 cursor-pointer">
                                                <EllipsisVertical />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuLabel className="cursor-pointer">
                                                Выбрать Действие
                                            </DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuRadioGroup>
                                                <DropdownMenuItem
                                                    className="cursor-pointer"
                                                    onClick={() => handleEdit(item)}
                                                >
                                                    Редактировать
                                                </DropdownMenuItem>
                                                <DropdownMenuItem
                                                    className="text-destructive cursor-pointer"
                                                    onClick={() => handleDelete(item.id)}
                                                >
                                                    Удалить
                                                </DropdownMenuItem>
                                            </DropdownMenuRadioGroup>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={7} className="text-center">
                                Пользователей нет.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}