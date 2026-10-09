"use client";

import { useEffect, useState } from "react";

type ImagenMoto = {
  id: number;
  imagen: string;
};

type Props = {
  imagenes: ImagenMoto[];
  autoplay?: boolean;
  intervalo?: number;
};

export default function CarruselMotos({
  imagenes,
  autoplay = true,
  intervalo = 3500,
}: Props) {
  // Si hay pocas imágenes, se repiten hasta tener mínimo 6 slides
  const minimo = 6;
  const veces = Math.ceil(minimo / Math.max(imagenes.length, 1));
  const slides = Array.from({ length: imagenes.length * veces }, (_, i) => ({
    key: `${imagenes[i % imagenes.length].id}-${i}`,
    src: imagenes[i % imagenes.length].imagen,
  }));

  const total = slides.length;
  const [index, setIndex] = useState(0);

  const siguiente = () => setIndex((prev) => (prev + 1) % total);
  const anterior = () => setIndex((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    if (!autoplay || total <= 1) return;
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % total),
      intervalo,
    );
    return () => clearInterval(id);
  }, [autoplay, intervalo, total]);

  // Distancia circular de cada slide respecto al activo
  const getOffset = (i: number) =>
    ((i - index + total / 2 + total) % total) - total / 2;

  if (imagenes.length === 0) return null;

  return (
    <section className="relative w-full overflow-hidden py-10">
      <div className="relative mx-auto h-72 md:h-100 max-w-7xl">
        {slides.map((slide, i) => {
          const offset = getOffset(i);
          const esActivo = offset === 0;
          const visible = Math.abs(offset) <= 1;

          return (
            <div
              key={slide.key}
              onClick={() => {
                if (offset === -1) anterior();
                if (offset === 1) siguiente();
              }}
              className={`absolute top-1/2 left-1/2 w-3/5 md:w-1/3 aspect-4/3 bg-white transition-all duration-700 ease-in-out ${
                esActivo
                  ? "z-10 opacity-100"
                  : visible
                    ? "z-0 opacity-40 cursor-pointer"
                    : "z-0 opacity-0 pointer-events-none"
              }`}
              style={{
                transform: `translate(-50%, -50%) translateX(${
                  offset * 105
                }%) scale(${esActivo ? 1 : 0.75})`,
              }}
            >
              <img
                src={slide.src}
                alt={`Moto ${(i % imagenes.length) + 1}`}
                className="h-full w-full object-contain select-none"
                draggable={false}
              />
            </div>
          );
        })}
      </div>

      <button
        onClick={anterior}
        aria-label="Anterior"
        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:bg-slate-100 transition cursor-pointer"
      >
        ‹
      </button>
      <button
        onClick={siguiente}
        aria-label="Siguiente"
        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:bg-slate-100 transition cursor-pointer"
      >
        ›
      </button>
    </section>
  );
}
