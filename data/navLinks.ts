type NavLink = {
  id: number;
  name: string;
  href: string;
};

export const navLinks: NavLink[] = [
  {
    id: 1,
    name: "Motos",
    href: "#motos",
  },
  {
    id: 2,
    name: "ATV's",
    href: "/",
  },
  {
    id: 3,
    name: "Servicio técnico",
    href: "/tecnico",
  },
  {
    id: 4,
    name: "Distribuidores",
    href: "/distribuidores",
  },
];
