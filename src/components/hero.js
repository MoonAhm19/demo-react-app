import React from 'react'
import '../css/hero.css'
import img from '../images/box2.png'

const Hero = () => {
    return (
        <>
            <div className="hero" id='home'>
                <div className="hero-content">
                    <div className="hero-right">
                        <img src={img} alt="" />
                    </div>
                    <div className="hero-left">
                        <h1>Dream Big</h1>
                        <h3>Build Big</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, totam laudantium laboriosam dolorum quasi repudiandae nostrum corporis quod magni, numquam deleniti at itaque ullam asperiores. Itaque molestias libero doloremque ipsam!</p>
                        <div className="btn">
                            <button className='btn1'>Features</button>
                            <button className='btn1'>Read More</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Hero