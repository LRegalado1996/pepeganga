import { CategoriesView } from "@/components";

interface Props {
  params: Promise<{
    category: string;
    subCategory: string;
  }>;
}

export default async function SubCategoryPage({ params }: Props) {
  const { category, subCategory } = await params;

  return <CategoriesView pathname={`/${category}/${subCategory}`} />;
}
