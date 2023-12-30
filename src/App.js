import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './App.css';

const App = () => {
    return (
        <>
        <Navbar/>
        <About/>
        <Skills />
        <Projects />
        <Contact />
        </>
    );
}

export default App;