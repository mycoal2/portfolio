import React from "react";
import {
  AiOutlineTwitter,
  // AiOutlineYoutube,
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Intro = () => {
  return (
    <section className="bg-primary px-4 text-white py-20">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between ">
        <div className="hero-info md:pb-5 overflow-hidden">
          <h1 className="cursive text-4xl lg:text-6xl py-3">
            Hi, 
            <br />I am <span className="cursive text-accent">M</span>ichael <span className="cursive text-accent">H</span>ong<br/>
            Future Computer Engineer
          </h1>

          <div className="flex py-5 ">
            <a
              href="https://twitter.com/TeemoHawk"
              rel="noopener noreferrer"
              target="_blank"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineTwitter size={40} />{" "}
            </a>
            <a
              href="https://www.facebook.com/MichaelHong02/"
              rel="noopener noreferrer"
              target="_blank"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineFacebook size={40} />{" "}
            </a>
            <a
              href="https://github.com/mycoal2"
              rel="noopener noreferrer"
              target="_blank"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineGithub size={40} />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/michaelhong2/"
              rel="noopener noreferrer"
              target="_blank"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineLinkedin size={40} />{" "}
            </a>
          </div>

          <a
            href="/#projects"
            className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
          >
            See Projects
          </a>
        </div>

        <div className="hero-img">
          <img src="..\Images\pic.jpg" alt="coding illustration1" className="w-96 h-128 mr-auto ml-20"/>
        </div>
      </div>
    </section>
  );  
};

export default Intro;