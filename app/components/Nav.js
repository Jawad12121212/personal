import React from 'react'

const Nav = () => {
    return (
        <nav className='flex gap-[2vw] max-lg:flex-col'>
            {['Home', 'About', 'Project', 'Contact'].map((item, i)=>(
                <div key={i} className="elm max-lg:h-[70px] max-lg:w-[300px] overflow-hidden relative flex justify-center items-center">
                <a className='max-lg:absolute max-lg:top-[100%] text-center max-lg:text-[50px]' 
                href={`#${item}`}>{item}</a>
            </div>
            ))}
        </nav>
    )
}

export default Nav