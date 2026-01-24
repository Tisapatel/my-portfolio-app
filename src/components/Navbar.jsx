import React, { useRef, useState } from "react";
import Logo from "../assets/images/logo.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { X } from "lucide-react";

gsap.registerPlugin(useGSAP);

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const navbarRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navbar initial animation only
  useGSAP(() => {
    gsap.from(navbarRef.current, {
      opacity: 0,
      y: -100,
      duration: 0.6,
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    // Smooth scroll to section
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  };

  return (
    <>
      {/* Navbar */}
      <nav ref={navbarRef} className="fixed top-0 w-full z-50 mix-blend-difference">
        <div className="main-container py-4 flex justify-between items-center">
          {/* Logo */}
          <img
            src={Logo}
            alt="Logo"
            className="h-[80px] sm:h-[90px] md:h-[95px] lg:h-[100px] w-auto select-none mix-blend-difference"
            draggable="false"
          />

          {/* Hamburger */}
          <button
            onClick={toggleMenu}
            className="flex flex-col gap-2 cursor-pointer group relative z-50 mix-blend-difference"
            aria-label="Toggle menu"
          >
            <span className="w-10 lg:w-12 h-0.5 bg-white transition-all duration-300 group-hover:w-12"></span>
            <span className="w-10 lg:w-12 h-0.5 bg-white transition-all duration-300 group-hover:w-8 lg:group-hover:w-10"></span>
          </button>
        </div>
      </nav>

      {/* Fullscreen Menu - CSS Only Animations */}
      <div
        className={`fixed inset-0 bg-black z-[100] flex items-center justify-center transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className={`fixed top-8 right-8 lg:top-12 lg:right-12 w-12 h-12 
          flex items-center justify-center rounded-full 
          bg-white/5 border border-white/20 
          hover:bg-white/10 hover:border-white/30 
          transition-all duration-300 z-[110] ${
            isMenuOpen
              ? "scale-100 opacity-100 delay-300"
              : "scale-0 opacity-0"
          }`}
          aria-label="Close menu"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Menu Links */}
        <div className="relative z-10 text-center px-4">
          <ul className="space-y-2 lg:space-y-3">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`transition-all duration-500 ease-out ${
                  isMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: isMenuOpen ? `${index * 50 + 200}ms` : "0ms" }}
              >
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="group relative inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                  font-bold text-white 
                  hover:text-gray-400
                  transition-colors duration-300"
                >
                  {/* Number */}
                  <span className="hidden md:inline-block absolute -left-10 lg:-left-12 top-1/2 -translate-y-1/2 
                  text-sm text-gray-600 opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300">
                    0{index + 1}
                  </span>

                  {/* Link Text */}
                  <span className="relative inline-block">
                    {link.name}
                    
                    {/* Underline */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 
                    bg-white
                    group-hover:w-full transition-all duration-300"></span>
                  </span>

                  {/* Arrow */}
                  <span className="hidden md:inline-block absolute -right-8 top-1/2 -translate-y-1/2 
                  text-lg opacity-0 -translate-x-2 
                  group-hover:opacity-100 group-hover:translate-x-0 
                  transition-all duration-300">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* Social Links */}
          <div className={`mt-10 flex gap-6 justify-center transition-all duration-500 ${
            isMenuOpen
              ? "opacity-100 translate-y-0 delay-500"
              : "opacity-0 translate-y-4"
          }`}>
            <a
              href="https://github.com/Tisapatel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white text-xs lg:text-sm 
              uppercase tracking-wider transition-colors duration-300"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/tisa-patel-384b80312/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white text-xs lg:text-sm 
              uppercase tracking-wider transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/tissaa.004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white text-xs lg:text-sm 
              uppercase tracking-wider transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;