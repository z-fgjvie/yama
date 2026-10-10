"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type Props = {
  abierto: boolean;
  onClose: () => void;
  moto?: string;
};

const estados = [
  "Aguascalientes",
  "Baja California",
  "Baja California Sur",
  "Campeche",
  "Chiapas",
  "Chihuahua",
  "Ciudad de México",
  "Coahuila",
  "Colima",
  "Durango",
  "Estado de México",
  "Guanajuato",
  "Guerrero",
  "Hidalgo",
  "Jalisco",
  "Michoacán",
  "Morelos",
  "Nayarit",
  "Nuevo León",
  "Oaxaca",
  "Puebla",
  "Querétaro",
  "Quintana Roo",
  "San Luis Potosí",
  "Sinaloa",
  "Sonora",
  "Tabasco",
  "Tamaulipas",
  "Tlaxcala",
  "Veracruz",
  "Yucatán",
  "Zacatecas",
];

const metodosPago = ["Contado", "Financiamiento"];

const claseCampo =
  "w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[#0b2d83] focus:ring-4 focus:ring-[#0b2d83]/15";

const claseLabel = "mb-1.5 block text-sm font-semibold text-slate-700";

export default function ModalContado({ abierto, onClose, moto }: Props) {
  const [acepta, setAcepta] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);
  const primerCampo = useRef<HTMLInputElement>(null);
  const onCloseRef = useRef(onClose);
  const [datos, setDatos] = useState({
    nombre: "",
    telefono: "",
    email: "",
    estado: "",
    metodos: "",
  });

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  // Al abrir: limpiar estado y poner el foco en el primer campo
  useEffect(() => {
    if (!abierto) return;
    setEnviado(false);
    setAcepta(false);
    const id = setTimeout(() => primerCampo.current?.focus(), 50);
    return () => clearTimeout(id);
  }, [abierto]);

  // Cerrar con Escape y bloquear el scroll del fondo
  useEffect(() => {
    if (!abierto) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCloseRef.current();
    };
    document.addEventListener("keydown", onKey);

    const overflowPrevio = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflowPrevio;
    };
  }, [abierto]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const respuesta = await fetch("/api/enviar-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      });

      const resultado = await respuesta.json();
      console.log(resultado);
      if (resultado.success) {
        setDatos({
          nombre: "",
          telefono: "",
          email: "",
          estado: "",
          metodos: "",
        });
        setLoading(false);
        setEnviado(true);
      }
    } catch {
      console.log("error");
    } finally {
      setLoading(false);
    }
  };

  if (!abierto) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="titulo-modal"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      {/* Animaciones */}
      <style>{`
        @keyframes modalFondo { from { opacity: 0 } to { opacity: 1 } }
        @keyframes modalCaja {
          from { opacity: 0; transform: translateY(16px) scale(0.95) }
          to { opacity: 1; transform: translateY(0) scale(1) }
        }
      `}</style>

      {/* Fondo oscuro */}
      <div
        onClick={onClose}
        aria-hidden
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
        style={{ animation: "modalFondo 250ms ease-out" }}
      />

      {/* Caja del modal */}
      <div
        className="relative max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
        style={{ animation: "modalCaja 300ms ease-out" }}
      >
        {/* Franja de color */}
        <div className="h-1.5 w-full bg-[#E30613]" />

        {/* Cabecera */}
        <div className="flex items-start justify-between gap-4 px-6 pt-6 md:px-10 md:pt-8">
          <div>
            {/* Cambia la ruta por tu logo */}
            <Image
              src="/logo-yamaha.webp"
              alt="Logo"
              width={100}
              height={100}
              className="h-12 w-auto"
            />
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M2 2l14 14M16 2L2 16" />
            </svg>
          </button>
        </div>

        {enviado ? (
          /* Mensaje de éxito */
          <div className="flex flex-col items-center px-6 py-14 text-center md:px-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="mt-6 text-3xl font-bold text-slate-900">
              ¡Solicitud enviada!
            </h3>
            <p className="mt-2 max-w-sm text-slate-600">
              Gracias por tu interés. Un asesor se pondrá en contacto contigo
              muy pronto.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 h-12 cursor-pointer rounded-md bg-[#0b2d83] px-10 font-semibold text-white transition hover:bg-[#08205e]"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="px-6 pb-8 pt-4 md:px-10 md:pb-10"
          >
            <h2
              id="titulo-modal"
              className="text-3xl font-bold text-slate-900 md:text-4xl"
            >
              Comprar de contado
            </h2>
            <p className="mt-1 text-slate-600">
              {moto
                ? `Déjanos tus datos y te contactamos sobre la ${moto}.`
                : "Déjanos tus datos y un asesor te contactará."}
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="md:col-span-2">
                <label htmlFor="nombre" className={claseLabel}>
                  Nombre de contacto
                </label>
                <input
                  ref={primerCampo}
                  id="nombre"
                  name="nombre"
                  type="text"
                  value={datos.nombre}
                  onChange={(e) => {
                    setDatos({ ...datos, nombre: e.target.value });
                  }}
                  required
                  autoComplete="off"
                  placeholder="Tu nombre completo"
                  className={claseCampo}
                />
              </div>

              <div>
                <label htmlFor="telefono" className={claseLabel}>
                  Teléfono
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  inputMode="numeric"
                  value={datos.telefono}
                  onChange={(e) => {
                    setDatos({ ...datos, telefono: e.target.value });
                  }}
                  required
                  autoComplete="off"
                  maxLength={10}
                  pattern="[0-9]{10}"
                  title="Escribe los 10 dígitos de tu teléfono"
                  placeholder="10 dígitos"
                  className={claseCampo}
                />
              </div>

              <div>
                <label htmlFor="email" className={claseLabel}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={datos.email}
                  onChange={(e) => {
                    setDatos({
                      ...datos,
                      email: e.target.value,
                    });
                  }}
                  required
                  autoComplete="email"
                  placeholder="correo@ejemplo.com"
                  className={claseCampo}
                />
              </div>

              <div>
                <label htmlFor="estado" className={claseLabel}>
                  Estado
                </label>
                <select
                  id="estado"
                  name="estado"
                  required
                  value={datos.estado}
                  onChange={(e) => {
                    setDatos({ ...datos, estado: e.target.value });
                  }}
                  className={claseCampo}
                >
                  <option value="" disabled>
                    Selecciona tu estado
                  </option>
                  {estados.map((estado) => (
                    <option key={estado} value={estado}>
                      {estado}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="pago" className={claseLabel}>
                  Método de pago
                </label>
                <select
                  id="pago"
                  name="pago"
                  value={datos.metodos}
                  onChange={(e) => {
                    setDatos({ ...datos, metodos: e.target.value });
                  }}
                  className={claseCampo}
                >
                  {metodosPago.map((metodo) => (
                    <option key={metodo} value={metodo}>
                      {metodo}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Checkbox personalizado */}
            <label className="mt-6 flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                name="privacidad"
                checked={acepta}
                onChange={(e) => setAcepta(e.target.checked)}
                className="peer sr-only"
              />
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 border-slate-300 bg-white text-transparent transition peer-checked:border-[#0b2d83] peer-checked:bg-[#0b2d83] peer-checked:text-white peer-focus-visible:ring-4 peer-focus-visible:ring-[#0b2d83]/25">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 7.5l3.5 3.5L12 3.5" />
                </svg>
              </span>
              <span className="text-sm leading-snug text-slate-600">
                He leído y estoy de acuerdo con el{" "}
                <a
                  href="https://www.yamaha-motor.com.mx/aviso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#0b2d83] underline underline-offset-2 hover:text-[#08205e]"
                >
                  Aviso de privacidad
                </a>
                .
              </span>
            </label>

            <button
              type="submit"
              disabled={!acepta}
              className="mt-8 flex h-14 w-full cursor-pointer items-center justify-center rounded-md bg-[#E30613] text-base font-semibold text-white transition hover:bg-[#E30613] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-[#E30613]"
            >
              {loading ? (
                <AiOutlineLoading3Quarters
                  className="text-center mx-auto animate-spin "
                  size={22}
                />
              ) : (
                "Enviar"
              )}
            </button>
          </form>
        )}
      </div>
    </div>,
    document.body,
  );
}
