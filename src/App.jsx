import "./app.scss";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Contacts from "./components/Contacts/Contacts";
// import {useState} from "react";
//import Menu from "./components/Menu/Menu"

function App() {
  return (
    <>
      <Header/>
      <Intro/>
      <Intro/>
      <Portfolio/>
      <Contacts/>
    </>
  );
}

export default App;
