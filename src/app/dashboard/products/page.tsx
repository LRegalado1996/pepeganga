import Link from "next/link";

import { getAllCategories, getPaginatedProducts } from "@/actions";
import { CategoriesFilter, Pagination, ProductsTable, Title } from "@/components";

interface Props {
  searchParams: Promise<{
    page?: string;
    take?: string;
    category?: string;
  }>;
}

export default async function dashboardProductPage({ searchParams }: Props) {
  const params = await searchParams;
  const page = params.page ? parseInt(params.page) : 1;
  const take = params.take ? parseInt(params.take) : 60;
  const category = params?.category ?? "";

  const { products, totalPages } = await getPaginatedProducts({
    page,
    take,
    category,
  });

  const allCategories = await getAllCategories();

  return (
    <div>
      <div className="flex justify-between flex-col sm:flex-row">
        <Title name="Lista de todos los productos" />
        <Link className="btn-primary h-fit mb-5 text-center" href="/dashboard/products/new-product">
          Crear producto
        </Link>
      </div>

      {allCategories?.length && (
        <div className="w-full flex justify-end">
          <CategoriesFilter categories={allCategories} categorySelected={category} />
        </div>
      )}

      <ProductsTable products={products} categories={allCategories} />

      {totalPages > 1 && <Pagination totalPages={totalPages} />}
    </div>
  );
}
