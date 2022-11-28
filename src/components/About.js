import React from 'react'
import "../css/about.css"
import { IoPersonCircle } from "react-icons/io5"

const About = () => {
    return (
        <>
            <div className="about" id="about">
                <div className="about-content">
                    <h1>About Us</h1>
                    <div className="about-info">
                        <div className="about-left">
                            <IoPersonCircle />
                            <span>
                                <h3>Name</h3>
                                <h4>Elias Ahmed</h4>
                                <h6>Age : 24 yrs</h6>
                            </span>
                        </div>
                        <div className="about-right">
                            <h2>I'm a web developer</h2>
                            <p>I build cool websites using HTML, CSS, JavaScript, NodeJS, ReactJS, ExpressJs, MongoDB, etc...</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default About