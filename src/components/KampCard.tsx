import React from 'react'
import Button from './Button'
import './KampCard.css'
import KampBilEt from '../Assets/Rectangle 4 (1).png'
import Arrow from '../Assets/20240215arrow-right 1.png'

interface KampCardProps {
  backgroundImage: string;
  periodeText: string;
  periodeImage?: string;
  periodeBgColor: string; 
  kampTitel: string;
}

const KampCard: React.FC<KampCardProps> = ({backgroundImage, periodeText, periodeImage, periodeBgColor, kampTitel}) => {
  return (
    <div className='kampange-card' style={backgroundImage ? {backgroundImage: `url(${backgroundImage})`} : undefined}>
      <p className='tid' style={{background: periodeBgColor}}>
        {periodeText}
      </p>
      <img src={periodeImage} alt="" />
      <p className="kamp-titel">{kampTitel}</p>
      <Button buttonText="Gå til Kampange" buttonImage={Arrow} altText='Pil'/>
    </div>
  )
}

export default KampCard