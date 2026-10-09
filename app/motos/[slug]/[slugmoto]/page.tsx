import CarruselData from "@/components/CarruselData";
import CarruselMotos from "@/components/CarruselMoto";
import FooterYamaha from "@/components/FooterYamaha";
import Header from "@/components/Header";
import SeccionPrecios from "@/components/SeccionPrecios";
import { dataMotos } from "@/data/dataMotos";

type Props = {
  params: Promise<{
    slug: string;
    slugmoto: string;
  }>;
};

export default async function PageSlugMoto({ params }: Props) {
  const { slug, slugmoto } = await params;

  const categoria = dataMotos.find((item) => item.slug === slug);

  const moto = categoria?.imagenes.find((item) => item.slug === slugmoto);

  return (
    <>
      <Header />

      <section
        className={` bg-no-repeat bg-cover bg-top h-120 md:h-132  flex items-end relative`}
        style={{ backgroundImage: `url(${moto?.datos.imagenHero})` }}
      >
        <div className="flex flex-col gap-2  ml-12 md:ml-24 mb-14">
          <h1 className="text-5xl md:text-[4.375rem]  barlow-extrabold uppercase text-white">
            {moto?.nombre}
          </h1>
          <p className="text-2xl barlow-semibold text-white text-r-auto">
            {moto?.datos.frase}
          </p>
        </div>
      </section>

      {moto && <CarruselMotos imagenes={moto.datos.imagenesMotos} />}

      {moto && (
        <SeccionPrecios
          nombre={moto.nombre}
          year={moto.year}
          precioRegular={moto.datos.precioRegular}
          bono={moto.datos.bono}
          precioConBono={moto.datos.precioConBono}
          pdf={moto.datos.imagenFicha}
        />
      )}
      {moto && <CarruselData imagenes={moto.datos.imagenesData} />}

      <FooterYamaha />
    </>
  );
}
