'use client';

import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function AddProductPage() {

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    price: '',
    stock: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("/api/ProductDetails",formData);
        if(response.data.success){
            toast.success(response.data.message,{position:"top-center"})
        }
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center text-slate-800 p-6 md:p-12">

      <main className="w-full max-w-2xl flex flex-col justify-center overflow-y-auto">



        <div className="bg-white p-8 rounded-xl border border-slate-200/80 shadow-md">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Create New Product
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Fill out the details below to add a new inventory item.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label htmlFor="title" className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                Product Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. Premium Wireless Headphones"
                className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-lg outline-none text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#ff9900] focus:ring-2 focus:ring-[#ff9900]/10 transition-all text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                Category
              </label>
              <div className="relative">
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-lg outline-none text-slate-900 focus:bg-white focus:border-[#ff9900] focus:ring-2 focus:ring-[#ff9900]/10 transition-all text-sm appearance-none cursor-pointer"
                  required
                >
                  <option value="" disabled className="text-slate-400">Select a category</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Clothing">Clothing & Apparel</option>
                  <option value="Home-appliances">Home Appliances</option>
                  <option value="Books">Books & Stationery</option>
                  <option value="Sports">Sports & Outdoors</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="price" className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                  Price ($)
                </label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="0.00"
                  step="0.01"
                  min="0"
                  className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-lg outline-none text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#ff9900] focus:ring-2 focus:ring-[#ff9900]/10 transition-all text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="stock" className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                  Stock Quantity
                </label>
                <input
                  type="number"
                  id="stock"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  placeholder="0"
                  min="0"
                  className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-lg outline-none text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#ff9900] focus:ring-2 focus:ring-[#ff9900]/10 transition-all text-sm"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Provide detailed description of item features, materials, or warranty specs..."
                rows="4"
                className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-lg outline-none text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#ff9900] focus:ring-2 focus:ring-[#ff9900]/10 transition-all text-sm resize-y"
                required
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 bg-[#ff9900] hover:bg-[#e68a00] active:scale-[0.99] text-neutral-900 font-semibold rounded-lg shadow-md hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-150 text-sm tracking-wide"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
