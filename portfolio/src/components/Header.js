import React from 'react'
import logo from "../assets/Header-Twitter.png"
import logo1 from "../assets/Header-Twitter.png"
import bg from "../assets/Silas, Kato, Remy.jpg"
import Navbar from './Navbar'
import "../App.css"



function Header() {
  return (
   <>
   <div id='home' style={{backgroundImage: `url(${bg})`}} className=' bg-center bg-cover bg-no-repeat h-screen flex flex-col '>
    <Navbar/>
    <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
      <div className="content lg:text-center">
        <div className="btn py-3">
          <button  className=' border-2 border-[#b0aaaa] font-bold text-white bg-[linear-gradient(90deg,#b004b0,#38097a)] p-4 rounded-2xl'>Welcome to my Portfolio</button>
        </div>
        <h1 className='text-white text-5xl font-bold'>Hello! I'm Chris</h1>
        <p className='text-white py-4 max-w-lg '></p>
        <button className='  text-white text-2xl' link="Socialmedia">Let's Connect <i className="fa-solid fa-arrow-right text-lg  p-[2px] "></i> </button>
      </div>
      <div className="image banner-astronout lg:hidden absolute w-[300px] flex ">
      <img className='w-96 ast-img' src={logo1} alt="" />
    
      </div>
      <div className="image banner-astronout1 lg:hidden absolute w-[300px] flex ">
     
      <img className='w-96 ast-img' src={logo} alt="" />
      </div>
   
    </div>
   </div>
   </>
  )
}

export default Header