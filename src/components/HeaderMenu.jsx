"use client"
import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const HeaderMenu = () => {
    const pathname = usePathname();
  return (
    <div className="hidden md:inline-flex w-1/3 font-semibold text-sm capitalize text-lightColor gap-7">
      {headerData.map((item) => (
        <Link
          className={`hover:text-shop_light_green group relative hoverEffect ${pathname === item.href && "text-shop_light_green"}`}
          key={item.title}
          href={item.href}
        >
          {item.title}
          <span
            className={`${pathname === item.href && "w-1/2"} absolute -bottom-0.5 left-1/2 w-0 group-hover:w-1/2 group-hover:left-0 h-0.5 bg-shop_light_green hoverEffect`}
          />
          <span
            className={`${pathname === item.href && "w-1/2"} absolute -bottom-0.5 right-1/2 w-0 group-hover:w-1/2 group-hover:right-0 h-0.5 bg-shop_light_green hoverEffect`}
          />
        </Link>
      ))}
    </div>
  );
};

export default HeaderMenu;
