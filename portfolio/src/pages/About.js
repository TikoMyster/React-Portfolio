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
                    My name is Christopher Saechao. I am a Full Stack Developer, I have experience with Javascript, CSS, SQL and very proficient in learning new languages. 
                </p>
                <p className="pb-5">
                    I enjoy learning and currently have a video game project in development. No updates on it yet but once a demo can provided, it will be previewed on youtube and in this portfolio. 
                </p>
                <p className="pb-5">
                    I am married and currently have 4 dogs: Shiba Inu (katsu), Husky (silas), German Shepherd (kato), Pembroke Welsh Corgi (Remington, remy for short). 
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