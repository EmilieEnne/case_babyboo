import React from 'react'
import Button from './Button'
import './ResCard.css';


interface ResCardProps {
imageSrc: string; 
text: string;
altText: string;
buttonText: string;
buttonImage: string;
buttonAltText: string;
}

const ResCard: React.FC<ResCardProps> = ({imageSrc, text, buttonText, buttonImage, altText, buttonAltText}) => {
  return (
    <div className='card'>
      <img src={imageSrc} alt={altText} width={32}/>
      <p>{text}</p>
      <div className="button">
        <Button buttonText={buttonText} buttonImage={buttonImage} altText={buttonAltText}/>
      </div>
    </div>
  )
}

export default ResCard