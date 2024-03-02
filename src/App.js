import React, { useState } from "react";
import './App.css'
import Navbar from "./componnent/navbar/navbar";
import Section from "./componnent/section/section";

function App() {
    const [slide, setSlide] = useState(false);

    const clickSlide = () => {
        setSlide(!slide);
    };

    return (
        <div>
            <Navbar slide={slide} clickSlide={clickSlide}/>
            <Section slide={slide}/>
        </div>
    );
}

export default App;
