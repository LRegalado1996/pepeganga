import { type CategoryInterface, initialData } from "./seed";
import prisma from "../lib/prisma";

async function main() {
  const { categories, products } = initialData;
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  await insertCategories(categories);
  const dbCategories = await prisma.category.findMany();

  for (let i = 0; i < products.length; i++) {
    const { category, images, ...rest } = products[i];
    const product = {
      ...rest,
      categoryId: dbCategories.filter((dbCategory) => dbCategory.name === category)[0].id,
    };

    const dbProduct = await prisma.product.create({
      data: product,
    });

    const productImages = images.map((img) => ({
      url: img,
      alt: dbProduct.title,
      productId: dbProduct.id,
    }));

    await prisma.productImage.createMany({
      data: productImages,
    });
  }

  console.log("Seed completed");
}

async function insertCategories(categories: CategoryInterface[], categoryid: string | null = null) {
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];

    const dbCategory = await prisma.category.create({
      data: {
        name: category.name,
        parentId: categoryid,
      },
    });

    if (category.childrens && category.childrens.length > 0) {
      insertCategories(category.childrens, dbCategory.id);
    }
  }
}

(() => {
  if (process.env.NODE_ENV === "production") return;

  main();
})();
