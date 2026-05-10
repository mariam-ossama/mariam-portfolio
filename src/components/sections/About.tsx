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
                with a strong foundation in structured problem-solving and software engineering principles. 
                My interest in full-stack development was strengthened through intensive, industry-focused training programs.
              </p>

              <p>
                I completed both the{" "}
                <span className="text-[#2a3439] font-semibold">
                  DEBI Web Development track
                </span>{" "}
                and the{" "}
                <span className="text-[#2a3439] font-semibold">
                  Route Full-Stack Diploma
                </span>
                , gaining hands-on experience with enterprise-level ASP.NET systems as well as modern JavaScript frameworks in agile environments.
              </p>

              <p>
                I enjoy solving technical challenges, especially when designing RESTful APIs or optimizing database structures for performance and scalability. 
                My goal is to build clean, reliable, and impactful digital products.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default About