import React from 'react'
import Nav from '../components/landing/Nav'
import Footer from '../components/landing/Footer'
import Hero from '../components/catalogo/Hero'

const page = () => {
  return (
    <div className='max-w-screen overflow-hidden h-full'>
        <Nav></Nav>
        <Hero></Hero>
        <Footer></Footer>
    </div>
  )
}

export default page