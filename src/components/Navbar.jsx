import React,{ useRef } from "react";
import Logo from "../assets/images/logo.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"


gsap.registerPlugin(useGSAP);
 


const Navbar = () => {

   const navbarRef = useRef(null)

  //  gsap hooks

  useGSAP(()=>{
     gsap.from(navbarRef.current, {
       opacity : 0,
       y: -100,
       duration : 0.6
     })
  }
);



  return (
    <nav ref={navbarRef} className="fixed top-0 w-full mix-blend-difference z-30">
      <div className="main-container py-4 flex justify-between items-center">

        {/* Logo */}
        <img
          src={Logo}
          alt="Logo"
          className="h-[80px] sm:h-[90px] md:h-[95px] lg:h-[100px] w-auto select-none"
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