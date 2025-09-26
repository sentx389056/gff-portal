import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    experimental: {
        // Для Next.js 15, оставить пустым, если нет специфичных экспериментальных настроек
    },

    // Настройка для динамических файлов (изображения)
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3001', // Основной порт для разработки
                pathname: '/uploads/**',
            },
            {
                protocol: 'https',
                hostname: '**', // Для продакшена (поддержка любых доменов)
                pathname: '/uploads/**',
            },
        ],
        // Разрешить небезопасные URL для dev
        unoptimized: true,
    },

    // Динамические маршруты для файлов
    async rewrites() {
        return [
            {
                source: '/uploads/:path*',
                destination: '/uploads/:path*',
            },
            {
                source: '/api/files/:path*',
                destination: '/api/files/:path*',
            },
        ]
    },

    // Заголовки для статических файлов
    async headers() {
        return [
            {
                source: '/uploads/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                    {
                        key: 'Content-Type',
                        value: 'image/*', // Для изображений, можно уточнить при необходимости
                    },
                ],
            },
        ]
    },

    // Пакеты для транспиляции
    transpilePackages: [
        'lucide-react',
        'class-variance-authority',
        'clsx',
        'tailwind-merge',
    ],

    // Указываем порт через переменную окружения или явно
    env: {
        PORT: process.env.PORT || '3001', // Убедитесь, что PORT совпадает с Docker Compose
    },
}

export default nextConfig
