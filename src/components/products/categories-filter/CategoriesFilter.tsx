"use client";

import type { ShortCategory } from "@/interfaces";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  categories: ShortCategory[];
  categorySelected: string;
}

export const CategoriesFilter = ({ categories, categorySelected }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const currentQuery = new URLSearchParams(window.location.search);

  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;

    if (selectedCategory === "0") return;

    if (selectedCategory !== "0") {
      currentQuery.set("category", selectedCategory);
    } else {
      currentQuery.delete("category");
    }

    router.push(`${pathname}?${currentQuery.toString()}`);
  };

  return (
    <select
      defaultValue={categorySelected ? categorySelected : 0}
      className="w-48 h-fit mb-2 bg-ivory border border-gray-300 text-sm rounded-lg focus:ring-forestGreen focus:border-forestGreen  block p-2"
      onChange={onChangeSelect}
    >
      <option value={0} disabled>
        Filtra por categoria
      </option>
      {categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
};
