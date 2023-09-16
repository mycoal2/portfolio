import React from "react";
const About = () => {
  return (
      <section className="bg-primary text-white px-5 py-32" id="about">
         <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
         <div className="about-img">
            <img
               src={process.env.PUBLIC_URL + '/Images/pic.jpg'}
               alt="coding illustration"
               className="rounded-full shadow w-96 h-128 mr-auto ml-20"
            />
         </div>
         <div className="about-info">
            <h2 className="text-4xl font-bold mb-5 border-indigo-600 pb-2">
               <img src={process.env.PUBLIC_URL + '/Images/monkaS.png'} alt="👀" className="rounded-lg inline w-20 h-15"></img>
               Background Check 
            </h2>
            <p className="pb-5">
            Hello! My name is Michael and I am a gamer that has taken interest in programming.
            It all started when I was old enough to spend all my time on the computers.
            My passion emerged from all the websites and games I played and tried to understand how they were made.
            </p>
            <p className="pb-5">
            I am currently in my third year for my bachelors in <span className="text-green-600">COMPUTER ENGINEERING</span>.
            I am proficient in C++, Java, Javascript, React.js, Node.js, but what I am most confident in is my ability to learn and adapt fast.
            </p>

            <p>
            In my spare time I play games, work on personal game projects or play sports like volleyball, badminton and rock climbing.
            </p>
         </div>

        
      </div>
    </section>
  );
};

export default About;