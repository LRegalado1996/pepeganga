"use server";

import prisma from "@/lib/prisma";

interface PaginationOptions {
  page?: number;
  take?: number;
  category: string;
}

export const getPaginatedProducts = async ({
  page = 1,
  take = 60,
  category,
}: PaginationOptions) => {
  if (isNaN(Number(take))) take = 60;
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  try {
    let products = [];
    let totalCount = 0;

    if (category) {
      products = await prisma.product.findMany({
        take,
        skip: (page - 1) * take,
        where: {
          categoryId: category,
        },
      });

      totalCount = await prisma.product.count({
        where: {
          categoryId: category,
        },
      });
    } else {
      products = await prisma.product.findMany({
        take,
        skip: (page - 1) * take,
      });

      totalCount = await prisma.product.count();
    }

    const totalPages = Math.ceil(totalCount / take);

    return {
      currentPage: page,
      totalPages,
      products,
    };
  } catch (error) {
    console.log(error);
    throw new Error("No se pudo cargar los productos");
  }
};
