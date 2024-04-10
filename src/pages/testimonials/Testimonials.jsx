import React from 'react'
import { IoLayersOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import testimoninaimg from '../../assets/images/testimonial.png'

import './Testimonials.css'

const Testimonials = () => {
  return (
    <>
        <div className='testimoninal-container'>
            <div className='testimonial-left'>
                <p className='testimonial-subhedding'>TESTIMONINALS</p>
                <h2 className='testimonial-hedding'>What They Say</h2>
                <p className='testimonial-text'>why hoose a smart home ekada paina and kinda ak technologies kindha 
"Transform your home, simplify your life with smart automation!"</p>
                <div className='testimonial-left-card-container'>
                    <div className='testimonial-left-card'>
                        <div className='testimonial-icon'><IoLayersOutline className='testimonial-icon'/></div>
                        <h4 className='testiomonial-counter'>20+</h4>
                        <p className='testiomonial-undertext'>Projects Completed</p>
                    </div>

                    <div className='testimonial-left-card'>
                        <div className='testimonial-icon'><BsPeople className='testimonial-icon'/></div>
                        <h4 className="testiomonial-counter">100%</h4>
                        <p className='testiomonial-undertext'>Customer Satisfied</p>
                    </div>
                </div>


            </div>
            <div className='testimonial-right'>
                <img src={testimoninaimg} className='testimonial-img'/>
            </div>
        </div>
      
    </>
  )
}

export default Testimonials
