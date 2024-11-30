"use server";

import prisma from "@/lib/prisma";

interface PaginationOptions {
  page?: number;
  take?: number;
}

export const getPaginatedProducts = async ({ page = 1, take = 60 }: PaginationOptions) => {
  if (isNaN(Number(take))) take = 60;
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  try {
    let products = [];
    let totalCount = 0;

    products = await prisma.product.findMany({
      take,
      skip: (page - 1) * take,
    });

    totalCount = await prisma.product.count();

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
