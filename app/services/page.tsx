import Image from "next/image";

export default function Services() {
  const services = [
    { title: "FRANCH", img: "/franch.jpeg" },
    { title: "Traditional", img: "/traditional.jpeg" },
    { title: "Boho", img: "/boho.jpeg" },
    { title: "Modern / Minimalist", img: "/modern.jpeg" },
    { title: "Scandinavian", img: "/scandinavian.jpeg" },
    { title: "Art Deco", img: "/artdeco.jpeg" },
  ];

  return (
    <section
      className="bg-background flex items-center justify-center px-5 sm:px-8 lg:px-12"
      style={{ minHeight: "calc(100vh - 80px)", marginTop: "80px" }}
    >
      <div className="max-w-7xl w-full">
        <h2 className="text-3xl sm:text-4xl font-bold uppercase text-[#e5c88b] mb-10 sm:mb-14 text-center">
          THEMES
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 sm:gap-y-16 gap-x-8 lg:gap-x-14 place-items-center">
          {services.map((service, index) => (
            <div key={index} className="w-full max-w-sm text-center">
              {/* IMAGE */}
              <div className="w-full h-[220px] sm:h-[240px] lg:h-[260px] rounded-3xl overflow-hidden mb-4 sm:mb-5">
                <Image
                  src={service.img}
                  alt={service.title}
                  width={400}
                  height={260}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-base sm:text-lg font-semibold uppercase tracking-wide text-[#e5c88b]">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
