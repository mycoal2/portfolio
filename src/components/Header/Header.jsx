import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between py-4 bg-primary text-white fixed w-full z-10">
      <div className="flex items-center">
        <img src={process.env.PUBLIC_URL + '/Images/favicon-32x32.png'} alt="icon" className="w-9 h-9 ml-3"/>
        <a href={`${process.env.PUBLIC_URL}`} className="logo text-2xl font-bold text-accent ml-4"> Michael Hong </a>
      </div>
      
      <nav className="flex items-center">
        <ul className="flex" >
          <li className="overflow-hidden">
            <a href={`${process.env.PUBLIC_URL}/#about`}>About</a>
          </li>
          <li className="overflow-hidden">
            <a href={`${process.env.PUBLIC_URL}/#projects`}>Projects</a>
          </li>
          <li className="overflow-hidden">
            <Link to={`${process.env.PUBLIC_URL}/test`}>Blog</Link>
          </li>
          <li className="overflow-hidden">
            <a href={`${process.env.PUBLIC_URL}/#contact`}>Contact</a>
          </li>
          <li className="overflow-hidden">
            <a href="..\src\Assets\Files\Resume -Michael_Hong2.pdf" target="_blank" without rel="noreferrer">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;