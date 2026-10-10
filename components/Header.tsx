"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Item = { nombre: string; href: string; imagen: string };
type NavLink = { id: number; name: string; href: string; menu?: Item[] };

const navLinks: NavLink[] = [
  {
    id: 1,
    name: "Motos",
    href: "#motos",
    menu: [
      {
        nombre: "Scooters",
        href: "/motos/scooters",
        imagen: "/scooter.webp",
      },
      {
        nombre: "Trabajo",
        href: "/motos/trabajo",
        imagen: "/trabajo.webp",
      },
      { nombre: "Street", href: "/motos/street", imagen: "/street.webp" },
      {
        nombre: "Deportivas",
        href: "/motos/deportivas",
        imagen: "/deportiva.webp",
      },
      {
        nombre: "Super deportivas",
        href: "/motos/super-deportivas",
        imagen: "/super-deportiva.webp",
      },
      {
        nombre: "Doble propósito",
        href: "/motos/doble-proposito",
        imagen: "/doble-proposito.webp",
      },
      {
        nombre: "Off-Road",
        href: "/motos/off-road",
        imagen: "/off-road.webp",
      },

      {
        nombre: "Nuevos lanzamientos",
        href: "/motos/nuevos-lanzamientos",
        imagen: "/nuevos-lanzamientos.png",
      },
    ],
  },
  {
    id: 2,
    name: "ATV's",
    href: "/atvs",
    menu: [
      {
        nombre: "Utilitarios",
        href: "/atvs/utilitarios",
        imagen: "/utilitarios.png",
      },
      {
        nombre: "Deportivos",
        href: "/atvs/deportivos",
        imagen: "/deportivos.png",
      },
    ],
  },
  {
    id: 4,
    name: "Servicio técnico",
    href: "https://www.yamaha-motor.com.mx/servicio-tecnico/preguntas-frecuentes",
  },
  {
    id: 5,
    name: "Distribuidores",
    href: "https://www.yamaha-motor.com.mx/distribuidores",
  },
];

export default function Header() {
  const [abierto, setAbierto] = useState<number | null>(null);

  useEffect(() => {
    const cerrar = (e: KeyboardEvent) => e.key === "Escape" && setAbierto(null);
    window.addEventListener("keydown", cerrar);
    return () => window.removeEventListener("keydown", cerrar);
  }, []);

  return (
    <header
      className="relative z-50 bg-[#F8FAFD] px-2 py-4 shadow-[0_1px_0_#DCE3F0] sticky top-0"
      onMouseLeave={() => setAbierto(null)}
    >
      <div className="max-w-300 mx-auto flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo-yamaha.webp"
            width={140}
            height={140}
            alt="Yamaha"
          />
        </Link>

        <div className="flex items-center gap-10">
          <ul className="hidden items-center gap-3 md:flex">
            {navLinks.map((link) => {
              const activo = abierto === link.id;
              return (
                <li
                  key={link.id}
                  onMouseEnter={() => setAbierto(link.menu ? link.id : null)}
                >
                  <Link
                    href={link.href}
                    aria-haspopup={link.menu ? "true" : undefined}
                    aria-expanded={link.menu ? activo : undefined}
                    onFocus={() => setAbierto(link.menu ? link.id : null)}
                    className={`barlow-medium relative block px-5 py-2.5 text-[1.0625rem] uppercase transition-colors duration-200 ${
                      activo
                        ? "bg-[#0C2C9C] text-white [clip-path:polygon(12px_0,100%_0,calc(100%-12px)_100%,0_100%)]"
                        : "text-[#1B2238] after:absolute after:inset-x-5 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-[#E0142B] after:transition-transform after:duration-200 hover:after:scale-x-100"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <a
            href="#"
            className="barlow-medium inline-block bg-[#E0142B] px-5 py-2.25 text-white transition-all hover:bg-[#b70d21] [clip-path:polygon(13px_0,100%_0,calc(100%-12px)_100%,0_100%)]"
          >
            Llámanos
          </a>
        </div>
      </div>

      {/* Menús desplegables */}
      {navLinks.map(
        (link) =>
          link.menu && (
            <div
              key={link.id}
              className={`absolute inset-x-0 top-full hidden border-t-4 border-[#E0142B] bg-white shadow-[0_30px_40px_-20px_rgba(12,44,156,0.35)] transition-all duration-300 md:block ${
                abierto === link.id
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0"
              }`}
            >
              <div className="max-w-300 mx-auto flex flex-wrap gap-x-2 gap-y-4 px-2 py-8">
                {link.menu.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setAbierto(null)}
                    className="group flex w-35 flex-col items-center"
                  >
                    <div className="relative h-24 w-full transition-transform duration-300 group-hover:-translate-y-1.5">
                      <Image
                        src={item.imagen}
                        alt={item.nombre}
                        fill
                        sizes="140px"
                        className="object-contain mix-blend-multiply drop-shadow-md"
                      />
                    </div>
                    <span className="barlow-medium relative mt-3 text-center text-[0.95rem] text-[#1B2238] transition-colors group-hover:text-[#0C2C9C] after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-center after:scale-x-0 after:bg-[#E0142B] after:transition-transform after:duration-200 group-hover:after:scale-x-100">
                      {item.nombre}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ),
      )}
    </header>
  );
}
