"use client"

import * as React from "react"
import {EllipsisVertical} from "lucide-react"
import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table"
import {Badge} from "@/components/ui/badge"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface DocumentItem {
    id: string
    title: string | null
    type_id: string
    type: { type: string }
    created_at: string
    description: string | null
    file_url: string | null
}

interface DocumentType {
    id: string
    type: string
}

interface FormState {
    title: string
    type_id: string
    description: string
    file_url: string
}

export default function AdminDocuments() {
    const [documents, setDocuments] = React.useState<DocumentItem[]>([])
    const [documentTypes, setDocumentTypes] = React.useState<DocumentType[]>([])
    const [loading, setLoading] = React.useState<boolean>(true)
    const [addOpen, setAddOpen] = React.useState<boolean>(false)
    const [form, setForm] = React.useState<FormState>({
        title: "",
        type_id: "",
        description: "",
        file_url: "",
    })
    const [formErrors, setFormErrors] = React.useState<Partial<FormState>>({})
    const [fileUploading, setFileUploading] = React.useState<boolean>(false)
    const [fileUploadError, setFileUploadError] = React.useState<string | null>(null)
    const [fileName, setFileName] = React.useState<string | null>(null)
    const [addError, setAddError] = React.useState<string | null>(null)
    const [mode, setMode] = React.useState<"add" | "edit">("add")
    const [editId, setEditId] = React.useState<string | null>(null)

    React.useEffect(() => {
        async function fetchData() {
            setLoading(true)
            try {
                const [documentsResponse, typesResponse] = await Promise.all([
                    fetch("/api/documents").then((res) => {
                        if (!res.ok) throw new Error(`Ошибка при получении документов: ${res.status}`)
                        return res.json()
                    }),
                    fetch("/api/document-types").then((res) => {
                        if (!res.ok) throw new Error(`Ошибка при получении типов документов: ${res.status}`)
                        return res.json()
                    }),
                ])

                console.log("documentsResponse:", documentsResponse)
                console.log("typesResponse:", typesResponse)

                if (!Array.isArray(typesResponse)) {
                    throw new Error("Типы документов не являются массивом")
                }

                setDocuments(Array.isArray(documentsResponse) ? documentsResponse : [])
                setDocumentTypes(typesResponse)
            } catch (error) {
                setAddError(error instanceof Error ? error.message : "Ошибка при загрузке данных")
                console.error("Ошибка при загрузке данных:", error)
                setDocumentTypes([])
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [addOpen])

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        setFileUploading(true)
        setFileUploadError(null)

        try {
            const maxSize = 10 * 1024 * 1024 // 10MB
            if (file.size > maxSize) {
                throw new Error("Файл слишком большой (максимум 10 МБ)")
            }
            if (!["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file.type)) {
                throw new Error("Недопустимый формат файла (только PDF, DOC, DOCX)")
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

            setForm((prev) => ({...prev, file_url: result.url}))
            setFileName(file.name)
        } catch (error) {
            setFileUploadError(error instanceof Error ? error.message : "Ошибка при загрузке файла")
            console.error("Ошибка загрузки файла:", error)
        } finally {
            setFileUploading(false)
        }
    }

    const validateForm = (isEdit: boolean): boolean => {
        const errors: Partial<FormState> = {}
        if (!isEdit) {
            // Для добавления все поля обязательны
            if (!form.title) errors.title = "Заголовок обязателен"
            else if (form.title.length > 255) errors.title = "Заголовок слишком длинный"
            if (!form.type_id) errors.type_id = "Выберите тип документа"
            if (!form.description) errors.description = "Описание обязательно"
            if (!form.file_url) errors.file_url = "Файл обязателен"
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
                if (!documentTypes.some((t) => t.id === form.type_id)) {
                    throw new Error("Недопустимый тип документа")
                }

                const response = await fetch("/api/documents", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        title: form.title,
                        type_id: form.type_id,
                        description: form.description,
                        file_url: form.file_url,
                    }),
                })

                if (!response.ok) {
                    throw new Error((await response.json()).error || "Ошибка добавления документа")
                }

                const documentData = await response.json()
                setDocuments((prev) => [...prev, documentData])
            } else if (mode === "edit" && editId) {
                const response = await fetch("/api/documents/update", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        id: editId,
                        title: form.title || undefined,
                        type_id: form.type_id || undefined,
                        description: form.description || undefined,
                        file_url: form.file_url || undefined,
                    }),
                })

                if (!response.ok) {
                    throw new Error((await response.json()).error || "Ошибка обновления документа")
                }

                const updatedDocument = await response.json()
                setDocuments((prev) =>
                    prev.map((item) => (item.id === editId ? updatedDocument : item))
                )
            }

            setForm({title: "", type_id: "", description: "", file_url: ""})
            setFileName(null)
            setAddOpen(false)
            setMode("add")
            setEditId(null)
        } catch (error) {
            setAddError(error instanceof Error ? error.message : "Неизвестная ошибка")
            console.error(`Ошибка при ${mode === "add" ? "добавлении" : "обновлении"} документа:`, error)
        } finally {
            setLoading(false)
        }
    }

    const handleEdit = (document: DocumentItem) => {
        setMode("edit")
        setEditId(document.id)
        setForm({
            title: document.title || "",
            type_id: document.type_id,
            description: document.description || "",
            file_url: document.file_url || "",
        })
        setFileName(document.file_url ? document.file_url.split("/").pop() || null : null)
        setAddOpen(true)
    }

    const handleDelete = async (id: string) => {
        try {
            const response = await fetch("/api/documents/delete", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({id}),
            })

            if (!response.ok) {
                throw new Error((await response.json()).error || "Ошибка удаления документа")
            }

            setDocuments((prevDocuments) => prevDocuments.filter((item) => item.id !== id))
        } catch (error) {
            console.error("Ошибка при удалении документа:", error)
            setAddError(error instanceof Error ? error.message : "Ошибка при удалении документа")
        }
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-3">
                <Dialog open={addOpen} onOpenChange={(open) => {
                    setAddOpen(open)
                    if (!open) {
                        setForm({title: "", type_id: "", description: "", file_url: ""})
                        setFileName(null)
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
                            <DialogTitle>{mode === "add" ? "Добавить документ" : "Редактировать документ"}</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Заголовок</label>
                                <Input
                                    type="text"
                                    placeholder="Введите заголовок"
                                    value={form.title}
                                    onChange={(e) => setForm((prev) => ({...prev, title: e.target.value}))}
                                />
                                {formErrors.title && (
                                    <p className="text-xs text-red-500 mt-1">{formErrors.title}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">
                                    Файл (pdf, doc, docx)
                                </label>
                                <Input
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleFileUpload}
                                />
                                {fileUploading && (
                                    <p className="text-xs text-gray-500 mt-1">Загрузка...</p>
                                )}
                                {fileUploadError && (
                                    <p className="text-xs text-red-500 mt-1">{fileUploadError}</p>
                                )}
                                {form.file_url && fileName && (
                                    <p className="text-xs text-green-600 mt-1">
                                        Файл загружен: {fileName}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Тип</label>
                                <Select
                                    value={form.type_id}
                                    onValueChange={(value) => setForm((prev) => ({...prev, type_id: value}))}
                                    disabled={documentTypes.length === 0}
                                >
                                    <SelectTrigger>
                                        <SelectValue
                                            placeholder={documentTypes.length === 0 ? "Типы не загружены" : "Выберите тип"}/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        {documentTypes.map((type) => (
                                            <SelectItem key={type.id} value={type.id}>
                                                {type.type}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {formErrors.type_id && (
                                    <p className="text-xs text-red-500 mt-1">{formErrors.type_id}</p>
                                )}
                                {documentTypes.length === 0 && (
                                    <p className="text-xs text-red-500 mt-1">Типы документов недоступны</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Описание</label>
                                <Textarea
                                    placeholder="Введите описание"
                                    value={form.description}
                                    onChange={(e) => setForm((prev) => ({...prev, description: e.target.value}))}
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
                                        setForm({title: "", type_id: "", description: "", file_url: ""})
                                        setFileName(null)
                                        setAddOpen(false)
                                        setMode("add")
                                        setEditId(null)
                                    }}
                                >
                                    Отмена
                                </Button>
                                <Button type="submit" disabled={loading || documentTypes.length === 0}>
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
                    ) : documents.length > 0 ? (
                        documents.map((item) => (
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
                                                <EllipsisVertical/>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuLabel className="cursor-pointer">
                                                Выбрать Действие
                                            </DropdownMenuLabel>
                                            <DropdownMenuSeparator/>
                                            <DropdownMenuRadioGroup>
                                                <DropdownMenuItem className="cursor-pointer">Скачать</DropdownMenuItem>
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
                                Документов нет.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}