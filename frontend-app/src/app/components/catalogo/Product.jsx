import React from 'react'

const Product = () => {
  const text = "Hola, me comunico con ustedes por la siguiente consulta:"

  return (
    <div className='w-full px-8 lg:px-20 pb-[100px]'>
      <div className='flex flex-row items-center justify-center sm:justify-center sm:items-center gap-20 xl:gap-[150px]'>
        <img src="/catalogo/alta/nordical.png" alt="" className='hidden sm:flex xl:w-[300px]' />
        <div className='flex flex-col items-start justify-start sm:w-[50%]'>
          <h2 className='text-[32px] text-gray700 font-semibold mb-4'>Abertura de aluminio</h2>
          <p className='text-[20px] text-gray500 mb-6 lg:max-w-[90%]'>Explorá nuestra línea de aberturas de aluminio, donde nos especializamos en opciones de media y alta prestación. En Aluam, fusionamos resistencia y estilo para proporcionarte aberturas que destacan por su calidad y diseño excepcionales.</p>
          <div className='flex flex-col sm:flex-row gap-4 mt-6'>
          <a target='_blank' href={`https://wa.me/+5492664655398?text=${text}`}>
            <button className='back-degradado px-8 py-2 rounded-[10px] text-white flex flex-row items-center justify-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 56 56"><path fill="white" d="M15.555 53.125h24.89c4.852 0 7.266-2.461 7.266-7.336V24.508c0-3.024-.328-4.336-2.203-6.258L32.57 5.102c-1.78-1.829-3.234-2.227-5.882-2.227H15.555c-4.828 0-7.266 2.484-7.266 7.36v35.554c0 4.898 2.438 7.336 7.266 7.336m.187-3.773c-2.414 0-3.68-1.29-3.68-3.633V10.305c0-2.32 1.266-3.657 3.704-3.657h10.406v13.618c0 2.953 1.5 4.406 4.406 4.406h13.36v21.047c0 2.343-1.243 3.633-3.68 3.633ZM31 21.132c-.914 0-1.29-.374-1.29-1.312V7.375l13.5 13.758Zm5.625 9.985h-17.79c-.843 0-1.452.633-1.452 1.43c0 .82.61 1.453 1.453 1.453h17.789a1.43 1.43 0 0 0 1.453-1.453c0-.797-.633-1.43-1.453-1.43m0 8.18h-17.79c-.843 0-1.452.656-1.452 1.476c0 .797.61 1.407 1.453 1.407h17.789c.82 0 1.453-.61 1.453-1.407c0-.82-.633-1.476-1.453-1.476"/></svg>              <span className="font-medium">Solicitá tu presupuesto</span>
            </button>
          </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product