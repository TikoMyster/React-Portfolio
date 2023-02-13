import React from "react"
import HeroImg from "../assets/HeroImg.jpg"

import {
  AiOutlineGithub
} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-primary text-white py-32">
        <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        
        <div className="hero-info pb-5 md:pb-0">
            <h1 className="text-4x1 lg:text-6x1">
                Hi, <br />
                I'm <span className='text-accent'>C</span>hris, <br />
                Full Stack Developer
            </h1>
            <p className="py-5">I am porficient in React.js and Tailwind CSS</p>
        <div className="flex py-5 ">
            <a
              href="https://github.com/TikoMyster"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineGithub size={40} />{" "}
            </a>
            
            
          </div>
            
        </div>

        <div className='hero-img'>
            <img src= {HeroImg} alt="coding illustration"className="w-[80%] ml-auto" />
        </div>
    </div>
    </section>
  )
}

export default Hero