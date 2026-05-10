import React from 'react'

const projects = [
  {
    title: "AI CV Builder Platform",
    desc: "AI-powered resume analysis platform that evaluates CVs against job descriptions using intelligent matching and automated insights. Built with a scalable full-stack architecture integrating authentication, API-driven workflows, and modern responsive UI.",
    img: "https://placehold.net/600x400.png",
    technologies: ["React", "Next" ,"TypeScript", "TailwindCSS","API Integration", "Nodejs", "Express","PostgreSQL"],
    featured: true,
    liveDemo: undefined,
    sourceCode: undefined,
    inProgress: true
  },
  {
    title: "E-Commerce Web Application",
    desc: "Fully responsive E-Commerce platform built with Angular featuring authentication, product filtering, cart management, wishlist functionality, and responsive UI.",
    img: "/images/E-Commerce-Angular.png",
    technologies: ["Angular", "TypeScript", "RxJS", "TailwindCSS","API Integration"],
    featured: true,
    liveDemo: "https://e-commerce-two-alpha-42.vercel.app/",
    sourceCode: "https://github.com/mariam-ossama/e-commerce",
  },
  {
    title: "Trendify",
    desc: "Modern responsive landing page and UI system built with Tailwind CSS featuring reusable components, smooth animations, and mobile-first responsive design.",
    img: "/images/Trendify.png",
    technologies: ["HTML","CSS","JavaScript", "TailwindCSS"],
    featured: false,
    liveDemo: "https://​trendify-tailwindcss.vercel.app",
    sourceCode: "https://github.com/mariam-ossama/trendify-tailwindcss.git⁠",
  },
  {
    title: "Games Website",
    desc: "Interactive game discovery platform integrated with external APIs, featuring dynamic game browsing, category filtering, and responsive user experience.",
    img: "/images/Games.png",
    technologies: ["HTML","CSS","JavaScript", "API Integration", "Bootstrap"],
    featured: false,
    liveDemo: "https://mariam-ossama.github.io/Game-Over/",
    sourceCode: "https://github.com/mariam-ossama/Game-Over",
  },
  {
    title: "Weather Forcast Website",
    desc: "Designed and developed a responsive weather forecast website that integrates external weather APIs to provide real-time temperature, humidity, and forecast insights with an intuitive and interactive user experience.",
    img: "/images/WeaherForcast.png",
    technologies: ["HTML","CSS","JavaScript", "API Integration", "Bootstrap"],
    featured: false,
    liveDemo: "https://mariam-ossama.github.io/WeatherForecast/",
    sourceCode: "https://github.com/mariam-ossama/WeatherForecast.git",
  },
  {
    title: "Landing Page (DENIELS)",
    desc: "Responsive personal portfolio landing page with smooth scrolling navigation, animated sections, and modern Bootstrap-based UI implementation.",
    img: "/images/Daniels.png",
    technologies: ["HTML","CSS","JavaScript", "Bootstrap"],
    featured: false,
    liveDemo: "https://mariam-ossama.github.io/Landing-Page/",
sourceCode: "https://github.com/mariam-ossama/Landing-Page",
  },
  {
    title: "CareerFusion (Graduation Project)",
    desc: "Full-stack AI-driven recruitment platform connecting job seekers and recruiters through intelligent resume matching, analytics dashboards, and cross-platform architecture integrating ASP.NET Core, React, Flask, and Flutter.",
    img: "https://placehold.net/600x400.png",
    technologies: ["ASP.NET Core", "SQL Server" ,"React", "Flask", "Flutter"],
    featured: false,
    liveDemo: undefined,
    sourceCode: undefined,
    inProgress: false,
  },
]

const Projects = () => {
  const featuredProjects = projects.filter(
  (project) => project.featured
)

const otherProjects = projects.filter(
  (project) => !project.featured
)

  return (
    <section className="py-24 max-w-7xl mx-auto px-8" id="projects">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight mb-4 text-[#2a3439] font-['Inter']">
            Projects
          </h2>

          <p className="text-[#566166]">
            A collection of academic milestones and real-world explorations.
          </p>
        </div>

        {/* Navigation Tabs - Hidden For Now */}
        {/**
        <div className="flex gap-4 p-1 bg-[#e8eff3] rounded-lg">
          <button className="px-6 py-2 bg-[#ffffff] text-[#5654a8] rounded-md font-medium text-sm shadow-sm">
            All
          </button>

          <button className="px-6 py-2 text-[#566166] hover:text-[#2a3439] rounded-md font-medium text-sm">
            Self-Study
          </button>

          <button className="px-6 py-2 text-[#566166] hover:text-[#2a3439] rounded-md font-medium text-sm">
            Freelance
          </button>
        </div>
        */}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-12 gap-6">

        {/* Featured Project */}
        {featuredProjects.map((project, i) => (
          <div key={i} 
               className="md:col-span-6 bg-[#ffffff] rounded-3xl overflow-hidden border border-[#a9b4b9]/15 group transition-all duration-500 hover:-translate-y-3 shadow-sm hover:shadow-xl">
            <div className="h-64 overflow-hidden relative">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-[#5654a8] text-[#faf6ff] text-xs font-bold rounded-full uppercase">
                  Featured Project
                </span>
              </div>
              {project.inProgress && (
  <div className="absolute top-4 right-4">
    <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full">
      In Progress
    </span>
  </div>
)}
            </div>

            <div className="p-8">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-4">
                <h3 className="text-2xl font-bold text-[#2a3439]">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-[#e4e1e6] text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-[#566166] mb-6 leading-relaxed">
                {project.desc}
              </p>

              <div className="flex gap-4">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5654a8] font-bold text-sm hover:underline"
                >
                  🔗 Live Demo
                </a>

                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#566166] font-bold text-sm hover:text-[#2a3439]"
                >
                  💻 Source Code
                </a>
              </div>
            </div>
          </div>
         )
        )}

        {/* Project Cards */}
        {otherProjects.map((project, i) => (
          <div
            key={i}
            className="md:col-span-4 bg-[#ffffff] rounded-3xl overflow-hidden border border-[#a9b4b9]/15 flex flex-col group transition-all duration-500 hover:-translate-y-3 shadow-sm hover:shadow-xl"
          >
            <div className="h-48 overflow-hidden">
              
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-[#e4e1e6] text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-2 text-[#2a3439]">
                {project.title}
              </h3>

              <p className="text-sm text-[#566166] flex-1 mb-6">
                {project.desc}
              </p>

              {project.inProgress && (
  <span className="text-sm font-medium text-[#a87b00]">
    🚧 In Progress
  </span>
)}

{(project.liveDemo || project.sourceCode) && (
  <div className="flex gap-4 mt-auto">

    {project.liveDemo && (
      <a
        href={project.liveDemo}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#5654a8] font-bold text-sm hover:underline"
      >
        🔗 Live Demo
      </a>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#566166] font-bold text-sm hover:text-[#2a3439]"
      >
        💻 Source Code
      </a>
    )}

  </div>
)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects