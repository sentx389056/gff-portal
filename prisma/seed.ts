import { seedStatusesTypes } from './seeds/statusesTypes';
import { seedRolesTypes } from './seeds/rolesTypes';
import { seedUsers } from './seeds/users';
import { seedNewsTypes } from './seeds/newsTypes';
import { seedDocumentsTypes } from './seeds/documentsTypes';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting seeding process...');

  // Очистка таблиц перед сидированием (опционально, для тестирования)
  await prisma.$executeRaw`TRUNCATE TABLE "StatusesTypes", "RolesTypes", "Users", "NewsTypes", "DocumentsTypes" RESTART IDENTITY CASCADE;`;

  await seedStatusesTypes(prisma);
  await seedRolesTypes(prisma);
  await seedUsers(prisma);
  await seedNewsTypes(prisma);
  await seedDocumentsTypes(prisma);

  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });