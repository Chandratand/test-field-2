import { z } from 'zod';

export const LoginValidator = z.object({
  email: z.string(),
  password: z.string(),
});
