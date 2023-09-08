import "./app.scss";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
// import {useState} from "react";


function App() {
  return (
    <>
      <Header/>
      <Intro/>
      <About/>
      <Intro/>
      <About/>
    </>
  );
}

export default App;
