"use client";
import Link from "next/link";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Hero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 6500, stopOnInteraction: true })
  );

  const urls = [
    "/hero/foto 1.webp",
    "/hero/foto 2.webp",
    "/hero/foto 3.webp",
    "/hero/foto 4.webp",
    "/hero/foto 5.webp",
    "/hero/foto 6.webp",
    "/hero/foto 7.webp",
    "/hero/foto 8.webp",
    "/hero/foto 9.webp",
    "/hero/foto 10.webp",
    "/hero/foto 11.webp",
    "/hero/foto 12.webp",
  ];

  return (
    <div className="max-w-screen  h-screen flex items-start justify-start overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        className="absolute w-full h-screen left-[-4px] bottom-[4px]"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {urls.map((url, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <img
                  src={url}
                  alt=""
                  width="100%"
                  height="100%"
                  className="w-screen h-screen object-cover z-0"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="bg-black bg-opacity-70 h-screen w-[100%] lg:w-[65%] xl:w-[55%] 2xl:w-[40%] flex flex-col items-start justify-center px-6 sm:px-20 z-10">
        <h1 className="text-[30px] sm:text-[40px] text-white font-semibold mb-4 mt-20">
          Hacemos las <br />
          <span className="text-orange500">
            aberturas perfectas{" "}
          </span> <br /> para tu propiedad
        </h1>
        <h3 className="text-[18px] sm:text-[22px] text-gray300 font-medium mb-12">
          En ALUAM nos dedicamos a la fabricación y comercialización de
          aberturas de aluminios.
        </h3>
        <Link
          href="/catalogo"
          className="text-white text-[20px] font-semibold  back-degradado px-8 py-2 rounded-[6px] flex items-center justify-center gap-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="20"
            viewBox="0 0 640 512"
          >
            <path
              fill="white"
              d="M36.8 192h566.4c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192M64 224v240c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V224h-64v160H128V224zm448 0v256c0 17.7 14.3 32 32 32s32-14.3 32-32V224z"
            />
          </svg>
          Ver catálogo
        </Link>
      </div>
    </div>
  );
};

export default Hero;
