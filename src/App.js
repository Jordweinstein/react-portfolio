import React from "react"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./App.css"
const App = () => {
    return (
        <>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
        <p>Created by Jordan Weinstein (2024) using React</p>
        </>
    );
}

export default App;