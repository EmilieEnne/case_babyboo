import React from 'react'
import KampCard from './KampCard'
import './Kampanger.css'
import Megafon from '../Assets/Group (1).png'

type Props = {}

const Kampanger = (props: Props) => {
  return (
    <div className="Kampanger">
       <div className="titel">
        <img src={Megafon} alt="" />
        <h2>KAMPANGER</h2>
        </div>
        <KampCard />
        <KampCard />
        <KampCard />
    </div>
  )
}

export default Kampanger