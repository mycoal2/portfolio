import "./app.scss";
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Game from "./components/Game/Game";
import Project from "./components/Project/Project";
// import {useState} from "react";


function App() {
  return (
    <>
      <Header/>
      <Routes>
         <Route path={process.env.PUBLIC_URL} element={<><Intro/><About/><Project/></>} />
         <Route path={`${process.env.PUBLIC_URL}/test`} element={<Game></Game>} />
      </Routes>

    </>
  );
}

export default App;