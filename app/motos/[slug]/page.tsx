import FooterYamaha from "@/components/FooterYamaha";
import Header from "@/components/Header";
import { dataMotos } from "@/data/dataMotos";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { GoArrowLeft } from "react-icons/go";

export default async function PageMotos({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const moto = dataMotos.find((item) => item.slug === slug);

  return (
    <>
      <Header />

      <section
        className={` bg-no-repeat bg-cover bg-top h-120 md:h-132 lg:h-156 flex items-end relative`}
        style={{ backgroundImage: `url(${moto?.banner})` }}
      >
        <h1 className="text-5xl md:text-[4.375rem] mb-16 ml-12 md:ml-24 barlow-extrabold uppercase text-white">
          {moto?.nombre}
        </h1>
      </section>

      <section className="bg-[#EEF2FA] py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Link
            href="/"
            className="flex items-center gap-2 hover:underline text-lg mb-10 text-red-600 barlow-medium"
          >
            <FiArrowLeft size={22} />
            Atras
          </Link>
          <div className="mb-12 flex items-end justify-between gap-6">
            <h2 className="barlow-extrabold -skew-x-6 origin-bottom-left text-5xl uppercase text-[#0C2C9C] md:text-6xl">
              Elige tu modelo
            </h2>
            <div className="hidden h-1.5 w-32 bg-red-600 md:block" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {moto?.imagenes.map((m) => (
              <Link
                key={m.slug}
                href={`/motos/${slug}/${m.slug}`}
                className="group relative flex flex-col bg-white shadow-[0_10px_30px_-12px_rgba(12,44,156,0.25)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(12,44,156,0.4)]"
              >
                {/* Zona de la foto */}
                <div className="relative h-60 overflow-hidden bg-gradient-to-br from-[#E4EBFA] to-white">
                  <div className="absolute -right-10 top-0 h-full w-2/3 -skew-x-12 bg-[#0C2C9C]/10 transition-all duration-500 group-hover:w-3/4 group-hover:bg-[#0C2C9C]/15" />

                  <Image
                    src={m.src}
                    alt={m.nombre}
                    fill
                    className="object-contain p-6 mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Precio */}
                  <div className="absolute left-0 top-5 bg-red-600 py-2 pl-4 pr-8 text-white [clip-path:polygon(0_0,100%_0,calc(100%_-_16px)_100%,0_100%)]">
                    <span className="block text-[11px] leading-none text-white/80">
                      Desde
                    </span>
                    <span className="barlow-extrabold text-2xl leading-none">
                      {m.precio}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="flex items-center justify-between gap-4 border-t-4 border-[#0C2C9C] p-6">
                  <div>
                    <h3 className="barlow-extrabold -skew-x-6 origin-bottom-left text-3xl uppercase leading-none text-[#0A0F1E]">
                      {m.nombre}
                    </h3>
                    <span className="mt-2 inline-block bg-[#0C2C9C]/10 px-2.5 py-0.5 text-sm font-semibold text-[#0C2C9C]">
                      {m.year}
                    </span>
                  </div>

                  {/* <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#0C2C9C] text-white transition-colors duration-300 group-hover:bg-red-600">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span> */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FooterYamaha />
    </>
  );
}
