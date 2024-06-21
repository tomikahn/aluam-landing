"use client";
import Footer from "@/app/components/landing/Footer";
import Nav from "@/app/components/landing/Nav";
import React, { useState, useEffect } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, Tab } from "@nextui-org/react";


const vidrios = [
  {
    img: "/catalogo/vidrios/frenteEj.webp",
    title: "Frente integral",
  },
  {
    img: "/catalogo/vidrios/pielEj.webp",
    title: "Piel de vidrio",
  },
  {
    img: "/catalogo/vidrios/profilitEj.webp",
    title: "Profilit",
  },
];

const mamparas=[
  {
    img: "/catalogo/vidrios/MAMPARA BATIENTE.webp",
    title: "Mampara batiente",
  },
  {
    img: "/catalogo/vidrios/MAMPARA CORREDIZA.webp",
    title: "Mampara corrediza",
  },
  {
    img: "/catalogo/vidrios/MAMPARA FIJA.webp",
    title: "Mampara fija",
  },
]
const barandas=[ {
  img: "/catalogo/vidrios/Baranda DISTANCIADORES.webp",
  title: "Baranda con distanciadores",
},
{
  img: "/catalogo/vidrios/Baranda MINIPOSTES.webp",
  title: "Baranda con minipostes",
},
{
  img: "/catalogo/vidrios/Baranda POSTES.webp",
  title: "Baranda con postes",
},]

const firstPictures = [
  "/catalogo/vidrios/pielDeVidrio.png",
  "/catalogo/vidrios/frenteIntegral.png",
  "/catalogo/vidrios/profilit.png",
];

