import React from "react";
import { HashLink } from 'react-router-hash-link';
import "./Intro.scss";
import {
  AiOutlineTwitter,
  // AiOutlineYoutube,
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Intro = () => {
  return (
    <section className="bg-primary px-4 text-white py-20" id="">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between ">
        <div className="md:pb-5 ">
          <h1 className="cursive text-4xl lg:text-6xl py-3">
            Yo,
            <br />I am <span className="cursive nameColor">Michael Hong </span><br/>
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

          <HashLink
            to={`${process.env.PUBLIC_URL}/#projects`}
            className="Projects"
          >
            See Projects
          </HashLink>
        </div>

        <div>
          <img src={process.env.PUBLIC_URL + '/Images/pi.jpg'} alt="pic of me lol" className="rounded-lg w-96 h-128 mr-auto ml-20"/>
        </div>
      </div>
    </section>
  );  
};

export default Intro;