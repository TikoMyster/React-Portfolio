import React from 'react'

const Contact = () => {
  return (
    <section className='bg-secondary py-32' id="contact">
        <div className='text-center md:w-[80%] mx-auto text-white'>
                <h2 className="text-[30px] font-bold mb-5 divide- border-b-[5px] mx-auto w-[164px] border-indigo-600 pb-2">
                    Contact Me 
                </h2>
                <p>
                    
                </p>

                <p className='py-2'>
                    <span className='font-bold'>Email: </span> tikomyster20@gmail.com
                </p>
                <p className='py-2'>
                    <span className='font-bold'>Phone: </span> (503)-739-4674
                </p>
                <button className="button font-bold underline"id="resume">
                    <a
                        className="button"
                        href="../assets/Saechao_Resume.pdf"
                        download = "Saechao_Resume.pdf"
                        >
                        Download Resume
                    </a>
                </button>
        </div>
    </section>
    
  )
}

export default Contact