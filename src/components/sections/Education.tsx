import React from 'react'

const Education = () => {
  return (
    <section className="py-24 bg-[#f0f4f7]" id="education">
      <div className="max-w-4xl mx-auto px-8">

        {/* Header */}
        <h2 className="text-3xl font-extrabold tracking-tight mb-16 text-center text-[#2a3439] font-['Inter']">
          Education
        </h2>

        <div className="relative space-y-16">

          {/* Vertical Line */}
          <div className="absolute left-1.75 md:left-1/2 md:-translate-x-1/2 h-full w-0.5 bg-[#a9b4b9]/30"></div>

          {/* DEBI */}
          <div className="relative flex flex-col md:flex-row items-start">
            
            <div className="w-full md:w-1/2 pl-8 md:pl-0 pr-0 md:pr-12 md:text-right mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-[#2a3439]">
                DEBI
              </h3>
              <p className="text-[#5654a8] font-medium">
                AI-Powered Web Applications Track
              </p>
            </div>

            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#5654a8] ring-4 ring-[#ffffff]"></div>

            <div className="w-full md:w-1/2 pl-8 md:pl-12">
              <span className="text-sm text-[#566166] block mb-2">
                Nov, 2025 - Jun, 2026
              </span>
              <p className="text-sm text-[#566166] leading-relaxed">
                Specialized intensive training in modern web standards and enterprise application architecture.
              </p>
            </div>
          </div>

          {/* Route */}
          <div className="relative flex flex-col md:flex-row items-start">
            
            <div className="w-full md:w-1/2 pl-8 md:pl-0 pr-0 md:pr-12 md:text-right mb-4 md:mb-0 order-2 md:order-1">
              <span className="text-sm text-[#566166] block mb-2">
                Mar, 2025 - Jun, 2026
              </span>
              <p className="text-sm text-[#566166] leading-relaxed">
                Full-Stack Diploma focusing on ASP.NET/Angular ecosystems.
              </p>
            </div>

            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#5654a8] ring-4 ring-[#ffffff]"></div>

            <div className="w-full md:w-1/2 pl-8 md:pl-12 order-1 md:order-2">
              <h3 className="text-xl font-bold text-[#2a3439]">
                Route IT Training
              </h3>
              <p className="text-[#5654a8] font-medium">
                Full-Stack Diploma
              </p>
            </div>
          </div>

          {/* Cairo University */}
          <div className="relative flex flex-col md:flex-row items-start">
            
            <div className="w-full md:w-1/2 pl-8 md:pl-0 pr-0 md:pr-12 md:text-right mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-[#2a3439]">
                Cairo University
              </h3>
              <p className="text-[#5654a8] font-medium">
                Bachelor's Degree, Faculty of Computers and Artificial Intelligence
              </p>
            </div>

            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#5654a8] ring-4 ring-[#ffffff]"></div>

            <div className="w-full md:w-1/2 pl-8 md:pl-12">
              <span className="text-sm text-[#566166] block mb-2">
                2020 - 2024
              </span>
              <div className="text-sm text-[#566166] leading-relaxed">
  <p>Information Systems Department</p>

  <p>
    <strong>GPA:</strong> 3.07
  </p>

  <p>
    <strong>Grade:</strong> Very Good (B)
  </p>
</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Education