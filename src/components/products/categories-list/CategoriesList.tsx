import Image from "next/image";
import Link from "next/link";

import type { CategoryInterface } from "@/interfaces";

interface Props {
  categories: CategoryInterface[];
}

export const CategoriesList = ({ categories }: Props) => {
  return (
    <ul className="flex gap-5 mb-5">
      {categories
        .filter((c) => c.productCount > 0 || (c.categories && c.categories.length > 0))
        .map((category) => (
          <li className="flex-1" key={category.id}>
            <Link className="flex flex-col items-center" href={category.slug}>
              <Image
                className="bg-ivory rounded-full mb-1 w-full max-w-[150px]"
                src={category.image}
                width={150}
                height={150}
                alt={category.name}
              />
              <h2 className="text-forestGreen">{category.name}</h2>
            </Link>
          </li>
        ))}
    </ul>
  );
};
