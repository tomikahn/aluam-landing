"use client";
import Footer from "@/app/components/landing/Footer";
import Nav from "@/app/components/landing/Nav";
import React, { useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { Tabs, Tab } from "@nextui-org/react";
import { Modal, ModalContent, useDisclosure } from "@nextui-org/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const perfilesMediaPrestacion = [
  {
    title: "Módena",
    img: "/catalogo/media/modenaa.png",
    description:
      "Módena es una línea de media prestación de la extrusora ALUAR con terminaciones a 90° que van ensamblada con tornillos de armado. Su perfilería de excelente calidad nos permite fabricar aberturas de tamaño pequeño y mediano. Se recomienda que sus dimensiones no sobrepasen 1.80 mts de ancho y tampoco 2.10 mts de alto para que su sistema tenga un buen funcionamiento.",
    logo:"/logos/aluar.png"
    },
  {
    title: "Rotonda 640",
    img: "/catalogo/media/640b.png",
    description:
      "Rotonda 640 es una línea de media prestación de la extrusora HYDRO con terminaciones a 45° que va ensamblada con escuadras de tracción lo cual nos da una mayor firmeza en el armado de la abertura. Su perfilería de excelente calidad nos permite fabricar aberturas de tamaño pequeño y mediano. Se recomienda que sus dimensiones no superen 1.80 mts de ancho y tampoco 2.10 mts de alto para que su sistema tenga un buen funcionamiento.",
      logo:"/logos/hydro.png"

    },
  {
    title: "Rotonda 700",
    img: "/catalogo/media/rotonda700.png",
    description:
      "Rotonda 700 es una línea de media prestación de la extrusora HYDRO con terminaciones a 45° que va ensamblada con escuadras de tracción lo cual nos da una mayor firmeza en el armado de la abertura. Rotonda 700 eleva el standard de dimensiones permitidas por la media prestación sin dejar de serlo. Se pueden producir aberturas de hasta 2.30 mts de ancho y 2.20 mts de alto sin que comprometa el buen funcionamiento de sus sistemas.",
      logo:"/logos/hydro.png"

    },
];

