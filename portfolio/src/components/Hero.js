import React from "react"
import HeroImg from "../assets/HeroImg.jpg"


const Hero = () => {
  return (
    <section className="bg-primary text-white py-32">
        <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        
        <div className="hero-info">
            <h1 className="text-2x1 lg:text-6x1">
                Hi, <br />
                I am <span className='text-accent'>C</span>hris <br />
                Web developer
            </h1>
            <p className="py-5">I am porficient in React.js and Tailwind CSS</p>

            <button className="  btn  bg-accent border-2  border-[#7477ff] text-white px-6 py-4 hover:bg-transparent ">See Projects</button>
        </div>

        <div className='hero-img'>
            <img src= {HeroImg} alt="coding illustration"className="w-[80%] ml-auto" />
        </div>
    </div>
    </section>
  )
}

export default Hero