const Experience = () => {
    return (
        <section className="py-24 bg-[#f0f4f7]" id="education">
            <div className="max-w-4xl mx-auto px-8">

                {/* Header */}
                <h2 className="text-3xl font-extrabold tracking-tight mb-16 text-center text-[#2a3439] font-['Inter']">
                    Experience
                </h2>

                <div className="relative space-y-16">

                    {/* Vertical Line */}
                    <div className="absolute left-1.75 md:left-1/2 md:-translate-x-1/2 h-full w-0.5 bg-[#a9b4b9]/30"></div>

                    {/* ITechPro-eg*/}
                    <div className="relative flex flex-col md:flex-row items-start">

                        <div className="w-full md:w-1/2 pl-8 md:pl-0 pr-0 md:pr-12 md:text-right mb-4 md:mb-0">
                            <h3 className="text-xl font-bold text-[#2a3439]">
                                ITechPro-eg
                            </h3>
                            <p className="text-[#5654a8] font-medium">
                                Intern .NET Developer
                            </p>
                        </div>

                        <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#5654a8] ring-4 ring-[#ffffff]"></div>

                        <div className="w-full md:w-1/2 pl-8 md:pl-12">
                            <span className="text-sm text-[#566166] block mb-2">
                                Sep, 2026 - Nov, 2026
                            </span>
                            <p className="text-sm text-[#566166] leading-relaxed">
                                Worked on developing and enhancing backend functionalities using C# and ASP.NET Core. Contributed to a real-world tourism management project, implementing backend features, handling business logic, and applying code review feedback while collaborating with the development team.
                            </p>
                        </div>
                    </div>

                    {/* DEBI */}
                    <div className="relative flex flex-col md:flex-row items-start">

                        <div className="w-full md:w-1/2 pl-8 md:pl-0 pr-0 md:pr-12 md:text-right mb-4 md:mb-0">
                            <h3 className="text-xl font-bold text-[#2a3439]">
                                DEBI
                            </h3>
                            <p className="text-[#5654a8] font-medium">
                                AI-Powered Web Applications Development Track
                            </p>
                        </div>

                        <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#5654a8] ring-4 ring-[#ffffff]"></div>

                        <div className="w-full md:w-1/2 pl-8 md:pl-12">
                            <span className="text-sm text-[#566166] block mb-2">
                                Nov, 2025 - Jul, 2026
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
                                Mar, 2025 - Jul, 2026
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
                </div>
            </div>
        </section>
    )
}
export default Experience;