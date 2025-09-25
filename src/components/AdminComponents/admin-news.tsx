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
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Image from "next/image";

interface NewsItem {
    id: string
    title: string | null
    type_id: string
    type: { type: string }
    created_at: string
    description: string | null
    image_url: string | null
}

interface NewsType {
    id: string
    type: string
}

interface FormState {
    title: string
    type_id: string
    description: string
    image_url: string
}

export default function AdminNews() {
    const [news, setNews] = React.useState<NewsItem[]>([])
    const [newsTypes, setNewsTypes] = React.useState<NewsType[]>([])
    const [loading, setLoading] = React.useState<boolean>(true)
    const [addOpen, setAddOpen] = React.useState<boolean>(false)
    const [form, setForm] = React.useState<FormState>({
        title: "",
        type_id: "",
        description: "",
        image_url: "",
    })
    const [formErrors, setFormErrors] = React.useState<Partial<FormState>>({})
    const [newsImageUploading, setNewsImageUploading] = React.useState<boolean>(false)
    const [newsImageUploadError, setNewsImageUploadError] = React.useState<string | null>(null)
    const [newsImageFileName, setNewsImageFileName] = React.useState<string | null>(null)
    const [addError, setAddError] = React.useState<string | null>(null)
    const [mode, setMode] = React.useState<"add" | "edit">("add")
    const [editId, setEditId] = React.useState<string | null>(null)

    React.useEffect(() => {
        async function fetchData() {
            setLoading(true)
            try {
                const [newsResponse, typesResponse] = await Promise.all([
                    fetch("/api/news").then((res) => {
                        if (!res.ok) throw new Error(`Ошибка при получении новостей: ${res.status}`)
                        return res.json()
                    }),
                    fetch("/api/news-types").then((res) => {
                        if (!res.ok) throw new Error(`Ошибка при получении типов новостей: ${res.status}`)
                        return res.json()
                    }),
                ])

                console.log("newsResponse:", newsResponse)
                console.log("typesResponse:", typesResponse)

                if (!Array.isArray(typesResponse)) {
                    throw new Error("Типы новостей не являются массивом")
                }

                setNews(Array.isArray(newsResponse) ? newsResponse : [])
                setNewsTypes(typesResponse)
            } catch (error) {
                setAddError(error instanceof Error ? error.message : "Ошибка при загрузке данных")
                console.error("Ошибка при загрузке данных:", error)
                setNewsTypes([])
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [addOpen])

    const handleNewsImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        setNewsImageUploading(true)
        setNewsImageUploadError(null)

        try {
            const maxSize = 5 * 1024 * 1024 // 5MB
            if (file.size > maxSize) {
                throw new Error("Файл слишком большой (максимум 5 МБ)")
            }
            if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
                throw new Error("Недопустимый формат файла (только JPEG, PNG, WebP)")
            }

            const formData = new FormData()
            formData.append("file", file)

            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            })

            const result = await response.json()

            if (!response.ok) {
                throw new Error(result.error || "Ошибка загрузки файла")
            }

            setForm((prev) => ({ ...prev, image_url: result.url }))
            setNewsImageFileName(file.name)
        } catch (error) {
            setNewsImageUploadError(error instanceof Error ? error.message : "Ошибка при загрузке изображения")
            console.error("Ошибка загрузки изображения:", error)
        } finally {
            setNewsImageUploading(false)
        }
    }

    const validateForm = (isEdit: boolean): boolean => {
        const errors: Partial<FormState> = {}
        if (!isEdit) {
            // Для добавления все поля обязательны
            if (!form.title) errors.title = "Заголовок обязателен"
            else if (form.title.length > 255) errors.title = "Заголовок слишком длинный"
            if (!form.type_id) errors.type_id = "Выберите тип новости"
            if (!form.description) errors.description = "Описание обязательно"
        } else {
            // Для редактирования проверяем только длину заголовка, если он заполнен
            if (form.title && form.title.length > 255) errors.title = "Заголовок слишком длинный"
        }

        setFormErrors(errors)
        return Object.keys(errors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setAddError(null)
        setFormErrors({})

        if (!validateForm(mode === "edit")) {
            setLoading(false)
            return
        }

        try {
            if (mode === "add") {
                if (!newsTypes.some((t) => t.id === form.type_id)) {
                    throw new Error("Недопустимый тип новости")
                }

                const response = await fetch("/api/news", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        title: form.title,
                        type_id: form.type_id,
                        description: form.description,
                        image_url: form.image_url,
                    }),
                })

                if (!response.ok) {
                    throw new Error((await response.json()).error || "Ошибка добавления новости")
                }

                const newsData = await response.json()
                setNews((prev) => [...prev, newsData])
            } else if (mode === "edit" && editId) {
                const response = await fetch("/api/news/update", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        id: editId,
                        title: form.title || undefined,
                        type_id: form.type_id || undefined,
                        description: form.description || undefined,
                        image_url: form.image_url || undefined,
                    }),
                })

                if (!response.ok) {
                    throw new Error((await response.json()).error || "Ошибка обновления новости")
                }

                const updatedNews = await response.json()
                setNews((prev) =>
                    prev.map((item) => (item.id === editId ? updatedNews : item))
                )
            }

            setForm({ title: "", type_id: "", description: "", image_url: "" })
            setNewsImageFileName(null)
            setAddOpen(false)
            setMode("add")
            setEditId(null)
        } catch (error) {
            setAddError(error instanceof Error ? error.message : "Неизвестная ошибка")
            console.error(`Ошибка при ${mode === "add" ? "добавлении" : "обновлении"} новости:`, error)
        } finally {
            setLoading(false)
        }
    }

    const handleEdit = (newsItem: NewsItem) => {
        setMode("edit")
        setEditId(newsItem.id)
        setForm({
            title: newsItem.title || "",
            type_id: newsItem.type_id,
            description: newsItem.description || "",
            image_url: newsItem.image_url || "",
        })
        setNewsImageFileName(newsItem.image_url ? newsItem.image_url.split("/").pop() || null : null)
        setAddOpen(true)
    }

    const handleDelete = async (id: string) => {
        try {
            const response = await fetch("/api/news/delete", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id }),
            })

            if (!response.ok) {
                throw new Error((await response.json()).error || "Ошибка удаления новости")
            }

            setNews((prevNews) => prevNews.filter((item) => item.id !== id))
        } catch (error) {
            console.error("Ошибка при удалении новости:", error)
            setAddError(error instanceof Error ? error.message : "Ошибка при удалении новости")
        }
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-3">
                <Dialog open={addOpen} onOpenChange={(open) => {
                    setAddOpen(open)
                    if (!open) {
                        setForm({ title: "", type_id: "", description: "", image_url: "" })
                        setNewsImageFileName(null)
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
                            <DialogTitle>{mode === "add" ? "Добавить новость" : "Редактировать новость"}</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Заголовок</label>
                                <Input
                                    type="text"
                                    placeholder="Введите заголовок"
                                    value={form.title}
                                    onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
                                />
                                {formErrors.title && (
                                    <p className="text-xs text-red-500 mt-1">{formErrors.title}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Изображение (jpeg, png, webp)
                                </label>
                                <Input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleNewsImageUpload}
                                />
                                {newsImageUploading && (
                                    <p className="text-xs text-gray-500 mt-1">Загрузка...</p>
                                )}
                                {newsImageUploadError && (
                                    <p className="text-xs text-red-500 mt-1">{newsImageUploadError}</p>
                                )}
                                {form.image_url && newsImageFileName && (
                                    <p className="text-xs text-green-600 mt-1">
                                        Изображение загружено: {newsImageFileName}
                                    </p>
                                )}
                                {form.image_url && (
                                    <Image src={form.image_url} alt="Preview" width={200} height={200} className="mt-2 max-w-[200px]" />
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Тип</label>
                                <Select
                                    value={form.type_id}
                                    onValueChange={(value) => setForm((prev) => ({ ...prev, type_id: value }))}
                                    disabled={newsTypes.length === 0}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder={newsTypes.length === 0 ? "Типы не загружены" : "Выберите тип"} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {newsTypes.map((type) => (
                                            <SelectItem key={type.id} value={type.id}>
                                                {type.type}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {formErrors.type_id && (
                                    <p className="text-xs text-red-500 mt-1">{formErrors.type_id}</p>
                                )}
                                {newsTypes.length === 0 && (
                                    <p className="text-xs text-red-500 mt-1">Типы новостей недоступны</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Описание</label>
                                <Textarea
                                    placeholder="Введите описание"
                                    value={form.description}
                                    onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))}
                                    rows={4}
                                />
                                {formErrors.description && (
                                    <p className="text-xs text-red-500 mt-1">{formErrors.description}</p>
                                )}
                            </div>
                            {addError && <p className="text-red-500 text-sm">{addError}</p>}
                            <div className="flex gap-2 justify-end">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => {
                                        setForm({ title: "", type_id: "", description: "", image_url: "" })
                                        setNewsImageFileName(null)
                                        setAddOpen(false)
                                        setMode("add")
                                        setEditId(null)
                                    }}
                                >
                                    Отмена
                                </Button>
                                <Button type="submit" disabled={loading || newsTypes.length === 0}>
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
                        <TableHead className="w-[70%]">Название</TableHead>
                        <TableHead>Тип</TableHead>
                        <TableHead>Дата</TableHead>
                        <TableHead className="text-right">Действие</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {loading ? (
                        <TableRow>
                            <TableCell colSpan={4} className="text-center">
                                Загрузка...
                            </TableCell>
                        </TableRow>
                    ) : news.length > 0 ? (
                        news.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell className="font-medium">{item.title || "Без названия"}</TableCell>
                                <TableCell>
                                    <Badge>{item.type?.type || "Неизвестный тип"}</Badge>
                                </TableCell>
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
                                                <DropdownMenuItem className="cursor-pointer">Перейти</DropdownMenuItem>
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
                            <TableCell colSpan={4} className="text-center">
                                Новостей нет.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}