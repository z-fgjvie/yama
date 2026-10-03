type moto = {
  slug: string;
  nombre: string;
  banner: string;
  imagenes: {
    id: number;
    nombre: string;
    year: string;
    src: string;
    precio: string;
    slug: string;
  }[];
};

export const dataMotos: moto[] = [
  {
    slug: "scooters",
    nombre: "SCOOTERS",
    banner: "/banner-scooter.webp",
    imagenes: [
      {
        id: 1,
        nombre: "Fascino",
        year: "2024",
        src: "/scooter/fascino-2024.webp",
        precio: "$28,199",
        slug: "fascino",
      },
      {
        id: 2,
        nombre: "T-max tech max",
        year: "2026",
        src: "/scooter/t-max-tech-max-2026.webp",
        precio: "$219,599",
        slug: "t-max",
      },
      {
        id: 3,
        nombre: "N-max",
        year: "2025",
        src: "/scooter/n-max-2025.webp",
        precio: "$59,699",
        slug: "n-max",
      },
      {
        id: 4,
        nombre: "Ray zr 125 fi",
        year: "2025",
        src: "/scooter/ray-zr-125-fi-2025.webp",
        precio: "$32,699",
        slug: "ray-zr-125-fi",
      },
      {
        id: 5,
        nombre: "Ray zr",
        year: "2024",
        src: "/scooter/ray-zr-2024.webp",
        precio: "$23,999",
        slug: "ray-zr",
      },
      {
        id: 6,
        nombre: "X-max",
        year: "2025",
        src: "/scooter/x-max-2025.webp",
        precio: "$97,199",
        slug: "x-max",
      },
    ],
  },

  {
    slug: "trabajo",
    nombre: "TRABAJO",
    banner: "/banner-trabajo.webp",
    imagenes: [
      {
        id: 1,
        nombre: "YB125",
        year: "2024",
        src: "/trabajo/yb-2025.webp",
        precio: "$22,799",
        slug: "yb",
      },
      {
        id: 2,
        nombre: "YBR125C Express",
        year: "2025",
        src: "/trabajo/ybr-express-2025.webp",
        precio: "$23,399",
        slug: "t-max",
      },
    ],
  },

  {
    slug: "street",
    nombre: "STREET",
    banner: "/banner-street.webp",
    imagenes: [
      {
        id: 1,
        nombre: "FZ-S FI 2.0",
        year: "2024",
        src: "/street/fz-fi-20-2025.webp",
        precio: "$32,999",
        slug: "fzfi-20-2025",
      },
      {
        id: 2,
        nombre: "FZ 3.0 FI",
        year: "2024",
        src: "/street/f-30-fi-2025.webp",
        precio: "$37,799",
        slug: "f-30-fi-2025",
      },
      {
        id: 3,
        nombre: "FZ-S 4.0 FI ABS",
        year: "2025",
        src: "/street/fz-40-fi-abs-2025.webp",
        precio: "$40,799",
        slug: "fz-40-fi-abs-2025",
      },
      {
        id: 4,
        nombre: "FZ25 ABS CONNECTED",
        year: "2025",
        src: "/street/fz25-connected-2025.webp",
        precio: "$53,999",
        slug: "fz25-connected-2025",
      },
    ],
  },

  {
    slug: "deportivas",
    nombre: "DEPORTIVAS",
    banner: "/banner-deportivas.webp",
    imagenes: [
      {
        id: 1,
        nombre: "MT-15",
        year: "2025",
        src: "/deportivas/mt-15-2025.webp",
        precio: "$58,799",
        slug: "mt-15-2025",
      },
      {
        id: 2,
        nombre: "MT-03 ABS",
        year: "2026",
        src: "/deportivas/mt-15-2026.webp",
        precio: "$93,599",
        slug: "mt-03-abs-2026",
      },
      {
        id: 3,
        nombre: "MT-07",
        year: "2026",
        src: "/deportivas/mt-03-2026.webp",
        precio: "$155,999",
        slug: "mt-03-2026",
      },
      {
        id: 4,
        nombre: "MT-09",
        year: "2025",
        src: "/deportivas/mt-09-2025.webp",
        precio: "$182,999",
        slug: "mt-09-2025",
      },
    ],
  },

  {
    slug: "super-deportivas",
    nombre: "SUPER DEPORTIVAS",
    banner: "/banner-superdeportivas.webp",
    imagenes: [
      {
        id: 1,
        nombre: "YZF-R15 V4",
        year: "2025",
        src: "/superdeportivas/yzf-r15-v4-2025.webp",
        precio: "$61,199",
        slug: "yzf-r15-v4-2025",
      },
      {
        id: 2,
        nombre: "YZF-R7",
        year: "2025",
        src: "/superdeportivas/yzf-r7-2025.webp",
        precio: "$154,799",
        slug: "yzf-r7-2025",
      },
      {
        id: 3,
        nombre: "YZF-R9",
        year: "2025",
        src: "/superdeportivas/yzf-r9-2025.webp",
        precio: "$191,999",
        slug: "yzf-r9-2025",
      },
    ],
  },

  {
    slug: "doble-proposito",
    nombre: "DOBLE PROPÓSITO",
    banner: "/banner-dobleproposito.webp",
    imagenes: [
      {
        id: 1,
        nombre: "YBR 125G",
        year: "2025",
        src: "/dobleproposito/ybr-125g-2025.webp",
        precio: "$27,899",
        slug: "ybr-125g-2025",
      },
      {
        id: 2,
        nombre: "XTZ 125 E",
        year: "2026",
        src: "/dobleproposito/xtz-125e-2025.webp",
        precio: "$29,099",
        slug: "t-max",
      },
      {
        id: 3,
        nombre: "SUPER TÉNÉRÉ 1200ZE",
        year: "2024",
        src: "/dobleproposito/super-tenere-1200ze-2024.webp",
        precio: "$251,999",
        slug: "super-tenere-1200ze-2024",
      },
    ],
  },

  {
    slug: "off-road",
    nombre: "OFF-ROAD",
    banner: "/banner-offroad.webp",
    imagenes: [
      {
        id: 1,
        nombre: "YZ250 FX",
        year: "2025",
        src: "/offroad/yz250-fx-2025.webp",
        precio: "$113,999",
        slug: "yz250-fx-2025",
      },

      {
        id: 2,
        nombre: "YZ450FX",
        year: "2025",
        src: "/offroad/yz250-fx-2025.webp",
        precio: "$125,999",
        slug: "yz450-fx-2025",
      },
    ],
  },
];
