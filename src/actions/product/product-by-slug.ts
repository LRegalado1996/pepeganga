import prisma from "@/lib/prisma";

export const getProductBySlug = async (slug: string) => {
  try {
    const product = await prisma.product.findFirst({
      where: { slug },
      include: { ProductImage: true },
    });

    return product;
  } catch (error) {
    console.log(error);
    throw new Error("Product not found");
  }
};
