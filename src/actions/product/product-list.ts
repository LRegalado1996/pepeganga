"use server";

import prisma from "@/lib/prisma";

export const getProductsForHome = async () => {
  try {
    const list = await prisma.productList.findFirst({
      where: {
        title: "HOME",
      },

      include: {
        products: {
          include: {
            ProductImage: {
              take: 1,
            },
          },
        },
      },
    });

    if (list) {
      return list;
    } else {
      throw new Error("Lista vacia");
    }
  } catch (error) {
    console.log(error);
    throw new Error("No se pudo cargar los productos");
  }
};

export const getAllProductList = async () => {
  try {
    const productsLists = await prisma.productList.findMany({
      select: {
        id: true,
        title: true,
      },
    });

    return productsLists;
  } catch (error) {
    console.log(error);
    throw new Error("We can't get all product lists");
  }
};
