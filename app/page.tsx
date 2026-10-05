import AyudaYamaha from "@/components/AyudaYamaha";
import BienvenidoClub from "@/components/BienvenidoClub";
import ComunidadYamaha from "@/components/ComunidadYamaha";
import ExploraYamaha from "@/components/ExploraYamaha";
import FooterYamaha from "@/components/FooterYamaha";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Liquidacion from "../components/Liquidacion";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ExploraYamaha />
      <Liquidacion />
      <BienvenidoClub />
      <ComunidadYamaha />
      <AyudaYamaha />
      <FooterYamaha />
    </>
  );
}
