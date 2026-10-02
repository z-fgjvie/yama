// components/AyudaYamaha.tsx
import Link from "next/link";

export default function AyudaYamaha() {
  return (
    <section className="relative bg-gradient-to-r from-[#1747E6] to-[#0C2C9C] py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-8 px-6 md:flex-row md:gap-12">
        <h2 className="barlow-extrabold -skew-x-6 origin-bottom-left text-5xl uppercase text-white md:text-6xl">
          ¿Tienes alguna duda?
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#"
            className="inline-flex items-center gap-3 bg-white px-8 py-3.5 font-semibold text-[#0C2C9C] transition-colors hover:bg-[#E6ECFB] [clip-path:polygon(18px_0,100%_0,calc(100%_-_18px)_100%,0_100%)]"
          >
            Encuentra un distribuidor
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
          </Link>

          <Link
            href="#"
            className="inline-block bg-red-600 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-red-700 [clip-path:polygon(18px_0,100%_0,calc(100%_-_18px)_100%,0_100%)]"
          >
            Llámanos ahora
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-1.5 w-[22%] bg-red-600" />
    </section>
  );
}
