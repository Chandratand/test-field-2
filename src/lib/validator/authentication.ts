import { z } from 'zod';

export const LoginValidator = z.object({
  email: z.string(),
  password: z.string(),
});

export const RegisterValidator = z.object({
  name: z.string(),
  email: z.string().email(),
  phoneNumber: z.string(),
});
