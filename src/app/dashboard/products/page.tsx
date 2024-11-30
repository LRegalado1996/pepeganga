import { getAllCategories, getPaginatedProducts } from "@/actions";
import { Pagination, ProductsTable, Title } from "@/components";

interface Props {
  searchParams: {
    page?: string;
    take?: string;
    category?: string;
  };
}

export default async function dashboardProductPage({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const take = searchParams.take ? parseInt(searchParams.take) : 60;

  const { products, totalPages } = await getPaginatedProducts({
    page,
    take,
  });

  const allCategories = await getAllCategories();

  return (
    <div>
      <Title name="Lista de todos los productos" />

      <ProductsTable products={products} categories={allCategories} />

      {totalPages > 1 && <Pagination totalPages={totalPages} />}
    </div>
  );
}
