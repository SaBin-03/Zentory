"use client";

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function LoginPage() {
    const route = useRouter();

  const [data, setdata] = useState({
    name: "",
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
      const response = await axios.post("/api/auth/register", data);
      if (response.data.success) {
        toast.success(response.data.message, { position: "top-center" });
        setTimeout(() => {
            route.push("/clientauth/login");
        }, 1000);
      }
    } catch (error) {
      toast.error(error.response.data.message, { position: "top-center" });
    }
}
    return (
      <div className="min-h-screen flex items-center justify-center  px-4">
        <div className="w-full max-w-md  rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-2 text-shop_light_green">Welcome Back</h1>
          <p className="text-gray-500 text-center mb-6">
            Register to your account
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                onChange={inputHandler}
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={data.name}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                onChange={inputHandler}
                name="email"
                type="email"
                placeholder="Enter your email"
                value={data.email}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                onChange={inputHandler}
                name="password"
                type="password"
                placeholder="Enter your password"
                value={data.password}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-shop_btn_dark_green text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
            >
              Register
            </button>
          </form>

          <p className="text-center text-sm  mt-6">
            Already have an account?{" "}
            <Link href={"/clientauth/login"}>
            <span className="font-semibold cursor-pointer text-black">
              Sign in
            </span>
          </Link>
          </p>
        </div>
      </div>
    );
}
