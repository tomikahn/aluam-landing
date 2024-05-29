"use client";
import React from "react";
import { motion } from "framer-motion";

const DividerProyectos = () => {
    return (
        <div
          className="w-full back-degradado py-20 flex flex-row items-center justify-center gap-8 px-8"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex flex-row items-center justify-center gap-8 cursor-pointer"
          >
            <h2 className="text-[20px] md:text-[40px] text-white font-medium">
              Nuestros <span className="font-bold">proyectos</span>
            </h2>
          </motion.div>
        </div>
      );
}

export default DividerProyectos