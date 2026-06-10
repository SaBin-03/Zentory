import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <h2 className="text-2xl font-black text-shop_light_green tracking-wider uppercase hover:text-shop_light_green ">
        Zentor<span>y</span>
      </h2>
    </Link>
  );
};

export default Logo;
