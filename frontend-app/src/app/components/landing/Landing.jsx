import React from 'react'
import Hero from './Hero'
import Nav from './Nav'
import DividerCatalogo from './DividerCatalogo'
import Proyectos from './Proyectos'
import DividerWhatsapp from './DividerWhatsapp'
import Ubicacion from './Ubicacion'
import Contacto from './Contacto'
import Footer from './Footer'
import Productos from './Productos'

const Landing = () => {
  return (
    <div className='h-full' >
      <Nav />
      <Hero />
      <Productos />
      <DividerCatalogo />
      <Proyectos/>
      <DividerWhatsapp />
      <Ubicacion />
      <Contacto />
      <Footer />
    </div>
  )
}

export default Landing