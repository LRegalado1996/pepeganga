"use server";

import prisma from "@/lib/prisma";

export const getCategoryHeader = async () => {
  try {
    const allCategories = await prisma.category.findMany();

    const mainCategory = allCategories.find((category) => !category.parentId);
    if (mainCategory) {
      const firstLevelCategories = allCategories.filter(
        (category) => category?.parentId?.toString() === mainCategory.id.toString()
      );

      if (firstLevelCategories) {
        return firstLevelCategories;
      }
    }
    return [];
  } catch (error) {
    console.log(error);
    throw new Error("No se puede cargar las categorias");
  }
};
