import React from "react";
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="main-container py-4 flex justify-between items-center">

        {/* Logo */}
        <img
          src={Logo}
          alt="Logo"
          className="h-[64px] sm:h-[72px] lg:h-[56px] w-auto select-none"
          draggable="false"
        />

        {/* Hamburger */}
        <div className="flex flex-col gap-2 cursor-pointer">
          <span className="w-10 lg:w-12 h-0.5 bg-white"></span>
          <span className="w-10 lg:w-12 h-0.5 bg-white"></span>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
