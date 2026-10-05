// components/Liquidacion.tsx
import Image from "next/image";
import Link from "next/link";

const beneficios = [
  {
    titulo: "Precios de liquidación",
    texto: "Modelos Yamaha nuevos a un precio mucho más bajo del normal.",
  },
  {
    titulo: "Garantía Yamaha",
    texto: "Tu moto sale con respaldo oficial, como cualquier otra.",
  },
  {
    titulo: "Entrega rápida",
    texto: "Apartas hoy y te asesoramos en todo el proceso.",
  },
  {
    titulo: "Hasta agotar existencias",
    texto: "Cuando se vende una unidad, ya no vuelve a este precio.",
  },
];

const icono = (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12l5 5L20 7" />
  </svg>
);

export default function Liquidacion() {
  return (
    <section className="relative overflow-hidden bg-[#050A1C] py-24">
      {/* Fondos */}
      <div className="absolute -right-[12%] top-0 h-full w-[48%] -skew-x-12 bg-gradient-to-b from-[#1747E6] to-[#0C2C9C]" />
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-red-600/20 blur-3xl" />

      {/* Cinta superior */}
      <div className="absolute inset-x-0 top-0 flex items-center gap-8 overflow-hidden bg-red-600 py-2 text-sm font-bold uppercase tracking-widest text-white">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="shrink-0">
            Liquidación · Últimas unidades · Precio especial
          </span>
        ))}
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 pt-8 lg:grid-cols-2">
        {/* Texto */}
        <div>
          <span className="inline-flex items-center gap-2 bg-white px-4 py-1.5 text-sm font-bold uppercase text-red-600 [clip-path:polygon(12px_0,100%_0,calc(100%_-_12px)_100%,0_100%)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-600 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-600" />
            </span>
            Oferta por tiempo limitado
          </span>

          <h2 className="barlow-extrabold -skew-x-6 origin-bottom-left mt-6 text-6xl uppercase leading-[0.95] text-white md:text-7xl">
            Motos Yamaha en <span className="text-red-500">liquidación</span>
          </h2>

          <p className="mt-6 max-w-lg text-lg text-[#C9D5FA]">
            Esta es la oportunidad de estrenar la moto que quieres sin pagar de
            más. Las unidades son limitadas y los precios{" "}
            <strong className="text-white">no se van a repetir</strong>.
            Mientras lo piensas, alguien más se la lleva.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {beneficios.map((b) => (
              <li key={b.titulo} className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-red-600 text-white">
                  {icono}
                </span>
                <div>
                  <h3 className="font-bold text-white">{b.titulo}</h3>
                  <p className="text-sm text-[#9DB0DD]">{b.texto}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#"
              className="inline-block bg-red-600 px-10 py-4 text-lg font-bold text-white transition-colors hover:bg-red-700 [clip-path:polygon(18px_0,100%_0,calc(100%_-_18px)_100%,0_100%)]"
            >
              Ver motos en liquidación
            </Link>
            <Link
              href="#"
              className="inline-block bg-white px-10 py-4 text-lg font-bold text-[#0C2C9C] transition-colors hover:bg-[#E6ECFB] [clip-path:polygon(18px_0,100%_0,calc(100%_-_18px)_100%,0_100%)]"
            >
              Escríbenos por WhatsApp
            </Link>
          </div>
        </div>

        {/* Imagen */}
        <div className="relative mx-auto aspect-square w-full max-w-lg">
          <div className="absolute inset-0 m-auto h-4/5 w-4/5 rounded-full bg-white/10 blur-2xl" />
          <Image
            src="/superdeportivas/yzf-r7-2025.webp"
            alt="Moto Yamaha en liquidación"
            fill
            className="object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.5)]"
          />

          <div className="absolute -left-2 bottom-6 -rotate-6 bg-red-600 px-6 py-3 text-center text-white shadow-xl">
            <span className="block text-xs font-semibold uppercase">
              Últimas
            </span>
            <span className="barlow-extrabold text-4xl uppercase leading-none">
              Unidades
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
