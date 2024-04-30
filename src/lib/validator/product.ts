import { z } from 'zod';

export const CreateProductValidator = z.object({
  name: z.string(),
  price: z.number(),
  image: z.string(),
});

export const EditProductValidator = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  image: z.string(),
  status: z.string(),
});
