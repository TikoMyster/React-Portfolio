import React, { useState } from 'react';
import project1 from "../assets/screenshot_Brewery_Locator.html.png"
import project2 from "../assets/Screenshot_raining_cats_and_dogs.png"
import project3 from "../assets/Screenshot _fithub.png"
import project4 from "../assets/congrats_kevin.png"

import "../App.css";
import ProjectCard from "./ProjectCard";

function Projects() {
        const [durum, setDurum] = useState(1);

        const projects = [
                {
                        id: 1,
                        title: "Brewery Locator",
                        description: "Api implementation",
                        img: project1,
                },
                {
                        id: 2,
                        title: "Raining Cats and Dogs",
                        description: "Web Development",
                        img: project2,
                },
                {
                        id: 3,
                        title: "Fithub",
                        description: "Business Startup",
                        img: project3,
                },
                {
                  id: 4,
                  title: "Congrats-Kevin",
                  description: "Web Development",
                  img: project4,
                },
        ];
return (
                <>
      <div id="projects" className="projects  bg-[#171717] text-white py-10">
        <h1 className="text-center text-4xl font-bold py-6">Portfolio</h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
          Here is some projects I have been working on as well as some information about myself.
        </p>
        <div className="flex justify-center items-center gap-4 mt-12 mb-2 ">
          <button
            onClick={() => setDurum(1)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
              durum == 1 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setDurum(2)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px] ${
              durum === 2 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }  `}
          >
            About
          </button>
          <button
            onClick={() => setDurum(3)}
            className={`font-bold text-[19px] border-2  bg-[#171717] rounded-[6px] p-[4px]  ${
              durum === 3 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""
            }`}
          >
            Servers
          </button>
        </div>
        <div className="grid grid-cols-3 p-10 gap-8 lg:grid-cols-2 tl:grid-cols-1 "> 
          {durum === 1
            ? projects.map((item, i) =>  <ProjectCard key={i} item={item} />)
            : null}
        </div> 
        {durum === 2 ? (
          <div
            id="text2"
            className="tab-pane  text-center text-white py-16 max-w-4xl mx-auto lg:p-5 "
          >
            My name is Christopher Saechao. I am a Full Stack Developer, I have experience with Javascript, CSS, SQL and very proficient in learning new languages. I enjoy learning and currently have a video game project in development. No updates on it yet but once a demo can provided, it will be previewed on youtube and in this portfolio. I am married and currently have 4 dogs: Shiba Inu (katsu), Husky (silas), German Shepherd (kato), Pembroke Welsh Corgi (Remington, remy for short).
          </div>
        ) : null}
        {durum === 3 ? (
          <div
            id="text1"
            className="tab-pane  text-center text-white py-5   lg:p-5"
          >
            I've created 4 servers, an Ark server and 3 Minecraft servers. I have managed the databases with MySql and created a react application with more information about them and how to access them.
          </div>
        ) : null}
        </div>
        </>
        );
}
export default Projects