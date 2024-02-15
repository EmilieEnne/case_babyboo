import React from 'react'
import Button from './ButtonGåTil'
import Bolt from '../Assets/bolt 1.png'


type Props = {}

const ResCard = (props: Props) => {
  return (
    <div className='card'>
      <img src={Bolt} alt="Bolt vector" />
      <p>Reservedele</p>
      <Button />
    </div>
  )
}

export default ResCard