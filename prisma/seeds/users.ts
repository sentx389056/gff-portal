import { PrismaClient, Prisma } from '@prisma/client';

export async function seedUsers(prisma: PrismaClient) {
  console.log('Starting to seed Users...');
  const usersData: Prisma.UsersCreateInput[] = [
    {
      id: BigInt(1),
      username: 'admin',
      password: '$2b$10$CgYTJQorK52r/c1b4NDs6.8nSwYx.Sd0BOMI4IOKTbRI1xddAvcYi',
      name: 'Admin User',
      roleId: BigInt(1),
      lastActivity: new Date('2025-09-22T06:23:02.538Z'),
      statusId: BigInt(1),
      createdAt: new Date('2025-09-16T09:05:56.182Z'),
    },
    {
      id: BigInt(3),
      username: 'tester',
      password: '$2b$10$3ojDFQvczNo4xUFoGc2tR.DVES7o32F2lu.QbVRn0ZCcb2U5.V6d.',
      name: 'Tester',
      roleId: BigInt(1),
      lastActivity: new Date('2025-09-16T12:46:39.381Z'),
      statusId: BigInt(2),
      createdAt: new Date('2025-09-16T12:45:03.912Z'),
    },
    {
      id: BigInt(4),
      username: 'bet',
      password: '$2b$10$8cuPpnB4to0YGxGUkeXaLO8Xwiqv8WIg.7IaBD20etyVifnXwFX8u',
      name: 'beta',
      roleId: BigInt(2),
      lastActivity: new Date('2025-09-18T20:11:39.46Z'),
      statusId: BigInt(2),
      createdAt: new Date('2025-09-18T09:08:57.173Z'),
    },
  ];

  for (const userData of usersData) {
    await prisma.users.upsert({
      where: { id: userData.id },
      update: {},
      create: userData,
    });
  }
  console.log('Inserted records for Users:', await prisma.users.findMany());
}