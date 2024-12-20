import { CategoryInterface } from "@/interfaces";
import prisma from "@/lib/prisma";

export const getCategoriesSlug = async (slug: string): Promise<CategoryInterface | null> => {
  if (!slug) throw new Error("Slug is required");

  try {
    const allCategories = await prisma.category.findFirst({
      where: { slug },
      include: {
        _count: {
          select: {
            Product: true,
          },
        },
      },
    });

    if (allCategories) {
      return {
        ...allCategories,
        productCount: allCategories._count.Product,
      };
    }

    return null;
  } catch (error) {
    console.log(error);
    throw new Error("No se puede cargar las categorias");
  }
};
