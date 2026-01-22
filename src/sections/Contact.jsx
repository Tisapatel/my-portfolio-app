import React from "react"
import GradientButton from "../components/GradientButton"
import { Github, Linkedin, Twitter, Instagram, Mail, MapPin } from "lucide-react"

const Contact = () => {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-white text-4xl md:text-5xl font-heading mb-4">
            Let’s Work Together
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Have a project in mind? Let’s discuss how we can bring your ideas to life.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* FORM */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <div className="space-y-6">
              
              <div>
                <label className="text-gray-300 text-sm mb-1 block">Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-transparent focus:ring-2 focus:ring-[var(--grad-start)] transition"
                />
              </div>

              <div>
                <label className="text-gray-300 text-sm mb-1 block">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-transparent focus:ring-2 focus:ring-[var(--grad-end)] transition"
                />
              </div>

              <div>
                <label className="text-gray-300 text-sm mb-1 block">Message</label>
                <textarea
                  rows="5"
                  placeholder="Tell me..."
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white outline-none resize-none focus:border-transparent focus:ring-2 focus:ring-[var(--grad-start)] transition"
                />
              </div>

              <div className="pt-4">
                <GradientButton
                  text="Send Message"
                  link="#"
                  className="w-full hover:scale-105 transition-transform border border-white/50"
                />
              </div>
            </div>
          </div>

          {/* INFO */}
          <div className="flex flex-col justify-between">
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-6">
              <h2 className="text-white text-2xl font-heading">
                Let’s Connect
              </h2>

              <p className="text-gray-400">
                I’m always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out!
              </p>

              {/* Cards */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-black/40 border border-white/10 rounded-lg p-4">
                  <Mail className="w-6 h-6 text-[var(--grad-start)]" />
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">tisa1204@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-black/40 border border-white/10 rounded-lg p-4">
                  <MapPin className="w-6 h-6 text-[var(--grad-end)]" />
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Navsari, Gujarat</p>
                  </div>
                </div>
              </div>
            </div>

              <p className=" text-white-500 text-center lg:text-left">
  Connect with me
</p>
            {/* SOCIALS */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {[ 
                { Icon: Github, link: "https://github.com" },
                { Icon: Linkedin, link: "https://linkedin.com" },
                { Icon: Twitter, link: "https://twitter.com" },
                { Icon: Instagram, link: "https://instagram.com" },
              ].map(({ Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-300
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
        </div>
      </div>
    </section>
  )
}

export default Contact
