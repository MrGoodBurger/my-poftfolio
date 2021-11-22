import React from "react";
import Profile_pic from "../../images/Profile_Pic.JPG"
import { DiHtml5, DiCss3, DiJavascript, DiMongodb, DiReact, DiNodejs, DiFirebase } from "react-icons/di"
import { IconContext } from "react-icons";
import './AboutMe.css'

function AboutMe(){
    return(
        <div className="aboutme-container">
            <div className="aboutme-inner-container">
                <div className="aboutme-text-container">
                    <p className= "aboutme-text">Hi, My name is Trent Sanders, a front end developer from New York, NY. I enjoy bringing peoples visions to reality.</p>
                    <p>My areas of expertise are MongoDB, Express, React, Node, React Native and Firebase. My prior career was in customer service and hospitality.</p>
                </div>
                <div className="profile-pic-container">
                    <img id="profile-pic" src={Profile_pic} alt="Trent Sanders"/>
                </div>
            </div>
            <div className="technology-icon-container">
                <h1 className="technology-icon"><DiHtml5/></h1>
                <h1 className="technology-icon"><DiCss3/></h1>
                <h1 className="technology-icon"><DiJavascript/></h1>
                <h1 className="technology-icon"><DiMongodb/></h1>
                <h1 className="technology-icon"><DiReact/></h1>
                <h1 className="technology-icon"><DiNodejs/></h1>
                <h1 className="technology-icon"><DiFirebase/></h1>
            </div>
        </div>
    )
};

export default AboutMe;