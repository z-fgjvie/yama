"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ImagenData = {
  id: number;
  imagen: string;
};

type Props = {
  imagenes: ImagenData[];
};

export default function CarruselData({ imagenes }: Props) {
  const contenedor = useRef<HTMLDivElement>(null);
  const [puedeIzq, setPuedeIzq] = useState(false);
  const [puedeDer, setPuedeDer] = useState(true);

  const actualizarFlechas = () => {
    const el = contenedor.current;
    if (!el) return;
    setPuedeIzq(el.scrollLeft > 4);
    setPuedeDer(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    actualizarFlechas();
    window.addEventListener("resize", actualizarFlechas);
    return () => window.removeEventListener("resize", actualizarFlechas);
  }, [imagenes]);

  const mover = (direccion: 1 | -1) => {
    const el = contenedor.current;
    const primero = el?.firstElementChild as HTMLElement | null;
    if (!el || !primero) return;
    const gap = 16; // igual a gap-4
    el.scrollBy({
      left: direccion * (primero.offsetWidth + gap),
      behavior: "smooth",
    });
  };

  if (imagenes.length === 0) return null;

  return (
    <section className="w-full  py-14 mt-6 mb-14">
      <div
        ref={contenedor}
        onScroll={actualizarFlechas}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth ps-6 md:ps-40 scroll-ps-6 md:scroll-ps-40 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {imagenes.map((item, i) => (
          <div
            key={item.id}
            className="relative shrink-0 snap-start aspect-video h-48 md:h-72"
          >
            <Image
              src={item.imagen}
              alt={`Detalle de la moto ${i + 1}`}
              fill
              sizes="(min-width: 768px) 512px, 341px"
              className="object-cover select-none"
              draggable={false}
            />
          </div>
        ))}
        {/* Espacio final para que la última imagen pueda llegar al inicio */}
        <div className="shrink-0 w-6 md:w-40" aria-hidden />
      </div>

      {/* Flechas */}
      <div className="mt-5 flex justify-end gap-6 pe-6 md:pe-32">
        <button
          onClick={() => mover(-1)}
          disabled={!puedeIzq}
          aria-label="Anterior"
          className="cursor-pointer text-slate-900 transition hover:-translate-x-1 disabled:opacity-30 disabled:cursor-default disabled:hover:translate-x-0"
        >
          <svg
            width="40"
            height="26"
            viewBox="0 0 48 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="square"
          >
            <path d="M46 16H3M16 3L3 16l13 13" />
          </svg>
        </button>
        <button
          onClick={() => mover(1)}
          disabled={!puedeDer}
          aria-label="Siguiente"
          className="cursor-pointer text-slate-900 transition hover:translate-x-1 disabled:opacity-30 disabled:cursor-default disabled:hover:translate-x-0"
        >
          <svg
            width="40"
            height="26"
            viewBox="0 0 48 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="square"
          >
            <path d="M2 16h43M32 3l13 13-13 13" />
          </svg>
        </button>
      </div>
    </section>
  );
}
