"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function ProductsTableContent() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/api/ProductDetails");
      if (response.data.success) {
        setproducts(response.data.details);
      }
    };
    getData();
  }, []);

  return (
    <div className="min-h-screen  p-8 md:p-12 overflow-x-auto w-full">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <div className="flex items-center space-x-2 text-sm text-slate-500 font-medium">
              <span>Adminpage</span>
              <span className="text-slate-300">/</span>
              <span className="text-slate-700">Products</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
              All Products
            </h2>
          </div>

          <button className="px-4 py-2 bg-[#ff9900] hover:bg-[#e68a00] text-black text-sm font-semibold rounded-lg shadow transition active:scale-[0.98]">
            + Add New Product
          </button>
        </div>

        <div className="bg-white rounded-xl border border-slate-200/80 shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/70 border-b border-slate-200 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  <th className="py-4 px-6">Product Title</th>
                  <th className="py-4 px-6">Category</th>
                  <th className="py-4 px-6">Price</th>
                  <th className="py-4 px-6">Stock Status</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                {products.length > 0 ? (
                  products.map((product, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="py-4 px-6 font-medium text-slate-900 max-w-xs truncate flex">
                        <Image
                          src={product.image}
                          width={50}
                          height={50}
                          alt={product.title}
                           priority
                           className="w-full"
                        />
                        {product.title}
                      </td>
                      <td className="py-4 px-6 text-slate-500">
                        {product.category}
                      </td>
                      <td className="py-4 px-6 font-semibold text-slate-900">
                        ${product.price.toFixed(2)}
                      </td>
                      <td className="py-4 px-6">
                        {product.stock > 0 ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                            {product.stock} in stock
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-50 text-rose-700 border border-rose-200">
                            Out of Stock
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-right space-x-3 whitespace-nowrap">
                        <button className="text-slate-600 hover:text-[#ff9900] font-medium transition">
                          View
                        </button>
                        <button className="text-rose-600 hover:text-rose-800 font-medium transition">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  /* Clean Empty State Row across all 5 columns */
                  <tr>
                    <td colSpan="5" className="py-12 px-6 text-center">
                      <div className="flex flex-col items-center justify-center space-y-2">
                        {/* Subtle Package Icon */}
                        <svg
                          className="w-10 h-10 text-slate-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                          />
                        </svg>
                        <p className="text-base font-semibold text-slate-700">
                          No products found
                        </p>
                        <p className="text-xs text-slate-400 max-w-xs">
                          Your inventory is currently empty. Get started by
                          adding your very first product.
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
