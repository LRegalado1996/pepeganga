import { CategoriesView } from "@/components";

interface Props {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  return <CategoriesView pathname={`/${category}`} />;
}
