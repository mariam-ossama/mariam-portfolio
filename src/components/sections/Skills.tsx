import React from "react";
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaLightbulb,
} from "react-icons/fa";

const skillCategories = [
  {
    title: "Languages",
    icon: <FaCode />,
    skills: ["C#", "Java" ,"JavaScript", "TypeScript", "Python", "Golang","C++"],
  },
  {
    title: "Frontend",
    icon: <FaLaptopCode />,
    skills: [
      "HTML",
      "CSS",
      "CSS Animation",
      "Bootstrap",
      "TailwindCSS",
      "JQuery",
      "SASS",
      "Angular",
      "React.js"
    ],
  },
  {
    title: "Backend",
    icon: <FaServer />,
    skills: [
      "ASP.NET",
      "Node.js / Express",
      "Django",
      "LINQ",
      "EF Core",
      "ASP.NET MVC",
      "ASP.NET WebAPI",
      "API Development",
      "RESTful Services",
      "JWT Authentication",
    ],
  },
  {
    title: "Databases",
    icon: <FaDatabase />,
    skills: ["SQL Server","mySQL","Redis","MongoDB", "PostgreSQL"],
  },
  {
    title: "Tools",
    icon: <FaTools />,
    skills: ["Git / GitHub", "Postman","SwaggerUI"],
  },
  {
    title: "Concepts",
    icon: <FaLightbulb />,
    skills: ["OOP", "Data Structures","SOLID Principles", "Design Patterns"],
  },
];

const Skills = () => {
  return (
    <section className="py-24 bg-[#f7f9fb]" id="skills">
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-[#2a3439] font-['Inter'] mb-4">
            Skills & Technologies
          </h2>

          <p className="text-[#566166] max-w-2xl mx-auto">
            A modern toolkit focused on scalable backend systems,
            interactive frontend experiences, and clean software architecture.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group relative overflow-hidden bg-white rounded-3xl p-7 border border-[#a9b4b9]/15 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >

              {/* Gradient Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-br from-[#5654a8]/5 via-transparent to-[#5654a8]/10"></div>

              {/* Icon */}
              <div className="relative z-10 w-14 h-14 rounded-2xl bg-[#5654a8]/10 text-[#5654a8] flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-xl font-bold text-[#2a3439] mb-5">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="relative z-10 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-[#f3f5f7] text-sm text-[#2a3439] border border-[#a9b4b9]/10 hover:bg-[#5654a8] hover:text-white transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;