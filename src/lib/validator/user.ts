import { z } from 'zod';

export const CreateUserValidator = z.object({
  name: z.string(),
  email: z.string().email(),
  phoneNumber: z.string(),
});

export const EditUserValidator = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  phoneNumber: z.string(),
  password: z.string().optional(),
  status: z.string(),
  role: z.string(),
});
