import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="min-h-screen flex items-center bg-background pt-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20">

        {/* LEFT TEXT */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase text-[#e5c88b] mb-6">
            About Us
          </h2>

          <p className="text-white text-base sm:text-lg leading-relaxed mb-6">
            Ziegel and Beton, where bricks and concrete become your legacy.
            Workspaces that inspire productivity with elegant finishes.
            Interiors that reflect your style and tell your story for generations.
          </p>

          <p className="text-white text-base sm:text-lg leading-relaxed">
            We are more than builders; we are creators of complete living
            experiences. Turning your vision into reality—from structural
            foundations to bespoke interiors you can step into and feel,
            “this is home.”
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/about.svg"
            alt="About illustration"
            width={700}
            height={500}
            className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto"
            priority
          />
        </div>

      </div>
    </section>
  );
}
