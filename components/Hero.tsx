export default function Hero() {
  return (
    <section className="bg-[url(/banner-yamaha.webp)] bg-no-repeat bg-cover bg-top h-120 md:h-132 lg:h-156 flex items-end relative">
      <div className="absolute bottom-0 left-0 w-[min(700px,95%)] bg-linear-to-r from-[#0C2C9C] to-[#0A1F75] py-9 pr-12 pl-2 md:pl-35 lg:pl-52 md:pr-24 [clip-path:polygon(0_0,calc(100%_70px)_0,100%_100%,0_100%)]">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl uppercase barlow-extrabold -skew-x-6 origin-bottom-left pr-10 md:pr-0">
          Nueva R9, 70 años de pista
        </h1>

        <p className="mt-3 mb-6 max-w-sm md:text-lg text-[#C9D5FA] pr-5 md:pr-0">
          La súper deportiva que celebra el aniversario de Yamaha. Conócela con
          tu distribuidor.
        </p>

        <div className="flex flex-col items-start gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-4 bg-white px-8 py-4 font-semibold text-[#0C2C9C] [clip-path:polygon(18px_0,100%_0,calc(100%_18px)_100%,0_100%)]"
          >
            Llámanos ahora →
          </a>
          <a
            href="#"
            className="inline-block bg-red-600 px-8 py-4 font-semibold text-white [clip-path:polygon(18px_0,100%_0,calc(100%_18px)_100%,0_100%)]"
          >
            Ver modelos
          </a>
        </div>
      </div>
    </section>
  );
}
