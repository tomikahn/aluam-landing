"use client";
import React from "react";
import { motion } from "framer-motion";

const DividerCatalogo = () => {
  return (
    <a
      href="/catalogo"
      className="w-full back-degradado py-20 flex flex-row items-center justify-center gap-8 px-8"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="flex flex-row items-center justify-center gap-8 cursor-pointer"
      >
        <svg
          className="w-[30px] h-[30px] md:w-[48px] md:h-[48px]"
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 512 512"
        >
          <path
            fill="white"
            d="M240 240H32V32h208Zm240 0H272V32h208ZM240 480H32V272h208Zm240 0H272V272h208Z"
          />
        </svg>
        <h2 className="text-[20px] md:text-[40px] text-white font-medium">
          Explora nuestros <span className="font-bold">productos</span>
        </h2>
      </motion.div>
    </a>
  );
};

export default DividerCatalogo;
