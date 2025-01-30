import React from 'react'
import TagElem from '../components/TagElem'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Tag = ({ val, id }) => {
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.tag',
        start: 'top 50%',
        end: 'top 0%',
        scrub: 3,
      }
    });
    tl.from('#first', {
      x: '-100%'
    }, 'a')
    tl.from('#sec', {
      x: '100%'
    }, 'a')
  })
  return (
    <section className='tag lg:h-screen max-sm:h-[120vw] sm:h-[80vw] md:h-[100vw] w-full flex flex-col justify-center items-center overflow-hidden'>
      <TagElem val='CREATIVE' id='first' />
      <h1 className='text-[7vw] leading-none italic'>FRONTEND</h1>
      <TagElem val='DEVELOPER' id='sec' />
    </section>
  )
}

export default Tag