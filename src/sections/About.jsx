import React, { useRef } from "react";
import aboutImg from "../assets/images/about.jpeg"; 
import GradientButton from "../components/GradientButton";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      
      // 🖼️ Image animation - left se slide in with scale
      gsap.fromTo(
        ".about-img",
        { 
          x: -100, 
          opacity: 0,
          scale: 0.8
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-img",
            start: "top 80%",
            end: "top 40%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // 📝 Heading animation - fade in from bottom
      gsap.fromTo(
        ".about-heading",
        { 
          y: 50, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-heading",
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // 📄 Paragraph animation - stagger lines
      const aboutText = new SplitType(".about-text", { types: "lines" });
      
      gsap.fromTo(
        aboutText.lines,
        { 
          y: 30, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-text",
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none reverse"
          }
        }
      );

      return () => {
        aboutText.revert();
      };
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={aboutRef}
      className="relative z-30 min-h-screen bg-white rounded-tl-[60px] flex items-center"
    >
      <div className="main-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12">

        {/* LEFT IMAGE */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={aboutImg}
            alt="About Tisa"
            className="about-img w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] xl:w-[480px]
                       rounded-3xl shadow-xl object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="font-heading text-black">
          <h2 className="about-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About Me
          </h2>

          <p className="about-text text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-700">
            I'm Tisa Patel, a MERN Stack Developer who loves building modern,
            scalable and user-friendly web applications. I focus on clean UI,
            performance and writing maintainable code.
            From frontend experiences to backend logic, I enjoy turning ideas into real,
            usable products.    
          </p>  

          {/* <GradientButton text="Resume" link="" className="btn-light" /> */}
          
        </div>

      </div>
    </section>
  );
};

export default About;