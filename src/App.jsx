import Topbar from "./components/topbar/Topbar";
import Intro from "./components/Intro/Intro"
import Portfolio from "./components/Portfolio/Portfolio";
import "./app.scss"
import Contacts from "./components/Contacts/Contacts";
import {useState} from "react";
//import Menu from "./components/Menu/Menu"

function App() {
  const [menuOpen, setMenuOpen] = useState(true)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
     {/*} <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>*/}

      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Contacts/>
      </div>
    </div>
  );
}

export default App;
