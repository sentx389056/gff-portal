// next.config.ts
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
        // Для Next.js 15
    },

    // КРИТИЧНО: Настройка для динамических файлов
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3000',
                pathname: '/uploads/**', // ← Все изображения из uploads
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3001', // Если другой порт
                pathname: '/uploads/**',
            },
            {
                protocol: 'https',
                hostname: '**', // Production
                pathname: '/uploads/**',
            },
        ],
        // ВАЖНО: Разрешить небезопасные URL для dev
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

    // Копируем public/uploads в билд
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
                        value: 'image/*', // Или application/* для документов
                    },
                ],
            },
        ]
    },

    transpilePackages: [
        'lucide-react',
        'class-variance-authority',
        'clsx',
        'tailwind-merge',
    ],
}

export default nextConfig