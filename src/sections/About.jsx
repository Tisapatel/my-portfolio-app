import React from "react";
import aboutImg from "../assets/images/about.jpeg"; 

const About = () => {
  return (
    <section className="min-h-screen bg-white rounded-tl-[60px] flex items-center">
      <div className="main-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12">

        {/* LEFT IMAGE */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={aboutImg}
            alt="About Tisa"
            className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] xl:w-[480px]
                       rounded-3xl shadow-xl object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="font-heading text-black">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-700">
             I’m Tisa Patel, a MERN Stack Developer who loves building modern,
            scalable and user-friendly web applications. I focus on clean UI,
            performance and writing maintainable code.
            {/* <br /><br /> */}
            From frontend
            experiences to backend logic, I enjoy turning ideas into real,
            usable products.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