const perfilesAltaPrestacion = [
  {
    title: "HA62",
    img: "/catalogo/alta/ha62.png",
    description:
      "HA 62 es una línea de alta prestación de la extrusora HYDRO con terminaciones a 45° que va ensamblada con escuadras de tracción que otorgan mayor firmeza en el armado de las aberturas. Gracias al tamaño y espesor de su perfilería podemos ir más allá de las medidas estandarizadas permitiendo desarrollar diseños de hasta 3.00 mts de ancho por 2.50 mts de alto sin perjudicar el correcto funcionamiento.",
      logo:"/logos/hydro.png"

    },
  {
    title: "HA62 RPT",
    img: "/catalogo/alta/ha62rpt.png",
    description:
      "La perfilería con Ruptura de Puente Térmico (RPT) fue creada para evitar los traspasos de temperatura a través de la hoja y marco de las aberturas. Es un sistema formado por dos capas de aluminio, entre las cuales cuenta con un centro de poliamida de alta resistencia que permite cortar con el paso de temperatura evitando el calentamiento y la condensación. En este caso la línea HA62 RPT de la extrusora HYDRO nos permite desarrollar aberturas de gran tamaño gracias a sus perfiles de generosa dimensión y excelente calidad. Sus terminaciones con cortes a 45° le da el toque estético diferente y atractivo a la vista que se complementa con el armado con escuadras de tracción que la hace súper resistente. Con esta línea podemos realizar aberturas de hasta 3.00 mts de ancho por 2.50 mts de alto sin perjudicar el buen funcionamiento.",
      logo:"/logos/hydro.png"

    },
  {
    title: "HA 110",
    img: "/catalogo/alta/ha110.png",
    description:
      "HA110 es una línea de alta prestación de calidad superlativa de la extrusora HYDRO. Cuenta con perfilería de dimensiones superiores que nos permite fabricar aberturas de grandes dimensiones. Sus terminaciones a 45° van ensambladas con escuadras de tracción para una mayor firmeza en el armado. Esta línea nos permite elaborar diseños de hasta 4.00 mts de ancho por 2.70 de alto sin comprometer el buen funcionamiento.",
      logo:"/logos/hydro.png"

    },
  {
    title: "NORDICAL",
    img: "/catalogo/alta/nordical.png",
    description:
      "La línea NORDICAL es la última presentación de la extrusora HYDRO, con un diseño minimalista con terminaciones a 90° y calidad superlativa.  Esta línea nos permite desarrollar aberturas de grandes dimensiones gracias al generoso tamaño de sus perfiles. Además, cuenta con la tipología de puerta PIVOTANTE, que, a la hora de elegir la puerta de ingreso a tu hogar te permite contar con una opción de excelente nivel y sin ningún tipo de mantenimiento. NORDICAL nos permite diseños de hasta 4.00 mts de ancho por 2.80 mts de alto sin perjudicar el buen funcionamiento de sus sistemas.",
      logo:"/logos/hydro.png"

    },
  {
    title: "A30 New",
    img: "/catalogo/alta/a30.png",
    description:
      "A30A new es una línea de alta prestación de la extrusora ALUAR que cuenta con una perfilería de excelente calidad. Sus terminaciones a 90° van ensambladas con tornillos de armado. Este sistema simple pero muy resistente, nos permite realizar aberturas de hasta 3.00 mts de ancho por 2.60 mts de alto obteniendo un perfecto funcionamiento.",
      logo:"/logos/aluar.png"

    },
  {
    title: "A40",
    img: "/catalogo/alta/a40.png",
    description:
      "A40 es una línea Premium de la extrusora ALUAR con terminaciones a 90° y excelente calidad. Su perfilería de generosas dimensiones nos permite realizar aberturas que se destacan por su gran tamaño. Con esta línea de diseño minimalista podemos alcanzar dimensiones de hasta 4.00 mts de ancho por 2.80 mts de alto obteniendo un perfecto funcionamiento.",
      logo:"/logos/aluar.png"

    },
];

