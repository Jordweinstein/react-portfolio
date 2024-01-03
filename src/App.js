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
        <p>Created by Jordan Weinstein (2024) using React</p>
        </>
    );
}

export default App;