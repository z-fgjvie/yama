// components/ComunidadYamaha.tsx
import Image from "next/image";
import Link from "next/link";

const items = [
  { nombre: "Yamaha Riding Club", src: "/yamaha-club.webp", href: "#" },
  {
    nombre: "Yamaha Riding Experience",
    src: "/yamaha-experience.webp",
    href: "#",
  },
];

export default function ComunidadYamaha() {
  return (
    <section className="relative overflow-hidden bg-[#080D1C] py-20">
      <div className="absolute -right-[10%] top-0 h-full w-[38%] -skew-x-12 bg-[#0C2C9C]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <h2 className="barlow-extrabold -skew-x-6 origin-bottom-left text-5xl uppercase text-white md:text-6xl">
            Rueda con la comunidad
          </h2>
          <p className="max-w-xs text-lg text-[#8FA3D6]">
            Rutas en grupo y experiencias de manejo para todos los niveles.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <Link
              key={item.nombre}
              href={item.href}
              className="group relative block aspect-square overflow-hidden [clip-path:polygon(0_0,100%_0,100%_calc(100%_-_40px),calc(100%_-_40px)_100%,0_100%)]"
            >
              <Image
                src={item.src}
                alt={item.nombre}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-[#080D2E] via-transparent to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 px-6 pb-6">
                <span className="barlow-extrabold -skew-x-6 origin-bottom-left text-3xl uppercase leading-none text-white md:text-4xl">
                  {item.nombre}
                </span>

                <span className="mr-8 flex h-10 w-10 shrink-0 items-center justify-center bg-red-600 text-white transition-colors group-hover:bg-red-700">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
