import React from "react";
import ItemProyecto from "./ItemProyecto";

const Proyectos = () => {

  const data = [
    {images:[{imagen:"/landing/proyectos/ypf/YPF 1.webp"},{imagen:"/landing/proyectos/ypf/YPF 2.webp"},{imagen:"/landing/proyectos/ypf/YPF 3.webp"},{imagen:"/landing/proyectos/ypf/YPF 4.webp"},{imagen:"/landing/proyectos/ypf/YPF 5.webp"},{imagen:"/landing/proyectos/ypf/YPF 6.webp"},{imagen:"/landing/proyectos/ypf/YPF 7.webp"}],
    title:"Estación de servicio YPF Boutique",
    text:"Obra ubicada en una zona residencial, en la ciudad de Juana Koslay, provincia de San Luis. En la fachada del sector del Shop FULL se llevó a cabo el montaje de piel de vidrio de 240 mts2, realizada con DVH y vidrio templado, respetando las medidas de seguridad requeridas. En interior se instalaron cortinas roller que refuerzan la protección de la luz solar. Para el sector de BOXES se realizó el cerramiento con cortina de enrollar de aluminio y las aberturas de baños y oficinas fueron realizadas en línea Módena color anodizado natural con DVH con vidrio laminado.",
    tipologias:["Aberturas corredizas, paños fijos y ventiluz","Puertas batientes","Puertas blindex con máquina hidráulica", "Piel de vidrio"]
    },
     {images:[{imagen:"/landing/proyectos/aterrazada/CASA 1.webp"},{imagen:"/landing/proyectos/aterrazada/CASA 2.webp"},{imagen:"/landing/proyectos/aterrazada/CASA 3.webp"},{imagen:"/landing/proyectos/aterrazada/CASA 4.webp"},{imagen:"/landing/proyectos/aterrazada/CASA 5.webp"},{imagen:"/landing/proyectos/aterrazada/CASA 6.webp"}],
    title:"Casa aterrazada",
    text:"Vivienda familiar en Country de la ciudad de San Luis. Realizado en A30 color bronce colonial. Aberturas con dinteles de 2,70 mts y. DVH con vidrio laminado. Paños fijos de 7mts y aberturas de 5, para optimizar la vista a las sierras.",
    tipologias:["Aberturas corredizas, paños fijos y oscilo batientes", "Puertas batientes"]
    },
    {images:[{imagen:"/landing/proyectos/zara/ZARA 1.webp"},{imagen:"/landing/proyectos/zara/ZARA 2.webp"},{imagen:"/landing/proyectos/zara/ZARA 3.webp"},{imagen:"/landing/proyectos/zara/ZARA 4.webp"},{imagen:"/landing/proyectos/zara/ZARA 5.webp"}],
    title:"Edificio zara",
    text:"El edificio ubicado en la zona céntrica de la ciudad de San Luis. Consta de 4 torres con 82 departamentos y más de 270 aberturas realizadas íntegramente en línea Rotonda 640 color blanco.",
    tipologias:["Aberturas corredizas","Puertas batientes","Paños fijos"]
    },
    {images:[{imagen:"/landing/proyectos/bar/BAR 1.webp"},{imagen:"/landing/proyectos/bar/BAR 2.webp"},{imagen:"/landing/proyectos/bar/BAR 3.webp"},{imagen:"/landing/proyectos/bar/BAR 4.webp"}],
    title:"AS Bar",
    text:"Se trata de una de las obras realizados en un Barrio Privado en desarrollo ubicado en las sierras de San Luis. Es una vivienda familiar que cuenta con más de 20 aberturas, algunas que superan los 4mts, por 2,50 mts., realizadas en líneas A30 y Módena en color bronce colonial. Además, en la fachada se instaló Profilit, que le aporta distinción y singularidad al diseño.",
    tipologias:["Puertas batientes","Aberturas corredizas oscilobatientes, y ventiluz", "Profilit"]
    },
  ]
  return (
    <div className="" id="proyectos">
      <div className="w-full xl:w-[75vw] m-auto lg:w-[95vw] xl:max-w-[93vw] 2xl:max-w-[90vw] pt-[80px] pb-[80px] md:pb-[150px] px-8 md:px-20">
        {/* <h1 className="text-[26px] lg:text-[42px] font-bold mb-0 lg:mb-10 bg-orange500 text-white p-6 rounded-[2px]">
          Nuestros proyectos
        </h1> */}
        {data.map((item,index)=>{
          return(
            <ItemProyecto key={index} images={item.images} title={item.title} text={item.text} tipologias={item.tipologias}/>
          )
        })}
      </div>
    </div>
  );
};

export default Proyectos;
