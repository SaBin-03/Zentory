import Image from "next/image";
import React from "react";
import { ShoppingCart, Star } from "lucide-react"; // Optional: Install lucide-react for icons

const ProductCard = ({ item }) => {
  const {
    image,
    name = item.title,
    category = "Category",
    price = 0,
    oldPrice,
    rating = 4.5,
    isSale = false,
  } = item || {};

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

      <div className="relative aspect-square w-full overflow-hidden bg-gray-50">

        {isSale && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-red-500 px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
            Sale
          </span>
        )}

        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            priority
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-100"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-100 text-gray-400">
            No Image
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 flex items-center justify-between text-xs font-medium text-gray-400">
          <span>{category}</span>
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="h-3.5 w-3.5 fill-current" />
            <span className="font-semibold text-gray-600">{rating}</span>
          </div>
        </div>

        <h3 className="mb-2 line-clamp-2 text-sm font-semibold text-gray-800 transition-colors group-hover:text-shop_light_green">
          {name}
        </h3>

        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex flex-col">
            {oldPrice && (
              <span className="text-xs text-gray-400 line-through">
                ${oldPrice.toFixed(2)}
              </span>
            )}
            <span className="text-base font-bold text-gray-900">
              ${price.toFixed(2)}
            </span>
          </div>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-900 text-white transition-colors duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Add to cart"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
