import Button, { ButtonSecondary } from "../ui/Button";

export default function Header() {
  return (
    <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24" id="header">
      
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

        {/* LEFT */}
        <div className="flex-1 space-y-6 md:space-y-8 text-center md:text-left mt-3">

          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#C3C0FF] text-[#4a479b] text-[10px] sm:text-xs font-bold tracking-widest uppercase">
            Full-Stack Developer
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#2a3439] leading-tight">
            Engineering{" "}
            <span className="text-[#4a479b] italic">scalable</span> systems
            through precision code.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#566166] leading-relaxed max-w-xl mx-auto md:mx-0">
            Bridging the gap between robust backend architecture and fluid user
            experiences. I build digital infrastructures that scale with human
            needs.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button text="View Featured Projects" onClick={() => document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth" })}/>
            {/* <ButtonSecondary text="Let's Talk" onClick={() => alert("Let's Talk")} /> */}
            <ButtonSecondary
  text="Email Me"
  onClick={() =>
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=mariamosama772@gmail.com",
      "_blank"
    )
  }
/>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 w-full max-w-md md:max-w-none relative">
          <div className="aspect-square bg-slate-200 rounded-2xl overflow-hidden shadow-2xl relative border border-slate-300/20">

            <div className="absolute inset-0 p-4 sm:p-6 md:p-8 font-mono text-[10px] sm:text-xs md:text-sm leading-relaxed overflow-hidden opacity-40">

              <span className="text-indigo-600">class</span>{" "}
              <span className="text-slate-800 inline">Architecture</span> {"{"}
              <br />

              &nbsp;&nbsp;
              <span className="text-indigo-600">constructor</span>(stack) {"{"}
              <br />

              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-indigo-600">this</span>.vision ={" "}
              <span className="text-purple-500">"precision"</span>;
              <br />

              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-indigo-600">this</span>.output = stack.map(layer =&gt; layer.optimize());
              <br />

              &nbsp;&nbsp;{"}"}
              <br />
              <br />

              &nbsp;&nbsp;
              <span className="text-indigo-600">deploy</span>() {"{"}
              <br />

              &nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-indigo-600">return</span>{" "}
              <span className="text-purple-500">"Scaling to production..."</span>;
              <br />

              &nbsp;&nbsp;{"}"}
              <br />
              {"}"}
              <br />
              <br />

              <span className="text-slate-500">
                {"// Continuous integration initialized"}
              </span>
              <br />

              <span className="text-slate-500">
                {"// Load balancing: 100% efficiency"}
              </span>
            </div>

            <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/10 via-transparent to-transparent"></div>

            <img
              className="w-full h-full object-cover mix-blend-overlay opacity-30"
              alt="abstract architectural blueprint"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_XvGFhly1BXbtPUuZO3SSm-9vrxXzFmSdDqYiZBp7PIUSs_6riCmTtyCQXYHoz44Ga_QMFW6UYaqSvLX_VO7Zrz1dlGeChHuzCHdm0tlthtOarO4cjt-N1zVGGjoVzpQ8rbkNiVR7MlXpuPGDg21L3BaJhWUcJpvZUqUIa99jYcQpLqgEgzhQmwpDm-QQjon6dqJrbnok6rh8TYE5UPEhZRIb35yj0g7TcxFc8XsfSeFulA2Kiq2eURcmVmaf8MofBODVAsvBV0c"
            />
          </div>
        </div>

      </div>
    </header>
  );
}