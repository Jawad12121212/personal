import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Elem from '../components/Elem';
gsap.registerPlugin(ScrollTrigger);

const Work = ({val, img}) => {
    useGSAP(() => {
        gsap.from('.work .had h1', {
            y: '100%',
            scrollTrigger: {
                trigger: '.work',
                start: 'top 80%',
                end: 'top 70%',
                scrub: true,
            }
        })
    })
    useEffect(() => {
        let elm = document.querySelectorAll('.projects .elm')
        elm.forEach((item, i) => {
            let h1Span = item.querySelectorAll('h1 span')
            let h2Span = item.querySelectorAll('h2 span')
            let elmBox = item.querySelector('.imgBox')
            item.addEventListener('mouseenter', () => {
                gsap.to(elmBox, {
                    scale: 1,
                    duration: 1,
                    ease: 'power4.inOut'
                })
                let tl = gsap.timeline()
                tl.to(h1Span, {
                    y: '-100%',
                    rotateX: '90deg',
                    stagger: .03,
                    duration: 1,
                    ease: 'power4.inOut'
                }, 'a')
                tl.to(h2Span, {
                    y: '-100%',
                    rotateX: '0deg',
                    stagger: .03,
                    duration: 1,
                    ease: 'power4.inOut'
                }, 'a')
            })
            item.addEventListener('mouseleave', () => {
                gsap.to(elmBox, {
                    scale: 0,
                    duration: 1,
                    ease: 'power4.inOut'
                })
                let tl = gsap.timeline()
                tl.to(h2Span, {
                    y: '0%',
                    stagger: .03,
                    rotateX: '90deg',
                    duration: 1,
                    ease: 'power4.inOut'
                }, 'a')
                tl.to(h1Span, {
                    y: '0%',
                    stagger: .03,
                    rotateX: '0deg',
                    duration: 1,
                    ease: 'power4.inOut'
                }, 'a')
            })
        })
    }, []);
    return (
        <section id='Project' className='work lg:h-[100vh] md:h-[45vw] w-full flex flex-col justify-between px-[5vw]'>
            <div className="had overflow-hidden">
                <h1 className='text-[3vw] leading-none uppercase'>Personal Projects</h1>
            </div>
            <div className="projects h-[90%] w-full">
                <Elem val='ABHISHEK JHA' img='/img/1.png'/>
                <Elem val='SECOND PROJECT'/>
                <Elem val='THIRD PROJECT'/>
            </div>
        </section>
    )
}

export default Work