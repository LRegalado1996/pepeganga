import { getProductsForHome } from "@/actions";
import { ProductGrid, Title } from "@/components";

export default async function Home() {
  const { products } = await getProductsForHome();

  return (
    <div className="mx-5">
      <Title name={"Productos destacados"} />
      <ProductGrid products={products} />
    </div>
  );
}
