"use client";
import Product from "@/app/components/catalogo/Product";
import ProductCarousel from "@/app/components/catalogo/ProductCarousel";
import ProductTabs from "@/app/components/catalogo/ProductTabs";
import Footer from "@/app/components/landing/Footer";
import Nav from "@/app/components/landing/Nav";
import Header from "@/app/components/productos/Header";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";

const page = () => {
  return (
    <div className="max-w-screen overflow-hidden h-full">
      <NextUIProvider>
        <Nav></Nav>
        <div className="mt-20">Sobre nosotros</div>
      </NextUIProvider>
    </div>
  );
};

export default page;
