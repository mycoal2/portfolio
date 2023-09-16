import React, { useState } from 'react'
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
    <section className="bg-primary px-4 text-white py-12" id="projects">
      <div className="project-title"> projects </div>
      <div className="container mx-auto grid md:grid-cols-3 items-center justify-center md:justify-between py-10">
         <div className={`zoomable-div ${isZoomed[0] ? 'zoomed' : ''}`}> 
            Autonomous Hovercraft
            <center>
               <iframe className="rounded-lg" onMouseEnter={handleMouseEnter(0)} onMouseLeave={handleMouseLeave(0)} width="326" height="380" src="https://www.youtube.com/embed/tt3hhP_VjHc" title="Autonomous Hovercraft project" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </center>
            <center className="flex justify-center">
               <img src={process.env.PUBLIC_URL + '/Images/Arduino-logo.png'} alt="Arduino" className="plogo rounded-lg w-16 h-16"/>
               <img src={process.env.PUBLIC_URL + '/Images/C++-logo.png'} alt="C++" className="plogo rounded-lg w-16 h-16"/>
            </center>
         </div>

         <div className={`zoomable-div ${isZoomed[1] ? 'zoomed' : ''}`}> 
         Animal Generator
            <center>
               <iframe className="rounded-lg" onMouseEnter={handleMouseEnter(1)} onMouseLeave={handleMouseLeave(1)} width="326" height="380" src="https://www.youtube.com/embed/uHbUlSETXAg" title="OpenGL Animal generator" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </center>
            <center className="flex justify-center">
               <img src={process.env.PUBLIC_URL + '/Images/OpenGL-logo.png'} alt="OpenGL" className="plogo rounded-lg w-16 h-16"/>
               <img src={process.env.PUBLIC_URL + '/Images/C++-logo.png'} alt="C++" className="plogo rounded-lg w-16 h-16"/>
            </center>
         </div>
         <div className={`zoomable-div ${isZoomed[2] ? 'zoomed' : ''}`}> 
            JobHunt
            <center>
               <iframe className="rounded-lg" onMouseEnter={handleMouseEnter(2)} onMouseLeave={handleMouseLeave(2)}width="326" height="380" src="https://www.youtube.com/embed/ygkWDyd7pO8" title="SOEN 341 Project - Sprint 3 Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </center>
            <center className="flex justify-center">
               <img src={process.env.PUBLIC_URL + '/Images/React-logo.png'} alt="React" className="plogo rounded-lg w-16 h-16"/>
               <img src={process.env.PUBLIC_URL + '/Images/Nodejs-logo.png'} alt="Nodejs" className="plogo rounded-lg w-16 h-16"/>
               <img src={process.env.PUBLIC_URL + '/Images/MySQL-logo.png'} alt="MySQL" className="plogo rounded-lg w-16 h-16"/>
            </center>
         </div>
         <div className={`zoomable-div ${isZoomed[3] ? 'zoomed' : ''}`}> 
            Ultimate Tic-Tac-Toe
            <center>
               <iframe className="rounded-lg" onMouseEnter={handleMouseEnter(3)} onMouseLeave={handleMouseLeave(3)} width="326" height="380" src="https://www.youtube.com/embed/tt3hhP_VjHc" title="Autonomous Hovercraft project" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </center>
            <center className="flex justify-center">
               <img src={process.env.PUBLIC_URL + '/Images/tailwind-logo.png'} alt="Tailwind" className="plogo rounded-lg w-16 h-16"/>
               <img src={process.env.PUBLIC_URL + '/Images/React-logo.png'} alt="React" className="plogo rounded-lg w-16 h-16"/>
               <img src={process.env.PUBLIC_URL + '/Images/JavaScript-logo.png'} alt="Javascript" className="plogo rounded-lg w-16 h-16"/>
            </center>
         </div>
      </div>
   </section>
  )
}

export default Project