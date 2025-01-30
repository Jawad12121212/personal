import React, { useState } from 'react'

const TagElem = ({val, id}) => {
    const [tag, setTag] = useState(val)
    const tagName = tag.split('')
  return (
    <h1 id={id} className='text-[10vw] leading-none'>{tagName.map((item, i)=>(
        <span key={i} className='inline-block hover:scale-[1.2] duration-500'>{item}</span>
    ))}</h1>
  )
}

export default TagElem