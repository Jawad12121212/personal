import React from 'react'

const About = () => {
  return (
    <section id='About' className='lg:h-screen lg:w-[100%] md:h-[50vw] sm:h-[70vw] flex justify-center items-center gap-[5vw] max-md:flex-col px-[5vw]'>
        <div className="h-[20vw] w-[20vw] md:h-[25vw] md:w-[25vw] overflow-hidden rounded-full">
            <img className='h-full w-full object-cover object-right hover:saturate-0' src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="lg:w-[43%] max-sm:h-[40vh] max-sm:w-full sm:h-[30vw] sm:w-full md:w-[60%]">
          <h1 className='text-[5vw]'>HELLO!</h1>
          <p className='max-sm:text-xs max-md:text-sm md:text-[1.6vw] lg:text-[1.2vw]'>My name is Jawad Ahmad <span className='text-blue-600'>(Jawad)</span> student of BS Software Engineering, and I'm a Creative Frontend Developer. I specialize in user interfaces and animations. Most of the time, I create websites using React because it is very easy to use and allows the creation of reusable components. For animations, I use GSAP and Framer Motion. For smooth scrolling, I often use Locomotive Scroll, but sometimes I prefer Lenis, as it is a modern smoothing library. I have expertise in HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, and Swiper.js, along with some basic knowledge of Three.js. I have started a backend course to learn full-stack development. My goal is to first master backend development in the MERN stack, as I believe it will be easier for me.</p>
        </div>
    </section>
  )
}

export default About