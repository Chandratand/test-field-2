'use server';

import { db } from '@/db';
import { RegisterValidator } from '@/lib/validator/authentication';
import { CreateUserValidator, EditUserValidator } from '@/lib/validator/user';
import { z } from 'zod';
import { Resend } from 'resend';

export const getUser = async (take?: number): Promise<User[]> => {
  const user = await db.user.findMany({ take: take || undefined });
  return user;
};

export const createUser = async (data: z.infer<typeof CreateUserValidator>) => {
  const parsedData = CreateUserValidator.parse(data);

  const user = await db.user.create({
    data: {
      ...parsedData,
      status: 'Aktif',
      password: 'Password123', //SHOULD BE HASHED
      role: 'User',
    },
  });

  return user;
};

export const updateUser = async (data: z.infer<typeof EditUserValidator>) => {
  const parsedData = EditUserValidator.parse(data);

  const user = await db.user.update({
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

  return user;
};

export const deleteUser = async (id: number) => {
  await db.user.delete({
    where: {
      id: id,
    },
  });

  return true;
};
function generatePassword(length = 12) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[{]};:\'",<.>/?';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

export const registerUser = async (data: z.infer<typeof RegisterValidator>) => {
  const parsedData = RegisterValidator.parse(data);
  // SHOULD NOT HARDCODED
  const resend = new Resend('re_bd5zGcsA_5cWuuhkHR3HbT5oQiypDJrKQ');
  const password = generatePassword();

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: parsedData.email,
      subject: 'Registration',
      html: `<p>Your password is : <strong>${password}</strong>!</p>`,
    });
  } catch (error) {
    // ignore
  }

  const user = await db.user.create({
    data: {
      ...parsedData,
      status: 'Aktif',
      password: password, //SHOULD BE HASHED
      role: 'User',
    },
  });

  return 'user';
};
