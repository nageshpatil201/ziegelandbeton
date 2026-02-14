import Image from "next/image";
import { FaPhone, FaWhatsapp } from "react-icons/fa";


export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* HERO CONTENT */}
      <div className="max-w-7xl mx-auto px-6 pt-24 md:pt-36 z-50">
        <div className="flex flex-col items-start text-left">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase leading-tight">
            Transforming Spaces <br className="hidden sm:block" /> Into Beautiful Art
          </h1>

          <p className="mt-4 max-w-xl text-base sm:text-lg leading-relaxed">
            Construction, Interior & Architecture solutions crafted with
            precision, quality, and timeless design.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">

            {/* Call Now */}
            <a
              href="tel:6366325879"
              className="
                flex items-center justify-center gap-2
                bg-foreground text-background
                px-6 py-3 uppercase text-sm font-medium
                transition-all duration-300
                hover:opacity-90 hover:scale-[1.02]
              "
            >
              <FaPhone className="text-base" />
              <span>Call Now</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/917026742400"
              target="_blank"
              rel="noopener noreferrer"
              className="
              flex items-center justify-center gap-2
              border border-foreground text-foreground
              px-6 py-3 uppercase text-sm font-medium
              transition-all duration-300
              hover:bg-foreground hover:text-background hover:scale-[1.02]"
            >
              <FaWhatsapp className="text-base" />
              <span>WhatsApp</span>
            </a>

          </div>

        </div>
      </div>

      {/* SVG DIVIDER – hidden on small screens */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <Image
          src="/building.svg"
          alt="Section divider"
          width={1920}
          height={200}
          className="w-full h-56 object-cover"
          priority
        />
      </div>
    </section>
  );
}
