import Image from "next/image";

export default function OurProcess() {
  const steps = [
    { title: "MEET THE ENGINEERS", icon: "/icons/shake-hands.png" },
    { title: "SIGN UP WITH US", icon: "/icons/signup.png" },
    { title: "FINALISING YOUR DESIGN", icon: "/icons/finalize.png" },
    { title: "100% SATISFACTION PROJECT EXECUTION", icon: "/icons/satisfaction.png" },
  ];

  return (
    <section className="relative bg-background min-h-screen flex items-center px-6">
      <div className="w-full text-[#e5c88b]">

        {/* CONTENT WRAPPER */}
        <div className="max-w-7xl mx-auto text-center">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold tracking-widest uppercase mb-8">
            Our Process
          </h2>

          {/* Description */}
          <p className="max-w-5xl mx-auto text-sm md:text-base leading-relaxed uppercase tracking-wide mb-20">
            At Ziegel and Beton, we combine the strength of construction with the artistry of
            interior design, offering premium bricks, concrete solutions, and carefully curated
            finishes. We are a partner who understands both solid foundations and the refined
            details that make a space feel alive. Whether building walls that last for generations
            or crafting interiors that inspire daily, we bring your ideas to life.
          </p>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 items-start">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center">

                {/* Icon */}
                <div className="w-30 h-30 mb-6 relative">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Line */}
                {index < steps.length - 1 && (
                  <span className="hidden md:block absolute top-15 -right-24 w-40 h-px bg-[#e5c88b]" />
                )}

                {/* Text */}
                <p className="text-xs md:text-sm font-semibold tracking-wide uppercase max-w-[180px] mt-4">
                  {step.title}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
