"use client";

import { FC } from "react";
import Link from "next/link";
import { ProductType } from "@/app/interfaces";
import CustomImage from "./Custom-Image";

const Product: FC<{ product: ProductType }> = ({ product }) => {
  return (
    <Link href={`/product/${product.id}`} className="h-96 p-6 flex flex-col bg-white border rounded-lg hover:scale-105 transition-transform ease-out duration-200 ">
      <div className="max-h-72 flex-1 relative">
        <CustomImage product={product} fill/>
      </div>
      <h3 className="mt-5 tracking-widest text-indigo-500 text-xs font-medium title-font">
        {product.category}
      </h3>
      <div className="font-semibold flex items-center justify-between mt-4 mb-1">
        <p className="w-44 truncate">{product.title}</p>
        <p>${product.price}</p>
      </div>
      <p className="leading-relaxed text-base line-clamp-2">
        {product.description}
      </p>
    </Link>
  );
};

export default Product;
