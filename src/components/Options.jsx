import { productType } from "@/constants/data";
import Link from "next/link";
import React from "react";

const Options = ({ selectedTab,onTabSelect }) => {
  return (
    <div className="flex justify-between items-center px-10 py-10">
      <div className="flex gap-1 md:gap-3 items-center font-semibold text-sm">
        {productType.map((item) => (
          <button
          onClick={()=> onTabSelect(item.title)}
            className={` ${selectedTab === item.title ? "bg-shop_light_green text-white border-shop_light_green" : "bg-shop_light_green/20"} border border-shop_light_green/30 px-2 md:px-6 md:py-2 rounded-full hover:bg-shop_light_green hover:border-shop_light_green hover:text-white hoverEffect cursor-pointer `}
            key={item.title}
          >
            {item.title}
          </button>
        ))}
      </div>
      <Link
        href="/shop"
        className={` border border-shop_light_green/30 px-2  md:px-6 md:py-2 rounded-full hover:bg-shop_light_green hover:border-shop_light_green hover:text-white hoverEffect cursor-pointer `}
      >
        See All
      </Link>
    </div>
  );
};

export default Options;
