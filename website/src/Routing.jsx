import React from "react";
import Home from './Home';
import {Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Contact from './pages/Contact';
import Services from './pages/Services';
import Error from "./pages/Error";


const Routing = () => {
    return(
        <>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/home" element={<Home/>}/>
                <Route exact path="/services" element={<Services />}/>
                <Route exact path="/about" element={<About />}/>
                <Route exact path="/contact" element={<Contact />}/>
                <Route exact path="*" element={<Error />}/>
            </Routes>
        </>
    );
}

export default Routing;