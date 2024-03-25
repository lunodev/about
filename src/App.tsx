import React from 'react';
import logo from './logo192.png';
import './App.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ResponsiveAppBar from "./ResponsiveAppBar/ResponsiveAppBar";
import { Switch, Route } from "react-router-dom"


function App() {
    return (
        <div className="App">

            <ResponsiveAppBar/>
            <header className="App-header">
                <h1>{"Sergio Ariel Juarez"}</h1>
            <p>
                {"Proximamente..."}
            </p>
            </header>


        </div>
    );
}

export default App;
