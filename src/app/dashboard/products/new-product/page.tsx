import { CreateProductForm, Title } from "@/components";

export default async function dashboardNewProductPage() {
  return (
    <div>
      <Title name="Crear un nuevo producto" />

      {/* TODO:  */}
      <CreateProductForm />
    </div>
  );
}
