import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

const stacks = [
  {
    title: "Enterprise Core",
    icon: faBuilding,
    description:
      "Focused on scalable enterprise-grade backend systems and structured frontend architecture using Microsoft technologies.",
    technologies: [
      "ASP.NET Core",
      "Angular",
      "Entity Framework",
      "SQL Server",
    ],
    dark: true,
  },
  {
    title: "Agile Modern",
    icon: faPeopleGroup,
    description:
      "Modern JavaScript ecosystem emphasizing fast development cycles, responsive UI, and API-driven applications.",
    technologies: ["Node.js", "React.js", "Express", "MongoDB"],
    dark: false,
  },
];

const TechStacks = () => {
  return (
    <section
      className="py-24 bg-[#f7f9fb] overflow-hidden"
      id="tech-stack"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold tracking-tight mb-5 text-[#2a3439] font-['Inter']">
            Core Ecosystems
          </h2>

          <p className="text-[#566166] max-w-2xl mx-auto text-lg leading-relaxed">
            Building scalable applications across enterprise-grade architectures
            and modern agile web ecosystems.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-10">

          {stacks.map((stack) => (
            <div
              key={stack.title}
              className={`group relative overflow-hidden rounded-3xl p-10 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl border ${
                stack.dark
                  ? "bg-[#5654a8] text-white border-[#5654a8]"
                  : "bg-white text-[#2a3439] border-[#dfe5ea]"
              }`}
            >

              {/* Background Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                <div
                  className={`absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl ${
                    stack.dark
                      ? "bg-white/10"
                      : "bg-[#5654a8]/10"
                  }`}
                ></div>
              </div>

              {/* Content */}
              <div className="relative z-0">

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-8 transition-transform duration-300 group-hover:scale-110 ${
                    stack.dark
                      ? "bg-white text-[#5654a8]"
                      : "bg-[#5654a8]/10 text-[#5654a8]"
                  }`}
                >
                  <FontAwesomeIcon icon={stack.icon} />
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold mb-4">
                  {stack.title}
                </h3>

                {/* Description */}
                <p
                  className={`leading-relaxed mb-8 text-base ${
                    stack.dark
                      ? "text-white/80"
                      : "text-[#566166]"
                  }`}
                >
                  {stack.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-3">
                  {stack.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                        stack.dark
                          ? "bg-white/15 text-white backdrop-blur-sm hover:bg-white hover:text-[#5654a8]"
                          : "bg-[#f3f5f7] text-[#2a3439] hover:bg-[#5654a8] hover:text-white"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStacks;