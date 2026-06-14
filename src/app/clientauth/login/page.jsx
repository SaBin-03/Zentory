"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import Link from "next/link";

const page = () => {
  const route = useRouter();
  const [data, setdata] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth/login", data);

      const { role } = response.data.existUser;
      if (response.data.success) {
        toast.success(response.data.message, { position: "top-center" });
        setTimeout(() => {
          if (role == "admin") {
            route.push("/admin");
          } else {
            route.push("/");
          }
        }, 1000);
      }
    } catch (error) {
      toast.error(error.response.data.message, { position: "top-center" });
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="w-full max-w-md  rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-shop_light_green mb-2">Welcome Back</h1>
        <p className="text-gray-500 text-center mb-6">Login to your account</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              onChange={inputHandler}
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              suppressHydrationWarning
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              onChange={inputHandler}
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <button
            type="submit"
            suppressHydrationWarning
            className="w-full bg-shop_btn_dark_green text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm  mt-6">
          t have an account?{" "}
          <Link href={"/clientauth/register"}>
            <span className="font-semibold cursor-pointer text-black">Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default page;
