import React from 'react'
import Arrow from '../Assets/20240215arrow-right 1.png'
 
type Props = {}

const Button = (prop : Props) => {
  return (
    <button className='btn'>
        <span>Gå til</span>
        <img src={Arrow} alt="pil" />
    </button>
  )
}

export default Button