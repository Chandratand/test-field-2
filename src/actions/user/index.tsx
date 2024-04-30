'use server';

import { db } from '@/db';
import { CreateUserValidator, EditUserValidator } from '@/lib/validator/user';
import { z } from 'zod';

export const getUser = async (take?: number): Promise<User[]> => {
  const user = await db.user.findMany({ take: take || undefined });
  return user;
};

export const createUser = async (data: z.infer<typeof CreateUserValidator>) => {
  const parsedData = CreateUserValidator.parse(data);

  const product = await db.user.create({
    data: {
      ...parsedData,
      status: 'Aktif',
      password: 'Password123', //SHOULD BE HASHED
      role: 'User',
    },
  });

  return product;
};

export const updateUser = async (data: z.infer<typeof EditUserValidator>) => {
  const parsedData = EditUserValidator.parse(data);

  const product = await db.user.update({
    where: { id: parsedData.id },
    data: {
      email: parsedData.email,
      password: parsedData.password || undefined,
      phoneNumber: parsedData.phoneNumber,
      name: parsedData.name,
      status: parsedData.status,
      role: parsedData.role,
    },
  });

  return product;
};

export const deleteUser = async (id: number) => {
  await db.user.delete({
    where: {
      id: id,
    },
  });

  return true;
};
