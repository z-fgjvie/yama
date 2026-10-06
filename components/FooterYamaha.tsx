// components/FooterYamaha.tsx
import Link from "next/link";

const motos = [
  {
    id: 1,
    nombre: "Scooters",
    url: "/motos/scooters",
  },
  {
    id: 2,
    nombre: "Trabajo",
    url: "/motos/trabajo",
  },
  {
    id: 3,
    nombre: "Street",
    url: "/motos/street",
  },
  {
    id: 4,
    nombre: "Deportivas",
    url: "/motos/deportivas",
  },
  {
    id: 5,
    nombre: "Super deportivas",
    url: "/motos/super-deportivas",
  },
  {
    id: 6,
    nombre: "Doble propósito",
    url: "/motos/doble-proposito",
  },
  {
    id: 7,
    nombre: "Off-Road",
    url: "/motos/off-road",
  },
];

const atvs = [
  {
    id: 1,
    nombre: "Utilitarios",
    url: "/atvs/utilitarios",
  },
  {
    id: 2,
    nombre: "Deportivos",
    url: "/atvs/deportivos",
  },
];
const refacciones = [
  {
    id: 1,
    nombre: "Aceite",
    url: "https://www.yamaha-motor.com.mx/refacciones-y-accesorios/aceite",
  },
  {
    id: 2,
    nombre: "Bandas V",
    url: "https://www.yamaha-motor.com.mx/refacciones-y-accesorios/bandas-v",
  },
  {
    id: 3,
    nombre: "Baterías",
    url: "https://www.yamaha-motor.com.mx/refacciones-y-accesorios/baterias",
  },
  {
    id: 4,
    nombre: "Bujías",
    url: "https://www.yamaha-motor.com.mx/refacciones-y-accesorios/bujias",
  },
  {
    id: 5,
    nombre: "Cables de control",
    url: "https://www.yamaha-motor.com.mx/refacciones-y-accesorios/cables-de-control",
  },
  {
    id: 6,
    nombre: "Cadenas y coronas",
    url: "https://www.yamaha-motor.com.mx/refacciones-y-accesorios/cadenas-y-coronas",
  },
  {
    id: 7,
    nombre: "Direccionales",
    url: "https://www.yamaha-motor.com.mx/refacciones-y-accesorios/direccionales",
  },
  {
    id: 8,
    nombre: "Discos de fricción",
    url: "https://www.yamaha-motor.com.mx/refacciones-y-accesorios/discos-de-friccion",
  },
  {
    id: 9,
    nombre: "Empaques",
    url: "https://www.yamaha-motor.com.mx/refacciones-y-accesorios/empaques",
  },
  {
    id: 10,
    nombre: "Espejos laterales",
    url: "https://www.yamaha-motor.com.mx/refacciones-y-accesorios/espejos-laterales",
  },
  {
    id: 11,
    nombre: "Filtros de aceite",
    url: "https://www.yamaha-motor.com.mx/refacciones-y-accesorios/filtros-de-aceite",
  },
  {
    id: 12,
    nombre: "Filtros de aire",
    url: "https://www.yamaha-motor.com.mx/refacciones-y-accesorios/filtros-de-aire",
  },
  {
    id: 13,
    nombre: "Frenos",
    url: "https://www.yamaha-motor.com.mx/refacciones-y-accesorios/frenos",
  },
  {
    id: 14,
    nombre: "Llantas",
    url: "https://www.yamaha-motor.com.mx/refacciones-y-accesorios/llantas",
  },
  {
    id: 15,
    nombre: "Pistones",
    url: "https://www.yamaha-motor.com.mx/refacciones-y-accesorios/pistones",
  },
];
const redes = [
  {
    id: 1,
    nombre: "Facebook",
    url: "https://web.facebook.com/yamahamotormexico?_rdc=1&_rdr#",
  },
  {
    id: 2,
    nombre: "Instagram",
    url: "https://www.instagram.com/yamahamotorMX/",
  },
  {
    id: 3,
    nombre: "YouTube",
    url: "https://www.youtube.com/channel/UCZQgYv_79axII3mzd2RYc6g/featured",
  },
];

const legales = [
  {
    id: 1,
    nombre: "Yamaha Motor global",
    url: "https://global.yamaha-motor.com",
  },
  {
    id: 2,
    nombre: "Yamaha Music",
    url: "https://mx.yamaha.com",
  },
  {
    id: 3,
    nombre: "Yamaha Marino",
    url: "https://imemsa.com.mx",
  },
  {
    id: 4,
    nombre: "Yamaha Racing",
    url: "https://www.yamaha-racing.com/home",
  },
  {
    id: 5,
    nombre: "Aviso de privacidad",
    url: "https://www.yamaha-motor.com.mx/aviso/aviso-de-privacidad-integral",
  },
];

function Columna({
  titulo,
  links,
  className = "",
}: {
  titulo: string;
  links: {
    id: number;
    nombre: string;
    url: string;
  }[];
  className?: string;
}) {
  return (
    <div className={className}>
      <h4 className="barlow-extrabold -skew-x-6 origin-bottom-left mb-3 text-xl uppercase text-white">
        {titulo}
      </h4>

      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.id}>
            <Link
              href={l.url || "#"}
              className="text-[#B6BED8] transition-colors hover:text-white"
            >
              {l.nombre}
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
                key={l.id}
                href={l.url || "#"}
                className="transition-colors hover:text-white"
              >
                {l.nombre}
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
