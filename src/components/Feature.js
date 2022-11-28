import '../css/feature.css';
import p1 from '../images/p1.png';
import p2 from '../images/p2.png';
import p3 from '../images/p3.png';
import p4 from '../images/p4.png';
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

import React from 'react'

const Feature = () => {
    return (
        <>
            <div className="feature" id="feature">
                <div className="feature-content">
                    <h1>Features for Web Sites</h1>
                    <div className="cards">
                        <div className="card card1">
                            <img src={p1} alt="" />
                            <h3>Full of features</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, molestiae?</p>

                            <button>Read More</button>
                        </div>
                        <div className="card card2">
                        <img src={p2} alt="" />
                        <h3>Easy to handle</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, molestiae?</p>
                        <button>Read More</button>
                        </div>
                        <div className="card card3">
                        <img src={p3} alt="" />
                        <h3>Readability</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, molestiae?</p>
                        <button>Read More</button>
                        </div>
                        <div className="card card4">
                        <img src={p4} alt="" />
                        <h3>Flexibelity</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, molestiae?</p>
                        <button>Read More</button>
                        </div>
                    </div>
                    <div className="feature-link">
                        <a href="#">View all Features <BsFillArrowRightCircleFill/> </a>
                        
                    </div>

                </div>
            </div>
        </>
    )
}

export default Feature