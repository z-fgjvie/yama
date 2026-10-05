import Image from "next/image";
import Link from "next/link";

const items = [
  {
    nombre: "Motos",
    href: "#motos",
    src: "/explore-moto.webp",
    alt: "explore-motos",
  },
  {
    nombre: "ATV's",
    href: "atvs",
    src: "/explore-atv.webp",
    alt: "explore-atv",
  },
];

export default function ExploraYamaha() {
  return (
    <section className="bg-[#080D1C] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <h2 className="barlow-extrabold -skew-x-6 text-5xl uppercase text-white md:text-6xl">
            Explora tu próxima Yamaha
          </h2>

          <p className="max-w-xs text-lg text-[#8FA3D6]">
            Dos mundos, una misma ingeniería. Elige cómo quieres rodar.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {items.map((item) => (
            <Link
              key={item.nombre}
              href={item.href}
              className="group relative block aspect-[4/3] overflow-hidden [clip-path:polygon(0_0,100%_0,100%_calc(100%_-_40px),calc(100%_-_40px)_100%,0_100%)]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={500}
                height={500}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-[#080D2E] via-transparent to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-8 pb-6">
                <span className="barlow-extrabold -skew-x-6 origin-bottom-left text-5xl uppercase text-white">
                  {item.nombre}
                </span>

                <span className="mr-8 flex h-12 w-12 items-center justify-center bg-red-600 text-white transition-colors group-hover:bg-red-700">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
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
