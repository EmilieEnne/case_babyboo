import React from 'react'
import Download from '../Assets/20240215Group.png'
import './Button.css'
 
interface ButtonProps {
  buttonText: string;
  buttonImage: string;
  altText: string;
}

const Button: React.FC<ButtonProps> = ({ buttonText , buttonImage , altText }) => {
  return (
    <button className='btn'>
        <span>{buttonText}</span>
        <img src={buttonImage} alt={altText} />
    </button>
  )
}

export default Button