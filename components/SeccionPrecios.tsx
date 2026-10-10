"use client";

import Link from "next/link";
import { useState } from "react";
import ModalContado from "@/components/ModalContado";

type Props = {
  nombre: string;
  year: string;
  precioRegular: string;
  bono: string;
  precioConBono: string;
  pdf: string;
};

export default function SeccionPrecios({
  nombre,
  year,
  precioRegular,
  bono,
  precioConBono,
  pdf,
}: Props) {
  const botones = [
    {
      texto: "Encuentra un distribuidor",
      href: "https://www.yamaha-motor.com.mx/distribuidores",
    },
    { texto: "Comprar motocicleta de contado", href: "#", abreModal: true },
    {
      texto: "Compara los modelos",
      href: "https://www.yamaha-motor.com.mx/compara",
    },
    { texto: "Ficha técnica", href: pdf },
  ];

  const claseBoton =
    "flex h-16 w-full items-center justify-center rounded-md bg-[#0b2d83] px-4 text-center text-base font-semibold text-white transition hover:bg-[#08205e]";

  const tieneBono = Boolean(bono && precioConBono);

  const [modalAbierto, setModalAbierto] = useState(false);

  return (
    <section className="w-full bg-slate-50 px-6 py-12 md:px-24 md:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1fr_1fr_1fr_auto] md:gap-12">
        {/* Nombre y año */}
        <div>
          <h2 className="text-5xl barlow-bold uppercase text-slate-900 md:text-6xl">
            {nombre}
          </h2>
          <p className="mt-1 text-xl barlow-medium text-slate-900">
            Precio Modelo {year}
          </p>
        </div>

        {/* Precio regular */}
        <div className={tieneBono ? "" : "md:col-span-2 md:text-center"}>
          <p
            className={`barlow-semibold text-slate-900 ${
              tieneBono ? "text-2xl" : "text-3xl md:text-4xl"
            }`}
          >
            Precio Regular
          </p>
          <p
            className={`barlow-semibold text-slate-900 ${
              tieneBono
                ? "text-2xl line-through"
                : "text-4xl md:text-5xl barlow-extrabold"
            }`}
          >
            {precioRegular}
          </p>
        </div>

        {bono && precioConBono && (
          <div className="text-2xl barlow-semibold leading-tight text-slate-900 md:text-3xl">
            <p>Bono de {bono}</p>
            <p>Precio con bono</p>
            <p>{precioConBono}</p>
          </div>
        )}

        {/* Botones */}
        <div className="flex w-full flex-col gap-3 md:col-start-4 md:w-90">
          {botones.map((boton) =>
            boton.abreModal ? (
              <button
                key={boton.texto}
                type="button"
                onClick={() => setModalAbierto(true)}
                className={`${claseBoton} cursor-pointer`}
              >
                {boton.texto}
              </button>
            ) : (
              <Link key={boton.texto} href={boton.href} className={claseBoton}>
                {boton.texto}
              </Link>
            ),
          )}
        </div>
      </div>
      <ModalContado
        abierto={modalAbierto}
        onClose={() => setModalAbierto(false)}
        moto={nombre}
      />
    </section>
  );
}
