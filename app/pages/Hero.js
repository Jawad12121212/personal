import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useState } from 'react'

const Hero = () => {
  useGSAP(()=>{
    let tl = gsap.timeline();
    tl.from('.hero p',{
      y: '100%'
    })
    tl.from('.hero .box h1 span', {
      y: '100%',
      stagger: 0.05,
      rotateX: '-160deg',
      duration: 1
    })
    tl.from('.hero .box p span', {
      opacity: 0,
      stagger: .05
    })
  })
  const [rotate, setRotate] = useState('creative frontend developer');
  const splt = rotate.split('');
  const [h1, setH1] = useState('PORTFOLIO');
  const h1splt = h1.split('');
  return (
    <section id='Home' className='hero lg:h-screen lg:w-full flex justify-center items-center flex-col max-sm:h-[60vh] sm:h-[50vh] md:h-[65vw] px-[5vw]'>
      <div className="overflow-hidden"><p className='text-zinc-400 max-lg:text-[2vw] max-md:text-[3vw]'>My Name is Jawad and I'm <span className='lg:hidden'>Creative Frontend Developer</span></p></div>
      <div style={{perspective: '1000px'}} className="box relative overflow-hidden">
      <h1 className='text-[14vw] leading-none tracking-wider'>{h1splt.map((item, i)=>(
        <span key={i} className='inline-block'>{item}</span>
      ))}</h1>
      <div className="absolute top-[50%] -translate-y-[50%] right-[-.75%] h-[14vw] w-[14vw] rounded-full flex justify-center items-center rotate-[-40deg] max-lg:hidden">
        <p className='relative h-[100%] w-[100%] uppercase text-[1.3vw]'>{splt.map((item, i)=>(
          <span key={i} style={{rotate: `${i*10}deg`}} className='absolute left-[50%] origin-[0_7vw]'>{item===' ' ? '\u00A0' : item}</span>
        ))}</p>
      </div>
      </div>
      
    </section>
  )
}

export default Hero