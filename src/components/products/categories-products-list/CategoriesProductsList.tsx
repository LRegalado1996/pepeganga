import { getProductByCategories } from "@/actions";
import { ProductGrid, Title } from "@/components";
import type { CategoryInterface } from "@/interfaces";
import Link from "next/link";

interface Props {
  category: CategoryInterface;
}

export const CategoriesProductsList = async ({ category }: Props) => {
  const allProducts = await getProductByCategories([category.id]);
  return (
    allProducts?.length > 0 && (
      <>
        <Link href={category.slug} className="block pt-5">
          <Title name={category.name} />
        </Link>

        <ProductGrid products={allProducts} />
      </>
    )
  );
};
