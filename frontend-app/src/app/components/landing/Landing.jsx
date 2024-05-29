import React from 'react'
import Hero from './Hero'
import Nav from './Nav'
import DividerCatalogo from './DividerCatalogo'
import Nosotros from './Nosotros'
import DividerWhatsapp from './DividerWhatsapp'
import DividerProyectos from './DividerProyectos'

import Ubicacion from './Ubicacion'
import Contacto from './Contacto'
import Footer from './Footer'
import Productos from './Productos'
import Proyectos from './Proyectos'

const Landing = () => {
  return (
    <div className='h-full' >
      <Nav />
      <Hero />
      <Productos />
      <DividerCatalogo />
      <Nosotros/>
      <DividerProyectos />
      <Proyectos/>
      <DividerWhatsapp />
      <Ubicacion />
      <Contacto />
      <Footer />
    </div>
  )
}

export default Landing