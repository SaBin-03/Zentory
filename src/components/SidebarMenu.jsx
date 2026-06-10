import { X } from "lucide-react";
import React from "react";
import Logo from "./Logo";
import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarMenu = ({ isOpen, onClose }) => {

    const pathname = usePathname();

  return (
    <div
      onClick={onClose}
      className={`fixed inset-y-0 left-0 bg-black/50 shadow-xl h-screen z-50 w-full text-white/60 ${isOpen ? "translate-x-0" : "-translate-x-full"} hoverEffect`}
    >
      <div className="h-screen w-89 bg-black">
        <div className="flex items-center justify-around w-full  p-2 ">
          <Logo />
          <X
            onClick={onClose}
            className="text-white cursor-pointer"
            size={"30px"}
          />
        </div>
        <div className="flex space-y-0.5 tracking-wider flex-col mt-5 ">
          {headerData.map((item) => (
            <Link
              className={`hover:text-white  text-3xl font-bold hoverEffect ${pathname === item.href && "text-white"}`}
              key={item.title}
              href={item.href}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
