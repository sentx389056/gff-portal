// types/next-auth.d.ts

declare module "next-auth" {
    interface User {
        id: string
        role: string
        username: string // Добавляем username
    }

    interface Session {
        user: {
            id: string
            role: string
            username: string // username доступен в сессии
            name?: string | null
            email?: string | null
        }
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string
        role: string
        username: string // username в JWT
    }
}