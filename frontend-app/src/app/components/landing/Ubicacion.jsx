import React from "react";

const Ubicacion = () => {
  return (
    <div className="w-screen md:w-[90vw] m-auto pt-[100px] pb-[50px] px-8 md:px-20">
      <h2 className="text-gray500 text-[17px] md:text-[20px]">
        Nuestra ubicación
      </h2>
      <h1 className="text-gray1000 text-[26px] md:text-[36px] font-bold mb-4">
        Atencion al cliente
      </h1>
      <img
        src="/landing/map2.png"
        alt=""
        className="w-full h-[450px] lg:h-[500px] rounded-[10px] object-cover"
      />
      <div className="flex flex-col sm:flex-row items-start justify-between w-full mt-6">
        <div className="flex flex-col items-start justify-start ">
          <h2 className="text-[20px] md:text-[28px] text-gray800 font-medium">
            Córdoba 273, San Luis
          </h2>
          <a
            href="https://www.google.com/maps/place/Aluam/@-33.2876962,-66.3000771,14z/data=!4m6!3m5!1s0x95d43e864f402f09:0xacf03ddd7fdfe649!8m2!3d-33.2871849!4d-66.2879544!16s%2Fg%2F11krd9tbng?entry=ttu"
            className="text-[20px] text-gray500 flex items-center justify-center flex-row gap-4"
          >
            <span className="underline text-[17px] md:text-[20px]">
              Ir a google maps
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="#86878A"
                  d="m14.707 5.636l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l3.95-3.95H4a1 1 0 1 1 0-2h13.243l-3.95-3.95a1 1 0 1 1 1.414-1.414"
                />
              </g>
            </svg>
          </a>
        </div>
        <div className="flex flex-col items-start justify-start sm:items-end sm:justify-end mt-4 sm:mt-0">
          <h3 className="text-gray600 text-[18px] md:text-[22px] font-medium">
            Lu - Vi: 8:00 -17:30hs
          </h3>
          <h3 className="text-gray600 text-[18px] md:text-[22px] font-medium">
            Sab: 8:00 - 13:00hs
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Ubicacion;