const page = () => {
  const text = "Hola, me comunico con ustedes por la siguiente consulta:"

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === firstPictures.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change the interval time as needed

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);
  return (
    <div className="max-w-screen overflow-hidden h-full">
      <NextUIProvider>
        <Nav></Nav>
        <div>
          <div className="relative w-full h-[200px] lg:h-[250px] pt-[152px] flex items-center justify-center">
            <div className="bg-black w-full h-full absolute">
              <img
                src="/catalogo/backgroundVidrios.webp"
                alt=""
                className="w-full h-full object-cover opacity-30"
              />
            </div>

            <h1 className="text-[32px] lg:text-[42px] font-bold text-white z-40">
              Vidrios
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
                Vidrios
              </h3>
            </div>
          </div>
        </div>
        <div className="w-full px-8 lg:px-20 lg:pb-[100px]">
          <div className="relative flex flex-col-reverse lg:flex-row items-center justify-center sm:justify-center sm:items-center gap-8 mt-[1rem] xl:gap-[100px]">
            {/* aca quiero la imagen que va cambiando */}
            <div className="flex w-[300px] h-[300px] relative mt-[4rem] lg:mt-0">
              <AnimatePresence>
                {firstPictures.map((image, index) => (
                  <motion.img
                    key={index}
                    src={image}
                    alt=""
                    className="w-[300px] absolute left-0 top-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
                    exit={{ opacity: 0 }}
                  />
                ))}
              </AnimatePresence>
            </div>

            <div className="flex flex-col items-start justify-start sm:w-[50%]">
              <h2 className="text-[22px] lg:text-[32px] text-gray700 font-semibold mb-4">
                Vidrios
              </h2>
              <p className="text-[17px] text-gray500 mb-6 lg:max-w-[90%]">
                En los frentes vidriados, barandas y mamparas, trabajamos con
                vidrios templados y laminados que ofrecen mayor seguridad en
                caso de roturas. Nuestros productos aportan valor agregado a la
                estética y jerarquía de tu diseño. Te invitamos a conocerlos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a target='_blank' href={`https://wa.me/+5492664655398?text=${text}`}>
            <button className='back-degradado px-8 py-2 rounded-[10px] text-white flex flex-row items-center justify-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 56 56"><path fill="white" d="M15.555 53.125h24.89c4.852 0 7.266-2.461 7.266-7.336V24.508c0-3.024-.328-4.336-2.203-6.258L32.57 5.102c-1.78-1.829-3.234-2.227-5.882-2.227H15.555c-4.828 0-7.266 2.484-7.266 7.36v35.554c0 4.898 2.438 7.336 7.266 7.336m.187-3.773c-2.414 0-3.68-1.29-3.68-3.633V10.305c0-2.32 1.266-3.657 3.704-3.657h10.406v13.618c0 2.953 1.5 4.406 4.406 4.406h13.36v21.047c0 2.343-1.243 3.633-3.68 3.633ZM31 21.132c-.914 0-1.29-.374-1.29-1.312V7.375l13.5 13.758Zm5.625 9.985h-17.79c-.843 0-1.452.633-1.452 1.43c0 .82.61 1.453 1.453 1.453h17.789a1.43 1.43 0 0 0 1.453-1.453c0-.797-.633-1.43-1.453-1.43m0 8.18h-17.79c-.843 0-1.452.656-1.452 1.476c0 .797.61 1.407 1.453 1.407h17.789c.82 0 1.453-.61 1.453-1.407c0-.82-.633-1.476-1.453-1.476"/></svg>              <span className="font-medium">Solicita tu presupuesto</span>
            </button>
          </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-[90%] m-auto px-8 lg:px-20 mb-[50px] mt-[5rem] lg:mt-[3rem]">
          {/* <h2 className="text-[24px] text-center md:text-left lg:text-[26px] text-gray700 font-semibold mb-4 md:ml-[80px]">
            Nuestros productos
          </h2> */}
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
            <Tab key="Frentesvidriados" title="Frentes vidriados">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-[70vw] m-auto lg:m-0 lg:w-full"
            >
              <CarouselContent>
                {vidrios.map((producto, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <img
                        src={producto.img}
                        alt=""
                        className="rounded-[6px] object-cover w-full h-[450px]"
                      />
                      <h3 className="mt-2 text-[17px] lg:text-[22px] text-gray700">
                        {producto.title}
                      </h3>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="lg:hidden flex"/>
              <CarouselNext className="lg:hidden flex"/>
            </Carousel>
            </Tab>
            <Tab key="Mamparas" title="Mamparas">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-[70vw] m-auto lg:m-0 lg:w-full"
            >
              <CarouselContent>
                {mamparas.map((producto, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <img
                        src={producto.img}
                        alt=""
                        className="rounded-[6px] object-cover w-full h-[450px]"
                      />
                      <h3 className="mt-2 text-[17px] lg:text-[22px] text-gray700">
                        {producto.title}
                      </h3>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="lg:hidden flex"/>
              <CarouselNext className="lg:hidden flex"/>
            </Carousel>
            </Tab>
            <Tab key="Barandas" title="Barandas">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-[70vw] m-auto lg:m-0 lg:w-full"
            >
              <CarouselContent>
                {barandas.map((producto, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <img
                        src={producto.img}
                        alt=""
                        className="rounded-[6px] object-cover w-full h-[450px]"
                      />
                      <h3 className="mt-2 text-[17px] lg:text-[22px] text-gray700">
                        {producto.title}
                      </h3>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="lg:hidden flex"/>
              <CarouselNext className="lg:hidden flex"/>
            </Carousel>
            </Tab>
            </Tabs>
          {/* <div className="w-full lg:w-[100%] px-8 lg:px-20 mb-[80px]">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent>
                {galeriapvc.map((producto, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <img
                        src={producto.img}
                        alt=""
                        className="rounded-[6px] object-cover w-full h-[450px]"
                      />
                      <h3 className="mt-2 text-[17px] lg:text-[22px] text-gray700">
                        {producto.title}
                      </h3>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div> */}
        </div>
        <Footer></Footer>
      </NextUIProvider>
    </div>
  );
};

export default page;
