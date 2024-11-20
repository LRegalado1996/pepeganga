"use client";

import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import type { ProductImage } from "@prisma/client";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./ImageSlider.css";

interface Props {
  images: ProductImage[];
}

export const ImageSlider = ({ images }: Props) => {
  return (
    <div className="w-full max-h-screen">
      <Swiper pagination navigation modules={[FreeMode, Pagination, Navigation]}>
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <Image src={image.url} alt={image.alt} width={1000} height={1000} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
