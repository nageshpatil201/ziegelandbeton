import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full fixed z-50 h-20 bg-background shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"   
            alt="Ziegel and Beton Logo"
            width={160}
            height={50}
            className="h-15 w-auto"
            priority
          />
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/work">Services</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
