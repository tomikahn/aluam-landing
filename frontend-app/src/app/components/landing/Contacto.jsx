import React from "react";

const Contacto = () => {

  const text = "Hola, me comunico con ustedes por la siguiente consulta:"
  return (
    <div
      className="px-0 sm:px-8 lg:px-20 sm:pb-[150px] md:w-[90vw] m-auto"
      id="contacto"
    >
      <div className="w-full hidden md:flex flex-row md:rounded-[15px] items-center justify-around py-10 md:py-12 2xl:p-20 bg-gray100 ">
        <div className="flex flex-row md:justify-around md:px-20 sm:px-8 px-4 w-full lg:w-[60%] xl:w-[35%] ">
          <div className="flex flex-col items-start justify-start">
            <h3 className="text-[26px] lg:text-[36px] text-gray800 font-bold">
              Contacto
            </h3>
            <h3 className="text-[16px] md:text-[20px] text-gray500 mb-6 mt-[0.5rem] md:mt-0">
              Pedinos tu presupuesto a través de cualquiera de estos medios
            </h3>
            <div className="flex flex-row items-center justify-start gap-4 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#86878A"
                  d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                />
              </svg>
              
              <h3 className="hidden sm:flex text-[24px] text-gray500 font-medium">
                Whatsapp:
              </h3>
              <a target='_blank' href={`https://wa.me/+5492664655398?text=${text}`}>
              <h3 className=" text-[20px] md:text-[24px] text-orange500 font-semibold">
                +5492664655398
              </h3>
              </a>
            </div>
            <div className="flex flex-row items-center justify-start gap-4 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#86878A"
                  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                />
              </svg>
              <h3 className="hidden sm:flex text-[24px] text-gray500 font-medium">
                Instagram:
              </h3>
              <a href="https://www.instagram.com/aluam.ar/" target="blank">
              <h3 className="text-[20px] md:text-[24px] text-orange500 font-semibold">
                @aluam.ar
              </h3>
              </a>

            </div>
            <div className="flex flex-row items-center justify-start gap-4 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#86878A"
                  d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"
                />
              </svg>
              <h3 className="hidden sm:flex text-[24px] text-gray500 font-medium">
                Email:
              </h3>
              <a href="mailto:aluamsl@gmail.com" className="text-[24px] text-orange500 font-semibold">
                aluamsl@gmail.com
              </a>
            </div>
          </div>
        </div>
        <img
          src="/landing/logo3.png"
          alt=""
          className="w-[200px] h-[200px] xl:w-[220px] hidden lg:flex"
        />
      </div>
    </div>
  );
};

export default Contacto;
