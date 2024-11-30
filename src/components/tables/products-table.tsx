import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";

import type { ShortCategory } from "@/interfaces";
import type { Product } from "@prisma/client";

interface Props {
  products: Product[];
  categories: ShortCategory[];
}

const columnsName = ["Nombre", "Categoria", "Stock", "Editar"];

export const ProductsTable = ({ products, categories }: Props) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right">
        <thead className="text-xs uppercase bg-gray-50 ">
          <tr>
            {columnsName.map((columnName, i) => (
              <th key={i} scope="col" className="px-6 py-3">
                {columnName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="bg-white border-b cursor-pointer hover:bg-ivory">
              <th scope="row" className="px-6 py-4 whitespace-nowrap ">
                {product.title}
              </th>
              <td className="px-6 py-4">
                {categories.find(({ id }) => id === product.categoryId)?.name}
              </td>
              <td className="px-6 py-4">{product.stock}</td>
              <td className="px-6 py-4">
                <Link
                  href={`/dashboard/products/${product.id}`}
                  className="flex btn-primary justify-center"
                >
                  <IoChevronForwardOutline />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
