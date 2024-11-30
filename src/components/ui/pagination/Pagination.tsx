"use client";

import Link from "next/link";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

import { generatePaginationNumbers } from "@/utils";
import clsx from "clsx";

interface Props {
  totalPages: number;
}

export const Pagination = ({ totalPages }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pageString = searchParams.get("page") ?? 1;
  const currentPage = isNaN(Number(pageString)) ? 1 : Number(pageString);

  if (currentPage < 1 || isNaN(Number(pageString))) {
    redirect(pathname);
  }

  const allPages = generatePaginationNumbers(currentPage, totalPages);

  const createPageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);

    if (pageNumber === "...") {
      return `${pathname}?${params.toString()}`;
    }

    if (Number(pageNumber) <= 1) {
      return `${pathname}`;
    }

    if (Number(pageNumber) > totalPages) {
      return `${pathname}?${params.toString()}`;
    }

    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex text-center justify-center my-5">
      <nav aria-label="Page navigation">
        <ul className="flex items-center list-style-none">
          <li>
            <Link
              className="relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded  hover:bg-gray-200 focus:shadow-none"
              href={createPageUrl(currentPage - 1)}
            >
              <IoChevronBackOutline size={30} />
            </Link>
          </li>

          {allPages.map((page, index) => (
            <li key={`${page}-${index}`}>
              <Link
                className={clsx(
                  "relative block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded  hover:bg-gray-200 focus:shadow-none",
                  {
                    "bg-forestGreen shadow-md text-white": currentPage === page,
                  }
                )}
                href={createPageUrl(page)}
              >
                {page}
              </Link>
            </li>
          ))}

          <li>
            <Link
              className="relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href={createPageUrl(currentPage + 1)}
            >
              <IoChevronForwardOutline size={30} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
