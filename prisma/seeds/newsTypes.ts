import { PrismaClient } from '@prisma/client';

export async function seedNewsTypes(prisma: PrismaClient) {
  console.log('Starting to seed NewsTypes...');
  await prisma.newsTypes.createMany({
    data: [
      { id: BigInt(1), type: 'Событие' },
      { id: BigInt(2), type: 'Архив' },
      { id: BigInt(3), type: 'Реставрация' },
      { id: BigInt(4), type: 'Объявление' },
      { id: BigInt(6), type: 'Новость' },
    ],
    skipDuplicates: true,
  });
  console.log('Inserted records for NewsTypes:', await prisma.newsTypes.findMany());
}