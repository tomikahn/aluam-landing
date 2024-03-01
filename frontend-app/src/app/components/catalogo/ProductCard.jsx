import React from "react";

const ProductCard = ({ producto }) => {
  return (
    <div className="flex flex-row items-center justify-center sm:justify-center sm:items-center gap-8">
      <img
        src={producto.imagen}
        alt=""
        className="max-w-[250px] max-h-[300px] hidden sm:flex"
      />
      <div className="flex flex-col items-center justify-center">
      <img
        src={producto.imagen}
        alt=""
        className="max-w-[120px] max-h-[170px] sm:hidden mb-[2rem]"
      />
        <h2 className="text-[26px] w-full text-center sm:text-left text-gray700 font-semibold">
          {producto.titulo}
        </h2>
        <h3 className="text-[17px] text-gray500 text-center sm:text-left mt-[0.5rem] sm:mt-0">{producto.descripcion}</h3>
        <div className="flex flex-col sm:flex-row items-center justify-center sm:items-start sm:justify-start w-full gap-4 mt-10">
          {producto.productos.map((producto, index) => (
            <a
              href={producto.enlace}
              key={index}
              className="back-degradado px-8 py-2 rounded-[10px] text-white flex flex-row items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 2048 2048"
              >
                <path
                  fill="white"
                  d="m960 120l832 416v1040l-832 415l-832-415V536zm625 456L960 264L719 384l621 314zM960 888l238-118l-622-314l-241 120zM256 680v816l640 320v-816zm768 1136l640-320V680l-640 320z"
                />
              </svg>
              <span className="font-semibold text-[16px]">{producto.producto}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
