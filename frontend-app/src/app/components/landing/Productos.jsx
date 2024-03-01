import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "./ProductCard";

const Productos = () => {
  const productosLista = [
    {
      nombre: "Aberturas de Aluminio",
      subtitulo: ["Media prestacion", "Alta prestacion"],
      descripcion:
        "Trabajamos con las extrusoras Hydro y Aluar, compañías líderes en el mercado. Te invitamos a conocer las líneas de media y alta prestación.",
      enlace: "/producto/aberturas/aluminio",
      imagen: "/landing/product1.png",
    },
    {
      nombre: "Aberturas de PVC",
      subtitulo: ["PVC"],
      descripcion:
        "Trabajamos con perfilería Muchtec (Tecnocom), compañía líder en el mercado. ",
      enlace: "/producto/aberturas/pvc",
      imagen: "/landing/pvc.jpg",
    },
    {
      nombre: "Vidrios",
      subtitulo: ["Frentes vidriados", "Barandas", "Mamparas"],
      descripcion:
        "Trabajamos con vidrios templados y laminados que ofrecen mayor seguridad en caso de roturas. Nuestros productos aportan valor agregado a la estética y jerarquía de tu diseño. Te invitamos a conocerlos.",
      enlace: "/producto/vidrios",
      imagen: "/landing/vidrio.jpg",
    },
    {
      nombre: "Cortinas",
      subtitulo: ["Interior", "Exterior"],
      descripcion:
        "La amplia gama de cortinas que ofrecemos otorgan mayor confort, estilo, privacidad y seguridad a tus ambientes, logrando la mejor combinación entre diseño y funcionalidad. Te invitamos a conocer las distintas opciones.",
      enlace: "/producto/cortinas",
      imagen: "/catalogo/cortinas/cortina-render.webp",
    }
  ];
  return (
    <div className="w-screen md:w-[90vw] m-auto pt-[100px] pb-[150px] px-8 md:px-20">
      <h2 className="text-gray500 text-[17px] md:text-[20px]">Descubri nuestro catálogo</h2>
      <h1 className="text-gray1000 text-[26px] md:text-[36px] font-bold mb-10">
        Nuestros productos
      </h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {productosLista.map((producto, index) => (
            <CarouselItem key={index} className="lg:basis-1/2 xl:basis-1/3 2xl:basis-1/4">
              <div className="p-1">
                <ProductCard producto={producto} />
                <h3 className="mt-2 text-[20px] md:text-[26px] text-gray700">
                  {producto.nombre}
                </h3>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Productos;
