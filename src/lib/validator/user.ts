import { z } from 'zod';

export const CreateUserValidator = z.object({
  name: z.string(),
  email: z.string().email(),
  phoneNumber: z.string(),
});
