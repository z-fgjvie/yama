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

    datos: {
      frase: string;
      precioRegular: string;
      bono: string;
      precioConBono: string;
      pdf: string;
      imagenHero: string;
      imagenFicha: string;
      imagenesMotos: {
        id: number;
        imagen: string;
      }[];
      imagenesData: {
        id: number;
        imagen: string;
      }[];
    };
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

        datos: {
          frase: "El viaje no es solo llegar, es hacerlo con estilo y actitud.",
          precioRegular: "$46,999",
          bono: "$2,999",
          precioConBono: "$44,999",
          pdf: "/pdf/fascino-2024.pdf",
          imagenHero: "/scooter/fascino/fascino-2024-hero.jpg",
          imagenFicha: "/scooter/fascino/fascino-2025-ficha.jpg",

          imagenesMotos: [
            {
              id: 1,
              imagen: "/scooter/fascino/fascino-1.jpg",
            },
            {
              id: 2,
              imagen: "/scooter/fascino/fascino-2.jpg",
            },
          ],
          imagenesData: [
            {
              id: 1,
              imagen: "/scooter/fascino/fascino-1.jpg",
            },
            {
              id: 2,
              imagen: "/scooter/fascino/fascino-2.jpg",
            },

            {
              id: 3,
              imagen: "/scooter/fascino/fas-3.jpg",
            },
            {
              id: 4,
              imagen: "/scooter/fascino/fas-4.jpg",
            },
            {
              id: 5,
              imagen: "/scooter/fascino/fas-5.jpg",
            },
            {
              id: 6,
              imagen: "/scooter/fascino/fas-6.jpg",
            },
            {
              id: 7,
              imagen: "/scooter/fascino/fas-7.jpg",
            },
          ],
        },
      },
      {
        id: 2,
        nombre: "T-max tech max",
        year: "2026",
        src: "/scooter/t-max-tech-max-2026.webp",
        precio: "$219,599",
        slug: "t-max",
        datos: {
          frase: "El siguiente nivel no se alcanza se conduce.",
          precioRegular: "$367,999",
          bono: "",
          precioConBono: "",
          pdf: "/scooter/tmaxtech/te-ficha.pdf",
          imagenHero: "/scooter/tmaxtech/te-hero.jpg",
          imagenFicha: "/scooter/tmaxtech/te-ficha.jpg",

          imagenesMotos: [
            {
              id: 1,
              imagen: "/scooter/tmaxtech/te-1.jpg",
            },
            {
              id: 2,
              imagen: "/scooter/tmaxtech/te-2.jpg",
            },
          ],
          imagenesData: [
            {
              id: 3,
              imagen: "/scooter/tmaxtech/te-3.jpg",
            },
            {
              id: 4,
              imagen: "/scooter/tmaxtech/te-4.jpg",
            },

            {
              id: 5,
              imagen: "/scooter/tmaxtech/te-5.jpg",
            },
            {
              id: 6,
              imagen: "/scooter/tmaxtech/te-6.jpg",
            },
            {
              id: 7,
              imagen: "/scooter/tmaxtech/te-7.jpg",
            },
            {
              id: 8,
              imagen: "/scooter/tmaxtech/te-8.jpg",
            },
            {
              id: 9,
              imagen: "/scooter/tmaxtech/te-9.jpg",
            },
            {
              id: 10,
              imagen: "/scooter/tmaxtech/te-10.jpg",
            },
            {
              id: 11,
              imagen: "/scooter/tmaxtech/te-11.jpg",
            },
          ],
        },
      },
      {
        id: 3,
        nombre: "N-max",
        year: "2025",
        src: "/scooter/n-max-2025.webp",
        precio: "$59,699",
        slug: "n-max",
        datos: {
          frase: "Clase y sofisticación en cada trayecto.",
          precioRegular: "$59,999",
          bono: "",
          precioConBono: "",
          pdf: "/pdf/fascino-2024.pdf",
          imagenHero: "/scooter/nmax/nmax-hero.jpg",
          imagenFicha: "/scooter/nmax/nmax-ficha.jpg",

          imagenesMotos: [
            {
              id: 1,
              imagen: "/scooter/nmax/nmax-1.png",
            },
            {
              id: 2,
              imagen: "/scooter/nmax/nmax-2.png",
            },
            {
              id: 3,
              imagen: "/scooter/nmax/nmax-3.png",
            },
          ],
          imagenesData: [
            {
              id: 1,
              imagen: "/scooter/nmax/nmax-4.png",
            },
            {
              id: 2,
              imagen: "/scooter/nmax/nmax-5.png",
            },

            {
              id: 3,
              imagen: "/scooter/nmax/nmax-6.png",
            },
            {
              id: 4,
              imagen: "/scooter/nmax/nmax-7.png",
            },
            {
              id: 5,
              imagen: "/scooter/nmax/nmax-8.png",
            },
            {
              id: 6,
              imagen: "/scooter/nmax/nmax-9.png",
            },
            {
              id: 7,
              imagen: "/scooter/nmax/nmax-10.png",
            },
            {
              id: 8,
              imagen: "/scooter/nmax/nmax-11.png",
            },
            {
              id: 9,
              imagen: "/scooter/nmax/nmax-12.png",
            },
            {
              id: 10,
              imagen: "/scooter/nmax/nmax-13.png",
            },
            {
              id: 11,
              imagen: "/scooter/nmax/nmax-14.png",
            },
            {
              id: 12,
              imagen: "/scooter/nmax/nmax-15.png",
            },
            {
              id: 13,
              imagen: "/scooter/nmax/nmax-16.png",
            },
            {
              id: 14,
              imagen: "/scooter/nmax/nmax-17.png",
            },
            {
              id: 15,
              imagen: "/scooter/nmax/nmax-18.png",
            },
            {
              id: 16,
              imagen: "/scooter/nmax/nmax-19.png",
            },
            {
              id: 17,
              imagen: "/scooter/nmax/nmax-20.png",
            },
            {
              id: 18,
              imagen: "/scooter/nmax/nmax-21.png",
            },
            {
              id: 19,
              imagen: "/scooter/nmax/nmax-22.png",
            },
            {
              id: 20,
              imagen: "/scooter/nmax/nmax-23.png",
            },
            {
              id: 21,
              imagen: "/scooter/nmax/nmax-24.png",
            },
            {
              id: 22,
              imagen: "/scooter/nmax/nmax-25.png",
            },
          ],
        },
      },
      {
        id: 4,
        nombre: "Ray zr 125 fi",
        year: "2025",
        src: "/scooter/ray-zr-125-fi-2025.webp",
        precio: "$32,699",
        slug: "ray-zr-125-fi",
        datos: {
          frase: "Recargada de energía para cada aventura en la ciudad.",
          precioRegular: "$32,699",
          bono: "",
          precioConBono: "",
          pdf: "/pdf/fascino-2024.pdf",
          imagenHero: "/scooter/rayzr/rayzr-hero.jpg",
          imagenFicha: "/scooter/rayzr/rayzr-ficha.jpg",

          imagenesMotos: [
            {
              id: 1,
              imagen: "/scooter/rayzr/rayzr-1.png",
            },
            {
              id: 2,
              imagen: "/scooter/rayzr/rayzr-2.png",
            },
            {
              id: 3,
              imagen: "/scooter/rayzr/rayzr-3.png",
            },
          ],
          imagenesData: [
            {
              id: 1,
              imagen: "/scooter/rayzr/rayzr-1.png",
            },
            {
              id: 2,
              imagen: "/scooter/rayzr/rayzr-2.png",
            },
            {
              id: 3,
              imagen: "/scooter/rayzr/rayzr-3.png",
            },
          ],
        },
      },
      {
        id: 5,
        nombre: "Ray zr",
        year: "2024",
        src: "/scooter/ray-zr-2024.webp",
        precio: "$23,999",
        slug: "ray-zr",
        datos: {
          frase:
            "RAY ZR: Dinámica, deportiva y perfecta para tu estilo atrevido.",
          precioRegular: "$39,999",
          bono: "$2,000",
          precioConBono: "$37,999",
          pdf: "/pdf/fascino-2024.pdf",
          imagenHero: "/scooter/ray/ray-hero.jpg",
          imagenFicha: "/scooter/ray/ray-ficha.jpg",

          imagenesMotos: [
            {
              id: 1,
              imagen: "/scooter/ray/ray-1.png",
            },
            {
              id: 2,
              imagen: "/scooter/ray/ray-2.png",
            },
            {
              id: 3,
              imagen: "/scooter/ray/ray-3.png",
            },
          ],
          imagenesData: [
            {
              id: 1,
              imagen: "/scooter/ray/ray-4.jpg",
            },
            {
              id: 2,
              imagen: "/scooter/ray/ray-5.jpg",
            },

            {
              id: 3,
              imagen: "/scooter/ray/ray-6.jpg",
            },
            {
              id: 4,
              imagen: "/scooter/ray/ray-7.jpg",
            },
            {
              id: 5,
              imagen: "/scooter/ray/ray-8.jpg",
            },
            {
              id: 6,
              imagen: "/scooter/ray/ray-9.jpg",
            },
            {
              id: 7,
              imagen: "/scooter/ray/ray-10.jpg",
            },
          ],
        },
      },
      {
        id: 6,
        nombre: "X-max",
        year: "2025",
        src: "/scooter/x-max-2025.webp",
        precio: "$97,199",
        slug: "x-max",
        datos: {
          frase: "Gran tamaño, máxima tecnología. Descubre la nueva XMAX.",
          precioRegular: "$46,999",
          bono: "",
          precioConBono: "",
          pdf: "/pdf/fascino-2024.pdf",
          imagenHero: "/scooter/xmax/xmax-hero.jpg",
          imagenFicha: "/scooter/xmax/xmax-ficha.jpg",

          imagenesMotos: [
            {
              id: 1,
              imagen: "/scooter/xmax/xmax-1.png",
            },
            {
              id: 2,
              imagen: "/scooter/xmax/xmax-2.png",
            },
            {
              id: 3,
              imagen: "/scooter/xmax/xmax-3.png",
            },
          ],
          imagenesData: [
            {
              id: 1,
              imagen: "/scooter/xmax/xmax-4.jpg",
            },
            {
              id: 2,
              imagen: "/scooter/xmax/xmax-5.jpg",
            },

            {
              id: 3,
              imagen: "/scooter/xmax/xmax-6.jpg",
            },
            {
              id: 4,
              imagen: "/scooter/xmax/xmax-7.jpg",
            },
            {
              id: 5,
              imagen: "/scooter/xmax/xmax-8.jpg",
            },
            {
              id: 6,
              imagen: "/scooter/xmax/xmax-9.jpg",
            },
            {
              id: 7,
              imagen: "/scooter/xmax/xmax-10.jpg",
            },
          ],
        },
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
        datos: {
          frase: "Versatilidad sobre ruedas para cada día y cada aventura",
          precioRegular: "$46,999",
          bono: "",
          precioConBono: "",
          pdf: "/pdf/fascino-2024.pdf",
          imagenHero: "/trabajo/yb/yb-hero.jpg",
          imagenFicha: "/trabajo/yb/yb-ficha.jpg",

          imagenesMotos: [
            {
              id: 1,
              imagen: "/trabajo/yb/yb-1.png",
            },
            {
              id: 2,
              imagen: "/trabajo/yb/yb-2.png",
            },
          ],
          imagenesData: [
            {
              id: 1,
              imagen: "/trabajo/yb/yb-3b.jpg",
            },
            {
              id: 2,
              imagen: "/trabajo/yb/yb-4.jpg",
            },

            {
              id: 3,
              imagen: "/trabajo/yb/yb-5.jpg",
            },
            {
              id: 4,
              imagen: "/trabajo/yb/yb-6.jpg",
            },
            {
              id: 5,
              imagen: "/trabajo/yb/yb-7.jpg",
            },
            {
              id: 6,
              imagen: "/trabajo/yb/yb-8.jpg",
            },
            {
              id: 7,
              imagen: "/trabajo/yb/yb-9.jpg",
            },
            {
              id: 8,
              imagen: "/trabajo/yb/yb-10.jpg",
            },
            {
              id: 9,
              imagen: "/trabajo/yb/yb-11.jpg",
            },
            {
              id: 10,
              imagen: "/trabajo/yb/yb-12.jpg",
            },
            {
              id: 11,
              imagen: "/trabajo/yb/yb-13.jpg",
            },
          ],
        },
      },
      {
        id: 2,
        nombre: "YBR125C Express",
        year: "2025",
        src: "/trabajo/ybr-express-2025.webp",
        precio: "$23,399",
        slug: "t-max",
        datos: {
          frase: "El viaje no es solo llegar, es hacerlo con estilo y actitud.",
          precioRegular: "$38,999",
          bono: "$2,000",
          precioConBono: "$36,999",
          pdf: "/pdf/fascino-2024.pdf",
          imagenHero: "/trabajo/ybex/ybex-hero.jpg",
          imagenFicha: "/trabajo/ybex/ybex-ficha.jpg",

          imagenesMotos: [
            {
              id: 1,
              imagen: "/trabajo/ybex/ybex-1.jpg",
            },
            {
              id: 2,
              imagen: "/trabajo/ybex/ybex-2.jpg",
            },
          ],
          imagenesData: [
            {
              id: 1,
              imagen: "/trabajo/ybex/ybex-3b.jpg",
            },
            {
              id: 2,
              imagen: "/trabajo/ybex/ybex-4.jpg",
            },

            {
              id: 3,
              imagen: "/trabajo/ybex/ybex-5.jpg",
            },
            {
              id: 4,
              imagen: "/trabajo/ybex/ybex-6.jpg",
            },
            {
              id: 5,
              imagen: "/trabajo/ybex/ybex-7.jpg",
            },
            {
              id: 6,
              imagen: "/trabajo/ybex/ybex-8.jpg",
            },
            {
              id: 7,
              imagen: "/trabajo/ybex/ybex-9.jpg",
            },
            {
              id: 8,
              imagen: "/trabajo/ybex/ybex-10.jpg",
            },
            {
              id: 9,
              imagen: "/trabajo/ybex/ybex-11.jpg",
            },
          ],
        },
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
        datos: {
          frase: "Lord of the Streets",
          precioRegular: "$46,999",
          bono: "",
          precioConBono: "",
          pdf: "/pdf/fascino-2024.pdf",
          imagenHero: "/street/fzs/fzs-hero.jpg",
          imagenFicha: "/street/fzs/fzs-ficha.jpg",

          imagenesMotos: [
            {
              id: 1,
              imagen: "/street/fzs/fzs-1.png",
            },
            {
              id: 2,
              imagen: "/street/fzs/fzs-2.png",
            },
            {
              id: 3,
              imagen: "/street/fzs/fzs-3.png",
            },
            {
              id: 4,
              imagen: "/street/fzs/fzs-4.png",
            },
            {
              id: 5,
              imagen: "/street/fzs/fzs-5.png",
            },
          ],
          imagenesData: [
            {
              id: 1,
              imagen: "/street/fzs/fzs-6b.jpg",
            },
            {
              id: 2,
              imagen: "/street/fzs/fzs-7.jpg",
            },

            {
              id: 3,
              imagen: "/street/fzs/fzs-8.jpg",
            },
            {
              id: 4,
              imagen: "/street/fzs/fzs-9.jpg",
            },
            {
              id: 5,
              imagen: "/street/fzs/fzs-10.jpg",
            },
            {
              id: 6,
              imagen: "/street/fzs/fzs-9.jpg",
            },
            {
              id: 7,
              imagen: "/street/fzs/fzs-10.jpg",
            },
            {
              id: 8,
              imagen: "/street/fzs/fzs-11.jpg",
            },
            {
              id: 9,
              imagen: "/street/fzs/fzs-12.jpg",
            },
            {
              id: 10,
              imagen: "/street/fzs/fzs-13.jpg",
            },
          ],
        },
      },
      {
        id: 2,
        nombre: "FZ 3.0 FI",
        year: "2024",
        src: "/street/f-30-fi-2025.webp",
        precio: "$37,799",
        slug: "f-30-fi-2025",
        datos: {
          frase: "Lord of the Streets",
          precioRegular: "$46,999",
          bono: "",
          precioConBono: "",
          pdf: "/pdf/fascino-2024.pdf",
          imagenHero: "/street/fz/fz-hero.png",
          imagenFicha: "/street/fz/fz-ficha.jpg",

          imagenesMotos: [
            {
              id: 1,
              imagen: "/street/fz/fz-1.png",
            },
            {
              id: 2,
              imagen: "/street/fz/fz-2.png",
            },
          ],
          imagenesData: [
            {
              id: 1,
              imagen: "/street/fz/fz-1.png",
            },
            {
              id: 2,
              imagen: "/street/fz/fz-4.jpg",
            },

            {
              id: 3,
              imagen: "/street/fz/fz-2.png",
            },

            {
              id: 4,
              imagen: "/street/fz/fz-3.jpg",
            },
          ],
        },
      },
      {
        id: 3,
        nombre: "FZ-S 4.0 FI ABS",
        year: "2025",
        src: "/street/fz-40-fi-abs-2025.webp",
        precio: "$40,799",
        slug: "fz-40-fi-abs-2025",
        datos: {
          frase: "Más que agresiva, ¡versátil en cada kilómetro! FZ-S Ver 4.0",
          precioRegular: "$46,999",
          bono: "",
          precioConBono: "",
          pdf: "/pdf/fascino-2024.pdf",
          imagenHero: "/street/fzab/fzab-hero.jpg",
          imagenFicha: "/street/fzab/fzab-ficha.jpg",

          imagenesMotos: [
            {
              id: 1,
              imagen: "/street/fzab/fzab-1.png",
            },
            {
              id: 2,
              imagen: "/street/fzab/fzab-2.png",
            },
            {
              id: 3,
              imagen: "/street/fzab/fzab-3.png",
            },
            {
              id: 4,
              imagen: "/street/fzab/fzab-4.png",
            },
          ],
          imagenesData: [
            {
              id: 1,
              imagen: "/street/fzab/fzab-5b.jpg",
            },
            {
              id: 2,
              imagen: "/street/fzab/fzab-6.jpg",
            },

            {
              id: 3,
              imagen: "/street/fzab/fzab-7.jpg",
            },
            {
              id: 4,
              imagen: "/street/fzab/fzab-8.jpg",
            },
            {
              id: 5,
              imagen: "/street/fzab/fzab-9.jpg",
            },
            {
              id: 6,
              imagen: "/street/fzab/fzab-10.jpg",
            },
            {
              id: 7,
              imagen: "/street/fzab/fzab-11.jpg",
            },
          ],
        },
      },
      {
        id: 4,
        nombre: "FZ25 ABS CONNECTED",
        year: "2025",
        src: "/street/fz25-connected-2025.webp",
        precio: "$53,999",
        slug: "fz25-connected-2025",
        datos: {
          frase: "Tecnología, potencia y conexión sin límites.",
          precioRegular: "$46,999",
          bono: "",
          precioConBono: "",
          pdf: "/pdf/fascino-2024.pdf",
          imagenHero: "/street/fzcon/fzcon-hero.jpg",
          imagenFicha: "/street/fzcon/fzcon-ficha.jpg",

          imagenesMotos: [
            {
              id: 1,
              imagen: "/street/fzcon/fzcon-1.png",
            },
            {
              id: 2,
              imagen: "/street/fzcon/fzcon-2.png",
            },
            {
              id: 3,
              imagen: "/street/fzcon/fzcon-3.png",
            },
          ],
          imagenesData: [
            {
              id: 1,
              imagen: "/street/fzcon/fzcon-1.png",
            },
            {
              id: 2,
              imagen: "/street/fzcon/fzcon-2.png",
            },

            {
              id: 3,
              imagen: "/street/fzcon/fzcon-3.png",
            },
          ],
        },
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
        src: "/deportivas/mt-15-2026.webp",
        precio: "$58,799",
        slug: "mt-15-2025",
        datos: {
          frase:
            "Despierta tu audacia con la MT-15. ¡La oscuridad nunca fue tan divertida!",
          precioRegular: "$46,999",
          bono: "",
          precioConBono: "",
          pdf: "/pdf/fascino-2024.pdf",
          imagenHero: "/deportivas/mtq/mtq-hero.jpg",
          imagenFicha: "/deportivas/mtq/mtq-ficha.jpg",

          imagenesMotos: [
            {
              id: 1,
              imagen: "/deportivas/mtq/mtq-1.png",
            },
            {
              id: 2,
              imagen: "/deportivas/mtq/mtq-2.png",
            },
            {
              id: 3,
              imagen: "/deportivas/mtq/mtq-3.png",
            },
          ],
          imagenesData: [
            {
              id: 1,
              imagen: "/deportivas/mtq/mtq-4b.jpg",
            },
            {
              id: 2,
              imagen: "/deportivas/mtq/mtq-5.jpg",
            },

            {
              id: 3,
              imagen: "/deportivas/mtq/mtq-6.jpg",
            },
            {
              id: 4,
              imagen: "/deportivas/mtq/mtq-7.jpg",
            },
            {
              id: 5,
              imagen: "/deportivas/mtq/mtq-8.jpg",
            },
          ],
        },
      },
      {
        id: 2,
        nombre: "MT-03 ABS",
        year: "2026",
        src: "/deportivas/mt-003.jpg",
        precio: "$93,599",
        slug: "mt-03-abs-2026",
        datos: {
          frase: "Acelera en la oscuridad con la poderosa MT-03",
          precioRegular: "$46,999",
          bono: "",
          precioConBono: "",
          pdf: "/pdf/fascino-2024.pdf",
          imagenHero: "/deportivas/mtt/mtt-hero.jpg",
          imagenFicha: "/deportivas/mtt/mtt-ficha.jpg",

          imagenesMotos: [
            {
              id: 1,
              imagen: "/deportivas/mtt/mtt-1.jpg",
            },
            {
              id: 2,
              imagen: "/deportivas/mtt/mtt-2.jpg",
            },
            {
              id: 3,
              imagen: "/deportivas/mtt/mtt-3.jpg",
            },
          ],
          imagenesData: [
            {
              id: 1,
              imagen: "/deportivas/mtt/mtt-4b.jpg",
            },
            {
              id: 2,
              imagen: "/deportivas/mtt/mtt-5.jpg",
            },

            {
              id: 3,
              imagen: "/deportivas/mtt/mtt-6.jpg",
            },
            {
              id: 4,
              imagen: "/deportivas/mtt/mtt-7.jpg",
            },
            {
              id: 5,
              imagen: "/deportivas/mtt/mtt-8.jpg",
            },
            {
              id: 6,
              imagen: "/deportivas/mtt/mtt-9.jpg",
            },
            {
              id: 7,
              imagen: "/deportivas/mtt/mtt-10.jpg",
            },
            {
              id: 8,
              imagen: "/deportivas/mtt/mtt-11.jpg",
            },
            {
              id: 9,
              imagen: "/deportivas/mtt/mtt-12.jpg",
            },
            {
              id: 10,
              imagen: "/deportivas/mtt/mtt-13.jpg",
            },
            {
              id: 11,
              imagen: "/deportivas/mtt/mtt-14.jpg",
            },
          ],
        },
      },
      {
        id: 3,
        nombre: "MT-07",
        year: "2026",
        src: "/deportivas/mt-03-2026.webp",
        precio: "$155,999",
        slug: "mt-03-2026",
        datos: {
          frase: "Experimenta el nuevo amanecer del lado obscuro ",
          precioRegular: "$46,999",
          bono: "",
          precioConBono: "",
          pdf: "/pdf/fascino-2024.pdf",
          imagenHero: "/deportivas/mts/mts-hero.jpg",
          imagenFicha: "/deportivas/mts/mts-ficha.jpg",

          imagenesMotos: [
            {
              id: 1,
              imagen: "/deportivas/mts/mts-1.png",
            },
            {
              id: 2,
              imagen: "/deportivas/mts/mts-2.png",
            },
            {
              id: 2,
              imagen: "/deportivas/mts/mts-3.png",
            },
          ],
          imagenesData: [
            {
              id: 1,
              imagen: "/deportivas/mts/mts-4b.png",
            },
            {
              id: 2,
              imagen: "/deportivas/mts/mts-5.jpg",
            },

            {
              id: 3,
              imagen: "/deportivas/mts/mts-6.jpg",
            },
            {
              id: 4,
              imagen: "/deportivas/mts/mts-7.jpg",
            },
            {
              id: 5,
              imagen: "/deportivas/mts/mts-8.jpg",
            },
            {
              id: 6,
              imagen: "/deportivas/mts/mts-9.jpg",
            },
            {
              id: 7,
              imagen: "/deportivas/mts/mts-10.jpg",
            },
            {
              id: 8,
              imagen: "/deportivas/mts/mts-11.jpg",
            },
            {
              id: 9,
              imagen: "/deportivas/mts/mts-12.jpg",
            },
          ],
        },
      },
      {
        id: 4,
        nombre: "MT-09",
        year: "2025",
        src: "/deportivas/mt-09-2025.webp",
        precio: "$182,999",
        slug: "mt-09-2025",
        datos: {
          frase: "Domina la noche con estilo y potencia",
          precioRegular: "$46,999",
          bono: "",
          precioConBono: "",
          pdf: "/pdf/fascino-2024.pdf",
          imagenHero: "/deportivas/mtn/mtn-hero.jpg",
          imagenFicha: "/deportivas/mtn/mtn-ficha.jpg",

          imagenesMotos: [
            {
              id: 1,
              imagen: "/deportivas/mtn/mtn-1.jpg",
            },
            {
              id: 2,
              imagen: "/deportivas/mtn/mtn-2.jpg",
            },
            {
              id: 3,
              imagen: "/deportivas/mtn/mtn-3.jpg",
            },
          ],
          imagenesData: [
            {
              id: 1,
              imagen: "/deportivas/mtn/mtn-4b.jpg",
            },
            {
              id: 2,
              imagen: "/deportivas/mtn/mtn-5.jpg",
            },

            {
              id: 3,
              imagen: "/deportivas/mtn/mtn-6.jpg",
            },
            {
              id: 4,
              imagen: "/deportivas/mtn/mtn-7.jpg",
            },
            {
              id: 5,
              imagen: "/deportivas/mtn/mtn-8.jpg",
            },
            {
              id: 6,
              imagen: "/deportivas/mtn/mtn-9.jpg",
            },
            {
              id: 7,
              imagen: "/deportivas/mtn/mtn-10.jpg",
            },
            {
              id: 8,
              imagen: "/deportivas/mtn/mtn-11.jpg",
            },
            {
              id: 9,
              imagen: "/deportivas/mtn/mtn-12.jpg",
            },
          ],
        },
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
        datos: {
          frase: "Desata tu pasión con la Adrenalina Renovada",
          precioRegular: "$101,999",
          bono: "$12,000",
          precioConBono: "$89,999",
          pdf: "/pdf/fascino-2024.pdf",
          imagenHero: "/superdeportivas/yzv/yzv-hero.jpg",
          imagenFicha: "/superdeportivas/yzv/yzv-ficha.jpg",

          imagenesMotos: [
            {
              id: 1,
              imagen: "/superdeportivas/yzv/yzv-1.jpg",
            },
            {
              id: 2,
              imagen: "/superdeportivas/yzv/yzv-2.jpg",
            },
          ],
          imagenesData: [
            {
              id: 1,
              imagen: "/superdeportivas/yzv/yzv-1.jpg",
            },
            {
              id: 2,
              imagen: "/superdeportivas/yzv/yzv-2.jpg",
            },

            {
              id: 3,
              imagen: "/superdeportivas/yzv/yzv-1.jpg",
            },
            {
              id: 4,
              imagen: "/superdeportivas/yzv/yzv-2.jpg",
            },
          ],
        },
      },
      {
        id: 2,
        nombre: "YZF-R7",
        year: "2025",
        src: "/superdeportivas/yzfsiete.jpg",
        precio: "$154,799",
        slug: "yzf-r7-2025",
        datos: {
          frase: "Cada curva, un suspiro de libertad.",
          precioRegular: "$274,999",
          bono: "$15,000",
          precioConBono: "$259,999",
          pdf: "/pdf/fascino-2024.pdf",
          imagenHero: "/superdeportivas/yzs/yzs-hero.jpg",
          imagenFicha: "/superdeportivas/yzs/yzs-ficha.jpg",

          imagenesMotos: [
            {
              id: 1,
              imagen: "/superdeportivas/yzs/yzs-1.png",
            },
            {
              id: 2,
              imagen: "/superdeportivas/yzs/yzs-2.png",
            },
          ],
          imagenesData: [
            {
              id: 1,
              imagen: "/superdeportivas/yzs/yzs-3b.jpg",
            },
            {
              id: 2,
              imagen: "/superdeportivas/yzs/yzs-4.jpg",
            },

            {
              id: 3,
              imagen: "/superdeportivas/yzs/yzs-5.jpg",
            },
            {
              id: 4,
              imagen: "/superdeportivas/yzs/yzs-6.jpg",
            },
            {
              id: 5,
              imagen: "/superdeportivas/yzs/yzs-7.jpg",
            },
            {
              id: 6,
              imagen: "/superdeportivas/yzs/yzs-8.jpg",
            },
            {
              id: 7,
              imagen: "/superdeportivas/yzs/yzs-9.jpg",
            },
            {
              id: 8,
              imagen: "/superdeportivas/yzs/yzs-10.jpg",
            },
            {
              id: 9,
              imagen: "/superdeportivas/yzs/yzs-11.jpg",
            },
            {
              id: 10,
              imagen: "/superdeportivas/yzs/yzs-12.jpg",
            },
          ],
        },
      },
      {
        id: 3,
        nombre: "YZF-R9",
        year: "2025",
        src: "/superdeportivas/yzf-r9-2025.webp",
        precio: "$191,999",
        slug: "yzf-r9-2025",
        datos: {
          frase: "La nueva era Supersport",
          precioRegular: "$349,999",
          bono: "$30,000",
          precioConBono: "$319,999",
          pdf: "/pdf/fascino-2024.pdf",
          imagenHero: "/superdeportivas/yzn/yzn-hero.jpg",
          imagenFicha: "/superdeportivas/yzn/yzn-ficha.jpg",

          imagenesMotos: [
            {
              id: 1,
              imagen: "/superdeportivas/yzn/yzn-1.png",
            },
            {
              id: 2,
              imagen: "/superdeportivas/yzn/yzn-2.png",
            },
          ],
          imagenesData: [
            {
              id: 1,
              imagen: "/superdeportivas/yzn/yzn-3b.png",
            },
            {
              id: 2,
              imagen: "/superdeportivas/yzn/yzn-4.png",
            },

            {
              id: 3,
              imagen: "/superdeportivas/yzn/yzn-5.png",
            },
            {
              id: 4,
              imagen: "/superdeportivas/yzn/yzn-6.png",
            },
            {
              id: 5,
              imagen: "/superdeportivas/yzn/yzn-7.png",
            },
            {
              id: 6,
              imagen: "/superdeportivas/yzn/yzn-8.png",
            },
            {
              id: 7,
              imagen: "/superdeportivas/yzn/yzn-9.png",
            },
            {
              id: 8,
              imagen: "/superdeportivas/yzn/yzn-10.png",
            },
            {
              id: 9,
              imagen: "/superdeportivas/yzn/yzn-11.png",
            },
            {
              id: 10,
              imagen: "/superdeportivas/yzn/yzn-12.png",
            },
            {
              id: 11,
              imagen: "/superdeportivas/yzn/yzn-13.png",
            },
          ],
        },
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
        datos: {
          frase: "Desafía cualquier terreno, conquista cada aventura.",
          precioRegular: "$48,999",
          bono: "$2,000",
          precioConBono: "$46,999",
          pdf: "/pdf/fascino-2024.pdf",
          imagenHero: "/dobleproposito/ybg/ybg-hero.jpg",
          imagenFicha: "/dobleproposito/ybg/ybg-ficha.jpg",

          imagenesMotos: [
            {
              id: 1,
              imagen: "/dobleproposito/ybg/ybg-1.jpg",
            },
            {
              id: 2,
              imagen: "/dobleproposito/ybg/ybg-2.jpg",
            },
          ],
          imagenesData: [
            {
              id: 1,
              imagen: "/dobleproposito/ybg/ybg-1.jpg",
            },
            {
              id: 2,
              imagen: "/dobleproposito/ybg/ybg-2.jpg",
            },

            {
              id: 3,
              imagen: "/dobleproposito/ybg/ybg-1.jpg",
            },
            {
              id: 4,
              imagen: "/dobleproposito/ybg/ybg-2.jpg",
            },
          ],
        },
      },
      {
        id: 2,
        nombre: "XTZ 125 E",
        year: "2026",
        src: "/dobleproposito/xtz-125e-2025.webp",
        precio: "$29,099",
        slug: "t-max",
        datos: {
          frase: "Versatilidad y potencia para cada ruta",
          precioRegular: "$50,499",
          bono: "$1,500",
          precioConBono: "$48,999",
          pdf: "/pdf/fascino-2024.pdf",
          imagenHero: "/dobleproposito/xts/xts-hero.jpg",
          imagenFicha: "/dobleproposito/xts/xts-ficha.jpg",

          imagenesMotos: [
            {
              id: 1,
              imagen: "/dobleproposito/xts/xts-1.png",
            },
            {
              id: 2,
              imagen: "/dobleproposito/xts/xts-2.png",
            },
            {
              id: 3,
              imagen: "/dobleproposito/xts/xts-3.png",
            },
          ],
          imagenesData: [
            {
              id: 1,
              imagen: "/dobleproposito/xts/xts-1.png",
            },
            {
              id: 2,
              imagen: "/dobleproposito/xts/xts-2.png",
            },
            {
              id: 3,
              imagen: "/dobleproposito/xts/xts-3.png",
            },
            {
              id: 4,
              imagen: "/dobleproposito/xts/xts-1.png",
            },
            {
              id: 5,
              imagen: "/dobleproposito/xts/xts-2.png",
            },
            {
              id: 6,
              imagen: "/dobleproposito/xts/xts-3.png",
            },
          ],
        },
      },
      {
        id: 3,
        nombre: "SUPER TÉNÉRÉ 1200ZE",
        year: "2024",
        src: "/dobleproposito/super-tenere-1200ze-2024.webp",
        precio: "$251,999",
        slug: "super-tenere-1200ze-2024",
        datos: {
          frase: "Domina cualquier terreno, conquista cada horizonte",
          precioRegular: "$46,999",
          bono: "",
          precioConBono: "",
          pdf: "/pdf/fascino-2024.pdf",
          imagenHero: "/dobleproposito/tenere/tenere-hero.jpg",
          imagenFicha: "/dobleproposito/tenere/tenere-ficha.jpg",

          imagenesMotos: [
            {
              id: 1,
              imagen: "/dobleproposito/tenere/tenere-1.png",
            },
            {
              id: 2,
              imagen: "/dobleproposito/tenere/tenere-2.jpg",
            },
            {
              id: 3,
              imagen: "/dobleproposito/tenere/tenere-3.jpg",
            },
          ],
          imagenesData: [
            {
              id: 1,
              imagen: "/dobleproposito/tenere/tenere-2.jpg",
            },
            {
              id: 2,
              imagen: "/dobleproposito/tenere/tenere-3.jpg",
            },

            {
              id: 3,
              imagen: "/dobleproposito/tenere/tenere-4.jpg",
            },
            {
              id: 4,
              imagen: "/dobleproposito/tenere/tenere-5.jpg",
            },
            {
              id: 5,
              imagen: "/dobleproposito/tenere/tenere-6.jpg",
            },
            {
              id: 6,
              imagen: "/dobleproposito/tenere/tenere-7.jpg",
            },
            {
              id: 7,
              imagen: "/dobleproposito/tenere/tenere-8.jpg",
            },
            {
              id: 8,
              imagen: "/dobleproposito/tenere/tenere-9.jpg",
            },
            {
              id: 9,
              imagen: "/dobleproposito/tenere/tenere-10.jpg",
            },
          ],
        },
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
        nombre: "YZ 250 F 70 Aniversario",
        year: "2026",
        src: "/offroad/yz-450-f-70-aniversario.png",
        precio: "$229,999",
        slug: "yz-250-f-70-aniversario",
        datos: {
          frase: "Conduce como un icono",
          precioRegular: "$229,999",
          bono: "",
          precioConBono: "",
          pdf: "/pdf/fascino-2024.pdf",
          imagenHero: "/offroad/yzani/yzani-hero.jpg",
          imagenFicha: "/offroad/yzani/yzani-ficha.jpg",

          imagenesMotos: [
            {
              id: 1,
              imagen: "/offroad/yzani/yzani-1.png",
            },
            {
              id: 2,
              imagen: "/offroad/yzani/yzani-2.png",
            },
            {
              id: 3,
              imagen: "/offroad/yzani/yzani-3.png",
            },
          ],
          imagenesData: [
            {
              id: 1,
              imagen: "/offroad/yzani/yzani-2.png",
            },
            {
              id: 2,
              imagen: "/offroad/yzani/yzani-3.png",
            },

            {
              id: 3,
              imagen: "/offroad/yzani/yzani-4.png",
            },
            {
              id: 4,
              imagen: "/offroad/yzani/yzani-5.png",
            },
            {
              id: 5,
              imagen: "/offroad/yzani/yzani-6.png",
            },
            {
              id: 6,
              imagen: "/offroad/yzani/yzani-7.png",
            },
          ],
        },
      },

      {
        id: 2,
        nombre: "YZ450FX",
        year: "2025",
        src: "/offroad/yz450fx.jpg",
        precio: "$209,999",
        slug: "yz450-fx-2025",
        datos: {
          frase: "Potencia pura para dominar la competencia",
          precioRegular: "$229,999",
          bono: "$20,000",
          precioConBono: "$209,999",
          pdf: "/pdf/fascino-2024.pdf",
          imagenHero: "/offroad/yzf/yzf-hero.jpg",
          imagenFicha: "/offroad/yzf/yzf-ficha.jpg",

          imagenesMotos: [
            {
              id: 1,
              imagen: "/offroad/yzf/yzf-1.jpg",
            },
            {
              id: 2,
              imagen: "/offroad/yzf/yzf-2b.jpg",
            },
            {
              id: 3,
              imagen: "/offroad/yzf/yzf-3.jpg",
            },
          ],
          imagenesData: [
            {
              id: 1,
              imagen: "/offroad/yzf/yzf-4b.jpg",
            },
            {
              id: 2,
              imagen: "/offroad/yzf/yzf-5.jpg",
            },

            {
              id: 3,
              imagen: "/offroad/yzf/yzf-6.jpg",
            },
          ],
        },
      },
    ],
  },

  {
    slug: "nuevos-lanzamientos",
    nombre: "Nuevos Lanzamientos",
    banner: "/nuevos/nuevos-lanzamientos-banner.jpg",
    imagenes: [
      {
        id: 1,
        nombre: "XSR 900 GP",
        year: "2026",
        src: "/nuevos/xsr-gp.jpg",
        precio: "$229,999",
        slug: "xsr-900-gp",
        datos: {
          frase: "Forja tu leyenda en cada curva ",
          precioRegular: "$339,999",
          bono: "$40,000",
          precioConBono: "$299,999",
          pdf: "/pdf/fascino-2024.pdf",
          imagenHero: "/nuevos/nuevos-lanzamientos-banner.jpg",
          imagenFicha: "/nuevos/gp/gp-ficha.jpg",

          imagenesMotos: [
            {
              id: 1,
              imagen: "/nuevos/gp/gp-1.jpg",
            },
            {
              id: 2,
              imagen: "/nuevos/gp/gp-2.jpg",
            },
            {
              id: 3,
              imagen: "/nuevos/gp/gp-3.jpg",
            },
            {
              id: 4,
              imagen: "/nuevos/gp/gp-5.jpg",
            },
          ],
          imagenesData: [
            {
              id: 1,
              imagen: "/nuevos/gp/gp-6.jpg",
            },
            {
              id: 2,
              imagen: "/nuevos/gp/gp-7.jpg",
            },

            {
              id: 3,
              imagen: "/nuevos/gp/gp-8.jpg",
            },
            {
              id: 4,
              imagen: "/nuevos/gp/gp-9.jpg",
            },
          ],
        },
      },

      {
        id: 2,
        nombre: "Tracer 9 GT",
        year: "2025",
        src: "/nuevos/tracer.jpg",
        precio: "$ 399,999",
        slug: "tracer-9-gt",
        datos: {
          frase: "Define tu destino ",
          precioRegular: "$ 399,999",
          bono: "",
          precioConBono: "",
          pdf: "/pdf/fascino-2024.pdf",
          imagenHero: "/nuevos/tracer/tracer-hero.jpg",
          imagenFicha: "/nuevos/tracer/tracer-ficha.jpg",

          imagenesMotos: [
            {
              id: 1,
              imagen: "/nuevos/tracer/tracer-1.png",
            },
            {
              id: 2,
              imagen: "/nuevos/tracer/tracer-2.png",
            },
          ],
          imagenesData: [
            {
              id: 1,
              imagen: "/nuevos/tracer/tracer-3b.jpg",
            },
            {
              id: 2,
              imagen: "/nuevos/tracer/tracer-4.jpg",
            },

            {
              id: 3,
              imagen: "/nuevos/tracer/tracer-5.jpg",
            },
            {
              id: 4,
              imagen: "/nuevos/tracer/tracer-6.jpg",
            },
            {
              id: 5,
              imagen: "/nuevos/tracer/tracer-7.jpg",
            },
            {
              id: 6,
              imagen: "/nuevos/tracer/tracer-8.jpg",
            },
            {
              id: 7,
              imagen: "/nuevos/tracer/tracer-9.jpg",
            },
            {
              id: 8,
              imagen: "/nuevos/tracer/tracer-10.jpg",
            },
            {
              id: 9,
              imagen: "/nuevos/tracer/tracer-11.jpg",
            },
          ],
        },
      },
    ],
  },
];
