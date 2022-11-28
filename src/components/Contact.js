import React from 'react';
import "../css/contact.css"
import { BsFacebook, BsGithub, BsTwitter, BsWhatsapp } from "react-icons/bs"

const contact = () => {
    return (
        <>
            <div className="contact" id="contact">
                <div className="contact-content">
                    <h1>Contact Us</h1>
                    <div className="contact-info">
                        <div className="contact-left">
                            <span>eliasahmed@gmail.com</span>
                            <span className='git'>Github Profile : https://github.com/MoonAhm19</span>
                            <span>+91-8858969644</span>
                            <h3>
                            <BsFacebook/>
                            <BsGithub/>
                            <BsTwitter/>
                            <BsWhatsapp/>
                            </h3>
                        </div>
                        <div className="contact-right">
                            <h2>Technologies for web-development</h2>
                            <div className="list">
                                <span>html</span>
                                <span>Css</span>
                                <span>Js</span>
                                <span>NodeJS</span>
                                <span>ExpressJS</span>
                                <span>ReactJS</span>
                            </div>
                        </div>
                    </div>
                    <div className="items">
                        <h4>Created By Elias Ahmed</h4>
                    <h4>Technologies Used for this website : </h4>
                    <h5>ReactJS, Css, React-Icons, React-States</h5>
                    </div>
                    

                </div>
            </div>
        </>
    )
}

export default contact