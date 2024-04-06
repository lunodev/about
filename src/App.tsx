import React, {useEffect} from 'react';
import './App.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {Navigate, Route, Routes, useNavigate} from "react-router-dom"
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import {JsonData} from './data/data'
import Blog from './components/pages/Blog/Blog';
import useActivePage from "./hooks/useActivePage";
import {ACTIVE_PAGE} from "./constants/pages";


function App() {
    const {updateActivePageOnStore} = useActivePage();
    const navigate = useNavigate();


    useEffect(() => {
        // updateActivePageOnStore(ACTIVE_PAGE.HOME)
        // navigate(`/about/${ACTIVE_PAGE.ABOUT.toLowerCase()}`)
    }, []);


    return (
        <div className="App">
            <Routes>
                <Route path={"about/blog"} element={<Blog data={JsonData}/>}/>
                <Route path={"about/contact"} element={<Contact data={JsonData}/>}/>
                <Route path={"about/home"} element={<Home data={JsonData}/>}/>
                <Route path={"about/about"} element={<About data={JsonData}/>}/>
                <Route path={"about"} element={<Home data={JsonData}/>}/>
                <Route
                    path={"about/*"}
                    element={<Navigate to={"/about"} replace/>}
                />
            </Routes>
        </div>
    );
}

export default App;
