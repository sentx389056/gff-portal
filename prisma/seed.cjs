// prisma/seed.cjs
const { PrismaClient } = require('./generated/prisma');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();
const SALT_ROUNDS = 10;

async function main() {
    console.log('Запуск сида...');

    await prisma.$executeRaw`
    TRUNCATE TABLE "StatusesTypes", "RolesTypes", "Users", "NewsTypes", "DocumentsTypes", "logs" RESTART IDENTITY CASCADE;
  `;

    // Statuses
    await prisma.statusesTypes.create({ data: { status: 'Активен' } });
    await prisma.statusesTypes.create({ data: { status: 'Не активен' } });

    // Roles
    await prisma.rolesTypes.create({ data: { role: 'admin' } });
    await prisma.rolesTypes.create({ data: { role: 'user' } });

    // Users
    await prisma.users.create({
        data: {
            username: 'admin',
            password: await bcrypt.hash('123', SALT_ROUNDS),
            name: 'Admin User',
            role_id: 1n,
            status_id: 1n,
        },
    });

    await prisma.users.create({
        data: {
            username: 'tester',
            password: await bcrypt.hash('test123', SALT_ROUNDS),
            name: 'Tester',
            role_id: 1n,
            status_id: 2n,
        },
    });

    await prisma.users.create({
        data: {
            username: 'bet',
            password: await bcrypt.hash('beta2025', SALT_ROUNDS),
            name: 'beta',
            role_id: 2n,
            status_id: 2n,
        },
    });

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

    console.log('Сид успешно завершён!');
    console.log('admin → 123 | tester → test123 | bet → beta2025');
}

main()
    .catch(e => {
        console.error('Ошибка:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });