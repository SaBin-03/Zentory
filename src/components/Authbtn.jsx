"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Authbtn = () => {
  const [istoken, setistoken] = useState(false);
  const route = useRouter();
useEffect(() => {
  const getData = async () => {
    try {
      const response = await axios.get("/api/auth/me");

      if (response.data.success) {
        setistoken(true);
      }
    } catch (error) {
      setistoken(false);
    }
  };

  getData();
}, []);

  const logoutHandler = async () => {
    try {
      const response = await axios.post("/api/auth/logout", {});
      if (response.data.success) {
        setTimeout(() => {
          route.push("/clientauth/login");
        }, 1000);
        toast.success(response.data.message, { position: "top-center" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Link href={"/clientauth/register"}></Link>
      {istoken ? (
        <button
          onClick={logoutHandler}
          className="bg-shop_light_green px-3 py-1 text-white rounded-sm cursor-pointer"
        >
          Logout
        </button>
      ) : (
        <Link href={"/clientauth/register"}>
          <button className="bg-shop_light_green px-3 py-1 text-white rounded-sm cursor-pointer">
            Register
          </button>
        </Link>
      )}
    </div>
  );
};

export default Authbtn;
