import React from 'react'
import Button from './ButtonGåTil'
import Skilt from '../Assets/board 1.png'
import './ResCard.css';


type Props = {}

const ResCard = (props: Props) => {
  return (
    <div className='card'>
      <img src={Skilt} alt="Borad" width={32}/>
      <p>POS bestillinger</p>
      <Button />
    </div>
  )
}

export default ResCard