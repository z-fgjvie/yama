import { navLinks } from "@/data/navLinks";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="py-4 px-2">
      <div className="max-w-300 mx-auto flex items-center justify-between">
        <div>
          <Image src="/logo-yamaha.webp" width={110} height={110} alt="logo" />
        </div>

        <div className="flex items-center gap-14">
          <ul className="md:flex items-center gap-7  hidden">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="barlow-medium text-[1.0625rem] text-[#1B2238] relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#E0142B] after:bottom-0 after:left-0 after:scale-x-0 after:top-7 hover:after:scale-x-100 after:origin-center after:transition-all after:duration-200"
              >
                {link.name}
              </Link>
            ))}
          </ul>

          <a
            href="#"
            className="inline-block bg-[#E0142B] hover:bg-[#b70d21] transition-all px-5 py-2.25 barlow-medium  text-white [clip-path:polygon(13px_0,100%_0,calc(100%-12px)_100%,0_100%)]"
          >
            Llámanos
          </a>
        </div>
      </div>
    </header>
  );
}
