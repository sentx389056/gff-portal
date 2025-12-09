'use client';

import { Button } from '@/components/ui/button';

interface DownloadButtonProps {
    fileUrl: string | null;
    fileName?: string;
    className?: string;
    variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link' | 'destructive';
    size?: 'default' | 'sm' | 'lg' | 'icon';
    disabled?: boolean;
}

export default function DownloadButton({ 
    fileUrl, 
    fileName, 
    className = '', 
    variant = 'outline',
    size = 'lg',
    disabled = false
}: DownloadButtonProps) {
    const handleDownload = () => {
        if (!fileUrl) return;
        
        // Простое скачивание через открытие в новой вкладке
        window.open(fileUrl, '_blank');
    };

    return (
        <Button 
            variant={variant} 
            size={size} 
            className={`flex items-center gap-2 ${className}`}
            onClick={handleDownload}
            disabled={disabled || !fileUrl}
        >
            Скачать
        </Button>
    );
}