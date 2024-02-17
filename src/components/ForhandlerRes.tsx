import React from 'react'
import ResCard from './ResCard'
import './ForhandlerRes.css'
import Bord from '../Assets/board 1.png'
import Arrow from '../Assets/20240215arrow-right 1.png'
import Billeder from '../Assets/img-stack 1.png'
import Download from '../Assets/Group (copy 1).png'
import Phone from '../Assets/mobile-design 1.png'
import Bolt from '../Assets/bolt 1.png'


type Props = {}

const ForhandlerRes = (props: Props) => {
  return (
    <div className='forhandler-wrapper'>
        <p className='forhandler-title'>Dine forhandler ressourcer for <strong>DYLAN puslepude</strong></p>
      <div>
        <ResCard 
          imageSrc={Bord} 
          altText='Tavle'
          text='POS bestilling' 
          buttonText='Gå til' 
          buttonImage={Arrow} 
          buttonAltText='Pil'/>
        <ResCard 
          imageSrc={Billeder} 
          altText='Billeder'
          text='Billedpakke' 
          buttonText='Download' 
          buttonImage={Download} 
          buttonAltText='Download vector'/>
        <ResCard 
          imageSrc={Phone} 
          altText='Smart-phone vector'
          text='SOME kampange' 
          buttonText='Download' 
          buttonImage={Download} 
          buttonAltText='Download vector'/>
        <ResCard 
          imageSrc={Bolt} 
          altText='Bolt'
          text='Reservedele' 
          buttonText='Gå til' 
          buttonImage={Arrow} 
          buttonAltText='Pil'/>
      </div>    
    </div>
  )
}

export default ForhandlerRes