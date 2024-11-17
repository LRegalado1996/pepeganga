import prisma from "@/lib/prisma";

interface Props {
  ids: string[];
}

export const getProductByCategories = async ({ ids }: Props) => {
  try {
    const allCategories = await prisma.product.findMany({ where: { categoryId: { in: ids } } });

    if (allCategories) {
      return allCategories;
    }

    return [];
  } catch (error) {
    console.log(error);
    throw new Error("No se puede cargar las categorias");
  }
};
