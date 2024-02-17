import React from 'react'
import KampCard from './KampCard'
import './Kampanger.css'
import Megafon from '../Assets/Group (1).png'
import August from '../Assets/August.png'
import Timeglas from '../Assets/hourglass 1.png'
import Oktober from '../Assets/Oktober.png'
import December from '../Assets/December.png'

type Props = {}

const Kampanger = (props: Props) => {
  return (
    <div className="Kampanger">
       <div className="titel">
        <img src={Megafon} alt="" />
        <h2>KAMPANGER</h2>
        </div>
        <KampCard 
          backgroundImage={August}
          periodeText='August 2022-September 2022'
          periodeBgColor='#854223'
          kampTitel='CLASSIC SENGE OG SKABE'/>
        <KampCard 
          backgroundImage={Oktober}
          periodeImage={Timeglas}
          periodeText='Oktober 2022'
          periodeBgColor='#C8C5BE'
          kampTitel='WALLY PUSLEBORDE'/>
        <KampCard 
          backgroundImage={December}
          periodeImage={Timeglas}
          periodeText='December 2022'
          periodeBgColor='#C8C5BE'
          kampTitel='ALLE TEKSTILER'/>
    </div>
  )
}

export default Kampanger