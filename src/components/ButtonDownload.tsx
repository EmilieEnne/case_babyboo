import React from 'react'
import Download from '../Assets/Group (copy 1).png'
import './Button.css'
 
type Props = {}

const Button = (prop : Props) => {
  return (
    <button className='btn'>
        <span>Download</span>
        <img src={Download} alt="pil" />
    </button>
  )
}

export default Button