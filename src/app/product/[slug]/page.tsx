import { notFound } from "next/navigation";

import { getProductBySlug } from "@/actions";
import { mainFont } from "@/config/fonts";
import { AddToCart, ImageSlider } from "@/components";

interface Props {
  params: {
    slug: string;
  };
}

export default async function ProductSlugPage({ params }: Props) {
  const { slug } = params;
  const product = await getProductBySlug(slug);

  if (!product) notFound();

  return (
    <div className="mx-0 md:mx-5 lg:mx-0 mt-0 md:mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
      {/* Slider */}
      <div className="col-span-1 md:col-span-2">
        <ImageSlider images={product.ProductImage} />
      </div>

      {/* Details */}
      <div className="mx-5 md:mx-0 col-span-1 pt-5">
        <h2 className={`${mainFont.className} antialiased text-2xl font-bold mb-5`}>
          {product.title}
        </h2>
        <p className="text-2xl mb-5">$ {product.price}</p>
        <AddToCart product={product} />
        <div className="my-5">
          <h3 className="font-bold mb-1">Descripción</h3>
          <p>{product.description}</p>
        </div>
        {product.tags?.length > 0 && (
          <ul className="flex flex-row-reverse flex-wrap gap-2">
            {product.tags.map((tag, i) => (
              <li key={i} className="bg-ivory rounded-full py-2 px-4 text-xs uppercase">
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
