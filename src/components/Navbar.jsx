import Link from "next/link";
import React from "react";
import HeaderMenu from "./HeaderMenu";
import Searchbar from "./Searchbar";
import Cart from "./Cart";
import FavButton from "./FavButton";
import Logo from "./Logo";
import MobileLogoMenu from "./MobileLogoMenu";

const Navbar = () => {
  return (
    <header className="max-w-screen px-4 py-2  bg-white flex items-center justify-around ">
      {/* Logo */}
      <div className="flex justify-start gap-2.5 md:gap-0 items-center">
        <MobileLogoMenu />
        <Logo />
      </div>

      {/* Navbutton  */}

      <HeaderMenu />

      {/* Navadmin */}

      <div className="flex items-center gap-5 justify-end">
        <Searchbar />
        <Cart />
        <FavButton />
      </div>
    </header>
  );
};

export default Navbar;
