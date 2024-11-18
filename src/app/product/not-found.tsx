import { getCategoriesHeader } from "@/actions";
import { CategoriesList, Title } from "@/components";

export default async function NotFoundPage() {
  const categories = await getCategoriesHeader();

  return (
    <div className="text-center mt-5 w-full">
      <Title name={"Producto no disponible"} />
      {categories && (
        <>
          <p className="mb-8">Te recomendamos ver los productos dentro de estas categorías</p>
          <CategoriesList categories={categories} />
        </>
      )}
    </div>
  );
}
