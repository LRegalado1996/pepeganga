import { notFound } from "next/navigation";

import { getCategoriesSlug, getChildrenCategories } from "@/actions";
import { CategoriesList, CategoriesProductsList } from "../..";

interface Props {
  pathname: string;
}

export const CategoriesView = async ({ pathname }: Props) => {
  const category = await getCategoriesSlug(pathname);

  if (!category) notFound();

  const childrenCategories = await getChildrenCategories(category.id);

  return (
    <div className="mt-3">
      <CategoriesProductsList category={category} />

      {childrenCategories.length > 0 && (
        <>
          <CategoriesList categories={childrenCategories} />
          {childrenCategories.some(
            (c) => c.productCount > 0 || (c.categories && c.categories.length > 0)
          ) && (
            <ul>
              {childrenCategories
                .filter((c) => c.productCount > 0 || (c.categories && c.categories.length > 0))
                .map((childrenCategory) => (
                  <>
                    <li key={`children-${childrenCategory.id}`}>
                      <CategoriesProductsList category={childrenCategory} />
                    </li>
                    {childrenCategory.categories &&
                      childrenCategory.categories.length > 0 &&
                      childrenCategory.categories.map((childrenChildrenCategory) => (
                        <li key={`childrenChildren-${childrenChildrenCategory.id}`}>
                          <CategoriesProductsList category={childrenChildrenCategory} />
                        </li>
                      ))}
                  </>
                ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};
