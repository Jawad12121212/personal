import React, { useState } from 'react'

const Elem = ({val, img}) => {
    const [projects, setProjects] = useState(val);
    const projectsSplt = projects.split('');
    return (
        <div className="elm relative py-[4vw] border-b-[1px] border-black">
            <div className="imgBox max-lg:hidden absolute top-[50%] -translate-y-[50%] right-0 h-[20vw] w-[20vw] scale-0 rounded-3xl overflow-hidden">
                <img className='h-full w-full object-cover object-center' src={img} />
            </div>
            <div style={{perspective: '1000px'}} className="lg:h-[11.3vh] w-full md:h-[5.3vw] sm:h-[6vw] 
            max-sm:h-[6vw] overflow-hidden">
            <h1 style={{perspective: '1000px'}} className='text-[6vw] leading-none'>{projectsSplt.map((item, i) => (
                <span key={i} className='inline-block'>{item === ' ' ? '\u00A0' : item}</span>
            ))}</h1>
            <h2 style={{perspective: '1000px'}} className='text-[6vw] leading-none'>{projectsSplt.map((item2, ii) => (
                <span key={ii} className='inline-block'>{item2 === ' ' ? '\u00A0' : item2}</span>
            ))}</h2>
        </div>
        </div>
    )
}

export default Elem