import Image from "next/image";

export default function WhyUs() {
  const features = [
    { title: "No Hidden Cost and No Development Charges", icon: "/icons/money.svg" },
    { title: "Unique Design and Ideas", icon: "/icons/idea.svg" },
    { title: "100% Warranty", icon: "/icons/warranty.svg" },
    { title: "Perfect Quality Check", icon: "/icons/quality.svg" },
    { title: "ISO Approved Materials", icon: "/icons/iso.svg" },
    { title: "100% Transparency", icon: "/icons/discovery.svg" },
    { title: "Customer Satisfaction", icon: "/icons/rating.svg" },
    { title: "100% Handover On Time", icon: "/icons/time.svg" },
  ];

  return (
    <section className="relative min-h-screen bg-background px-4 sm:px-8 lg:px-16 flex items-center justify-center py-20 text-center text-white">
      {/* Background overlay */}
      <div className="relative z-10 max-w-7xl w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-[#e5c88b] uppercase mb-16">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-4">
              <div className="w-20 h-20 flex items-center justify-center mb-2">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <p className="text-sm sm:text-base md:text-base font-medium">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
