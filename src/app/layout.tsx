// app/layout.tsx
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ClientSessionProvider from "./ClientSessionProvider"

const font = Inter({
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "Портал Госфильмофонд России",
    description: "Портал Госфильмофонд России",
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ru">
        <body
            className={`${font.className} no-scrollbar`}
            suppressHydrationWarning={true}
        >
        <ClientSessionProvider>
            <Header />
            {children}
            <Footer />
        </ClientSessionProvider>
        </body>
        </html>
    )
}