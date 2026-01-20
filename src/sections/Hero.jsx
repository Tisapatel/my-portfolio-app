import React from "react";
import GradientButton from "../components/GradientButton";
import heroCircle from "../assets/images/circle.png";

const Hero = () => {
  return (
    <section className="min-h-screen pt-[120px] relative overflow-hidden">
      <div className="main-container h-full flex flex-col lg:flex-row items-center justify-center gap-12">

        {/* LEFT CONTENT – BIGGER & LOWER */}
        <div className="w-full lg:w-[60%] translate-y-6">
          <h1 className="uppercase font-heading font-semibold text-xl lg:text-2xl mb-5">
            Tisa Patel
          </h1>

          <h3
            className="
              font-heading font-bold leading-[1.1] tracking-tight
              text-5xl sm:text-6xl md:text-7xl lg:text-[5.8vw]
              mb-6
            "
          >
            MERN Stack <br />
            & Software <br />
            <span className="text-stroke">Developer</span>
          </h3>

          {/* <p className="max-w-xl text-gray-400 text-lg mb-10">
            I build modern, scalable and user-friendly web applications using
            React, Node.js, MongoDB and clean UI principles.
          </p> */}

          <GradientButton
            text="Let's Talk"
            link="mailto:tisapatel1204@gmail.com"
            className="btn-light"
          />
        </div>

        {/* RIGHT IMAGE – SPACE FIXED */}
        <div className="w-full lg:w-[40%] relative flex justify-center lg:justify-end">
          <div className="relative -right-[8%]">

            {/* Gradient Glow */}
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-30 -z-10"
              style={{ background: "var(--color-gradient)" }}
            ></div>

            {/* Circle Image */}
            <img
              src={heroCircle}
              alt="Hero Graphic"
              className="h-[48vh] lg:h-[78vh] animate-spin-slow"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
