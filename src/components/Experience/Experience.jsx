import React from 'react'
import "./Experience.scss";

const Experience = () => {
  return (
    <section className="bg-primary px-4 text-white py-12" id="experience">
      <h3 className="project-title my-5"> Experience </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-mandatory snap-x">
            <article className="bg-presagis flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 snap-center overflow-hidden opacity-100">
               <div className="px-0 md:px-10 unselectable">
                  <h4 className="cursive overflow-hidden text-4xl text-blue-500">Software Developer</h4>
                  <p className="font-bold text-blue-700 text-3xl mt-1">Presagis</p>
                  <img src={process.env.PUBLIC_URL + '/Images/C++-logo.png'} alt="C++" className="rounded-lg w-6 h-6"/>
                  <p className="py-3 text-blue-200 ">Sept 2022 - Dec 2022</p>
                  <ul className="space-y-3 ml-5 text-sm">
                     <li className="mr-2">Developed a test cases and unit tests in C++</li>
                     <li className="mr-2">User Acceptance Tester, document test results and report defects.</li>
                     <li className="mr-2">Applied Agile and Scrum methodologies for project management.</li>
                  </ul>
               </div>
            </article>
      </div>      
   </section>
  )
}

export default Experience