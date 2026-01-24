import React from "react";

const educationData = [
  {
    degree: "Bachelor Degree in Software Development",
    institute: "Gujarat Technological University (GTU)",
    year: "2021 – 2024",
  },
  {
    degree: "12th",
    institute: "GHSEB",
    year: "2021",
  },
  {
    degree: "10th",
    institute: "GSEB",
    year: "2019",
  },
];

const Education = () => {
  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl w-full">

        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading text-white mb-4 sm:mb-6">
            Education
          </h2>
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-4">
            My educational journey and academic achievements.
          </p>
        </div>

        {/* EDUCATION TABLE - Desktop */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-white/20">
                <th className="text-left text-white font-heading text-xl lg:text-2xl xl:text-3xl pb-6 px-4 lg:px-6">
                  Degree
                </th>
                <th className="text-left text-white font-heading text-xl lg:text-2xl xl:text-3xl pb-6 px-4 lg:px-6">
                  Institute
                </th>
                <th className="text-right text-white font-heading text-xl lg:text-2xl xl:text-3xl pb-6 px-4 lg:px-6">
                  Year
                </th>
              </tr>
            </thead>
            <tbody>
              {educationData.map(({ degree, institute, year }, i) => (
                <tr
                  key={i}
                  className="border-b border-white/10 hover:bg-white/5 transition-all duration-300"
                >
                  <td className="text-white font-heading text-lg lg:text-xl xl:text-2xl py-8 lg:py-10 px-4 lg:px-6">
                    {degree}
                  </td>
                  <td className="text-gray-400 text-base lg:text-lg xl:text-xl py-8 lg:py-10 px-4 lg:px-6">
                    {institute}
                  </td>
                  <td className="text-gray-400 text-base lg:text-lg xl:text-xl py-8 lg:py-10 px-4 lg:px-6 text-right">
                    {year}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* EDUCATION CARDS - Mobile */}
        <div className="md:hidden space-y-6">
          {educationData.map(({ degree, institute, year }, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-white font-heading text-xl sm:text-2xl mb-3">
                {degree}
              </h3>
              <p className="text-gray-400 text-base sm:text-lg mb-2">
                {institute}
              </p>
              <p className="text-gray-500 text-sm sm:text-base">
                {year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;