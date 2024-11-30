import { getPaginatedProducts } from "@/actions";
import { Pagination, Title } from "@/components";

interface Props {
  searchParams: {
    page?: string;
    take?: string;
  };
}

export default async function dashboardProductPage({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const take = searchParams.take ? parseInt(searchParams.take) : 12;

  const { products, totalPages } = await getPaginatedProducts({
    page,
    take,
  });

  console.log({ products, totalPages });
  return (
    <div>
      <Title name="Lista de todos los productos" />

      {totalPages > 1 && <Pagination totalPages={totalPages} />}
    </div>
  );
}
