// components/BienvenidoClub.tsx
import Image from "next/image";
import Link from "next/link";

const categorias = [
  {
    id: 1,
    slug: "scooters",
    nombre: "Scooters",
    src: "/scooter.webp",
    href: "#",
  },
  {
    id: 2,
    slug: "trabajo",
    nombre: "Trabajo",
    src: "/trabajo.webp",
    href: "#",
  },
  { id: 3, slug: "street", nombre: "Street", src: "/street.webp", href: "#" },
  {
    id: 4,
    slug: "deportivas",
    nombre: "Deportivas",
    src: "/deportiva.webp",
    href: "#",
  },
  {
    id: 5,
    nombre: "Super deportivas",
    slug: "super-deportivas",
    src: "/super-deportiva.webp",
    href: "#",
  },
  {
    id: 6,
    slug: "doble-proposito",
    nombre: "Doble propósito",
    src: "/doble-proposito.webp",
    href: "#",
  },
  {
    id: 7,
    slug: "off-road",
    nombre: "Off-Road",
    src: "/off-road.webp",
    href: "#",
  },
];

export default function BienvenidoClub() {
  return (
    <section className="bg-[#0B1130] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <h2 className="barlow-extrabold -skew-x-6 origin-bottom-left text-5xl uppercase text-white md:text-6xl">
            Yamaha Liquidaciones de Club
          </h2>
          <p className="max-w-xs text-lg text-[#8FA3D6]">
            Encuentra la moto para tu forma de rodar: ciudad, trabajo, pista o
            terracería.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categorias.map((c) => (
            <Link
              key={c.id}
              href={`/motos/${c.slug}`}
              className="group flex flex-col border border-white/10 bg-[#0F1738] p-5 transition-colors duration-300 hover:border-red-600"
            >
              <div className="relative h-52 w-full">
                <Image
                  src={c.src}
                  alt={c.nombre}
                  width={400}
                  height={400}
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="barlow-extrabold -skew-x-6 origin-bottom-left text-2xl uppercase text-white">
                  {c.nombre}
                </span>
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-red-600 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </div>
            </Link>
          ))}

          <div className="flex flex-col justify-between bg-[#0C2C9C] p-6">
            <div>
              <h3 className="barlow-extrabold -skew-x-6 origin-bottom-left text-3xl uppercase leading-tight text-white">
                No sabes cuál elegir
              </h3>
              <p className="mt-3 text-[#C9D5FA]">
                Un distribuidor te ayuda a encontrar la tuya.
              </p>
            </div>

            <Link
              href="#"
              className="mt-6 inline-block self-start bg-red-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-red-700 [clip-path:polygon(18px_0,100%_0,calc(100%_-_18px)_100%,0_100%)]"
            >
              Habla con un asesor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
