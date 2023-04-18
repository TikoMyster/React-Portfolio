import React from 'react'
import Header from "../components/Header"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Projects from "../components/Projects"


function Home() {
  return (
    <>
     <Header/> 
     <Projects/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default Home