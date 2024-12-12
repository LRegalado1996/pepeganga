import prisma from "@/lib/prisma";

import type { CategoryInterface } from "@/interfaces";

export const getChildrenCategories = async (parentId: string | null) => {
  if (!parentId) throw new Error("parentId is required");

  try {
    const allCategories = await getCategories(parentId);

    return allCategories;
  } catch (error) {
    console.log(error);
    throw new Error("No se puede cargar las categorias");
  }
};

const getCategories = async (parentId: string | null): Promise<CategoryInterface[]> => {
  if (!parentId) return [];
  const allCategories = await prisma.category.findMany({
    where: { parentId },

    include: {
      _count: {
        select: {
          Product: true,
        },
      },
    },
  });

  const allCategoriesFormated = await Promise.all(
    allCategories.map(async (category) => {
      const subCategories = await getCategories(category.id);

      return {
        ...category,
        categories: subCategories,
        productCount: category._count.Product,
      };
    })
  );

  return allCategoriesFormated;
};
