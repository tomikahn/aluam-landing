
const Nosotros = () => {
  return (
    <div className="bg-[#252527]" id="nosotros">
      <div className="w-full m-auto lg:w-[95vw] xl:max-w-[93vw] 2xl:max-w-[75vw] pt-[100px] pb-[150px] px-8 md:px-20">
        <h1 className="text-white text-[26px] lg:text-[36px] font-bold mb-0 lg:mb-10">
          Sobre nosotros
        </h1>
        <div className="flex flex-col lg:flex-row gap-10 mt-8">
          <video playsInline loop="true" autoplay="autoplay" id="vid" muted className="w-full md:w-auto sm:max-h-[60vh] lg:h-[50vh] xl:h-[50vh] 2xl:h-[60vh]">
            <source src="/landing/aluamWeb.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
          <div>
            <p className="text-gray100 text-[15px] lg:text-[20px] 2xl:text-[22px]">
              Somos una empresa dedicada a la fabricación y venta de aberturas
              de aluminio y PVC en media y alta prestación. Nos avalan más de 15
              años de trayectoria en San Luis capital, y el reconocimiento de la
              calidad superior de nuestros productos en el mercado local. <br />
              <br /> Nuestras aberturas son realizadas exclusivamente a la
              medida de tus necesidades. Contamos además con la división
              vidrios, lo que nos permite ofrecer un acabado integral, coherente
              y adaptado a la estética de tu proyecto. <br />
              <br /> En ALUAM nos comprometemos con nuestro trabajo y con el
              servicio al cliente: buscamos la excelencia en el asesoramiento,
              la entrega e instalación, la calidad de los productos y el
              servicio postventa. <br />
              <br />
              <span className="text-white font-semibold italic text-[18px] lg:text-[22px] 2xl:text-[24px]">
                "Cuidando los detalles, ALUAM es garantía de calidad"
              </span>
            </p>
          </div>
        </div>
        {/* <div className="flex flex-row items-center justify-between mt-20 gap-10">
          <div className="flex flex-col items-start justify-start lg-full lg:w-[50%]">
            <img
              src="/landing/first-landing.png"
              alt=""
              width="350px"
              height="350px"
              className="flex lg:hidden mb-8"
            />
            <h2 className="text-[26px] lg:text-[32px] font-semibold text-white mb-4">
              Aberturas
            </h2>
            <h3 className="text-[16px] lg:text-[18px] text-gray300 mb-8">
              En ALUAM nos especializamos en la fabricación de aberturas
              exclusivamente a medida, con opciones en media y alta prestación.
              Fusionamos resistencia y estilo para proporcionarte productos que
              destacan por su calidad y diseño excepcionales. <br />
              <br /> ALUAM te ofrece, además, un servicio postventa
              personalizado y al instante.
            </h3>
            <Link href="/catalogo">
              <button className="text-[22px]  text-gray300 mb-8 underline hover:text-orange500 hover:scale-105 transition">
                Ver más +
              </button>
            </Link>
          </div>
          <img
            src="/landing/first-landing.png"
            alt=""
            className="hidden lg:flex"
          />
        </div>
        <div className="flex flex-row items-center justify-between mt-20 gap-10">
          <img
            width="350px"
            height="350px"
            src="/landing/second-landing.png"
            alt=""
            className="hidden lg:flex"
          />
          <div className="flex flex-col items-start justify-start lg-full lg:w-[50%]">
            <img
              src="/landing/second-landing.png"
              alt=""
              className="flex lg:hidden mb-8"
            />
            <h2 className="text-[26px] lg:text-[32px] font-semibold text-white mb-4">
              {" "}
              Vidrios
            </h2>
            <h3 className="text-[16px] lg:text-[18px] text-gray300 mb-8">
              {" "}
              Nuestras fachadas vidriadas, barandas para escaleras y balcones y
              distintos tipos de mamparas con excelente terminación, realzan la
              estética y jerarquizan tu diseño.
            </h3>
            <Link href="/catalogo">
              <button className="text-[22px]  text-gray300 mb-8 underline hover:text-orange500 hover:scale-105 transition">
                Ver más +
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between mt-20 gap-10">
          <div className="flex flex-col items-start justify-start lg-full lg:w-[50%]">
            <img
              width="350px"
              height="350px"
              src="/landing/third-landing.png"
              alt=""
              className="flex lg:hidden mb-8"
            />
            <h2 className="text-[26px] lg:text-[32px] font-semibold text-white mb-4">
              {" "}
              Cortinas
            </h2>
            <h3 className="text-[16px] lg:text-[18px] text-gray300 mb-8">
              Completamos tu proyecto con cortinas de interior y toldos
              garantizados por la calidad y trayectoria de Dino Conte. Para la
              seguridad de tu hogar te ofrecemos cortinas de enrollar de
              aluminio a la medida de tus necesidades.
            </h3>
            <Link href="/catalogo">
              <button className="text-[22px]  text-gray300 mb-8 underline hover:text-orange500 hover:scale-105 transition">
                Ver más +
              </button>
            </Link>
          </div>
          <img
            src="/landing/third-landing.png"
            alt=""
            className="hidden lg:flex"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Nosotros;
