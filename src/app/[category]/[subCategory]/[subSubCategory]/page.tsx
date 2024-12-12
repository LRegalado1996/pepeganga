import { CategoriesView } from "@/components";

interface Props {
  params: Promise<{
    category: string;
    subCategory: string;
    subSubCategory: string;
  }>;
}
export default async function SubSubCategoryPage({ params }: Props) {
  const { category, subCategory, subSubCategory } = await params;

  return <CategoriesView pathname={`/${category}/${subCategory}/${subSubCategory}`} />;
}
