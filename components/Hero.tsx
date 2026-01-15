import Image from "next/image";

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
            <a
              href="tel:6366325879"
              className="bg-foreground text-background px-6 py-3 uppercase text-sm text-center"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/917026742400"
              className="border border-foreground px-6 py-3 uppercase text-sm text-center"
            >
              WhatsApp
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
