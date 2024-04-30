'use server';

import { db } from '@/db';
import { CreateProductValidator, EditProductValidator } from '@/lib/validator/product';
import { z } from 'zod';

export const getProduct = async (take?: number): Promise<Product[]> => {
  const products = await db.product.findMany({ take: take || undefined });
  return products;
};

export const createProduct = async (data: z.infer<typeof CreateProductValidator>) => {
  const parsedData = CreateProductValidator.parse(data);
  const product = await db.product.create({
    data: {
      ...parsedData,
      createdAt: new Date(),
      status: 'Aktif',
    },
  });

  return product;
};

export const updateProduct = async (data: z.infer<typeof EditProductValidator>) => {
  const parsedData = EditProductValidator.parse(data);

  const product = await db.product.update({
    where: { id: parsedData.id },
    data: {
      name: parsedData.name,
      price: parsedData.price,
      status: parsedData.status,
    },
  });

  return product;
};

export const deleteProduct = async (id: number) => {
  await db.product.delete({
    where: {
      id: id,
    },
  });

  return true;
};
