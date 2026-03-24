'use client';

import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CalendarCheck } from 'lucide-react';
import AdminBookings from '@/components/AdminComponents/admin-bookings';

export default function MasterBookingsPanel() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <CalendarCheck className="h-4 w-4" />
          Мои записи
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col overflow-hidden p-0" style={{ width: '90vw', maxWidth: 'none', height: '90vh' }}>
        <DialogHeader className="px-6 pt-6 pb-4 border-b shrink-0">
          <DialogTitle>Записи на услуги</DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-auto p-6">
          <AdminBookings />
        </div>
      </DialogContent>
    </Dialog>
  );
}
