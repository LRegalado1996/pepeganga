import { getProductsForHome } from "@/actions";
import { ProductGrid } from "@/components";

export default async function Home() {
  const { products } = await getProductsForHome();

  return <ProductGrid products={products} />;
}
