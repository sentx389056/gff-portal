// prisma/seed.cjs
const { PrismaClient } = require('./generated/prisma');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();
const SALT_ROUNDS = 10;

async function main() {
    console.log('Запуск сида...');

    await prisma.$executeRaw`
    TRUNCATE TABLE "StatusesTypes", "RolesTypes", "Users", "NewsTypes", "DocumentsTypes", "logs", "service_bookings" RESTART IDENTITY CASCADE;
  `;

    // Statuses
    await prisma.statusesTypes.create({ data: { status: 'Активен' } });
    await prisma.statusesTypes.create({ data: { status: 'Не активен' } });

    // Roles
    await prisma.rolesTypes.create({ data: { role: 'admin' } });
    await prisma.rolesTypes.create({ data: { role: 'user' } });
    await prisma.rolesTypes.create({ data: { role: 'master' } });

    // Users
    const users = [
        { username: 'admin', password: '123', name: 'Администратор', role_id: 1n, status_id: 1n },
        { username: 'dovgan.a', password: '123', name: 'Довгань Анастасия Павловна', role_id: 3n, status_id: 1n },
        { username: 'ivanova.m', password: '123', name: 'Иванова Мария Сергеевна', role_id: 2n, status_id: 1n },
        { username: 'petrov.a', password: '123', name: 'Петров Алексей Дмитриевич', role_id: 2n, status_id: 1n },
        { username: 'sidorova.e', password: '123', name: 'Сидорова Елена Юрьевна', role_id: 2n, status_id: 1n },
        { username: 'kozlov.v', password: '123', name: 'Козлов Виктор Павлович', role_id: 2n, status_id: 1n },
        { username: 'novikova.o', password: '123', name: 'Новикова Оксана Ивановна', role_id: 2n, status_id: 1n },
        { username: 'morozov.s', password: '123', name: 'Морозов Сергей Николаевич', role_id: 2n, status_id: 2n },
        { username: 'jurtsev.m', password: '123', name: 'Юрцев Максим Алексеевич', role_id: 2n, status_id: 1n },
    ];
    for (const u of users) {
        await prisma.users.create({
            data: { ...u, password: await bcrypt.hash(u.password, SALT_ROUNDS) },
        });
    }

    // NewsTypes
    await prisma.newsTypes.create({ data: { type: 'Событие' } });
    await prisma.newsTypes.create({ data: { type: 'Архив' } });
    await prisma.newsTypes.create({ data: { type: 'Реставрация' } });
    await prisma.newsTypes.create({ data: { type: 'Объявление' } });
    await prisma.newsTypes.create({ data: { type: 'Новость' } });

    // DocumentsTypes
    await prisma.documentsTypes.create({ data: { type: 'Положение' } });
    await prisma.documentsTypes.create({ data: { type: 'Отчет' } });
    await prisma.documentsTypes.create({ data: { type: 'Приказ' } });
    await prisma.documentsTypes.create({ data: { type: 'Регламент' } });

    // ServiceBookings
    const bookingSamples = [
        { service_type: 'hairdressing', name: 'Иванова Мария Сергеевна', phone: '8 916 123-45-67', email: 'ivanova.m@gff-rf.ru', preferred_date: '2026-04-02', comment: 'Хочу стрижку каре' },
        { service_type: 'manicure', name: 'Петрова Елена Юрьевна', phone: '8 903 987-65-43', email: 'petrova.e@gff-rf.ru', preferred_date: '2026-04-03', comment: null },
        { service_type: 'hairdressing', name: 'Сидорова Анна Викторовна', phone: '8 926 555-11-22', email: null, preferred_date: '2026-04-02', comment: 'Окрашивание и укладка' },
        { service_type: 'manicure', name: 'Козлова Ирина Николаевна', phone: '8 985 444-33-21', email: 'kozlova.i@gff-rf.ru', preferred_date: '2026-04-04', comment: 'Гель-лак' },
        { service_type: 'manicure', name: 'Новикова Оксана Петровна', phone: '8 977 222-88-99', email: null, preferred_date: '2026-04-03', comment: null },
    ];
    for (const b of bookingSamples) {
        await prisma.serviceBooking.create({ data: b });
    }

    console.log('Сид успешно завершён!');
}

main()
    .catch(e => {
        console.error('Ошибка:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });