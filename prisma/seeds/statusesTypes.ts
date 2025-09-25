import { PrismaClient } from '@prisma/client';

export async function seedStatusesTypes(prisma: PrismaClient) {
  console.log('Starting to seed StatusesTypes...');
  await prisma.statusesTypes.createMany({
    data: [
      { id: BigInt(1), status: 'Активен' },
      { id: BigInt(2), status: 'Не активен' },
    ],
    skipDuplicates: true,
  });
  console.log('Inserted records for StatusesTypes:', await prisma.statusesTypes.findMany());
}