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
      <div className="max-w-6xl w-full">

        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white mb-4 sm:mb-6">
            Education
          </h2>
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-4">
            My educational journey and academic achievements.
          </p>
        </div>

        {/* EDUCATION TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-white/20">
                <th className="text-left text-white font-heading text-xl sm:text-2xl lg:text-2.5xl pb-4 sm:pb-6 px-2 sm:px-4">
                  Degree
                </th>
                <th className="text-left text-white font-heading text-xl sm:text-2xl lg:text-2.5xl pb-4 sm:pb-6 px-2 sm:px-4">
                  Institute
                </th>
                <th className="text-right text-white font-heading text-xl sm:text-2xl lg:text-2.5xl pb-4 sm:pb-6 px-2 sm:px-4">
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
                  <td className="text-white font-heading text-lg sm:text-xl lg:text-2xl py-6 sm:py-8 px-2 sm:px-4">
                    {degree}
                  </td>
                  <td className="text-gray-400 text-base sm:text-lg lg:text-xl py-6 sm:py-8 px-2 sm:px-4">
                    {institute}
                  </td>
                  <td className="text-gray-400 text-base sm:text-lg lg:text-xl py-6 sm:py-8 px-2 sm:px-4 text-right">
                    {year}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Education;