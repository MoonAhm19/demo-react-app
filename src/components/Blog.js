import React from 'react'
import "../css/blog.css"
import img1 from '../images/logo512.png'

const Blog = () => {

    return (
        <>
            <div className="blog" id='blog' >
                <div className="blog-content" >
                    <h1>BLOG</h1>
                    <div className="blog-mid">
                        <div className="blog-left">
                            <h1>Build Your own React Website</h1>
                            <p>React is a very light weight javaScript library for Frontend Developement</p>
                        </div>
                        <div className="blog-right">
                            <img src={img1} alt="" />
                        </div>
                    </div>
                    <div className="blog-end">
                        <h1>Make Cool Websites using</h1>
                        <div className="blog-end__">
                            <div className="end__">
                                <h2>Frontend</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab, vero sapiente at blanditiis dolores quisquam sed unde, dolor possimus nobis inventore? Dolorum officiis rerum sapiente nostrum voluptatum ratione cumque?</p>
                            </div>
                            <div className="end__">
                            <h2>Beckend</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab, vero sapiente at blanditiis dolores quisquam sed unde, dolor possimus nobis inventore? Dolorum officiis rerum sapiente nostrum voluptatum ratione cumque?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog