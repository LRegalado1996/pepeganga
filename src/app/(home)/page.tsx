import { getProductsForHome } from "@/actions";
import { ProductGrid, Title } from "@/components";

export default async function Home() {
  const { products } = await getProductsForHome();

  return (
    <div className="px-5 lg:px-10 ">
      <Title name={"Productos destacados"} />
      <ProductGrid products={products} />
    </div>
  );
}
