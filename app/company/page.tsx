import Image from "next/image";
import { FaInstagram, FaFacebookF, FaLinkedinIn,FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function CompanyPage() {
    return (
        <section className="min-h-screen bg-[#5a4f49] text-[#e5c88b] flex items-center justify-center px-6">
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT SIDE - Branding */}
                <div className="text-center md:text-left space-y-6">

                    <div className="flex items-center justify-center md:justify-start">
                        <Image
                            src="/logo/zb-logo.jpg"   // put your image in /public/logo/
                            alt="ZB Logo"
                            width={380}
                            height={320}
                            priority
                            className="object-contain"
                        />
                    </div>
                    {/* Company Name */}
                    <h2 className="text-2xl tracking-[0.4em] uppercase">
                        Ziegel and Beton
                    </h2>

                    {/* Services */}
                    <p className="text-lg tracking-[0.3em] uppercase mt-4">
                        Construction | Interior | Architecture
                    </p>
                </div>

                {/* RIGHT SIDE - Company Details */}
                <div className="space-y-8 text-center md:text-left">

                    <div>
                        <h3 className="text-3xl font-semibold uppercase">
                            Ziegel and Beton
                        </h3>
                        <p className="mt-2 text-lg">
                            Premium Construction & Interior Design Company
                        </p>
                    </div>

                    {/* Contact Info */}
                   <div className="space-y-4 text-sm sm:text-base md:text-lg">

                        <div className="flex items-center gap-3">
                            <FaPhone className="text-[#e5c88b]" />
                            <span>6366325879</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaWhatsapp className="text-[#e5c88b]" />
                            <span>7026742400</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-[#e5c88b]"><FaEnvelope/></span>
                            <a
                                href="mailto:ziegelandbeton@gmail.com"
                                className="hover:underline transition-colors"
                            >
                                ziegelandbeton@gmail.com
                            </a>
                        </div>

                    </div>


                    {/* Social Media */}
                    <div className="py-8 border-t border-[#e5c88b]/30 text-center md:text-left">
                        <p className="uppercase tracking-widest text-sm mb-4">
                            Follow Us
                        </p>

                        <div className="flex justify-center md:justify-start gap-6 text-2xl">
                            <a
                                href="https://www.instagram.com/ziegelandbeton"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-all hover:text-white hover:scale-110"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="https://www.facebook.com/ziegelandbeton"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-all hover:text-white hover:scale-110"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="https://www.linkedin.com/company/ziegelandbeton"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-all hover:text-white hover:scale-110"
                            >
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="absolute bottom-6 left-0 w-full text-center text-sm tracking-wider text-[#e5c88b]/70">
                        © {new Date().getFullYear()} Ziegel and Beton. All rights reserved.
                    </div>

                </div>
            </div>
        </section>
    );
}
