"use client";
import React, { useState } from "react";
import Link from "next/link";
// import {ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale} from "./Icons.jsx";

const Nav = () => {

  const text = "Hola, me comunico con ustedes por la siguiente consulta:"

  const [open, setOpen] = useState(true);

  // const icons = {
  //   chevron: <ChevronDown fill="currentColor" size={16} />,
  //   scale: <Scale className="text-warning" fill="currentColor" size={30} />,
  //   lock: <Lock className="text-success" fill="currentColor" size={30} />,
  //   activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
  //   flash: <Flash className="text-primary" fill="currentColor" size={30} />,
  //   server: <Server className="text-success" fill="currentColor" size={30} />,
  //   user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  // };

  return (
    <div className="fixed top-0 w-full py-4 xl:px-20 md:px-12  px-6 bg-white flex flex-row justify-between z-50">
      <a href="/" className="hover:cursor-pointer">
        <div className="flex flex-row items-center justify-center gap-2 z-20">
          <img src="/landing/logo.png" alt="" className="w-[52px] h-[43px]" />
          <h3 className="text-[29px] text-gray900 font-bold">ALUAM</h3>
        </div>
      </a>
      <div className="hidden lg:flex flex-row items-center justify-center gap-20">
        <Link
          href="/catalogo"
          className="text-gray700 text-[17px] font-semibold hover:text-gray-800 "
        >
          Productos
        </Link>
        {/* <Dropdown>
            <DropdownTrigger>
              <Button
                disableRipple
                className="text-gray700 text-[17px] font-semibold hover:text-gray-800 "
                // endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Catálogo
              </Button>
            </DropdownTrigger>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              description="ACME scales apps to meet user demand, automagically, based on load."
              // startContent={icons.scale}
            >
              Autoscaling
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              // startContent={icons.activity}
            >
              Usage Metrics
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              description="ACME runs on ACME, join us and others serving requests at web scale."
              // startContent={icons.flash}
            >
              Production Ready
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              description="Applications stay on the grid with high availability and high uptime guarantees."
              // startContent={icons.server}
            >
              +99% Uptime
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              description="Overcome any challenge with a supporting team ready to respond."
              // startContent={icons.user}
            >
              +Supreme Support
            </DropdownItem>
          </DropdownMenu>
        </Dropdown> */}
        {/* <Link
          href="/nosotros"
          className="text-gray700 text-[17px] font-semibold hover:text-gray-800 "
        >
          Sobre nosotros
        </Link> */}
        <a
          href="/#contacto"
          className="text-white text-[17px] font-semibold  back-degradado px-8 py-2 rounded-[6px] flex flex-row items-center justify-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.2L4 17.2V4h16z"
            />
          </svg>
          Presupuestos
        </a>
      </div>
      <div className="flex lg:hidden z-30">
        {open && (
          <svg
            onClick={() => {
              setOpen(!open);
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="3em"
            height="3em"
            viewBox="0 0 24 24"
          >
            <rect
              width="18"
              height="1.5"
              x="3"
              y="7.001"
              fill="black"
              rx=".75"
            />
            <rect
              width="15"
              height="1.5"
              x="3"
              y="11.251"
              fill="black"
              rx=".75"
            />
            <rect
              width="18"
              height="1.5"
              x="3"
              y="15.499"
              fill="black"
              rx=".75"
            />
          </svg>
        )}
        {!open && (
          <svg
            onClick={() => {
              setOpen(!open);
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="3em"
            height="3em"
            viewBox="0 0 24 24"
          >
            <path
              fill="black"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
            />
          </svg>
        )}
      </div>
      {!open && (
        <div className="fixed top-0 left-0 w-full h-screen bg-gray200 flex flex-col items-center justify-center gap-20">
          <Link
            href="/catalogo"
            onClick={() => {
              setOpen(!open);
            }}
            className="text-gray700 text-[32px] font-semibold hover:text-gray-800 "
          >
            Productos
          </Link>
          <a target='_blank' href={`https://wa.me/+5492664655398?text=${text}`}
            onClick={() => {
              setOpen(!open);
            }}
            className="text-white text-[32px] font-semibold  back-degradado px-8 py-2 rounded-[6px]"
          >
            Presupuestos
          </a>
        </div>
      )}
    </div>
  );
};

export default Nav;
