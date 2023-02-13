import React from 'react'
import project1 from "../assets/screenshot_Brewery_Locator.html.png"
import project2 from "../assets/Screenshot_raining_cats_and_dogs.png"
import project3 from "../assets/Screenshot _fithub.png"


const Projects = () => {
    return (
        <section className="bg-primary text-white py-32" id="projects">
            <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
            
            <div className="about-info mb-5">
                <h2 className="text-[30px] font-bold mb-5 divide- border-b-[5px] w-[114px] border-indigo-600 pb-2">
                    Projects                 
                </h2>
                <p className="pb-5">
                    My name is Christopher Saechao. 
                </p>                               
            </div>

            <div className="about-img"></div>
        </div>

        <div className="projects container grid grid-cols-3 pl-20 space-x-9">
                <div className="rounded-lg overflow-hidden">
                        <a href="https://tikomyster.github.io/Brewery-Locator-App/">
                                <img src={project1} alt="" />
                        </a>
                </div>
                <div className="rounded-lg overflow-hidden">
                        <a href="https://raining-cats-dogs.herokuapp.com">
                                <img src= {project2} alt="" />
                        </a>
                </div>
                <div className="rounded-lg overflow-hidden">
                        <a href="https://fithub.herokuapp.com">
                                <img src={project3} alt="" />
                        </a>
                </div>
        </div>
        </section>
      )
}

export default Projects