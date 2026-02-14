import Hero from "@/components/Hero";
import AboutUs from "./about/page";
import Services from "./services/page";
import WhyUs from "./whyus/page";
import OurProcess from "./process/page";
import ContactUs from "./contact/page";
import Company from "./company/page";


export default function Home() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <Hero />
      <AboutUs />
      <Services />
      <WhyUs />
      <OurProcess/>
      <ContactUs/>
      <Company/>
    </main>
  );
}
