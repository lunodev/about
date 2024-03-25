import React from 'react';
import './App.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"about/contact"} element={ <Contact/> } />
                <Route path={"about/home"} element={ <Home/> } />
                <Route path={"about/about"} element={ <About/> } />
            </Routes>
        </div>
    );
}

export default App;
