/** @format */

import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About";
import Team from "./Components/Team";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Service from "./Components/Service";

const App = () => {
  return (
    <div className='App'>
      <Home />
      <Service />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
