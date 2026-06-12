import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="bg-shop_light_pink h-80 mx-auto w-[80%] rounded-lg flex justify-center items-center">
        <div className="h-full w-1/2  flex justify-center items-center flex-col gap-3">
            <h2 className="text-3xl text-shop_btn_dark_green tracking-wider">
                Grab Your Products for Upto 50% <br />
                Discount on Selected Products
            </h2>
            <button className="bg-shop_dark_green/70 rounded-lg text-white px-3 py-2 hover:bg-shop_light_green hoverEffect">
                <Link href={"/shop"}>
                    Buy Now
                </Link>
            </button>
        </div>
    </div>
  );
};

export default HomePage;
