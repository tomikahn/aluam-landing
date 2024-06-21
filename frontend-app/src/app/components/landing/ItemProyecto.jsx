"use client"
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { NextUIProvider } from "@nextui-org/react";
import { Modal, ModalContent, useDisclosure } from "@nextui-org/react";


const ItemProyecto = ({ images, title, text, tipologias }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [index, setIndex] = React.useState(0);

  return (
    <div className="mb-10">
      <NextUIProvider>
        <h1 className="text-[20px] lg:text-[30px] font-semibold ">{title}</h1>
        <div className='w-full h-[3px] bg-orange500 rounded-[20px] mb-2'></div>
        <p className="text-gray900 text-[14px] xl:text-[17px] w-full mt-6">{text}</p>
        <h2 className='mt-6 mb-2 text-[18px] text-slate-800 font-semibold'>Tipologias</h2>
        <div className="flex flex-wrap gap-2">
          {tipologias.map((tipologia, index) => {
            return (
              <span key={index} className="px-4 py-2 text-[14px] rounded-[20px] bg-orange500 text-white font-medium">{tipologia}</span>
            )
          })}
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-[70vw] m-auto xl:w-full mt-8 mb-10"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <>
                <img src={image.imagen} alt="" className='flex lg:hidden w-full h-[390px] rounded-[6px] hover:rounded-[26px] object-cover cursor-pointer hover:scale-[1.04] transition-all' />
                <img onClick={()=>{setIndex(index);onOpen()}} src={image.imagen} alt="" className='hidden lg:flex w-full h-[390px] rounded-[6px] hover:rounded-[26px] object-cover cursor-pointer hover:scale-[1.04] transition-all' />

                </>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious/>
          <CarouselNext />
        </Carousel>
        <Modal
          placement="top-center"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          className="absolute z-50 w-[90vw] lg:min-w-[50vw] lg:h-[80vh] sm:overflow-hidden"
        >
          <ModalContent>
            {(onClose) => (
              <div className='w-full h-full p-10'>
                  <img
                    src={images[index].imagen}
                    alt=""
                    className="w-full h-full object-cover"
                  />
              </div>
            )}
          </ModalContent>
        </Modal>
      </NextUIProvider>
    </div>
  )
}

export default ItemProyecto