import { z } from 'zod';

export const CreateProductValidator = z.object({
  name: z.string(),
  price: z.number(),
  image: z.string(),
});
