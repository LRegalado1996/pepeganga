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
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* Slider */}
      <div className="col-span-1 md:col-span-2">
        <ImageSlider images={product.ProductImage} />
      </div>

      {/* Details */}
      <div className="col-span-1 flex flex-col gap-5">
        <h2 className={`${mainFont.className} antialiased text-2xl font-bold`}>{product.title}</h2>
        <span className="text-2xl">$ {product.price}</span>
        <AddToCart product={product} />
        <div>
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
