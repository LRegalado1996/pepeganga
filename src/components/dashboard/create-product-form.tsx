"use client";

import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import clsx from "clsx";

import { AddTags, AddImages } from "@/components";
import { getAllCategories } from "@/actions";
import type { ProductInterface, ShortCategory } from "@/interfaces";
import type { ProductImage } from "@prisma/client";

interface Props {
  product?: ProductInterface;
}

type FormInputs = {
  categoryId: string;
  description: string;
  internalId: number;
  price: number;
  productImage: ProductImage[];
  slug: string;
  stock: number;
  tags?: string[];
  title: string;
};

export const CreateProductForm = ({ product }: Props) => {
  const [categories, setCategories] = useState<ShortCategory[]>([]);
  const router = useRouter();

  const [loaded, setLoaded] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      internalId: product?.internalId,
      title: product?.title,
      description: product?.description,
      price: product?.price,
      tags: product?.tags ?? [],
      stock: product?.stock,
      slug: product?.slug,
      categoryId: product?.categoryId,
      productImage: product?.ProductImage ?? [],
    },
  });

  useEffect(() => {
    getSelectData();
  }, []);

  const getSelectData = async () => {
    const newCategories = await getAllCategories();

    setCategories(newCategories);

    setLoaded(true);
  };

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    console.log("Send Form", data);
  };

  const onChangeTags = (tags: string[]) => {
    setValue("tags", tags);
    router.refresh();
  };

  const onChangeImages = (images: ProductImage[]) => {
    setValue("productImage", images);
    router.refresh();
  };

  return (
    loaded && (
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* internalId input */}
        <div className="grid sm:grid-cols-[30%,70%] w-full items-center ">
          <label className="py-2">Internal ID:</label>
          <input
            className={clsx("px-5 py-2 border rounded w-full focus-visible:border-forestGreen", {
              "border-red-500": !!errors.internalId,
            })}
            type="number"
            required
            {...register("internalId", { required: true })}
          />
          {!!errors.internalId && (
            <span className="text-xs text-end text-red-500 col-span-2">
              {errors.internalId.message}
            </span>
          )}
        </div>

        {/* title input */}
        <div className="grid sm:grid-cols-[30%,70%] w-full">
          <label className="py-2">Titulo:</label>
          <input
            className={clsx("px-5 py-2 border rounded w-full focus-visible:border-forestGreen", {
              "border-red-500": !!errors.title,
            })}
            type="text"
            required
            {...register("title", { required: true })}
          />
          {!!errors.title && (
            <span className="text-xs text-end text-red-500 col-span-2">{errors.title.message}</span>
          )}
        </div>

        {/* Price input */}
        <div className="grid sm:grid-cols-[30%,70%] w-full">
          <label className="py-2">Precio:</label>
          <input
            className={clsx("px-5 py-2 border rounded w-full focus-visible:border-forestGreen", {
              "border-red-500": !!errors.price,
            })}
            type="number"
            required
            {...register("price", { required: true })}
          />
          {!!errors.price && (
            <span className="text-xs text-end text-red-500 col-span-2">{errors.price.message}</span>
          )}
        </div>

        {/* Stock input */}
        <div className="grid sm:grid-cols-[30%,70%] w-full">
          <label className="py-2">Stock:</label>
          <input
            className={clsx("px-5 py-2 border rounded w-full focus-visible:border-forestGreen", {
              "border-red-500": !!errors.stock,
            })}
            type="number"
            required
            {...register("stock", { required: true })}
          />
          {!!errors.stock && (
            <span className="text-xs text-end text-red-500 col-span-2">{errors.stock.message}</span>
          )}
        </div>

        {/* Slug input */}
        <div className="grid sm:grid-cols-[30%,70%] w-full">
          <label className="py-2">Slug (URL):</label>
          <input
            className={clsx("px-5 py-2 border rounded w-full focus-visible:border-forestGreen", {
              "border-red-500": !!errors.slug,
            })}
            type="text"
            required
            {...register("slug", { required: true })}
          />
          {!!errors.slug && (
            <span className="text-xs text-end text-red-500 col-span-2">{errors.slug.message}</span>
          )}
        </div>

        {/* Category input */}
        <div className="grid sm:grid-cols-[30%,70%] w-full">
          <label className="py-2">Categoría:</label>
          <select
            {...register("categoryId", { required: true })}
            className={clsx("px-5 py-2 border rounded w-full focus-visible:border-forestGreen", {
              "border-red-500": !!errors.categoryId,
            })}
          >
            <option value={0} disabled>
              Seleccione una categoria
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          {!!errors.categoryId && (
            <span className="text-xs text-end text-red-500 col-span-2">
              {errors.categoryId.message}
            </span>
          )}
        </div>

        {/* description input */}
        <div className="grid sm:grid-cols-[30%,70%] w-full">
          <label className="py-2">Descripción:</label>
          <textarea
            className={clsx(
              "px-5 py-2 border rounded w-full focus-visible:border-forestGreen resize-none text-sm min-h-32 h-full",
              {
                "border-red-500": !!errors.description,
              }
            )}
            required
            {...register("description", { required: true })}
          />
          {!!errors.description && (
            <span className="text-xs text-end text-red-500 col-span-2">
              {errors.description.message}
            </span>
          )}
        </div>

        {/* Tags input */}
        <div className="grid sm:grid-cols-[30%,70%] w-full">
          <label className="py-2">Tags:</label>

          <AddTags onChange={onChangeTags} value={getValues("tags")} />

          {!!errors.categoryId && (
            <span className="text-xs text-end text-red-500 col-span-2">
              {errors.categoryId.message}
            </span>
          )}
        </div>

        <div className="grid sm:grid-cols-[15%,85%] w-full sm:col-span-2">
          <label className="py-2">Tags:</label>

          <AddImages onChange={onChangeImages} value={getValues("productImage")} />

          {!!errors.categoryId && (
            <span className="text-xs text-end text-red-500 col-span-2">
              {errors.categoryId.message}s
            </span>
          )}
        </div>
      </form>
    )
  );
};
