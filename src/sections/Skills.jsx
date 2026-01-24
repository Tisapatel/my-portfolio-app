import React from "react"
import {
  Code2,
  FileCode2,
  Braces,
  Layers,
  Database,
  Server,
  Github,
  Palette,
  Boxes
} from "lucide-react"

const skills = [
  { name: "HTML5", Icon: FileCode2 },
  { name: "CSS3", Icon: Palette },
  { name: "JavaScript", Icon: Braces },
  { name: "Bootstrap", Icon: Layers },
  { name: "jQuery", Icon: Code2 },
  { name: "Node.js", Icon: Server },
  { name: "MongoDB", Icon: Database },
  { name: "React.js", Icon: Boxes },
  { name: "GitHub", Icon: Github },
  { name: "Tailwind CSS", Icon: Palette },
]

const Skills = () => {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">
            What I Do

          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I specialize in building modern, responsive, and scalable web
            applications using the latest frontend and backend technologies.
            My focus is on clean UI, performance, and maintainable code.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map(({ name, Icon }, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6
              flex flex-col items-center justify-center text-center
              hover:border-[var(--color-gradient)]
              hover:shadow-[0_0_25px_var(--color-gradient)]
              transition-all duration-300"
            >
              <Icon className="w-10 h-10 text-[var(--color-gradient)] mb-3" />
              <span className="text-white text-sm md:text-base font-medium tracking-wide">
                {name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills
