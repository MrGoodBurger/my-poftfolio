import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Intro from "../Intro/Intro";
import './Body.css';


function Body(){
    return(
        <div className='body-container'>
            <div>
                <Intro
                />
            </div>
            <div>
                <AboutMe
                />
            </div>
        </div>
    )
};

export default Body;