import { type CategoryInterface, initialData, Product, ProductList } from "./seed";
import prisma from "../lib/prisma";

async function main() {
  const { categories, products, users, productList } = initialData;

  await prisma.category.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.productList.deleteMany();
  await prisma.user.deleteMany();

  await prisma.user.createMany({ data: users });

  await insertCategories(categories);
  await insertProducts(products);
  await insertProductList(productList);

  console.log("Seed completed");
}

async function insertCategories(categories: CategoryInterface[], categoryid: string | null = null) {
  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];

    const dbCategory = await prisma.category.create({
      data: {
        name: category.name,
        slug: category.slug,
        parentId: categoryid,
        image: category.image,
      },
    });

    if (category.childrens && category.childrens.length > 0) {
      insertCategories(category.childrens, dbCategory.id);
    }
  }
}

async function insertProducts(products: Product[]) {
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
}

async function insertProductList(productList: ProductList[]) {
  for (let i = 0; i < productList.length; i++) {
    const list = productList[i];

    const dbProduct = await prisma.product.findMany({
      where: {
        internalId: { in: list.products },
      },
    });

    await prisma.productList.create({
      data: {
        title: list.title,
        products: {
          connect: dbProduct.map(({ id }) => ({ id })),
        },
      },
    });
  }
}

(() => {
  if (process.env.NODE_ENV === "production") return;

  main();
})();
