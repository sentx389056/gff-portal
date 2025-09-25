import { PrismaClient } from '@prisma/client';

export async function seedDocumentsTypes(prisma: PrismaClient) {
  console.log('Starting to seed DocumentsTypes...');
  await prisma.documentsTypes.createMany({
    data: [
      { id: BigInt(1), type: 'Положение' },
      { id: BigInt(2), type: 'Отчет' },
      { id: BigInt(3), type: 'Приказ' },
      { id: BigInt(4), type: 'Регламент' },
    ],
    skipDuplicates: true,
  });
  console.log('Inserted records for DocumentsTypes:', await prisma.documentsTypes.findMany());
}