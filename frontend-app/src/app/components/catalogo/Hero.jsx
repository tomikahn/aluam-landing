import React from "react";
import ProductCard from "./ProductCard";

const Hero = () => {
  const productosLista = [
    {
      imagen: "/landing/product1.png",
      titulo: "Aberturas",
      descripcion:
        "Explora nuestra variedad de aberturas de aluminio y PVC, ideales para cualquier proyecto arquitectónico.",
      productos: [
        { producto: "Aluminio", enlace: "/producto/aberturas/aluminio" },
        { producto: "PVC", enlace: "/producto/aberturas/pvc" },
      ],
    },
    {
      imagen: "/catalogo/vidrios/pielDeVidrio.png",
      titulo: "Vidrios",
      descripcion:
        "Experimenta la seguridad y la estética con nuestros vidrios templados y laminados, dando modernidad a tus espacios.",
      productos: [{ producto: "Explorar", enlace: "/producto/vidrios" }],
    },
    {
      imagen: "/catalogo/cortinas/cortina-render.webp",
      titulo: "Cortinas",
      descripcion:
        "Potencia el confort y la privacidad con nuestras cortinas y toldos de calidad garantizada, adaptados a tu estilo de vida.",
      productos: [{ producto: "Explorar", enlace: "/producto/cortinas" }],
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-full h-[200px] lg:h-[250px] pt-[152px] flex items-center justify-center">
            <div className="bg-black w-full h-full absolute">
              <img
                src="/catalogo/building2.png"
                alt=""
                className="w-full h-full object-cover opacity-30"
              />
            </div>

            <h1 className="text-[32px] lg:text-[42px] font-bold text-white z-40">
             Catálogo
            </h1>
          </div>
      <div className="w-full lg:w-[90vw] pt-[120px] pb-[150px] px-8 md:px-20">
        <h2 className="text-gray500 text-[17px] text-center sm:text-left">Descubri nuestro catálogo</h2>
        <h1 className="text-gray1000 text-[26px] md:text-[32px] text-center sm:text-left font-bold mb-20 md:mb-10">
          Nuestros productos
        </h1>
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-20">
          {productosLista.map((producto, index) => (
            <ProductCard key={index} producto={producto} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
