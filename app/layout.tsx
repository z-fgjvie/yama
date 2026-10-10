import type { Metadata } from "next";
import localfont from "next/font/local";
import "./globals.css";

const barlowRegular = localfont({
  src: "./fonts/Barlow-Regular.ttf",
  variable: "--font-barlow-regular",
  display: "swap",
});

const barlowMedium = localfont({
  src: "./fonts/Barlow-Medium.ttf",
  variable: "--font-barlow-medium",
  display: "swap",
});

const barlowSemiBold = localfont({
  src: "./fonts/Barlow-SemiBold.ttf",
  variable: "--font-barlow-semibold",
  display: "swap",
});

const barlowBold = localfont({
  src: "./fonts/BarlowCondensed-Bold.ttf",
  variable: "--font-barlow-bold",
  display: "swap",
});

const barlowExtraBold = localfont({
  src: "./fonts/BarlowCondensed-ExtraBold.ttf",
  variable: "--font-barlow-extrabold",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yamaha Liquidaciones | Ofertas en Motos y ATV",
  description:
    "Descubre Yamaha Liquidaciones: ofertas especiales en motos, scooters y cuatrimotos ATV. Conoce los modelos disponibles, consulta precios y encuentra tu próxima Yamaha.",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?=4"],
  },

  openGraph: {
    title: "Yamaha Liquidaciones",
    description:
      "Descubre Yamaha Liquidaciones: ofertas especiales en motos, scooters y cuatrimotos ATV. Conoce los modelos disponibles, consulta precios y encuentra tu próxima Yamaha.",
    url: "https://yamaha-liquidaciones.vercel.app",
    siteName: "Yamaha Liquidaciones",
    images: [
      {
        url: "https://yamaha-liquidaciones.vercel.app/og-icon-yamaha.webp",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={` ${barlowRegular.variable} ${barlowMedium.variable} ${barlowSemiBold.variable} ${barlowBold.variable} ${barlowExtraBold.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
