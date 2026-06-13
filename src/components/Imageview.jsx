import Image from "next/image";
import React from "react";

const Imageview = ({ image, isStock }) => {
  return (
    <div className="w-full flex justify-center rounded-xl border border-gray-100">
      <Image
        src={image}
        width={700}
        alt="pic"
        height={700}
        priority
        className={` min-h-125 object-contain ${isStock === 0 ? "opacity-50" : ""} `}
      />
    </div>
  );
};

export default Imageview;
