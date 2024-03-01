import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const ProductCarousel = () => {
  const pefrilesLista = [
    {nombre: 'Modena', imagen: '/landing/product1.png'},
    {nombre: 'HV20', imagen: '/landing/product2.png'},
    {nombre: 'aC2', imagen: '/landing/product3.png'},
    {nombre: 'm400', imagen: '/landing/product1.png'},
    {nombre: 'Modena', imagen: '/landing/product2.png'},
    {nombre: 'HV20', imagen: '/landing/product3.png'},
    {nombre: 'aC2', imagen: '/landing/product1.png'},
    {nombre: 'm400', imagen: '/landing/product2.png'},
    {nombre: 'Modena', imagen: '/landing/product3.png'},
    {nombre: 'HV20', imagen: '/landing/product1.png'},
  ]
  return (
    <div className='w-full px-8 lg:px-20 mb-[80px]'>
      <h3 className='text-[24px] text-gray500'>Perfiles de las lineas</h3>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {pefrilesLista.map((producto, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <div className="p-1">
                <img src={producto.imagen} alt="" className='w-[220px] h-[290px] rounded-[6px] bg-gray100 object-cover p-8'/>
                <h3 className='mt-2 text-[26px] text-gray700'>{producto.nombre}</h3>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default ProductCarousel