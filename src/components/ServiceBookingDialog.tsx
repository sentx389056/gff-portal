'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const SERVICE_OPTIONS = [
  { value: 'hairdressing', label: 'Парикмахерские услуги' },
  { value: 'manicure', label: 'Маникюр' },
];

interface Props {
  defaultService?: string;
  triggerLabel?: string;
}

interface FormState {
  name: string;
  phone: string;
  email: string;
  service_type: string;
  preferred_date: string;
  comment: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  service_type?: string;
  preferred_date?: string;
}

export default function ServiceBookingDialog({ defaultService, triggerLabel = 'Записаться' }: Props) {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    service_type: defaultService ?? '',
    preferred_date: '',
    comment: '',
  });

  React.useEffect(() => {
    const user = session?.user as { name?: string | null; username?: string } | undefined;
    if (user) {
      setForm((f) => ({
        ...f,
        name: user.name ?? '',
        email: user.username ? `${user.username}@gff-rf.ru` : '',
      }));
    }
  }, [session]);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = 'Введите имя';
    if (!form.phone.trim()) e.phone = 'Введите телефон';
    if (!form.service_type) e.service_type = 'Выберите услугу';
    if (!form.preferred_date) e.preferred_date = 'Выберите дату и время';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setServerError(null);

    try {
      const res = await fetch('/api/service-bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        setServerError(data.error ?? 'Ошибка при отправке заявки');
      } else {
        setSuccess(true);
      }
    } catch {
      setServerError('Не удалось отправить заявку. Попробуйте позже.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleOpenChange = (val: boolean) => {
    setOpen(val);
    if (!val) {
      setSuccess(false);
      setServerError(null);
      setErrors({});
      setForm({ name: '', phone: '', email: '', service_type: defaultService ?? '', preferred_date: '', comment: '' });
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="mt-2">
          {triggerLabel}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Запись на услугу</DialogTitle>
        </DialogHeader>

        {status !== 'authenticated' ? (
          <div className="py-8 text-center space-y-3">
            <p className="text-gray-600">Для записи необходимо войти в аккаунт</p>
            <Button asChild>
              <Link href="/auth">Войти</Link>
            </Button>
          </div>
        ) : success ? (
          <div className="py-8 text-center space-y-2">
            <p className="font-semibold text-gray-800">Заявка отправлена!</p>
            <p className="text-gray-500 text-sm">
              С вами свяжется Довгань Анастасия Павловна для подтверждения записи.
            </p>
            <Button className="mt-4" onClick={() => handleOpenChange(false)}>
              Закрыть
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
            <div>
              <Label htmlFor="service_type">Услуга *</Label>
              <Select
                value={form.service_type}
                onValueChange={(val) => setForm((f) => ({ ...f, service_type: val }))}
              >
                <SelectTrigger id="service_type" className="mt-1">
                  <SelectValue placeholder="Выберите услугу" />
                </SelectTrigger>
                <SelectContent>
                  {SERVICE_OPTIONS.map((o) => (
                    <SelectItem key={o.value} value={o.value}>
                      {o.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.service_type && <p className="text-red-500 text-xs mt-1">{errors.service_type}</p>}
            </div>

            <div>
              <Label htmlFor="name">Имя *</Label>
              <Input
                id="name"
                className="mt-1"
                placeholder="Иванова Мария Ивановна"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <Label htmlFor="phone">Телефон *</Label>
              <Input
                id="phone"
                className="mt-1"
                placeholder="+7 (___) ___-__-__"
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                className="mt-1"
                placeholder="example@gff-rf.ru"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              />
            </div>

            <div>
              <Label htmlFor="preferred_date">Желаемая дата и время *</Label>
              <Input
                id="preferred_date"
                type="datetime-local"
                className="mt-1"
                value={form.preferred_date}
                onChange={(e) => setForm((f) => ({ ...f, preferred_date: e.target.value }))}
              />
              {errors.preferred_date && <p className="text-red-500 text-xs mt-1">{errors.preferred_date}</p>}
            </div>

            <div>
              <Label htmlFor="comment">Комментарий</Label>
              <Input
                id="comment"
                className="mt-1"
                placeholder="Пожелания к записи..."
                value={form.comment}
                onChange={(e) => setForm((f) => ({ ...f, comment: e.target.value }))}
              />
            </div>

            {serverError && <p className="text-red-500 text-sm">{serverError}</p>}

            <div className="flex justify-end gap-2 pt-2">
              <Button type="button" variant="outline" onClick={() => handleOpenChange(false)}>
                Отмена
              </Button>
              <Button type="submit" disabled={submitting}>
                {submitting ? 'Отправка...' : 'Отправить заявку'}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
