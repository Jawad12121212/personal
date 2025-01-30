'use client'
import React, { useEffect } from 'react'
import Hero from './pages/Hero'
import About from './pages/About'
// import LocomotiveScroll from 'locomotive-scroll';
import Work from './pages/Work';
import Tag from './pages/Tag';
import Navbar from './pages/Navbar';
import Form from './pages/Form';

const Page = () => {
  // useEffect(() => {
  //   const locomotiveScroll = new LocomotiveScroll();
    
  //   return () => {
  //     locomotiveScroll.destroy();
  //   }
  // }, []);

  return (
    <main className='font-Gilroy font-[900] bg-zinc-100 text-zinc-700'>
      <Navbar/>
      <Hero/>
      <About/>
      <Work/>
      <Tag/>
      <Form/>
    </main>
  )
}

export default Page