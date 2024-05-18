import React from 'react'



const Header = () => {
    return (
        <div>
            <div className='relative w-full h-[300px] flex items-center justify-center bg-black'>
                <img src="/catalogo/backgroundAberturas.webp" alt="" className='w-full h-full object-cover opacity-20 absolute' />
                <h1 className='text-[42px] font-bold text-white mt-10'>Aberturas</h1>
            </div>
            <div className='pt-[50px] px-8 lg:px-20 pb-[50px] bg-white w-full flex items-center justify-start'>
                <div className='flex flex-row items-start justify-start gap-4'>
                    <h3 className='text-gray400 text-[20px]'>Productos</h3>
                    <h3 className='text-gray400 text-[20px]'>{`>`}</h3>
                    <h3 className='text-gray400 text-[20px]'>Aberturas</h3>
                    <h3 className='text-gray400 text-[20px]'>{`>`}</h3>
                    <h3 className='text-gray400 text-[20px]'>Aluminio</h3>
                </div>
            </div>
        </div>
    )
}

export default Header