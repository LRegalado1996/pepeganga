import prisma from "@/lib/prisma";

interface Props {
  slug: string;
}

export const getCategoriesSlug = async ({ slug }: Props) => {
  if (!slug) return [];

  try {
    const allCategories = await prisma.category.findFirst({
      where: { slug },
      include: { Product: true },
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
