import React from 'react'

const About = () => {
  return (
    <section className="bg-[#f0f4f7] py-24" id="about">
      <div className="max-w-7xl mx-auto px-8">

        <div className="flex flex-col md:flex-row gap-16 items-start">

          {/* Left */}
          <div className="md:w-1/3">
            <h2 className="text-4xl font-extrabold tracking-tight text-[#2a3439] font-['Inter']">
              About Me
            </h2>
            <div className="h-1 w-16 bg-[#5654a8] mt-4"></div>
          </div>

          {/* Right */}
          <div className="md:w-2/3">
            <div className="space-y-6 text-lg text-[#566166] leading-relaxed">

              <p>
                A 2024 graduate of{" "}
                <span className="text-[#2a3439] font-semibold">
                  Cairo University
                </span>{" "}
                with a passion for structured problem-solving. My journey into
                full-stack development was solidified through high-intensity
                programs designed for the modern industry.
              </p>

              <p>
                I completed the{" "}
                <span className="text-[#2a3439] font-semibold">
                  DEBI Web Development track
                </span>{" "}
                and the{" "}
                <span className="text-[#2a3439] font-semibold">
                  Route Full-Stack Diploma
                </span>
                , mastering the intricacies of both enterprise-level .NET
                architectures and the agile world of JavaScript frameworks.
              </p>

              <p>
                I thrive in environments that challenge my technical logic,
                specifically when designing RESTful APIs or optimizing complex
                database schemas. My goal is to craft digital experiences that
                are as clean as they are powerful.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default About