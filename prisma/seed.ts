// seed/seed.ts
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const usersSeed = [
  {
    name: 'Admin',
    email: 'admin@example.com',
    phoneNumber: '+1234567290',
    role: 'Admin',
    status: 'Aktif',
    password: 'password123',
  },
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phoneNumber: '+1234567890',
    role: 'User',
    status: 'Aktif',
    password: 'password123',
  },
  {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phoneNumber: '+1987654321',
    role: 'User',
    status: 'Aktif',
    password: 'password123',
  },
  {
    name: 'Michael Johnson',
    email: 'michael.johnson@example.com',
    phoneNumber: '+1555555555',
    role: 'User',
    status: 'Aktif',
    password: 'password123',
  },
  {
    name: 'Emily Brown',
    email: 'emily.brown@example.com',
    phoneNumber: '+1666666666',
    role: 'User',
    status: 'Aktif',
    password: 'password123',
  },
  {
    name: 'David Wilson',
    email: 'david.wilson@example.com',
    phoneNumber: '+1777777777',
    role: 'User',
    status: 'Aktif',
    password: 'password123',
  },
];
const productsSeed = [
  {
    name: 'Smartphone',
    price: 799.99,
    image: '/dummy/product1.png',
    status: 'Aktif',
    createdAt: '2023-10-15T08:00:00Z',
  },
  {
    name: 'Laptop',
    price: 1299.99,
    image: '/dummy/product1.png',
    status: 'Aktif',
    createdAt: '2023-09-20T08:00:00Z',
  },
  {
    name: 'Headphones',
    price: 149.99,
    image: '/dummy/product1.png',
    status: 'Aktif',
    createdAt: '2023-11-05T08:00:00Z',
  },
  {
    name: 'Smart Watch',
    price: 199.99,
    image: '/dummy/product1.png',
    status: 'Aktif',
    createdAt: '2023-08-12T08:00:00Z',
  },
  {
    name: 'Tablet',
    price: 499.99,
    image: '/dummy/product1.png',
    status: 'Aktif',
    createdAt: '2023-12-30T08:00:00Z',
  },
];

async function seed() {
  await prisma.user.createMany({ data: usersSeed });
  await prisma.product.createMany({ data: productsSeed });
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
