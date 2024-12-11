import { ProductById } from "@/actions";
import { CreateProductForm, Title } from "@/components";
import { redirect } from "next/navigation";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function dashboardProductIdPage({ params }: Props) {
  const { id } = await params;
  const product = await ProductById(id);

  if (!product) redirect("/dashboard/products");

  return (
    <div>
      <Title name={`Editar pruducto: ${product.title}`} />

      {/* TODO:  */}
      <CreateProductForm product={product} />
    </div>
  );
}
