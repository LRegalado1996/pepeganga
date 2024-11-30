"use server";

import prisma from "@/lib/prisma";

export const getAllCategories = async () => {
  try {
    const allCategories = await prisma.category.findMany({ select: { name: true, id: true } });

    return allCategories;
  } catch (error) {
    console.log(error);
    throw "Categories not found";
  }
};
