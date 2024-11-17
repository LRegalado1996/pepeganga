import prisma from "@/lib/prisma";

export const getProductByCategories = async (ids: string[]) => {
  try {
    const allCategories = await prisma.product.findMany({
      where: { categoryId: { in: ids } },

      include: {
        ProductImage: {
          take: 1,
        },
      },
    });

    if (allCategories) {
      return allCategories;
    }

    return [];
  } catch (error) {
    console.log(error);
    throw new Error("No se puede cargar las categorias");
  }
};
