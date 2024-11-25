"use server";

import prisma from "@/lib/prisma";
import type { ProductInterface } from "@/interfaces";

export const ProductByIds = async (ids: string[]) => {
  try {
    const products: ProductInterface[] = await prisma.product.findMany({
      where: {
        id: {
          in: ids,
        },
      },
      include: {
        ProductImage: {
          take: 1,
        },
      },
    });

    return products;
  } catch (error) {
    console.log(error);
  }
};
