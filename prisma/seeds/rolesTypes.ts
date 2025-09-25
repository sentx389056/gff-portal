import { PrismaClient } from '@prisma/client';

export async function seedRolesTypes(prisma: PrismaClient) {
  console.log('Starting to seed RolesTypes...');
  await prisma.rolesTypes.createMany({
    data: [
      { id: BigInt(1), role: 'admin' },
      { id: BigInt(2), role: 'user' },
    ],
    skipDuplicates: true,
  });
  console.log('Inserted records for RolesTypes:', await prisma.rolesTypes.findMany());
}