const page = () => {
  const [selected, setSelected] = useState({
    title: "",
    description: "",
    img: "",
  });

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const text = "Hola, me comunico con ustedes por la siguiente consulta:"

  return (
    <div className="max-w-screen overflow-hidden h-full">
      <NextUIProvider>
        <Nav></Nav>
        <div>
          <div className="relative w-full h-[200px] lg:h-[250px] pt-[152px] flex items-center justify-center">
            <div className="bg-black w-full h-full absolute">
              <img
                src="/catalogo/backgroundAberturas.webp"
                alt=""
                className="w-full h-full object-cover opacity-30"
              />
            </div>

            <h1 className="text-[32px] lg:text-[42px] font-bold text-white z-40">
              Aberturas
            </h1>
          </div>
          <div className="pt-[6rem] lg:pt-[7rem] px-8 lg:px-20 pb-[1rem] lg:pb-[6rem] w-[100vw] flex items-start justify-start  lg:w-[80vw] m-auto lg:flex lg:items-center lg:justify-start">
            <div className="flex flex-row items-start justify-start gap-4">
              <a href="/catalogo">
                <h3 className="text-gray400 text-[14px] lg:text-[20px]">
                  Productos
                </h3>
              </a>
              <h3 className="text-gray400 text-[14px] lg:text-[20px]">{`>`}</h3>
              <h3 className="text-gray400 text-[14px] lg:text-[20px]">
                Aberturas
              </h3>
              <h3 className="text-gray400 text-[14px] lg:text-[20px]">{`>`}</h3>
              <h3 className="text-gray400 text-[14px] lg:text-[20px]">
                Aluminio
              </h3>
            </div>
          </div>
        </div>
        <div className="w-full px-8 lg:px-20 pb-[100px]">
          <div className="flex flex-row items-center justify-center sm:justify-center sm:items-center gap-20 xl:gap-[150px]">
            <img
              src="/catalogo/alta/nordical.png"
              alt=""
              className="hidden sm:flex xl:w-[300px]"
            />
            <div className="flex flex-col items-start justify-start sm:w-[50%]">
              <h2 className="text-[22px] lg:text-[32px] text-gray700 font-semibold mb-4">
                Aberturas de aluminio
              </h2>
              <p className="text-[17px] text-gray500 mb-6 lg:max-w-[90%]">
                La versatilidad del aluminio nos permite realizar aberturas en
                gran variedad de tamaños y formatos que personalizan el diseño
                arquitectónico. Garantizan larga durabilidad sin necesidad de
                mantenimiento. Trabajamos con las extrusoras Hydro y Aluar. Te
                invitamos a conocer las líneas de media y alta prestación.
              </p>
              <div className="flex flex-wrap gap-2 items-center">
              <img src="/logos/hydro.png" alt="hydro logo" className="h-[80px]"/>
              <img src="/logos/aluar.png" alt="aluar logo" className="h-[70px]"/>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a target='_blank' href={`https://wa.me/+5492664655398?text=${text}`}>
            <button className='back-degradado px-8 py-2 rounded-[10px] text-white flex flex-row items-center justify-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 56 56"><path fill="white" d="M15.555 53.125h24.89c4.852 0 7.266-2.461 7.266-7.336V24.508c0-3.024-.328-4.336-2.203-6.258L32.57 5.102c-1.78-1.829-3.234-2.227-5.882-2.227H15.555c-4.828 0-7.266 2.484-7.266 7.36v35.554c0 4.898 2.438 7.336 7.266 7.336m.187-3.773c-2.414 0-3.68-1.29-3.68-3.633V10.305c0-2.32 1.266-3.657 3.704-3.657h10.406v13.618c0 2.953 1.5 4.406 4.406 4.406h13.36v21.047c0 2.343-1.243 3.633-3.68 3.633ZM31 21.132c-.914 0-1.29-.374-1.29-1.312V7.375l13.5 13.758Zm5.625 9.985h-17.79c-.843 0-1.452.633-1.452 1.43c0 .82.61 1.453 1.453 1.453h17.789a1.43 1.43 0 0 0 1.453-1.453c0-.797-.633-1.43-1.453-1.43m0 8.18h-17.79c-.843 0-1.452.656-1.452 1.476c0 .797.61 1.407 1.453 1.407h17.789c.82 0 1.453-.61 1.453-1.407c0-.82-.633-1.476-1.453-1.476"/></svg>              <span className="font-medium">Solicitá tu presupuesto</span>
            </button>
          </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full xl:w-[80%] m-auto px-8 xl:px-20 mb-[50px]">
          <Tabs 
            aria-label="Options"
            color="#F47443"
            variant="underlined"
            classNames={{
              tabList:
                "gap-6 w-full relative rounded-none p-0 border-b border-divider",
              cursor: "w-full bg-[#F47443]",
              tab: "max-w-fit px-0 h-12",
              tabContent:
                "group-data-[selected=true]:text-[#F47443] font-medium text-[17px] mr-[1rem] lg:text-[22px] lg:mr-[150px]",
            }}
          >
            <Tab key="music" title="Media prestación">
              <div className="w-full mt-4">
                <div className="flex flex-col lg:flex-row items-start">
                  <p className="text-[17px]">
                    En las líneas de media prestación trabajamos con las
                    extrusoras{" "}
                    <span className="text-orange500 font-semibold">ALUAR</span>{" "}
                    e{" "}
                    <span className="text-orange500 font-semibold">Hydro</span>,
                    compañías líderes en el mercado. A continuación podés
                    observar nuestros productos.{" "}
                  </p>
                </div>
                <div className="w-full lg:w-[100%] mt-[3rem] px-8 lg:px-20 mb-[80px]">
                  <Carousel
                    opts={{
                      align: "start",
                    }}
                    className="w-full"
                  >
                    <CarouselContent>
                      {perfilesMediaPrestacion.map((producto, index) => (
                        <CarouselItem
                          key={index}
                          className="md:basis-1/2 lg:basis-1/4 hover:cursor-pointer"
                        >
                          <div
                            className="p-1"
                            onClick={() => {
                              setSelected(producto);
                              onOpen();
                            }}
                          >
                            <img
                              src={producto.img}
                              alt=""
                              className="w-full lg:w-[220px] h-[290px] rounded-[6px] bg-gray100 object-cover p-8"
                            />
                            <h3 className="mt-2 text-[22px] text-gray700">
                              {producto.title}
                            </h3>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
                <img
                  className="w-[100%] h-[80vh] lg:h-[100%] lg:max-h-[28vw] object-cover rounded-[4px]"
                  src="/catalogo/Media prestacion.webp"
                  alt="Abertura Media Prestacion"
                />
              </div>
            </Tab>
            <Tab key="videos" title="Alta prestación">
              <div className="w-full mt-4">
                <div className="flex flex-col lg:flex-row items-start">
                  <p className="text-[17px]">
                    En las líneas de alta prestación trabajamos con las
                    extrusoras{" "}
                    <span className="text-orange500 font-semibold">ALUAR</span>{" "}
                    e{" "}
                    <span className="text-orange500 font-semibold">Hydro</span>,
                    compañías líderes en el mercado. A continuación podés
                    observar nuestros productos.
                  </p>
                </div>
                <div className="w-full lg:w-[100%] mt-[3rem] px-4 lg:px-20 mb-[80px]">
                  <Carousel
                    opts={{
                      align: "start",
                    }}
                    className="w-full"
                  >
                    <CarouselContent>
                      {perfilesAltaPrestacion.map((producto, index) => (
                        <CarouselItem
                          key={index}
                          className="md:basis-1/2 xl:basis-1/4 hover:cursor-pointer"
                        >
                          <div
                            className="p-1"
                            onClick={() => {
                              setSelected(producto);
                              onOpen();
                            }}
                          >
                            <img
                              src={producto.img}
                              alt=""
                              className="w-[220px] h-[290px] rounded-[6px] bg-gray100 object-cover p-8"
                            />
                            <h3 className="mt-2 text-[26px] font-medium text-gray700">
                              {producto.title}
                            </h3>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
                <img
                  className="w-[100%]  h-[80vh] lg:h-[100%] lg:max-h-[28vw] object-cover rounded-[4px]"
                  src="/catalogo/aberturas-real.jpg"
                  alt="Abertura Media Prestacion"
                />
              </div>
            </Tab>
          </Tabs>
        </div>
        <Footer></Footer>
        <Modal
          placement="top-center"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          className="absolute z-50 w-[90vw] lg:w-[950px] h-fit sm:overflow-hidden top-[5%]"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <div className="flex flex-col items-center justify-center p-5 py-8 gap-8">
                  <div className="relative w-full flex items-center justify-center">
                  <img
                    src={selected.img}
                    alt=""
                    className="w-[170px] md:w-[140px] object-cover"
                  />
                  <img src={selected.logo} alt="" className="h-[60px] absolute bottom-1 right-4"/>
                  </div> 
                  <div className="flex flex-col items-start justify-start gap-2 px-2">
                    <h2 className="text-[24px] text-gray-900 font-semibold">
                      {selected.title}
                    </h2>
                    <p className="text-[15px] md:text-[16px] text-gray-700 max-h-[150px] 2xl:max-h-fit overflow-y-auto cursor-ns-resize">
                      {selected.description}
                    </p>
                    
                  </div>
                </div>
              </>
            )}
          </ModalContent>
        </Modal>
      </NextUIProvider>
    </div>
  );
};

export default page;
