import React from 'react'
import Button from './ButtonGåTilKamp'
import './KampCard.css'
import KampBilEt from '../Assets/Rectangle 4 (1).png'

type Props = {}

const KampCard = (props: Props) => {
  return (
    <div className='kampange-card' style={{background:"brown"}}>
      <p className='tid' style={{background:'#854223'}}>
        August 2022- september 2022
      </p>
      <p className="kamp-titel">Classic Senge og Skabe</p>
      <Button />
    </div>
  )
}

export default KampCard