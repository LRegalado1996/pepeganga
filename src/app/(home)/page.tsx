import { getProductsForHome } from "@/actions";
import { ProductGrid, Title } from "@/components";

export default async function Home() {
  const { products } = await getProductsForHome();

  return (
    <>
      <Title name={"Productos destacados"} />
      <ProductGrid products={products} />
    </>
  );
}
