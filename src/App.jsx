import "./app.scss";
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Game from "./components/Game/Game";
// import {useState} from "react";


function App() {
  return (
    <>
      <Header/>
      <Routes>
         <Route path="/" element={<><Intro/><About/></>} />
         <Route path="/test" element={<Game></Game>} />
      </Routes>

    </>
  );
}

export default App;
