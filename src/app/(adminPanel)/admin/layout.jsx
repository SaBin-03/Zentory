import React from "react";
import Link from "next/link";

const layout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* sidebar */}
      <div className="h-full w-1/5 flex flex-col">
        <div className="w-full h-30 flex justify-center items-center">
          <h2 className="text-3xl">ZentoryAdmin</h2>
        </div>
        <div className="w-full h-50 flex justify-center items-center flex-col gap-4">
          <Link className="w-full text-center h-10 bg-amber-500" href="/admin">
            <div className="text-2xl">Dashboard</div>
          </Link>
          <Link href="/admin/ProductDetails">
            <div className="text-2xl">Products</div>
          </Link>
          <Link href="/admin/AddProducts">
            <div className="text-2xl">AddProducts</div>
          </Link>
        </div>
      </div>

      <div className="w-4/5 bg-blue-300">
        {children}
      </div>
    </div>
  );
};

export default layout;
