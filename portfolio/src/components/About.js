import React from 'react'
import AboutImg from '../assets/info.jpeg'

const About = () => {
    return (
        <section className="bg-secondary text-white py-32" id="about">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
            
            <div className="about-info">
                <h2 className="text-[30px] font-bold mb-5 divide- border-b-[5px] w-[150px] border-indigo-600 pb-2">
                    About Me                  
                </h2>
                <p className="pb-5">
                    My name is Christopher Saechao. 
                </p>
                <p className="pb-5">
                    My name is Christopher Saechao. 
                </p>
                <p className="pb-5">
                    My name is Christopher Saechao. 
                </p>
    
                
            </div>
    
            <div className='hero-img'>
                <img src= {AboutImg} alt="coding illustration"className="w-[80%] md:ml-auto rounded-lg overflow-hidden" />
            </div>
        </div>
        </section>
      )
}

export default About