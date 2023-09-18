import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <header className="flex justify-between py-4 bg-primary text-white fixed w-full z-10">
      <div className="flex items-center">
        
        <HashLink to={`${process.env.PUBLIC_URL}#`} className="logo text-2xl flex font-bold text-accent ml-4">
            <img src={process.env.PUBLIC_URL + '/Images/favicon-32x32.png'} alt="icon" className="w-9 h-9 ml-1 mr-3"/> 
            Michael Hong 
         </HashLink>
      </div>
      
      <nav className="flex items-center">
        <ul className="flex" >
          <li className="overflow-hidden">
            <HashLink to={`${process.env.PUBLIC_URL}#about`}>About</HashLink>
          </li>
          <li className="overflow-hidden">
            <HashLink to={`${process.env.PUBLIC_URL}#projects`}>Projects</HashLink>
          </li>
          {/* <li className="overflow-hidden">
            <HashLink to={`${process.env.PUBLIC_URL}/test`}>Blog</HashLink>
          </li> */}
          {/* <li className="overflow-hidden">
            <HashLink to={`${process.env.PUBLIC_URL}/resume`}>Contact</HashLink>
          </li> */}
          <li className="overflow-hidden">
            <Link to={`${process.env.PUBLIC_URL}/resume`}>
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;