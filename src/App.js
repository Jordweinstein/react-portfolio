import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

import "./App.css";

const App = () => {
    return (
        <Router basename="/react-portfolio">
            <Navbar />
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <footer>
                <p>Created by Jordan Weinstein (2024) using React</p>
            </footer>
        </Router>
    );
};

export default App;