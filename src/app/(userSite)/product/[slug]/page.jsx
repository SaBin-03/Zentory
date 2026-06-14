import AddToCartBtn from "@/components/AddToCartBtn";
import Imageview from "@/components/Imageview";
import { mongoConnect } from "@/lib/mongoConnect";
import { ProdModel } from "@/models/productModel";
import { StarIcon } from "lucide-react";

export default async function ProductPage({ params }) {
  const paramslug = await params;

  await mongoConnect();
  const slug = decodeURIComponent(paramslug.slug);

  const matchedProduct = await ProdModel.findOne({ title: slug }).lean();
  const isStock = matchedProduct.stock > 0;
  return (
    <div className="flex flex-col md:flex-row p-2 md:p-10 ">
      <div className="w-full md:w-1/2 ">
        {matchedProduct.image && (
          <Imageview image={matchedProduct.image} isStock={isStock} />
        )}
      </div>
      <div className="w-full md:w-1/2 p-2">
        <div className="flex justify-center items-start gap-4 flex-col ">
          <h2 className="text-3xl uppercase font-semibold tracking-wide text-gray-600">
            {matchedProduct.title}
          </h2>
          <h3 className="text-gray-500 text-sm">
            {matchedProduct.description}
          </h3>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, idx) => (
              <StarIcon
                key={idx}
                size={15}
                className={
                  idx < 4 ? "text-shop_lighter_green" : "text-shop_light_text"
                }
                fill={
                  idx < 4 ? "lightgreen" : "text-shop_light_text"
                }
              />
            ))}
          </div>
          <div className="flex flex-col">
            <span className="text-4xl text-black font-bold">
              ${matchedProduct.price.toFixed(2)}
            </span>
          </div>
          {matchedProduct.stock > 0 ? (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
              {matchedProduct.stock} in stock
            </span>
          ) : (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-50 text-rose-700 border border-rose-200">
              Out of Stock
            </span>
          )}
        <div className="relative flex items-center gap-2.5 ">
          <AddToCartBtn product={matchedProduct} />
        </div>
        </div>
      </div>
    </div>
  );
}
