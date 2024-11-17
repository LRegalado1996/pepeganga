import { notFound } from "next/navigation";

import { getCategoriesSlug, getChildrenCategories } from "@/actions";

interface Props {
  pathname: string;
}

export const CategoriesView = async ({ pathname }: Props) => {
  const category = await getCategoriesSlug(pathname);

  if (!category) notFound();

  const childrenCategories = await getChildrenCategories(category.id);

  return (
    <div>
      <pre>{JSON.stringify(childrenCategories, null, 2)}</pre>
      <div>{pathname}</div>
      <pre>{JSON.stringify(category, null, 2)}</pre>
      {/* <ProductGrid products={category?.Product} />; */}
    </div>
  );
};
