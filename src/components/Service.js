import React from 'react'
import '../css/service.css';
import { FaLongArrowAltRight } from 'react-icons/fa'

const Service = () => {
  return (
    <>
        <div className="service" id="service">
            <div className="service-content">
                <h1>Our Services</h1>
                <h3>Our Customers, Our Success</h3>
                <div className="service-start">
                  <div className="s-wrap">
                    <h4>Do you offer Managed WordPress hosting?</h4>
                    <p>The term "Managed WordPress" has been so overused, like "cloud hosting", that the true definition has been lost in translation. So instead, we chose to name our service Smarter WordPress hosting as we believe it is an accurate description of what we provide.</p>
                  </div>
                  <div className="s-wrap">
                    <h4>Do you offer Managed WordPress hosting?</h4>
                    <p>The term "Managed WordPress" has been so overused, like "cloud hosting", that the true definition has been lost in translation. So instead, we chose to name our service Smarter WordPress hosting as we believe it is an accurate description of what we provide.</p>
                  </div>
                  <div className="s-wrap">
                    <h4>Do you offer Managed WordPress hosting?</h4>
                    <p>The term "Managed WordPress" has been so overused, like "cloud hosting", that the true definition has been lost in translation. So instead, we chose to name our service Smarter WordPress hosting as we believe it is an accurate description of what we provide.</p>
                  </div>
                  <div className="s-wrap">
                    <h4>Do you offer Managed WordPress hosting?</h4>
                    <p>The term "Managed WordPress" has been so overused, like "cloud hosting", that the true definition has been lost in translation. So instead, we chose to name our service Smarter WordPress hosting as we believe it is an accurate description of what we provide.</p>
                  </div>
                </div>
                <div className="service-end">
                  <button className='s-btn'><a href="#"> Top Services <FaLongArrowAltRight/></a></button>
                  <button className='s-btn'><a href="#"> Get Services</a></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Service