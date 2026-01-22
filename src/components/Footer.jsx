import React from "react"
import Logo from "../assets/images/logo.png"
import { Github, Linkedin, Instagram, Mail, Facebook } from "lucide-react"

const Footer = () => {
  return (
    <>
      {/* Divider */}
      <div className="max-w-[1500px] m-auto h-[1px] bg-white opacity-10"></div>

      <footer className="main-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-20">
        
        {/* LOGO */}
        <div>
          <img
            src={Logo}
            alt="Logo"
            className="h-12 md:h-16 object-contain mb-4"
          />
          <p className="text-gray-400 max-w-xs">
            Creating modern, responsive and beautiful web experiences using
            React, Tailwind & modern UI design.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h5 className="font-medium mb-5">Services</h5>
          <ul className="flex flex-col gap-2 text-base lg:text-lg text-gray-400">
            <li><a className="hover:text-[var(--grad-start)] transition" href="#">Web Development</a></li>
            <li><a className="hover:text-[var(--grad-start)] transition" href="#">Full Stack</a></li>
            <li><a className="hover:text-[var(--grad-start)] transition" href="#">UI/UX Design</a></li>
            <li><a className="hover:text-[var(--grad-start)] transition" href="#">Portfolio Websites</a></li>
          </ul>
        </div>

        {/* ACCESSIBILITY */}
        <div>
          <h5 className="font-medium mb-5">Accessibility</h5>
          <ul className="flex flex-col gap-2 text-base lg:text-lg text-gray-400">
            <li>Mon–Fri : 9:00 AM – 5:00 PM</li>
            <li>24/7 WhatsApp & Email Support</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h5 className="font-medium mb-5">Contact</h5>
          <ul className="flex flex-col gap-2 text-base lg:text-lg text-gray-400">
            <li>
              <a
                className="hover:text-[var(--grad-start)] transition"
                href="mailto:tisa1204@gmail.com"
              >
                tisa1204@gmail.com
              </a>
            </li>
            <li>
              <a
                className="hover:text-[var(--grad-start)] transition"
                href="tel:8799244003"
              >
                +91 87992 44003
              </a>
            </li>
          </ul>
        </div>

      </footer>

      {/* Divider */}
      <div className="max-w-[1500px] m-auto h-[1px] bg-white opacity-10"></div>

      {/* Bottom Bar */}
      <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-4 py-6 lg:py-8 text-center md:text-left">
        
        <div className="text-base lg:text-lg text-gray-400">
          © 2026 Tisa Patel | Frontend Developer. All Rights Reserved.
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-end">
          {[
            { Icon: Github, link: "https://github.com/yourusername" },
            { Icon: Mail, link: "mailto:tisa1204@gmail.com" },
            { Icon: Linkedin, link: "https://www.linkedin.com/in/yourusername" },
            { Icon: Facebook, link: "https://facebook.com/yourusername" },
            { Icon: Instagram, link: "https://instagram.com/yourusername" },
          ].map(({ Icon, link }, i) => (
            <a
              key={i}
              href={link}
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-xl 
              bg-white/5 border border-white/10 text-gray-300
              hover:text-[var(--grad-start)]
              hover:border-[var(--grad-start)]
              hover:shadow-[0_0_15px_var(--grad-start)]
              transition-all"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

      </div>
    </>
  )
}

export default Footer
