// components/FooterYamaha.tsx
import Link from "next/link";

const motos = [
  "Scooters",
  "Trabajo",
  "Street",
  "Deportivas",
  "Super deportivas",
  "Doble propósito",
  "Off-Road",
];
const atvs = ["Utilitarios", "Deportivos"];
const refacciones = [
  "Aceite",
  "Bandas V",
  "Baterías",
  "Bujías",
  "Cables de control",
  "Cadenas y coronas",
  "Direccionales",
  "Discos de fricción",
  "Empaques",
  "Espejos laterales",
  "Filtros de aceite",
  "Filtros de aire",
  "Frenos",
  "Llantas",
  "Pistones",
];
const redes = ["Facebook", "Instagram", "YouTube"];
const legales = [
  "Yamaha Motor global",
  "Yamaha Music",
  "Yamaha Marino",
  "Yamaha Racing",
  "Aviso de privacidad",
];

function Columna({
  titulo,
  links,
  className = "",
}: {
  titulo: string;
  links: string[];
  className?: string;
}) {
  return (
    <div className={className}>
      <h4 className="barlow-extrabold -skew-x-6 origin-bottom-left mb-3 text-xl uppercase text-white">
        {titulo}
      </h4>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l}>
            <Link
              href="#"
              className="text-[#B6BED8] transition-colors hover:text-white"
            >
              {l}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FooterYamaha() {
  return (
    <footer className="bg-[#04060F] pt-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-[1fr_1fr_2fr_1fr]">
          <Columna titulo="Motos" links={motos} />
          <Columna titulo="ATV's" links={atvs} />
          <Columna
            titulo="Refacciones y accesorios"
            links={refacciones}
            className="col-span-2 md:col-span-1"
          />
          <Columna titulo="Redes sociales" links={redes} />
        </div>

        <div className="mt-12 border-t border-white/10 py-6">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#B6BED8]">
            {legales.map((l) => (
              <Link
                key={l}
                href="#"
                className="transition-colors hover:text-white"
              >
                {l}
              </Link>
            ))}
          </div>
          <p className="mt-3 text-xs text-[#6F7AA0]">
            © 2026 Yamaha Motor de México S.A. de C.V. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
