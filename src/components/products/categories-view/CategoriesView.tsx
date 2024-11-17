import { getCategoriesSlug } from "@/actions";

interface Props {
  pathname: string;
}

export const CategoriesView = async ({ pathname }: Props) => {
  const category = await getCategoriesSlug({ slug: pathname });
  console.log({ category });
  return <div>{pathname}</div>;
};
