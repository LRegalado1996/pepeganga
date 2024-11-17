import { getCategoriesHeader } from "@/actions";
import { CategoriesList, Title } from "@/components";

export default async function NotFoundPage() {
  const categories = await getCategoriesHeader();

  return (
    <div className="text-center mt-5 w-full">
      <Title name={"Categoria sin articulos"} />
      {categories && (
        <>
          <p className="mb-5">Te recomendamos ver alguno de los siguientes categorias</p>
          <CategoriesList categories={categories} />
        </>
      )}
    </div>
  );
}
