'use client';

import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

interface Booking {
  id: string;
  service_type: string;
  name: string;
  phone: string;
  email: string | null;
  preferred_date: string;
  comment: string | null;
  created_at: string;
}

const SERVICE_LABELS: Record<string, string> = {
  hairdressing: 'Парикмахер',
  manicure: 'Маникюр',
};

export default function AdminBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/service-bookings')
      .then((r) => {
        if (!r.ok) throw new Error('Нет доступа');
        return r.json();
      })
      .then(setBookings)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-gray-500 text-sm">Загрузка...</p>;
  if (error) return <p className="text-red-500 text-sm">{error}</p>;
  if (!bookings.length) return <p className="text-gray-500 text-sm">Заявок пока нет.</p>;

  return (
    <div className="overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Услуга</TableHead>
            <TableHead>Имя</TableHead>
            <TableHead>Телефон</TableHead>
            <TableHead>E-mail</TableHead>
            <TableHead>Дата и время</TableHead>
            <TableHead>Комментарий</TableHead>
            <TableHead>Дата записи</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((b) => (
            <TableRow key={b.id}>
              <TableCell className="text-gray-400 text-xs">{b.id}</TableCell>
              <TableCell>
                <Badge variant="outline">{SERVICE_LABELS[b.service_type] ?? b.service_type}</Badge>
              </TableCell>
              <TableCell className="font-medium whitespace-nowrap">{b.name}</TableCell>
              <TableCell className="whitespace-nowrap">{b.phone}</TableCell>
              <TableCell className="text-sm text-gray-600">{b.email ?? '—'}</TableCell>
              <TableCell className="whitespace-nowrap">
                {b.preferred_date
                  ? new Date(b.preferred_date).toLocaleString('ru-RU', { dateStyle: 'short', timeStyle: 'short' })
                  : b.preferred_date}
              </TableCell>
              <TableCell className="text-sm text-gray-600 max-w-48 truncate">{b.comment ?? '—'}</TableCell>
              <TableCell className="text-xs text-gray-400 whitespace-nowrap">
                {new Date(b.created_at).toLocaleDateString('ru-RU')}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
