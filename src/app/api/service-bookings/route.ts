import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { PrismaClient } from '../../../../prisma/generated/prisma';
import { authOptions } from '@/lib/auth';
import type { Session } from 'next-auth';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { service_type, name, phone, email, preferred_date, comment } = body;

    if (!service_type || !name || !phone || !preferred_date) {
      return NextResponse.json({ error: 'Заполните все обязательные поля' }, { status: 400 });
    }

    const booking = await prisma.serviceBooking.create({
      data: { service_type, name, phone, email: email || null, preferred_date, comment: comment || null },
    });

    return NextResponse.json({ id: booking.id.toString() }, { status: 201 });
  } catch (error) {
    console.error('ServiceBooking POST error:', error);
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const session = (await getServerSession(authOptions)) as Session | null;
    const role = (session?.user as { role?: string })?.role;

    if (!role || (role !== 'admin' && role !== 'master')) {
      return NextResponse.json({ error: 'Доступ запрещён' }, { status: 403 });
    }

    const bookings = await prisma.serviceBooking.findMany({
      orderBy: { created_at: 'desc' },
    });

    return NextResponse.json(
      bookings.map((b) => ({ ...b, id: b.id.toString() }))
    );
  } catch (error) {
    console.error('ServiceBooking GET error:', error);
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}
