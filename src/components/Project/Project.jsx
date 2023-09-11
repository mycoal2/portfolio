import React, { useEffect, useState } from 'react'
import "./Project.scss";



const Project = () => {
   
   const [isZoomed, setIsZoomed] = useState([false, false, false, false]);

   const handleMouseEnter = (i) => () => {
      const newArray = [...isZoomed];
      newArray[i] = true;
      setIsZoomed(newArray);
   };

   const handleMouseLeave = (i) => () => {
      const newArray = [...isZoomed];
      newArray[i] = false;
      setIsZoomed(newArray);
   };

  return (
    <section className="bg-primary px-4 text-white py-10">
      <div className="container mx-auto grid md:grid-cols-3 items-center justify-center md:justify-between py-10">
         <div className={`zoomable-div ${isZoomed[0] ? 'zoomed' : ''}`}> 
            Autonomous Hovercraft
            <center>
               <iframe className="rounded-lg" onMouseEnter={handleMouseEnter(0)} onMouseLeave={handleMouseLeave(0)} width="326" height="380" src="https://www.youtube.com/embed/tt3hhP_VjHc" title="Autonomous Hovercraft project" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </center>
         </div>

         <div className={`zoomable-div ${isZoomed[1] ? 'zoomed' : ''}`}> 
         project 1
            <center>
               <object className="justify-center" onMouseEnter={handleMouseEnter(1)} onMouseLeave={handleMouseLeave(1)} data="..\..\Images\Resume -Michael_Hong2.pdf" type="application/pdf" width="326" height="380" ></object>
            </center>
         </div>
         <div className={`zoomable-div ${isZoomed[2] ? 'zoomed' : ''}`}> 
            JobHunt
            <center>
               <iframe className="rounded-lg" onMouseEnter={handleMouseEnter(2)} onMouseLeave={handleMouseLeave(2)} width="326" height="380" src="https://www.youtube.com/embed/tt3hhP_VjHc" title="Autonomous Hovercraft project" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </center>
         </div>
         <div className={`zoomable-div ${isZoomed[3] ? 'zoomed' : ''}`}> 
            JobHunt
            <center>
               <iframe className="rounded-lg" onMouseEnter={handleMouseEnter(3)} onMouseLeave={handleMouseLeave(3)} width="326" height="380" src="https://www.youtube.com/embed/tt3hhP_VjHc" title="Autonomous Hovercraft project" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </center>
         </div>
      </div>
   </section>
  )
}

export default Project